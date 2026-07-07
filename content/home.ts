import type { Locale } from "@/lib/i18n";

type ProjectItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
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
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      lab: "Lab",
      about: "About",
      contact: "Contact",
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
        },
        {
          category: "Learning Project",
          title: "SSI App",
          description:
            "Educational Angular application with interactive sections for children, created as a learning project with planets, quizzes and playful content.",
          tags: ["Angular", "TypeScript", "Learning App"],
        },
        {
          category: "Portfolio System",
          title: "Omnia by Ferro",
          description:
            "Personal digital space, portfolio and creative archive for code, AI concepts, visual experiments and future digital systems.",
          tags: ["Next.js", "Tailwind CSS", "Portfolio"],
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
      name: "Zhelyazko “Ferro” Zhelyazkov.",
      paragraphs: [
        "I am building Omnia as a personal digital space where software development, AI concepts, visual experiments and learning paths can live together.",
        "This website is not meant to be only a portfolio. It is also a growing archive of ideas, prototypes, unfinished thoughts and systems that may become something bigger over time.",
        "My focus is on clean digital products, thoughtful interfaces, practical learning and the connection between technology and creativity.",
      ],
      statement: "Omnia is the space. Ferro is the signature.",
      tags: ["Software", "AI Concepts", "Interfaces", "Creative Systems"],
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
  },

  de: {
    navigation: {
      home: "Start",
      projects: "Projekte",
      lab: "Labor",
      about: "Über mich",
      contact: "Kontakt",
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
        },
        {
          category: "Lernprojekt",
          title: "SSI App",
          description:
            "Eine pädagogische Angular-Anwendung mit interaktiven Bereichen für Kinder, entwickelt als Lernprojekt mit Planeten, Quizzen und spielerischen Inhalten.",
          tags: ["Angular", "TypeScript", "Lern-App"],
        },
        {
          category: "Portfoliosystem",
          title: "Omnia by Ferro",
          description:
            "Persönlicher digitaler Raum, Portfolio und kreatives Archiv für Code, KI-Konzepte, visuelle Experimente und zukünftige digitale Systeme.",
          tags: ["Next.js", "Tailwind CSS", "Portfolio"],
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
      name: "Zhelyazko “Ferro” Zhelyazkov.",
      paragraphs: [
        "Ich entwickle Omnia als persönlichen digitalen Raum, in dem Softwareentwicklung, KI-Konzepte, visuelle Experimente und Lernwege zusammenleben können.",
        "Diese Website soll nicht nur ein Portfolio sein. Sie ist auch ein wachsendes Archiv für Ideen, Prototypen, unfertige Gedanken und Systeme, aus denen mit der Zeit etwas Größeres entstehen kann.",
        "Mein Schwerpunkt liegt auf klaren digitalen Produkten, durchdachten Interfaces, praktischem Lernen und der Verbindung zwischen Technologie und Kreativität.",
      ],
      statement: "Omnia ist der Raum. Ferro ist die Signatur.",
      tags: ["Software", "KI-Konzepte", "Interfaces", "Kreative Systeme"],
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
  },

  bg: {
    navigation: {
      home: "Начало",
      projects: "Проекти",
      lab: "Лаборатория",
      about: "За мен",
      contact: "Контакт",
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
        },
        {
          category: "Учебен проект",
          title: "SSI App",
          description:
            "Образователно Angular приложение с интерактивни секции за деца, създадено като учебен проект с планети, тестове и игрово съдържание.",
          tags: ["Angular", "TypeScript", "Образователно приложение"],
        },
        {
          category: "Портфолио система",
          title: "Omnia by Ferro",
          description:
            "Лично дигитално пространство, портфолио и творчески архив за код, концепции с изкуствен интелект, визуални експерименти и бъдещи дигитални системи.",
          tags: ["Next.js", "Tailwind CSS", "Портфолио"],
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
      name: "Желязко „Ferro“ Желязков.",
      paragraphs: [
        "Изграждам Omnia като лично дигитално пространство, в което софтуерната разработка, концепциите с изкуствен интелект, визуалните експерименти и процесите на учене могат да съществуват заедно.",
        "Този уебсайт не е замислен само като портфолио. Той е и развиващ се архив от идеи, прототипи, незавършени мисли и системи, които с времето могат да се превърнат в нещо по-голямо.",
        "Фокусът ми е върху чисти дигитални продукти, обмислени интерфейси, практическо учене и връзката между технологиите и творчеството.",
      ],
      statement: "Omnia е пространството. Ferro е подписът.",
      tags: [
        "Софтуер",
        "Концепции с изкуствен интелект",
        "Интерфейси",
        "Творчески системи",
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
  },
};
