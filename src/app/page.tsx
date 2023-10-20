"use client";

import { useContext } from "react";

// Theme
import { darkTheme, themeLight } from "../theme";

// Helpers
import { ThemeProvider } from "../theme/helpers/theme-provider";
import { DataContext } from "@/context/data-context";

// Hooks
import { useDarkMode } from "../hooks/useDarkMode";

// Page
import { PBriefDescription } from "../components/pages/p-briefing-description/p-brief-description";

const Home = () => {
  const { theme, themeToggler } = useDarkMode();

  const themeMode = theme === "light" ? themeLight : darkTheme;

  const context = useContext(DataContext);

  return (
    <ThemeProvider theme={themeMode}>
      <button onClick={themeToggler}>Switch Theme</button>

      <DataContext.Provider value={{ nome: "Matheus" }}>
        <p>{context.nome}</p>
      </DataContext.Provider>
      <PBriefDescription />
    </ThemeProvider>
  );
};

export default Home;
