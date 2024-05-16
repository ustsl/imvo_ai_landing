export const i18n = {
  defaultLocale: 'en',
  locales: ['ru', 'tr', 'en']
} as const

export type Locale = 'en' | 'ru' | 'tr' 
