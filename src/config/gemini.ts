// Configuração do Google Gemini API
// Crie uma chave de API em: https://aistudio.google.com/app/apikey

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

if (!GEMINI_API_KEY) {
  console.warn(
    "VITE_GEMINI_API_KEY não configurada. A análise IA não funcionará. Configure em .env.local",
  );
}
