import { ReactNode } from "react";
import styled from "styled-components";

// Theme
import { themeLight } from "@/src/theme";
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";

interface IADisplay {
  $variant: "lg";
  fontWeight: "semibold";
  color: "gradient" | "gray900";
  children: ReactNode;
}

const Display = styled("h1").attrs<IADisplay>((props) => ({}))`
  ${(props) => {
    return (
      props.$variant === "lg" &&
      `
        font-size: ${props.theme.ref.font.font_size_displayLg};
        letter-spacing: -0.96px;
      `
    );
  }};

  ${(props) => {
    return props.color === "gradient"
      ? `
        color: ${props.theme.ref.colors.color_primary600}
      `
      : props.color === "gray900"
      ? props.theme.ref.colors.color_primary600
      : null;
  }};
`;

export const ADisplay = ({
  $variant,
  fontWeight,
  color,
  children,
}: IADisplay) => {
  return (
    <>
      {$variant === "lg" && (
        <ThemeProvider theme={themeLight}>
          <Display
            data-testid="a-display"
            $variant={$variant}
            fontWeight={fontWeight}
            color={color}
          >
            {children}
          </Display>
        </ThemeProvider>
      )}
    </>
  );
};
