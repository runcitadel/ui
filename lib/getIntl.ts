import { createIntl, createIntlCache } from '@formatjs/intl'
import EnglishLang from '../content/compiled-locales/en.json'
import GermanLang from '../content/compiled-locales/de.json'

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

export function getIntl(locale: string) {
  let messages = null

  switch (locale) {
    case 'de':
      messages = GermanLang
      break
    default:
      messages = EnglishLang
      break
  }

  const intl = createIntl(
    {
      defaultLocale: 'en',
      locale,
      messages,
    },
    cache
  )

  return intl
}
