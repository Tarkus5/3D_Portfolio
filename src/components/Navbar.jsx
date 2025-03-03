import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector.jsx";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">AR</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium justify-center items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("Navbar.about")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          {t("Navbar.projects")}
        </NavLink>
        <LanguageSelector />
      </nav>
    </header>
  );
};
export default Navbar;
