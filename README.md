# PlanFast — Financial Educator using React & Generative AI / Educador Financeiro com React & IA Generativa

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)

---

## Português

### O que é

O PlanFast é uma aplicação web de planejamento financeiro pessoal feita com React + TypeScript. A aplicação ajuda pessoas a simular metas financeiras a partir de renda, despesas e dívidas, o[...]

### Principais funcionalidades

- Formulário de entrada com renda, despesas, dívidas e meta
- Geração de simulações com cálculo de economia mensal e prazo
- Histórico local de simulações (armazenamento em localStorage)
- Rotas para formulário, resultados e histórico
- Formatação de valores em moeda brasileira
- UI responsiva com Tailwind CSS e ícones via Lucide
- 🤖 **Análise com IA Generativa** usando Google Gemini para insights personalizados

### IA Generativa - Google Gemini

O PlanFast agora integra o **Google Gemini 2.0 Flash** para fornecer análises financeiras inteligentes e personalizadas:

#### O que a IA faz:

- ✅ Analisa seu perfil financeiro (renda, despesas, dívidas)
- ✅ Verifica se sua meta é viável no prazo desejado
- ✅ Oferece 2-3 recomendações práticas e específicas
- ✅ Fornece motivação e insights em português brasileiro

#### Como usar:

1. Complete o formulário de simulação
2. Na página de resultados, você verá um card com "Análise com IA Generativa"
3. A IA irá analisar seu perfil em tempo real

#### Configuração:

Para habilitar a IA, você precisa:

1. Obter uma chave de API gratuita em: https://aistudio.google.com/app/apikey
2. Criar um arquivo `.env.local` na raiz do projeto:
   ```
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```
3. Instalar dependências: `pnpm install`

> Nota: o Google Gemini também exige cotas ativas no projeto. Se receber erros de cota/excedido, configure billing em https://console.cloud.google.com/ e verifique `APIs & Services` → `Quotas` [...]

Veja [SETUP_GEMINI.md](./SETUP_GEMINI.md) para instruções completas.

### Tecnologias

- Linguagem: TypeScript (≈92% do código)
- Framework: React 19 + Vite 8
- Estilização: Tailwind CSS
- IA Generativa: Google Gemini 2.0 Flash
- Outras libs importantes: react-router-dom, lucide-react, @fontsource/inter, @google/generative-ai

Versões principais (ver package.json):

- react 19.2.6
- typescript ~6.0.2
- vite 8.0.12
- tailwindcss 4.3.0
- @google/generative-ai 0.21.0

### Como rodar (desenvolvimento)

Clone, instale dependências e inicie o servidor de desenvolvimento:

```bash
git clone https://github.com/lincolnbuk/planfast.git
cd planfast
npm install
npm run dev
```

(O projeto inclui pnpm lockfile; se preferir pnpm: `pnpm install` e `pnpm dev`.)

A aplicação é servida por padrão em: http://localhost:5173

### Fluxo de uso para teste manual

1. Abra a página inicial (/).
2. Preencha o formulário com renda, despesas, dívidas e meta financeira.
3. Clique em "Gerar simulação".
4. Veja os resultados na página de Resultado.
5. Acesse o Histórico pelo menu para revisar simulações anteriores salvas no navegador.

### Estrutura principal do projeto

```text
src/
  components/     Componentes reutilizáveis e layout
    layout/       RootLayout, cabeçalho/rodapé e navegação
    shared/       Componentes compartilhados menores
    features/     Componentes específicos de fluxo (formulário, resultado, histórico)
  context/        Providers (ex.: ThemeProvider)
  hooks/          Hooks customizados
  pages/          Páginas de rota (SimulationFormPage, SimulationResultsPage, SimulationHistoryPage)
  utils/          Funções utilitárias (formatadores, cálculos)
  main.tsx        Ponto de entrada (ThemeProvider + Router)
  router.tsx      Definição de rotas
  index.css       Estilos globais (Tailwind)
```

### Observações técnicas

- ESLint já configurado. Para ambientes de produção é recomendada ativar regras de checagem de tipos no ESLint (ex.: configuração em `eslint.config.js`).
- Persistência do histórico é feita em localStorage; não há backend no momento.
- Rotas incluem variações de capitalização para compatibilidade (`/resultado` e `/Resultado`, `/historico` e `/Historico`).

### Contribuindo

