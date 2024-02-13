import {
  Locale,
  format as formatDate,
  formatDistance,
  formatRelative,
  isDate,
} from "date-fns";
import { enUS, nl } from "date-fns/locale";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const locales = { en: enUS, nl } as Record<string, Locale>;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      format: (value, format, lng) => {
        if (isDate(value) && lng && lng in locales && format) {
          const locale = locales[lng];

          if (format === "short") return formatDate(value, "P", { locale });
          if (format === "long") return formatDate(value, "PPPP", { locale });
          if (format === "relative")
            return formatRelative(value, new Date(), { locale });
          if (format === "ago")
            return formatDistance(value, new Date(), {
              locale,
              addSuffix: true,
            });

          return formatDate(value, format, { locale });
        }

        return value;
      },
    },
  });
