(function () {
    const languages = [
        { code: 'fr', label: 'Français', direction: 'ltr' },
        { code: 'en', label: 'English', direction: 'ltr' },
        { code: 'es', label: 'Español', direction: 'ltr' },
        { code: 'pt', label: 'Português', direction: 'ltr' },
        { code: 'ar', label: 'العربية', direction: 'rtl' },
        { code: 'zh-CN', label: '中文', direction: 'ltr' },
        { code: 'ru', label: 'Русский', direction: 'ltr' }
    ];
    const localeIndexes = { en: 0, es: 1, pt: 2, ar: 3, 'zh-CN': 4, ru: 5 };
    const translations = {
        'Choisir la langue': ['Choose language', 'Elegir idioma', 'Escolher idioma', 'اختر اللغة', '选择语言', 'Выбрать язык'],
        'Langue du site': ['Website language', 'Idioma del sitio', 'Idioma do site', 'لغة الموقع', '网站语言', 'Язык сайта'],
        'Accueil': ['Home', 'Inicio', 'Início', 'الرئيسية', '首页', 'Главная'],
        'À propos': ['About', 'Sobre mí', 'Sobre', 'نبذة عني', '关于我', 'Обо мне'],
        'Parcours': ['Education', 'Formación', 'Formação', 'المسار الدراسي', '学习经历', 'Образование'],
        'Compétences': ['Skills', 'Habilidades', 'Competências', 'المهارات', '技能', 'Навыки'],
        'Entreprise': ['Company', 'Empresa', 'Empresa', 'الشركة', '企业', 'Компания'],
        'Veille Technologique': ['Technology Watch', 'Actualidad tecnológica', 'Atualidades tecnológicas', 'متابعة التكنولوجيا', '技术动态', 'Технологический обзор'],
        'Épreuves': ['Exams', 'Pruebas', 'Exames', 'الاختبارات', '考试', 'Экзамены'],
        'Épreuve E4': ['E4 Exam', 'Prueba E4', 'Exame E4', 'اختبار E4', 'E4 考试', 'Экзамен E4'],
        'Épreuve E5': ['E5 Exam', 'Prueba E5', 'Exame E5', 'اختبار E5', 'E5 考试', 'Экзамен E5'],
        'Certifications': ['Certifications', 'Certificaciones', 'Certificações', 'الشهادات', '认证', 'Сертификаты'],
        'Contact': ['Contact', 'Contacto', 'Contato', 'اتصل بي', '联系', 'Контакты'],
        'Projet': ['Projects', 'Proyectos', 'Projetos', 'المشاريع', '项目', 'Проекты'],
        'Jude ONDOUNGA-LEKOU | Portfolio étudiant BTS SIO SISR': ['Jude ONDOUNGA-LEKOU | BTS SIO SISR Student Portfolio', 'Jude ONDOUNGA-LEKOU | Portafolio de estudiante BTS SIO SISR', 'Jude ONDOUNGA-LEKOU | Portfólio de estudante BTS SIO SISR', 'جود أوندونغا ليكو | ملف طالب BTS SIO SISR', 'Jude ONDOUNGA-LEKOU | BTS SIO SISR 学生作品集', 'Jude ONDOUNGA-LEKOU | Портфолио студента BTS SIO SISR'],
        "Solutions d'Infrastructure, Systèmes et Réseaux (SISR)": ['Infrastructure, Systems and Networks Solutions (SISR)', 'Soluciones de Infraestructura, Sistemas y Redes (SISR)', 'Soluções de Infraestrutura, Sistemas e Redes (SISR)', 'حلول البنية التحتية والأنظمة والشبكات (SISR)', '基础设施、系统与网络解决方案 (SISR)', 'Решения для инфраструктуры, систем и сетей (SISR)'],
        'Étudiant en 2ème année BTS SIO — Promotion 2026 - 2027': ['Second-year BTS SIO student — Class of 2026–2027', 'Estudiante de segundo año de BTS SIO — Promoción 2026–2027', 'Estudante do segundo ano do BTS SIO — Turma 2026–2027', 'طالب في السنة الثانية من BTS SIO — دفعة 2026–2027', 'BTS SIO 二年级学生 — 2026–2027 届', 'Студент второго курса BTS SIO — выпуск 2026–2027'],
        'Bienvenue': ['Welcome', 'Bienvenido', 'Bem-vindo', 'مرحبًا', '欢迎', 'Добро пожаловать'],
        'Serveur': ['Server', 'Servidor', 'Servidor', 'خادم', '服务器', 'Сервер'],
        'Cloud': ['Cloud', 'Nube', 'Nuvem', 'السحابة', '云', 'Облако'],
        'Sécurité': ['Security', 'Seguridad', 'Segurança', 'الأمن', '安全', 'Безопасность'],
        'Réseau': ['Network', 'Red', 'Rede', 'الشبكة', '网络', 'Сеть'],
        'Interconnexion Globale': ['Global Interconnection', 'Interconexión global', 'Interconexão global', 'الترابط العالمي', '全球互联', 'Глобальное взаимодействие'],
        'Bonjour, je m’appelle': ['Hello, my name is', 'Hola, me llamo', 'Olá, meu nome é', 'مرحبًا، اسمي', '你好，我叫', 'Здравствуйте, меня зовут'],
        '! Je suis passionné par l’informatique, les réseaux et la cybersécurité.': ['! I am passionate about IT, networks and cybersecurity.', '! Me apasionan la informática, las redes y la ciberseguridad.', '! Sou apaixonado por informática, redes e cibersegurança.', '! أنا شغوف بتقنية المعلومات والشبكات والأمن السيبراني.', '！我热爱信息技术、网络和网络安全。', '! Я увлечён информационными технологиями, сетями и кибербезопасностью.'],
        'Actuellement étudiant en deuxième année de BTS SIO au sein de l’institut F2I, spécialisé en SISR, avec un intérêt particulier pour la mise en place, la gestion et la sécurisation des infrastructures informatiques.': ['I am currently in my second year of the BTS SIO program at Institut F2I, specializing in SISR, with a particular interest in building, managing and securing IT infrastructure.', 'Actualmente curso el segundo año de BTS SIO en el instituto F2I, con especialización en SISR y un interés especial en implementar, gestionar y proteger infraestructuras informáticas.', 'Atualmente estou no segundo ano do BTS SIO no instituto F2I, com especialização em SISR e interesse especial na implementação, gestão e segurança de infraestruturas de TI.', 'أدرس حاليًا السنة الثانية من برنامج BTS SIO في معهد F2I، بتخصص SISR واهتمام خاص بإنشاء البنية التحتية لتقنية المعلومات وإدارتها وتأمينها.', '我目前在 F2I 学院就读 BTS SIO 二年级，主修 SISR，特别关注 IT 基础设施的建设、管理与安全。', 'Сейчас я учусь на втором курсе BTS SIO в институте F2I по специализации SISR и особенно интересуюсь созданием, управлением и защитой ИТ-инфраструктуры.'],
        'Mon objectif est de devenir administrateur système et réseau, capable d’assurer la performance, la fiabilité et la protection des systèmes d’information au quotidien.': ['My goal is to become a systems and network administrator, ensuring the day-to-day performance, reliability and security of information systems.', 'Mi objetivo es ser administrador de sistemas y redes, capaz de garantizar a diario el rendimiento, la fiabilidad y la protección de los sistemas de información.', 'Meu objetivo é tornar-me administrador de sistemas e redes, garantindo diariamente o desempenho, a confiabilidade e a proteção dos sistemas de informação.', 'هدفي أن أصبح مسؤول أنظمة وشبكات، أضمن الأداء والموثوقية وحماية أنظمة المعلومات يوميًا.', '我的目标是成为系统与网络管理员，负责保障信息系统的日常性能、可靠性与安全。', 'Моя цель — стать системным и сетевым администратором, обеспечивающим повседневную производительность, надёжность и защиту информационных систем.'],
        'Consulter CV': ['View résumé', 'Ver currículum', 'Ver currículo', 'عرض السيرة الذاتية', '查看简历', 'Посмотреть резюме'],
        'Lettre de Motivation': ['Cover Letter', 'Carta de motivación', 'Carta de apresentação', 'رسالة تحفيزية', '求职信', 'Сопроводительное письмо'],
        'Ma spécialisation': ['My specialization', 'Mi especialización', 'Minha especialização', 'تخصصي', '我的专业方向', 'Моя специализация'],
        'Je me dirige vers la spécialité': ['I am pursuing the specialization', 'Me dirijo a la especialidad', 'Estou seguindo a especialização', 'أتجه إلى تخصص', '我选择的专业方向是', 'Я выбираю специализацию'],
        '(Solutions d’Infrastructure, Systèmes et Réseaux). Ci-dessous, je compare rapidement cette option à SLAM.': ['(Infrastructure, Systems and Networks Solutions). Below, I briefly compare this option with SLAM.', '(Soluciones de Infraestructura, Sistemas y Redes). A continuación, comparo brevemente esta opción con SLAM.', '(Soluções de Infraestrutura, Sistemas e Redes). A seguir, comparo brevemente esta opção com SLAM.', '(حلول البنية التحتية والأنظمة والشبكات). فيما يلي مقارنة موجزة بين هذا المسار وSLAM.', '（基础设施、系统与网络解决方案）。下面简要比较这一方向与 SLAM。', '(Решения для инфраструктуры, систем и сетей). Ниже я кратко сравниваю это направление с SLAM.'],
        'Développement et logiciels': ['Software development', 'Desarrollo y software', 'Desenvolvimento e software', 'تطوير البرمجيات', '软件开发', 'Разработка программного обеспечения'],
        'SLAM forme aux solutions logicielles et aux applications métiers : développement web, mobile, bases de données, et maintenance des programmes.': ['SLAM focuses on software solutions and business applications: web and mobile development, databases, and software maintenance.', 'SLAM se centra en soluciones de software y aplicaciones empresariales: desarrollo web y móvil, bases de datos y mantenimiento de programas.', 'SLAM concentra-se em soluções de software e aplicações empresariais: desenvolvimento web e móvel, bases de dados e manutenção de programas.', 'يركز SLAM على الحلول البرمجية وتطبيقات الأعمال: تطوير الويب والهواتف المحمولة وقواعد البيانات وصيانة البرامج.', 'SLAM 专注于软件解决方案和业务应用：网页与移动开发、数据库以及程序维护。', 'SLAM готовит специалистов по программным решениям и бизнес-приложениям: веб- и мобильной разработке, базам данных и сопровождению программ.'],
        'Mon choix': ['My choice', 'Mi elección', 'Minha escolha', 'اختياري', '我的选择', 'Мой выбор'],
        'Infrastructure et réseau': ['Infrastructure and networking', 'Infraestructura y redes', 'Infraestrutura e redes', 'البنية التحتية والشبكات', '基础设施与网络', 'Инфраструктура и сети'],
        'SISR forme aux infrastructures, aux systèmes, aux réseaux et à la cybersécurité : installation, administration, sécurité et supervision des parcs informatiques.': ['SISR covers infrastructure, systems, networks and cybersecurity: installation, administration, security and IT fleet monitoring.', 'SISR abarca infraestructuras, sistemas, redes y ciberseguridad: instalación, administración, seguridad y supervisión de parques informáticos.', 'SISR abrange infraestrutura, sistemas, redes e cibersegurança: instalação, administração, segurança e monitoramento de parques de TI.', 'يشمل SISR البنية التحتية والأنظمة والشبكات والأمن السيبراني: التثبيت والإدارة والأمن ومراقبة أساطيل تقنية المعلومات.', 'SISR 涵盖基础设施、系统、网络与网络安全：IT 设备的安装、管理、安全和监控。', 'SISR охватывает инфраструктуру, системы, сети и кибербезопасность: установку, администрирование, защиту и мониторинг ИТ-парков.'],
        'Parcours scolaire': ['Education', 'Formación académica', 'Percurso acadêmico', 'المسار الدراسي', '教育经历', 'Образование'],
        'Une progression claire, étape par étape, depuis le lycée jusqu’au BTS.': ['A clear step-by-step journey from high school to the BTS.', 'Una trayectoria clara, paso a paso, desde el instituto hasta el BTS.', 'Uma trajetória clara, passo a passo, do ensino médio ao BTS.', 'مسار واضح خطوة بخطوة من المرحلة الثانوية حتى BTS.', '从高中到 BTS，一步一步稳步前进。', 'Понятный путь шаг за шагом — от школы до BTS.'],
        'BTS 2 – Services Informatiques aux Organisations': ['BTS 2 – IT Services for Organizations', 'BTS 2 – Servicios Informáticos a las Organizaciones', 'BTS 2 – Serviços de TI para Organizações', 'السنة الثانية BTS – خدمات تقنية المعلومات للمؤسسات', 'BTS 二年级 – 组织信息技术服务', 'BTS 2 — ИТ-услуги для организаций'],
        'Institut F2I – Vincennes': ['F2I Institute – Vincennes', 'Instituto F2I – Vincennes', 'Instituto F2I – Vincennes', 'معهد F2I – فانسان', 'F2I 学院 – 万塞讷', 'Институт F2I — Венсен'],
        'Stage': ['Internship', 'Prácticas', 'Estágio', 'تدريب', '实习', 'Стажировка'],
        'Stage Gestion IT – NATASSUR': ['IT Management Internship – NATASSUR', 'Prácticas de gestión de TI – NATASSUR', 'Estágio em gestão de TI – NATASSUR', 'تدريب في إدارة تقنية المعلومات – NATASSUR', 'IT 管理实习 – NATASSUR', 'Стажировка по управлению ИТ — NATASSUR'],
        'Évolution et déploiement de modules CRM sur Dolibarr': ['Upgrade and deployment of CRM modules on Dolibarr', 'Evolución e implementación de módulos CRM en Dolibarr', 'Evolução e implantação de módulos CRM no Dolibarr', 'تطوير ونشر وحدات CRM على Dolibarr', '在 Dolibarr 上升级并部署 CRM 模块', 'Развитие и внедрение модулей CRM в Dolibarr'],
        'Automatisation de la GED vers OneDrive': ['Automation of document management to OneDrive', 'Automatización de la gestión documental hacia OneDrive', 'Automação da gestão documental para o OneDrive', 'أتمتة نقل إدارة المستندات إلى OneDrive', '将文档管理自动化并同步至 OneDrive', 'Автоматизация переноса электронного документооборота в OneDrive'],
        'Configuration de Syncthing pour la remontée des appels': ['Configuration of Syncthing to synchronize call records', 'Configuración de Syncthing para sincronizar los registros de llamadas', 'Configuração do Syncthing para sincronizar registros de chamadas', 'إعداد Syncthing لمزامنة سجلات المكالمات', '配置 Syncthing 同步通话记录', 'Настройка Syncthing для синхронизации журналов звонков'],
        'Support utilisateurs et accueil téléphonique': ['User support and telephone reception', 'Soporte a usuarios y atención telefónica', 'Suporte aos usuários e atendimento telefônico', 'دعم المستخدمين والرد على المكالمات', '用户支持与电话接待', 'Поддержка пользователей и приём звонков'],
        'BTS 1 – Services Informatiques aux Organisations': ['BTS 1 – IT Services for Organizations', 'BTS 1 – Servicios Informáticos a las Organizaciones', 'BTS 1 – Serviços de TI para Organizações', 'السنة الأولى BTS – خدمات تقنية المعلومات للمؤسسات', 'BTS 一年级 – 组织信息技术服务', 'BTS 1 — ИТ-услуги для организаций'],
        'Licence 1 – Réseaux et Télécommunications': ['Year 1 – Networks and Telecommunications', 'Primer año – Redes y Telecomunicaciones', '1º ano – Redes e Telecomunicações', 'السنة الأولى – الشبكات والاتصالات', '大学一年级 – 网络与电信', 'Первый курс — Сети и телекоммуникации'],
        'BAC série D – Option Mathématiques': ['Baccalaureate, Science stream D – Mathematics', 'Bachillerato, modalidad científica D – Matemáticas', 'Bacharelado, série D – Matemática', 'شهادة الثانوية، المسار العلمي D – الرياضيات', 'D 类高中毕业会考 – 数学方向', 'Бакалавриат, серия D — математика'],
        'La Réconciliation – Brazzaville': ['La Réconciliation – Brazzaville', 'La Réconciliation – Brazzaville', 'La Réconciliation – Brazzaville', 'La Réconciliation – برازافيل', 'La Réconciliation – 布拉柴维尔', 'La Réconciliation — Браззавиль'],
        'Compétences & Outils': ['Skills & Tools', 'Habilidades y herramientas', 'Competências e ferramentas', 'المهارات والأدوات', '技能与工具', 'Навыки и инструменты'],
        "Découvrez l'ensemble des technologies, outils et logiciels que je maîtrise en infrastructure, systèmes et réseaux.": ['Explore the technologies, tools and software I use in infrastructure, systems and networking.', 'Descubre las tecnologías, herramientas y programas que manejo en infraestructura, sistemas y redes.', 'Conheça as tecnologias, ferramentas e softwares que utilizo em infraestrutura, sistemas e redes.', 'اكتشف التقنيات والأدوات والبرامج التي أستخدمها في البنية التحتية والأنظمة والشبكات.', '了解我在基础设施、系统和网络领域掌握的技术、工具与软件。', 'Ознакомьтесь с технологиями, инструментами и программами, которыми я владею в области инфраструктуры, систем и сетей.'],
        "Systèmes d'exploitation": ['Operating systems', 'Sistemas operativos', 'Sistemas operacionais', 'أنظمة التشغيل', '操作系统', 'Операционные системы'],
        'Virtualisation': ['Virtualization', 'Virtualización', 'Virtualização', 'الافتراضية', '虚拟化', 'Виртуализация'],
        'Gestion de Projet & Ticketting': ['Project and ticket management', 'Gestión de proyectos y tickets', 'Gestão de projetos e chamados', 'إدارة المشاريع والتذاكر', '项目与工单管理', 'Управление проектами и заявками'],
        'GLPI : gestion de parc informatique et tickets d’incidents.': ['GLPI: IT asset and incident ticket management.', 'GLPI: gestión de activos informáticos y tickets de incidencias.', 'GLPI: gestão de ativos de TI e chamados de incidentes.', 'GLPI: إدارة أصول تقنية المعلومات وتذاكر الحوادث.', 'GLPI：IT 资产与故障工单管理。', 'GLPI: управление ИТ-активами и заявками об инцидентах.'],
        'Bases de Données': ['Databases', 'Bases de datos', 'Bases de dados', 'قواعد البيانات', '数据库', 'Базы данных'],
        'Développement Web': ['Web development', 'Desarrollo web', 'Desenvolvimento web', 'تطوير الويب', '网页开发', 'Веб-разработка'],
        'Serveurs Web locaux': ['Local web servers', 'Servidores web locales', 'Servidores web locais', 'خوادم ويب محلية', '本地 Web 服务器', 'Локальные веб-серверы'],
        'Simulation Réseau': ['Network simulation', 'Simulación de redes', 'Simulação de redes', 'محاكاة الشبكات', '网络仿真', 'Симуляция сетей'],
        'Cisco Packet Tracer pour la modélisation de topologies.': ['Cisco Packet Tracer for topology modeling.', 'Cisco Packet Tracer para modelar topologías.', 'Cisco Packet Tracer para modelagem de topologias.', 'Cisco Packet Tracer لنمذجة طوبولوجيا الشبكات.', '使用 Cisco Packet Tracer 建模网络拓扑。', 'Cisco Packet Tracer для моделирования топологий.'],
        'Analyse & Sécurité': ['Analysis & Security', 'Análisis y seguridad', 'Análise e segurança', 'التحليل والأمن', '分析与安全', 'Анализ и безопасность'],
        'Services Réseau': ['Network services', 'Servicios de red', 'Serviços de rede', 'خدمات الشبكة', '网络服务', 'Сетевые службы'],
        'Supervision & Pare-feu': ['Monitoring & Firewall', 'Monitorización y firewall', 'Monitoramento e firewall', 'المراقبة وجدار الحماية', '监控与防火墙', 'Мониторинг и межсетевой экран'],
        'Zabbix pour la supervision, pfSense pour le pare-feu.': ['Zabbix for monitoring and pfSense as a firewall.', 'Zabbix para la monitorización y pfSense como firewall.', 'Zabbix para monitoramento e pfSense como firewall.', 'Zabbix للمراقبة وpfSense كجدار حماية.', '使用 Zabbix 进行监控，使用 pfSense 作为防火墙。', 'Zabbix для мониторинга, pfSense в качестве межсетевого экрана.'],
        'Conception & Modélisation': ['Design & Modeling', 'Diseño y modelado', 'Concepção e modelagem', 'التصميم والنمذجة', '设计与建模', 'Проектирование и моделирование'],
        'Bureautique & Design': ['Office & Design', 'Ofimática y diseño', 'Informática e design', 'الأعمال المكتبية والتصميم', '办公与设计', 'Офисные программы и дизайн'],
        "Questions fréquentes et points de veille. (Contenu en cours d'ajout)": ['Frequently asked questions and technology watch topics. (Content being added)', 'Preguntas frecuentes y temas de actualidad tecnológica. (Contenido en preparación)', 'Perguntas frequentes e tópicos de atualidades tecnológicas. (Conteúdo em preparação)', 'أسئلة شائعة وموضوعات متابعة التكنولوجيا. (المحتوى قيد الإضافة)', '常见问题与技术动态。（内容正在补充）', 'Часто задаваемые вопросы и темы технологического обзора. (Материал добавляется)'],
        "Qu'est-ce que la veille technologique ?": ['What is technology watch?', '¿Qué es la vigilancia tecnológica?', 'O que é acompanhamento tecnológico?', 'ما هي متابعة التكنولوجيا؟', '什么是技术动态跟踪？', 'Что такое технологический обзор?'],
        "La veille technologique consiste à surveiller l'évolution des outils, des standards et des pratiques pour rester à jour.": ['Technology watch means monitoring changes in tools, standards and practices to stay up to date.', 'La vigilancia tecnológica consiste en seguir la evolución de herramientas, estándares y prácticas para mantenerse al día.', 'O acompanhamento tecnológico consiste em observar a evolução de ferramentas, padrões e práticas para se manter atualizado.', 'تعني متابعة التكنولوجيا رصد تطور الأدوات والمعايير والممارسات لمواكبة المستجدات.', '技术动态跟踪是关注工具、标准和实践的变化，以保持与时俱进。', 'Технологический обзор — это отслеживание изменений инструментов, стандартов и практик, чтобы оставаться в курсе.'],
        'Quel est le but d’une veille technologique ?': ['What is the purpose of technology watch?', '¿Cuál es el objetivo de la vigilancia tecnológica?', 'Qual é o objetivo do acompanhamento tecnológico?', 'ما الهدف من متابعة التكنولوجيا؟', '技术动态跟踪的目的是什么？', 'Какова цель технологического обзора?'],
        'Identifier des tendances, anticiper les risques et améliorer les pratiques professionnelles.': ['Identify trends, anticipate risks and improve professional practices.', 'Identificar tendencias, anticipar riesgos y mejorar las prácticas profesionales.', 'Identificar tendências, antecipar riscos e melhorar as práticas profissionais.', 'تحديد الاتجاهات واستباق المخاطر وتحسين الممارسات المهنية.', '发现趋势、预判风险并改进专业实践。', 'Выявлять тенденции, предвидеть риски и улучшать профессиональные практики.'],
        'Quels sont les outils de veille ?': ['What tools are used for technology watch?', '¿Qué herramientas se utilizan para la vigilancia tecnológica?', 'Quais ferramentas são usadas no acompanhamento tecnológico?', 'ما أدوات متابعة التكنولوجيا؟', '技术动态跟踪有哪些工具？', 'Какие инструменты используют для технологического обзора?'],
        'Flux RSS, alertes Google, plateformes spécialisées, lectures techniques et tests pratiques.': ['RSS feeds, Google Alerts, specialist platforms, technical reading and hands-on testing.', 'Fuentes RSS, alertas de Google, plataformas especializadas, lecturas técnicas y pruebas prácticas.', 'Feeds RSS, alertas do Google, plataformas especializadas, leituras técnicas e testes práticos.', 'خلاصات RSS وتنبيهات Google والمنصات المتخصصة والقراءات التقنية والاختبارات العملية.', 'RSS 源、Google 快讯、专业平台、技术阅读和实践测试。', 'RSS-ленты, оповещения Google, специализированные платформы, техническая литература и практические тесты.'],
        'Quelle a été le sujet de ma veille ?': ['What was the topic of my technology watch?', '¿Cuál fue el tema de mi vigilancia tecnológica?', 'Qual foi o tema do meu acompanhamento tecnológico?', 'ما موضوع متابعتي للتكنولوجيا؟', '我的技术动态跟踪主题是什么？', 'Какова была тема моего технологического обзора?'],
        'Contenu à venir — je documenterai ici mes recherches et conclusions.': ['Coming soon — I will share my research and conclusions here.', 'Próximamente — aquí documentaré mis investigaciones y conclusiones.', 'Em breve — documentarei aqui minhas pesquisas e conclusões.', 'قريبًا — سأوثق هنا أبحاثي واستنتاجاتي.', '即将更新——我会在这里记录研究和结论。', 'Скоро здесь появятся мои исследования и выводы.'],
        'Quelles thématiques sont abordées ?': ['Which topics are covered?', '¿Qué temas se tratan?', 'Quais temas são abordados?', 'ما الموضوعات التي تتم مناقشتها؟', '涵盖哪些主题？', 'Какие темы рассматриваются?'],
        "Sécurité, réseaux, virtualisation, bonnes pratiques d'administration et nouveautés cloud.": ['Security, networking, virtualization, administration best practices and cloud developments.', 'Seguridad, redes, virtualización, buenas prácticas de administración y novedades en la nube.', 'Segurança, redes, virtualização, boas práticas de administração e novidades na nuvem.', 'الأمن والشبكات والافتراضية وأفضل ممارسات الإدارة ومستجدات الحوسبة السحابية.', '安全、网络、虚拟化、管理最佳实践和云计算新动态。', 'Безопасность, сети, виртуализация, лучшие практики администрирования и новинки облачных технологий.'],
        'Restons en contact': ['Let’s stay in touch', 'Sigamos en contacto', 'Vamos manter contato', 'لنبقَ على تواصل', '保持联系', 'Давайте оставаться на связи'],
        'Pour toute question, projet ou opportunité, envoyez-moi un message ou utilisez mes coordonnées directes.': ['For questions, projects or opportunities, send me a message or use my direct contact details.', 'Para cualquier consulta, proyecto u oportunidad, envíame un mensaje o utiliza mis datos de contacto.', 'Para dúvidas, projetos ou oportunidades, envie uma mensagem ou use meus dados de contato.', 'لأي استفسار أو مشروع أو فرصة، أرسل لي رسالة أو استخدم بيانات الاتصال المباشرة.', '如有问题、项目或合作机会，请给我留言或使用我的联系方式。', 'По вопросам, проектам и предложениям напишите мне или воспользуйтесь моими контактами.'],
        'Adresse mail': ['Email address', 'Correo electrónico', 'E-mail', 'البريد الإلكتروني', '电子邮箱', 'Электронная почта'],
        'Téléphone': ['Phone', 'Teléfono', 'Telefone', 'الهاتف', '电话', 'Телефон'],
        'Localisation': ['Location', 'Ubicación', 'Localização', 'الموقع', '位置', 'Местоположение'],
        'Écrivez-moi un message': ['Send me a message', 'Envíame un mensaje', 'Envie-me uma mensagem', 'أرسل لي رسالة', '给我留言', 'Напишите мне'],
        'Envoyer le message': ['Send message', 'Enviar mensaje', 'Enviar mensagem', 'إرسال الرسالة', '发送消息', 'Отправить сообщение'],
        'Mon adresse': ['My address', 'Mi dirección', 'Meu endereço', 'عنواني', '我的地址', 'Мой адрес'],
        'Voir l’emplacement exact sur Google Maps pour me localiser rapidement.': ['View my exact location on Google Maps to find me quickly.', 'Consulta mi ubicación exacta en Google Maps para encontrarme rápidamente.', 'Veja minha localização exata no Google Maps para me encontrar rapidamente.', 'اعرض موقعي الدقيق على خرائط Google لتصل إليّ بسرعة.', '在 Google 地图上查看我的准确位置，方便快速找到我。', 'Посмотрите моё точное местоположение на Google Картах.'],
        'Portfolio BTS SIO - Spécialisation SISR et cybersécurité.': ['BTS SIO portfolio – SISR and cybersecurity specialization.', 'Portafolio BTS SIO – especialización en SISR y ciberseguridad.', 'Portfólio BTS SIO – especialização em SISR e cibersegurança.', 'ملف BTS SIO – تخصص SISR والأمن السيبراني.', 'BTS SIO 作品集 – SISR 与网络安全专业方向。', 'Портфолио BTS SIO — специализация SISR и кибербезопасность.'],
        'Navigation rapide': ['Quick navigation', 'Navegación rápida', 'Navegação rápida', 'تنقل سريع', '快速导航', 'Быстрая навигация'],
        'Email :': ['Email:', 'Correo:', 'E-mail:', 'البريد الإلكتروني:', '邮箱：', 'Эл. почта:'],
        'Adresse :': ['Address:', 'Dirección:', 'Endereço:', 'العنوان:', '地址：', 'Адрес:'],
        'Tél. :': ['Phone:', 'Teléfono:', 'Telefone:', 'الهاتف:', '电话：', 'Телефон:'],
        '© 2026 Jude ONDOUNGA-LEKOU. Tous droits réservés.': ['© 2026 Jude ONDOUNGA-LEKOU. All rights reserved.', '© 2026 Jude ONDOUNGA-LEKOU. Todos los derechos reservados.', '© 2026 Jude ONDOUNGA-LEKOU. Todos os direitos reservados.', '© 2026 Jude ONDOUNGA-LEKOU. جميع الحقوق محفوظة.', '© 2026 Jude ONDOUNGA-LEKOU。保留所有权利。', '© 2026 Jude ONDOUNGA-LEKOU. Все права защищены.'],
        'Certifications réseaux et cybersécurité | Jude ONDOUNGA-LEKOU': ['Networking and Cybersecurity Certifications | Jude ONDOUNGA-LEKOU', 'Certificaciones de redes y ciberseguridad | Jude ONDOUNGA-LEKOU', 'Certificações de redes e cibersegurança | Jude ONDOUNGA-LEKOU', 'شهادات الشبكات والأمن السيبراني | Jude ONDOUNGA-LEKOU', '网络与网络安全认证 | Jude ONDOUNGA-LEKOU', 'Сертификаты по сетям и кибербезопасности | Jude ONDOUNGA-LEKOU'],
        'Mes Certifications': ['My Certifications', 'Mis certificaciones', 'Minhas certificações', 'شهاداتي', '我的认证', 'Мои сертификаты'],
        'Certifications obtenues dans le domaine des Réseaux et de la Cybersécurité.': ['Certifications earned in networking and cybersecurity.', 'Certificaciones obtenidas en redes y ciberseguridad.', 'Certificações obtidas em redes e cibersegurança.', 'شهادات في مجال الشبكات والأمن السيبراني.', '在网络与网络安全领域获得的认证。', 'Сертификаты в области сетей и кибербезопасности.'],
        'Certificats obtenus en ligne': ['Online certificates', 'Certificados obtenidos en línea', 'Certificados obtidos on-line', 'شهادات عبر الإنترنت', '在线证书', 'Онлайн-сертификаты'],
        'Badges et attestations obtenus via des formations en ligne.': ['Badges and certificates earned through online courses.', 'Insignias y certificados obtenidos en cursos en línea.', 'Emblemas e certificados obtidos em cursos on-line.', 'شارات وشهادات من دورات عبر الإنترنت.', '通过在线课程获得的徽章和证书。', 'Значки и сертификаты, полученные на онлайн-курсах.'],
        'Introduction Cybersécurité': ['Introduction to Cybersecurity', 'Introducción a la ciberseguridad', 'Introdução à cibersegurança', 'مقدمة في الأمن السيبراني', '网络安全导论', 'Введение в кибербезопасность'],
        'Fondamentaux de la cybersécurité : menaces, bonnes pratiques et défenses.': ['Cybersecurity fundamentals: threats, best practices and defenses.', 'Fundamentos de ciberseguridad: amenazas, buenas prácticas y defensas.', 'Fundamentos de cibersegurança: ameaças, boas práticas e defesas.', 'أساسيات الأمن السيبراني: التهديدات وأفضل الممارسات ووسائل الدفاع.', '网络安全基础：威胁、最佳实践与防御。', 'Основы кибербезопасности: угрозы, лучшие практики и защита.'],
        'Introduction Cisco Packet Tracer': ['Introduction to Cisco Packet Tracer', 'Introducción a Cisco Packet Tracer', 'Introdução ao Cisco Packet Tracer', 'مقدمة إلى Cisco Packet Tracer', 'Cisco Packet Tracer 入门', 'Введение в Cisco Packet Tracer'],
        'Utilisation de Packet Tracer pour concevoir et simuler des réseaux.': ['Using Packet Tracer to design and simulate networks.', 'Uso de Packet Tracer para diseñar y simular redes.', 'Uso do Packet Tracer para projetar e simular redes.', 'استخدام Packet Tracer لتصميم الشبكات ومحاكاتها.', '使用 Packet Tracer 设计和模拟网络。', 'Использование Packet Tracer для проектирования и моделирования сетей.'],
        'Sécurité des Systèmes d’Information': ['Information Systems Security', 'Seguridad de los sistemas de información', 'Segurança dos sistemas de informação', 'أمن نظم المعلومات', '信息系统安全', 'Безопасность информационных систем'],
        "Principes et pratiques de sécurité pour protéger les systèmes d'information.": ['Security principles and practices for protecting information systems.', 'Principios y prácticas de seguridad para proteger los sistemas de información.', 'Princípios e práticas de segurança para proteger sistemas de informação.', 'مبادئ وممارسات أمنية لحماية نظم المعلومات.', '保护信息系统的安全原则与实践。', 'Принципы и методы защиты информационных систем.'],
        'Certificats obtenus en formation présentielle': ['Certificates earned through in-person training', 'Certificados obtenidos en formación presencial', 'Certificados obtidos em formação presencial', 'شهادات من تدريب حضوري', '线下培训获得的证书', 'Сертификаты, полученные на очном обучении'],
        'Certificats délivrés par des centres de formation en présentiel.': ['Certificates issued by in-person training centers.', 'Certificados expedidos por centros de formación presencial.', 'Certificados emitidos por centros de formação presencial.', 'شهادات صادرة عن مراكز تدريب حضوري.', '由线下培训中心颁发的证书。', 'Сертификаты, выданные очными учебными центрами.'],
        'Maintenance Ordinateurs': ['Computer Maintenance', 'Mantenimiento de ordenadores', 'Manutenção de computadores', 'صيانة الحواسيب', '计算机维护', 'Обслуживание компьютеров'],
        'Réparation, diagnostic matériel et maintenance préventive des postes.': ['Computer repair, hardware diagnostics and preventive maintenance.', 'Reparación, diagnóstico de hardware y mantenimiento preventivo de equipos.', 'Reparação, diagnóstico de hardware e manutenção preventiva de computadores.', 'إصلاح الحواسيب وتشخيص الأعطال وصيانة الأجهزة الوقائية.', '计算机维修、硬件诊断和设备预防性维护。', 'Ремонт, диагностика оборудования и профилактическое обслуживание компьютеров.'],
        'Montage Vidéo & Dév Web': ['Video Editing & Web Development', 'Edición de vídeo y desarrollo web', 'Edição de vídeo e desenvolvimento web', 'تحرير الفيديو وتطوير الويب', '视频剪辑与网页开发', 'Видеомонтаж и веб-разработка'],
        'Montage vidéo et bases du développement web, workflows et outils.': ['Video editing and web development basics, workflows and tools.', 'Edición de vídeo y fundamentos del desarrollo web, flujos de trabajo y herramientas.', 'Edição de vídeo e fundamentos de desenvolvimento web, fluxos de trabalho e ferramentas.', 'تحرير الفيديو وأساسيات تطوير الويب وسير العمل والأدوات.', '视频剪辑与网页开发基础、工作流程和工具。', 'Видеомонтаж и основы веб-разработки, рабочие процессы и инструменты.'],
        'Dev Web (GOOD TECH)': ['Web Development (GOOD TECH)', 'Desarrollo web (GOOD TECH)', 'Desenvolvimento web (GOOD TECH)', 'تطوير الويب (GOOD TECH)', '网页开发（GOOD TECH）', 'Веб-разработка (GOOD TECH)'],
        'Formation axée sur le développement web front-end et bonnes pratiques.': ['Training focused on front-end web development and best practices.', 'Formación centrada en desarrollo web front-end y buenas prácticas.', 'Formação focada em desenvolvimento web front-end e boas práticas.', 'تدريب يركز على تطوير الواجهات الأمامية للويب وأفضل الممارسات.', '专注于前端网页开发与最佳实践的培训。', 'Обучение фронтенд-разработке и лучшим практикам.'],
        'Réseau et Maintenance': ['Networking and Maintenance', 'Redes y mantenimiento', 'Redes e manutenção', 'الشبكات والصيانة', '网络与维护', 'Сети и обслуживание'],
        'Installation et maintenance d’infrastructures réseau en entreprise.': ['Installation and maintenance of enterprise network infrastructure.', 'Instalación y mantenimiento de infraestructuras de red empresariales.', 'Instalação e manutenção de infraestruturas de rede empresariais.', 'تركيب وصيانة البنية التحتية لشبكات المؤسسات.', '企业网络基础设施的安装与维护。', 'Установка и обслуживание сетевой инфраструктуры предприятия.'],
        'Montage Vidéo & Dev Web (pack)': ['Video Editing & Web Development (bundle)', 'Edición de vídeo y desarrollo web (paquete)', 'Edição de vídeo e desenvolvimento web (pacote)', 'تحرير الفيديو وتطوير الويب (حزمة)', '视频剪辑与网页开发（组合课程）', 'Видеомонтаж и веб-разработка (комплексный курс)'],
        'Certificat combiné couvrant montage vidéo et développement web.': ['Combined certificate covering video editing and web development.', 'Certificado combinado de edición de vídeo y desarrollo web.', 'Certificado combinado de edição de vídeo e desenvolvimento web.', 'شهادة مشتركة في تحرير الفيديو وتطوير الويب.', '涵盖视频剪辑和网页开发的综合证书。', 'Комплексный сертификат по видеомонтажу и веб-разработке.'],
        'Aperçu PDF': ['View PDF', 'Ver PDF', 'Ver PDF', 'عرض PDF', '查看 PDF', 'Открыть PDF'],
        'Épreuve E4 BTS SIO | Jude ONDOUNGA-LEKOU': ['BTS SIO E4 Exam | Jude ONDOUNGA-LEKOU', 'Prueba E4 de BTS SIO | Jude ONDOUNGA-LEKOU', 'Exame E4 do BTS SIO | Jude ONDOUNGA-LEKOU', 'اختبار E4 في BTS SIO | Jude ONDOUNGA-LEKOU', 'BTS SIO E4 考试 | Jude ONDOUNGA-LEKOU', 'Экзамен E4 BTS SIO | Jude ONDOUNGA-LEKOU'],
        'Épreuve E4 : Support et mise à disposition de services informatiques': ['E4 Exam: IT support and service delivery', 'Prueba E4: Soporte y puesta a disposición de servicios informáticos', 'Exame E4: Suporte e disponibilização de serviços de TI', 'اختبار E4: دعم خدمات تقنية المعلومات وإتاحتها', 'E4 考试：IT 支持与服务交付', 'Экзамен E4: поддержка и предоставление ИТ-услуг'],
        'Gestion des patrimoines informatiques et réponses aux incidents SISR.': ['IT asset management and incident response in SISR.', 'Gestión de activos informáticos y respuesta a incidentes en SISR.', 'Gestão de ativos de TI e resposta a incidentes em SISR.', 'إدارة أصول تقنية المعلومات والاستجابة للحوادث في SISR.', 'SISR 中的 IT 资产管理与事件响应。', 'Управление ИТ-активами и реагирование на инциденты в SISR.'],
        'Portefeuille de compétences': ['Skills portfolio', 'Portafolio de competencias', 'Portfólio de competências', 'ملف المهارات', '技能档案', 'Портфолио компетенций'],
        "Retrouvez ici l'ensemble des fiches descriptives de réalisation d'activités professionnelles validées au cours du cursus BTS SIO.": ['Find descriptions here of professional activities completed and validated during the BTS SIO program.', 'Aquí encontrarás las fichas descriptivas de actividades profesionales validadas durante el BTS SIO.', 'Aqui estão as fichas descritivas das atividades profissionais validadas durante o curso BTS SIO.', 'تجد هنا أوصاف الأنشطة المهنية المعتمدة خلال برنامج BTS SIO.', '这里汇总了 BTS SIO 学习期间完成并通过验证的职业活动说明。', 'Здесь представлены описания профессиональных заданий, выполненных и подтверждённых в ходе обучения BTS SIO.'],
        'Tableau de synthèse E4': ['E4 Summary Table', 'Tabla de síntesis E4', 'Quadro de síntese E4', 'جدول ملخص E4', 'E4 汇总表', 'Сводная таблица E4'],
        'Document officiel récapitulant les réalisations en entreprise et en centre de formation.': ['Official document summarizing work completed in companies and training centers.', 'Documento oficial que resume las actividades realizadas en empresas y centros de formación.', 'Documento oficial que resume as atividades realizadas em empresas e centros de formação.', 'وثيقة رسمية تلخص الأعمال المنجزة في الشركات ومراكز التدريب.', '总结在企业和培训中心完成工作的官方文件。', 'Официальный документ с итогами работы в компаниях и учебных центрах.'],
        'Épreuve E5 BTS SIO SISR | Jude ONDOUNGA-LEKOU': ['BTS SIO SISR E5 Exam | Jude ONDOUNGA-LEKOU', 'Prueba E5 de BTS SIO SISR | Jude ONDOUNGA-LEKOU', 'Exame E5 do BTS SIO SISR | Jude ONDOUNGA-LEKOU', 'اختبار E5 في BTS SIO SISR | Jude ONDOUNGA-LEKOU', 'BTS SIO SISR E5 考试 | Jude ONDOUNGA-LEKOU', 'Экзамен E5 BTS SIO SISR | Jude ONDOUNGA-LEKOU'],
        "Épreuve E5 : Conception et développement d'une solution d'infrastructure": ['E5 Exam: Design and development of an infrastructure solution', 'Prueba E5: Diseño y desarrollo de una solución de infraestructura', 'Exame E5: Concepção e desenvolvimento de uma solução de infraestrutura', 'اختبار E5: تصميم وتطوير حل للبنية التحتية', 'E5 考试：基础设施解决方案的设计与开发', 'Экзамен E5: проектирование и разработка инфраструктурного решения'],
        "Projets techniques axés sur l'administration système, les réseaux et la cybersécurité.": ['Technical projects focused on systems administration, networking and cybersecurity.', 'Proyectos técnicos centrados en administración de sistemas, redes y ciberseguridad.', 'Projetos técnicos focados em administração de sistemas, redes e cibersegurança.', 'مشاريع تقنية تركز على إدارة الأنظمة والشبكات والأمن السيبراني.', '专注于系统管理、网络和网络安全的技术项目。', 'Технические проекты по системному администрированию, сетям и кибербезопасности.'],
        'Projets de spécialité SISR': ['SISR specialization projects', 'Proyectos de la especialidad SISR', 'Projetos da especialização SISR', 'مشاريع تخصص SISR', 'SISR 专业项目', 'Проекты по специализации SISR'],
        'Présentation des architectures réseaux déployées, des configurations de serveurs et des stratégies de sécurité mises en place.': ['Overview of deployed network architectures, server configurations and implemented security strategies.', 'Presentación de arquitecturas de red implementadas, configuraciones de servidores y estrategias de seguridad aplicadas.', 'Apresentação das arquiteturas de rede implantadas, configurações de servidores e estratégias de segurança adotadas.', 'عرض لهياكل الشبكات المنشورة وإعدادات الخوادم واستراتيجيات الأمن المطبقة.', '介绍已部署的网络架构、服务器配置和安全策略。', 'Обзор развернутых сетевых архитектур, конфигураций серверов и реализованных стратегий безопасности.'],
        'Mes projets': ['My Projects', 'Mis proyectos', 'Meus projetos', 'مشاريعي', '我的项目', 'Мои проекты'],
        'Découvrez mes réalisations en systèmes, réseaux et conception web. Les documents disponibles peuvent être téléchargés depuis chaque projet.': ['Explore my work in systems, networking and web design. Available documents can be downloaded from each project.', 'Descubre mis proyectos de sistemas, redes y diseño web. Puedes descargar los documentos disponibles desde cada proyecto.', 'Conheça meus projetos de sistemas, redes e desenvolvimento web. Os documentos disponíveis podem ser baixados em cada projeto.', 'اكتشف أعمالي في الأنظمة والشبكات وتصميم الويب. يمكن تنزيل المستندات المتاحة من كل مشروع.', '了解我在系统、网络和网页设计方面的项目。可从各项目下载相关文档。', 'Мои проекты в области систем, сетей и веб-разработки. Доступные документы можно скачать на странице каждого проекта.'],
        'Configuration de VLAN en modes access et trunk': ['VLAN Configuration in Access and Trunk Modes', 'Configuración de VLAN en modos access y trunk', 'Configuração de VLAN nos modos access e trunk', 'إعداد VLAN بوضعَي access وtrunk', 'Access 与 trunk 模式下的 VLAN 配置', 'Настройка VLAN в режимах access и trunk'],
        'Création et configuration de VLAN avec Cisco Packet Tracer : ports en mode access pour connecter les équipements et ports en mode trunk pour transporter plusieurs VLAN entre les commutateurs.': ['Creating and configuring VLANs with Cisco Packet Tracer: access-mode ports connect devices, while trunk-mode ports carry multiple VLANs between switches.', 'Creación y configuración de VLAN con Cisco Packet Tracer: los puertos access conectan dispositivos y los puertos trunk transportan varias VLAN entre conmutadores.', 'Criação e configuração de VLAN com Cisco Packet Tracer: portas access conectam dispositivos e portas trunk transportam várias VLAN entre switches.', 'إنشاء VLAN وإعدادها باستخدام Cisco Packet Tracer: توصل منافذ access الأجهزة، بينما تنقل منافذ trunk عدة شبكات VLAN بين المحولات.', '使用 Cisco Packet Tracer 创建并配置 VLAN：access 端口连接设备，trunk 端口则在交换机之间传输多个 VLAN。', 'Создание и настройка VLAN в Cisco Packet Tracer: порты access подключают устройства, а порты trunk передают несколько VLAN между коммутаторами.'],
        'Outil :': ['Tool:', 'Herramienta:', 'Ferramenta:', 'الأداة:', '工具：', 'Инструмент:'],
        'Fichier du projet': ['Project file', 'Archivo del proyecto', 'Arquivo do projeto', 'ملف المشروع', '项目文件', 'Файл проекта'],
        'Télécharger le projet Packet Tracer (.pkt)': ['Download the Packet Tracer project (.pkt)', 'Descargar el proyecto de Packet Tracer (.pkt)', 'Baixar o projeto do Packet Tracer (.pkt)', 'تنزيل مشروع Packet Tracer (.pkt)', '下载 Packet Tracer 项目 (.pkt)', 'Скачать проект Packet Tracer (.pkt)'],
        'Télécharger le rapport de stage (PDF)': ['Download internship report (PDF)', 'Descargar el informe de prácticas (PDF)', 'Baixar o relatório do estágio (PDF)', 'تنزيل تقرير التدريب (PDF)', '下载实习报告 (PDF)', 'Скачать отчёт о стажировке (PDF)'],
        'Serveur Active Directory, DNS et DHCP': ['Active Directory, DNS and DHCP Server', 'Servidor Active Directory, DNS y DHCP', 'Servidor Active Directory, DNS e DHCP', 'خادم Active Directory وDNS وDHCP', 'Active Directory、DNS 和 DHCP 服务器', 'Сервер Active Directory, DNS и DHCP'],
        "Virtualisation d'un environnement d'entreprise avec gestion des utilisateurs, stratégies de groupe et services réseau.": ['Virtualization of an enterprise environment with user management, group policies and network services.', 'Virtualización de un entorno empresarial con gestión de usuarios, directivas de grupo y servicios de red.', 'Virtualização de um ambiente empresarial com gestão de usuários, políticas de grupo e serviços de rede.', 'افتراضية بيئة مؤسسية تشمل إدارة المستخدمين وسياسات المجموعة وخدمات الشبكة.', '虚拟化企业环境，并管理用户、组策略和网络服务。', 'Виртуализация корпоративной среды с управлением пользователями, групповыми политиками и сетевыми службами.'],
        'Technologies :': ['Technologies:', 'Tecnologías:', 'Tecnologias:', 'التقنيات:', '技术：', 'Технологии:'],
        'Load Balancer HAProxy & Keepalived': ['HAProxy & Keepalived Load Balancer', 'Balanceador de carga HAProxy y Keepalived', 'Balanceador de carga HAProxy e Keepalived', 'موازن تحميل HAProxy وKeepalived', 'HAProxy 与 Keepalived 负载均衡器', 'Балансировщик нагрузки HAProxy и Keepalived'],
        'Projet de groupe': ['Group project', 'Proyecto grupal', 'Projeto em grupo', 'مشروع جماعي', '小组项目', 'Групповой проект'],
        'Projet de groupe autour de la mise en place d’une solution de répartition de charge et de haute disponibilité avec HAProxy et Keepalived.': ['Group project to set up a load-balancing and high-availability solution with HAProxy and Keepalived.', 'Proyecto grupal para implementar una solución de balanceo de carga y alta disponibilidad con HAProxy y Keepalived.', 'Projeto em grupo para implementar uma solução de balanceamento de carga e alta disponibilidade com HAProxy e Keepalived.', 'مشروع جماعي لإعداد حل لموازنة الأحمال والتوافر العالي باستخدام HAProxy وKeepalived.', '小组项目：使用 HAProxy 和 Keepalived 构建负载均衡与高可用解决方案。', 'Групповой проект по созданию решения для балансировки нагрузки и высокой доступности на HAProxy и Keepalived.'],
        'Document disponible': ['Available document', 'Documento disponible', 'Documento disponível', 'المستند المتاح', '可用文档', 'Доступный документ'],
        'Télécharger le dossier du projet': ['Download the project report', 'Descargar el informe del proyecto', 'Baixar o relatório do projeto', 'تنزيل ملف المشروع', '下载项目文档', 'Скачать материалы проекта'],
        'Conception du site web AutoBizz': ['AutoBizz Website Design', 'Diseño del sitio web AutoBizz', 'Concepção do site AutoBizz', 'تصميم موقع AutoBizz', 'AutoBizz 网站设计', 'Разработка сайта AutoBizz'],
        'Conception et réalisation en équipe d’un site web nommé AutoBizz.': ['Team design and development of a website called AutoBizz.', 'Diseño y desarrollo en equipo de un sitio web llamado AutoBizz.', 'Concepção e desenvolvimento em equipe de um site chamado AutoBizz.', 'تصميم وتطوير موقع ويب باسم AutoBizz ضمن فريق.', '团队设计并开发名为 AutoBizz 的网站。', 'Командная разработка сайта AutoBizz.'],
        'Documents disponibles': ['Available documents', 'Documentos disponibles', 'Documentos disponíveis', 'المستندات المتاحة', '可用文档', 'Доступные документы'],
        'Télécharger le guide utilisateur': ['Download the user guide', 'Descargar la guía de usuario', 'Baixar o guia do usuário', 'تنزيل دليل المستخدم', '下载用户指南', 'Скачать руководство пользователя'],
        'Télécharger le devis du projet': ['Download the project estimate', 'Descargar el presupuesto del proyecto', 'Baixar o orçamento do projeto', 'تنزيل عرض سعر المشروع', '下载项目报价单', 'Скачать смету проекта'],
        'Audit de sécurité et durcissement système': ['Security Audit and System Hardening', 'Auditoría de seguridad y refuerzo del sistema', 'Auditoria de segurança e reforço do sistema', 'تدقيق أمني وتعزيز النظام', '安全审计与系统加固', 'Аудит безопасности и укрепление системы'],
        'Analyse de sécurité d’un environnement Linux / Windows et mise en place de mesures de durcissement.': ['Security assessment of a Linux/Windows environment and implementation of hardening measures.', 'Análisis de seguridad de un entorno Linux/Windows e implementación de medidas de refuerzo.', 'Análise de segurança de um ambiente Linux/Windows e implementação de medidas de proteção.', 'تحليل أمن بيئة Linux/Windows وتطبيق إجراءات تعزيز الحماية.', '评估 Linux/Windows 环境的安全性并实施加固措施。', 'Анализ безопасности среды Linux/Windows и применение мер по укреплению защиты.'],
        'Environnement de services informatiques': ['IT Services Environment', 'Entorno de servicios informáticos', 'Ambiente de serviços de TI', 'بيئة خدمات تقنية المعلومات', 'IT 服务环境', 'Среда ИТ-услуг'],
        'Projet en cours': ['Ongoing project', 'Proyecto en curso', 'Projeto em andamento', 'مشروع قيد التنفيذ', '进行中的项目', 'Проект в работе'],
        'Mise en place d’un environnement combinant gestion de parc, annuaire, services systèmes et pare-feu.': ['Building an environment combining IT asset management, directory services, system services and a firewall.', 'Implementación de un entorno que combina gestión de activos, servicios de directorio y sistema, y firewall.', 'Implementação de um ambiente que combina gestão de ativos, serviços de diretório e de sistema e firewall.', 'إنشاء بيئة تجمع بين إدارة الأصول وخدمات الدليل والأنظمة وجدار الحماية.', '构建集 IT 资产管理、目录服务、系统服务和防火墙于一体的环境。', 'Создание среды, объединяющей управление ИТ-активами, службы каталогов и системные службы, а также межсетевой экран.'],
        'Technologies prévues :': ['Planned technologies:', 'Tecnologías previstas:', 'Tecnologias previstas:', 'التقنيات المخطط لها:', '计划使用的技术：', 'Планируемые технологии:'],
        'Télécharger le document du projet': ['Download the project document', 'Descargar el documento del proyecto', 'Baixar o documento do projeto', 'تنزيل مستند المشروع', '下载项目文档', 'Скачать документ проекта'],
        'Entreprise d’accueil': ['Host Company', 'Empresa de acogida', 'Empresa de acolhimento', 'الشركة المضيفة', '实习企业', 'Принимающая компания'],
        'Présentation des entreprises et stages réalisés durant ma formation BTS SIO.': ['Companies and internships completed during my BTS SIO studies.', 'Presentación de las empresas y prácticas realizadas durante mi formación BTS SIO.', 'Apresentação das empresas e estágios realizados durante minha formação BTS SIO.', 'عرض الشركات والتدريبات التي أنجزتها خلال دراستي BTS SIO.', '介绍我在 BTS SIO 学习期间的企业与实习经历。', 'Компании и стажировки, пройденные во время обучения BTS SIO.'],
        'NATASSUR': ['NATASSUR', 'NATASSUR', 'NATASSUR', 'NATASSUR', 'NATASSUR', 'NATASSUR'],
        'Courtier en assurances pour particuliers et professionnels': ['Insurance broker for individuals and businesses', 'Corredor de seguros para particulares y profesionales', 'Corretora de seguros para pessoas físicas e empresas', 'وسيط تأمين للأفراد والشركات', '面向个人和企业的保险经纪', 'Страховой брокер для частных лиц и компаний'],
        'NATASSUR accompagne les particuliers et les professionnels dans la recherche d’une assurance adaptée à leur situation. Le cabinet compare des offres aux garanties comparables et conseille ses clients dans leurs choix. Son agence est située à Ivry-sur-Seine et ses conseillers accompagnent également leurs clients par téléphone partout en France.': ['NATASSUR helps individuals and businesses find insurance suited to their needs. The firm compares policies with similar coverage and advises clients on their choices. Its agency is in Ivry-sur-Seine, and its advisers also assist clients by phone throughout France.', 'NATASSUR ayuda a particulares y profesionales a encontrar un seguro adaptado a su situación. La correduría compara ofertas con coberturas similares y asesora a sus clientes. Su oficina está en Ivry-sur-Seine y sus asesores también atienden por teléfono en toda Francia.', 'A NATASSUR ajuda pessoas físicas e empresas a encontrar seguros adequados às suas necessidades. A corretora compara ofertas com coberturas semelhantes e orienta seus clientes. Sua agência fica em Ivry-sur-Seine, e os consultores também atendem por telefone em toda a França.', 'تساعد NATASSUR الأفراد والشركات في العثور على تأمين يناسب احتياجاتهم. تقارن الشركة بين عروض ذات تغطيات متقاربة وتقدم المشورة للعملاء. يقع مكتبها في Ivry-sur-Seine ويقدم مستشاروها الدعم هاتفيًا في جميع أنحاء فرنسا.', 'NATASSUR 帮助个人和企业寻找适合自身需求的保险。该经纪机构比较保障范围相近的方案，并为客户提供建议。其办事处位于 Ivry-sur-Seine，顾问也通过电话为法国各地的客户提供服务。', 'NATASSUR помогает частным лицам и компаниям подобрать страховку с учётом их потребностей. Компания сравнивает предложения с сопоставимым покрытием и консультирует клиентов. Офис находится в Иври-сюр-Сен, а консультанты также обслуживают клиентов по телефону по всей Франции.'],
        'Agence': ['Agency', 'Oficina', 'Agência', 'الوكالة', '办事处', 'Офис'],
        '43 bis Promenée Marat, 94200 Ivry-sur-Seine': ['43 bis Promenée Marat, 94200 Ivry-sur-Seine', '43 bis Promenée Marat, 94200 Ivry-sur-Seine', '43 bis Promenée Marat, 94200 Ivry-sur-Seine', '43 bis Promenée Marat، 94200 Ivry-sur-Seine', '43 bis Promenée Marat，94200 Ivry-sur-Seine', '43 bis Promenée Marat, 94200 Иври-сюр-Сен'],
        'Zone d’intervention': ['Service area', 'Zona de cobertura', 'Área de atendimento', 'نطاق الخدمة', '服务范围', 'Территория обслуживания'],
        'Partout en France': ['Throughout France', 'En toda Francia', 'Em toda a França', 'في جميع أنحاء فرنسا', '遍及法国', 'По всей Франции'],
        'Courtier ORIAS': ['ORIAS-registered broker', 'Corredor registrado en ORIAS', 'Corretora registrada na ORIAS', 'وسيط مسجل لدى ORIAS', 'ORIAS 注册经纪人', 'Брокер, зарегистрированный в ORIAS'],
        'N° 24007656': ['No. 24007656', 'N.º 24007656', 'N.º 24007656', 'رقم 24007656', '编号 24007656', '№ 24007656'],
        'Période de stage': ['Internship period', 'Periodo de prácticas', 'Período do estágio', 'فترة التدريب', '实习期间', 'Период стажировки'],
        '13 mai – 26 juin 2026': ['May 13 – June 26, 2026', '13 de mayo – 26 de junio de 2026', '13 de maio – 26 de junho de 2026', '13 مايو – 26 يونيو 2026', '2026年5月13日 – 6月26日', '13 мая – 26 июня 2026'],
        'Site web': ['Website', 'Sitio web', 'Site', 'الموقع الإلكتروني', '网站', 'Веб-сайт'],
        'Spécialisations': ['Specialties', 'Especialidades', 'Especialidades', 'التخصصات', '专业领域', 'Специализации'],
        'Automobile': ['Automotive', 'Automoción', 'Automóvel', 'السيارات', '汽车', 'Автострахование'],
        'Mobilité professionnelle (VTC, taxis, flottes)': ['Business mobility (ride-hailing, taxis, fleets)', 'Movilidad profesional (VTC, taxis y flotas)', 'Mobilidade profissional (transporte por aplicativo, táxis e frotas)', 'التنقل المهني (النقل مع سائق وسيارات الأجرة والأساطيل)', '专业出行（网约车、出租车和车队）', 'Профессиональные перевозки (такси, VTC и автопарки)'],
        'Bâtiment et décennale': ['Construction and ten-year liability insurance', 'Construcción y seguro decenal', 'Construção e seguro decenal', 'البناء والتأمين العشري', '建筑工程与十年责任险', 'Строительство и десятилетнее страхование ответственности'],
        'Assurances professionnelles': ['Business insurance', 'Seguros profesionales', 'Seguros empresariais', 'تأمين مهني', '商业保险', 'Страхование бизнеса'],
        'Santé et mutuelles': ['Health and supplementary insurance', 'Salud y seguros complementarios', 'Saúde e planos complementares', 'الصحة والتأمين التكميلي', '健康与补充医疗保险', 'Медицинское и дополнительное страхование'],
        'Habitation': ['Home insurance', 'Hogar', 'Residencial', 'السكن', '住房保险', 'Страхование жилья'],
        'Prévoyance': ['Personal protection', 'Previsión', 'Previdência', 'التأمين الوقائي', '人身保障', 'Личное страхование'],
        'Carte grise': ['Vehicle registration', 'Matriculación de vehículos', 'Registro de veículos', 'تسجيل المركبات', '车辆登记', 'Регистрация автомобиля'],
        'Mes missions — Stage Gestion IT': ['My duties — IT Management Internship', 'Mis funciones — Prácticas de gestión de TI', 'Minhas atividades — Estágio em gestão de TI', 'مهامي — تدريب في إدارة تقنية المعلومات', '我的工作 — IT 管理实习', 'Мои обязанности — стажировка по управлению ИТ'],
        'Télécharger le rapport de stage': ['Download internship report', 'Descargar el informe de prácticas', 'Baixar o relatório do estágio', 'تنزيل تقرير التدريب', '下载实习报告', 'Скачать отчёт о стажировке'],
        'Partager des compétences': ['Sharing skills', 'Compartir competencias', 'Compartilhar competências', 'مشاركة المهارات', '分享技能', 'Обмен навыками'],
        'Présentation de Jude ONDOUNGA-LEKOU': ['About Jude ONDOUNGA-LEKOU', 'Presentación de Jude ONDOUNGA-LEKOU', 'Apresentação de Jude ONDOUNGA-LEKOU', 'نبذة عن Jude ONDOUNGA-LEKOU', 'Jude ONDOUNGA-LEKOU 简介', 'О Jude ONDOUNGA-LEKOU'],
        'Afficher la présentation de Jude ONDOUNGA-LEKOU': ['Show Jude ONDOUNGA-LEKOU’s profile', 'Mostrar el perfil de Jude ONDOUNGA-LEKOU', 'Mostrar o perfil de Jude ONDOUNGA-LEKOU', 'عرض الملف الشخصي لـ Jude ONDOUNGA-LEKOU', '显示 Jude ONDOUNGA-LEKOU 的简介', 'Показать профиль Jude ONDOUNGA-LEKOU'],
        'BTS SIO · option SISR': ['BTS SIO · SISR option', 'BTS SIO · opción SISR', 'BTS SIO · opção SISR', 'BTS SIO · مسار SISR', 'BTS SIO · SISR 方向', 'BTS SIO · направление SISR'],
        'BTS SIO : Services informatiques aux organisations.': ['BTS SIO: IT services for organizations.', 'BTS SIO: Servicios informáticos a las organizaciones.', 'BTS SIO: Serviços de TI para organizações.', 'BTS SIO: خدمات تقنية المعلومات للمؤسسات.', 'BTS SIO：组织信息技术服务。', 'BTS SIO: ИТ-услуги для организаций.'],
        'SISR : Solutions d’infrastructure, systèmes et réseaux.': ['SISR: Infrastructure, systems and networks solutions.', 'SISR: Soluciones de infraestructura, sistemas y redes.', 'SISR: Soluções de infraestrutura, sistemas e redes.', 'SISR: حلول البنية التحتية والأنظمة والشبكات.', 'SISR：基础设施、系统与网络解决方案。', 'SISR: Решения для инфраструктуры, систем и сетей.'],
        'Ouvrir le menu': ['Open menu', 'Abrir menú', 'Abrir menu', 'فتح القائمة', '打开菜单', 'Открыть меню'],
        'Fermer le menu': ['Close menu', 'Cerrar menú', 'Fechar menu', 'إغلاق القائمة', '关闭菜单', 'Закрыть меню'],
        'Passer en mode nuit': ['Switch to dark mode', 'Cambiar al modo oscuro', 'Ativar modo escuro', 'التبديل إلى الوضع الداكن', '切换到深色模式', 'Включить тёмную тему'],
        'Passer en mode jour': ['Switch to light mode', 'Cambiar al modo claro', 'Ativar modo claro', 'التبديل إلى الوضع الفاتح', '切换到浅色模式', 'Включить светлую тему'],
        'Retour en haut': ['Back to top', 'Volver arriba', 'Voltar ao topo', 'العودة إلى الأعلى', '返回顶部', 'Наверх'],
        'Retour en haut de la page': ['Back to top of page', 'Volver al inicio de la página', 'Voltar ao topo da página', 'العودة إلى أعلى الصفحة', '返回页面顶部', 'Вернуться в начало страницы'],
        'Votre nom': ['Your name', 'Tu nombre', 'Seu nome', 'اسمك', '您的姓名', 'Ваше имя'],
        'Votre mail': ['Your email', 'Tu correo electrónico', 'Seu e-mail', 'بريدك الإلكتروني', '您的邮箱', 'Ваш e-mail'],
        'Sujet': ['Subject', 'Asunto', 'Assunto', 'الموضوع', '主题', 'Тема'],
        'Votre message': ['Your message', 'Tu mensaje', 'Sua mensagem', 'رسالتك', '您的留言', 'Ваше сообщение']
    };

    const attributeNames = ['aria-label', 'title', 'placeholder', 'alt', 'content'];
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const storageKey = 'portfolio-language';
    let activeLanguage = 'fr';

    try {
        const savedLanguage = localStorage.getItem(storageKey);
        if (languages.some(function (language) { return language.code === savedLanguage; })) {
            activeLanguage = savedLanguage;
        }
    } catch (error) {
        activeLanguage = 'fr';
    }

    function translate(value, language) {
        const entry = translations[value.trim()];
        const localeIndex = localeIndexes[language];
        return entry && typeof localeIndex === 'number' ? entry[localeIndex] : value;
    }

    function translatePage(language) {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let textNode;
        while ((textNode = walker.nextNode())) {
            if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
            const source = originalText.get(textNode);
            const translated = translate(source, language);
            const leading = source.match(/^\s*/)[0];
            const trailing = source.match(/\s*$/)[0];
            textNode.nodeValue = leading + translated.trim() + trailing;
        }

        document.querySelectorAll('[aria-label], [title], [placeholder], img[alt], meta[content]').forEach(function (element) {
            attributeNames.forEach(function (attribute) {
                if (!element.hasAttribute(attribute)) return;
                let values = originalAttributes.get(element);
                if (!values) {
                    values = {};
                    originalAttributes.set(element, values);
                }
                if (!Object.prototype.hasOwnProperty.call(values, attribute)) {
                    values[attribute] = element.getAttribute(attribute);
                }
                element.setAttribute(attribute, translate(values[attribute], language));
            });
        });

        const sourceTitle = document.documentElement.dataset.originalTitle || document.title;
        document.documentElement.dataset.originalTitle = sourceTitle;
        document.title = translate(sourceTitle, language);
        document.documentElement.lang = language;
        document.documentElement.dir = languages.find(function (item) { return item.code === language; }).direction;
    }

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML =
        '<button class="language-toggle" type="button" aria-haspopup="true" aria-expanded="false">' +
            '<i class="fas fa-globe" aria-hidden="true"></i><span class="language-current"></span>' +
        '</button>' +
        '<div class="language-menu" role="menu" hidden></div>';
    document.body.appendChild(switcher);

    const toggle = switcher.querySelector('.language-toggle');
    const currentLabel = switcher.querySelector('.language-current');
    const menu = switcher.querySelector('.language-menu');

    languages.forEach(function (language) {
        const option = document.createElement('button');
        option.className = 'language-option';
        option.type = 'button';
        option.setAttribute('role', 'menuitemradio');
        option.dataset.language = language.code;
        option.textContent = language.label;
        menu.appendChild(option);
    });

    function updateSwitcher(language) {
        currentLabel.textContent = language.toUpperCase();
        toggle.setAttribute('aria-label', translate('Choisir la langue', language));
        menu.setAttribute('aria-label', translate('Langue du site', language));
        menu.querySelectorAll('.language-option').forEach(function (option) {
            const selected = option.dataset.language === language;
            option.setAttribute('aria-checked', String(selected));
            option.tabIndex = selected ? 0 : -1;
        });
    }

    function setMenuOpen(open) {
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', function () {
        setMenuOpen(menu.hidden);
    });

    menu.addEventListener('click', function (event) {
        const option = event.target.closest('[data-language]');
        if (!option) return;
        activeLanguage = option.dataset.language;
        translatePage(activeLanguage);
        updateSwitcher(activeLanguage);
        setMenuOpen(false);
        try {
            localStorage.setItem(storageKey, activeLanguage);
        } catch (error) {
            // La langue reste appliquée à la page même sans persistance.
        }
        toggle.focus();
    });

    document.addEventListener('click', function (event) {
        if (!switcher.contains(event.target)) setMenuOpen(false);
    });

    switcher.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !menu.hidden) {
            setMenuOpen(false);
            toggle.focus();
        }
    });

    translatePage(activeLanguage);
    updateSwitcher(activeLanguage);
})();
