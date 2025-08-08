import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // Don't render any button/icon
};
