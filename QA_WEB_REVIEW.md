# Relatório Oficial de Auditoria de QA Web, Acessibilidade WCAG 2.1 AA+, Responsividade e Conformidade Legal Trilíngue (`[VOZ-08]`)

### Cabeçalho Obrigatório de Isolamento Multi-Projeto
- **Projeto:** VozViva — Plataforma de Comunicação e Desenvolvimento Assistivo (CAA) (`com.regard.vozviva`)
- **Repositório Público (Portal Web & Docs Legais):** `regardgames/vozviva` (`https://regardgames.github.io/vozviva/`)
- **Diretório Local Auditado:** `/workspace/vozviva-web` (sincronizado com `/workspace/vozviva-web/docs/`)
- **Commit Final Aprovado:** `2662729` (`fix(web): add trilingual sim.status_empty i18n key in landing.js and docs/landing.js [VOZ-08-FIX-2]`), após `7d04788` (`[VOZ-08-FIX]`) e `b00bed1` (`[VOZ-06]`)
- **Identificador da Tarefa:** `[VOZ-08]` / `[VOZ-08-RETEST-2]` — Auditoria Completa de QA Web, Acessibilidade WCAG 2.1 AA+, Responsividade e Conformidade Legal Trilíngue (`pt-BR`, `en`, `es`)
- **Autor da Auditoria:** `@Engenheiro de QA Web`
- **Data/Hora da Aprovação Final:** Quarta-feira, 28 de outubro de 2026, 11h16 BRT (`America/Fortaleza`, UTC-3)
- **Ambiente de Execução E2E:** Google Chrome Headless (`/usr/bin/google-chrome`) via Playwright Core + Servidor HTTP local servindo `/workspace/vozviva-web`

---

## 1. Veredito Executivo Final (`commit 2662729`)

> ### ✅ **VEREDITO FINAL: APROVADO (`10/10 PASS` · `4/4` Bloqueadores Resolvidos · `144/144` Viewports sem Overflow)**
>
> Após o ciclo completo de auditoria e reteste E2E no Google Chrome Headless sobre os commits `b00bed1` -> `7d04788` -> `2662729`, **todos os 4 bloqueadores (`VOZ08-B01` a `VOZ08-B04`) foram 100% corrigidos e validados em runtime**, sem nenhuma regressão:
> - ✅ **`[VOZ08-B01]` — RESOLVIDO (`PASS`):** os 20 cartões do Simulador CAA (`.caa-card.fitz-<cat>`, `195.31px x 122.00px`, `border-radius: 16px`, borda `3px`/`4px`) e todos os chips da `SentenceStrip` (`.sentence-chip.fitz-<cat>`, `height: 48.00px`, `width: 67.88px a 183.72px`, `border-radius: 12px`) exibem a **dupla codificação visual completa da Chave de Fitzgerald** (cores semânticas + símbolos geométricos `●`, `▶`, `■`, `◆`, `★`, `▲`, `⊞`) nos 3 temas (`light`, `dark`, `high-contrast`), com contrastes de **`9.23:1` a `16.86:1`** no Claro, **`14.09:1` a `16.41:1`** no Escuro e **`19.56:1` a `21.00:1`** no Alto Contraste WCAG AAA, cumprindo 100% dos alvos de toque `>= 48x48px`.
> - ✅ **`[VOZ08-B02]` — RESOLVIDO (`PASS`):** com a adição da chave `'sim.status_empty'` nos 3 idiomas em `landing.js` e `docs/landing.js` (`commit 2662729`, `SHA-256` `9c7c6963aefcb64fb12a26cd824a9a6d411e0149d3d344d2104d479f1f2483b0`), clicar em **"🔊 Falar Frase"** (`#sim-btn-speak`) com a `SentenceStrip` vazia exibe as mensagens traduzidas amigáveis em `#speech-status-text`:
>   - `pt-BR`: `"Toque em um ou mais cartões abaixo para montar uma frase antes de falar."`
>   - `en`: `"Tap one or more cards below to build a sentence before speaking."`
>   - `es`: `"Toca una o más tarjetas de abajo para armar una frase antes de hablar."`
> - ✅ **`[VOZ08-B03]` — RESOLVIDO (`PASS 144/144`):** **`100%` das `144` combinações testadas** (`index.html` e `privacy-policy.html` × `pt-BR`, `en`, `es` × `light`, `dark`, `high-contrast` × `320x568`, `360x800`, `390x844`, `768x1024`, `1024x768`, `1280x800`, `1440x900`, `1920x1080`) apresentam **`overflowX === 0px`** (`scrollWidth === clientWidth`).
> - ✅ **`[VOZ08-B04]` — RESOLVIDO (`PASS`):** `sitemap.xml` e `docs/sitemap.xml` não contêm mais a referência inexistente `terms.html`, e todos os links e âncoras jurídicas (`#privacidade`, `#termos`, `#isencao-clinica`, `#licencas`) respondem `200 OK`.

