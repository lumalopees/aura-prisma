# Aura Prisma - Estúdio Criativo

Site institucional para estúdio criativo especializado em branding, identidade visual, social media e posicionamento digital.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações e transições
- **Resend** - Envio de emails (formulários)

## 📁 Estrutura do Projeto

```
aura-prisma/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página Home
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx    # Cabeçalho com navegação
│   │   └── Footer.tsx    # Rodapé
│   └── ui/               # Componentes de UI
│       ├── Button.tsx    # Botão reutilizável
│       ├── Card.tsx      # Card component
│       └── Container.tsx # Container wrapper
├── data/                 # Dados estáticos (JSON)
│   ├── services.json     # Serviços oferecidos
│   └── projects.json     # Projetos do portfólio
├── types/                # Definições TypeScript
│   └── index.ts          # Tipos compartilhados
└── public/               # Arquivos estáticos
    └── images/           # Imagens do site
```

## 🎨 Design System

### Cores

- **Primary**: Paleta roxa (primary-50 a primary-900)
- **Neutral**: Escala de cinzas (neutral-50 a neutral-900)

### Tipografia

- **Sans**: Inter (corpo de texto)
- **Display**: Playfair Display (títulos)

### Componentes Base

- **Button**: 4 variantes (primary, secondary, outline, ghost)
- **Card**: Componente de card com hover opcional
- **Container**: Wrapper responsivo com tamanhos configuráveis

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Linter
npm run lint
```

O site estará disponível em `http://localhost:3000`

## 📋 Funcionalidades Implementadas

### ✅ Fase 1: Setup e Estrutura Base

- [x] Configuração Next.js com TypeScript
- [x] Configuração Tailwind CSS
- [x] Estrutura de pastas organizada
- [x] ESLint e Prettier configurados
- [x] Design system básico (cores, tipografia, espaçamentos)
- [x] Componentes base (Button, Card, Container)
- [x] Layout base (Header, Footer)
- [x] Sistema de roteamento (App Router)

## 📋 Próximas Fases

### 🔄 Fase 2: Página Home
- Hero Section
- Seção de Serviços (resumidos)
- Prova social
- Destaque visual / Portfólio preview
- Segmentos atendidos
- Formulário de contato rápido

### 📝 Fase 3: Página Sobre
- História do estúdio
- Missão, visão e valores
- Equipe/Quem somos
- Processo de trabalho

### 🎯 Fase 4: Página Serviços
- Header da página
- Detalhamento de cada serviço
- Processo de trabalho
- CTA final

### 🖼️ Fase 5: Página Portfólio
- Grid de projetos
- Filtros por categoria
- Modal/Detalhe do projeto
- CTA entre projetos

### 📧 Fase 6: Página Contato
- Formulário de contato
- Informações de contato
- Redes sociais
- CTA final

## 🎯 Decisões Técnicas

- **CMS**: Conteúdo estático (JSON) - simples, rápido, sem custo
- **Formulários**: Resend - moderno, confiável, gratuito até 3k/mês
- **Animações**: Framer Motion + CSS - melhor dos dois mundos
- **Imagens**: Next.js Image - otimização automática
- **Analytics**: Plausible (ou GA4) - privacidade + simplicidade

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 📄 Licença

Este projeto é privado e proprietário.

---

**Desenvolvido com ❤️ para Aura Prisma**
