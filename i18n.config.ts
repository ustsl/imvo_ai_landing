export const i18n = {
  defaultLocale: "en",
  locales: ["ru", "tr", "en", "de"],
} as const;

export type Locale = "en" | "ru" | "tr" | "de";