---

## 2. Paridade `SHA-256` entre `/workspace/vozviva-web/` (Raiz) e `/workspace/vozviva-web/docs/` no Commit `2662729`

Todos os **16 arquivos** da raiz de `/workspace/vozviva-web/` estão **100% sincronizados byte a byte** com `/workspace/vozviva-web/docs/` no commit `2662729`:

| # | Arquivo Relativo | Tamanho (Bytes) | Hash `SHA-256` (Raiz `/workspace/vozviva-web/`) | Hash `SHA-256` (`/workspace/vozviva-web/docs/`) | Status |
|---|---|---:|---|---|---|
| 1 | `.nojekyll` | `1` | `01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b` | `01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b` | ✅ **IDÊNTICO** |
| 2 | `index.html` | `44.149` | `adc442c8da149e97ecc12381e1ca0a0f3993ca39cfb8dd816f0d4a5d5b791c1f` | `adc442c8da149e97ecc12381e1ca0a0f3993ca39cfb8dd816f0d4a5d5b791c1f` | ✅ **IDÊNTICO** |
| 3 | `styles.css` | `37.268` | `829812e2d65628e347512d892649a8e3b2d90ca6710008aef52f67d0b78319b4` | `829812e2d65628e347512d892649a8e3b2d90ca6710008aef52f67d0b78319b4` | ✅ **IDÊNTICO** |
| 4 | `landing.css` | `37.268` | `829812e2d65628e347512d892649a8e3b2d90ca6710008aef52f67d0b78319b4` | `829812e2d65628e347512d892649a8e3b2d90ca6710008aef52f67d0b78319b4` | ✅ **IDÊNTICO** |
| 5 | `landing.js` | `73.637` | `9c7c6963aefcb64fb12a26cd824a9a6d411e0149d3d344d2104d479f1f2483b0` | `9c7c6963aefcb64fb12a26cd824a9a6d411e0149d3d344d2104d479f1f2483b0` | ✅ **IDÊNTICO** |
| 6 | `privacy-policy.html` | `23.096` | `3f0d1c5965f6f6e9f3253ba3592059c70002f1e0bc49a4b913cd96448dfe0113` | `3f0d1c5965f6f6e9f3253ba3592059c70002f1e0bc49a4b913cd96448dfe0113` | ✅ **IDÊNTICO** |
| 7 | `privacy.js` | `43.366` | `f3587e3abfa31d69e29fe7bff0706a982dff105e5887ee1ffb72649d6bed9781` | `f3587e3abfa31d69e29fe7bff0706a982dff105e5887ee1ffb72649d6bed9781` | ✅ **IDÊNTICO** |
| 8 | `PRIVACY_POLICY.md` | `32.845` | `20eef7ed5427c1f5cc1ce5ff94671e8d7ef472869faa69ed3a4247632dcf9e41` | `20eef7ed5427c1f5cc1ce5ff94671e8d7ef472869faa69ed3a4247632dcf9e41` | ✅ **IDÊNTICO** |
| 9 | `TERMS.md` | `32.845` | `20eef7ed5427c1f5cc1ce5ff94671e8d7ef472869faa69ed3a4247632dcf9e41` | `20eef7ed5427c1f5cc1ce5ff94671e8d7ef472869faa69ed3a4247632dcf9e41` | ✅ **IDÊNTICO** |
| 10 | `README.md` | `2.981` | `899d28b428ca7747ff43f914a9632ede62681380c33eb4b414d60bc64eb15027` | `899d28b428ca7747ff43f914a9632ede62681380c33eb4b414d60bc64eb15027` | ✅ **IDÊNTICO** |
| 11 | `manifest.webmanifest` | `676` | `0e5be9805d88aacf8e241d59a16dbc0b18f0733b770170c9012eaf683a1c77a8` | `0e5be9805d88aacf8e241d59a16dbc0b18f0733b770170c9012eaf683a1c77a8` | ✅ **IDÊNTICO** |
| 12 | `robots.txt` | `83` | `c4a90816ec31d1c31d439dc88b82476ad0cb41fc593480a496ffc1c4524e852d` | `c4a90816ec31d1c31d439dc88b82476ad0cb41fc593480a496ffc1c4524e852d` | ✅ **IDÊNTICO** |
| 13 | `sitemap.xml` | `1.297` | `1e13812188628deea469d3350a2823ded26b10556d1b41cc84f50c7fb3f9d770` | `1e13812188628deea469d3350a2823ded26b10556d1b41cc84f50c7fb3f9d770` | ✅ **IDÊNTICO** |
| 14 | `assets/favicon.svg` | `1.062` | `ace5ff25203d5359274421d4a814c3150d816ce672a7999d366e3a9b798530b5` | `ace5ff25203d5359274421d4a814c3150d816ce672a7999d366e3a9b798530b5` | ✅ **IDÊNTICO** |
| 15 | `assets/logo-mark.svg` | `1.002` | `f8788c88a66fd3047c0daf57e623d42fcba5355618fc9dfa549a6a8e6bd06b5c` | `f8788c88a66fd3047c0daf57e623d42fcba5355618fc9dfa549a6a8e6bd06b5c` | ✅ **IDÊNTICO** |
| 16 | `assets/og-banner.svg` | `3.507` | `e06b84c8549bd716e8f0a91b97aa1c0e46b83780034349c89b860ad8d998100f` | `e06b84c8549bd716e8f0a91b97aa1c0e46b83780034349c89b860ad8d998100f` | ✅ **IDÊNTICO** |

