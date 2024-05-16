import type { Locale } from '../../i18n.config'

import en from '@/dictionaries/en.json';
import ru from '@/dictionaries/ru.json';
import tr from '@/dictionaries/tr.json';


const dictionaries = {
    en,
    ru,
    tr
}

export const getDictionary = (locale: Locale) => dictionaries[locale];
