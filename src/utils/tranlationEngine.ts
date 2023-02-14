import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "../translations/global_en.json";
import global_jp from "../translations/global_jp.json";
import global_es from "../translations/global_es.json";

const availableLangagues = ["en", "es", "jp"];
const defaultLan = availableLangagues.some(
  (element) => element === navigator.language
)
  ? navigator.language
  : "en";

i18next.use(initReactI18next).init({
  lng: defaultLan,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    ja: {
      global: global_jp,
    },
  },
});

export default i18next;
