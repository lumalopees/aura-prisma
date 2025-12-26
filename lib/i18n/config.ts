export const locales = ["pt-BR", "es", "en"] as const;
export const defaultLocale = "pt-BR" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português",
  es: "Español",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  "pt-BR": "🇧🇷",
  es: "🇪🇸",
  en: "🇬🇧",
};

