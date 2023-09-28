"use client";

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  function themeToggler() {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return {theme, themeToggler};
};
