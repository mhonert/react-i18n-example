import locale2 from 'locale2';
import Cookies from 'universal-cookie';
import { i18nConfig } from 'es2015-i18n-tag';
import germanTranslations from './translations/translations.de.json';

const LOCALE_COOKIE = 'locale';
const cookies = new Cookies();

/*
 * Initializes the I18n support for the current locale (e.g. "en-US").
 * The locale is read from a cookie, which gets initialized with the default
 * locale of the web browser.
 */
export const initialize = () => {
  initLocaleCookieIfMissing();

  const locale = cookies.get(LOCALE_COOKIE);
  const translations = getTranslations(locale);

  i18nConfig({
    locales: locale,
    translations: translations
  });

  setHtmlLang(locale);
};

/*
 * Switch the locale by changing the locale cookie and reloading the page.
 */
export const switchLocale = locale => {
  setLocaleCookie(locale);

  window.location.reload(false);
};

/*
 * Returns "de-DE" for german language locales (regardless of country)
 * and "en-US" as a default fallback for all other locales.
 */
export const currentLocale = () => {
  const locale = cookies.get(LOCALE_COOKIE);

  return isGerman(locale) ? 'de-DE' : 'en-US';
};

//

const isGerman = locale =>
  locale && (locale === 'de' || locale.startsWith('de-'));

const initLocaleCookieIfMissing = () => {
  const existingValue = cookies.get(LOCALE_COOKIE);
  if (existingValue) {
    return;
  }

  setLocaleCookie(locale2);
};

const setLocaleCookie = locale => {
  cookies.set(LOCALE_COOKIE, locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: true
  });
};

const getTranslations = locale => {
  if (isGerman(locale)) {
    return germanTranslations;
  }

  // fallback -> no translations = uses english as default
  return null;
};

const setHtmlLang = locale => {
  const language = isGerman(locale) ? 'de' : 'en';
  document.documentElement.lang = language;
};