---

## 3. Histórico de Resolução dos 4 Bloqueadores (`VOZ08-B01` a `VOZ08-B04`)

| ID | Descrição do Bloqueador | Commit da Correção | Status Final (`2662729`) | Evidência Verificada no Chrome Headless |
|---|---|---|---|---|
| **`VOZ08-B01`** | Divergência de seletores CSS vs. JS nos cartões `.caa-card.fitz-*` e chips `.sentence-chip.fitz-*` | `7d04788` | ✅ **RESOLVIDO (`PASS`)** | Todos os 20 cartões `.caa-card` (`195.31px x 122.00px`, `border-radius: 16px`, borda `3px`/`4px`) e todos os chips `.sentence-chip` (`height: 48.00px`, `width: 67.88px a 183.72px`, `border-radius: 12px`) aplicam as cores exatas da Chave de Fitzgerald nos 3 temas (`light`, `dark`, `high-contrast`). |
| **`VOZ08-B02`** | Chave i18n `sim.status_empty` não definida em `landing.js` (linha 1018) ao clicar em **"Falar Frase"** com a tira vazia | `2662729` | ✅ **RESOLVIDO (`PASS`)** | Clicar em `#sim-btn-speak` com a `SentenceStrip` vazia exibe em `#speech-status-text`: `pt` = *"Toque em um ou mais cartões abaixo para montar uma frase antes de falar."*; `en` = *"Tap one or more cards below to build a sentence before speaking."*; `es` = *"Toca una o más tarjetas de abajo para armar una frase antes de hablar."*. |
| **`VOZ08-B03`** | Overflow horizontal em `privacy-policy.html` (`320px`, `360px`, `390px`) e em `index.html` (`1280px`/`1440px` em `es` + `high-contrast`) | `7d04788` | ✅ **RESOLVIDO (`PASS 144/144`)** | `0` ocorrências de overflow horizontal (`overflowX === 0px`, `scrollWidth === clientWidth`) em todas as `144` combinações (`2` páginas × `3` idiomas × `3` temas × `8` viewports de `320px` a `1920px`). |
| **`VOZ08-B04`** | Link inexistente `terms.html` (`HTTP 404`) em `sitemap.xml` | `7d04788` | ✅ **RESOLVIDO (`PASS`)** | Entrada `terms.html` removida de `sitemap.xml` e `docs/sitemap.xml`. Todas as URLs de `sitemap.xml` respondem `200 OK`. |

---

## 4. Matriz Final de Casos de Teste (`TC-VOZ-WEB-01` a `TC-VOZ-WEB-10` — `10/10 PASS`)

