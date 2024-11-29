import type { Locale } from '../../i18n.config'

import en from '@/dictionaries/en.json';
import ru from '@/dictionaries/ru.json';
import tr from '@/dictionaries/tr.json';
import it from '@/dictionaries/it.json';

const dictionaries = {
    en,
    ru,
    tr,
    it
}

export const getDictionary = (locale: Locale) => dictionaries[locale];
