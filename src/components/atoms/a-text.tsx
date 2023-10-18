import { ReactNode } from "react";
import styled from "styled-components";

// Theme
import { themeLight } from "@/src/theme";
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";

interface IAText {
  $variant: "lg";
  fontWeight: "semibold";
  color: "gradient" | "gray900";
  children: ReactNode;
}

const ATextStyled = styled("p").attrs<IAText>((props) => ({}))`
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

export const AText = ({ $variant, fontWeight, color, children }: IAText) => {
  return (
    <>
      {$variant === "lg" && (
        <ThemeProvider theme={themeLight}>
          <ATextStyled
            data-testid="a-display"
            $variant={$variant}
            fontWeight={fontWeight}
            color={color}
          >
            {children}
          </ATextStyled>
        </ThemeProvider>
      )}
    </>
  );
};
