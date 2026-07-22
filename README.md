# PlanFast - Financial Educator Using React and Generative AI

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white&style=for-the-badge)

## 📌 O que o projeto faz

O PlanFast é uma aplicação web de planejamento financeiro pessoal criada com React e TypeScript. A pessoa usuária preenche um formulário com renda, gastos, dívidas e objetivo financeiro, e o app gera uma simulação com o valor mensal disponível para economizar.

Nesta versão, eu implementei uma melhoria prática: um histórico de simulações salvo no navegador, permitindo que o usuário revise metas anteriores sem perder o contexto financeiro.

## ✨ Melhorias implementadas

- Nova página de histórico de simulações
- Armazenamento local com localStorage
- Exibição de dados como renda, prazo, meta e economia mensal por simulação
- Navegação automática para a página de resultados ao concluir a última etapa
- Formatação de valores em moeda brasileira com pontuação e separação correta
- Interface mais fluida entre formulário, resultado e histórico

## 🛠️ Tecnologias usadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## ▶️ Como executar

```bash
git clone https://github.com/lincolnbuk/planfast.git
cd planfast
npm install
npm run dev
```

A aplicação fica disponível em http://localhost:5173.

## 🧪 Como testar o fluxo principal

1. Acesse a página inicial.
2. Preencha o formulário com renda, gastos, dívidas e meta.
3. Clique em gerar simulação.
4. Veja o resultado da simulação.
5. Acesse o histórico pelo menu superior para verificar as simulações salvas.

## 📁 Estrutura principal

```text
src/
  components/
  hooks/
  pages/
  utils/
```

## 💡 O que aprendi

Durante o desafio, eu aprendi a organizar melhor o estado de uma aplicação React, a trabalhar com rotas e componentes reutilizáveis, e a integrar uma melhoria de UX com persistência local para deixar a experiência mais completa.

## 📄 Licença

Este projeto está disponível sem licença específica definida.
The project is configured with ESLint to ensure code quality. For production environments, it's recommended to enable type-checking rules:

```javascript
// eslint.config.js
export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or for stricter rules:
      tseslint.configs.strictTypeChecked,
    ],
  },
]);
```

### 💡 Key Features

- ⚡ HMR (Hot Module Replacement) for fast development
- 🎨 TailwindCSS for efficient styling
- 🔒 TypeScript for static typing
- 🧪 Ready for unit testing
- 📱 Responsive design
- 🤖 Integration with Generative AI for personalized financial education
- 🧠 Machine Learning for intelligent financial data analysis

### 📚 Important Documentation

- [React Official Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [TailwindCSS Documentation](https://tailwindcss.com)

### 📄 License

This project is available without a specific license defined.

---

<div align="center">

**Desenvolvido com ❤️ | Developed with ❤️**

![GitHub User](https://img.shields.io/badge/GitHub-lincolnbuk-black?logo=github&style=flat-square)

</div>
