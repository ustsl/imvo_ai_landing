import { baseLanguages } from "@/types/baseTypes"

export const i18n = {
  defaultLocale: 'en',
  locales: ['ru', 'tr', 'en', 'it']
} as const

export type Locale = baseLanguages
