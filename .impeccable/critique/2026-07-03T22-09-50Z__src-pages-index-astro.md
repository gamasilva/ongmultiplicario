---
timestamp: 2026-07-03T22-09-50Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Carrossel sem indicadores de posição; usuário mobile não sabe que existem mais 3 cards |
| 2 | Match System / Real World | 4 | Linguagem PT-BR correta; termos como INSS, LOAS, BPC usados com contexto adequado |
| 3 | User Control and Freedom | 2 | Carrossel com `no-scrollbar` sem dots de paginação; vídeo sem "fechar" visível; página longa sem "voltar ao topo" |
| 4 | Consistency and Standards | 2 | `section-label` verde vs `section-label-accent` laranja sem lógica discernível; DonateButton vai a `/como-ajudar` mas DonationTierCard vai a `/como-ajudar?amount=X` — fluxos inconsistentes |
| 5 | Error Prevention | 2 | Fonte de vídeo `"/Vídeo%20Palestra.mp4"` com espaço/acento no path é frágil; carrossel com scroll fixo em 380px que não bate com a largura real do card em todos os breakpoints |
| 6 | Recognition Rather Than Recall | 3 | Nav com labels claras; estado ativo implementado; CNPJ em monospace `select-all` no footer é sinal de confiança forte |
| 7 | Flexibility and Efficiency | 2 | Skip-to-content existe mas WhatsApp — canal primário no Brasil — está enterrado no menu mobile; voluntários precisam descer 10 seções para encontrar o formulário |
| 8 | Aesthetic and Minimalist Design | 1 | 7+ blur-blobs decorativos; dot-pattern em 5 seções; section-label em 10/10 seções; nenhum elemento tem prioridade visual sobre outro |
| 9 | Error Recovery | 1 | Carrossel sem arrows no mobile = conteúdo invisível sem fallback; video fallback "Seu navegador não suporta" sem link alternativo; formulário de contato aponta para URL Formspree placeholder não funcional |
| 10 | Help and Documentation | 3 | FAQ existe e está no nav; contato com WhatsApp, telefone e email; endereço e horário no footer |
| **Total** | | **23/40** | **Acceptable — melhorias significativas necessárias** |

## Anti-Patterns Verdict

**LLM assessment**: Sim, um visitante com fluência em design identificaria a origem AI dentro dos dois primeiros scrolls. Os tells estão camadas:

- **Inter + Fraunces**: o par mais reconhecível de fontes AI-geradas para sites de marca. Ambas estão na reflex-reject list. O uso é sem contra-programação — sem peso incomum, sem momentos de quebra de voz.
- **section-label em 10/10 seções** na homepage (21 ocorrências em todo o site): o dispositivo perde qualquer salência quando precede cada seção consecutivamente. Diretores de arte humanos quebram o padrão.
- **4 grades de cards estruturalmente idênticos** na homepage: AreaCard, StatCard, DonationTierCard, e as cards de Voluntariado/Itens — todas seguem ícone-quadrado → heading serif → corpo → CTA link.
- **7+ blur-blobs decorativos** (`blur-3xl`) distribuídos em Hero, Vídeo, Depoimentos, CTASection.
- **dot-pattern em 5 seções diferentes** sem variação.
- **StatCard** = template hero-metric banido (número grande + label uppercase rastreado).
- **Hover-reveal "Saiba mais"** no AreaCard: gesto de card SaaS em página de ONG comunitária.

**Deterministic scan**: 5 findings, 4 padrões únicos:
- `gradient-text` + `ai-color-palette`: `Footer.astro` linha 130 — link de crédito do desenvolvedor com gradient violet-fuchsia-pink totalmente fora da paleta da marca
- `gradient-text`: `Logo.astro` linha 33 — wordmark "Rio" com background-clip gradient (defensável como decisão de marca, mas técnica flagrada)
- `bounce-easing`: `index.astro` linha 74 — `animate-bounce` no scroll indicator (easing datado)
- `side-tab`: `sobre.astro` linha 78 — `border-l-4` em blockquote (convenção tipográfica clássica; falso positivo plausível)

**False positives**: O `border-l-4` no `<blockquote>` do sobre.astro é uma convenção editorial legítima para citações de missão. O gradient no Logo.astro é uma decisão de identidade de marca (tons apenas em verde). Nenhum dos dois precisa ser removido.

## Overall Impression

O site é tecnicamente sólido e comunicativamente honesto — as informações certas estão lá. O problema é que o design não tem ponto de vista próprio. Qualquer ONG do Brasil poderia usar esse template. O público primário — Lucas, morador da Penha, acessando por Android com 3G — precisa saber em 5 segundos: "isso é para mim, eles estão perto de mim, eles podem me ajudar com X." Ele só encontra essa resposta na 5ª seção da página.

A maior oportunidade: trocar a arquitetura de **persuasão para estranhos** por uma arquitetura de **reconhecimento para vizinhos**. O endereço, o WhatsApp, e os serviços concretos precisam estar acima do dobramento.

