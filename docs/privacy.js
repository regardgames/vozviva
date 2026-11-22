/* ==========================================================================
   VozViva — Documentação Legal Trilíngue (PT-BR, EN, ES)
   Estúdio: Regard Games — Picos, Piauí, Brasil
   ========================================================================== */
(function () {
  'use strict';

  var LEGAL_I18N = {
    pt: {
      'legal.meta_title': 'Política de Privacidade, Termos de Uso (EULA), Isenção Clínica e Licenças — VozViva | Regard Games',
      'legal.meta_desc': 'Política de Privacidade, Termos de Uso e Licença (EULA), Isenção de Responsabilidade Clínica e Créditos Mulberry Symbols (CC BY-SA 4.0) e ARASAAC (CC BY-NC-SA 4.0) do aplicativo VozViva. Vale para a versão 1.0.3.',
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
      'legal.badge': 'LGPD • ECA • ECA Digital • GDPR • COPPA • CC BY-SA 4.0 e CC BY-NC-SA 4.0',
      'legal.page_title': 'Política de Privacidade, Termos de Uso (EULA), Isenção Clínica e Licenças',
      'legal.page_subtitle': 'Informações claras para famílias, cuidadores, fonoaudiólogos, terapeutas ocupacionais, educadores e revisores de lojas de aplicativos.',
      'legal.meta_updated_label': 'Última atualização:',
      'legal.meta_updated_val': '22 de novembro de 2026. Vale para o VozViva versão 1.0.3.',
      'legal.meta_controller_label': 'Controladora:',
      'legal.meta_controller_val': 'Regard Games — CNPJ 54.480.912/0001-37 (Picos, Piauí, Brasil)',
      'legal.meta_app_label': 'Aplicativo:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows e Ubuntu/Linux (Apple iOS/iPadOS indisponível no momento)',
      'legal.toc_title': 'Navegação Rápida',
      'legal.toc_s1': '1. Privacidade por Padrão e Proteção Infantil',
      'legal.toc_s2': '2. Uso Offline e Dados Locais',
      'legal.toc_s3': '3. Sem Anúncios, Sem Rastreadores',
      'legal.toc_s4': '4. Permissões (Voz, Fotos e Arquivos)',
      'legal.toc_s5': '5. Busca Online Opcional ARASAAC',
      'legal.toc_s6': '6. Backup Protegido por Senha (.assistivebackup)',
      'legal.toc_s7': '7. Transparência do Site Oficial',
      'legal.toc_s8': '8. Seus Dados, Exclusão e Contato',
      'legal.toc_s9': '9. Termos de Uso e Licença (EULA)',
      'legal.toc_s10': '9.3. Isenção de Responsabilidade Clínica',
      'legal.toc_s11': '10. Créditos e Licenças (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Privacidade por Padrão e Proteção Infantil',
      'legal.s1_p1': 'O VozViva é desenvolvido e mantido pela Regard Games (DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA, CNPJ 54.480.912/0001-37), de Picos, Piauí, Brasil. Foi pensado a partir dos princípios da LGPD (Lei nº 13.709/2018, em especial o art. 14, sobre o melhor interesse de crianças e adolescentes), do ECA (Lei nº 8.069/1990) e do ECA Digital (Lei nº 15.211/2025). Como o app também é usado por crianças, seguimos o que essas normas pedem em espírito: privacidade por padrão, coleta mínima, nenhum anúncio e nenhum perfilamento. Também nos inspiramos em normas de outros países, como GDPR/UK-GDPR, COPPA, CCPA/CPRA e PIPEDA. Este documento vale para o VozViva versão 1.0.3.',
      'legal.s1_p2': 'Sem conta, sem anúncios e sem rastreadores. O que você cria no VozViva fica no seu aparelho; a Regard Games não recebe esse conteúdo. O site e os downloads passam pelo GitHub, que registra o IP.',
      'legal.s1_p3': 'Trava para adultos: para editar o app ou mudar ajustes, é preciso passar por uma trava no Modo Responsável. Ela ajuda a evitar toques acidentais da criança. Não é verificação de idade nem de parentesco, e não substitui a presença de um adulto.',
      'legal.s2_title': '2. Funcionamento Offline e Dados Armazenados no Seu Dispositivo',
      'legal.s2_p1': 'O VozViva não exige cadastro, conta, login nem conexão com a internet para a comunicação do dia a dia. As informações criadas durante o uso ficam gravadas no armazenamento privado do seu próprio aparelho (celular, tablet ou computador):',
      'legal.s2_li1': 'Pranchas, cartões de comunicação e frases configuradas pela família ou profissional;',
      'legal.s2_li2': 'Fotografias pessoais ou familiares (salvas automaticamente sem metadados EXIF/GPS) e frases personalizadas faladas pela síntese de voz offline do aparelho adicionadas no Modo Responsável;',
      'legal.s2_li3': 'Preferências locais de acessibilidade, tema visual, idioma, configuração de voz offline (TTS) e o código local de proteção do Modo Responsável (a trava para adultos).',
      'legal.s2_p2': 'A Regard Games não recebe, não vê e não compartilha esses dados, e o app não os envia a nenhuma nuvem. No Android, o app está configurado para não entrar nos backups automáticos do Google. Se você usa programas de backup no aparelho ou no computador, eles podem copiar a pasta do app; isso depende das suas configurações.',
      'legal.s3_title': '3. Sem Anúncios, Sem Rastreadores e Sem Telemetria',
      'legal.s3_p1': 'O aplicativo não contém publicidade, compras internas, assinaturas nem ferramentas de rastreamento, análise de comportamento (analytics) ou relatórios automáticos de falhas em nuvem. No Modo Criança, o app não se conecta à internet.',
      'legal.s4_title': '4. Permissões do Sistema Operacional (Voz, Fotos e Arquivos)',
      'legal.s4_p1': 'Voz: usamos as vozes que já estão no seu aparelho (Android, Windows ou Linux). O texto falado não vai para a internet; essas vozes são do sistema do aparelho e podem ter política própria. Fotos e arquivos (opcional): só no Modo Responsável. O seletor do sistema abre quando você adiciona uma foto a um cartão ou escolhe um arquivo de backup. O app remove dos arquivos de foto os dados de localização (EXIF/GPS). No Android, isso não exige permissão de acesso a fotos ou arquivos. Câmera e microfone: nesta versão o VozViva não usa a câmera nem grava sons, e no Android não pede essas permissões. Para usar uma foto, você a escolhe na galeria ou nos arquivos do aparelho. Sem permissões escondidas: o app não pede localização, contatos, telefone ou SMS, Bluetooth nem identificador de publicidade.',
      'legal.s5_title': '5. Busca Opcional de Símbolos no ARASAAC (Só no Modo Responsável)',
      'legal.s5_p1': 'O VozViva inclui uma biblioteca de pictogramas locais (Mulberry Symbols) que funciona sem internet. No Modo Criança, o app não se conecta à internet. No Modo Responsável, a internet só é usada se o adulto escolher. Se ele decidir buscar símbolos no catálogo público ARASAAC (api.arasaac.org e static.arasaac.org, do Governo de Aragão, Espanha), o aparelho faz uma conexão HTTPS direta com os servidores do ARASAAC.',
      'legal.s5_p2': 'Nessa busca, o aparelho envia ao ARASAAC a palavra pesquisada, o idioma e os dados técnicos da conexão, como o endereço IP. O ARASAAC trata esses dados segundo as regras dele. Quando o adulto escolhe um símbolo, ele é baixado e guardado no aparelho e depois funciona sem internet. Nenhuma foto, prancha ou dado da criança é enviado nessa busca.',
      'legal.s6_title': '6. Backup Protegido por Senha (.assistivebackup)',
      'legal.s6_p1': 'O responsável pode salvar e restaurar uma cópia das pranchas e das mídias em um arquivo (.assistivebackup) protegido por senha. O conteúdo é cifrado e verificado contra alterações com um método próprio do VozViva, que ainda não passou por auditoria independente. Por isso, escolha uma senha longa e só sua e guarde o arquivo em local seguro.',
      'legal.s6_li1': 'A senha nunca é guardada pela Regard Games nem pelo app. Sem ela, o arquivo não abre e não pode ser recuperado.',
      'legal.s6_li2': 'Na versão 1.0.3, o campo de senha já vem preenchido com uma senha sugerida que é pública. Troque-a por uma senha sua. Arquivos gerados com a senha sugerida devem ser tratados como não protegidos.',
      'legal.s6_li3': 'O local onde você guarda o arquivo (pasta, pendrive ou serviço de armazenamento) é de sua responsabilidade e segue as regras desse local.',
      'legal.s7_title': '7. Transparência do Site Oficial e Downloads Diretos (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'O site é estático, hospedado no GitHub Pages (GitHub, Inc.), e não usa cookies de rastreamento, pixels de anúncio nem ferramentas de análise. Guardamos no seu navegador apenas o tema e o idioma que você escolhe (localStorage).',
      'legal.s7_p2': 'Ao visitar o site ou baixar o app, o GitHub registra dados técnicos da conexão (como IP e navegador), segundo a Declaração de Privacidade do GitHub. A Regard Games não recebe esses dados.',
      'legal.s7_p3': 'Para mostrar o contador público de downloads, ao abrir a página o seu navegador consulta a API pública do GitHub (api.github.com). Isso também mostra o seu IP ao GitHub. A consulta não envia cookies, e o resultado fica guardado por até 5 minutos na própria aba (sessionStorage).',
      'legal.s8_title': '8. Seus Dados, Retenção, Exclusão e Contato',
      'legal.s8_p1': 'Como os dados ficam no seu aparelho, é você quem decide sobre eles:',
      'legal.s8_li1': 'No Modo Responsável, você pode editar ou excluir pranchas, cartões e fotos a qualquer momento.',
      'legal.s8_li2': 'Para remover tudo do aparelho, desinstale o VozViva (Android). No Windows e no Linux, remova a pasta do programa e também a pasta de dados: no Windows, %APPDATA%\\RegardGames\\VozViva; no Linux, a pasta vozviva_data dentro de ~/.local/share/ (o caminho exato pode variar conforme a sua configuração).',
      'legal.s8_li3': 'Cópias que você exportou (arquivos .assistivebackup) ficam onde você as guardou. Apague-as também, se quiser.',
      'legal.s8_li4': 'Se você nos escreveu por e-mail, pode pedir acesso, correção ou exclusão do que enviou (veja Contato abaixo).',
      'legal.s8_c_title': 'Contato sobre privacidade e proteção de dados',
      'legal.s8_c_p': 'Escreva para contato@regardgames.com (assunto "Privacidade") para tirar dúvidas, pedir acesso, correção ou exclusão do que você nos enviou, ou falar sobre dados de uma criança.',
      'legal.s8_c_li1': 'Cuidado com dados de crianças: no primeiro contato, não envie nome, foto, laudo nem informações de saúde da criança. Se for preciso, avisaremos como enviar com segurança.',
      'legal.s8_c_li2': 'Prazo: respondemos em até 15 dias corridos.',
      'legal.s8_c_li3': 'Encarregado pelo tratamento de dados pessoais: a Regard Games. O contato é o mesmo e-mail acima.',
      'legal.s8_c_li4': 'Seu e-mail: usamos só para responder e guardamos por 12 meses depois do atendimento; depois, apagamos.',
      'legal.s8_p3': 'Problemas técnicos (sem dados pessoais): você pode abrir um chamado no GitHub (github.com/regardgames/vozviva/issues). Atenção: chamados são públicos. Nunca publique ali nomes, fotos ou informações de crianças ou de famílias. Em caso de dúvida, escreva por e-mail.',
      'legal.s9_title': '9. Termos de Uso, Licença de Uso do Software (EULA) e Condições Gerais',
      'legal.s9_1_title': '9.1. Licença de Uso Gratuito (Freeware Proprietário)',
      'legal.s9_1_p': 'A Regard Games concede a você (pessoa física, familiar, educador, terapeuta, escola ou instituição de atendimento) uma licença mundial, gratuita, não exclusiva, intransferível e revogável para baixar, instalar e utilizar o aplicativo VozViva em dispositivos compatíveis (Android, Windows e Linux; versão para Apple iOS/iPadOS indisponível no momento) para fins de Comunicação Aumentativa e Alternativa (CAA), apoio educacional, familiar e terapêutico.',
      'legal.s9_2_title': '9.2. Propriedade Intelectual e Licença Proprietária',
      'legal.s9_2_p': 'A distribuição gratuita do aplicativo executável não significa cessão nem abertura dos direitos de propriedade intelectual do software. O aplicativo VozViva, sua arquitetura, identidade visual Calm & Clear Studio, logomarcas e textos originais são de propriedade exclusiva da Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protegidos pela Lei de Software nº 9.609/1998, Lei de Direitos Autorais nº 9.610/1998 e tratados internacionais (LicenseRef-proprietary). É expressamente vedado realizar engenharia reversa ilícita, descompilar, vender, alugar, cobrar pelo aplicativo ou distribuir versões modificadas ou adulteradas dos binários oficiais. Essas restrições valem para o software VozViva. Os conjuntos de pictogramas de terceiros incluídos ou consultados pelo aplicativo (Mulberry Symbols e ARASAAC) seguem as licenças abertas originais deles, que podem permitir usos diferentes (veja Créditos e Licenças).',
      'legal.s9_3_title': '9.3. Isenção de Responsabilidade Clínica, Médica e Fonoaudiológica',
      'legal.s9_3_p': 'O VozViva é uma ferramenta de tecnologia assistiva voltada à comunicação cotidiana, acessibilidade e apoio pedagógico. O aplicativo não constitui dispositivo médico de diagnóstico ou prescrição (Software as a Medical Device — SaMD), não emite laudos clínicos e não substitui a avaliação, o diagnóstico ou a intervenção presencial e individualizada de fonoaudiólogos, terapeutas ocupacionais, psicólogos, médicos ou educadores especializados. A seleção de vocabulário, a organização de pranchas e o acompanhamento do desenvolvimento comunicativo devem contar sempre que possível com a orientação de profissionais habilitados.',
      'legal.s9_4_title': '9.4. Limitações do Sistema Operacional e Responsabilidade por Backups',
      'legal.s9_4_p': 'O bloqueio de saída total do aplicativo para a área de trabalho do aparelho depende dos recursos nativos de fixação de tela (Fixar Aplicativo no Android ou modo quiosque no Windows/Linux) configurados pelo adulto responsável no sistema operacional. Como o aplicativo funciona 100% offline e sem nuvem, é de inteira responsabilidade do adulto responsável realizar e guardar backups periódicos (.assistivebackup) e lembrar a respectiva senha de proteção. O software é fornecido gratuitamente "no estado em que se encontra" ("as is"), regendo-se pelas leis da República Federativa do Brasil, ressalvados os direitos irrenunciáveis do consumidor em sua jurisdição.',
      'legal.s10_title': '10. Créditos e Licenças de Símbolos Pictográficos (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'O VozViva usa pictogramas de terceiros sob licenças Creative Commons. Créditos:',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Biblioteca Local Incluída — CC BY-SA 4.0)',
      'legal.s10_mulberry_p': 'Mulberry Symbols — © 2018–2026 Steve Lee (https://mulberrysymbols.org/). Os símbolos têm origem no trabalho de Garry Paxton, com design gráfico de Claire Barge. Licença Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.pt. Os arquivos SVG que acompanham o VozViva são usados sem modificação. Se algum símbolo for adaptado, a versão adaptada continua sob a mesma licença e indicamos a alteração.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Catálogo Online Opcional — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'Pictogramas de Sergio Palao, propriedade do Governo de Aragão (Espanha), do ARASAAC (https://arasaac.org). Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt. Baixados de arasaac.org por escolha do adulto. O ARASAAC não patrocina o VozViva. Esses pictogramas não vêm dentro do app: são baixados quando o adulto escolhe um símbolo no Modo Responsável e guardados no aparelho. Uso não comercial: o VozViva é gratuito, sem anúncios e sem compras, e a busca ARASAAC só existe nessas condições. Se você reutilizar esses pictogramas fora do VozViva, siga a licença: cite os autores, não use para fins comerciais e compartilhe sob a mesma licença.',
      'legal.footer_sub': 'DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37) — Picos, Piauí, Brasil.',
      'legal.btn_back_home': 'Voltar para a Landing Page',
      'legal.btn_try_simulator': 'Testar Simulador CAA',
      'legal.footer_copy': '© 2026 Regard Games — Picos, Piauí, Brasil. Todos os direitos reservados.'
    },
    en: {
      'legal.meta_title': 'Privacy Policy, Terms of Use (EULA), Clinical Disclaimer & Licenses — VozViva | Regard Games',
      'legal.meta_desc': 'Privacy Policy, Terms of Use and License (EULA), Clinical Disclaimer, and Mulberry Symbols (CC BY-SA 4.0) and ARASAAC (CC BY-NC-SA 4.0) credits for the VozViva app. Applies to version 1.0.3.',
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
      'legal.badge': 'LGPD • ECA • ECA Digital • GDPR • COPPA • CC BY-SA 4.0 and CC BY-NC-SA 4.0',
      'legal.page_title': 'Privacy Policy, Terms of Use (EULA), Clinical Disclaimer & Licenses',
      'legal.page_subtitle': 'Clear information for families, caregivers, speech-language pathologists, occupational therapists, educators, and app store reviewers.',
      'legal.meta_updated_label': 'Last updated:',
      'legal.meta_updated_val': 'November 22, 2026. Applies to VozViva version 1.0.3.',
      'legal.meta_controller_label': 'Controller:',
      'legal.meta_controller_val': 'Regard Games — Brazil Tax ID CNPJ 54.480.912/0001-37 (Picos, Piauí, Brazil)',
      'legal.meta_app_label': 'Application:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows, and Ubuntu/Linux (Apple iOS/iPadOS currently unavailable)',
      'legal.toc_title': 'Quick Navigation',
      'legal.toc_s1': '1. Privacy by Default & Child Protection',
      'legal.toc_s2': '2. Offline Operation & Local Data',
      'legal.toc_s3': '3. No Ads, No Trackers',
      'legal.toc_s4': '4. OS Permissions (Voice, Photos & Files)',
      'legal.toc_s5': '5. Optional Online ARASAAC Search',
      'legal.toc_s6': '6. Password-Protected Backup (.assistivebackup)',
      'legal.toc_s7': '7. Official Website Transparency',
      'legal.toc_s8': '8. Your Data, Deletion & Contact',
      'legal.toc_s9': '9. Terms of Use & EULA',
      'legal.toc_s10': '9.3. Clinical & Medical Disclaimer',
      'legal.toc_s11': '10. Credits & Licenses (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Privacy by Default and Child Protection',
      'legal.s1_p1': 'VozViva is developed and maintained by Regard Games (DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA, Brazil CNPJ 54.480.912/0001-37), from Picos, Piauí, Brazil. It was designed around the principles of the Brazilian LGPD (Law No. 13,709/2018, especially Art. 14 on the best interests of children and adolescents), the ECA (Law No. 8,069/1990) and the ECA Digital (Law No. 15,211/2025). Because children also use the app, we follow what these laws ask for in spirit: privacy by default, minimal collection, no ads and no profiling. We are also guided by rules from other countries, such as GDPR/UK-GDPR, COPPA, CCPA/CPRA and PIPEDA. This document applies to VozViva version 1.0.3.',
      'legal.s1_p2': 'No account, no ads, no trackers. What you create in VozViva stays on your device; Regard Games does not receive that content. The website and downloads go through GitHub, which records your IP address.',
      'legal.s1_p3': 'Adult lock: to edit the app or change settings, you must pass a lock in Caregiver Mode. It helps prevent accidental taps by a child. It is not an age or parent check, and it does not replace an adult being present.',
      'legal.s2_title': '2. Offline Operation and Data Stored on Your Device',
      'legal.s2_p1': 'VozViva requires no registration, user account, login, or internet connection for everyday communication. Information created during use is stored in the private storage of your own device (phone, tablet, or computer):',
      'legal.s2_li1': 'Communication boards, cards, and phrases customized by the family or professional;',
      'legal.s2_li2': 'Personal or family photos (automatically saved stripped of EXIF/GPS metadata) and custom phrases spoken by the device’s offline voice synthesis added in Caregiver Mode;',
      'legal.s2_li3': 'Local accessibility preferences, visual theme, language, offline Text-to-Speech (TTS) settings, and the local Caregiver Mode protection code (the adult lock).',
      'legal.s2_p2': 'Regard Games does not receive, see or share this data, and the app does not send it to any cloud. On Android, the app is set not to join Google’s automatic backups. If you use backup programs on your device or computer, they may copy the app’s folder; that depends on your settings.',
      'legal.s3_title': '3. No Ads, No Trackers, and No Telemetry',
      'legal.s3_p1': 'The application contains no advertising, no in-app purchases, no subscriptions, and no behavioral analytics, tracking, or cloud crash-reporting tools. In Child Mode, the app does not connect to the internet.',
      'legal.s4_title': '4. Operating System Permissions (Voice, Photos, and Files)',
      'legal.s4_p1': 'Voice: we use the voices already on your device (Android, Windows or Linux). The spoken text does not go to the internet; these voices belong to the device’s system and may have their own policy. Photos and files (optional): only in Caregiver Mode. The system picker opens when you add a photo to a card or choose a backup file. The app removes location data (EXIF/GPS) from photo files. On Android, this does not require photo or file access permission. Camera and microphone: in this version VozViva does not use the camera or record sound, and on Android it does not ask for these permissions. To use a photo, you pick it from your gallery or files. No hidden permissions: the app does not ask for location, contacts, phone or SMS, Bluetooth or an advertising ID.',
      'legal.s5_title': '5. Optional Symbol Search on ARASAAC (Caregiver Mode Only)',
      'legal.s5_p1': 'VozViva includes a built-in library of local pictograms (Mulberry Symbols) that works without internet. In Child Mode, the app does not connect to the internet. In Caregiver Mode, the internet is used only if an adult chooses to. If the adult decides to search symbols in the public ARASAAC catalog (api.arasaac.org and static.arasaac.org, run by the Government of Aragon, Spain), the device makes a direct HTTPS connection to ARASAAC’s servers.',
      'legal.s5_p2': 'In this search, the device sends ARASAAC the word searched, the language and technical connection data such as the IP address. ARASAAC handles this data under its own rules. When the adult picks a symbol, it is downloaded and kept on the device and then works offline. No photo, board or child data is sent in this search.',
      'legal.s6_title': '6. Password-Protected Backup (.assistivebackup)',
      'legal.s6_p1': 'Caregivers can save and restore a copy of boards and media in a password-protected file (.assistivebackup). The content is encrypted and checked for tampering using VozViva’s own method, which has not yet had an independent audit. So please choose a long password that is only yours, and keep the file somewhere safe.',
      'legal.s6_li1': 'The password is never stored by Regard Games or the app. Without it, the file cannot be opened or recovered.',
      'legal.s6_li2': 'In version 1.0.3, the password field comes pre-filled with a suggested password that is public. Replace it with your own. Files created with the suggested password should be treated as not protected.',
      'legal.s6_li3': 'Where you keep the file (a folder, a USB drive or a storage service) is your responsibility and follows the rules of that place.',
      'legal.s7_title': '7. Official Website & Direct Downloads Transparency (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'The site is static, hosted on GitHub Pages (GitHub, Inc.), and uses no tracking cookies, ad pixels or analytics tools. We keep only the theme and language you choose in your browser (localStorage).',
      'legal.s7_p2': 'When you visit the site or download the app, GitHub records technical connection data (such as IP and browser) under the GitHub Privacy Statement. Regard Games does not receive this data.',
      'legal.s7_p3': 'To show the public download counter, when the page opens your browser queries GitHub’s public API (api.github.com). This also shows your IP address to GitHub. The request sends no cookies, and the result is kept for up to 5 minutes in the tab itself (sessionStorage).',
      'legal.s8_title': '8. Your Data, Retention, Deletion and Contact',
      'legal.s8_p1': 'Because your data stays on your device, you decide what happens to it:',
      'legal.s8_li1': 'In Caregiver Mode, you can edit or delete boards, cards and photos at any time.',
      'legal.s8_li2': 'To remove everything from the device, uninstall VozViva (Android). On Windows and Linux, remove the program folder and also the data folder: on Windows, %APPDATA%\\RegardGames\\VozViva; on Linux, the vozviva_data folder inside ~/.local/share/ (the exact path may vary with your configuration).',
      'legal.s8_li3': 'Copies you exported (.assistivebackup files) stay wherever you saved them. Delete them too, if you wish.',
      'legal.s8_li4': 'If you wrote to us by email, you can ask for access, correction or deletion of what you sent (see Contact below).',
      'legal.s8_c_title': 'Privacy and data protection contact',
      'legal.s8_c_p': 'Write to contato@regardgames.com (subject "Privacy") with questions, to ask for access, correction or deletion of what you sent us, or to talk about a child’s data.',
      'legal.s8_c_li1': 'Care with children’s data: in your first message, do not send a child’s name, photo, medical report or health information. If needed, we will tell you how to send it securely.',
      'legal.s8_c_li2': 'Response time: we reply within 15 calendar days.',
      'legal.s8_c_li3': 'Data protection officer: Regard Games. Contact is the same email above.',
      'legal.s8_c_li4': 'Your email: we use it only to reply, and keep it for 12 months after the request is closed; then we delete it.',
      'legal.s8_p3': 'Technical problems (no personal data): you may open an issue on GitHub (github.com/regardgames/vozviva/issues). Note: issues are public. Never post names, photos or information about children or families there. If in doubt, email us.',
      'legal.s9_title': '9. Terms of Use, End-User License Agreement (EULA), and General Conditions',
      'legal.s9_1_title': '9.1. Free License Grant (Proprietary Freeware)',
      'legal.s9_1_p': 'Regard Games grants you (an individual, family member, educator, therapist, school, or care institution) a worldwide, royalty-free, non-exclusive, non-transferable, and revocable license to download, install, and use the VozViva application on compatible Android, Windows, and Linux devices (Apple iOS/iPadOS version currently unavailable) for Augmentative and Alternative Communication (AAC), educational, family, and therapeutic support purposes.',
      'legal.s9_2_title': '9.2. Intellectual Property and Proprietary License',
      'legal.s9_2_p': 'Free distribution of the executable application does not grant any assignment or opening of the software’s intellectual property rights. The VozViva software, its architecture, Calm & Clear Studio visual identity, logos, and original texts are the exclusive property of Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protected by Brazilian Software Law No. 9,609/1998, Copyright Law No. 9,610/1998, and international treaties under a proprietary license (LicenseRef-proprietary). You may not unlawfully reverse-engineer, decompile, sell, rent, charge fees for the application, or distribute tampered or modified versions of the official binaries. These restrictions apply to the VozViva software. Third-party pictogram libraries included in or queried by the application (Mulberry Symbols and ARASAAC) follow their own original open licenses, which may allow different uses (see Credits and Licenses).',
      'legal.s9_3_title': '9.3. Clinical, Medical, and Speech-Language Pathology Disclaimer',
      'legal.s9_3_p': 'VozViva is an assistive technology tool designed for everyday communication, accessibility, and educational support. The application is not a diagnostic or prescriptive medical device (Software as a Medical Device — SaMD), does not issue clinical assessments, and does not replace evaluation, diagnosis, or individualized intervention by licensed speech-language pathologists (SLPs), occupational therapists, psychologists, physicians, or special-education professionals. Vocabulary selection, board organization, and communication development follow-up should involve qualified professionals whenever possible.',
      'legal.s9_4_title': '9.4. Operating System Boundaries and Backup Responsibility',
      'legal.s9_4_p': 'Preventing a user from exiting the application entirely to the operating system home screen depends on native OS screen-pinning features (App Pinning on Android or desktop kiosk mode on Windows/Linux) configured by the caregiver. Because VozViva operates 100% offline without cloud servers, the adult caregiver is solely responsible for creating and keeping periodic .assistivebackup files and remembering their encryption password. The software is provided free of charge "as is", governed by the laws of the Federative Republic of Brazil, without prejudice to mandatory consumer rights in your jurisdiction.',
      'legal.s10_title': '10. Pictographic Symbol Credits & Licenses (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'VozViva uses third-party pictograms under Creative Commons licenses. Credits:',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Built-in Local Library — CC BY-SA 4.0)',
      'legal.s10_mulberry_p': 'Mulberry Symbols — © 2018–2026 Steve Lee (https://mulberrysymbols.org/). The symbols originate from the work of Garry Paxton, with graphic design by Claire Barge. Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/. The SVG files shipped with VozViva are used unmodified. If any symbol is adapted, the adapted version stays under the same license and we indicate the change.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Optional Online Catalog — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'Pictograms by Sergio Palao, property of the Government of Aragon (Spain), from ARASAAC (https://arasaac.org). Creative Commons Attribution-NonCommercial-ShareAlike 4.0 License (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/. Downloaded from arasaac.org at an adult’s choice. ARASAAC does not sponsor VozViva. These pictograms are not bundled in the app: they are downloaded when an adult picks a symbol in Caregiver Mode and kept on the device. Non-commercial use: VozViva is free, with no ads and no purchases, and the ARASAAC search exists only under those conditions. If you reuse these pictograms outside VozViva, follow the license: credit the authors, do not use them commercially, and share under the same license.',
      'legal.footer_sub': 'DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37) — Picos, Piauí, Brazil.',
      'legal.btn_back_home': 'Back to Landing Page',
      'legal.btn_try_simulator': 'Try AAC Simulator',
      'legal.footer_copy': '© 2026 Regard Games — Picos, Piauí, Brazil. All rights reserved.'
    },
    es: {
      'legal.meta_title': 'Política de Privacidad, Términos de Uso (EULA), Aviso Clínico y Licencias — VozViva | Regard Games',
      'legal.meta_desc': 'Política de Privacidad, Términos de Uso y Licencia (EULA), Aviso Clínico y Créditos de Mulberry Symbols (CC BY-SA 4.0) y ARASAAC (CC BY-NC-SA 4.0) de la app VozViva. Válida para la versión 1.0.3.',
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
      'legal.badge': 'LGPD • ECA • ECA Digital • GDPR • COPPA • CC BY-SA 4.0 y CC BY-NC-SA 4.0',
      'legal.page_title': 'Política de Privacidad, Términos de Uso (EULA), Exención Clínica y Licencias',
      'legal.page_subtitle': 'Información clara para familias, cuidadores, fonoaudiólogos/logopedas, terapeutas ocupacionales, educadores y revisores de tiendas de aplicaciones.',
      'legal.meta_updated_label': 'Última actualización:',
      'legal.meta_updated_val': '22 de noviembre de 2026. Válida para la versión 1.0.3 de VozViva.',
      'legal.meta_controller_label': 'Responsable:',
      'legal.meta_controller_val': 'Regard Games — CNPJ 54.480.912/0001-37 (Picos, Piauí, Brasil)',
      'legal.meta_app_label': 'Aplicación:',
      'legal.meta_app_val': 'VozViva (com.regard.vozviva) — Android, Windows y Ubuntu/Linux (Apple iOS/iPadOS no disponible por el momento)',
      'legal.toc_title': 'Navegación Rápida',
      'legal.toc_s1': '1. Privacidad por Defecto y Protección Infantil',
      'legal.toc_s2': '2. Uso sin Conexión y Datos Locales',
      'legal.toc_s3': '3. Sin Anuncios, Sin Rastreadores',
      'legal.toc_s4': '4. Permisos (Voz, Fotos y Archivos)',
      'legal.toc_s5': '5. Búsqueda en Línea Opcional ARASAAC',
      'legal.toc_s6': '6. Copia Protegida con Contraseña (.assistivebackup)',
      'legal.toc_s7': '7. Transparencia del Sitio Oficial',
      'legal.toc_s8': '8. Tus Datos, Eliminación y Contacto',
      'legal.toc_s9': '9. Términos de Uso y Licencia (EULA)',
      'legal.toc_s10': '9.3. Exención de Responsabilidad Clínica',
      'legal.toc_s11': '10. Créditos y Licencias (Mulberry & ARASAAC)',
      'legal.s1_title': '1. Privacidad por Defecto y Protección Infantil',
      'legal.s1_p1': 'VozViva es desarrollada y mantenida por Regard Games (DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA, CNPJ 54.480.912/0001-37), de Picos, Piauí, Brasil. Fue pensada a partir de los principios de la LGPD de Brasil (Ley N.º 13.709/2018, en especial el art. 14, sobre el interés superior de niños y adolescentes), del ECA (Ley N.º 8.069/1990) y del ECA Digital (Ley N.º 15.211/2025). Como niños y niñas también usan la app, seguimos lo que esas normas piden en espíritu: privacidad por defecto, recopilación mínima, ningún anuncio y ningún perfilado. También nos guiamos por normas de otros países, como GDPR/UK-GDPR, COPPA, CCPA/CPRA y PIPEDA. Este documento es válido para la versión 1.0.3 de VozViva.',
      'legal.s1_p2': 'Sin cuenta, sin anuncios y sin rastreadores. Lo que creas en VozViva se queda en tu dispositivo; Regard Games no recibe ese contenido. El sitio y las descargas pasan por GitHub, que registra la IP.',
      'legal.s1_p3': 'Bloqueo para adultos: para editar la app o cambiar ajustes, hay que pasar un bloqueo en el Modo Responsable. Ayuda a evitar toques accidentales del niño. No es una verificación de edad ni de parentesco, y no reemplaza la presencia de un adulto.',
      'legal.s2_title': '2. Funcionamiento sin Conexión y Datos Almacenados en tu Dispositivo',
      'legal.s2_p1': 'VozViva no requiere registro, cuenta de usuario, inicio de sesión ni conexión a internet para la comunicación diaria. La información creada durante su uso se guarda en el almacenamiento privado de tu propio dispositivo (celular, tableta o computadora):',
      'legal.s2_li1': 'Tableros de comunicación, tarjetas y frases configuradas por la familia o el profesional;',
      'legal.s2_li2': 'Fotografías personales o familiares (guardadas automáticamente sin metadatos EXIF/GPS) y frases personalizadas habladas por la síntesis de voz sin conexión del dispositivo añadidas en el Modo Responsable;',
      'legal.s2_li3': 'Preferencias locales de accesibilidad, tema visual, idioma, ajustes de voz sin conexión (TTS) y el código local de protección del Modo Responsable (el bloqueo para adultos).',
      'legal.s2_p2': 'Regard Games no recibe, no ve y no comparte estos datos, y la app no los envía a ninguna nube. En Android, la app está configurada para no incluirse en las copias de seguridad automáticas de Google. Si usas programas de copia en tu dispositivo o computadora, pueden copiar la carpeta de la app; eso depende de tus ajustes.',
      'legal.s3_title': '3. Sin Anuncios, Sin Rastreadores y Sin Telemetría',
      'legal.s3_p1': 'La aplicación no contiene publicidad, compras integradas, suscripciones ni herramientas de seguimiento, análisis de comportamiento (analytics) o informes automáticos de errores en la nube. En el Modo Niño, la app no se conecta a internet.',
      'legal.s4_title': '4. Permisos del Sistema Operativo (Voz, Fotos y Archivos)',
      'legal.s4_p1': 'Voz: usamos las voces que ya están en tu dispositivo (Android, Windows o Linux). El texto hablado no sale a internet; esas voces pertenecen al sistema del dispositivo y pueden tener su propia política. Fotos y archivos (opcional): solo en el Modo Responsable. El selector del sistema se abre cuando añades una foto a una tarjeta o eliges un archivo de copia. La app elimina de las fotos los datos de ubicación (EXIF/GPS). En Android, esto no requiere permiso de acceso a fotos ni archivos. Cámara y micrófono: en esta versión VozViva no usa la cámara ni graba sonidos, y en Android no pide esos permisos. Para usar una foto, la eliges desde tu galería o tus archivos. Sin permisos ocultos: la app no pide ubicación, contactos, teléfono ni SMS, Bluetooth ni identificador publicitario.',
      'legal.s5_title': '5. Búsqueda Opcional de Símbolos en ARASAAC (Solo en Modo Responsable)',
      'legal.s5_p1': 'VozViva incluye una biblioteca de pictogramas locales (Mulberry Symbols) que funciona sin internet. En el Modo Niño, la app no se conecta a internet. En el Modo Responsable, internet solo se usa si el adulto lo decide. Si decide buscar símbolos en el catálogo público ARASAAC (api.arasaac.org y static.arasaac.org, del Gobierno de Aragón, España), el dispositivo hace una conexión HTTPS directa con los servidores de ARASAAC.',
      'legal.s5_p2': 'En esta búsqueda, el dispositivo envía a ARASAAC la palabra buscada, el idioma y datos técnicos de la conexión, como la dirección IP. ARASAAC trata esos datos según sus propias reglas. Cuando el adulto elige un símbolo, se descarga y se guarda en el dispositivo y luego funciona sin internet. Ninguna foto, tablero ni dato del niño se envía en esta búsqueda.',
      'legal.s6_title': '6. Copia de Seguridad Protegida con Contraseña (.assistivebackup)',
      'legal.s6_p1': 'El adulto responsable puede guardar y restaurar una copia de tableros y archivos multimedia en un archivo (.assistivebackup) protegido con contraseña. El contenido se cifra y se verifica contra alteraciones con un método propio de VozViva, que aún no ha tenido una auditoría independiente. Por eso, elige una contraseña larga y solo tuya, y guarda el archivo en un lugar seguro.',
      'legal.s6_li1': 'La contraseña nunca la guarda Regard Games ni la app. Sin ella, el archivo no se puede abrir ni recuperar.',
      'legal.s6_li2': 'En la versión 1.0.3, el campo de contraseña ya viene rellenado con una contraseña sugerida que es pública. Cámbiala por una tuya. Los archivos creados con la contraseña sugerida deben tratarse como no protegidos.',
      'legal.s6_li3': 'El lugar donde guardes el archivo (una carpeta, una memoria USB o un servicio de almacenamiento) es responsabilidad tuya y sigue las reglas de ese lugar.',
      'legal.s7_title': '7. Transparencia del Sitio Web Oficial y Descargas Directas (regardgames.github.io/vozviva)',
      'legal.s7_p1': 'El sitio es estático, alojado en GitHub Pages (GitHub, Inc.), y no usa cookies de rastreo, píxeles publicitarios ni herramientas de analítica. Guardamos en tu navegador solo el tema y el idioma que eliges (localStorage).',
      'legal.s7_p2': 'Al visitar el sitio o descargar la app, GitHub registra datos técnicos de la conexión (como IP y navegador), según la Declaración de Privacidad de GitHub. Regard Games no recibe esos datos.',
      'legal.s7_p3': 'Para mostrar el contador público de descargas, al abrir la página tu navegador consulta la API pública de GitHub (api.github.com). Esto también muestra tu IP a GitHub. La consulta no envía cookies y el resultado se guarda hasta 5 minutos en la propia pestaña (sessionStorage).',
      'legal.s8_title': '8. Tus Datos, Retención, Eliminación y Contacto',
      'legal.s8_p1': 'Como tus datos se quedan en tu dispositivo, tú decides qué hacer con ellos:',
      'legal.s8_li1': 'En el Modo Responsable, puedes editar o eliminar tableros, tarjetas y fotos en cualquier momento.',
      'legal.s8_li2': 'Para quitar todo del dispositivo, desinstala VozViva (Android). En Windows y Linux, elimina la carpeta del programa y también la carpeta de datos: en Windows, %APPDATA%\\RegardGames\\VozViva; en Linux, la carpeta vozviva_data dentro de ~/.local/share/ (la ruta exacta puede variar según tu configuración).',
      'legal.s8_li3': 'Las copias que exportaste (archivos .assistivebackup) quedan donde las guardaste. Bórralas también, si quieres.',
      'legal.s8_li4': 'Si nos escribiste por correo, puedes pedir acceso, corrección o eliminación de lo que enviaste (ver Contacto abajo).',
      'legal.s8_c_title': 'Contacto sobre privacidad y protección de datos',
      'legal.s8_c_p': 'Escribe a contato@regardgames.com (asunto "Privacidad") para resolver dudas, pedir acceso, corrección o eliminación de lo que nos enviaste, o hablar sobre datos de un niño.',
      'legal.s8_c_li1': 'Cuidado con los datos de niños: en el primer contacto, no envíes nombre, foto, informe médico ni información de salud del niño. Si hace falta, te diremos cómo enviarlo de forma segura.',
      'legal.s8_c_li2': 'Plazo: respondemos en un máximo de 15 días corridos.',
      'legal.s8_c_li3': 'Encargado de protección de datos: Regard Games. El contacto es el mismo correo de arriba.',
      'legal.s8_c_li4': 'Tu correo: lo usamos solo para responder y lo guardamos 12 meses después de cerrar la solicitud; después lo borramos.',
      'legal.s8_p3': 'Problemas técnicos (sin datos personales): puedes abrir una incidencia en GitHub (github.com/regardgames/vozviva/issues). Ojo: las incidencias son públicas. Nunca publiques allí nombres, fotos ni información de niños o familias. Si tienes dudas, escríbenos por correo.',
      'legal.s9_title': '9. Términos de Uso, Licencia de Uso del Software (EULA) y Condiciones Generales',
      'legal.s9_1_title': '9.1. Concesión de Licencia Gratuita (Freeware Propietario)',
      'legal.s9_1_p': 'Regard Games te concede (como persona física, familiar, educador, terapeuta, escuela o institución de atención) una licencia mundial, gratuita, no exclusiva, intransferible y revocable para descargar, instalar y utilizar la aplicación VozViva en dispositivos compatibles (Android, Windows y Linux; versión para Apple iOS/iPadOS no disponible por el momento) con fines de Comunicación Aumentativa y Alternativa (CAA), apoyo educativo, familiar y terapéutico.',
      'legal.s9_2_title': '9.2. Propiedad Intelectual y Licencia Propietaria',
      'legal.s9_2_p': 'La distribución gratuita del ejecutable no implica la cesión ni la apertura de los derechos de propiedad intelectual del software. El software VozViva, su arquitectura, identidad visual Calm & Clear Studio, logotipos y textos originales son propiedad exclusiva de Regard Games — DAYVID EMERSON SILVA FERREIRA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA (CNPJ 54.480.912/0001-37), protegidos por la Ley de Software de Brasil n.º 9.609/1998, la Ley de Derechos de Autor n.º 9.610/1998 y los tratados internacionales bajo licencia propietaria (LicenseRef-proprietary). Queda prohibido realizar ingeniería inversa ilícita, descompilar, vender, alquilar, cobrar por la aplicación o distribuir versiones modificadas o alteradas de los binarios oficiales. Estas restricciones valen para el software VozViva. Las bibliotecas de pictogramas de terceros incluidas o consultadas por la aplicación (Mulberry Symbols y ARASAAC) siguen sus propias licencias abiertas originales, que pueden permitir usos distintos (ver Créditos y Licencias).',
      'legal.s9_3_title': '9.3. Exención de Responsabilidad Clínica, Médica y Fonoaudiológica',
      'legal.s9_3_p': 'VozViva es una herramienta de tecnología asistiva orientada a la comunicación cotidiana, la accesibilidad y el apoyo pedagógico. La aplicación no constituye un dispositivo médico de diagnóstico o prescripción (Software as a Medical Device — SaMD), no emite informes clínicos y no sustituye la evaluación, el diagnóstico ni la intervención individualizada de fonoaudiólogos/logopedas, terapeutas ocupacionales, psicólogos, médicos o educadores especializados. La selección de vocabulario, la organización de tableros y el seguimiento del desarrollo comunicativo deben contar siempre que sea posible con la orientación de profesionales habilitados.',
      'legal.s9_4_title': '9.4. Límites del Sistema Operativo y Responsabilidad sobre Copias de Seguridad',
      'legal.s9_4_p': 'Impedir que el usuario salga completamente de la aplicación hacia la pantalla de inicio del dispositivo depende de las funciones nativas de fijación de pantalla del sistema operativo (Fijar aplicación en Android o modo quiosco en Windows/Linux) configuradas por el adulto responsable. Dado que VozViva funciona 100 % sin conexión y sin servidores en la nube, es responsabilidad exclusiva del adulto realizar y conservar copias de seguridad periódicas (.assistivebackup) y recordar su contraseña de cifrado. El software se proporciona de forma gratuita "tal cual" ("as is"), rigiéndose por las leyes de la República Federativa del Brasil, sin perjuicio de los derechos irrenunciables del consumidor en su jurisdicción.',
      'legal.s10_title': '10. Créditos y Licencias de Símbolos Pictográficos (Mulberry Symbols & ARASAAC)',
      'legal.s10_intro': 'VozViva usa pictogramas de terceros bajo licencias Creative Commons. Créditos:',
      'legal.s10_mulberry_title': '10.1. Mulberry Symbols (Biblioteca Local Incluida — CC BY-SA 4.0)',
      'legal.s10_mulberry_p': 'Mulberry Symbols — © 2018–2026 Steve Lee (https://mulberrysymbols.org/). Los símbolos tienen su origen en el trabajo de Garry Paxton, con diseño gráfico de Claire Barge. Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.es. Los archivos SVG que acompañan a VozViva se usan sin modificar. Si algún símbolo se adapta, la versión adaptada sigue bajo la misma licencia e indicamos el cambio.',
      'legal.s10_arasaac_title': '10.2. ARASAAC (Catálogo en Línea Opcional — CC BY-NC-SA 4.0)',
      'legal.s10_arasaac_p': 'Pictogramas de Sergio Palao, propiedad del Gobierno de Aragón (España), de ARASAAC (https://arasaac.org). Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 (CC BY-NC-SA 4.0): https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es. Descargados de arasaac.org por elección de un adulto. ARASAAC no patrocina VozViva. Estos pictogramas no vienen dentro de la app: se descargan cuando un adulto elige un símbolo en el Modo Responsable y se guardan en el dispositivo. Uso no comercial: VozViva es gratis, sin anuncios y sin compras, y la búsqueda ARASAAC solo existe en esas condiciones. Si reutilizas estos pictogramas fuera de VozViva, sigue la licencia: cita a los autores, no los uses con fines comerciales y compártelos bajo la misma licencia.',
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
