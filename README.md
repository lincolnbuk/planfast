# PlanFast — Financial Educator using React & Generative AI / Educador Financeiro com React & IA Generativa

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)

---

## Português

### O que é
O PlanFast é uma aplicação web de planejamento financeiro pessoal feita com React + TypeScript. A aplicação ajuda pessoas a simular metas financeiras a partir de renda, despesas e dívidas, oferecendo resultados e um histórico local de simulações para consulta posterior.

### Principais funcionalidades
- Formulário de entrada com renda, despesas, dívidas e meta
- Geração de simulações com cálculo de economia mensal e prazo
- Histórico local de simulações (armazenamento em localStorage)
- Rotas para formulário, resultados e histórico
- Formatação de valores em moeda brasileira
- UI responsiva com Tailwind CSS e ícones via Lucide

### Tecnologias
- Linguagem: TypeScript (≈92% do código)
- Framework: React 19 + Vite 8
- Estilização: Tailwind CSS
- Outras libs importantes: react-router-dom, lucide-react, @fontsource/inter

Versões principais (ver package.json):
- react 19.2.6
- typescript ~6.0.2
- vite 8.0.12
- tailwindcss 4.3.0

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
PlanFast is a personal financial planning web app built with React + TypeScript. It helps users simulate financial goals based on income, expenses and debts, presenting results and a local simulation history for later review.

### Key features
- Input form for income, expenses, debts and target
- Simulation results with monthly saving and estimated term
- Local simulation history stored in localStorage
- Routes for form, results and history pages
- Currency formatting for Brazilian Real
- Responsive UI with Tailwind CSS and Lucide icons

### Tech stack
- Language: TypeScript (primary)
- Framework/runtime: React 19 + Vite 8
- Notable libraries: react-router-dom, tailwindcss, lucide-react, @fontsource/inter

Main versions (see package.json):
- react 19.2.6
- typescript ~6.0.2
- vite 8.0.12
- tailwindcss 4.3.0

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

### Project layout (high level)
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

Built with ❤️ — Developed by lincolnbuk
