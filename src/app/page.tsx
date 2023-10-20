"use client";

import { useState } from "react";

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
  const [oHeaderProps, setOHeaderProps] = useState<IOHeader>({
    avatar: { src: "/images/avatar.jpeg", alt: "" },
    handleToggleTheme: themeToggler,
  });

  // Template: BriefDescription
  const [tBriefDescriptionProps, setTBriefDescriptionProps] =
    useState<ITBriefDescription>({
      avatarBody: oHeaderProps.avatar,
      textName: "Matheus Gomes",
      linkedinUrl: "https://www.linkedin.com/in/matheusgomes/",
      githubUrl: "https://github.com/matheusgrodrigues",
      handleDownloadCV: () => null,
      handleSubmitContactForm: () => null,
    });

  // Organism: FooterProps
  const [oFooterProps, setOFooterProps] = useState<IOFooter>({
    siteUrl: "https://matheusgomesdev.com.br",
    githubUrl: tBriefDescriptionProps.githubUrl,
    linkedinUrl: tBriefDescriptionProps.linkedinUrl,
  });

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
