import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ka", "ru"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  try {
    const messages = (await import(`./messages/${locale}.json`)).default;

  

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      locale,
      messages: {},
    };
  }
});