## What's Working

**1. Seção "Serviços Oferecidos" (index.astro linhas 184–257)** — a seção mais humana e útil da página. Serviços concretos nomeados em linguagem simples (aferição de pressão, reflexologia, apoio emocional, LOAS, BPC). Lucas para aqui. Deveria ser a primeira seção após o hero.

**2. Footer com dados legais e de confiança** — CNPJ em monospace `select-all`, endereço completo com CEP, horário de funcionamento, WhatsApp, designação OSCIP. É a seção mais "raízes locais, apresentação digna" do site inteiro. Exatamente o princípio de design #4.

**3. Menu mobile (Header.astro)** — implementação tecnicamente exemplar: `aria-modal`, `aria-expanded`, fechar com Escape, gestão de foco (`closeBtn.focus()`, `menuBtn.focus()`), animações respeitam `prefers-reduced-motion`, WhatsApp/telefone/Instagram no rodapé do drawer.

## Priority Issues

**[P0] Fotos stock nos depoimentos — quebra de confiança ativa**
- `src/pages/index.astro` linhas 373–379
- "Maria Silva, Moradora da Penha" e "João Ferreira, Voluntário" usam fotos Unsplash (`photo-1544005313` e `photo-1507003211169`) — rostos comuns em bancos de imagem. Para Lucas, que pode conhecer gente da Penha, ou para um jornalista avaliando a ONG, isso destrói a credibilidade imediatamente.
- **Fix**: usar fotos reais de participantes reais, ou remover as fotos e usar cards com iniciais apenas (o fallback `{imagePath ? <img> : <span>{initials}</span>}` já existe em `TestimonialCard.astro` linha 25). Nunca usar stock photography de rostos para representar membros reais de uma comunidade.
- **Comando**: `/impeccable harden`

**[P1] Inter + Fraunces — o par de fontes AI mais reconhecível**
- `src/styles/global.css` linhas 16–17; `src/layouts/BaseLayout.astro` linhas 3–6
- Ambas estão na reflex-reject list da skill. O par é uma das marcas mais fortes de conteúdo gerado por AI. Sem contra-programação de peso, tamanho ou personalidade, o sistema tipográfico lê como "qualquer NGO premium de 2024."
- **Fix**: uma troca deliberada de fonte com base nas três palavras de marca (Esperançosa · Humana · Comunitária). Exemplo de direção: uma sans-serif humanista com calor (Nunito, Atkinson Hyperlegible para acessibilidade, ou algo do catálogo brasileiro) + uma display grossa de caráter local para headings, ou uma única família com contraste de peso comprometido.
- **Comando**: `/impeccable typeset`

**[P1] section-label em 10/10 seções — hierarquia eliminada**
- `src/pages/index.astro` — 8 ocorrências; 21 no site inteiro
- Quando cada seção abre com o mesmo dispositivo de pill uppercase, nenhuma seção tem prioridade sobre outra. O visitante não sabe o que importa mais. É também o maior AI-tell visível na página.
- **Fix**: reservar o `.section-label` para no máximo 2–3 seções onde a orientação de categoria é genuinamente necessária (Áreas de Atuação, Como sua Doação Ajuda). Seções humanas (Depoimentos, Quem Somos) devem começar com uma citação, rosto, ou o próprio heading — não com um badge de categoria.
- **Comando**: `/impeccable layout`

**[P1] Três seções de conversão consecutivas sem respiro**
- `src/pages/index.astro` linhas 385–438
- "Como sua Doação Ajuda" → "Outras Formas de se Envolver" → CTASection: o usuário recebe três pedidos de ação diferentes (doar, voluntariar, doar de novo) sem nenhuma seção informacional entre eles. Somado ao CTA do footer, são quatro pedidos de doação na mesma página.
- **Fix**: após os tiers de doação, inserir uma seção de confiança real (história de impacto, ou "como usamos os recursos"). Remover ou mesclar a CTASection com o footer CTA — só precisa de um.
- **Comando**: `/impeccable layout`

**[P2] Carrossel sem paginação no mobile — conteúdo invisível**
- `src/pages/index.astro` linhas 303–350
- `no-scrollbar` esconde o indicador nativo; `hidden sm:flex` oculta os botões de prev/next abaixo de `sm`. No mobile, 3 de 4 cards existem mas o usuário não tem nenhum sinal visual disso.
- **Fix**: adicionar 4 dots indicadores abaixo do carrossel em mobile, ou tornar os botões prev/next visíveis em todos os breakpoints.
- **Comando**: `/impeccable adapt`

**[P2] WhatsApp sem presença acima do dobramento no mobile**
- WhatsApp é o canal de comunicação primário no Brasil, especialmente em comunidades como a Penha. O link de WhatsApp existe apenas no drawer do menu mobile e no footer — ambos fora do fluxo primário.
- **Fix**: adicionar um botão WhatsApp flutuante (fixed, bottom-right) ou uma linha de "Fale conosco pelo WhatsApp" no hero logo abaixo dos CTAs principais.
- **Comando**: `/impeccable layout`

