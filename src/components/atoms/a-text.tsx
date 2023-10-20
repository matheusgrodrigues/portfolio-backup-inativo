import { ReactNode } from "react";
import styled from "styled-components";

// Theme
import { themeLight } from "@/src/theme";
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";

interface IAText {
  $variant: "sm" | "md" | "lg" | "xl";
  fontWeight: "regular" | "semibold";
  color: "white" | "black" | "gradient" | "gray50" | "gray500" | "gray900";
  children: ReactNode;
}

const ATextStyled = styled("p").attrs<IAText>((props) => ({}))`
  ${(props) => {
    const { fw_regular, fw_semibold } = props.theme.ref.font;

    switch (props.fontWeight) {
      case "regular":
        return `font-weight: ${fw_regular}`;
        break;
      case "semibold":
        return `font-weight: ${fw_semibold}`;
        break;
      default:
        return `font-weight: initial`;
        break;
    }
  }}

  ${(props) => {
    const { fs_textSm, fs_textMd, fs_displayLg, fs_textXl } =
      props.theme.ref.font;

    switch (props.$variant) {
      case "lg":
        return `font-size: ${fs_displayLg};
        letter-spacing: -0.96px;`;
        break;
      case "xl":
        return `font-size: ${fs_textXl}`;
        break;
      case "md":
        return `font-size: ${fs_textMd}`;
        break;
      case "sm":
        return `font-size: ${fs_textSm}`;
        break;
    }
  }};

  ${(props) => {
    const {
      color_primary50,
      color_primary500,
      color_primary600,
      color_primary900,
      white,
      black,
    } = props.theme.ref.colors;

    switch (props.color) {
      case "gradient":
        return `color: ${color_primary600}`;
        break;
      case "gray50":
        return `color: ${color_primary50}`;
      case "gray500":
        return `color: ${color_primary500}`;
        break;
      case "gray900":
        return `color: ${color_primary900}`;
        break;
      case "black":
        return `color: ${white}`;
      default:
        return `color: ${black}`;
    }
  }};
`;

export const AText = ({ $variant, fontWeight, color, children }: IAText) => {
  return (
    <ThemeProvider theme={themeLight}>
      <ATextStyled
        data-testid="a-text"
        $variant={$variant}
        fontWeight={fontWeight}
        color={color}
      >
        {children}
      </ATextStyled>
    </ThemeProvider>
  );
};
