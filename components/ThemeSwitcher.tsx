'use client'
import { useTheme } from "../context/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-2 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg"
    >
      {theme === "dark" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-900" />}
    </button>
  );
};

export default ThemeSwitcher;
