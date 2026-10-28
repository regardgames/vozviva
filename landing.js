/* ==========================================================================
   VozViva — Plataforma de Comunicação e Desenvolvimento Assistivo (CAA)
   Interactive CAA Board Simulator, Trilingual I18N (PT-BR / EN / ES),
   WCAG AAA Theme Engine, OS Detection & Public Releases Metrics
   Estúdio: Regard Games — Picos, Piauí, Brasil
   ========================================================================== */
(function () {
  'use strict';

  var I18N = {
    pt: {
      'meta.title': 'VozViva — Comunicação Aumentativa e Alternativa (CAA) Offline e Gratuita | Regard Games',
      'meta.description': 'Aplicativo gratuito e 100% offline de Comunicação Aumentativa e Alternativa (CAA) com síntese de voz, pranchas personalizáveis e privacidade total para crianças, famílias e terapeutas. Disponível para Android, iOS, Windows e Linux.',
      'meta.og_title': 'VozViva — Dê voz a cada momento, sem depender de internet',
      'meta.og_description': 'Plataforma de Comunicação Aumentativa e Alternativa (CAA) 100% offline, sem anúncios e sem coleta de dados. Em Português, Inglês e Espanhol.',
      'nav.skip_to_content': 'Pular para o conteúdo principal',
      'nav.brand_tag': 'CAA • 100% Offline',
      'nav.aria_main': 'Navegação Principal',
      'nav.simulator': 'Simulador CAA',
      'nav.features': 'Recursos',
      'nav.audiences': 'Para Quem É',
      'nav.modes': 'Modos de Uso',
      'nav.privacy': 'Privacidade',
      'nav.faq': 'Dúvidas',
      'nav.lang_group_label': 'Selecionar idioma',
      'nav.theme_group_label': 'Selecionar tema visual',
      'nav.theme_light_title': 'Tema Claro Calmo',
      'nav.theme_dark_title': 'Tema Escuro Confortável',
      'nav.theme_hc_title': 'Alto Contraste WCAG AAA',
      'nav.download': 'Baixar Grátis',
      'nav.menu_toggle_label': 'Abrir ou fechar menu de navegação',
      'nav.menu_btn': 'Menu',
      'hero.badge': '100% Offline • Gratuito • Zero Coleta de Dados',
      'hero.title': 'Toda pessoa tem direito a uma voz que funcione em qualquer lugar.',
      'hero.subtitle': 'O VozViva é uma plataforma gratuita de Comunicação Aumentativa e Alternativa (CAA) criada para crianças, famílias, fonoaudiólogos, terapeutas ocupacionais e educadores. Funciona sem internet, respeita o tempo de cada pessoa e protege integralmente a privacidade infantil.',
      'hero.cta_primary': 'Baixar Grátis Agora',
      'hero.cta_secondary': 'Testar Prancha Interativa',
      'hero.pills_aria': 'Plataformas suportadas',
      'hero.pill_android': 'Android (.apk / Play)',
      'hero.pill_ios': 'iPhone & iPad (iOS)',
      'hero.pill_windows': 'Windows 10/11 (.zip)',
      'hero.pill_linux': 'Ubuntu/Linux (.tar.gz)',
      'hero.trust_1': '🔒 Zero Contas ou Rastreadores',
      'hero.trust_2': '🗣️ PT-BR • EN • ES Nativos',
      'hero.trust_3': '🎨 Chave de Fitzgerald + WCAG AAA',
      'sim.live_badge': '▶ Simulador CAA ao Vivo',
      'sim.title': 'Experimente formar uma frase',
      'sim.voice_ready': 'Voz Sintetizada (TTS)',
      'sim.placeholder': 'Toque nos cartões abaixo para montar sua frase...',
      'sim.speak_aria': 'Falar frase completa em voz alta',
      'sim.btn_speak': 'Falar Frase',
      'sim.backspace_aria': 'Apagar último cartão da frase',
      'sim.btn_backspace': 'Apagar',
      'sim.clear_aria': 'Limpar toda a frase',
      'sim.btn_clear': 'Limpar',
      'sim.status_idle': 'Toque em qualquer cartão para adicionar e ouvir na hora.',
      'sim.status_speaking': '🔊 Falando: ',
      'sim.status_added': '✓ Adicionado à frase: ',
      'sim.status_cleared': 'Faixa de frase limpa. Toque nos cartões para começar.',
      'sim.status_empty': 'Toque em um ou mais cartões abaixo para montar uma frase antes de falar.',
      'sim.tabs_aria': 'Categorias da Prancha CAA',
      'sim.cat_all': '⊞ Essencial (Todas)',
      'sim.cat_people': '● Pessoas',
      'sim.cat_verbs': '▶ Verbos',
      'sim.cat_nouns': '■ Necessidades',
      'sim.cat_descriptors': '◆ Emoções',
      'sim.cat_social': '★ Sociais',
      'sim.cat_urgent': '▲ Urgência',
      'sim.grid_aria': 'Cartões de comunicação',
      'sim.toggle_tap_speak': '🔊 Falar ao tocar: Ativo',
      'sim.toggle_tap_speak_off': '🔇 Falar ao tocar: Inativo',
      'sim.toggle_uppercase': '🔠 CAIXA ALTA: Ativa',
      'sim.toggle_uppercase_off': '🔡 Caixa Normal: Ativa',
      'sim.toggle_speed': '🐢 Velocidade: ',
      'why.eyebrow': 'Design Assistivo & Base Clínica',
      'why.title': 'Por que o VozViva transforma a comunicação no dia a dia?',
      'why.subtitle': 'Projetado com rigor de acessibilidade cognitiva e motora para funcionar em casa, na escola, na clínica ou no transporte — sem surpresas e sem depender de sinal.',
      'why.card1_title': '100% Offline de Ponta a Ponta',
      'why.card1_desc': 'A voz de uma pessoa nunca pode cair porque o Wi-Fi falhou. Pranchas, pictogramas, fotos da família e síntese de voz funcionam integralmente em modo avião.',
      'why.card2_title': 'Chave de Fitzgerald com Dupla Codificação',
      'why.card2_desc': 'Cada categoria gramatical combina cor semântica com um símbolo geométrico exclusivo (● ▶ ■ ◆ ★ ▲), garantindo reconhecimento mesmo para pessoas com daltonismo.',
      'why.card3_title': 'Fotos Reais e Voz da Própria Família',
      'why.card3_desc': 'Além da biblioteca de pictogramas inclusa, você pode fotografar o brinquedo favorito, a escola ou os familiares e gravar áudios acolhedores diretamente pelo aparelho.',
      'why.card4_title': 'Acessibilidade Motora e Sensorial',
      'why.card4_desc': 'Grades ajustáveis (de 2 até 24 cartões por tela), filtro contra toques repetidos involuntários, tempo de retenção configurável e tema de Alto Contraste WCAG AAA.',
      'why.card5_title': 'Trilíngue Nativo (PT-BR, EN, ES)',
      'why.card5_desc': '7 pranchas-modelo iniciais cuidadosamente adaptadas para o vocabulário essencial do Português Brasileiro, Inglês e Espanhol neutro pan-hispânico.',
      'why.card6_title': 'Backup Local Criptografado',
      'why.card6_desc': 'Exporte e transfira pranchas personalizadas entre Android, iOS, Windows e Linux usando arquivos protegidos por senha com criptografia forte AES-256-GCM.',
      'fitz.people_title': '● Pessoas & Pronomes',
      'fitz.people_examples': 'Eu, Você, Mamãe, Papai, Professora',
      'fitz.verbs_title': '▶ Verbos & Ações',
      'fitz.verbs_examples': 'Quero, Ir, Comer, Beber, Brincar, Parar',
      'fitz.nouns_title': '■ Substantivos & Objetos',
      'fitz.nouns_examples': 'Água, Comida, Banheiro, Casa, Brinquedo',
      'fitz.desc_title': '◆ Emoções & Estados',
      'fitz.desc_examples': 'Feliz, Triste, Cansado, Mais, Gostoso',
      'fitz.social_title': '★ Sociais & Rápidas',
      'fitz.social_examples': 'Sim, Não, Obrigado, Por favor, Oi',
      'fitz.urgent_title': '▲ Urgência & Apoio',
      'fitz.urgent_examples': 'Ajuda, Dói, Barulho Alto, Pausa',
      'audiences.eyebrow': 'Construído em Conjunto',
      'audiences.title': 'Feito para quem comunica e para quem apoia todos os dias',
      'audiences.subtitle': 'Simples nos primeiros 3 minutos para a família em casa e completo para a prática clínica e pedagógica.',
      'audiences.family_title': 'Para Famílias, Mães, Pais e Cuidadores',
      'audiences.family_desc': 'Comece a usar imediatamente sem preencher cadastros burocráticos. Escolha o idioma, ajuste o tamanho dos cartões e dê autonomia para seu filho expressar desejos, sentimentos e necessidades.',
      'audiences.family_b1': 'Pronto para usar em menos de 3 minutos com 7 pranchas do cotidiano (Refeições, Higiene, Família, Emoções, Brincadeiras e Rotina).',
      'audiences.family_b2': 'Personalize cartões com fotos reais da casa e grave a voz de familiares para tornar a comunicação ainda mais afetiva.',
      'audiences.family_b3': '100% gratuito para sempre: sem mensalidades caras, sem anúncios que distraiam a criança e sem compras acidentais.',
      'audiences.pro_title': 'Para Fonoaudiólogos, Terapeutas Ocupacionais e Educadores',
      'audiences.pro_desc': 'Fundamentado nas melhores práticas de Comunicação Aumentativa e Alternativa (CAA), priorizando vocabulário essencial (Core Words), consistência motora e modelagem pelo parceiro de comunicação.',
      'audiences.pro_b1': 'Consistência espacial (planejamento motor): oculte ou exiba cartões progressivamente mantendo a posição fixa das palavras já aprendidas.',
      'audiences.pro_b2': 'Múltiplos perfis locais independentes no mesmo tablet ou computador, ideal para atendimentos clínicos e salas de recursos multifuncionais.',
      'audiences.pro_b3': 'Compatível com símbolos Mulberry (inclusos offline) e busca opcional no catálogo público ARASAAC com atribuição automática.',
      'modes.eyebrow': 'Arquitetura de Dois Modos',
      'modes.title': 'Separação Segura: Modo Criança e Modo Responsável',
      'modes.subtitle': 'O ambiente de comunicação é calmo, previsível e livre de distrações. As ferramentas de edição ficam protegidas por verificação de adulto e PIN.',
      'modes.tab_child': '🧒 Modo Criança (Comunicador)',
      'modes.tab_caregiver': '🔐 Modo Responsável / Terapeuta',
      'modes.child_title': 'Foco 100% na Comunicação Sem Distrações',
      'modes.child_desc': 'No Modo Criança, toda a tela é dedicada às pranchas de comunicação e à faixa de construção de frases. Não há menus administrativos expostos, links para a internet ou risco de apagar cartões por engano.',
      'modes.child_b1': 'Botões amplos de alto contraste com resposta de voz imediata ao tocar.',
      'modes.child_b2': 'Zero conexões de rede: nenhuma janela externa ou notificação interrompe a conversa.',
      'modes.child_b3': 'Saída protegida por toque longo de 3 segundos + desafio de adulto e código PIN.',
      'modes.child_box_title': '🛡️ Proteção Ativa no Modo Criança',
      'modes.child_box_desc': 'Compatível com Acesso Guiado (iPad/iPhone), Fixação de Tela (Android) e Modo Quiosque (Windows/Linux) para evitar saídas acidentais do aplicativo durante o uso.',
      'modes.caregiver_title': 'Personalização Completa para Família e Clínica',
      'modes.caregiver_desc': 'Ao desbloquear o Modo Responsável com seu PIN local, você acessa o editor visual de pranchas, ajustes finos de voz e acessibilidade motora, além de exportação segura de backups.',
      'modes.caregiver_b1': 'Crie ou edite cartões com símbolos Mulberry, busca opcional no ARASAAC, fotos da câmera (com remoção automática de GPS/EXIF) e gravação de voz.',
      'modes.caregiver_b2': 'Ajuste a densidade da grade (2x1 até 6x4), velocidade e tom da voz TTS, caixa alta e tempo de retenção de toque.',
      'modes.caregiver_b3': 'Exporte e restaure pacotes criptografados (.assistivebackup) para levar as pranchas da clínica para o celular da família.',
      'modes.caregiver_box_title': '⚙️ Controle Local Absoluto',
      'modes.caregiver_desc_2': 'Permissões de câmera e microfone são solicitadas apenas no momento em que o adulto clica em criar uma mídia personalizada.',
      'priv.eyebrow': 'Privacidade Infantil em Primeiro Lugar',
      'priv.title': 'Privacidade Absoluta por Arquitetura (LGPD, COPPA e GDPR-K)',
      'priv.subtitle': 'A comunicação de uma criança é íntima e inviolável. Por isso, o VozViva foi construído sem servidores de coleta: o que acontece no seu aparelho permanece exclusivamente no seu aparelho.',
      'priv.c1_title': 'Zero Coleta de Dados',
      'priv.c1_desc': 'Não pedimos nome, e-mail, CPF, telefone ou localização. Não coletamos histórico de frases faladas nem fotos das crianças.',
      'priv.c2_title': 'Fotos Limpas de GPS/EXIF',
      'priv.c2_desc': 'Quando você adiciona uma foto familiar a um cartão, o VozViva remove automaticamente metadados ocultos de localização antes de salvar no aparelho.',
      'priv.c3_title': 'Sem Anúncios ou Rastreadores',
      'priv.c3_desc': 'Zero SDKs publicitários, zero pixels de rastreamento e zero telemetria oculta. Conformidade rigorosa com o Art. 14 da LGPD (Brasil), COPPA e GDPR-K.',
      'priv.c4_title': 'Transparência Jurídica e Clínica',
      'priv.c4_desc': 'Documentação completa em Português, Inglês e Espanhol com Política de Privacidade, Termos de Uso, Aviso Clínico e Licenças Abertas.',
      'platforms.eyebrow': 'Multiplataforma & Gratuito',
      'platforms.title': 'Disponível para celulares, tablets e computadores',
      'platforms.subtitle': 'Baixe gratuitamente para o seu sistema operacional e verifique a integridade com o hash SHA-256 oficial.',
      'metrics.title': 'Placar Público de Downloads (GitHub Releases)',
      'metrics.status_live': 'Transparência pública sem cookies (api.github.com)',
      'metrics.total': '∑ Total Acumulado',
      'platforms.recommended_badge': '★ Recomendado para seu dispositivo',
      'platforms.android_title': 'Android (Smartphones e Tablets)',
      'platforms.android_desc': 'Compatível com Android 8.0 ou superior. Ideal para tablets de uso diário em casa, na escola e na clínica. Pacote assinado digitalmente v1.0.1+2 (60,9 MB).',
      'platforms.btn_apk': 'Baixar .APK Direto',
      'platforms.btn_copy_sha': 'Copiar SHA-256',
      'platforms.btn_copied_sha': '✓ Hash Copiado!',
      'platforms.ios_title': 'iPhone e iPad (iOS / iPadOS)',
      'platforms.ios_desc': 'Compatível com iOS e iPadOS 14.0 ou superior. Integração perfeita com o Acesso Guiado nativo da Apple para uso focado na comunicação.',
      'platforms.ios_store_note': 'Distribuição Oficial Verificada:',
      'platforms.ios_store_sub': 'Pacote assinado via Apple App Store / TestFlight Oficial (Sem Coleta de Dados).',
      'platforms.btn_ios': 'Ver na App Store / Releases',
      'platforms.windows_title': 'Windows 10 e 11 (64 bits)',
      'platforms.windows_desc': 'Versão portátil (.zip — 24,8 MB) e instalador para notebooks, computadores escolares e telas sensíveis ao toque, com navegação completa por teclado.',
      'platforms.btn_windows': 'Baixar Windows (.zip)',
      'platforms.linux_title': 'Ubuntu / Linux (64 bits)',
      'platforms.linux_desc': 'Pacote portátil v1.0.1+2 (.tar.gz — 10,3 MB) compatível com Ubuntu 22.04+, Debian, Mint e Fedora, com integração ao Speech Dispatcher local.',
      'platforms.btn_linux': 'Baixar Linux (.tar.gz)',
      'faq.eyebrow': 'Perguntas Frequentes',
      'faq.title': 'Tire suas dúvidas sobre o VozViva',
      'faq.q1': 'O VozViva é realmente 100% gratuito e sem mensalidades?',
      'faq.a1': 'Sim. O VozViva é totalmente gratuito para famílias, cuidadores, escolas, clínicas e profissionais. Não existem assinaturas pagas, bloqueios de vocabulário nem anúncios dentro do aplicativo.',
      'faq.q2': 'Preciso de conexão com a internet para a criança se comunicar?',
      'faq.a2': 'Não. O aplicativo instalado funciona 100% offline, inclusive em modo avião. Todas as pranchas iniciais, símbolos Mulberry, fotos da família, áudios gravados e a síntese de voz do aparelho funcionam sem internet.',
      'faq.q3': 'O VozViva substitui o acompanhamento com fonoaudiólogo ou terapeuta?',
      'faq.a3': 'Não. O VozViva é uma ferramenta tecnológica de apoio à Comunicação Aumentativa e Alternativa (CAA). Ele não realiza diagnósticos clínicos nem substitui a avaliação e o acompanhamento individualizado de profissionais de Fonoaudiologia, Terapia Ocupacional, Psicologia, Educação Especial ou Medicina.',
      'faq.q4': 'Como funcionam os créditos dos símbolos Mulberry e ARASAAC?',
      'faq.a4': 'A biblioteca base offline utiliza Mulberry Symbols (licença CC BY-SA 2.0 UK / 4.0). Além disso, no Modo Responsável, o adulto pode pesquisar pictogramas opcionais na biblioteca pública ARASAAC (Sergio Palao / Governo de Aragão — licença CC BY-NC-SA 4.0) para salvá-los localmente.',
      'footer.about_text': 'Desenvolvido por Regard Games (Picos, Piauí, Brasil) com foco em acessibilidade, inclusão comunicativa e proteção absoluta à privacidade infantil.',
      'footer.clinical_disclaimer': 'Aviso importante: O VozViva é uma ferramenta de apoio à Comunicação Aumentativa e Alternativa (CAA) e não substitui o acompanhamento individualizado de profissionais de fonoaudiologia, terapia ocupacional, psicologia, pedagogia ou medicina.',
      'footer.col_legal': 'Documentação Legal & Ética',
      'footer.privacy_link': 'Política de Privacidade (LGPD/COPPA/GDPR)',
      'footer.terms_link': 'Termos de Uso e Licença (EULA)',
      'footer.disclaimer_link': 'Isenção de Responsabilidade Clínica',
      'footer.licenses_link': 'Créditos e Licenças (Mulberry & ARASAAC)',
      'footer.col_links': 'Links Oficiais',
      'footer.repo_link': 'Portal & Releases no GitHub',
      'footer.support_link': 'Canal de Suporte e Acessibilidade',
      'footer.copyright': '© 2026 Regard Games — Picos, Piauí, Brasil. Todos os direitos reservados.'
    }
  };
  window.__VOZVIVA_I18N_BASE__ = I18N;
})();

(function () {
  'use strict';
  var I18N = window.__VOZVIVA_I18N_BASE__ || {};

  I18N.en = {
    'meta.title': 'VozViva — Free & 100% Offline Augmentative and Alternative Communication (AAC) | Regard Games',
    'meta.description': 'Free, 100% offline Augmentative and Alternative Communication (AAC) app with voice synthesis, customizable boards, and complete privacy for children, families, and therapists. Available on Android, iOS, Windows, and Linux.',
    'meta.og_title': 'VozViva — Give voice to every moment, without relying on the internet',
    'meta.og_description': '100% offline Augmentative and Alternative Communication (AAC) platform with zero ads and zero data collection. In Portuguese, English, and Spanish.',
    'nav.skip_to_content': 'Skip to main content',
    'nav.brand_tag': 'AAC • 100% Offline',
    'nav.aria_main': 'Main Navigation',
    'nav.simulator': 'AAC Simulator',
    'nav.features': 'Features',
    'nav.audiences': 'Who It Is For',
    'nav.modes': 'Usage Modes',
    'nav.privacy': 'Privacy',
    'nav.faq': 'FAQ',
    'nav.lang_group_label': 'Select language',
    'nav.theme_group_label': 'Select visual theme',
    'nav.theme_light_title': 'Calm Light Theme',
    'nav.theme_dark_title': 'Comfortable Dark Theme',
    'nav.theme_hc_title': 'WCAG AAA High Contrast',
    'nav.download': 'Free Download',
    'nav.menu_toggle_label': 'Open or close navigation menu',
    'nav.menu_btn': 'Menu',
    'hero.badge': '100% Offline • Free • Zero Data Collection',
    'hero.title': 'Everyone has the right to a voice that works everywhere.',
    'hero.subtitle': 'VozViva is a free Augmentative and Alternative Communication (AAC) platform created for children, families, speech-language pathologists, occupational therapists, and educators. It works offline, respects every person’s pace, and fully protects child privacy.',
    'hero.cta_primary': 'Download Free Now',
    'hero.cta_secondary': 'Try Interactive Board',
    'hero.pills_aria': 'Supported platforms',
    'hero.pill_android': 'Android (.apk / Play)',
    'hero.pill_ios': 'iPhone & iPad (iOS)',
    'hero.pill_windows': 'Windows 10/11 (.zip)',
    'hero.pill_linux': 'Ubuntu/Linux (.tar.gz)',
    'hero.trust_1': '🔒 Zero Accounts or Trackers',
    'hero.trust_2': '🗣️ Native PT-BR • EN • ES',
    'hero.trust_3': '🎨 Fitzgerald Key + WCAG AAA',
    'sim.live_badge': '▶ Live AAC Simulator',
    'sim.title': 'Try building a sentence',
    'sim.voice_ready': 'Synthesized Voice (TTS)',
    'sim.placeholder': 'Tap the cards below to build your sentence...',
    'sim.speak_aria': 'Speak full sentence aloud',
    'sim.btn_speak': 'Speak Sentence',
    'sim.backspace_aria': 'Delete last card from sentence',
    'sim.btn_backspace': 'Backspace',
    'sim.clear_aria': 'Clear entire sentence',
    'sim.btn_clear': 'Clear',
    'sim.status_idle': 'Tap any card to add it and hear it right away.',
    'sim.status_speaking': '🔊 Speaking: ',
    'sim.status_added': '✓ Added to sentence: ',
    'sim.status_cleared': 'Sentence strip cleared. Tap cards below to start.',
    'sim.status_empty': 'Tap one or more cards below to build a sentence before speaking.',
    'sim.tabs_aria': 'AAC Board Categories',
    'sim.cat_all': '⊞ Core (All)',
    'sim.cat_people': '● People',
    'sim.cat_verbs': '▶ Verbs',
    'sim.cat_nouns': '■ Needs',
    'sim.cat_descriptors': '◆ Feelings',
    'sim.cat_social': '★ Social',
    'sim.cat_urgent': '▲ Urgent',
    'sim.grid_aria': 'Communication cards',
    'sim.toggle_tap_speak': '🔊 Speak on tap: On',
    'sim.toggle_tap_speak_off': '🔇 Speak on tap: Off',
    'sim.toggle_uppercase': '🔠 UPPERCASE: On',
    'sim.toggle_uppercase_off': '🔡 Mixed Case: On',
    'sim.toggle_speed': '🐢 Speed: ',
    'why.eyebrow': 'Assistive Design & Clinical Foundation',
    'why.title': 'Why does VozViva transform everyday communication?',
    'why.subtitle': 'Designed with strict cognitive and motor accessibility standards to work at home, at school, at the clinic, or on the go — reliably and without needing signal.',
    'why.card1_title': '100% End-to-End Offline',
    'why.card1_desc': 'A person’s voice must never go silent because Wi-Fi dropped. Boards, pictograms, family photos, and voice synthesis work completely in airplane mode.',
    'why.card2_title': 'Fitzgerald Key with Dual Encoding',
    'why.card2_desc': 'Each grammatical category pairs semantic color with a distinct geometric symbol (● ▶ ■ ◆ ★ ▲), ensuring instant recognition even for users with color blindness.',
    'why.card3_title': 'Real Photos & Family Voice',
    'why.card3_desc': 'Alongside the built-in symbol library, you can photograph a favorite toy, school, or family members and record warm familiar voices directly on the device.',
    'why.card4_title': 'Motor & Sensory Accessibility',
    'why.card4_desc': 'Adjustable grids (from 2 up to 24 cards per screen), accidental repeat-touch filter, configurable hold duration, and a WCAG AAA High Contrast theme.',
    'why.card5_title': 'Native Trilingual (PT-BR, EN, ES)',
    'why.card5_desc': '7 starter board templates carefully tailored for essential Core Words in Brazilian Portuguese, English, and neutral pan-Hispanic Spanish.',
    'why.card6_title': 'Encrypted Local Backup',
    'why.card6_desc': 'Export and transfer custom boards across Android, iOS, Windows, and Linux using password-protected files with strong AES-256-GCM encryption.',
    'fitz.people_title': '● People & Pronouns',
    'fitz.people_examples': 'I, You, Mom, Dad, Teacher',
    'fitz.verbs_title': '▶ Verbs & Actions',
    'fitz.verbs_examples': 'Want, Go, Eat, Drink, Play, Stop',
    'fitz.nouns_title': '■ Nouns & Objects',
    'fitz.nouns_examples': 'Water, Food, Bathroom, Home, Toy',
    'fitz.desc_title': '◆ Feelings & States',
    'fitz.desc_examples': 'Happy, Sad, Tired, More, Good',
    'fitz.social_title': '★ Social & Quick Replies',
    'fitz.social_examples': 'Yes, No, Thank You, Please, Hi',
    'fitz.urgent_title': '▲ Urgent & Support',
    'fitz.urgent_examples': 'Help, It Hurts, Too Loud, Break',
    'audiences.eyebrow': 'Built Together',
    'audiences.title': 'Made for those who communicate and those who support every day',
    'audiences.subtitle': 'Simple within the first 3 minutes for families at home, and comprehensive for clinical and educational practice.',
    'audiences.family_title': 'For Families, Parents, and Caregivers',
    'audiences.family_desc': 'Start immediately without filling out bureaucratic sign-ups. Pick your language, adjust card sizes, and empower your child to express wishes, feelings, and needs.',
    'audiences.family_b1': 'Ready to use in under 3 minutes with 7 daily-life boards (Meals, Hygiene, Family, Feelings, Play, and Routine).',
    'audiences.family_b2': 'Customize cards with real photos from home and record family voices to make communication even more personal.',
    'audiences.family_b3': '100% free forever: no expensive subscriptions, no distracting ads, and no accidental in-app purchases.',
    'audiences.pro_title': 'For Speech-Language Pathologists, OTs, and Educators',
    'audiences.pro_desc': 'Grounded in Augmentative and Alternative Communication (AAC) best practices, prioritizing Core Words, motor planning consistency, and partner aided language modeling.',
    'audiences.pro_b1': 'Spatial consistency (motor planning): progressively hide or reveal cards while keeping learned vocabulary in fixed positions.',
    'audiences.pro_b2': 'Multiple independent local profiles on the same tablet or computer, ideal for therapy sessions and special education classrooms.',
    'audiences.pro_b3': 'Compatible with Mulberry Symbols (bundled offline) and optional search in the public ARASAAC catalog with automatic attribution.',
    'modes.eyebrow': 'Two-Mode Architecture',
    'modes.title': 'Safe Separation: Child Mode & Caregiver Mode',
    'modes.subtitle': 'The communication space stays calm, predictable, and distraction-free. Editing tools remain protected behind adult verification and a local PIN.',
    'modes.tab_child': '🧒 Child Mode (Communicator)',
    'modes.tab_caregiver': '🔐 Caregiver / Therapist Mode',
    'modes.child_title': '100% Focus on Distraction-Free Communication',
    'modes.child_desc': 'In Child Mode, the entire screen is dedicated to communication boards and the sentence strip. There are no exposed admin menus, external links, or risk of deleting cards by mistake.',
    'modes.child_b1': 'Large high-contrast buttons with immediate spoken feedback on tap.',
    'modes.child_b2': 'Zero network connections: no external pop-ups or notifications interrupt the conversation.',
    'modes.child_b3': 'Exit protected by a 3-second long press + adult verification challenge and PIN code.',
    'modes.child_box_title': '🛡️ Active Protection in Child Mode',
    'modes.child_box_desc': 'Compatible with Guided Access (iPad/iPhone), Screen Pinning (Android), and Kiosk Mode (Windows/Linux) to prevent accidental exits during daily use.',
    'modes.caregiver_title': 'Complete Customization for Home and Clinic',
    'modes.caregiver_desc': 'When unlocking Caregiver Mode with your local PIN, you access the visual board editor, fine-grained voice and motor accessibility controls, and secure backup export.',
    'modes.caregiver_b1': 'Create or edit cards with Mulberry symbols, optional ARASAAC search, camera photos (with automatic GPS/EXIF stripping), and voice recording.',
    'modes.caregiver_b2': 'Adjust grid density (2x1 up to 6x4), TTS speech rate and pitch, uppercase labels, and touch hold duration.',
    'modes.caregiver_b3': 'Export and restore encrypted packages (.assistivebackup) to carry boards from the clinic to the family phone or tablet.',
    'modes.caregiver_box_title': '⚙️ Absolute Local Control',
    'modes.caregiver_desc_2': 'Camera and microphone permissions are requested strictly just-in-time when an adult taps to create custom media.',
    'priv.eyebrow': 'Child Privacy First',
    'priv.title': 'Absolute Privacy by Architecture (LGPD, COPPA & GDPR-K)',
    'priv.subtitle': 'A child’s communication is intimate and inviolable. That is why VozViva was built with zero collection servers: what happens on your device stays exclusively on your device.',
    'priv.c1_title': 'Zero Data Collection',
    'priv.c1_desc': 'We never ask for names, emails, ID numbers, phone numbers, or location. We never collect spoken sentence history or children’s photos.',
    'priv.c2_title': 'GPS/EXIF-Stripped Photos',
    'priv.c2_desc': 'When you add a family photo to a card, VozViva automatically strips hidden location metadata before saving it locally.',
    'priv.c3_title': 'No Ads or Trackers',
    'priv.c3_desc': 'Zero ad SDKs, zero tracking pixels, and zero hidden telemetry. Strict compliance with Brazil LGPD Art. 14, U.S. COPPA, and GDPR-K.',
    'priv.c4_title': 'Legal & Clinical Transparency',
    'priv.c4_desc': 'Complete documentation in Portuguese, English, and Spanish covering Privacy Policy, Terms of Use, Clinical Disclaimer, and Open Licenses.',
    'platforms.eyebrow': 'Multiplatform & Free',
    'platforms.title': 'Available for phones, tablets, and computers',
    'platforms.subtitle': 'Download free for your operating system and verify integrity with the official SHA-256 hash.',
    'metrics.title': 'Public Download Counter (GitHub Releases)',
    'metrics.status_live': 'Cookie-free public transparency (api.github.com)',
    'metrics.total': '∑ Total Downloads',
    'platforms.recommended_badge': '★ Recommended for your device',
    'platforms.android_title': 'Android (Smartphones & Tablets)',
    'platforms.android_desc': 'Compatible with Android 8.0 or higher. Ideal for daily tablets at home, school, and clinic. Digitally signed package v1.0.1+2 (60.9 MB).',
    'platforms.btn_apk': 'Download Direct .APK',
    'platforms.btn_copy_sha': 'Copy SHA-256',
    'platforms.btn_copied_sha': '✓ Hash Copied!',
    'platforms.ios_title': 'iPhone & iPad (iOS / iPadOS)',
    'platforms.ios_desc': 'Compatible with iOS and iPadOS 14.0 or higher. Seamless integration with Apple Guided Access for focused communication.',
    'platforms.ios_store_note': 'Verified Official Distribution:',
    'platforms.ios_store_sub': 'Signed package via Apple App Store / Official TestFlight (Zero Data Collection).',
    'platforms.btn_ios': 'View on App Store / Releases',
    'platforms.windows_title': 'Windows 10 & 11 (64-bit)',
    'platforms.windows_desc': 'Portable version (.zip — 24.8 MB) and installer for laptops, school computers, and touchscreens, with full keyboard navigation.',
    'platforms.btn_windows': 'Download Windows (.zip)',
    'platforms.linux_title': 'Ubuntu / Linux (64-bit)',
    'platforms.linux_desc': 'Portable package v1.0.1+2 (.tar.gz — 10.3 MB) compatible with Ubuntu 22.04+, Debian, Mint, and Fedora, with local Speech Dispatcher integration.',
    'platforms.btn_linux': 'Download Linux (.tar.gz)',
    'faq.eyebrow': 'Frequently Asked Questions',
    'faq.title': 'Answers to common questions about VozViva',
    'faq.q1': 'Is VozViva really 100% free with no monthly fees?',
    'faq.a1': 'Yes. VozViva is completely free for families, caregivers, schools, clinics, and professionals. There are no paid subscriptions, locked vocabulary, or advertisements inside the app.',
    'faq.q2': 'Do I need an internet connection for the child to communicate?',
    'faq.a2': 'No. The installed app works 100% offline, including in airplane mode. All starter boards, Mulberry symbols, family photos, recorded audio, and device voice synthesis work without internet.',
    'faq.q3': 'Does VozViva replace speech therapy or clinical follow-up?',
    'faq.a3': 'No. VozViva is an assistive technology tool for Augmentative and Alternative Communication (AAC). It does not perform clinical diagnoses or replace individualized assessment and therapy from Speech-Language Pathologists, Occupational Therapists, Psychologists, Special Educators, or Physicians.',
    'faq.q4': 'How do Mulberry Symbols and ARASAAC credits work?',
    'faq.a4': 'The bundled offline core library uses Mulberry Symbols (CC BY-SA 2.0 UK / 4.0 license). Additionally, in Caregiver Mode, adults can search optional pictograms from the public ARASAAC catalog (Sergio Palao / Government of Aragon — CC BY-NC-SA 4.0 license) to cache locally.',
    'footer.about_text': 'Developed by Regard Games (Picos, Piauí, Brazil) with a focus on accessibility, communicative inclusion, and absolute child privacy protection.',
    'footer.clinical_disclaimer': 'Important notice: VozViva is an Augmentative and Alternative Communication (AAC) support tool and does not replace individualized guidance from speech-language pathologists, occupational therapists, psychologists, educators, or physicians.',
    'footer.col_legal': 'Legal & Ethical Documentation',
    'footer.privacy_link': 'Privacy Policy (LGPD/COPPA/GDPR)',
    'footer.terms_link': 'Terms of Use & License (EULA)',
    'footer.disclaimer_link': 'Clinical Disclaimer',
    'footer.licenses_link': 'Symbol Credits & Licenses (Mulberry & ARASAAC)',
    'footer.col_links': 'Official Links',
    'footer.repo_link': 'Portal & Releases on GitHub',
    'footer.support_link': 'Support & Accessibility Channel',
    'footer.copyright': '© 2026 Regard Games — Picos, Piauí, Brazil. All rights reserved.'
  };
})();

