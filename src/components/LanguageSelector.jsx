import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { language: "English", code: "en" },
  { language: "Italian", code: "it" },
];

const LanguageSelector = () => {
  // Set the initial language from i18next's detected or default language
  const [language, setLanguage] = useState(i18next.language);

  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage); // Update language in i18next
  };

  useEffect(() => {
    document.body.dir = i18n.dir(); //sets the body to ltr or rtl
  }, [i18n, i18n.language]);

  return (
    <select
      id="language"
      value={language}
      onChange={handleLanguageChange}
      className="w-12 h-10 rounded-lg bg-white items-center justify-center flex font-semibold shadow-md"
    >
      {languageOptions.map(({ language, code }, key) => (
        <option value={code} key={key}>
          {code.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;

//className="p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
//         dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-700 dark:focus:ring-opacity-50"
