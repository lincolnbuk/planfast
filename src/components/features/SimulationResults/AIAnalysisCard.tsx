import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useAIAnalysis } from "../../../hooks/useAIAnalysis";
import type { SimulationFormData } from "../../../data/simulation";

interface AIAnalysisCardProps {
  formData: SimulationFormData;
}

export function AIAnalysisCard({ formData }: AIAnalysisCardProps) {
  const { analysis, loading, error, generateAnalysis, hasCachedAnalysis } =
    useAIAnalysis();

  useEffect(() => {
    generateAnalysis(formData);
  }, [formData, generateAnalysis]);

  if (error) {
    return (
      <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
        <div className="flex items-start gap-2">
          <Sparkles className="mt-1 flex-shrink-0 text-orange-600" size={20} />
          <div className="flex-1">
            <h3 className="font-semibold text-orange-900">
              Análise não disponível
            </h3>
            <p className="mt-1 text-sm text-orange-800">{error}</p>
            <button
              type="button"
              onClick={() => generateAnalysis(formData, { force: true })}
              className="mt-4 inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-blue-600" size={24} />
        <div>
          <h2 className="text-lg font-semibold text-blue-900">
            Análise com IA Generativa
          </h2>
          {hasCachedAnalysis && (
            <p className="text-xs text-blue-700">
              Usando análise em cache para reduzir chamadas repetidas.
            </p>
          )}
        </div>
      </div>

      {loading ? (
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-blue-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-blue-200"></div>
          <div className="h-4 w-4/6 animate-pulse rounded bg-blue-200"></div>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
            {analysis}
          </p>
        </div>
      )}

      {!loading && (
        <button
          type="button"
          onClick={() => generateAnalysis(formData, { force: true })}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Regerar análise
        </button>
      )}
    </div>
  );
}
