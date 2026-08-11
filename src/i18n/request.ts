import { getRequestConfig } from "next-intl/server";
import { hasLocale, IntlErrorCode } from "next-intl";
import { routing } from "./routing";
import { getMessagesForLocale } from "./messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: getMessagesForLocale(locale),
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        console.error(`[i18n] ${error.message}`);
        throw error;
      }
      console.error(`[i18n] ${error.code}: ${error.message}`);
    },
    getMessageFallback({ namespace, key }) {
      const path = [namespace, key].filter(Boolean).join(".");
      throw new Error(
        `[i18n] Missing translation "${path}". Add it to every locale file under src/messages/.`,
      );
    },
  };
});
