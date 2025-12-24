# Guia de Conteúdo

Este documento serve como guia para atualizar o conteúdo do site com informações reais.

## 📝 Textos e Copy

### Princípios de Copy

1. **Tom**: Profissional mas acessível, humano, inspirador
2. **Linguagem**: Evitar jargões técnicos, usar linguagem clara
3. **SEO**: Incluir palavras-chave naturalmente
4. **Benefícios**: Focar em benefícios, não apenas em processos
5. **CTA**: Chamadas para ação claras e diretas

### Onde Atualizar

#### Home (`app/page.tsx` e componentes)
- **Hero**: Frase conceitual principal
- **Serviços Preview**: Descrições curtas e impactantes
- **Prova Social**: Números reais de projetos/clientes
- **Segmentos**: Descrições específicas por nicho

#### Sobre (`data/about.json`)
- **História**: Narrativa autêntica do estúdio
- **Missão**: Declaração clara e inspiradora
- **Visão**: Visão de futuro
- **Valores**: 4 valores principais com descrições

#### Serviços (`data/services.json`)
- **Descrições**: Explicar o que é e para quem é
- **Público-alvo**: Especificar claramente
- **Entregas**: Lista clara e objetiva

#### Portfólio (`data/projects.json`)
- **Títulos**: Nomes reais dos projetos
- **Descrições**: Contexto e resultados
- **Desafio**: Problema que o projeto resolveu
- **Solução**: Como foi resolvido
- **Cliente**: Nome real do cliente (se permitido)

#### Contato (`data/contact.json`)
- **Email**: Email real de contato
- **Telefone**: Telefone com DDD
- **Endereço**: Endereço completo (se houver escritório físico)
- **Redes Sociais**: Links reais das redes

## 🎨 Imagens e Assets

### Checklist de Imagens

- [ ] Logo principal (PNG/SVG)
- [ ] Favicon (32x32 ou múltiplos tamanhos)
- [ ] Imagem Open Graph (1200x630px)
- [ ] Imagens dos projetos (mínimo 4 projetos)
- [ ] Imagens dos serviços (4 serviços)
- [ ] Fotos da equipe (se aplicável)
- [ ] Imagem da história (página Sobre)

### Especificações

Ver `public/images/README.md` para especificações detalhadas.

## 📊 Dados e Estatísticas

### Prova Social (`data/stats.json`)

Atualizar com números reais:
- Projetos realizados
- Clientes atendidos
- Anos de experiência
- Taxa de satisfação (se tiver)

### Segmentos (`data/segments.json`)

Personalizar para os segmentos reais atendidos:
- Nomes dos segmentos
- Descrições específicas
- Serviços oferecidos por segmento

## 🔗 Links e Redes Sociais

### Onde Atualizar

1. **Footer** (`components/layout/Footer.tsx`)
   - Links de redes sociais
   - Email de contato

2. **Contato** (`data/contact.json`)
   - Todas as informações de contato
   - Links de redes sociais

3. **Header** (`components/layout/Header.tsx`)
   - Logo (quando adicionar)

## ✅ Checklist Final

Antes de ir para produção:

- [ ] Todos os textos revisados e atualizados
- [ ] Todas as imagens adicionadas e otimizadas
- [ ] Links de redes sociais funcionando
- [ ] Informações de contato corretas
- [ ] Projetos do portfólio com conteúdo real
- [ ] SEO otimizado (meta descriptions, titles)
- [ ] Testado em diferentes dispositivos
- [ ] Performance verificada (Lighthouse)
- [ ] Formulário de contato testado
- [ ] Sitemap atualizado

## 📚 Recursos Úteis

- **SEO**: [Google Search Console](https://search.google.com/search-console)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)
- **Otimização de Imagens**: [TinyPNG](https://tinypng.com/)
- **Análise**: [Google Analytics](https://analytics.google.com/)

