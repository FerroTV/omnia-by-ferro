export const locales = ["en", "de", "bg"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  bg: "Български",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  bg: "BG",
};