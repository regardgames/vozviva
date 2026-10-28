# Política de Privacidade, Termos de Uso (EULA), Isenção Clínica e Licenças — VozViva (CAA)

**Controladora e Desenvolvedora:** Regard Games (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA` — CNPJ `54.480.912/0001-37`)  
**Sede:** Picos, Piauí, Brasil (`America/Fortaleza`, BRT / UTC-3)  
**Última atualização:** 28 de outubro de 2026  
**Portal Oficial:** <https://regardgames.github.io/vozviva/>  
**Documento Web Interativo Trilíngue:** <https://regardgames.github.io/vozviva/privacy-policy.html>

---

## Sumário Rápido por Idioma e Âncora
- **[Português (Brasil)](#pt-br)** | [Política de Privacidade](#pt-privacidade) | [Termos de Uso e EULA (`#termos`)](#termos) | [Isenção Clínica (`#isencao-clinica`)](#isencao-clinica) | [Licenças e Atribuições (`#licencas`)](#licencas)
- **[English](#en)** | [Privacy Policy](#en-privacy) | [Terms of Use & EULA](#en-terms) | [Clinical Disclaimer](#en-disclaimer) | [Symbol Attributions](#en-licenses)
- **[Español](#es)** | [Política de Privacidad](#es-privacy) | [Términos de Uso y EULA](#es-terms) | [Aviso Clínico](#es-disclaimer) | [Licencias y Atribuciones](#es-licenses)

---

<a id="pt-br"></a>
<a id="pt-privacidade"></a>
## 🇧🇷 Português (Brasil) — Política de Privacidade do VozViva

### Resumo Rápido (Linguagem Simples)
- **O aplicativo VozViva instalado funciona 100% offline.** Toda a comunicação da criança, pranchas, fotos, gravações de voz e configurações ficam armazenadas **exclusivamente no seu próprio dispositivo**.
- **Zero coleta de dados pessoais:** A Regard Games **não possui servidores de coleta**, não exige criação de conta, não solicita nome, e-mail, telefone ou localização e não tem acesso a nada do que é falado ou criado no aplicativo.
- **Zero anúncios e zero rastreadores:** O VozViva é **100% gratuito**, sem publicidade, sem compras dentro do app e sem ferramentas de análise ou telemetria de terceiros.
- **Proteção integral à criança:** O **Modo Criança** é totalmente isolado da internet e bloqueia qualquer acesso a links externos, edições ou configurações sem a validação do adulto no **Modo Responsável**.

### 1. Identificação do Controlador e Escopo
Esta Política de Privacidade descreve como o aplicativo **VozViva — Plataforma de Comunicação e Desenvolvimento Assistivo (CAA)** (`com.regard.vozviva`) e seu portal institucional (`https://regardgames.github.io/vozviva/`) operam em relação à privacidade. O VozViva é desenvolvido e mantido pela **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, inscrita no CNPJ sob o nº `54.480.912/0001-37`), sediada em **Picos, Piauí, Brasil**, em estrita observância à **Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018, especialmente o Art. 14 sobre o melhor interesse de crianças e adolescentes)**, ao **Estatuto da Criança e do Adolescente (ECA — Lei nº 8.069/1990)**, ao **GDPR / UK-GDPR**, ao **COPPA (EUA)**, ao **CCPA/CPRA** e ao **PIPEDA (Canadá)**.

### 2. Dados Armazenados Localmente no Seu Dispositivo
Para permitir a Comunicação Aumentativa e Alternativa (CAA) personalizada, o aplicativo armazena **apenas localmente, na área privada do sistema operacional do próprio aparelho do usuário**:
1. **Perfis, pranchas e cartões de comunicação:** vocabulário essencial e personalizado, tamanhos de grade, cores da Chave de Fitzgerald e preferências visuais/auditivas;
2. **Mídias personalizadas (opcionais, criadas apenas no Modo Responsável):** fotografias ou imagens locais (armazenadas já sem metadados EXIF/GPS) e gravações de áudio feitas pela família ou profissional;
3. **Configurações de acessibilidade e segurança local:** idioma (`pt-BR`, `en`, `es`), velocidade/tom de síntese de voz (TTS), tempo de retenção de toque e o código de proteção do Modo Responsável (armazenado apenas como hash criptográfico local).

**A Regard Games jamais recebe, visualiza, sincroniza em nuvem ou compartilha esses dados.**

### 3. Permissões do Sistema Operacional (Just-in-Time)
O VozViva funciona integralmente sem exigir permissões invasivas:
- **Síntese de Voz (TTS) e Áudio:** utiliza os motores nativos de voz já presentes no seu sistema operacional (`Android`, `iOS`, `Windows` ou `Linux`), sem enviar o texto falado para servidores na internet.
- **Câmera, Galeria de Fotos e Microfone (Opcionais):** solicitados **exclusivamente sob demanda (*just-in-time*) dentro do Modo Responsável** quando o adulto decide fotografar um objeto/familiar ou gravar uma voz personalizada para um cartão. Caso negadas, o aplicativo continua funcionando normalmente com sua biblioteca de símbolos e voz sintetizada.
- **Sem permissões ocultas:** o aplicativo nunca solicita acesso a GPS/localização, agenda de contatos, telefone/SMS, Bluetooth, identificadores publicitários (`AAID`/`IDFA`) ou execução contínua em segundo plano.

### 4. Recursos Online Opcionais (Apenas no Modo Responsável)
No **Modo Criança**, o aplicativo realiza **zero conexões de rede**. No **Modo Responsável** (protegido por desafio de adulto e código PIN), existem apenas duas situações em que o adulto pode, por iniciativa própria, utilizar a internet:
1. **Busca Opcional de Pictogramas no Acervo Público ARASAAC:** se o responsável optar por pesquisar novos símbolos online no portal público **ARASAAC** (`api.arasaac.org` e `static.arasaac.org`, mantidos pelo Governo de Aragão, Espanha), o dispositivo enviará apenas o termo da palavra pesquisada e o código do idioma diretamente aos servidores do ARASAAC via conexão segura (HTTPS), sujeitando-se à política de privacidade e infraestrutura daquele serviço público no momento da consulta. Uma vez baixado o pictograma escolhido, ele passa a funcionar 100% offline no aparelho.
2. **Acesso voluntário a links institucionais:** abertura manual, pelo responsável, da documentação pública ou da página oficial de versões no GitHub (`github.com/regardgames/vozviva`).

### 5. Exportação e Restauração de Backups Criptografados (`.assistivebackup`)
O responsável pode exportar e restaurar cópias de segurança das pranchas e mídias em um arquivo local (`.assistivebackup`) protegido por **criptografia forte (AES-256-GCM)** derivada de uma senha escolhida pelo próprio adulto.
- A senha **nunca é salva** pela Regard Games nem pelo aplicativo; sem ela, o arquivo não pode ser aberto nem recuperado.
- O local onde o arquivo exportado será guardado (pasta local, pendrive ou serviço de armazenamento de escolha do adulto) passa a ser de responsabilidade exclusiva do usuário e do respectivo serviço escolhido.

### 6. Transparência sobre a Página Web Oficial e Downloads Diretos
A página institucional pública (`https://regardgames.github.io/vozviva/`) é estática, hospedada via **GitHub Pages** (`GitHub, Inc.`), e **não utiliza cookies de rastreamento, pixels publicitários ou Google Analytics**.
- Ao visitar a página web ou baixar instaladores das versões públicas no GitHub Releases, os servidores da infraestrutura do GitHub processam tecnicamente os registros padrão de conexão (como endereço IP e navegador) para entrega do conteúdo e segurança da rede, conforme a [Declaração de Privacidade do GitHub](https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement).
- Para exibir o painel informativo de **Métricas Públicas de Download**, a página web consulta no próprio navegador a API pública de versões do GitHub (`https://api.github.com/repos/regardgames/vozviva/releases`) utilizando `credentials: 'omit'` (sem envio de cookies) e guarda o resultado temporariamente apenas na memória da aba (`sessionStorage`). As preferências de idioma e tema visual da página web são salvas localmente no navegador (`localStorage`).

### 7. Controle Total, Retenção e Exclusão de Dados (Direitos do Titular)
Como todos os dados do aplicativo permanecem exclusivamente no seu aparelho, **você detém controle total e imediato sobre eles**:
- Você pode editar ou excluir qualquer perfil, prancha, cartão, foto ou áudio a qualquer momento no **Modo Responsável**;
- Você pode utilizar a função **"Apagar todos os dados locais"** nas configurações do Modo Responsável ou simplesmente desinstalar o aplicativo do sistema operacional para remover definitivamente todos os registros locais.

### 8. Contato sobre Privacidade e Proteção de Dados
Em caso de dúvidas sobre esta Política de Privacidade ou sobre proteção de dados, entre em contato pelos canais oficiais no repositório público (<https://github.com/regardgames/vozviva/issues>) ou pelo e-mail institucional: `privacidade@regardgames.com`.

---

<a id="termos"></a>
<a id="isencao-clinica"></a>
<a id="isencao"></a>
<a id="aviso-clinico"></a>
## 9. Termos de Uso, Licença de Software (EULA) e Aviso Importante de Saúde/Educação (`#termos`)

### 9.1. Licença de Uso Gratuita (Software Proprietário)
O aplicativo **VozViva** é de titularidade exclusiva da **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, CNPJ `54.480.912/0001-37`). É concedida ao usuário final (famílias, cuidadores, clínicas, escolas e profissionais) uma licença **gratuita, pessoal, não exclusiva, intransferível e revogável** para instalar e utilizar o aplicativo em seus dispositivos compatíveis (`Android`, `iOS`, `Windows` e `Linux`). É vedado vender, alugar, sublicenciar, distribuir versões modificadas ou cobrar de terceiros pelo acesso ou download do software VozViva, sem prejuízo dos direitos sobre bibliotecas e acervos de símbolos de terceiros regidos por suas respectivas licenças abertas.

### 9.2. Direitos sobre Conteúdos Criados pelo Usuário e Símbolos Abertos
As fotos, gravações de voz e pranchas personalizadas criadas pelo usuário pertencem integralmente ao próprio usuário. Os conjuntos de pictogramas **Mulberry Symbols** (`CC BY-SA`) e **ARASAAC** (`CC BY-NC-SA 4.0`) permanecem sob a titularidade de seus respectivos autores e licenças públicas (detalhadas na seção de Créditos e Licenças).

### 9.3. Aviso Importante — Natureza Assistiva e Não Substituição de Acompanhamento Profissional (`#isencao-clinica`)
**O VozViva é uma ferramenta tecnológica de apoio à Comunicação Aumentativa e Alternativa (CAA) e à inclusão cotidiana. Ele NÃO constitui dispositivo médico homologado, NÃO realiza diagnósticos clínicos e NÃO substitui a avaliação, o acompanhamento ou a prescrição individualizada de profissionais habilitados de Fonoaudiologia, Terapia Ocupacional, Psicologia, Pedagogia/Educação Especial ou Medicina.** Recomenda-se que a seleção de vocabulário e as estratégias de modelagem comunicativa sejam sempre que possível acompanhadas por profissionais especializados.

### 9.4. Fornecimento "No Estado em que se Encontra" (*As-Is*) e Segurança
O software é disponibilizado gratuitamente *"no estado em que se encontra"* (*as-is*), na máxima extensão permitida pela legislação aplicável. Os recursos de **Modo Criança**, retenção de toque e orientação para fixação de tela (*Acesso Guiado* / *Fixar aplicativo*) são auxílios de usabilidade e **não substituem a supervisão presencial de um adulto responsável** nem devem ser utilizados como único meio de chamado em emergências médicas ou de segurança. O responsável é encarregado de guardar em local seguro a senha de seus arquivos de backup (`.assistivebackup`). Estes Termos são regidos pelas leis da República Federativa do Brasil.

---

<a id="licencas"></a>
<a id="creditos"></a>
## 10. Créditos e Licenças de Símbolos (`#licencas`)

### Mulberry Symbols (Biblioteca Base Offline)
> **Mulberry Symbols** — Copyright © 2018–2026 **Steve Lee / Paxton Ditchfield** (<https://mulberrysymbols.org/>).  
> Licenciado sob a licença **Creative Commons Atribuição-CompartilhaIgual (CC BY-SA 2.0 UK / 4.0 Internacional)** (<https://creativecommons.org/licenses/by-sa/2.0/uk/> | <https://creativecommons.org/licenses/by-sa/4.0/>).  
> *Nota de conformidade:* Os arquivos SVG originais da coleção Mulberry Symbols incluídos localmente no VozViva permanecem íntegros e licenciados sob `CC BY-SA`. Caso qualquer símbolo Mulberry seja adaptado, a imagem resultante do símbolo permanece sob a mesma licença `CC BY-SA`.

### Pictogramas ARASAAC (Consulta Online Opcional e Cache Local)
> Os símbolos pictográficos utilizados são propriedade do **Governo de Aragão (Espanha)** e foram criados por **Sergio Palao** para a **ARASAAC** (<https://arasaac.org>), que os distribui sob a licença **Creative Commons BY-NC-SA 4.0 Internacional** (<https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt>).  
> *Autor:* Sergio Palao · *Proprietário:* Gobierno de Aragón (España) · *Fonte:* <https://arasaac.org> · *Licença:* CC BY-NC-SA 4.0 (Atribuição — Uso Não Comercial — CompartilhaIgual).

---

<a id="en"></a>
<a id="en-privacy"></a>
## 🇺🇸 English — VozViva Privacy Policy

### Quick Summary (Plain Language)
- **The installed VozViva app works 100% offline.** All communication boards, cards, family photos, voice recordings, and settings stay **exclusively on your own device**.
- **Zero personal data collection:** Regard Games **operates no data-collection servers**, requires no account registration, never asks for names, emails, phone numbers, or location, and has zero access to anything spoken or created in the app.
- **Zero ads and zero trackers:** VozViva is **100% free**, with no advertising, no in-app purchases, and no third-party analytics or telemetry SDKs.
- **Built for child protection:** **Child Mode** is completely isolated from the internet and blocks access to external links, editing tools, or settings without adult verification in **Caregiver Mode**.

### 1. Controller Identity and Scope
This Privacy Policy explains how the **VozViva — Augmentative and Alternative Communication (AAC) Platform** application (`com.regard.vozviva`) and its public website (`https://regardgames.github.io/vozviva/`) handle privacy. VozViva is developed and maintained by **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, Brazil Corporate Tax ID / CNPJ `54.480.912/0001-37`), headquartered in **Picos, Piauí, Brazil**, in strict compliance with the **Brazilian General Data Protection Law (LGPD — Law No. 13,709/2018, Article 14 on the best interests of children)**, **GDPR / UK-GDPR**, **COPPA (U.S. Children's Online Privacy Protection Act)**, **CCPA/CPRA**, and **PIPEDA (Canada)**.

### 2. Data Stored Locally on Your Device
To provide personalized Augmentative and Alternative Communication (AAC), the app stores the following information **solely within your device's private local storage**:
1. **Profiles, communication boards, and cards:** core and customized vocabulary, grid sizes, Fitzgerald Key colors, and visual/audio preferences;
2. **Custom media (optional, created only in Caregiver Mode):** local photos or images (saved stripped of EXIF/GPS metadata) and voice recordings created by parents, caregivers, or clinicians;
3. **Accessibility and local security settings:** interface/speech language (`pt-BR`, `en`, `es`), Text-to-Speech (TTS) rate/pitch, touch hold/debounce settings, and the Caregiver Mode passcode (stored strictly as a local cryptographic hash).

**Regard Games never receives, views, cloud-syncs, or shares any of this information.**

### 3. Operating System Permissions (Just-in-Time)
VozViva operates fully without requiring invasive permissions:
- **Text-to-Speech (TTS) & Audio:** uses the native offline voice engines built into your operating system (`Android`, `iOS`, `Windows`, or `Linux`), without sending spoken text to external servers.
- **Camera, Photo Library, and Microphone (Optional):** requested **strictly on demand (*just-in-time*) inside Caregiver Mode** only when an adult chooses to take a photo or record custom audio for a communication card. If declined, the app continues to work normally with built-in symbols and synthesized speech.
- **No background or tracking permissions:** the app never requests GPS/location, contacts, phone/SMS, Bluetooth, advertising IDs (`AAID`/`IDFA`), or background tracking.

### 4. Optional Online Features (Caregiver Mode Only)
In **Child Mode**, the app makes **zero network connections**. In **Caregiver Mode** (protected by an adult verification challenge and PIN), the internet is only accessed if the adult explicitly chooses to:
1. **Search Optional Pictograms via the Public ARASAAC Catalog:** if a caregiver or therapist searches online for additional symbols from **ARASAAC** (`api.arasaac.org` and `static.arasaac.org`, operated by the Government of Aragon, Spain), the device sends only the search keyword and language code over HTTPS directly to ARASAAC's servers, which process the request under their own public service privacy policy. Once downloaded, the symbol is cached locally for 100% offline use.
2. **Open official documentation or release pages:** manual navigation by the adult to our public documentation or GitHub Releases page (`github.com/regardgames/vozviva`).

### 5. Encrypted Local Backups (`.assistivebackup`)
Caregivers can export and restore encrypted backup files (`.assistivebackup`) protected with **AES-256-GCM encryption** derived from a password chosen by the adult.
- Your backup password is **never stored** by Regard Games or the app; if lost, the backup file cannot be decrypted.
- Once exported, the storage location chosen by the adult (local folder, USB drive, or third-party cloud drive) is governed solely by the user and that chosen provider.

### 6. Official Website and Direct Downloads Transparency
Our public website (`https://regardgames.github.io/vozviva/`) is a static site hosted on **GitHub Pages** (`GitHub, Inc.`) and uses **zero tracking cookies, ad pixels, or third-party analytics**.
- When you visit the website or download installers from GitHub Releases, GitHub's infrastructure processes standard technical connection logs (such as IP address and browser user-agent) for content delivery and security under the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- To display the informational **Public Download Metrics** counter, your browser queries the public GitHub Releases API (`https://api.github.com/repos/regardgames/vozviva/releases`) with `credentials: 'omit'` (sending no cookies) and caches the response temporarily in `sessionStorage`. Website language and theme preferences are saved locally in `localStorage`.

### 7. Full User Control, Retention, and Data Deletion
Because all app data resides exclusively on your device, **you have immediate, complete control**:
- You can edit or delete any profile, board, card, photo, or recording at any time in **Caregiver Mode**;
- You can use **"Delete all local data"** in Caregiver Mode settings or uninstall the app to permanently erase all local records from your device.

### 8. Privacy Contact
For privacy questions or requests, please reach out via our official repository (<https://github.com/regardgames/vozviva/issues>) or email `privacidade@regardgames.com`.

---

<a id="en-terms"></a>
<a id="en-disclaimer"></a>
## 9. Terms of Use, Software License (EULA), and Clinical Disclaimer

### 9.1. Free End-User License Agreement (Proprietary Freeware)
The **VozViva** application is owned by **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, CNPJ `54.480.912/0001-37`). You are granted a **free, personal, non-exclusive, non-transferable, revocable license** to install and use the application on compatible `Android`, `iOS`, `Windows`, and `Linux` devices for personal, family, educational, or clinical support purposes. You may not sell, rent, sublicense, redistribute modified binaries, or charge any fee for access to VozViva, without prejudice to open-licensed symbol libraries governed by their respective licenses.

### 9.2. User-Created Content and Open Symbol Libraries
Photos, voice recordings, and custom boards created by you remain your sole property. The **Mulberry Symbols** (`CC BY-SA`) and **ARASAAC** (`CC BY-NC-SA 4.0`) pictogram sets remain owned by their respective authors under their public licenses.

### 9.3. Important Clinical, Medical, and Educational Disclaimer
**VozViva is an assistive communication technology tool designed to support daily Augmentative and Alternative Communication (AAC). It is NOT a certified medical device, does NOT perform clinical diagnoses, and does NOT replace individualized assessment, therapy, or guidance from licensed Speech-Language Pathologists (SLPs), Occupational Therapists, Psychologists, Special Educators, or Physicians.**

### 9.4. "As-Is" Provision and Safety Notice
The software is provided free of charge *"as is"*, to the maximum extent permitted by applicable law. **Child Mode**, touch hold settings, and OS screen-pinning guides (*Guided Access* / *App Pinning*) are usability aids and **do not replace active adult supervision**, nor should the app be relied upon as a sole emergency call system. Users are solely responsible for safeguarding their `.assistivebackup` passwords. These Terms are governed by the laws of the Federative Republic of Brazil.

---

<a id="en-licenses"></a>
## 10. Symbol Credits & Open Licenses

### Mulberry Symbols (Bundled Offline Core Library)
> **Mulberry Symbols** — Copyright © 2018–2026 **Steve Lee / Paxton Ditchfield** (<https://mulberrysymbols.org/>).  
> Licensed under the **Creative Commons Attribution-ShareAlike License (CC BY-SA 2.0 UK / 4.0 International)** (<https://creativecommons.org/licenses/by-sa/2.0/uk/> | <https://creativecommons.org/licenses/by-sa/4.0/>).

### ARASAAC Pictograms (Optional Online Search & Local Cache)
> The pictographic symbols used are the property of the **Government of Aragon (Spain)** and have been created by **Sergio Palao** for **ARASAAC** (<https://arasaac.org>), that distributes them under **Creative Commons License BY-NC-SA 4.0 International** (<https://creativecommons.org/licenses/by-nc-sa/4.0/>).  
> *Author:* Sergio Palao · *Owner:* Gobierno de Aragón (Spain) · *Source:* <https://arasaac.org> · *License:* CC BY-NC-SA 4.0.

---

<a id="es"></a>
<a id="es-privacy"></a>
## 🇪🇸 Español — Política de Privacidad de VozViva

### Resumen Rápido (Lenguaje Claro)
- **La aplicación VozViva instalada funciona 100% sin internet (offline).** Toda la comunicación, tableros, fotos familiares, grabaciones de voz y ajustes se guardan **exclusivamente en tu propio dispositivo**.
- **Cero recopilación de datos personales:** Regard Games **no tiene servidores de recolección de datos**, no pide crear cuentas, no solicita nombres, correos, teléfonos ni ubicación, y no tiene acceso a nada de lo que se dice o crea en la aplicación.
- **Cero anuncios y cero rastreadores:** VozViva es **100% gratuita**, sin publicidad, sin compras dentro de la aplicación y sin herramientas de analítica o telemetría de terceros.
- **Protección infantil integral:** El **Modo Niño** está totalmente aislado de internet y bloquea cualquier acceso a enlaces externos, edición o configuración sin la verificación de un adulto en el **Modo Responsable**.

### 1. Identificación del Responsable y Alcance
Esta Política de Privacidad describe cómo la aplicación **VozViva — Plataforma de Comunicación Aumentativa y Alternativa (CAA)** (`com.regard.vozviva`) y su sitio web institucional (`https://regardgames.github.io/vozviva/`) protegen tu privacidad. VozViva es desarrollada y mantenida por **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, CNPJ `54.480.912/0001-37`), con sede en **Picos, Piauí, Brasil**, en cumplimiento de la **Ley General de Protección de Datos de Brasil (LGPD — Ley N.º 13.709/2018, Art. 14 sobre el interés superior de niños y adolescentes)**, el **GDPR / UK-GDPR**, **COPPA (EE. UU.)**, **CCPA/CPRA** y **PIPEDA (Canadá)**.

### 2. Datos Almacenados Localmente en tu Dispositivo
Para permitir la Comunicación Aumentativa y Alternativa (CAA) personalizada, la aplicación guarda **únicamente de forma local, en el almacenamiento privado de tu propio dispositivo**:
1. **Perfiles, tableros y tarjetas de comunicación:** vocabulario esencial y personalizado, tamaños de cuadrícula, colores de la Clave de Fitzgerald y preferencias visuales/auditivas;
2. **Medios personalizados (opcionales, creados solo en el Modo Responsable):** fotografías o imágenes locales (guardadas sin metadatos EXIF/GPS) y grabaciones de voz realizadas por la familia o el terapeuta;
3. **Ajustes de accesibilidad y seguridad local:** idioma (`pt-BR`, `en`, `es`), velocidad/tono de síntesis de voz (TTS), tiempo de pulsación y el código PIN del Modo Responsable (guardado únicamente como hash criptográfico local).

**Regard Games jamás recibe, visualiza, sincroniza en la nube ni comparte estos datos.**

### 3. Permisos del Sistema Operativo (Just-in-Time)
VozViva funciona completamente sin requerir permisos invasivos:
- **Síntesis de Voz (TTS) y Audio:** utiliza los motores de voz nativos ya integrados en tu sistema operativo (`Android`, `iOS`, `Windows` o `Linux`), sin enviar el texto hablado a servidores externos.
- **Cámara, Galería de Fotos y Micrófono (Opcionales):** se solicitan **exclusivamente bajo demanda (*just-in-time*) dentro del Modo Responsable** solo cuando el adulto decide tomar una foto o grabar un audio personalizado para una tarjeta. Si se rechazan, la aplicación sigue funcionando normalmente con sus símbolos integrados y voz sintetizada.
- **Sin permisos ocultos:** la aplicación nunca solicita acceso a GPS/ubicación, contactos, teléfono/SMS, Bluetooth, identificadores publicitarios (`AAID`/`IDFA`) ni seguimiento en segundo plano.

### 4. Funciones en Línea Opcionales (Solo en Modo Responsable)
En el **Modo Niño**, la aplicación realiza **cero conexiones de red**. En el **Modo Responsable** (protegido por desafío para adultos y código PIN), solo se accede a internet si el adulto decide explícitamente:
1. **Buscar Pictogramas Opcionales en el Catálogo Público ARASAAC:** si el adulto busca nuevos símbolos en línea en **ARASAAC** (`api.arasaac.org` y `static.arasaac.org`, gestionados por el Gobierno de Aragón, España), el dispositivo envía únicamente el término buscado y el idioma mediante HTTPS directamente a los servidores de ARASAAC, bajo la política de privacidad de dicho servicio público. Una vez descargado el pictograma, queda guardado localmente para uso 100% sin conexión.
2. **Abrir enlaces institucionales:** apertura manual, por parte del adulto, de la documentación pública o de la página oficial de versiones en GitHub (`github.com/regardgames/vozviva`).

### 5. Copias de Seguridad Locales Cifradas (`.assistivebackup`)
El adulto responsable puede exportar y restaurar copias de seguridad (`.assistivebackup`) protegidas con **cifrado fuerte (AES-256-GCM)** derivado de una contraseña elegida por el propio adulto.
- La contraseña **nunca es guardada** por Regard Games ni por la aplicación; sin ella, el archivo no puede abrirse ni recuperarse.
- El lugar donde el adulto decida guardar el archivo exportado (carpeta local, memoria USB o nube de su elección) es responsabilidad exclusiva del usuario y del proveedor elegido.

### 6. Transparencia sobre el Sitio Web Oficial y Descargas Directas
El sitio web institucional (`https://regardgames.github.io/vozviva/`) es estático, alojado en **GitHub Pages** (`GitHub, Inc.`), y **no utiliza cookies de rastreo, píxeles publicitarios ni analítica de terceros**.
- Al visitar el sitio web o descargar instaladores desde GitHub Releases, la infraestructura de GitHub procesa registros técnicos estándar de conexión (como dirección IP y navegador) para la entrega del contenido y seguridad, según la [Declaración de Privacidad de GitHub](https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement).
- Para mostrar el panel informativo de **Métricas Públicas de Descarga**, tu navegador consulta la API pública de versiones de GitHub (`https://api.github.com/repos/regardgames/vozviva/releases`) con `credentials: 'omit'` (sin enviar cookies) y guarda el resultado temporalmente en `sessionStorage`. Las preferencias de idioma y tema visual del sitio web se guardan localmente en `localStorage`.

### 7. Control Total, Retención y Eliminación de Datos
Como todos los datos de la aplicación permanecen exclusivamente en tu dispositivo, **tienes control total e inmediato sobre ellos**:
- Puedes editar o eliminar cualquier perfil, tablero, tarjeta, foto o grabación en cualquier momento desde el **Modo Responsable**;
- Puedes usar la opción **"Borrar todos los datos locales"** en los ajustes del Modo Responsable o desinstalar la aplicación para eliminar definitivamente todos los registros locales.

### 8. Contacto de Privacidad
Si tienes dudas sobre esta Política de Privacidad, contáctanos a través de nuestro repositorio oficial (<https://github.com/regardgames/vozviva/issues>) o al correo `privacidade@regardgames.com`.

---

<a id="es-terms"></a>
<a id="es-disclaimer"></a>
## 9. Términos de Uso, Licencia de Software (EULA) y Aviso Clínico Importante

### 9.1. Licencia de Uso Gratuita (Software Propietario Gratuito)
La aplicación **VozViva** es propiedad exclusiva de **Regard Games** (`DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA`, CNPJ `54.480.912/0001-37`). Se otorga al usuario final una licencia **gratuita, personal, no exclusiva, intransferible y revocable** para instalar y utilizar la aplicación en dispositivos compatibles (`Android`, `iOS`, `Windows` y `Linux`) con fines personales, familiares, educativos o de apoyo clínico. Queda prohibido vender, alquilar, sublicenciar, redistribuir versiones modificadas o cobrar a terceros por el acceso o descarga de VozViva, sin perjuicio de las bibliotecas de símbolos abiertas regidas por sus respectivas licencias.

### 9.2. Contenido Creado por el Usuario y Bibliotecas de Símbolos Abiertas
Las fotos, grabaciones de voz y tableros personalizados creados por el usuario pertenecen íntegramente al usuario. Las colecciones de pictogramas **Mulberry Symbols** (`CC BY-SA`) y **ARASAAC** (`CC BY-NC-SA 4.0`) permanecen bajo la titularidad de sus respectivos autores y licencias públicas.

### 9.3. Aviso Clínico, Médico y Educativo Importante
**VozViva es una herramienta tecnológica de apoyo a la Comunicación Aumentativa y Alternativa (CAA) y a la inclusión diaria. NO es un dispositivo médico certificado, NO realiza diagnósticos clínicos y NO sustituye la evaluación, el acompañamiento ni la intervención individualizada de profesionales de Fonoaudiología / Logopedia, Terapia Ocupacional, Psicología, Educación Especial o Medicina.**

### 9.4. Provisión "Tal Cual" (*As-Is*) y Seguridad
El software se proporciona de forma gratuita *"tal cual"* (*as-is*), en la máxima medida permitida por la ley aplicable. El **Modo Niño**, los ajustes de pulsación y las guías de fijación de pantalla (*Acceso Guiado* / *Fijar aplicación*) son ayudas de usabilidad y **no reemplazan la supervisión presencial de un adulto responsable**, ni deben utilizarse como único medio de llamada en emergencias médicas o de seguridad. El adulto responsable está a cargo de resguardar la contraseña de sus archivos `.assistivebackup`. Estos Términos se rigen por las leyes de la República Federativa del Brasil.

---

<a id="es-licenses"></a>
## 10. Créditos y Licencias de Símbolos

### Mulberry Symbols (Biblioteca Base Sin Conexión)
> **Mulberry Symbols** — Copyright © 2018–2026 **Steve Lee / Paxton Ditchfield** (<https://mulberrysymbols.org/>).  
> Distribuido bajo la licencia **Creative Commons Atribución-CompartirIgual (CC BY-SA 2.0 UK / 4.0 Internacional)** (<https://creativecommons.org/licenses/by-sa/2.0/uk/> | <https://creativecommons.org/licenses/by-sa/4.0/>).

### Pictogramas ARASAAC (Consulta en Línea Opcional y Caché Local)
> Los símbolos pictográficos utilizados son propiedad del **Gobierno de Aragón (España)** y han sido creados por **Sergio Palao** para **ARASAAC** (<https://arasaac.org>), que los distribuye bajo licencia **Creative Commons BY-NC-SA 4.0 Internacional** (<https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es>).  
> *Autor:* Sergio Palao · *Propietario:* Gobierno de Aragón (España) · *Fuente:* <https://arasaac.org> · *Licencia:* CC BY-NC-SA 4.0.