| ID do Caso de Teste | Escopo / Requisito Auditado | Referência na Spec | Resultado (`2662729`) | Resumo da Evidência |
|---|---|---|---|---|
| **`TC-VOZ-WEB-01`** | Paridade `SHA-256` entre `/workspace/vozviva-web/` e `/workspace/vozviva-web/docs/` | `UX-08` / Escopo `[VOZ-08]` | ✅ **PASS** | `16/16` arquivos com hashes `SHA-256` 100% idênticos. |
| **`TC-VOZ-WEB-02`** | Funcionalidade Interativa do Simulador CAA (`#simulador`) + `window.speechSynthesis` | `VOZVIVA_UX_DESIGN_SPEC.md` (`UX-08`) | ✅ **PASS** | Adição/remoção na `SentenceStrip`, abas (`20` cartões em `6` categorias), botões Apagar/Limpar/Falar, aviso de tira vazia (`sim.status_empty`), toggles (`Falar ao tocar`, `CAIXA ALTA`, `Velocidade 1.0x/0.85x/0.75x`) e `speechSynthesis` 100% funcionais nos 3 idiomas. |
| **`TC-VOZ-WEB-03`** | Dupla Codificação Visual da Chave de Fitzgerald no Simulador CAA e `SentenceStrip` | `VOZVIVA_UX_DESIGN_SPEC.md` Seção 2.2 | ✅ **PASS** | Símbolos geométricos (`●`, `▶`, `■`, `◆`, `★`, `▲`, `⊞`) + cores semânticas de fundo, cabeçalho, texto e borda (`3px`/`4px`) aplicados em todos os 20 cartões `.caa-card` e chips `.sentence-chip` nos 3 temas. |
| **`TC-VOZ-WEB-04`** | Troca Dinâmica dos 3 Temas (`light`, `dark`, `high-contrast`) e Persistência | `VOZVIVA_UX_DESIGN_SPEC.md` Seção 2.1 | ✅ **PASS** | Troca imediata via `[data-theme]` e persistência em `localStorage('vozviva_theme')` funcionando em 100% dos componentes em `index.html` e `privacy-policy.html`. |
| **`TC-VOZ-WEB-05`** | Internacionalização Trilíngue (`pt-BR`, `en`, `es`) em `index.html` e `privacy-policy.html` | `VOZVIVA_CAA_VOCABULARY_AND_I18N_SPEC.md` | ✅ **PASS** | `169/169` chaves `[data-i18n]` em `index.html`, `70/70` em `privacy-policy.html` e todas as strings dinâmicas de `landing.js` (incluindo `sim.status_empty`) traduzidas sem recarregar a página. |
| **`TC-VOZ-WEB-06`** | Conformidade Jurídica Trilíngue, Âncoras (`#privacidade`, `#termos`, `#isencao-clinica`, `#licencas`) e `sitemap.xml` | `VOZVIVA_LEGAL_LICENSING_AND_PRIVACY_SPEC.md` | ✅ **PASS** | Todas as 11 âncoras jurídicas, textos da LGPD Art. 14, COPPA, GDPR-K, EULA proprietário gratuito, Isenção Clínica, créditos Mulberry/ARASAAC e `sitemap.xml` 100% íntegros. |
| **`TC-VOZ-WEB-07`** | Higiene de Copy (Blacklist Técnica) & Privacidade Absoluta (`Zero Trackers`) | `VOZVIVA_CAA_VOCABULARY_AND_I18N_SPEC.md` Seção 1 | ✅ **PASS** | **`0` ocorrências** de `Flutter`, `Dart`, `Drift`, `SQLite`, `Riverpod`, `GoRouter`, `RF-` ou `RNF-`. **`0` scripts de analytics/cookies**. |
| **`TC-VOZ-WEB-08`** | Acessibilidade WCAG 2.1 AA+ (Semântica HTML5, ARIA, Contraste, `:focus-visible`, Alvos `>= 48x48px`) | `VOZVIVA_UX_DESIGN_SPEC.md` Seção 6 | ✅ **PASS** | Todos os controles interativos, cartões `.caa-card` (`195.31px x 122.00px`) e chips `.sentence-chip` (`height: 48.00px`, `width >= 67.88px`) cumprem `>= 48x48px`, com contrastes `>= 9.23:1` no Claro, `>= 14.09:1` no Escuro e `19.56:1 a 21.00:1` no Alto Contraste WCAG AAA. |
| **`TC-VOZ-WEB-09`** | Responsividade Multi-Viewport (`320px` a `1920px`, incluindo `360x800`, `768x1024`, `1440x900`) | `VOZVIVA_UX_DESIGN_SPEC.md` (`UX-08`) | ✅ **PASS (`144/144`)** | `scrollWidth === clientWidth` (`overflowX === 0px`) em **100% das 144 combinações** testadas em `index.html` e `privacy-policy.html`. |
| **`TC-VOZ-WEB-10`** | Saúde de Console, Exceções JS (`pageerror`) e Resiliência Offline das Métricas | `VOZVIVA_UX_DESIGN_SPEC.md` (`UX-08`) | ✅ **PASS** | `0` exceções JavaScript (`pageerror = 0`) e fallback gracioso offline em `#download-metrics`. |

---

## 5. Medições Computadas dos Cartões `.caa-card` e Chips `.sentence-chip` nos 3 Temas (`VOZ08-B01`)

