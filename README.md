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
│   ├── sobre/             # Página Sobre
│   │   └── page.tsx
│   ├── servicos/          # Página Serviços
│   │   └── page.tsx
│   ├── portfolio/        # Página Portfólio
│   │   └── page.tsx
│   ├── contato/           # Página Contato
│   │   └── page.tsx
│   └── api/               # API Routes
│       └── contact/        # API de contato
│           └── route.ts
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx    # Cabeçalho com navegação
│   │   └── Footer.tsx    # Rodapé
│   ├── sections/         # Seções da página
│   │   ├── Hero.tsx      # Hero section
│   │   ├── ServicesPreview.tsx # Preview de serviços
│   │   ├── SocialProof.tsx     # Prova social
│   │   ├── PortfolioPreview.tsx # Preview do portfólio
│   │   ├── Segments.tsx        # Segmentos atendidos
│   │   ├── ContactForm.tsx     # Formulário de contato
│   │   └── about/              # Seções da página Sobre
│   │       ├── History.tsx     # História do estúdio
│   │       ├── MissionVision.tsx # Missão, visão e valores
│   │       ├── Team.tsx        # Equipe/Quem somos
│   │       └── Process.tsx     # Processo de trabalho
│   │   └── services/            # Seções da página Serviços
│   │       ├── ServicesHeader.tsx # Header da página
│   │       ├── ServiceDetail.tsx  # Detalhamento de serviço
│   │       ├── ProcessSection.tsx  # Processo de trabalho
│   │       └── ServicesCTA.tsx     # CTA final
│   │   └── portfolio/              # Seções da página Portfólio
│   │       ├── PortfolioHeader.tsx # Header e filtros
│   │       ├── PortfolioGrid.tsx   # Grid de projetos
│   │       ├── ProjectCard.tsx     # Card de projeto
│   │       ├── ProjectModal.tsx    # Modal de detalhe
│   │       └── PortfolioCTA.tsx    # CTA entre projetos
│   │   └── contact/                # Seções da página Contato
│   │       ├── ContactHeader.tsx   # Header acolhedor
│   │       ├── ContactForm.tsx     # Formulário completo
│   │       └── ContactCTA.tsx      # CTA final
│   └── ui/               # Componentes de UI
│       ├── Button.tsx    # Botão reutilizável
│       ├── Card.tsx      # Card component
│       └── Container.tsx # Container wrapper
├── data/                 # Dados estáticos (JSON)
│   ├── services.json     # Serviços oferecidos
│   ├── projects.json     # Projetos do portfólio
│   ├── segments.json     # Segmentos atendidos
│   ├── stats.json        # Estatísticas e números
│   ├── about.json        # Dados da página Sobre
│   ├── team.json         # Dados da equipe
│   ├── process.json      # Processo de trabalho
│   └── contact.json      # Informações de contato
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

### ✅ Fase 2: Página Home

- [x] Hero Section com frase conceitual e CTAs
- [x] Seção de Serviços resumidos (4 cards)
- [x] Prova social (números e estatísticas)
- [x] Portfólio preview (grid com 4 projetos)
- [x] Segmentos atendidos (4 segmentos)
- [x] Formulário de contato rápido

### ✅ Fase 3: Página Sobre

- [x] Seção História (layout imagem/texto lado a lado)
- [x] Missão, Visão e Valores (cards com ícones)
- [x] Equipe/Quem somos (grid de pessoas)
- [x] Processo de Trabalho (timeline visual com 4 etapas)

### ✅ Fase 4: Página Serviços

- [x] Header da página com título e descrição
- [x] Componente reutilizável de serviço detalhado
- [x] Implementação dos 4 serviços (Branding, Identidade Visual, Social Media, Posicionamento Digital)
- [x] Seção de processo de trabalho (versão simplificada)
- [x] CTA final com fundo escuro

### ✅ Fase 5: Página Portfólio

- [x] Header da página com título e descrição
- [x] Filtros por categoria (Todos, Branding, Identidade Visual, Social Media, Posicionamento Digital)
- [x] Grid responsivo de projetos (3 colunas no desktop)
- [x] Cards de projeto com hover effects
- [x] Modal de detalhe do projeto com galeria de imagens
- [x] Navegação entre projetos (anterior/próximo)
- [x] Descrição completa, desafio e solução
- [x] Informações detalhadas (cliente, ano, serviços)
- [x] CTA entre projetos
- [x] Estrutura de dados completa com placeholders

### ✅ Fase 6: Página Contato

- [x] Header acolhedor com texto introdutório
- [x] Formulário de contato completo (Nome, Email, Telefone, Mensagem)
- [x] Validação de campos em tempo real
- [x] Estados de loading, sucesso e erro
- [x] Informações de contato (Email, Telefone, Endereço)
- [x] Layout lado a lado (formulário + informações)
- [x] Links de redes sociais (Instagram, Behance, LinkedIn)
- [x] CTA final elegante com mensagem inspiradora
- [x] API route preparada para integração com Resend

## 📋 Próximas Fases

Todas as fases principais foram implementadas! 🎉

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
