import type { Locale } from "@/lib/i18n";

type ProjectItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
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
  },
};