# 🚀 Instalação e Configuração - Google Gemini API

## ✅ Passos para Configurar

### 1️⃣ Instalar Dependências

```bash
pnpm install
```

Isso irá instalar o pacote `@google/generative-ai` que foi adicionado ao `package.json`.

### 2️⃣ Obter a Chave de API

1. Visite: **https://aistudio.google.com/app/apikey**
2. Faça login com sua conta Google
3. Clique em **"Create API Key"**
4. Copie a chave gerada

### 3️⃣ Configurar a Variável de Ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua `your_api_key_here` pela sua chave de API:
   ```
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```
3. Salve o arquivo

### 4️⃣ Iniciar o Projeto

```bash
pnpm dev
```

## 🧪 Testando a Funcionalidade

1. Abra o aplicativo no navegador (normalmente http://localhost:5173)
2. Preencha o formulário de simulação
3. Ao chegar na página de resultados, você verá um card com **"Análise com IA Generativa"**
4. A IA irá analisar seu perfil financeiro e gerar insights personalizados

## ⚠️ Observações Importantes

- ✅ O arquivo `.env.local` está no `.gitignore` e não será enviado para o Git
- ✅ A chave de API está protegida e só funciona no seu domínio configurado
- ✅ Se houver erro, verifique se a chave está correta no `.env.local`
- ✅ A API do Gemini também depende de cotas e billing no Google Cloud; se você receber erro de cota, ative billing e ajuste quota no console

## 🎨 Componentes Adicionados

- `src/config/gemini.ts` - Configuração da API
- `src/hooks/useAIAnalysis.tsx` - Hook para análise IA
- `src/components/features/SimulationResults/AIAnalysisCard.tsx` - Componente de exibição
- `.env.local` - Variáveis de ambiente (não será versionado)

## 📝 Como Funciona

Quando você completa a simulação, a IA:

1. ✓ Recebe seus dados financeiros
2. ✓ Analisa seu perfil (renda, despesas, dívidas, meta)
3. ✓ Verifica se a meta é viável no prazo
4. ✓ Fornece 2-3 recomendações práticas
5. ✓ Oferece um incentivo motivacional

Tudo em português brasileiro! 🇧🇷

---

**Dúvidas?** Verifique se a chave de API está correto no `.env.local`
