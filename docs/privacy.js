/* ==========================================================================
   VozViva — Documentação Legal Trilíngue (PT-BR, EN, ES)
   Estúdio: Regard Games — Picos, Piauí, Brasil
   ========================================================================== */
(function () {
  'use strict';

  var LEGAL_I18N = {
    pt: {
      'legal.meta_title': 'Política de Privacidade, Termos de Uso (EULA), Isenção Clínica e Licenças — VozViva | Regard Games',
      'legal.meta_desc': 'Política de Privacidade 100% Offline (LGPD Art. 14, COPPA, GDPR-K), Termos de Uso e Licença (EULA), Isenção de Responsabilidade Clínica e Créditos Mulberry Symbols (CC BY-SA) e ARASAAC (CC BY-NC-SA 4.0) da plataforma VozViva.',
      'legal.skip_to_content': 'Pular para o conteúdo principal',
      'legal.brand_tag': 'CAA • Documentação Legal',
      'legal.nav_aria': 'Navegação Legal',
      'legal.nav_back_home': '← Voltar ao Portal',
      'legal.nav_privacy': 'Privacidade',
      'legal.nav_terms': 'Termos / EULA',
      'legal.nav_disclaimer': 'Isenção Clínica',
      'legal.nav_licenses': 'Licenças CAA',
      'legal.lang_group_label': 'Selecionar idioma',
      'legal.theme_group_label': 'Selecionar tema visual',
      'legal.theme_light': 'Tema Claro Calmo',
      'legal.theme_dark': 'Tema Escuro Confortável',
      'legal.theme_hc': 'Alto Contraste WCAG AAA',
      'legal.badge': 'LGPD Art. 14 • ECA • GDPR-K • COPPA • CC BY-SA & CC BY-NC-SA 4.0',
      'legal.page_title': 'Política de Privacidade, Termos de Uso (EULA), Isenção Clínica e Licenças',
      'legal.page_subtitle': 'Transparência integral para famílias, cuidadores, fonoaudiólogos, terapeutas ocupacionais, educadores e auditores de lojas de aplicativos.',
      'legal.meta_updated_label': 'Última atualização:',
      'legal.meta_updated_val': '28 de outubro de 2026 (America/Fortaleza, BRT / UTC-3)',
      'legal.meta_controller_label': 'Controladora:',
      'legal.meta_controller_val': 'Regard Games — CNPJ 54.480.912/0001-37 (Picos, Piauí, Brasil)',
      'legal.meta_app_label': 'Aplicativo:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows e Ubuntu/Linux (Apple iOS/iPadOS indisponível no momento)',
      'legal.toc_title': 'Navegação Rápida',
      'legal.toc_s1': '1. Privacidade Absoluta e Proteção Infantil',
      'legal.toc_s2': '2. Uso 100% Offline e Dados Locais',
      'legal.toc_s3': '3. Zero Anúncios e Zero Telemetria',
      'legal.toc_s4': '4. Permissões (Fotos, Voz Offline e Arquivos)',
      'legal.toc_s5': '5. Busca Online Opcional ARASAAC',
      'legal.toc_s6': '6. Backups Criptografados (.assistivebackup)',
      'legal.toc_s7': '7. Transparência do Site Oficial',
      'legal.toc_s8': '8. Controle Total e Exclusão de Dados',
      'legal.toc_s9': '9. Termos de Uso e Licença (EULA)',
      'legal.toc_s10': '9.3. Isenção de Responsabilidade Clínica',
      'legal.toc_s11': '10. Créditos e Licenças (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Compromisso de Privacidade Absoluta e Proteção Infantil',
      'legal.s1_p1': 'O VozViva foi desenhado desde a sua concepção (Privacy by Design & by Default) para proteger integralmente crianças, pessoas com necessidades complexas de comunicação, famílias, educadores e terapeutas, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018, em especial o Art. 14 sobre proteção de crianças e adolescentes) e o Estatuto da Criança e do Adolescente (ECA — Brasil), o Regulamento Geral sobre a Proteção de Dados (GDPR / UK-GDPR e Age Appropriate Design Code — União Europeia e Reino Unido), a COPPA e a CCPA/CPRA (Estados Unidos) e a PIPEDA (Canadá).',
      'legal.s1_p2': 'A Regard Games não coleta, não transmite, não armazena em servidores próprios, não vende e não compartilha nenhum dado pessoal seu ou da criança.',
      'legal.s2_title': '2. Funcionamento 100% Offline e Dados Armazenados Exclusivamente no Seu Dispositivo',
      'legal.s2_p1': 'O VozViva não exige cadastro, conta, login nem conexão com a internet para funcionar. Todas as informações criadas durante o uso permanecem gravadas exclusivamente no armazenamento interno privado do seu próprio aparelho (celular, tablet ou computador):',
      'legal.s2_li1': 'Pranchas, cartões, rotinas visuais e frases comunicativas configuradas pela família ou profissional;',
      'legal.s2_li2': 'Fotografias pessoais ou familiares (salvas automaticamente sem metadados EXIF/GPS) e frases personalizadas faladas pela síntese de voz offline do aparelho adicionadas no Modo Responsável;',
      'legal.s2_li3': 'Preferências locais de acessibilidade, tema visual, idioma, configuração de voz offline (TTS) e credencial local de proteção do Modo Responsável (Bloqueio Parental).',
      'legal.s2_p2': 'Nenhuma dessas informações é enviada para a Regard Games ou para terceiros.',
      'legal.s3_title': '3. Ausência de Anúncios, Rastreadores e Telemetria',
      'legal.s3_p1': 'O aplicativo não contém publicidade, compras internas (IAP), assinaturas nem ferramentas de rastreamento, análise de comportamento (analytics) ou relatórios automáticos de falhas em nuvem. O Modo Criança opera com bloqueio técnico total de acesso à internet e sem links externos.',
      'legal.s4_title': '4. Uso de Permissões do Sistema Operacional (Fotos Locais, Voz Offline e Arquivos)',
      'legal.s4_p1': 'A seleção de fotos ou arquivos locais é opcional e acionada exclusivamente no Modo Responsável pelo seletor seguro do sistema operacional quando você decide adicionar uma foto da rotina da criança para um cartão ou importar/exportar um arquivo de backup (.assistivebackup). Os arquivos permanecem restritos à pasta privada do aplicativo no seu dispositivo (com remoção automática de metadados EXIF/GPS das fotos importadas). O aplicativo não grava áudio por microfone nem solicita permissão de microfone: a fala utiliza os motores de síntese de voz offline (Texto para Fala — TTS) instalados no próprio sistema operacional.',
      'legal.s5_title': '5. Consulta Opcional à Biblioteca Online ARASAAC (Exclusiva no Modo Responsável)',
      'legal.s5_p1': 'O VozViva já inclui gratuitamente uma biblioteca de pictogramas locais (Mulberry Symbols) que funciona 100% sem internet. Caso o adulto responsável, autenticado no Modo Responsável, decida utilizar a ferramenta opcional de pesquisa online de pictogramas adicionais do catálogo público ARASAAC (Centro Aragonés para la Comunicación Aumentativa y Alternativa — Governo de Aragão, Espanha), o seu aparelho fará uma conexão HTTPS direta com os servidores oficiais do ARASAAC (api.arasaac.org e static.arasaac.org).',
      'legal.s5_p2': 'Nessa consulta pontual, apenas o termo de busca digitado e dados técnicos padrão da conexão de internet (como o endereço IP) são processados pelo provedor ARASAAC para entregar os pictogramas selecionados (com base na execução de funcionalidade solicitada pelo usuário — Art. 7º, V da LGPD e Art. 6(1)(b) do GDPR). Nenhuma foto, prancha ou dado pessoal da criança é enviado nessa busca.',
      'legal.s6_title': '6. Backups Manuais Criptografados (.assistivebackup)',
      'legal.s6_p1': 'Você pode exportar manualmente suas pranchas e mídias em um arquivo criptografado (.assistivebackup) protegido por criptografia autenticada (AES-256-GCM) a partir de uma senha definida por você. Esse arquivo fica sob sua posse exclusiva para transferência ou guarda no local de sua preferência. Como a Regard Games não possui servidores nem acesso à sua senha, guarde-a em local seguro: não é possível recuperar backups cuja senha tenha sido esquecida.',
      'legal.s7_title': '7. Transparência do Site Oficial e Downloads Diretos (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'Nosso site institucional e os instaladores oficiais são hospedados na infraestrutura pública do GitHub Pages e GitHub Releases (GitHub, Inc.). Ao visitar o site ou baixar um instalador, seu navegador realiza requisições HTTPS padrão aos servidores do GitHub (incluindo leitura pública da API api.github.com/repos/regardgames/vozviva/releases sem envio de cookies — credentials: omit — para exibir a versão atual e a contagem agregada e anônima de downloads download_count). O site não utiliza cookies de rastreamento, servindo-se apenas do armazenamento local do navegador (localStorage para idioma/tema e sessionStorage temporário por 5 minutos) para fins estritamente funcionais.',
      'legal.s8_title': '8. Controle Total e Exclusão de Dados (Direitos do Titular)',
      'legal.s8_p1': 'Como todos os dados residem no seu próprio aparelho, você detém controle imediato e integral sobre eles: pode editar ou excluir cartões, fotos e pranchas diretamente no Modo Responsável, restaurar as configurações de fábrica no aplicativo ou desinstalá-lo nas configurações do seu sistema operacional (Android, Windows ou Linux), o que remove imediatamente todos os dados locais do aparelho. Para dúvidas sobre privacidade, entre em contato pelo e-mail privacidade@regardgames.com.',
      'legal.s9_title': '9. Termos de Uso, Licença de Uso do Software (EULA) e Condições Gerais',
      'legal.s9_1_title': '9.1. Licença de Uso Gratuito (Freeware Proprietário)',
      'legal.s9_1_p': 'A Regard Games concede a você (pessoa física, familiar, educador, terapeuta, escola ou instituição de atendimento) uma licença mundial, gratuita, não exclusiva, intransferível e revogável para baixar, instalar e utilizar o aplicativo VozViva em dispositivos compatíveis (Android, Windows e Linux; versão para Apple iOS/iPadOS indisponível no momento) para fins de Comunicação Aumentativa e Alternativa (CAA), apoio educacional, familiar e terapêutico.',
      'legal.s9_2_title': '9.2. Propriedade Intelectual e Licença Proprietária',
      'legal.s9_2_p': 'A distribuição gratuita do aplicativo executável não significa cessão nem abertura dos direitos de propriedade intelectual do software. O aplicativo VozViva, sua arquitetura, identidade visual Calm & Clear Studio, logomarcas e textos originais são de propriedade exclusiva da Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protegidos pela Lei de Software nº 9.609/1998, Lei de Direitos Autorais nº 9.610/1998 e tratados internacionais (LicenseRef-proprietary). É expressamente vedado realizar engenharia reversa ilícita, descompilar, vender, alugar, cobrar pelo aplicativo ou distribuir versões modificadas ou adulteradas dos binários oficiais. Os conjuntos de pictogramas de terceiros incluídos ou consultados pelo aplicativo (Mulberry Symbols e ARASAAC) conservam suas respectivas licenças abertas originais.',
      'legal.s9_3_title': '9.3. Isenção de Responsabilidade Clínica, Médica e Fonoaudiológica',
      'legal.s9_3_p': 'O VozViva é uma ferramenta de tecnologia assistiva voltada à comunicação cotidiana, acessibilidade e apoio pedagógico. O aplicativo não constitui dispositivo médico de diagnóstico ou prescrição (Software as a Medical Device — SaMD), não emite laudos clínicos e não substitui a avaliação, o diagnóstico ou a intervenção presencial e individualizada de fonoaudiólogos, terapeutas ocupacionais, psicólogos, médicos ou educadores especializados. A seleção de vocabulário, a organização de pranchas e o acompanhamento do desenvolvimento comunicativo devem contar sempre que possível com a orientação de profissionais habilitados.',
      'legal.s9_4_title': '9.4. Limitações do Sistema Operacional e Responsabilidade por Backups',
      'legal.s9_4_p': 'O bloqueio de saída total do aplicativo para a área de trabalho do aparelho depende dos recursos nativos de fixação de tela (Fixar Aplicativo no Android ou modo quiosque no Windows/Linux) configurados pelo adulto responsável no sistema operacional. Como o aplicativo funciona 100% offline e sem nuvem, é de inteira responsabilidade do adulto responsável realizar e guardar backups periódicos (.assistivebackup) e lembrar a respectiva senha de proteção. O software é fornecido gratuitamente "no estado em que se encontra" ("as is"), regendo-se pelas leis da República Federativa do Brasil, ressalvados os direitos irrenunciáveis do consumidor em sua jurisdição.',
      'legal.s10_title': '10. Créditos e Licenças de Símbolos Pictográficos (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'O VozViva respeita rigorosamente os direitos autorais e as licenças Creative Commons dos criadores de pictogramas de Comunicação Aumentativa e Alternativa (CAA):',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Biblioteca Local Incluída — CC BY-SA 2.0 UK / 4.0)',
      'legal.s10_mulberry_p': 'Símbolos pictográficos da biblioteca base © Mulberry Symbols (criados por Garry Paxton / Straight Street — https://mulberrysymbols.org/), licenciados sob Creative Commons Atribuição-CompartilhaIgual (CC BY-SA 2.0 UK / CC BY-SA 4.0 Internacional). Os arquivos SVG originais da Mulberry Symbols permanecem integralmente sob licença CC BY-SA, isolados como ativos gráficos independentes (mere aggregation), enquanto o software executável VozViva é de titularidade exclusiva da Regard Games.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Catálogo Online Opcional — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'Os símbolos pictográficos utilizados a partir da busca online opcional ARASAAC são propriedade do Governo de Aragão (Espanha) e foram criados por Sergio Palao para ARASAAC (http://www.arasaac.org), que os distribui sob licença Creative Commons Atribuição-Uso Não Comercial-CompartilhaIgual 4.0 Internacional (CC BY-NC-SA 4.0). O uso no VozViva é 100% gratuito e estritamente não comercial.',
      'legal.footer_sub': 'DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37) — Picos, Piauí, Brasil.',
      'legal.btn_back_home': 'Voltar para a Landing Page',
      'legal.btn_try_simulator': 'Testar Simulador CAA',
      'legal.footer_copy': '© 2026 Regard Games — Picos, Piauí, Brasil. Todos os direitos reservados.'
    },
    en: {
      'legal.meta_title': 'Privacy Policy, Terms of Use (EULA), Clinical Disclaimer & Licenses — VozViva | Regard Games',
      'legal.meta_desc': '100% Offline Privacy Policy (LGPD Art. 14, COPPA, GDPR-K), Terms of Use & EULA, Clinical Disclaimer, and Mulberry Symbols (CC BY-SA) & ARASAAC (CC BY-NC-SA 4.0) Credits for VozViva.',
      'legal.skip_to_content': 'Skip to main content',
      'legal.brand_tag': 'AAC • Legal Documentation',
      'legal.nav_aria': 'Legal Navigation',
      'legal.nav_back_home': '← Back to Portal',
      'legal.nav_privacy': 'Privacy',
      'legal.nav_terms': 'Terms / EULA',
      'legal.nav_disclaimer': 'Clinical Disclaimer',
      'legal.nav_licenses': 'AAC Licenses',
      'legal.lang_group_label': 'Select language',
      'legal.theme_group_label': 'Select visual theme',
      'legal.theme_light': 'Calm Light Theme',
      'legal.theme_dark': 'Comfortable Dark Theme',
      'legal.theme_hc': 'WCAG AAA High Contrast',
      'legal.badge': 'LGPD Art. 14 • GDPR-K • COPPA • CC BY-SA & CC BY-NC-SA 4.0',
      'legal.page_title': 'Privacy Policy, Terms of Use (EULA), Clinical Disclaimer & Licenses',
      'legal.page_subtitle': 'Full transparency for families, caregivers, speech-language pathologists, occupational therapists, educators, and app store reviewers.',
      'legal.meta_updated_label': 'Last updated:',
      'legal.meta_updated_val': 'October 28, 2026 (America/Fortaleza, UTC-3)',
      'legal.meta_controller_label': 'Controller:',
      'legal.meta_controller_val': 'Regard Games — Brazil Tax ID CNPJ 54.480.912/0001-37 (Picos, Piauí, Brazil)',
      'legal.meta_app_label': 'Application:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows, and Ubuntu/Linux (Apple iOS/iPadOS currently unavailable)',
      'legal.toc_title': 'Quick Navigation',
      'legal.toc_s1': '1. Absolute Privacy & Child Protection',
      'legal.toc_s2': '2. 100% Offline Operation & Local Data',
      'legal.toc_s3': '3. Zero Ads & Zero Telemetry',
      'legal.toc_s4': '4. OS Permissions (Local Photos, Offline Voice & Files)',
      'legal.toc_s5': '5. Optional Online ARASAAC Search',
      'legal.toc_s6': '6. Encrypted Backups (.assistivebackup)',
      'legal.toc_s7': '7. Official Website Transparency',
      'legal.toc_s8': '8. Full User Control & Data Deletion',
      'legal.toc_s9': '9. Terms of Use & EULA',
      'legal.toc_s10': '9.3. Clinical & Medical Disclaimer',
      'legal.toc_s11': '10. Credits & Licenses (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Absolute Privacy Commitment and Child Protection',
      'legal.s1_p1': 'VozViva is engineered from the ground up (Privacy by Design & by Default) to protect children, individuals with complex communication needs, families, educators, and therapists, in strict compliance with the Brazilian General Data Protection Law (LGPD — Law No. 13,709/2018, Article 14), the EU and UK General Data Protection Regulation (GDPR / UK-GDPR and the UK Age Appropriate Design Code), the U.S. Children’s Online Privacy Protection Act (COPPA) and CCPA/CPRA, and Canada’s PIPEDA.',
      'legal.s1_p2': 'Regard Games does not collect, transmit, store on external servers, sell, or share any personal data from you or your child.',
      'legal.s2_title': '2. 100% Offline Operation and Data Stored Exclusively on Your Device',
      'legal.s2_p1': 'VozViva requires no registration, user account, login, or internet connection to operate. All information created during use stays stored exclusively within the private local storage of your own device (phone, tablet, or computer):',
      'legal.s2_li1': 'Communication boards, cards, visual routines, and phrases customized by the family or professional;',
      'legal.s2_li2': 'Personal or family photos (automatically saved stripped of EXIF/GPS metadata) and custom phrases spoken by the device’s offline voice synthesis added in Caregiver Mode;',
      'legal.s2_li3': 'Local accessibility preferences, visual theme, language, offline Text-to-Speech (TTS) settings, and the local Caregiver Mode protection credential (Parental Lock).',
      'legal.s2_p2': 'None of this information is ever sent to Regard Games or third parties.',
      'legal.s3_title': '3. Zero Ads, Zero Trackers, and Zero Telemetry',
      'legal.s3_p1': 'The application contains no third-party advertising, no in-app purchases (IAP), no subscriptions, and no behavioral analytics, tracking, or cloud crash-reporting tools. Child Mode operates with a strict technical block on all network calls and displays no external links.',
      'legal.s4_title': '4. Operating System Permissions (Local Photos, Offline Voice, and Files)',
      'legal.s4_p1': 'Local photo and file selection is optional and triggered exclusively inside Caregiver Mode via the operating system’s secure file/photo picker when you choose to add a photo for a routine/card or import/export a backup file (.assistivebackup). Imported media remains isolated inside the app’s private directory on your device (with automatic removal of EXIF/GPS location metadata from imported photos). The application does not record audio via microphone and never requests microphone permission: speech uses the offline Text-to-Speech (TTS) voice engines installed directly on your operating system.',
      'legal.s5_title': '5. Optional Online Search via the ARASAAC Library (Caregiver Mode Only)',
      'legal.s5_p1': 'VozViva includes a built-in library of local pictograms (Mulberry Symbols) that works 100% offline. If an authenticated adult in Caregiver Mode chooses to use the optional online search to download additional pictograms from the public ARASAAC catalog (Aragonese Center for Augmentative and Alternative Communication — Government of Aragon, Spain), your device will make a direct HTTPS request to ARASAAC’s official servers (api.arasaac.org and static.arasaac.org).',
      'legal.s5_p2': 'During that user-initiated search, only the typed search term and standard technical connection metadata (such as your IP address) are processed by ARASAAC to deliver the requested pictograms (GDPR Art. 6(1)(b); LGPD Art. 7 V). No personal photos, custom boards, or child data are ever transmitted.',
      'legal.s6_title': '6. Encrypted Manual Backups (.assistivebackup)',
      'legal.s6_p1': 'You may manually export your boards and media into an encrypted backup file (.assistivebackup) protected by authenticated encryption (AES-256-GCM) using a password of your choice. That file remains under your exclusive control for local transfer or safekeeping. Because Regard Games operates no cloud servers and has no access to your password, please store it safely: backups with a forgotten password cannot be recovered.',
      'legal.s7_title': '7. Official Website & Direct Downloads Transparency (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'Our promotional website and official installers are hosted on GitHub Pages and GitHub Releases public infrastructure (GitHub, Inc.). When you visit the website or download an installer, your browser makes standard HTTPS requests to GitHub servers (including a cookie-free public read request — credentials: omit — to api.github.com/repos/regardgames/vozviva/releases to display the current version and anonymous aggregated download_count). The website uses no tracking cookies and relies solely on functional browser storage (localStorage for theme/language and 5-minute sessionStorage cache).',
      'legal.s8_title': '8. Full User Control and Data Deletion (Data Subject Rights)',
      'legal.s8_p1': 'Because all data resides strictly on your device, you have complete and immediate control over it: you can edit or delete cards, photos, and boards at any time in Caregiver Mode, reset the app, or uninstall it via your operating system settings (Android, Windows, or Linux), which immediately removes all local data from the device. For privacy inquiries, contact privacidade@regardgames.com.',
      'legal.s9_title': '9. Terms of Use, End-User License Agreement (EULA), and General Conditions',
      'legal.s9_1_title': '9.1. Free License Grant (Proprietary Freeware)',
      'legal.s9_1_p': 'Regard Games grants you (an individual, family member, educator, therapist, school, or care institution) a worldwide, royalty-free, non-exclusive, non-transferable, and revocable license to download, install, and use the VozViva application on compatible Android, Windows, and Linux devices (Apple iOS/iPadOS version currently unavailable) for Augmentative and Alternative Communication (AAC), educational, family, and therapeutic support purposes.',
      'legal.s9_2_title': '9.2. Intellectual Property and Proprietary License',
      'legal.s9_2_p': 'Free distribution of the executable application does not grant any assignment or opening of the software’s intellectual property rights. The VozViva software, its architecture, Calm & Clear Studio visual identity, logos, and original texts are the exclusive property of Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protected by Brazilian Software Law No. 9,609/1998, Copyright Law No. 9,610/1998, and international treaties under a proprietary license (LicenseRef-proprietary). You may not unlawfully reverse-engineer, decompile, sell, rent, charge fees for the application, or distribute tampered or modified versions of the official binaries. Third-party pictogram libraries included in or queried by the application (Mulberry Symbols and ARASAAC) retain their respective original open licenses.',
      'legal.s9_3_title': '9.3. Clinical, Medical, and Speech-Language Pathology Disclaimer',
      'legal.s9_3_p': 'VozViva is an assistive technology tool designed for everyday communication, accessibility, and educational support. The application is not a diagnostic or prescriptive medical device (Software as a Medical Device — SaMD), does not issue clinical assessments, and does not replace evaluation, diagnosis, or individualized intervention by licensed speech-language pathologists (SLPs), occupational therapists, psychologists, physicians, or special-education professionals. Vocabulary selection, board organization, and communication development follow-up should involve qualified professionals whenever possible.',
      'legal.s9_4_title': '9.4. Operating System Boundaries and Backup Responsibility',
      'legal.s9_4_p': 'Preventing a user from exiting the application entirely to the operating system home screen depends on native OS screen-pinning features (App Pinning on Android or desktop kiosk mode on Windows/Linux) configured by the caregiver. Because VozViva operates 100% offline without cloud servers, the adult caregiver is solely responsible for creating and keeping periodic .assistivebackup files and remembering their encryption password. The software is provided free of charge "as is", governed by the laws of the Federative Republic of Brazil, without prejudice to mandatory consumer rights in your jurisdiction.',
      'legal.s10_title': '10. Pictographic Symbol Credits & Licenses (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'VozViva strictly respects the copyright and Creative Commons licenses of Augmentative and Alternative Communication (AAC) pictogram creators:',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Built-in Local Library — CC BY-SA 2.0 UK / 4.0)',
      'legal.s10_mulberry_p': 'Built-in pictographic symbols © Mulberry Symbols (created by Garry Paxton / Straight Street — https://mulberrysymbols.org/), licensed under the Creative Commons Attribution-ShareAlike License (CC BY-SA 2.0 UK / CC BY-SA 4.0 International). The original Mulberry Symbols SVG files remain licensed under CC BY-SA as independent graphic assets (mere aggregation), while the VozViva executable software is proprietary to Regard Games.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Optional Online Catalog — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'The pictographic symbols obtained via the optional ARASAAC online search are the property of the Government of Aragon (Spain) and have been created by Sergio Palao for ARASAAC (http://www.arasaac.org), that distributes them under a Creative Commons License BY-NC-SA 4.0 International. Use in VozViva is 100% free of charge and strictly non-commercial.',
      'legal.footer_sub': 'DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37) — Picos, Piauí, Brazil.',
      'legal.btn_back_home': 'Back to Landing Page',
      'legal.btn_try_simulator': 'Try AAC Simulator',
      'legal.footer_copy': '© 2026 Regard Games — Picos, Piauí, Brazil. All rights reserved.'
    },
    es: {
      'legal.meta_title': 'Política de Privacidad, Términos de Uso (EULA), Aviso Clínico y Licencias — VozViva | Regard Games',
      'legal.meta_desc': 'Política de Privacidad 100 % sin conexión (LGPD Art. 14, COPPA, RGPD-K), Términos de Uso y Licencia (EULA), Exención de Responsabilidad Clínica y Créditos Mulberry Symbols (CC BY-SA) y ARASAAC (CC BY-NC-SA 4.0) de VozViva.',
      'legal.skip_to_content': 'Saltar al contenido principal',
      'legal.brand_tag': 'CAA • Documentación Legal',
      'legal.nav_aria': 'Navegación Legal',
      'legal.nav_back_home': '← Volver al Portal',
      'legal.nav_privacy': 'Privacidad',
      'legal.nav_terms': 'Términos / EULA',
      'legal.nav_disclaimer': 'Aviso Clínico',
      'legal.nav_licenses': 'Licencias CAA',
      'legal.lang_group_label': 'Seleccionar idioma',
      'legal.theme_group_label': 'Seleccionar tema visual',
      'legal.theme_light': 'Tema Claro Calmo',
      'legal.theme_dark': 'Tema Oscuro Confortable',
      'legal.theme_hc': 'Alto Contraste WCAG AAA',
      'legal.badge': 'LGPD Art. 14 • RGPD-K • COPPA • CC BY-SA & CC BY-NC-SA 4.0',
      'legal.page_title': 'Política de Privacidad, Términos de Uso (EULA), Exención Clínica y Licencias',
      'legal.page_subtitle': 'Transparencia integral para familias, cuidadores, fonoaudiólogos/logopedas, terapeutas ocupacionales, educadores y revisores de tiendas de aplicaciones.',
      'legal.meta_updated_label': 'Última actualización:',
      'legal.meta_updated_val': '28 de octubre de 2026 (America/Fortaleza, UTC-3)',
      'legal.meta_controller_label': 'Responsable:',
      'legal.meta_controller_val': 'Regard Games — CNPJ 54.480.912/0001-37 (Picos, Piauí, Brasil)',
      'legal.meta_app_label': 'Aplicación:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows y Ubuntu/Linux (Apple iOS/iPadOS no disponible por el momento)',
      'legal.toc_title': 'Navegación Rápida',
      'legal.toc_s1': '1. Privacidad Absoluta y Protección Infantil',
      'legal.toc_s2': '2. Uso 100 % sin Conexión y Datos Locales',
      'legal.toc_s3': '3. Cero Anuncios y Cero Telemetría',
      'legal.toc_s4': '4. Permisos (Fotos Locales, Voz Sin Conexión y Archivos)',
      'legal.toc_s5': '5. Búsqueda en Línea Opcional ARASAAC',
      'legal.toc_s6': '6. Copias Cifradas (.assistivebackup)',
      'legal.toc_s7': '7. Transparencia del Sitio Oficial',
      'legal.toc_s8': '8. Control Total y Eliminación de Datos',
      'legal.toc_s9': '9. Términos de Uso y Licencia (EULA)',
      'legal.toc_s10': '9.3. Exención de Responsabilidad Clínica',
      'legal.toc_s11': '10. Créditos y Licencias (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Compromiso de Privacidad Absoluta y Protección Infantil',
      'legal.s1_p1': 'VozViva ha sido diseñada desde su concepción (Privacy by Design & by Default) para proteger íntegramente a niños, personas con necesidades complejas de comunicación, familias, educadores y terapeutas, en estricto cumplimiento de la Ley General de Protección de Datos de Brasil (LGPD — Ley n.º 13.709/2018, Art. 14), el Reglamento General de Protección de Datos de la UE y el Reino Unido (RGPD / UK-GDPR y Age Appropriate Design Code), las leyes COPPA y CCPA/CPRA (Estados Unidos), la PIPEDA (Canadá) y las legislaciones de protección de datos de América Latina y España.',
      'legal.s1_p2': 'Regard Games no recopila, no transmite, no almacena en servidores propios, no vende ni comparte ningún dato personal tuyo ni del niño.',
      'legal.s2_title': '2. Funcionamiento 100 % sin Conexión y Datos Almacenados Exclusivamente en tu Dispositivo',
      'legal.s2_p1': 'VozViva no requiere registro, cuenta de usuario, inicio de sesión ni conexión a internet para funcionar. Toda la información creada durante su uso permanece guardada exclusivamente en el almacenamiento interno privado de tu propio dispositivo (celular, tablet o computadora):',
      'legal.s2_li1': 'Tableros de comunicación, tarjetas, rutinas visuales y frases configuradas por la familia o el profesional;',
      'legal.s2_li2': 'Fotografías personales o familiares (guardadas automáticamente sin metadatos EXIF/GPS) y frases personalizadas habladas por la síntesis de voz sin conexión del dispositivo añadidas en el Modo Responsable;',
      'legal.s2_li3': 'Preferencias locales de accesibilidad, tema visual, idioma, ajustes de voz sin conexión (TTS) y la credencial local de protección del Modo Responsable (Bloqueo Parental).',
      'legal.s2_p2': 'Ninguna de estas informaciones se envía a Regard Games ni a terceros.',
      'legal.s3_title': '3. Sin Anuncios, Sin Rastreadores y Sin Telemetría',
      'legal.s3_p1': 'La aplicación no contiene publicidad, compras integradas (IAP), suscripciones ni herramientas de seguimiento, análisis de comportamiento (analytics) o informes automáticos de errores en la nube. El Modo Niño opera con un bloqueo técnico total de acceso a la red y sin enlaces externos.',
      'legal.s4_title': '4. Permisos del Sistema Operativo (Fotos Locales, Voz Sin Conexión y Archivos)',
      'legal.s4_p1': 'La selección de fotos o archivos locales es opcional y se activa exclusivamente en el Modo Responsable mediante el selector seguro del sistema operativo cuando decides añadir una foto de la rutina del niño a una tarjeta o importar/exportar una copia de seguridad (.assistivebackup). Los archivos permanecen aislados en la carpeta privada de la aplicación en tu dispositivo (con eliminación automática de metadatos EXIF/GPS de las fotos importadas). La aplicación no graba audio por micrófono ni solicita permiso de micrófono: el habla utiliza los motores de síntesis de voz sin conexión (Texto a Voz — TTS) instalados en tu propio sistema operativo.',
      'legal.s5_title': '5. Búsqueda Opcional en la Biblioteca en Línea ARASAAC (Solo en Modo Responsable)',
      'legal.s5_p1': 'VozViva incluye de fábrica una biblioteca de pictogramas locales (Mulberry Symbols) que funciona 100 % sin internet. Si el adulto autenticado en el Modo Responsable decide utilizar la búsqueda en línea opcional para descargar pictogramas adicionales del catálogo público ARASAAC (Centro Aragonés para la Comunicación Aumentativa y Alternativa — Gobierno de Aragón, España), tu dispositivo realizará una conexión HTTPS directa con los servidores oficiales de ARASAAC (api.arasaac.org y static.arasaac.org).',
      'legal.s5_p2': 'En dicha consulta puntual, ARASAAC procesa únicamente el término buscado y los metadatos técnicos estándar de la conexión (como la dirección IP) para entregar los pictogramas solicitados (Art. 6(1)(b) del RGPD; Art. 7 V de la LGPD). Jamás se envían fotos personales, tableros ni datos del niño.',
      'legal.s6_title': '6. Copias de Seguridad Manuales Cifradas (.assistivebackup)',
      'legal.s6_p1': 'Puedes exportar manualmente tus tableros y archivos multimedia en un archivo cifrado (.assistivebackup) protegido mediante cifrado autenticado (AES-256-GCM) con una contraseña definida por ti. Dicho archivo permanece bajo tu control exclusivo. Dado que Regard Games no posee servidores en la nube ni acceso a tu contraseña, guárdala en un lugar seguro: no es posible recuperar copias de seguridad cuya contraseña se haya olvidado.',
      'legal.s7_title': '7. Transparencia del Sitio Web Oficial y Descargas Directas (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'Nuestro sitio web institucional y los instaladores oficiales están alojados en la infraestructura pública de GitHub Pages y GitHub Releases (GitHub, Inc.). Al visitar el sitio o descargar un instalador, tu navegador realiza solicitudes HTTPS estándar a los servidores de GitHub (incluida una lectura pública sin cookies — credentials: omit — a la API api.github.com/repos/regardgames/vozviva/releases para mostrar la versión actual y el contador agregado y anónimo de descargas download_count). El sitio no utiliza cookies de rastreo y emplea únicamente el almacenamiento funcional del navegador (localStorage para tema/idioma y sessionStorage temporal durante 5 minutos).',
      'legal.s8_title': '8. Control Total y Eliminación de Datos (Derechos del Titular)',
      'legal.s8_p1': 'Como todos los datos residen en tu propio dispositivo, tienes control total e inmediato sobre ellos: puedes editar o eliminar tarjetas, fotos y tableros directamente en el Modo Responsable, restablecer la aplicación o desinstalarla desde la configuración de tu sistema operativo (Android, Windows o Linux), lo que elimina de inmediato todos los datos locales del dispositivo. Para consultas sobre privacidad, escribe a privacidade@regardgames.com.',
      'legal.s9_title': '9. Términos de Uso, Licencia de Uso del Software (EULA) y Condiciones Generales',
      'legal.s9_1_title': '9.1. Concesión de Licencia Gratuita (Freeware Propietario)',
      'legal.s9_1_p': 'Regard Games te concede (como persona física, familiar, educador, terapeuta, escuela o institución de atención) una licencia mundial, gratuita, no exclusiva, intransferible y revocable para descargar, instalar y utilizar la aplicación VozViva en dispositivos compatibles (Android, Windows y Linux; versión para Apple iOS/iPadOS no disponible por el momento) con fines de Comunicación Aumentativa y Alternativa (CAA), apoyo educativo, familiar y terapéutico.',
      'legal.s9_2_title': '9.2. Propiedad Intelectual y Licencia Propietaria',
      'legal.s9_2_p': 'La distribución gratuita del ejecutable no implica la cesión ni la apertura de los derechos de propiedad intelectual del software. El software VozViva, su arquitectura, identidad visual Calm & Clear Studio, logotipos y textos originales son propiedad exclusiva de Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protegidos por la Ley de Software de Brasil n.º 9.609/1998, la Ley de Derechos de Autor n.º 9.610/1998 y los tratados internacionales bajo licencia propietaria (LicenseRef-proprietary). Queda prohibido realizar ingeniería inversa ilícita, descompilar, vender, alquilar, cobrar por la aplicación o distribuir versiones modificadas o alteradas de los binarios oficiales. Las bibliotecas de pictogramas de terceros incluidas o consultadas por la aplicación (Mulberry Symbols y ARASAAC) conservan sus respectivas licencias abiertas originales.',
      'legal.s9_3_title': '9.3. Exención de Responsabilidad Clínica, Médica y Fonoaudiológica',
      'legal.s9_3_p': 'VozViva es una herramienta de tecnología asistiva orientada a la comunicación cotidiana, la accesibilidad y el apoyo pedagógico. La aplicación no constituye un dispositivo médico de diagnóstico o prescripción (Software as a Medical Device — SaMD), no emite informes clínicos y no sustituye la evaluación, el diagnóstico ni la intervención individualizada de fonoaudiólogos/logopedas, terapeutas ocupacionales, psicólogos, médicos o educadores especializados. La selección de vocabulario, la organización de tableros y el seguimiento del desarrollo comunicativo deben contar siempre que sea posible con la orientación de profesionales habilitados.',
      'legal.s9_4_title': '9.4. Límites del Sistema Operativo y Responsabilidad sobre Copias de Seguridad',
      'legal.s9_4_p': 'Impedir que el usuario salga completamente de la aplicación hacia la pantalla de inicio del dispositivo depende de las funciones nativas de fijación de pantalla del sistema operativo (Fijar aplicación en Android o modo quiosco en Windows/Linux) configuradas por el adulto responsable. Dado que VozViva funciona 100 % sin conexión y sin servidores en la nube, es responsabilidad exclusiva del adulto realizar y conservar copias de seguridad periódicas (.assistivebackup) y recordar su contraseña de cifrado. El software se proporciona de forma gratuita "tal cual" ("as is"), rigiéndose por las leyes de la República Federativa del Brasil, sin perjuicio de los derechos irrenunciables del consumidor en su jurisdicción.',
      'legal.s10_title': '10. Créditos y Licencias de Símbolos Pictográficos (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'VozViva respeta rigurosamente los derechos de autor y las licencias Creative Commons de los creadores de pictogramas de Comunicación Aumentativa y Alternativa (CAA):',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Biblioteca Local Incluida — CC BY-SA 2.0 UK / 4.0)',
      'legal.s10_mulberry_p': 'Símbolos pictográficos de la biblioteca base © Mulberry Symbols (creados por Garry Paxton / Straight Street — https://mulberrysymbols.org/), distribuidos bajo licencia Creative Commons Atribución-CompartirIgual (CC BY-SA 2.0 UK / CC BY-SA 4.0 Internacional). Los archivos SVG originales de Mulberry Symbols permanecen bajo licencia CC BY-SA como recursos gráficos independientes (mere aggregation), mientras que el software ejecutable VozViva es propiedad exclusiva de Regard Games.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Catálogo en Línea Opcional — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'Los símbolos pictográficos utilizados a través de la búsqueda en línea opcional de ARASAAC son propiedad del Gobierno de Aragón (España) y han sido creados por Sergio Palao para ARASAAC (http://www.arasaac.org), que los distribuye bajo Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0). El uso en VozViva es 100 % gratuito y estrictamente no comercial.',
      'legal.footer_sub': 'DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37) — Picos, Piauí, Brasil.',
      'legal.btn_back_home': 'Volver a la Página Principal',
      'legal.btn_try_simulator': 'Probar Simulador CAA',
      'legal.footer_copy': '© 2026 Regard Games — Picos, Piauí, Brasil. Todos los derechos reservados.'
    }
  };

  function normalizeLang(raw) {
    if (!raw) return 'pt';
    var lower = String(raw).toLowerCase();
    if (lower.indexOf('en') === 0) return 'en';
    if (lower.indexOf('es') === 0) return 'es';
    return 'pt';
  }

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var qLang = params.get('lang');
      if (qLang) return normalizeLang(qLang);
      var saved = localStorage.getItem('vozviva-lang');
      if (saved) return normalizeLang(saved);
    } catch (e) {}
    return normalizeLang(navigator.language || 'pt-BR');
  }

  function applyLang(lang, persist) {
    var code = normalizeLang(lang);
    var dict = LEGAL_I18N[code] || LEGAL_I18N.pt;
    document.documentElement.lang = code === 'pt' ? 'pt-BR' : code;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = (el.getAttribute('data-i18n-attr') || '').split(/[;,]/);
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          var attr = parts[0].trim();
          var key = parts[1].trim();
          if (dict[key]) el.setAttribute(attr, dict[key]);
        }
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isMatch = btn.getAttribute('data-lang') === code;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    if (persist) {
      try {
        localStorage.setItem('vozviva-lang', code);
      } catch (e) {}
    }
  }

  function applyTheme(theme, persist) {
    var valid = ['light', 'dark', 'high-contrast'];
    var chosen = valid.indexOf(theme) !== -1 ? theme : 'light';
    document.documentElement.setAttribute('data-theme', chosen);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      var isMatch = btn.getAttribute('data-theme-val') === chosen;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });
    if (persist) {
      try {
        localStorage.setItem('vozviva-theme', chosen);
      } catch (e) {}
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('vozviva-theme') || 'light';
    } catch (e) {}
    applyTheme(savedTheme, false);
    applyLang(detectInitialLang(), false);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'), true);
      });
    });

    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(btn.getAttribute('data-theme-val'), true);
      });
    });
  });
})();
