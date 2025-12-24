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
│       ├── Container.tsx # Container wrapper
│       ├── Section.tsx   # Section wrapper
│       ├── Typography.tsx # Heading e Text components
│       ├── Spacer.tsx    # Spacer component
│       ├── Divider.tsx   # Divider component
│       ├── Loading.tsx   # Loading spinner
│       ├── FadeIn.tsx   # Fade in animation
│       ├── SlideIn.tsx  # Slide in animation
│       └── ResponsiveImage.tsx # Responsive image component
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

### ✅ Fase 7: Componentes Compartilhados e Refinamentos

- [x] Componente Section (wrapper com backgrounds e paddings)
- [x] Componentes Typography (Heading e Text com variações)
- [x] Componente Spacer (espaçamentos consistentes)
- [x] Componente Divider (separadores visuais)
- [x] Componente Loading (spinner de carregamento)
- [x] Componentes de animação (FadeIn, SlideIn)
- [x] Componente ResponsiveImage (imagem otimizada)
- [x] Animações melhoradas (scroll animations, hover effects)
- [x] Transições suaves em todos os componentes
- [x] Classes utilitárias CSS (hover-lift, hover-scale, focus-ring)
- [x] Responsividade completa (mobile-first, tablet, desktop)
- [x] Animações adicionais no Tailwind config

### ✅ Fase 8: Integrações e Funcionalidades

- [x] Integração com Resend (estrutura completa, pronta para configurar)
- [x] Validação completa de formulários (email, telefone, mensagem)
- [x] Feedback visual aprimorado
- [x] Meta tags completas (title, description, keywords)
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Cards
- [x] Sitemap.xml automático
- [x] Robots.txt configurado
- [x] Structured Data (JSON-LD) para Organization e WebSite
- [x] Otimização de imagens (Next.js Image com AVIF/WebP)
- [x] Lazy loading automático
- [x] Code splitting otimizado
- [x] Compressão habilitada
- [x] Configurações de performance no Next.js

### ✅ Fase 9: Conteúdo e Assets

- [x] Estrutura de pastas para imagens documentada
- [x] Favicon e ícones (gerados dinamicamente)
- [x] Open Graph image (gerada dinamicamente)
- [x] Apple touch icon
- [x] Guia de conteúdo completo (CONTENT_GUIDE.md)
- [x] Guia de SEO e copywriting (SEO_CONTENT.md)
- [x] README para estrutura de imagens
- [x] Checklist de conteúdo para produção
- [x] Especificações de imagens e assets
- [x] Documentação de onde atualizar dados reais

## 📋 Próximas Fases

Todas as fases principais foram implementadas! 🎉

## 📚 Documentação Adicional

- `CONTENT_GUIDE.md` - Guia completo para atualizar conteúdo
- `SEO_CONTENT.md` - Guia de SEO e copywriting
- `public/images/README.md` - Especificações de imagens

## 🚀 Próximos Passos para Produção

1. **Conteúdo**: Atualizar todos os textos com conteúdo real (ver CONTENT_GUIDE.md)
2. **Imagens**: Adicionar todas as imagens necessárias (ver public/images/README.md)
3. **Resend**: Configurar integração de email (ver Fase 8)
4. **SEO**: Revisar e otimizar conteúdo (ver SEO_CONTENT.md)
5. **Testes**: Testar em diferentes dispositivos e navegadores
6. **Performance**: Verificar com Lighthouse
7. **Deploy**: Fazer deploy em produção (Vercel recomendado)

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
