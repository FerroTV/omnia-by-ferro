import type { Locale } from "@/lib/i18n";

export const homeContent: Record<
  Locale,
  {
    navigation: {
      home: string;
      projects: string;
      lab: string;
      about: string;
      contact: string;
    };
  }
> = {
  en: {
    navigation: {
      home: "Home",
      projects: "Projects",
      lab: "Lab",
      about: "About",
      contact: "Contact",
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
  },
  bg: {
    navigation: {
      home: "Начало",
      projects: "Проекти",
      lab: "Лаборатория",
      about: "За мен",
      contact: "Контакт",
    },
  },
};