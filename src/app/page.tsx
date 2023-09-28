"use client";

// Theme
import { darkTheme, themeLight } from "../theme";

// Helpers
import { ThemeProvider } from "../theme/helpers/theme-provider";

// Hooks
import { useDarkMode } from "../theme/helpers/useDarkMode";

// Page
import PageHome from "../components/pages/home";

const Home = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? themeLight : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <button onClick={themeToggler}>Switch Theme</button>
      <PageHome />
    </ThemeProvider>
  );
};

export default Home;
