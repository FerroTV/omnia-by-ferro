import type { Locale } from "@/lib/i18n";

type ProjectItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

type LabItem = {
  title: string;
  description: string;
};

type HomeContent = {
  navigation: {
  home: string;
  projects: string;
  lab: string;
  about: string;
  contact: string;
  menu: string;
  close: string;
};
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
  projects: {
    label: string;
    title: string;
    items: ProjectItem[];
  };
  lab: {
    label: string;
    title: string;
    description: string;
    items: LabItem[];
  };
  about: {
    label: string;
    name: string;
    paragraphs: string[];
    statement: string;
    tags: string[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    tags: string[];
    links: {
      label: string;
      href: string;
      external?: boolean;
    }[];
  };
  footer: {
  credit: string;
};
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      lab: "Lab",
      about: "About",
      contact: "Contact",
      menu: "Menu",
      close: "Close"
    },
    hero: {
      badge: "by Ferro",
      title: "OMNIA",
      description:
        "A personal digital space for projects, ideas, code, art and experiments.",
      primaryAction: "Explore Projects",
      secondaryAction: "Enter the Lab",
    },
    projects: {
      label: "Projects",
      title: "Built work, learning paths and digital systems.",
      items: [
        {
          category: "Software Project",
          title: "CRM Integration",
          description:
            "Outlook and calendar integration for a PHP-based CRM system, focused on reducing media breaks and documenting communication.",
          tags: ["PHP", "Microsoft Graph", "CRM"],
          href: "/projects/outlook-crm-integration",
        },
        {
          category: "Learning Project",
          title: "Solar System App",
          description:
            "Educational Angular application with interactive sections for children, created as a learning project with planets, quizzes and playful content.",
          tags: ["Angular", "TypeScript", "Learning App"],
          href: "/projects/ssi-app",
        },
        {
          category: "Portfolio System",
          title: "Omnia by Ferro",
          description:
            "Personal digital space, portfolio and creative archive for code, AI concepts, visual experiments and future digital systems.",
          tags: ["Next.js", "Tailwind CSS", "Portfolio"],
          href: "/projects/omnia-by-ferro",
        },
      ],
    },
    lab: {
      label: "Lab",
      title: "Experiments, prototypes and unfinished ideas.",
      description:
        "The Lab is the experimental part of Omnia — a place for AI concepts, interface ideas, visual tests and future prototypes before they become finished projects.",
      items: [
        {
          title: "AI Concepts",
          description:
            "Ideas for intelligent systems, digital memory, learning flows and future assistant behavior.",
        },
        {
          title: "Interface Experiments",
          description:
            "Small tests around navigation, interaction, visual hierarchy and minimal user interfaces.",
        },
        {
          title: "Visual Prototypes",
          description:
            "Experimental layouts, motion ideas, art direction tests and visual identity explorations.",
        },
        {
          title: "Future Systems",
          description:
            "Early thoughts about tools, personal platforms and digital systems that may become full projects later.",
        },
      ],
    },
    about: {
  label: "About",
  name: "Zhelyazko Zhelyazkov - Ferro.",
  paragraphs: [
    "I am a software developer in progress, a visual thinker and a curious builder based in Germany. My path combines technology, design, experimentation and the constant process of learning how ideas become working systems.",
    "I am interested not only in writing code, but in understanding how people experience technology - how an interface feels, how information is structured and how intelligent systems can become more useful, personal and human.",
    "Omnia is where I document that journey. It brings together the projects I have completed, the concepts I am still developing and the experiments that help me discover what I want to build next.",
  ],
  statement:
    "I do not present a finished identity. I am building one.",
  tags: [
    "Software Development",
    "AI Exploration",
    "Interface Design",
    "Creative Technology",
  ],
},
    contact: {
      label: "Contact",
      title: "Let’s connect.",
      description:
        "Omnia is an evolving digital space. If you want to connect, follow the development of my work or reach out about ideas, projects or collaboration, these are the best places to find me.",
      tags: ["Open to ideas", "Portfolio in progress", "Based in Germany"],
      links: [
        {
          label: "zhelyazkov.it@gmail.com",
          href: "mailto:zhelyazkov.it@gmail.com",
        },
        {
          label: "GitHub / FerroTV",
          href: "https://github.com/FerroTV",
          external: true,
        },
        {
          label: "LinkedIn / Zhelyazko Zhelyazkov",
          href: "https://www.linkedin.com/in/zhelyazko-zhelyazkov-29669586",
          external: true,
        },
      ],
    },
        footer: {
      credit: "Built by Zhelyazko “Ferro” Zhelyazkov.",
    },
  },

  de: {
    navigation: {
      home: "Start",
      projects: "Projekte",
      lab: "Labor",
      about: "Über mich",
      contact: "Kontakt",
      menu: "Menü",
      close: "Schließen",
    },
    hero: {
      badge: "by Ferro",
      title: "OMNIA",
      description:
        "Ein persönlicher digitaler Raum für Projekte, Ideen, Code, Kunst und Experimente.",
      primaryAction: "Projekte entdecken",
      secondaryAction: "Zum Labor",
    },
    projects: {
      label: "Projekte",
      title: "Realisierte Projekte, Lernwege und digitale Systeme.",
      items: [
        {
          category: "Softwareprojekt",
          title: "CRM Integration",
          description:
            "Outlook- und Kalenderintegration für ein PHP-basiertes CRM-System mit dem Ziel, Medienbrüche zu reduzieren und Kommunikation zu dokumentieren.",
          tags: ["PHP", "Microsoft Graph", "CRM"],
          href: "/projects/outlook-crm-integration",
        },
        {
          category: "Lernprojekt",
          title: "Solar System App",
          description:
            "Eine pädagogische Angular-Anwendung mit interaktiven Bereichen für Kinder, entwickelt als Lernprojekt mit Planeten, Quizzen und spielerischen Inhalten.",
          tags: ["Angular", "TypeScript", "Lern-App"],
          href: "/projects/ssi-app",
        },
        {
          category: "Portfoliosystem",
          title: "Omnia by Ferro",
          description:
            "Persönlicher digitaler Raum, Portfolio und kreatives Archiv für Code, KI-Konzepte, visuelle Experimente und zukünftige digitale Systeme.",
          tags: ["Next.js", "Tailwind CSS", "Portfolio"],
          href: "/projects/omnia-by-ferro",
        },
      ],
    },
    lab: {
      label: "Labor",
      title: "Experimente, Prototypen und unfertige Ideen.",
      description:
        "Das Labor ist der experimentelle Teil von Omnia — ein Ort für KI-Konzepte, Interface-Ideen, visuelle Tests und zukünftige Prototypen, bevor daraus fertige Projekte werden.",
      items: [
        {
          title: "KI-Konzepte",
          description:
            "Ideen für intelligente Systeme, digitales Gedächtnis, Lernprozesse und das zukünftige Verhalten von Assistenten.",
        },
        {
          title: "Interface-Experimente",
          description:
            "Kleine Tests zu Navigation, Interaktion, visueller Hierarchie und minimalistischen Benutzeroberflächen.",
        },
        {
          title: "Visuelle Prototypen",
          description:
            "Experimentelle Layouts, Bewegungsideen, Art-Direction-Tests und Erkundungen visueller Identitäten.",
        },
        {
          title: "Zukünftige Systeme",
          description:
            "Frühe Gedanken zu Werkzeugen, persönlichen Plattformen und digitalen Systemen, die später zu vollständigen Projekten werden können.",
        },
      ],
    },
   about: {
  label: "Über mich",
  name: "Zhelyazko Zhelyazkov - Ferro.",
  paragraphs: [
    "Ich bin angehender Softwareentwickler, visueller Denker und neugieriger Gestalter mit Sitz in Deutschland. Mein Weg verbindet Technologie, Design, Experimente und den kontinuierlichen Prozess, aus Ideen funktionierende Systeme zu entwickeln.",
    "Mich interessiert nicht nur das Schreiben von Code, sondern auch die Frage, wie Menschen Technologie erleben - wie sich ein Interface anfühlt, wie Informationen strukturiert werden und wie intelligente Systeme nützlicher, persönlicher und menschlicher werden können.",
    "Omnia ist der Ort, an dem ich diesen Weg dokumentiere. Hier treffen abgeschlossene Projekte, Ideen in Entwicklung und Experimente aufeinander, durch die ich entdecke, was ich als Nächstes erschaffen möchte.",
  ],
  statement:
    "Ich präsentiere keine fertige Identität. Ich entwickle sie.",
  tags: [
    "Softwareentwicklung",
    "KI-Experimente",
    "Interface-Design",
    "Kreative Technologie",
  ],
},
    contact: {
      label: "Kontakt",
      title: "Lass uns in Kontakt treten.",
      description:
        "Omnia ist ein sich ständig weiterentwickelnder digitaler Raum. Wenn du Kontakt aufnehmen, die Entwicklung meiner Arbeit verfolgen oder dich über Ideen, Projekte oder eine Zusammenarbeit austauschen möchtest, findest du mich am besten über diese Kanäle.",
      tags: ["Offen für Ideen", "Portfolio im Aufbau", "In Deutschland"],
      links: [
        {
          label: "zhelyazkov.it@gmail.com",
          href: "mailto:zhelyazkov.it@gmail.com",
        },
        {
          label: "GitHub / FerroTV",
          href: "https://github.com/FerroTV",
          external: true,
        },
        {
          label: "LinkedIn / Zhelyazko Zhelyazkov",
          href: "https://www.linkedin.com/in/zhelyazko-zhelyazkov-29669586",
          external: true,
        },
      ],
    },
        footer: {
      credit: "Erstellt von Zhelyazko „Ferro“ Zhelyazkov.",
    },
  },

  bg: {
    navigation: {
      home: "Начало",
      projects: "Проекти",
      lab: "Лаборатория",
      about: "За мен",
      contact: "Контакт",
      menu: "Меню",
      close: "Затвори",
    },
    hero: {
      badge: "by Ferro",
      title: "OMNIA",
      description:
        "Лично дигитално пространство за проекти, идеи, код, изкуство и експерименти.",
      primaryAction: "Разгледай проектите",
      secondaryAction: "Влез в лабораторията",
    },
    projects: {
      label: "Проекти",
      title: "Реализирани проекти, учебни пътеки и дигитални системи.",
      items: [
        {
          category: "Софтуерен проект",
          title: "CRM Integration",
          description:
            "Интеграция на Outlook и календар в CRM система, базирана на PHP, с фокус върху намаляването на прекъсванията между различни системи и документирането на комуникацията.",
          tags: ["PHP", "Microsoft Graph", "CRM"],
          href: "/projects/outlook-crm-integration",
        },
        {
          category: "Учебен проект",
          title: "Solar System App",
          description:
            "Образователно Angular приложение с интерактивни секции за деца, създадено като учебен проект с планети, тестове и игрово съдържание.",
          tags: ["Angular", "TypeScript", "Образователно приложение"],
          href: "/projects/ssi-app",
        },
        {
          category: "Портфолио система",
          title: "Omnia by Ferro",
          description:
            "Лично дигитално пространство, портфолио и творчески архив за код, концепции с изкуствен интелект, визуални експерименти и бъдещи дигитални системи.",
          tags: ["Next.js", "Tailwind CSS", "Портфолио"],
          href: "/projects/omnia-by-ferro",
        },
      ],
    },
    lab: {
      label: "Лаборатория",
      title: "Експерименти, прототипи и незавършени идеи.",
      description:
        "Лабораторията е експерименталната част на Omnia — място за концепции с изкуствен интелект, идеи за интерфейси, визуални тестове и бъдещи прототипи, преди да се превърнат в завършени проекти.",
      items: [
        {
          title: "Концепции с изкуствен интелект",
          description:
            "Идеи за интелигентни системи, дигитална памет, процеси на обучение и бъдещо поведение на асистенти.",
        },
        {
          title: "Интерфейсни експерименти",
          description:
            "Малки тестове с навигация, взаимодействие, визуална йерархия и минималистични потребителски интерфейси.",
        },
        {
          title: "Визуални прототипи",
          description:
            "Експериментални оформления, идеи за движение, тестове на художествената посока и проучвания на визуална идентичност.",
        },
        {
          title: "Бъдещи системи",
          description:
            "Ранни идеи за инструменти, лични платформи и дигитални системи, които по-късно могат да се превърнат в цялостни проекти.",
        },
      ],
    },
    about: {
  label: "За мен",
  name: "Желязко Желязков - Ferro.",
  paragraphs: [
    "Аз съм развиващ се софтуерен разработчик, визуален мислител и любопитен създател, базиран в Германия. Пътят ми съчетава технологии, дизайн, експерименти и постоянния процес по превръщане на идеите в работещи системи.",
    "Интересува ме не само писането на код, а и начинът, по който хората преживяват технологиите - как се усеща един интерфейс, как се структурира информацията и как интелигентните системи могат да станат по-полезни, по-лични и по-човешки.",
    "Omnia е мястото, в което документирам този път. Тук се срещат завършените ми проекти, идеите, които все още развивам, и експериментите, чрез които откривам какво искам да създам след това.",
  ],
  statement:
    "Не представям завършена идентичност. Изграждам я.",
  tags: [
    "Софтуерна разработка",
    "AI експерименти",
    "Дизайн на интерфейси",
    "Творчески технологии",
  ],
},
    contact: {
      label: "Контакт",
      title: "Нека се свържем.",
      description:
        "Omnia е развиващо се дигитално пространство. Ако искаш да се свържеш с мен, да следиш развитието на работата ми или да поговорим за идеи, проекти или сътрудничество, това са най-добрите места, на които можеш да ме откриеш.",
      tags: ["Отворен за идеи", "Портфолиото се развива", "Базиран в Германия"],
      links: [
        {
          label: "zhelyazkov.it@gmail.com",
          href: "mailto:zhelyazkov.it@gmail.com",
        },
        {
          label: "GitHub / FerroTV",
          href: "https://github.com/FerroTV",
          external: true,
        },
        {
          label: "LinkedIn / Желязко Желязков",
          href: "https://www.linkedin.com/in/zhelyazko-zhelyazkov-29669586",
          external: true,
        },
      ],
    },
        footer: {
      credit: "Създадено от Желязко „Ferro“ Желязков.",
    },
  },
};
