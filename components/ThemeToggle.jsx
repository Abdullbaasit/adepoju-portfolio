"use client";

import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "./icons/TechIcons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle light / dark mode"
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-oliveSoft bg-white text-ink transition hover:-translate-y-0.5 hover:border-oliveDeep dark:border-darkLine dark:bg-darkSurface dark:text-darkText dark:hover:border-darkOliveDeep"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