## Persona Red Flags

**Jordan (First-Timer — chegou pelo Instagram, curioso mas não comprometido):**
- O hero pede doação antes de mostrar qualquer prova do que a ONG faz. O botão "Conheça nosso trabalho" é secundário visualmente mas deveria ser primário para Jordan.
- A estatística "+500 vidas" não tem timeframe. Jordan não sabe se é por ano ou em 10 anos. A falta de contexto enfraquece em vez de impressionar.
- As fotos Unsplash nos depoimentos: Jordan viu esses rostos em outros sites. Ele reconhece.
- A vídeo seção é a 6ª seção — Jordan mobile provavelmente saiu antes.

**Casey (Usuário Mobile Distraído — janela de 30 segundos, rolando com o polegar):**
- No mobile, os dois CTAs do hero são `flex-col` — dois botões de largura total empilhados com o mesmo peso visual. O polegar bate no mais próximo, não no mais importante.
- O carrossel de "Ações Realizadas" mostra 1 card. Casey rola para baixo sem saber que existem mais 3 fotos reais de eventos.
- `backdrop-blur-2xl` no header + múltiplos `blur-3xl` em seções: compositing GPU em dispositivos Android mid-low pode causar jank visível em conexões lentas.

**Lucas (Morador da Penha, Android, 3G, baixa confiança):**
- Abre o site e vê copy de anúncio: "Multiplicando esperança, transformando vidas." Ninguém na Penha fala assim. Não cria conexão imediata.
- Os serviços que mais importam para Lucas (pressão, glicemia, orientação INSS) estão na 5ª seção. Ele precisa rolar por Hero, Stats, Quem Somos, e Áreas de Atuação antes de encontrar resposta à pergunta "eles podem me ajudar?"
- "Maria Silva, Moradora da Penha" tem um rosto de banco de imagem. Lucas desconfia.
- O endereço (Rua Montevideo, 824) só aparece no footer — após 10 seções. Para Lucas, saber que a sede está a 5 minutos a pé é um sinal de confiança primário. Isso precisa estar no hero ou logo abaixo.
- O WhatsApp não tem presença acima do dobramento.

## Minor Observations

- `bg-bg-lightgreen` em `global.css` mapeia para `#F7EF99` — mesmo hex que `--color-secondary`. Dois tokens para a mesma cor cria inconsistência de manutenção.
- O H1 tem `style="letter-spacing: -0.03em; line-height: 1.08;"` inline, sobrescrevendo o token global de `letter-spacing: -0.025em`. Estilos inline inconsistentes com o design system.
- `StatCard.astro` usa `style="background-color: #F1BB87;"` — hex cru sem correspondência em nenhum token nomeado.
- `DonationTierCard.astro` usa `style="background-color: #F7D550;"` — idem.
- O crédito do desenvolvedor no footer usa `from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text` — gradiente roxo/rosa completamente fora da paleta verde/amarelo/laranja da marca. Detectado pelo scanner.
- `AreaCard.astro` tem CTA hover-only sem link no card — o card inteiro não é clicável e não há rota para página de detalhe de área a partir dele.
- Placeholders `[INSERIR ...]` presentes em arquivos de produção: `sobre.astro` (nomes de equipe, e-mail), `privacidade.astro`, `duvidas-frequentes.astro`, `como-ajudar.astro`.
- Formulário de contato (`contato.astro`) aponta para `https://formspree.io/f/placeholder` — endpoint não funcional. Submissões do formulário falharão silenciosamente.
- `text-text-body/45` (caption da seção de vídeo, index.astro linha 296) é aproximadamente `#9B9888` sobre branco — provável falha de contraste WCAG AA (abaixo de 4.5:1).
- Múltiplos links "Saber mais" idênticos no carrossel apontam para `/contato` sem `aria-label` diferenciando cada um — problema para usuários de leitor de tela.

## Questions to Consider

1. **E se a homepage começasse pelo que a ONG oferece, não pelo que ela é?** Lucas e Casey precisam de "eles podem me ajudar?" respondido em 5 segundos. A arquitetura atual responde essa pergunta na 5ª seção. O que muda se Serviços for a 2ª seção, imediatamente após o hero?

2. **O que seria o design se você removesse todos os section-label pills, todos os blur-blobs, e todos os dot-patterns — e tivesse que sustentar o visual só com tipografia, cor e fotografia?** O que sobra é a identidade real. O que desaparece é o scaffolding de template.

3. **"Maria Silva" e "João Ferreira" são pessoas reais?** Se sim, por que o site tem fotos Unsplash no lugar delas? Se não, por que os depoimentos existem? O princípio de design #1 diz "humanidade primeiro". O test mais simples: dois depoimentos reais com fotos tiradas no celular durante um atendimento valem mais do que dez depoimentos com fotos stock.