| Categoria Fitzgerald | Elemento | Dimensões (`1440x900`) | Tema Claro (`light`: Bg / Borda / Texto / Contraste) | Tema Escuro (`dark`: Bg / Borda / Texto / Contraste) | Alto Contraste (`high-contrast`: Bg / Borda / Texto / Contraste) | Status |
|---|---|---|---|---|---|---|
| **`people` (`●`)** | `.caa-card` (`eu`) | `195.31 x 122.00px` (`r=16px`) | `rgb(255,251,235)` / `rgb(217,119,6)` / `rgb(28,25,23)` (**`16.86:1`**) | `rgb(46,35,11)` / `rgb(251,191,36)` / `rgb(248,250,252)` (**`14.74:1`**) | `rgb(0,0,0)` / `rgb(250,204,21)` / `rgb(255,255,255)` (**`21.00:1`**) | ✅ **PASS** |
| **`verbs` (`▶`)** | `.caa-card` (`quero`) | `195.31 x 122.00px` (`r=16px`) | `rgb(236,253,245)` / `rgb(5,150,105)` / `rgb(6,78,59)` (**`9.23:1`**) | `rgb(8,46,34)` / `rgb(52,211,153)` / `rgb(248,250,252)` (**`14.09:1`**) | `rgb(0,0,0)` / `rgb(74,222,128)` / `rgb(255,255,255)` (**`21.00:1`**) | ✅ **PASS** |
| **`nouns` (`■`)** | `.caa-card` (`agua`) | `195.31 x 122.00px` (`r=16px`) | `rgb(255,247,237)` / `rgb(234,88,12)` / `rgb(67,20,7)` (**`14.74:1`**) | `rgb(48,24,9)` / `rgb(251,146,60)` / `rgb(248,250,252)` (**`15.93:1`**) | `rgb(0,0,0)` / `rgb(251,146,60)` / `rgb(255,255,255)` (**`21.00:1`**) | ✅ **PASS** |
| **`descriptors` (`◆`)** | `.caa-card` (`feliz`) | `195.31 x 122.00px` (`r=16px`) | `rgb(239,246,255)` / `rgb(37,99,235)` / `rgb(30,58,138)` (**`9.52:1`**) | `rgb(15,35,66)` / `rgb(96,165,250)` / `rgb(248,250,252)` (**`14.99:1`**) | `rgb(0,0,0)` / `rgb(56,189,248)` / `rgb(255,255,255)` (**`21.00:1`**) | ✅ **PASS** |
| **`social` (`★`)** | `.caa-card` (`obrigado`) | `195.31 x 122.00px` (`r=16px`) | `rgb(255,241,242)` / `rgb(225,29,72)` / `rgb(76,5,25)` (**`14.23:1`**) | `rgb(49,16,30)` / `rgb(251,113,133)` / `rgb(248,250,252)` (**`16.41:1`**) | `rgb(0,0,0)` / `rgb(244,114,182)` / `rgb(255,255,255)` (**`21.00:1`**) | ✅ **PASS** |
| **`urgent` (`▲`)** | `.caa-card` (`ajuda`) | `195.31 x 122.00px` (`r=16px`) | `rgb(254,242,242)` / `rgb(220,38,38)` / `rgb(69,10,10)` (**`14.76:1`**) | `rgb(56,17,17)` / `rgb(248,113,113)` / `rgb(248,250,252)` (**`15.97:1`**) | `rgb(0,0,0)` / `rgb(255,51,51)` / `rgb(255,255,0)` (**`19.56:1`**) | ✅ **PASS** |
| **Chips `SentenceStrip`** | `.sentence-chip.fitz-*` | `67.88–183.72px x 48.00px` (`r=12px`) | Mesma paleta semântica (`9.23:1` a `16.86:1`) | Mesma paleta semântica (`14.09:1` a `16.41:1`) | Mesma paleta AAA (`19.56:1` a `21.00:1`) | ✅ **PASS (`>= 48x48px`)** |

---

## 6. Matriz Multi-Viewport (`144/144 PASS` — `overflowX === 0px`)

| Página | Viewport | `pt-BR` (`light` / `dark` / `hc`) | `en` (`light` / `dark` / `hc`) | `es` (`light` / `dark` / `hc`) | Status |
|---|---|---|---|---|---|
| `index.html` | `320x568` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `360x800` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `390x844` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `768x1024` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `1024x768` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `1280x800` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `1440x900` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `index.html` | `1920x1080` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `320x568` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `360x800` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `390x844` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `768x1024` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `1024x768` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `1280x800` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `1440x900` *(Exigido)* | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
| `privacy-policy.html` | `1920x1080` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | `0px` / `0px` / `0px` | ✅ **PASS** |