- Abra uma issue para discutir mudanças maiores.
- Prefira PRs pequenos e com descrição clara do objetivo.
- Siga as regras de lint (rodar `npm run lint`) e mantenha o TypeScript limpo.

### Licença

Nenhuma licença específica definida no repositório.

---

## English

### What this is

PlanFast is a personal financial planning web app built with React + TypeScript. The application helps users simulate financial goals based on income, expenses and debts, providing results and a local simulation history stored in the browser.

### Key features

- Input form for income, expenses, debts and target
- Simulation results with monthly saving and estimated term
- Local simulation history stored in localStorage
- Routes for form, results and history pages
- Currency formatting for Brazilian Real
- Responsive UI with Tailwind CSS and Lucide icons
- 🤖 Generative AI analysis using Google Gemini for personalized insights

### Generative AI - Google Gemini

PlanFast now integrates **Google Gemini 2.0 Flash** to provide intelligent, personalized financial analyses:

What the AI does:

- ✅ Analyzes your financial profile (income, expenses, debts)
- ✅ Checks whether your goal is feasible within the desired timeframe
- ✅ Offers 2-3 practical, specific recommendations
- ✅ Provides motivation and insights in Brazilian Portuguese

How to use:

1. Fill in the simulation form
2. On the Results page you will see a card titled "Generative AI Analysis"
3. The AI will analyze your profile in real time

Configuration:

To enable the AI you need to:

1. Get a free API key at: https://aistudio.google.com/app/apikey
2. Create a `.env.local` file at the project root:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. Install dependencies: `pnpm install`

Note: Google Gemini also requires active quotas on the project. If you receive quota/exceeded errors, enable billing at https://console.cloud.google.com/ and check `APIs & Services` → `Quotas`. See [SETUP_GEMINI.md](./SETUP_GEMINI.md) for full instructions.

### Tech stack

- Language: TypeScript (primary)
- Framework/runtime: React 19 + Vite 8
- Notable libraries: react-router-dom, tailwindcss, lucide-react, @fontsource/inter, @google/generative-ai

Main versions (see package.json):

- react 19.2.6
- typescript ~6.0.2
- vite 8.0.12
- tailwindcss 4.3.0
- @google/generative-ai 0.21.0

### How to run (development)

Quick start:

```bash
git clone https://github.com/lincolnbuk/planfast.git
cd planfast
npm install
npm run dev
```

(If you prefer pnpm: `pnpm install` then `pnpm dev`.)

App runs by default at: http://localhost:5173

### Manual test flow

1. Open the home page (/).
2. Fill the form with income, expenses, debts and financial goal.
3. Click "Generate simulation".
4. View results on the Results page.
5. Check the History page to review previously saved simulations stored locally.

### Project layout ( high level )

```text
src/
  components/     Reusable components and layout
    layout/       Root layout, header/footer and navigation
    shared/       Small shared components
    features/     Flow-specific components (form, results, history)
  context/        Providers (e.g. ThemeProvider)
  hooks/          Custom hooks
  pages/          Route pages (SimulationFormPage, SimulationResultsPage, SimulationHistoryPage)
  utils/          Utilities (formatters, calculations)
  main.tsx        Entrypoint (ThemeProvider + Router)
  router.tsx      Routes configuration
  index.css       Global styles (Tailwind)
```

### Notes

- ESLint is present; enabling type-checking rules for production builds is recommended.
- History is stored in the browser (localStorage); there is no backend API.
- Router includes duplicated paths differing only by capitalization to avoid navigation issues.

### Contributing

- Open an issue for major changes.
- Keep pull requests focused and documented.
- Run linting (`npm run lint`) and maintain TypeScript checks.

### License

No specific license defined.

---

## Commits feitos em 2026-08-04 / Commits made on 2026-08-04

Below are the commits recorded in this repository on 2026-08-04 (UTC):

- f2736985 — feat: add Gemini generative AI analysis, cache/retry support, and docs — Adriano Lincoln — 2026-08-04T15:49:31Z
  - https://github.com/lincolnbuk/planfast/commit/f2736985c238acb0c5394ba75becfdccc9cd7659

Abaixo os commits registrados neste repositório em 04/08/2026 (UTC):

- f2736985 — feat: add Gemini generative AI analysis, cache/retry support, and docs — Adriano Lincoln — 2026-08-04T15:49:31Z
  - https://github.com/lincolnbuk/planfast/commit/f2736985c238acb0c5394ba75becfdccc9cd7659

---

Built with ❤️ — Developed by lincolnbuk
