# PlanFast - Financial Educator Using React and Generative AI

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<div align="center">
  <img src="https://raw.githubusercontent.com/facebook/react/main/docs/img/logo.svg" alt="React Logo" width="150" />
</div>

---

## 📋 Conteúdo | Contents

- [Português](#português)
- [English](#english)

---

## Português

### 🎯 Sobre o Projeto

**PlanFast** é um aplicativo educacional de finanças desenvolvido com React e Inteligência Artificial Generativa. O projeto fornece um ambiente moderno, rápido e otimizado para aprender sobre planejamento financeiro através de tecnologias web de ponta.

### 🚀 Stack Tecnológico

#### Frontend
- **React** 19.2.6 - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** 6.0.2 - Superset tipado de JavaScript para maior segurança de tipo
- **Vite** 8.0.12 - Ferramenta de build moderno e servidor de desenvolvimento super rápido
- **TailwindCSS** 4.3.0 - Framework CSS utilitário para estilização rápida
- **React Router DOM** 7.16.0 - Roteamento para aplicações single-page

#### Bibliotecas Auxiliares
- **Lucide React** 1.17.0 - Ícones SVG elegantes e customizáveis
- **Fontsource Inter** 5.2.8 - Fonte Inter otimizada

#### Desenvolvimento
- **ESLint** 10.3.0 - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** 8.59.2 - Suporte ESLint para TypeScript
- **Vite Plugin React** 6.0.1 - Plugin do Vite para otimização de React

### 📦 Estrutura do Projeto

```
planfast/
├── src/                    # Código-fonte da aplicação
├── public/                 # Arquivos públicos estáticos
├── index.html             # Arquivo HTML principal
├── package.json           # Dependências e scripts do projeto
├── vite.config.ts         # Configuração do Vite
├── tsconfig.json          # Configuração do TypeScript
├── tsconfig.app.json      # Configuração específica do app
├── tsconfig.node.json     # Configuração do Node.js
├── eslint.config.js       # Configuração do ESLint
└── pnpm-lock.yaml         # Lock file do PNPM
```

### 🛠️ Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento com HMR
npm run dev

# Compilar TypeScript e gerar build para produção
npm run build

# Executar linter ESLint
npm run lint

# Visualizar preview do build
npm run preview
```

### 📋 Dependências Principais

| Pacote | Versão | Propósito |
|--------|--------|----------|
| react | 19.2.6 | Biblioteca principal de UI |
| react-dom | 19.2.6 | Renderização DOM |
| react-router-dom | 7.16.0 | Roteamento |
| tailwindcss | 4.3.0 | Estilização CSS |
| lucide-react | 1.17.0 | Ícones |

### 🔧 Configuração e Instalação

1. **Clonar o repositório**
```bash
git clone https://github.com/lincolnbuk/planfast.git
cd planfast
```

2. **Instalar dependências**
```bash
npm install
# ou
pnpm install
```

3. **Iniciar servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acessar a aplicação**
```
http://localhost:5173
```

### 📝 Configuração ESLint

O projeto está configurado com ESLint para garantir qualidade de código. Para ambientes de produção, recomenda-se habilitar regras de verificação de tipo:

```javascript
// eslint.config.js
export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // ou para regras mais rigorosas:
      tseslint.configs.strictTypeChecked,
    ],
  },
])
```

### 💡 Recursos Principais

- ⚡ HMR (Hot Module Replacement) para desenvolvimento rápido
- 🎨 TailwindCSS para estilização eficiente
- 🔒 TypeScript para tipagem estática
- 🧪 Pronto para testes unitários
- 📱 Design responsivo
- 🤖 Integração com IA Generativa para educação financeira

### 📚 Documentação Importante

- [React Official Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [TailwindCSS Documentation](https://tailwindcss.com)

### 📄 Licença

Este projeto está disponível sem licença específica definida.

---

## English

### 🎯 About the Project

**PlanFast** is a financial education application developed with React and Generative AI. The project provides a modern, fast, and optimized environment for learning about financial planning through cutting-edge web technologies.

### 🚀 Tech Stack

#### Frontend
- **React** 19.2.6 - JavaScript library for building user interfaces
- **TypeScript** 6.0.2 - Typed superset of JavaScript for type safety
- **Vite** 8.0.12 - Modern build tool and lightning-fast development server
- **TailwindCSS** 4.3.0 - Utility-first CSS framework for rapid styling
- **React Router DOM** 7.16.0 - Routing for single-page applications

#### Supporting Libraries
- **Lucide React** 1.17.0 - Elegant and customizable SVG icons
- **Fontsource Inter** 5.2.8 - Optimized Inter font

#### Development
- **ESLint** 10.3.0 - Linter for JavaScript/TypeScript code
- **TypeScript ESLint** 8.59.2 - ESLint support for TypeScript
- **Vite Plugin React** 6.0.1 - Vite plugin for React optimization

### 📦 Project Structure

```
planfast/
├── src/                    # Application source code
├── public/                 # Static public files
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node.js TypeScript config
├── eslint.config.js       # ESLint configuration
└── pnpm-lock.yaml         # PNPM lock file
```

### 🛠️ Available Scripts

```bash
# Start development server with HMR
npm run dev

# Compile TypeScript and build for production
npm run build

# Run ESLint
npm run lint

# Preview the production build
npm run preview
```

### 📋 Main Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.2.6 | Main UI library |
| react-dom | 19.2.6 | DOM rendering |
| react-router-dom | 7.16.0 | Routing |
| tailwindcss | 4.3.0 | CSS styling |
| lucide-react | 1.17.0 | Icons |

### 🔧 Setup and Installation

1. **Clone the repository**
```bash
git clone https://github.com/lincolnbuk/planfast.git
cd planfast
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Access the application**
```
http://localhost:5173
```

### 📝 ESLint Configuration

The project is configured with ESLint to ensure code quality. For production environments, it's recommended to enable type-checking rules:

```javascript
// eslint.config.js
export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or for stricter rules:
      tseslint.configs.strictTypeChecked,
    ],
  },
])
```

### 💡 Key Features

- ⚡ HMR (Hot Module Replacement) for fast development
- 🎨 TailwindCSS for efficient styling
- 🔒 TypeScript for static typing
- 🧪 Ready for unit testing
- 📱 Responsive design
- 🤖 Integration with Generative AI for financial education

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
