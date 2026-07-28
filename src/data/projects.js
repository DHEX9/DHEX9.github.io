export const projectsData = [
  {
    designator: "U1",
    category: { pt: "IA", en: "IA" },
    title: "Secretária Pessoal Com IA",
    desc: {
      pt: "Assistente virtual que organiza agenda, finanças e lembretes, e automatiza tarefas do dia a dia por meio de conversas em chat.",
      en: "Virtual assistant that manages schedules, finances, and reminders, and automates everyday tasks through chat conversations.",
    },
    longDesc: {
      pt: "A Nero é uma assistente virtual que funciona como uma secretária pessoal digital. Por meio de conversas em linguagem natural, ela ajuda a organizar compromissos, controlar finanças, criar lembretes e automatizar tarefas do dia a dia. O sistema também envia mensagens programadas, como passagens bíblicas, previsão do tempo e cumprimentos personalizados de bom dia e boa noite, de acordo com as preferências de cada usuário. Foi construída com foco em automação, inteligência artificial e produtividade.",
      en: "Nero is a virtual assistant that works as a personal digital secretary. Through natural language conversations, it helps organize schedules, track finances, create reminders, and automate everyday tasks. The system also sends scheduled messages, like Bible verses, weather forecasts, and personalized good morning and good night greetings, based on each user's preferences. It was built with a focus on automation, artificial intelligence, and productivity.",
    },
    tags: ["Python", "FastAPI", "Node.js", "Redis", "MySQL", "Docker", "AI"],
    link: "https://github.com/DHEX9/Secretaria-Pessoal-IA",
  },
  {
    designator: "U2",
    category: { pt: "ROBÓTICA", en: "ROBOTICS" },
    title: "Fusca-azul",
    desc: {
      pt: "Carrinho robótico controlado por gestos, com visão computacional em tempo real. Detecção feita com MediaPipe e controle via ESP32. Construído em parceria com o Pedro Vairo.",
      en: "Gesture-controlled robot car with real-time computer vision. Detection runs on MediaPipe, with an ESP32 handling control. Built together with Pedro Vairo.",
    },
    longDesc: {
      pt: "Reconhece gestos da mão levando em conta lateralidade, distância entre os dedos e casos como o punho fechado, enviando comandos para um ESP32 que controla os motores. Passou por uma refatoração para separar responsabilidades, correção de conflitos de IP na rede local com IP estático, e ajustes para lidar com chamadas HTTP bloqueantes no firmware.",
      en: "Recognizes hand gestures, accounting for handedness, finger distance, and edge cases like a closed fist, then sends commands to an ESP32 that drives the motors. It went through a refactor to separate concerns, a fix for local network IP conflicts using a static IP, and adjustments to handle blocking HTTP calls in the firmware.",
    },
    tags: ["Python", "OpenCV", "MediaPipe", "ESP32"],
    link: "https://github.com/erufes/fusca-azul",
  },
  {
    designator: "U3",
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
    designator: "U4",
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
