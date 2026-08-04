import { useCallback, useMemo, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config/gemini";
import type { SimulationFormData } from "../data/simulation";
import { formatCurrency, parseCurrency } from "../utils/currency";
import { calcMonthlySavings } from "../utils/simulation";

export interface AIAnalysisResult {
  analysis: string;
  loading: boolean;
  error: string | null;
}

const getCacheKey = (formData: SimulationFormData) =>
  JSON.stringify({
    income: formData.income,
    expenses: formData.expenses,
    debts: formData.debts,
    goalName: formData.goalName,
    goalAmount: formData.goalAmount,
    goalDeadline: formData.goalDeadline,
  });

const getFriendlyErrorMessage = (rawError: string) => {
  const lower = rawError.toLowerCase();

  if (
    lower.includes("api key not valid") ||
    lower.includes("api key invalid")
  ) {
    return "Chave de API inválida. Verifique seu arquivo .env.local e gere uma nova chave se necessário.";
  }

  if (
    lower.includes("quota") ||
    lower.includes("rate limit") ||
    lower.includes("exceeded")
  ) {
    return "Sua cota do Gemini foi excedida. Verifique o plano/billing no Google Cloud e tente novamente.";
  }

  if (
    lower.includes("network") ||
    lower.includes("timeout") ||
    lower.includes("fetch")
  ) {
    return "Falha de rede ao gerar a análise. Verifique a conexão e tente novamente.";
  }

  return rawError;
};

export const useAIAnalysis = () => {
  const [analysis, setAnalysis] = useState<AIAnalysisResult>({
    analysis: "",
    loading: false,
    error: null,
  });
  const [hasCachedAnalysis, setHasCachedAnalysis] = useState(false);
  const requestIdRef = useRef(0);
  const cacheRef = useRef(new Map<string, string>());

  const generateAnalysis = useCallback(
    async (formData: SimulationFormData, options?: { force?: boolean }) => {
      const cacheKey = getCacheKey(formData);
      const cached = cacheRef.current.get(cacheKey);

      if (cached && !options?.force) {
        setAnalysis({ analysis: cached, loading: false, error: null });
        setHasCachedAnalysis(true);
        return;
      }

      if (!GEMINI_API_KEY) {
        setAnalysis({
          analysis: "",
          loading: false,
          error:
            "Chave de API não configurada. Copie .env.example para .env.local e insira VITE_GEMINI_API_KEY=YOUR_KEY. Reinicie o servidor após atualizar.",
        });
        return;
      }

      const currentRequestId = ++requestIdRef.current;
      setAnalysis({ analysis: "", loading: true, error: null });

      try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const income = parseCurrency(formData.income);
        const expenses = parseCurrency(formData.expenses);
        const debts = parseCurrency(formData.debts);
        const monthlySavings = calcMonthlySavings(formData);
        const goalAmount = parseCurrency(formData.goalAmount);
        const goalDeadline = parseInt(formData.goalDeadline || "0", 10);
        const monthsToGoal =
          monthlySavings > 0 ? Math.ceil(goalAmount / monthlySavings) : null;

        const prompt = `Você é um consultor financeiro experiente. Analise o seguinte perfil financeiro de um cliente em português brasileiro e forneça uma análise clara, otimista e acionável:

DADOS DO CLIENTE:
- Renda Mensal: R$ ${formatCurrency(income)}
- Despesas Fixas: R$ ${formatCurrency(expenses)}
- Dívidas/Parcelas: R$ ${formatCurrency(debts)}
- Economia Mensal Possível: R$ ${formatCurrency(monthlySavings)}
- Meta: ${formData.goalName}
- Valor da Meta: R$ ${formatCurrency(goalAmount)}
- Prazo Desejado: ${goalDeadline} meses
- Tempo Estimado (economia atual): ${
          monthsToGoal
            ? `${monthsToGoal} meses`
            : "Não possível com economia atual"
        }

Por favor, forneça:
1. Um resumo do perfil financeiro do cliente (2-3 linhas)
2. Análise se a meta é viável no prazo desejado
3. 2-3 recomendações práticas e específicas
4. Um incentivo motivacional

Responda em tom profissional mas amigável. Use linguagem clara e evite jargão técnico.`;

        const result = await model.generateContent(prompt);
        const responseText =
          result.response.text() ||
          "Não foi possível gerar análise no momento.";

        if (currentRequestId !== requestIdRef.current) {
          return;
        }

        cacheRef.current.set(cacheKey, responseText);
        setHasCachedAnalysis(true);
        setAnalysis({ analysis: responseText, loading: false, error: null });
      } catch (err) {
        if (currentRequestId !== requestIdRef.current) {
          return;
        }

        const rawMessage =
          err instanceof Error ? err.message : "Erro desconhecido";
        setAnalysis({
          analysis: "",
          loading: false,
          error: `Erro ao gerar análise: ${getFriendlyErrorMessage(
            rawMessage,
          )}`,
        });
      }
    },
    [],
  );

  return { ...analysis, generateAnalysis, hasCachedAnalysis };
};
