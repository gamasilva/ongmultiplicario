---
target: src/pages/index.astro
total_score: 31
p0_count: 1
p1_count: 1
timestamp: 2026-07-05T19-04-10Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Indicadores de paginação do carrossel no mobile funcionam bem, mas o formulário de contato não tem feedback de erro customizado visual |
| 2 | Match System / Real World | 4 | Excelente adaptação de termos locais (Penha, Olaria, Ramos, Bonsucesso) e linguagem PT-BR clara |
| 3 | User Control and Freedom | 3 | Usuário consegue navegar facilmente, os links de âncoras funcionam de forma consistente |
| 4 | Consistency and Standards | 3 | Links de doação foram unificados para o fluxo de PIX, mas ainda há botões com estilos ligeiramente variados |
| 5 | Error Prevention | 3 | CNPJ com botão de cópia previne erros de digitação no PIX |
| 6 | Recognition Rather Than Recall | 4 | Menu e cabeçalhos claros, serviços oferecidos listados de forma explícita |
| 7 | Flexibility and Efficiency | 3 | Links de skip-to-content e WhatsApp presentes no drawer ajudam os usuários mais ágeis |
| 8 | Aesthetic and Minimalist Design | 3 | Design limpo com linhas decorativas harmonizadas em verde forte, melhorando o fluxo visual |
| 9 | Error Recovery | 2 | O formulário de contato aponta para uma URL Formspree placeholder (`placeholder`), impossibilitando o envio real |
| 10 | Help and Documentation | 3 | FAQs e informações detalhadas sobre funcionamento, contatos e endereço no footer |
| **Total** | | **31/40** | **Good — Fundação sólida, mas pontos críticos para resolver** |

## Anti-Patterns Verdict

**LLM assessment**: O design evoluiu significativamente, tornando-se mais coeso. As fontes Bricolage Grotesque e Rubik trazem um calor humano ideal para a identidade comunitária, evitando o par comum "Inter + Fraunces". A ausência de depoimentos com fotos de estoque (stock images) elevou a integridade da página. Contudo, o uso repetido de `.section-label` em 7 seções seguidas ainda cria um padrão de repetição que pode remeter a layouts gerados por modelo.

**Deterministic scan**: O scanner encontrou 2 avisos (warning) no arquivo `src/pages/index.astro`:
- Linha 946: `border-left: 24px solid var(--color-primary-dark)` (flagged as side-tab accent border)
- Linha 957: `border-right: 32px solid var(--color-primary-dark)` (flagged as side-tab accent border)

*Nota de Falso Positivo:* Ambos os avisos são na verdade partes dos chevrons decorativos de fundo rotacionados (`transform: rotate(45deg)`), e não bordas de destaque lateral em cards de conteúdo. Nenhuma correção é necessária para essas linhas.

## Overall Impression

O site se apresenta muito mais limpo e profissional sem as linhas duras de separação entre seções e com a padronização dos chevrons decorativos em verde floresta. A clareza nas ações de doação direcionando direto para o PIX melhora a usabilidade. No entanto, o site ainda possui pendências de infraestrutura técnica (como o Formspree quebrado) e o arquivo de vídeo do fundo que é pesado para conexões locais.

## What's Working

**1. Fluxo de Doação Unificado**: O redirecionamento das tiers de doação direto para a âncora `#pix-area` reduz a fricção e simplifica o processo para o doador.
**2. Tipografia Energética**: O uso de Bricolage Grotesque e Rubik dá à marca uma voz calorosa, comunitária e muito autêntica.
**3. Dots de Paginação no Mobile**: O carrossel de ações agora informa corretamente ao usuário mobile que há mais conteúdos disponíveis para deslizar.

## Priority Issues

**[P0] Formulário de Contato com endpoint placeholder**
- `src/pages/index.astro` linha 873
- **Why it matters**: O formulário aponta para `https://formspree.io/f/placeholder`, o que faz com que qualquer tentativa de contato ou inscrição de voluntário falhe silenciosamente no envio.
- **Fix**: Substituir o placeholder por um ID de formulário Formspree ativo e válido.
- **Suggested command**: `/impeccable harden`

**[P1] Nome de arquivo de vídeo com espaços e caracteres especiais**
- `src/pages/index.astro` linha 526
- **Why it matters**: O arquivo `Vídeo Palestra.mp4` contém espaço e acento. Isso pode quebrar a resolução do link ou falhar no carregamento em certos servidores web e CDN.
- **Fix**: Renomear o arquivo para `video-palestra.mp4` na pasta pública e atualizar a linha de origem.
- **Suggested command**: `/impeccable harden`

**[P2] Section labels repetidos em demasia**
- `src/pages/index.astro`
- **Why it matters**: A tag pill uppercase (`section-label`) precede quase todas as seções, reduzindo o contraste de importância entre os blocos informativos.
- **Fix**: Remover a label de seções puramente humanas/narrativas (como "Quem Somos" ou "Fale Conosco"), permitindo que a seção comece direto com o título principal.
- **Suggested command**: `/impeccable layout`

## Persona Red Flags

**Casey (Distracted Mobile User — Conexão 3G, em trânsito):**
- O vídeo de fundo tem **7.69 MB**. Mesmo com preload automático, em conexões 3G na Zona Norte, isso pode atrasar o carregamento da página ou consumir banda preciosa do usuário móvel sem necessidade (já que o vídeo é puramente estético).
- *Recomendação:* Oferecer uma imagem estática otimizada como padrão e carregar o vídeo condicionalmente ou usar um arquivo de vídeo ultra-comprimido (menos de 1-2MB).

**Lucas (Morador local em busca de serviços gratuitos):**
- O endereço físico completo e o horário de atendimento ainda estão localizados somente no rodapé. Para Lucas, saber exatamente onde fica a sede e quando ir é uma informação prioritária que deveria estar mais visível no topo ou na seção de Locais.

## Minor Observations

- O endpoint do formulário de contato precisa ser configurado.
- Recomenda-se converter o arquivo de vídeo do fundo para uma versão menor e otimizada (por exemplo, em formato `.webm` com bitrate menor).

## Questions to Consider

- Como podemos tornar as informações de localização física e WhatsApp ainda mais proeminentes para o público local que acessa via celular?
- Seria viável reduzir o peso do vídeo de fundo ou substituí-lo por uma imagem de alta qualidade com micro-animações mais leves?
