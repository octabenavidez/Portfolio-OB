import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./lang/en";
import es from "./lang/es";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "es",
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });
