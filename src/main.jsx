import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import en from "./locales/en/en.json";
import it from "./locales/it/it.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "auto",
  fallbackLng: "en",
  resources: {
    en: {
      global: en,
    },
    it: {
      global: it,
    },
  },
});

ReactDom.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