(function () {
  'use strict';
  var I18N = window.__VOZVIVA_I18N_BASE__ || {};

  I18N.es = {
    'meta.title': 'VozViva — Comunicación Aumentativa y Alternativa (CAA) Gratis y 100% Sin Internet | Regard Games',
    'meta.description': 'Aplicación gratuita y 100% sin conexión de Comunicación Aumentativa y Alternativa (CAA) con síntesis de voz, tableros personalizables y privacidad total para niños, familias y terapeutas. Disponible para Android, iOS, Windows y Linux.',
    'meta.og_title': 'VozViva — Da voz a cada momento, sin depender de internet',
    'meta.og_description': 'Plataforma de Comunicación Aumentativa y Alternativa (CAA) 100% sin internet, sin anuncios y sin recopilación de datos. En Portugués, Inglés y Español.',
    'nav.skip_to_content': 'Saltar al contenido principal',
    'nav.brand_tag': 'CAA • 100% Sin Internet',
    'nav.aria_main': 'Navegación Principal',
    'nav.simulator': 'Simulador CAA',
    'nav.features': 'Funciones',
    'nav.audiences': 'Para Quién Es',
    'nav.modes': 'Modos de Uso',
    'nav.privacy': 'Privacidad',
    'nav.faq': 'Preguntas',
    'nav.lang_group_label': 'Seleccionar idioma',
    'nav.theme_group_label': 'Seleccionar tema visual',
    'nav.theme_light_title': 'Tema Claro Calmo',
    'nav.theme_dark_title': 'Tema Oscuro Confortable',
    'nav.theme_hc_title': 'Alto Contraste WCAG AAA',
    'nav.download': 'Descargar Gratis',
    'nav.menu_toggle_label': 'Abrir o cerrar menú de navegación',
    'nav.menu_btn': 'Menú',
    'hero.badge': '100% Sin Internet • Gratis • Cero Datos Recopilados',
    'hero.title': 'Toda persona tiene derecho a una voz que funcione en cualquier lugar.',
    'hero.subtitle': 'VozViva es una plataforma gratuita de Comunicación Aumentativa y Alternativa (CAA) creada para niños, familias, fonoaudiólogos, logopedas, terapeutas ocupacionales y educadores. Funciona sin internet, respeta el ritmo de cada persona y protege íntegramente la privacidad infantil.',
    'hero.cta_primary': 'Descargar Gratis Ahora',
    'hero.cta_secondary': 'Probar Tablero Interactivo',
    'hero.pills_aria': 'Plataformas compatibles',
    'hero.pill_android': 'Android (.apk / Play)',
    'hero.pill_ios': 'iPhone y iPad (iOS)',
    'hero.pill_windows': 'Windows 10/11 (.zip)',
    'hero.pill_linux': 'Ubuntu/Linux (.tar.gz)',
    'hero.trust_1': '🔒 Cero Cuentas ni Rastreadores',
    'hero.trust_2': '🗣️ PT-BR • EN • ES Nativos',
    'hero.trust_3': '🎨 Clave de Fitzgerald + WCAG AAA',
    'sim.live_badge': '▶ Simulador CAA en Vivo',
    'sim.title': 'Prueba a formar una frase',
    'sim.voice_ready': 'Voz Sintetizada (TTS)',
    'sim.placeholder': 'Toca las tarjetas de abajo para armar tu frase...',
    'sim.speak_aria': 'Hablar la frase completa en voz alta',
    'sim.btn_speak': 'Hablar Frase',
    'sim.backspace_aria': 'Borrar la última tarjeta de la frase',
    'sim.btn_backspace': 'Borrar',
    'sim.clear_aria': 'Limpiar toda la frase',
    'sim.btn_clear': 'Limpiar',
    'sim.status_idle': 'Toca cualquier tarjeta para añadirla y escucharla al instante.',
    'sim.status_speaking': '🔊 Hablando: ',
    'sim.status_added': '✓ Añadido a la frase: ',
    'sim.status_cleared': 'Tira de frase limpia. Toca las tarjetas para empezar.',
    'sim.status_empty': 'Toca una o más tarjetas de abajo para armar una frase antes de hablar.',
    'sim.tabs_aria': 'Categorías del Tablero CAA',
    'sim.cat_all': '⊞ Esencial (Todas)',
    'sim.cat_people': '● Personas',
    'sim.cat_verbs': '▶ Verbos',
    'sim.cat_nouns': '■ Necesidades',
    'sim.cat_descriptors': '◆ Emociones',
    'sim.cat_social': '★ Sociales',
    'sim.cat_urgent': '▲ Urgencia',
    'sim.grid_aria': 'Tarjetas de comunicación',
    'sim.toggle_tap_speak': '🔊 Hablar al tocar: Activo',
    'sim.toggle_tap_speak_off': '🔇 Hablar al tocar: Inactivo',
    'sim.toggle_uppercase': '🔠 MAYÚSCULAS: Activas',
    'sim.toggle_uppercase_off': '🔡 Minúsculas: Activas',
    'sim.toggle_speed': '🐢 Velocidad: ',
    'why.eyebrow': 'Diseño Asistivo y Base Clínica',
    'why.title': '¿Por qué VozViva transforma la comunicación diaria?',
    'why.subtitle': 'Diseñado con rigor de accesibilidad cognitiva y motora para funcionar en casa, en la escuela, en la consulta o en el transporte — sin sorpresas y sin depender de señal.',
    'why.card1_title': '100% Sin Conexión de Principio a Fin',
    'why.card1_desc': 'La voz de una persona nunca puede apagarse porque falló el Wi-Fi. Tableros, pictogramas, fotos familiares y síntesis de voz funcionan completamente en modo avión.',
    'why.card2_title': 'Clave de Fitzgerald con Doble Codificación',
    'why.card2_desc': 'Cada categoría gramatical combina color semántico con un símbolo geométrico único (● ▶ ■ ◆ ★ ▲), garantizando reconocimiento incluso en personas con daltonismo.',
    'why.card3_title': 'Fotos Reales y Voz de la Propia Familia',
    'why.card3_desc': 'Además de la biblioteca de pictogramas incluida, puedes fotografiar el juguete favorito, la escuela o a los familiares y grabar voces cercanas directamente en el dispositivo.',
    'why.card4_title': 'Accesibilidad Motora y Sensorial',
    'why.card4_desc': 'Cuadrículas ajustables (de 2 a 24 tarjetas por pantalla), filtro contra toques repetidos involuntarios, tiempo de pulsación configurable y tema de Alto Contraste WCAG AAA.',
    'why.card5_title': 'Trilingüe Nativo (PT-BR, EN, ES)',
    'why.card5_desc': '7 tableros iniciales cuidadosamente adaptados al vocabulario esencial del Portugués Brasileño, Inglés y Español neutro panhispánico.',
    'why.card6_title': 'Copia de Seguridad Local Cifrada',
    'why.card6_desc': 'Exporta y transfiere tableros personalizados entre Android, iOS, Windows y Linux mediante archivos protegidos por contraseña con cifrado fuerte AES-256-GCM.',
    'fitz.people_title': '● Personas y Pronombres',
    'fitz.people_examples': 'Yo, Tú, Mamá, Papá, Profesora',
    'fitz.verbs_title': '▶ Verbos y Acciones',
    'fitz.verbs_examples': 'Quiero, Ir, Comer, Beber, Jugar, Parar',
    'fitz.nouns_title': '■ Sustantivos y Objetos',
    'fitz.nouns_examples': 'Agua, Comida, Baño, Casa, Juguete',
    'fitz.desc_title': '◆ Emociones y Estados',
    'fitz.desc_examples': 'Feliz, Triste, Cansado, Más, Rico',
    'fitz.social_title': '★ Sociales y Rápidas',
    'fitz.social_examples': 'Sí, No, Gracias, Por favor, Hola',
    'fitz.urgent_title': '▲ Urgencia y Apoyo',
    'fitz.urgent_examples': 'Ayuda, Me Duele, Ruido Fuerte, Pausa',
    'audiences.eyebrow': 'Construido en Conjunto',
    'audiences.title': 'Hecho para quien se comunica y para quien apoya cada día',
    'audiences.subtitle': 'Sencillo en los primeros 3 minutos para la familia en casa y completo para la práctica clínica y educativa.',
    'audiences.family_title': 'Para Familias, Madres, Padres y Cuidadores',
    'audiences.family_desc': 'Empieza a usarlo de inmediato sin registros burocráticos. Elige el idioma, ajusta el tamaño de las tarjetas y da autonomía a tu hijo para expresar deseos, emociones y necesidades.',
    'audiences.family_b1': 'Listo para usar en menos de 3 minutos con 7 tableros cotidianos (Comidas, Higiene, Familia, Emociones, Juegos y Rutina).',
    'audiences.family_b2': 'Personaliza tarjetas con fotos reales de casa y graba la voz de familiares para hacer la comunicación aún más cercana.',
    'audiences.family_b3': '100% gratuito para siempre: sin suscripciones costosas, sin anuncios que distraigan al niño y sin compras accidentales.',
    'audiences.pro_title': 'Para Fonoaudiólogos, Logopedas, Terapeutas Ocupacionales y Educadores',
    'audiences.pro_desc': 'Basado en las mejores prácticas de Comunicación Aumentativa y Alternativa (CAA), priorizando vocabulario esencial (Core Words), consistencia motora y modelado por el compañero de comunicación.',
    'audiences.pro_b1': 'Consistencia espacial (planificación motora): oculta o muestra tarjetas progresivamente manteniendo fija la posición de las palabras ya aprendidas.',
    'audiences.pro_b2': 'Múltiples perfiles locales independientes en la misma tableta o computadora, ideal para consultas clínicas y aulas de apoyo.',
    'audiences.pro_b3': 'Compatible con símbolos Mulberry (incluidos sin conexión) y búsqueda opcional en el catálogo público ARASAAC con atribución automática.',
    'modes.eyebrow': 'Arquitectura de Dos Modos',
    'modes.title': 'Separación Segura: Modo Niño y Modo Responsable',
    'modes.subtitle': 'El entorno de comunicación es calmo, predecible y libre de distracciones. Las herramientas de edición están protegidas por verificación de adulto y PIN.',
    'modes.tab_child': '🧒 Modo Niño (Comunicador)',
    'modes.tab_caregiver': '🔐 Modo Responsable / Terapeuta',
    'modes.child_title': 'Enfoque 100% en la Comunicación Sin Distracciones',
    'modes.child_desc': 'En el Modo Niño, toda la pantalla está dedicada a los tableros de comunicación y a la tira de frases. No hay menús administrativos expuestos, enlaces a internet ni riesgo de borrar tarjetas por error.',
    'modes.child_b1': 'Botones amplios de alto contraste con respuesta de voz inmediata al tocar.',
    'modes.child_b2': 'Cero conexiones de red: ninguna ventana externa ni notificación interrumpe la conversación.',
    'modes.child_b3': 'Salida protegida por pulsación larga de 3 segundos + desafío para adultos y código PIN.',
    'modes.child_box_title': '🛡️ Protección Activa en el Modo Niño',
    'modes.child_box_desc': 'Compatible con Acceso Guiado (iPad/iPhone), Fijación de Pantalla (Android) y Modo Quiosco (Windows/Linux) para evitar salidas accidentales durante el uso.',
    'modes.caregiver_title': 'Personalización Completa para el Hogar y la Clínica',
    'modes.caregiver_desc': 'Al desbloquear el Modo Responsable con tu PIN local, accedes al editor visual de tableros, ajustes finos de voz y accesibilidad motora, además de exportación segura de copias.',
    'modes.caregiver_b1': 'Crea o edita tarjetas con símbolos Mulberry, búsqueda opcional en ARASAAC, fotos de cámara (con eliminación automática de GPS/EXIF) y grabación de voz.',
    'modes.caregiver_b2': 'Ajusta la densidad de cuadrícula (2x1 hasta 6x4), velocidad y tono de voz TTS, mayúsculas y tiempo de pulsación.',
    'modes.caregiver_b3': 'Exporta y restaura paquetes cifrados (.assistivebackup) para llevar los tableros de la clínica al teléfono o tableta familiar.',
    'modes.caregiver_box_title': '⚙️ Control Local Absoluto',
    'modes.caregiver_desc_2': 'Los permisos de cámara y micrófono se solicitan únicamente en el momento en que el adulto pulsa para crear un medio personalizado.',
    'priv.eyebrow': 'Privacidad Infantil en Primer Lugar',
    'priv.title': 'Privacidad Absoluta por Arquitectura (LGPD, COPPA y GDPR-K)',
    'priv.subtitle': 'La comunicación de un niño es íntima e inviolable. Por eso VozViva fue construido sin servidores de recolección: lo que ocurre en tu dispositivo permanece exclusivamente en tu dispositivo.',
    'priv.c1_title': 'Cero Recopilación de Datos',
    'priv.c1_desc': 'No pedimos nombre, correo, documento, teléfono ni ubicación. No recopilamos historial de frases habladas ni fotos de los niños.',
    'priv.c2_title': 'Fotos Limpias de GPS/EXIF',
    'priv.c2_desc': 'Cuando añades una foto familiar a una tarjeta, VozViva elimina automáticamente los metadatos ocultos de ubicación antes de guardarla en el dispositivo.',
    'priv.c3_title': 'Sin Anuncios ni Rastreadores',
    'priv.c3_desc': 'Cero SDK publicitarios, cero píxeles de rastreo y cero telemetría oculta. Cumplimiento estricto del Art. 14 de la LGPD (Brasil), COPPA y GDPR-K.',
    'priv.c4_title': 'Transparencia Jurídica y Clínica',
    'priv.c4_desc': 'Documentación completa en Portugués, Inglés y Español con Política de Privacidad, Términos de Uso, Aviso Clínico y Licencias Abiertas.',
    'platforms.eyebrow': 'Multiplataforma y Gratuito',
    'platforms.title': 'Disponible para teléfonos, tabletas y computadoras',
    'platforms.subtitle': 'Descárgalo gratis para tu sistema operativo y verifica la integridad con el hash SHA-256 oficial.',
    'metrics.title': 'Marcador Público de Descargas (GitHub Releases)',
    'metrics.status_live': 'Transparencia pública sin cookies (api.github.com)',
    'metrics.total': '∑ Total Acumulado',
    'platforms.recommended_badge': '★ Recomendado para tu dispositivo',
    'platforms.android_title': 'Android (Teléfonos y Tabletas)',
    'platforms.android_desc': 'Compatible con Android 8.0 o superior. Ideal para tabletas de uso diario en casa, escuela y clínica. Paquete firmado digitalmente v1.0.1+2 (60,9 MB).',
    'platforms.btn_apk': 'Descargar .APK Directo',
    'platforms.btn_copy_sha': 'Copiar SHA-256',
    'platforms.btn_copied_sha': '✓ ¡Hash Copiado!',
    'platforms.ios_title': 'iPhone y iPad (iOS / iPadOS)',
    'platforms.ios_desc': 'Compatible con iOS y iPadOS 14.0 o superior. Integración perfecta con Acceso Guiado de Apple para un uso enfocado en la comunicación.',
    'platforms.ios_store_note': 'Distribución Oficial Verificada:',
    'platforms.ios_store_sub': 'Paquete firmado vía Apple App Store / TestFlight Oficial (Sin Recopilación de Datos).',
    'platforms.btn_ios': 'Ver en App Store / Releases',
    'platforms.windows_title': 'Windows 10 y 11 (64 bits)',
    'platforms.windows_desc': 'Versión portátil (.zip — 24,8 MB) e instalador para portátiles, computadoras escolares y pantallas táctiles, con navegación completa por teclado.',
    'platforms.btn_windows': 'Descargar Windows (.zip)',
    'platforms.linux_title': 'Ubuntu / Linux (64 bits)',
    'platforms.linux_desc': 'Paquete portátil v1.0.1+2 (.tar.gz — 10,3 MB) compatible con Ubuntu 22.04+, Debian, Mint y Fedora, con integración local a Speech Dispatcher.',
    'platforms.btn_linux': 'Descargar Linux (.tar.gz)',
    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.title': 'Resuelve tus dudas sobre VozViva',
    'faq.q1': '¿VozViva es realmente 100% gratuito y sin mensualidades?',
    'faq.a1': 'Sí. VozViva es totalmente gratuito para familias, cuidadores, escuelas, clínicas y profesionales. No existen suscripciones de pago, bloqueos de vocabulario ni anuncios dentro de la aplicación.',
    'faq.q2': '¿Necesito conexión a internet para que el niño se comunique?',
    'faq.a2': 'No. La aplicación instalada funciona 100% sin internet, incluso en modo avión. Todos los tableros iniciales, símbolos Mulberry, fotos familiares, audios grabados y la síntesis de voz del dispositivo funcionan sin conexión.',
    'faq.q3': '¿VozViva sustituye el acompañamiento con fonoaudiólogo, logopeda o terapeuta?',
    'faq.a3': 'No. VozViva es una herramienta tecnológica de apoyo a la Comunicación Aumentativa y Alternativa (CAA). No realiza diagnósticos clínicos ni sustituye la evaluación y el acompañamiento individualizado de profesionales de Fonoaudiología / Logopedia, Terapia Ocupacional, Psicología, Educación Especial o Medicina.',
    'faq.q4': '¿Cómo funcionan los créditos de los símbolos Mulberry y ARASAAC?',
    'faq.a4': 'La biblioteca base sin conexión utiliza Mulberry Symbols (licencia CC BY-SA 2.0 UK / 4.0). Además, en el Modo Responsable, el adulto puede buscar pictogramas opcionales en el catálogo público ARASAAC (Sergio Palao / Gobierno de Aragón — licencia CC BY-NC-SA 4.0) para guardarlos localmente.',
    'footer.about_text': 'Desarrollado por Regard Games (Picos, Piauí, Brasil) con enfoque en accesibilidad, inclusión comunicativa y protección absoluta de la privacidad infantil.',
    'footer.clinical_disclaimer': 'Aviso importante: VozViva es una herramienta de apoyo a la Comunicación Aumentativa y Alternativa (CAA) y no sustituye el acompañamiento individualizado de profesionales de fonoaudiología, logopedia, terapia ocupacional, psicología, pedagogía o medicina.',
    'footer.col_legal': 'Documentación Legal y Ética',
    'footer.privacy_link': 'Política de Privacidad (LGPD/COPPA/GDPR)',
    'footer.terms_link': 'Términos de Uso y Licencia (EULA)',
    'footer.disclaimer_link': 'Exención de Responsabilidad Clínica',
    'footer.licenses_link': 'Créditos y Licencias (Mulberry y ARASAAC)',
    'footer.col_links': 'Enlaces Oficiales',
    'footer.repo_link': 'Portal y Releases en GitHub',
    'footer.support_link': 'Canal de Soporte y Accesibilidad',
    'footer.copyright': '© 2026 Regard Games — Picos, Piauí, Brasil. Todos los derechos reservados.'
  };

  /* ==========================================================================
     Catálogo Oficial de Cartões CAA (Chave de Fitzgerald + Dupla Codificação)
     ========================================================================== */
  var FITZ_SHAPES = {
    people: '●',
    verbs: '▶',
    nouns: '■',
    descriptors: '◆',
    social: '★',
    urgent: '▲'
  };

  var CAA_CARDS = [
    {
      id: 'eu', cat: 'people',
      label: { pt: 'Eu', en: 'I / Me', es: 'Yo' },
      speech: { pt: 'Eu', en: 'I', es: 'Yo' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="20" r="11" fill="#F59E0B" stroke="#1E293B" stroke-width="3"/><path d="M14 54c0-10 8-18 18-18s18 8 18 18" fill="#FDE68A" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/></svg>'
    },
    {
      id: 'voce', cat: 'people',
      label: { pt: 'Você', en: 'You', es: 'Tú' },
      speech: { pt: 'Você', en: 'You', es: 'Tú' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="26" cy="22" r="9" fill="#FBBF24" stroke="#1E293B" stroke-width="3"/><path d="M12 52c0-8 6-14 14-14s14 6 14 14" fill="#FEF3C7" stroke="#1E293B" stroke-width="3"/><path d="M42 28h14m-5-5l5 5-5 5" fill="none" stroke="#B45309" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'mamae', cat: 'people',
      label: { pt: 'Mamãe', en: 'Mom', es: 'Mamá' },
      speech: { pt: 'Mamãe', en: 'Mom', es: 'Mamá' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="22" r="10" fill="#F59E0B" stroke="#1E293B" stroke-width="3"/><path d="M32 42l-7-6a4 4 0 0 1 6-5l1 1 1-1a4 4 0 0 1 6 5z" fill="#EC4899"/></svg>'
    },
    {
      id: 'quero', cat: 'verbs',
      label: { pt: 'Quero', en: 'Want', es: 'Quiero' },
      speech: { pt: 'quero', en: 'want', es: 'quiero' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><rect x="14" y="24" width="36" height="24" rx="6" fill="#A7F3D0" stroke="#065F46" stroke-width="3"/><path d="M32 12v18m-7-6l7 7 7-7" fill="none" stroke="#047857" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'comer', cat: 'verbs',
      label: { pt: 'Comer', en: 'Eat', es: 'Comer' },
      speech: { pt: 'comer', en: 'to eat', es: 'comer' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="34" cy="34" r="15" fill="#D1FAE5" stroke="#065F46" stroke-width="3"/><path d="M14 16v16m4-16v16m-2 0v18" stroke="#047857" stroke-width="3" stroke-linecap="round"/></svg>'
    },
    {
      id: 'beber', cat: 'verbs',
      label: { pt: 'Beber', en: 'Drink', es: 'Beber' },
      speech: { pt: 'beber', en: 'to drink', es: 'beber' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><path d="M20 16h24l-3 34H23z" fill="#6EE7B7" stroke="#065F46" stroke-width="3" stroke-linejoin="round"/><path d="M36 10l6-4" stroke="#047857" stroke-width="3" stroke-linecap="round"/></svg>'
    },
    {
      id: 'brincar', cat: 'verbs',
      label: { pt: 'Brincar', en: 'Play', es: 'Jugar' },
      speech: { pt: 'brincar', en: 'to play', es: 'jugar' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="17" fill="#34D399" stroke="#065F46" stroke-width="3"/><path d="M20 26c8 4 16 4 24 0M20 38c8-4 16-4 24 0" fill="none" stroke="#064E3B" stroke-width="2.5"/></svg>'
    },
    {
      id: 'ir', cat: 'verbs',
      label: { pt: 'Ir', en: 'Go', es: 'Ir' },
      speech: { pt: 'ir', en: 'to go', es: 'ir' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#A7F3D0" stroke="#065F46" stroke-width="3"/><path d="M22 32h18m-6-7l7 7-7 7" fill="none" stroke="#065F46" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'agua', cat: 'nouns',
      label: { pt: 'Água', en: 'Water', es: 'Agua' },
      speech: { pt: 'água', en: 'water', es: 'agua' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><path d="M32 12c10 14 16 22 16 30a16 16 0 1 1-32 0c0-8 6-16 16-30z" fill="#38BDF8" stroke="#0369A1" stroke-width="3"/></svg>'
    },
    {
      id: 'comida', cat: 'nouns',
      label: { pt: 'Comida', en: 'Food', es: 'Comida' },
      speech: { pt: 'comida', en: 'food', es: 'comida' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="35" r="15" fill="#FB923C" stroke="#9A3412" stroke-width="3"/><path d="M32 18c2-5 6-6 9-4" fill="none" stroke="#15803D" stroke-width="3.5" stroke-linecap="round"/></svg>'
    },
    {
      id: 'banheiro', cat: 'nouns',
      label: { pt: 'Banheiro', en: 'Bathroom', es: 'Baño' },
      speech: { pt: 'ao banheiro', en: 'to the bathroom', es: 'al baño' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><rect x="18" y="14" width="28" height="36" rx="5" fill="#FDBA74" stroke="#9A3412" stroke-width="3"/><circle cx="39" cy="32" r="2.5" fill="#9A3412"/></svg>'
    },
    {
      id: 'brinquedo', cat: 'nouns',
      label: { pt: 'Brinquedo', en: 'Toy', es: 'Juguete' },
      speech: { pt: 'com o brinquedo', en: 'with the toy', es: 'con el juguete' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><rect x="18" y="22" width="28" height="24" rx="4" fill="#F97316" stroke="#7C2D12" stroke-width="3"/><rect x="24" y="15" width="7" height="7" fill="#FDBA74" stroke="#7C2D12" stroke-width="2.5"/><rect x="33" y="15" width="7" height="7" fill="#FDBA74" stroke="#7C2D12" stroke-width="2.5"/></svg>'
    },
    {
      id: 'feliz', cat: 'descriptors',
      label: { pt: 'Feliz', en: 'Happy', es: 'Feliz' },
      speech: { pt: 'estou feliz', en: 'am happy', es: 'estoy feliz' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#93C5FD" stroke="#1E3A8A" stroke-width="3"/><circle cx="25" cy="27" r="2.5" fill="#1E3A8A"/><circle cx="39" cy="27" r="2.5" fill="#1E3A8A"/><path d="M23 36c3 5 15 5 18 0" fill="none" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/></svg>'
    },
    {
      id: 'mais', cat: 'descriptors',
      label: { pt: 'Mais', en: 'More', es: 'Más' },
      speech: { pt: 'mais', en: 'more', es: 'más' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="3"/><path d="M32 21v22M21 32h22" stroke="#1E3A8A" stroke-width="4" stroke-linecap="round"/></svg>'
    },
    {
      id: 'cansado', cat: 'descriptors',
      label: { pt: 'Cansado', en: 'Tired', es: 'Cansado' },
      speech: { pt: 'estou cansado', en: 'am tired', es: 'estoy cansado' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="3"/><path d="M22 28h7M35 28h7M25 40h14" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/></svg>'
    },
    {
      id: 'sim', cat: 'social',
      label: { pt: 'Sim', en: 'Yes', es: 'Sí' },
      speech: { pt: 'Sim', en: 'Yes', es: 'Sí' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#DDD6FE" stroke="#5B21B6" stroke-width="3"/><path d="M22 33l7 7 13-14" fill="none" stroke="#5B21B6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'nao', cat: 'social',
      label: { pt: 'Não', en: 'No', es: 'No' },
      speech: { pt: 'Não', en: 'No', es: 'No' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#EDE9FE" stroke="#5B21B6" stroke-width="3"/><path d="M24 24l16 16M40 24L24 40" fill="none" stroke="#5B21B6" stroke-width="4" stroke-linecap="round"/></svg>'
    },
    {
      id: 'obrigado', cat: 'social',
      label: { pt: 'Obrigado', en: 'Thank you', es: 'Gracias' },
      speech: { pt: 'obrigado', en: 'thank you', es: 'gracias' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><path d="M32 48l-14-13a9 9 0 0 1 13-12l1 1 1-1a9 9 0 0 1 13 12z" fill="#C4B5FD" stroke="#5B21B6" stroke-width="3"/></svg>'
    },
    {
      id: 'ajuda', cat: 'urgent',
      label: { pt: 'Preciso de Ajuda', en: 'Need Help', es: 'Necesito Ayuda' },
      speech: { pt: 'preciso de ajuda', en: 'I need help', es: 'necesito ayuda' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><polygon points="32,12 52,48 12,48" fill="#FECACA" stroke="#991B1B" stroke-width="3" stroke-linejoin="round"/><path d="M32 25v11M32 42h.01" stroke="#991B1B" stroke-width="4" stroke-linecap="round"/></svg>'
    },
    {
      id: 'pausa', cat: 'urgent',
      label: { pt: 'Pausa / Calma', en: 'Break / Calm', es: 'Pausa / Calma' },
      speech: { pt: 'preciso de uma pausa', en: 'I need a break', es: 'necesito una pausa' },
      svg: '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="#FEE2E2" stroke="#991B1B" stroke-width="3"/><rect x="24" y="23" width="5" height="18" rx="1.5" fill="#991B1B"/><rect x="35" y="23" width="5" height="18" rx="1.5" fill="#991B1B"/></svg>'
    }
  ];

  var state = {
    lang: 'pt',
    theme: 'light',
    activeCategory: 'all',
    sentence: [],
    tapSpeak: true,
    uppercase: true,
    speechRate: 1.0
  };

  function normalizeLang(raw) {
    if (!raw) return 'pt';
    var lower = String(raw).toLowerCase();
    if (lower.indexOf('en') === 0) return 'en';
    if (lower.indexOf('es') === 0) return 'es';
    return 'pt';
  }

  function t(key) {
    var dict = I18N[state.lang] || I18N.pt;
    return dict[key] || I18N.pt[key] || key;
  }

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = params.get('lang');
      if (q) return normalizeLang(q);
      var saved = localStorage.getItem('vozviva-lang');
      if (saved) return normalizeLang(saved);
    } catch (e) {}
    return normalizeLang(navigator.language || 'pt-BR');
  }

  function speakText(text) {
    var statusEl = document.getElementById('speech-status-text');
    if (statusEl) {
      statusEl.textContent = '🔊 "' + text + '"';
    }
    try {
      if ('speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined') {
        window.speechSynthesis.cancel();
        var utter = new SpeechSynthesisUtterance(text);
        utter.lang = state.lang === 'pt' ? 'pt-BR' : (state.lang === 'es' ? 'es-ES' : 'en-US');
        utter.rate = state.speechRate;
        window.speechSynthesis.speak(utter);
      }
    } catch (e) {}
  }

  function renderSentenceStrip() {
    var container = document.getElementById('sentence-strip-items');
    if (!container) return;
    container.innerHTML = '';

    if (state.sentence.length === 0) {
      var span = document.createElement('span');
      span.className = 'sentence-placeholder';
      span.id = 'sentence-placeholder';
      span.textContent = t('sim.placeholder');
      container.appendChild(span);
      return;
    }

    state.sentence.forEach(function (item, index) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'sentence-chip fitz-' + item.cat;
      var lbl = item.label[state.lang] || item.label.pt;
      if (state.uppercase) lbl = lbl.toUpperCase();
      chip.innerHTML = '<span class="chip-shape" aria-hidden="true">' + (FITZ_SHAPES[item.cat] || '●') + '</span> <span>' + lbl + '</span>';
      chip.setAttribute('aria-label', lbl);
      chip.addEventListener('click', function () {
        state.sentence.splice(index, 1);
        renderSentenceStrip();
      });
      container.appendChild(chip);
    });
  }

  function renderCaaGrid() {
    var grid = document.getElementById('caa-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var filtered = CAA_CARDS.filter(function (c) {
      return state.activeCategory === 'all' || c.cat === state.activeCategory;
    });

    filtered.forEach(function (card) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'caa-card fitz-' + card.cat;
      btn.setAttribute('data-card-id', card.id);
      btn.setAttribute('data-cat', card.cat);

      var rawLabel = card.label[state.lang] || card.label.pt;
      var displayLabel = state.uppercase ? rawLabel.toUpperCase() : rawLabel;
      var shape = FITZ_SHAPES[card.cat] || '●';

      btn.setAttribute('aria-label', rawLabel);
      btn.innerHTML =
        '<div class="caa-card-header">' +
          '<span class="caa-card-shape" aria-hidden="true">' + shape + '</span>' +
        '</div>' +
        '<div class="caa-card-icon">' + card.svg + '</div>' +
        '<div class="caa-card-label">' + displayLabel + '</div>';

      btn.addEventListener('click', function () {
        if (state.sentence.length < 12) {
          state.sentence.push(card);
          renderSentenceStrip();
        }
        if (state.tapSpeak) {
          var word = card.speech[state.lang] || card.label[state.lang] || card.label.pt;
          speakText(word);
        }
      });

      grid.appendChild(btn);
    });
  }

  function updateToolbarButtons() {
    var tapBtn = document.getElementById('sim-toggle-tap-speak');
    if (tapBtn) {
      tapBtn.setAttribute('aria-pressed', state.tapSpeak ? 'true' : 'false');
      tapBtn.textContent = state.tapSpeak ? t('sim.toggle_tap_speak') : t('sim.toggle_tap_speak_off');
    }
    var upBtn = document.getElementById('sim-toggle-uppercase');
    if (upBtn) {
      upBtn.setAttribute('aria-pressed', state.uppercase ? 'true' : 'false');
      upBtn.textContent = state.uppercase ? t('sim.toggle_uppercase') : t('sim.toggle_uppercase_off');
    }
    var speedBtn = document.getElementById('sim-toggle-speed');
    if (speedBtn) {
      speedBtn.textContent = t('sim.toggle_speed') + state.speechRate.toFixed(2).replace('.00', '.0') + 'x';
    }
  }

  function applyLang(lang, persist) {
    state.lang = normalizeLang(lang);
    document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : state.lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val && val !== key) {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var raw = el.getAttribute('data-i18n-attr') || '';
      var pairs = raw.split(/[;,]/);
      pairs.forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          var attr = parts[0].trim();
          var key = parts[1].trim();
          var val = t(key);
          if (val && val !== key) {
            el.setAttribute(attr, val);
          }
        }
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isMatch = btn.getAttribute('data-lang') === state.lang;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    updateToolbarButtons();
    renderCaaGrid();
    renderSentenceStrip();

    if (persist) {
      try {
        localStorage.setItem('vozviva-lang', state.lang);
      } catch (e) {}
    }
  }

  function applyTheme(theme, persist) {
    var valid = ['light', 'dark', 'high-contrast'];
    state.theme = valid.indexOf(theme) !== -1 ? theme : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);

    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      var isMatch = btn.getAttribute('data-theme-val') === state.theme;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    if (persist) {
      try {
        localStorage.setItem('vozviva-theme', state.theme);
      } catch (e) {}
    }
  }

  function detectUserOS() {
    var ua = (navigator.userAgent || '').toLowerCase();
    var detected = 'android';
    if (ua.indexOf('android') !== -1) detected = 'android';
    else if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1 || ua.indexOf('ipod') !== -1) detected = 'ios';
    else if (ua.indexOf('win') !== -1) detected = 'windows';
    else if (ua.indexOf('linux') !== -1) detected = 'linux';

    document.querySelectorAll('[data-os-pill]').forEach(function (el) {
      el.classList.toggle('is-detected-os', el.getAttribute('data-os-pill') === detected);
    });
    document.querySelectorAll('[data-os-card]').forEach(function (el) {
      el.classList.toggle('is-detected-os', el.getAttribute('data-os-card') === detected);
    });
  }

  function initReleaseMetrics() {
    var CACHE_KEY = 'vozviva-release-metrics-v1';
    var totalEl = document.getElementById('metric-total-val');
    var androidEl = document.getElementById('metric-android-val');
    var winEl = document.getElementById('metric-windows-val');
    var linuxEl = document.getElementById('metric-linux-val');

    function renderCounts(counts) {
      var fmt = new Intl.NumberFormat(state.lang === 'pt' ? 'pt-BR' : state.lang);
      if (totalEl) totalEl.textContent = fmt.format(counts.total || 0);
      if (androidEl) androidEl.textContent = fmt.format(counts.android || 0);
      if (winEl) winEl.textContent = fmt.format(counts.windows || 0);
      if (linuxEl) linuxEl.textContent = fmt.format(counts.linux || 0);
    }

    try {
      var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (cached && Date.now() - cached.ts < 300000) {
        renderCounts(cached.counts);
      }
    } catch (e) {}

    try {
      fetch('https://api.github.com/repos/regardgames/vozviva/releases', {
        method: 'GET',
        credentials: 'omit',
        headers: { 'Accept': 'application/vnd.github+json' }
      })
        .then(function (r) { return r.ok ? r.json() : []; })
        .then(function (releases) {
          if (!Array.isArray(releases)) return;
          var counts = { total: 0, android: 0, windows: 0, linux: 0 };
          releases.forEach(function (rel) {
            (rel.assets || []).forEach(function (a) {
              var c = Number(a.download_count || 0);
              var name = String(a.name || '').toLowerCase();
              counts.total += c;
              if (name.indexOf('.apk') !== -1) counts.android += c;
              else if (name.indexOf('win') !== -1 || name.indexOf('.zip') !== -1) counts.windows += c;
              else if (name.indexOf('linux') !== -1 || name.indexOf('.tar.gz') !== -1) counts.linux += c;
            });
          });
          renderCounts(counts);
          try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), counts: counts }));
          } catch (e) {}
        })
        .catch(function () {});
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem('vozviva-theme') || 'light';
    } catch (e) {}
    applyTheme(savedTheme, false);
    applyLang(detectInitialLang(), false);
    detectUserOS();
    initReleaseMetrics();

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

    var menuBtn = document.getElementById('mobile-menu-btn');
    var drawer = document.getElementById('mobile-drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', function () {
        var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        drawer.classList.toggle('is-open', !expanded);
      });
      drawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menuBtn.setAttribute('aria-expanded', 'false');
          drawer.classList.remove('is-open');
        });
      });
    }

    document.querySelectorAll('.cat-tab-btn').forEach(function (tab) {
      tab.addEventListener('click', function () {
        state.activeCategory = tab.getAttribute('data-cat-filter') || 'all';
        document.querySelectorAll('.cat-tab-btn').forEach(function (b) {
          var active = b === tab;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderCaaGrid();
      });
    });

    var btnSpeak = document.getElementById('sim-btn-speak');
    if (btnSpeak) {
      btnSpeak.addEventListener('click', function () {
        if (state.sentence.length === 0) {
          var statusEl = document.getElementById('speech-status-text');
          if (statusEl) statusEl.textContent = t('sim.status_empty');
          return;
        }
        var phrase = state.sentence.map(function (c) {
          return c.speech[state.lang] || c.label[state.lang] || c.label.pt;
        }).join(' ');
        speakText(phrase);
      });
    }

    var btnBack = document.getElementById('sim-btn-backspace');
    if (btnBack) {
      btnBack.addEventListener('click', function () {
        state.sentence.pop();
        renderSentenceStrip();
      });
    }

    var btnClear = document.getElementById('sim-btn-clear');
    if (btnClear) {
      btnClear.addEventListener('click', function () {
        state.sentence = [];
        renderSentenceStrip();
        var statusEl = document.getElementById('speech-status-text');
        if (statusEl) statusEl.textContent = t('sim.status_cleared');
      });
    }

    var tapSpeakBtn = document.getElementById('sim-toggle-tap-speak');
    if (tapSpeakBtn) {
      tapSpeakBtn.addEventListener('click', function () {
        state.tapSpeak = !state.tapSpeak;
        updateToolbarButtons();
      });
    }

    var upBtn = document.getElementById('sim-toggle-uppercase');
    if (upBtn) {
      upBtn.addEventListener('click', function () {
        state.uppercase = !state.uppercase;
        updateToolbarButtons();
        renderCaaGrid();
        renderSentenceStrip();
      });
    }

    var speedBtn = document.getElementById('sim-toggle-speed');
    if (speedBtn) {
      speedBtn.addEventListener('click', function () {
        var rates = [1.0, 0.85, 0.75];
        var nextIdx = (rates.indexOf(state.speechRate) + 1) % rates.length;
        state.speechRate = rates[nextIdx];
        updateToolbarButtons();
      });
    }

    document.querySelectorAll('.mode-tab-btn').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-mode-target');
        document.querySelectorAll('.mode-tab-btn').forEach(function (b) {
          b.setAttribute('aria-selected', b === tab ? 'true' : 'false');
        });
        var childPanel = document.getElementById('panel-mode-child');
        var caregiverPanel = document.getElementById('panel-mode-caregiver');
        if (childPanel && caregiverPanel) {
          childPanel.classList.toggle('is-active', target === 'child');
          caregiverPanel.classList.toggle('is-active', target === 'caregiver');
        }
      });
    });

    document.querySelectorAll('.copy-sha-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-sha-target');
        var shaEl = targetId ? document.getElementById(targetId) : null;
        var hashText = shaEl ? shaEl.textContent.trim() : '';
        if (hashText && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(hashText).catch(function () {});
        }
        btn.textContent = t('platforms.btn_copied_sha');
        setTimeout(function () {
          btn.textContent = t('platforms.btn_copy_sha');
        }, 2000);
      });
    });
  });
})();
