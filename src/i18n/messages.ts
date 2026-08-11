import tr from "../messages/tr.json";
import en from "../messages/en.json";
import type { Locale } from "./routing";

/**
 * Statically imported catalogs — ensures every namespace (including processPage)
 * is always present in the bundle. Avoids stale dynamic-import caches.
 */
export const messageCatalogs = {
  tr,
  en,
} as const satisfies Record<Locale, typeof tr>;

export type MessageCatalog = (typeof messageCatalogs)[Locale];

export function getMessagesForLocale(locale: Locale): MessageCatalog {
  const catalog = messageCatalogs[locale];
  if (!catalog) {
    throw new Error(`No message catalog registered for locale "${locale}"`);
  }
  if (!("processPage" in catalog)) {
    throw new Error(
      `Message catalog for "${locale}" is missing required namespace "processPage"`,
    );
  }
  return catalog;
}
