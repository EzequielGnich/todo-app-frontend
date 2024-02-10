import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DateTime } from "luxon";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      format: (value, format, lng) => {
        console.log(value, format, lng);
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
      escapeValue: false,
    },
  });
