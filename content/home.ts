import type { Locale } from "@/lib/i18n";

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
  },
};