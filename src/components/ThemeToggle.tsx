import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check initial theme from localStorage or system preference
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return systemPreference ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="p-2 rounded-full border border-sand-200 dark:border-sand-800 text-sand-600 dark:text-sand-400 hover:bg-white dark:hover:bg-sand-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sand-400/50"
      aria-label="Toggle visual theme"
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
      )}
    </button>
  );
}
