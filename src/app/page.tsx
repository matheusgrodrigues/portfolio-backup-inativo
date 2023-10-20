"use client";

// Theme
import { darkTheme, themeLight } from "../theme";

// Helpers
import { ThemeProvider } from "../theme/helpers/theme-provider";

// Hooks
import { useDarkMode } from "../hooks/useDarkMode";

// Page
import { PBriefDescription } from "../components/pages/p-briefing-description/p-brief-description";

// Interfaces
import { IOHeader } from "../components/organisms/o-header";
import { ITBriefDescription } from "../components/templates/t-briefing-description";
import { IOFooter } from "../components/organisms/o-footer";

const Home = () => {
  const { theme, themeToggler } = useDarkMode();

  // Organism: HeaderProps
  const oHeaderProps: IOHeader = {
    avatar: { src: "/images/avatar.jpeg", alt: "" },
    handleToggleTheme: themeToggler,
  };

  // Template: BriefDescription
  const tBriefDescriptionProps: ITBriefDescription = {
    avatarBody: oHeaderProps.avatar,
    textName: "Matheus Gomes",
    linkedinUrl: "https://www.linkedin.com/in/matheusgomes/",
    githubUrl: "https://github.com/matheusgrodrigues",
    handleDownloadCV: () => null,
    handleSubmitContactForm: () => null,
  };

  // Organism: FooterProps
  const oFooterProps: IOFooter = {
    siteUrl: "https://matheusgomesdev.com.br",
    githubUrl: tBriefDescriptionProps.githubUrl,
    linkedinUrl: tBriefDescriptionProps.linkedinUrl,
  };

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : darkTheme}>
      <PBriefDescription
        oHeaderProps={oHeaderProps}
        tBriefDescriptionProps={tBriefDescriptionProps}
        oFooterProps={oFooterProps}
      />
    </ThemeProvider>
  );
};

export default Home;
