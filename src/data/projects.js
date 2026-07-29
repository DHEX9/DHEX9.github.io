export const projectsData = [
  {
    designator: "U1",
    category: { pt: "IA", en: "IA" },
    title: "Nero 2.0 - Secretária Pessoal Com IA",
    desc: {
      pt: "Secretária virtual que organiza agenda, finanças, lembretes, listas de compras e diário, automatiza tarefas do dia a dia por meio de conversas em chat.",
      en: "A virtual assistant that organizes schedules, finances, reminders, shopping lists, and a journal, automating daily tasks through chat conversations.",
    },
    longDesc: {
    pt: "Arquitetura back-end voltada para automação de processos e escalabilidade, integração com APIs externas e gerenciamento de agenda, finanças, lembretes e mensagens programadas. Utilização de Redis para cache, rate limiting e filas de processamento, além de Docker para conteinerização.",
    en: "Back-end architecture focused on process automation and scalability, featuring integration with external APIs and management of schedules, finances, reminders, and scheduled messages. Utilizes Redis for caching, rate limiting, and processing queues, as well as Docker for containerization.",
  },
    tags: ["Python", "Redis", "MySQL", "Docker", "AI"],
    link: "https://github.com/DHEX9/Secretaria-Pessoal-IA-2.0",
  },
  {
    designator: "U2",
    category: { pt: "IA", en: "IA" },
    title: "Nero 1.0 - Secretária Pessoal Com IA",
    desc: {
      pt: "Secretária virtual que organiza agenda, finanças e lembretes, e automatiza tarefas do dia a dia por meio de conversas em chat.",
      en: "Virtual assistant that manages schedules, finances, and reminders, and automates everyday tasks through chat conversations.",
    },
    longDesc: {
    pt: "Chatbot integrado ao WhatsApp para automação de processos, incluindo gerenciamento de agenda, finanças e lembretes, com integração à API de previsão do tempo.",
    en: "WhatsApp-integrated chatbot for process automation—including schedule, finance, and reminder management—with weather forecast API integration.",
  },
    tags: ["Python", "Node", "Baileys", "MySQL", "AI"],
    link: "https://github.com/DHEX9/Projeto-Nero",
  },
  {
    designator: "U3",
    category: { pt: "ROBÓTICA", en: "ROBOTICS" },
    title: "Fusca-azul",
    desc: {
      pt: "Carrinho robótico controlado por gestos, com visão computacional em tempo real para captura de movimentos, criado em parceiria com a equipe de robótica da UFES. Detecção feita com OpenCV, MediaPipe e controle via ESP32.",
      en: "Gesture-controlled robotic cart featuring real-time computer vision for motion capture, developed in partnership with the UFES robotics team. Detection is implemented using OpenCV and MediaPipe, with control via ESP32.",
    },
    longDesc: {
      pt: "Reconhece gestos da mão levando em conta lateralidade, distância entre os dedos e casos como o punho fechado, enviando comandos para um ESP32 que controla os motores. Passou por uma refatoração para separar responsabilidades, correção de conflitos de IP na rede local com IP estático, e ajustes para lidar com chamadas HTTP bloqueantes no firmware.",
      en: "Recognizes hand gestures, accounting for handedness, finger distance, and edge cases like a closed fist, then sends commands to an ESP32 that drives the motors. It went through a refactor to separate concerns, a fix for local network IP conflicts using a static IP, and adjustments to handle blocking HTTP calls in the firmware.",
    },
    tags: ["Python", "OpenCV", "MediaPipe", "ESP32"],
    link: "https://github.com/erufes/fusca-azul",
  },
  {
    designator: "U4",
    category: { pt: "DESKTOP APP", en: "DESKTOP APP" },
    title: "Xadrez em Java",
    desc: {
      pt: "Jogo de xadrez em Java com interface gráfica, implementando todas as regras oficiais do jogo.",
      en: "Chess game built in Java with a graphical interface, implementing all the official rules.",
    },
    longDesc: {
      pt: "Projeto de xadrez em Java, construído com programação orientada a objetos. Implementa todas as regras oficiais, incluindo xeque, xeque-mate, roque, en passant, promoção de peões e validação completa dos movimentos. A arquitetura é organizada em classes para peças, tabuleiro e gerenciamento da partida, pensando em legibilidade, reaproveitamento de código e facilidade de manutenção.",
      en: "Chess game built in Java with object-oriented programming. It implements all the official rules, including check, checkmate, castling, en passant, pawn promotion, and full move validation. The code is organized into classes for pieces, board, and game management, with an eye toward readability, code reuse, and maintainability.",
    },
    tags: ["Java", "OOP", "Desktop"],
    link: "https://github.com/DHEX9/Chess-java",
  },
  {
    designator: "U5",
    category: { pt: "WEB APP", en: "WEB APP" },
    title: "DignCare",
    desc: {
      pt: "Plataforma web para encontrar prestadores de serviços de forma rápida e prática.",
      en: "Web platform for finding service providers quickly and easily.",
    },
    longDesc: {
      pt: "O DignCare é uma plataforma web para conectar clientes a prestadores de serviços em diversas áreas. Foi construída com HTML e CSS, com um design responsivo que facilita a busca e a visualização de profissionais. A interface apresenta as informações de forma clara e organizada, para tornar o processo de encontrar um serviço mais simples.",
      en: "DignCare is a web platform that connects clients with service providers across different categories. Built with HTML and CSS, it uses a responsive layout that makes it easy to search for and browse professionals. The interface presents information clearly and keeps the process of finding a service simple.",
    },
    tags: ["HTML", "CSS", "Responsive Design"],
    link: "https://github.com/kauamatheu/DignCare",
  },
];
