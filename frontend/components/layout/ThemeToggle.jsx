"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}