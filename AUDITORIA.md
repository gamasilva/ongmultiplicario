# Auditoria do Projeto: Instituto MultiplicaRio

## ETAPA 1 — AUDITORIA INICIAL

| Item | Existe? (Sim/Não/Parcial) | Onde está (arquivo) | Observação |
| :--- | :---: | :--- | :--- |
| **A) Navegação principal (Header)** | | | |
| Menu com no máximo 6 itens | Sim | `src/components/Header.astro` | Possui 6 itens, mas requer reordenação. |
| Item "Sobre / Quem somos" | Sim | `src/components/Header.astro` | |
| Item "Áreas de Atuação / Causas" | Sim | `src/components/Header.astro` | |
| Item "Como Ajudar / Doe" | Sim | `src/components/Header.astro` | |
| Item "Transparência" | Sim | `src/components/Header.astro` | |
| Item "Dúvidas Frequentes" | Sim | `src/components/Header.astro` | |
| Item "Contato" | Sim | `src/components/Header.astro` | |
| Botão fixo/destacado "Doe Agora" | Sim | `src/components/Header.astro` | Visível no header desktop e menu mobile. |
| **B) Página Inicial (Home) — ordem** | | | |
| 1. Hero | Sim | `src/pages/index.astro` | |
| 2. Faixa de números/estatísticas | Sim | `src/pages/index.astro` | |
| 3. Quem somos (resumo) | Sim | `src/pages/index.astro` | |
| 4. Áreas de atuação / causas | Sim | `src/pages/index.astro` | |
| 5. Histórias reais (beneficiários) | Sim | `src/pages/index.astro` | Componente de depoimentos. |
| 6. "Como sua doação vira impacto" | Não | - | Faltando na Home. |
| 7. Selos de confiança / parceiros | Parcial | `src/pages/transparencia.astro` | Existe na página de transparência, falta na Home. |
| 8. Formas de se envolver | Parcial | `src/pages/como-ajudar.astro` | Existe na página Como Ajudar, mas não destacado na Home. |
| 9. CTA final de doação | Sim | `src/pages/index.astro` | |
| **C) Página Sobre** | | | |
| História da fundação | Parcial | `src/pages/sobre.astro` | Texto muito curto, sem detalhes da fundação. |
| Missão, visão e valores | Sim | `src/pages/sobre.astro` | |
| Equipe/diretoria com nome e foto | Não | - | Faltando. |
| CNPJ e dados legais visíveis | Não | `src/pages/sobre.astro` | Faltando na página Sobre (visível apenas no footer/transparência). |
| **D) Página de Transparência** | | | |
| Relatórios anuais para download | Sim | `src/pages/transparencia.astro` | |
| Prestação de contas financeira | Parcial | `src/pages/transparencia.astro` | Faltam gráficos ou resumo financeiro visual. |
| Selos/certificações | Sim | `src/pages/transparencia.astro` | Placeholders inseridos. |
| Texto reforçando compromisso | Sim | `src/pages/transparencia.astro` | |
| **E) Página Como Ajudar / Doar** | | | |
| Múltiplas formas de pagamento | Sim | `src/pages/como-ajudar.astro` | |
| Valores sugeridos com impacto | Não | - | Precisa ser adicionado à página. |
| Opção de doação única E recorrente | Sim | `src/pages/como-ajudar.astro` | |
| Selo/texto de segurança no pagamento | Não | - | Falta menção a segurança na transação. |
| Seção de voluntariado | Sim | `src/pages/como-ajudar.astro` | |
| Seção de parcerias corporativas/PJ | Não | - | Faltando. |
| Seção de doação de itens | Sim | `src/pages/como-ajudar.astro` | |
| **F) Página de Dúvidas Frequentes** | | | |
| Existe a página `duvidas-frequentes` | Sim | `src/pages/duvidas-frequentes.astro` | |
| Componente accordion funcional | Sim | `src/components/FaqItem.astro` | |
| Schema JSON-LD FAQPage | Sim | `src/pages/duvidas-frequentes.astro` | |
| Link no Header | Sim | `src/components/Header.astro` | |
| **G) Página de Contato** | | | |
| Formulário | Sim | `src/pages/contato.astro` | |
| Endereço | Sim | `src/pages/contato.astro` | |
| E-mail e telefone/WhatsApp | Sim | `src/pages/contato.astro` | |
| Mapa incorporado | Sim | `src/pages/contato.astro` | |
| **H) Footer (todas as páginas)** | | | |
| Redes sociais | Sim | `src/components/Footer.astro` | |
| Endereço | Sim | `src/components/Footer.astro` | |
| CNPJ | Sim | `src/components/Footer.astro` | |
| Link para política de privacidade/LGPD| Não | - | Faltando. |
| Navegação resumida | Sim | `src/components/Footer.astro` | |
| **I) Acessibilidade e técnico** | | | |
| Contraste de cor adequado | Sim | Global | |
| HTML semântico | Sim | Global | |
| Navegação por teclado | Sim | Global | |
| `alt` em todas as imagens | Sim | Global | |
| `<html lang="pt-BR">` | Sim | `src/layouts/BaseLayout.astro` | |
| Meta tags únicas por página | Sim | Global | |
| Open Graph tags | Sim | `src/layouts/BaseLayout.astro` | |
| Sitemap (`@astrojs/sitemap`) | Sim | `astro.config.mjs` | |
| Site 100% responsivo | Sim | Global | |
| Tempo de carregamento aceitável | Sim | Global | Imagens placeholder (Unsplash) não usam astro:assets mas estão otimizadas via query string. |
| **J) Itens avançados (nice-to-have)** | | | |
| Seção/página de notícias ou blog | Não | - | Pendência Futura. |
| Newsletter | Não | - | Pendência Futura. |
| Página dedicada a cada área | Não | - | Pendência Futura. |

---

## ETAPA 3 — RELATÓRIO FINAL: AÇÕES REALIZADAS

Após a aprovação do plano de implementação, as seguintes ações de arquitetura de informação e desenvolvimento foram concluídas:

| Ação Realizada | Arquivo(s) Afetado(s) | Status | Observação / Pendência do Cliente |
| :--- | :--- | :---: | :--- |
| **Reordenação do Header e Navegação** | `Header.astro`, `Footer.astro` | ✅ Concluído | Ordem otimizada para o fluxo de conversão. |
| **Reordenação da Home** | `index.astro` | ✅ Concluído | Inserção dos Componentes de Impacto, Selos de Confiança e Formas de Se Envolver na Página Inicial. |
| **Expansão da Página Sobre** | `sobre.astro` | ✅ Concluído | Criada seção de Equipe e seção de Dados Legais. **Pendente: Inserir a história real da ONG e fotos da equipe nas marcações `[INSERIR ...]`.** |
| **Novo Bloco de Transparência** | `transparencia.astro` | ✅ Concluído | Adicionado gráfico ilustrativo de prestação de contas (85% Projetos / 15% Captação). |
| **Otimização de Como Ajudar** | `como-ajudar.astro` | ✅ Concluído | Adicionado gatilhos de segurança SSL e seção para Parcerias Corporativas (empresas). |
| **Página de Privacidade** | `privacidade.astro`, `Footer.astro` | ✅ Concluído | Página de LGPD e Termos criada do zero com texto padrão. |
| **Verificação de Integridade** | Build Cloudflare | ✅ Concluído | O comando `npm run build` compilou as 8 páginas com sucesso em output `static`. |
