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
    const { fs_displayLg } = props.theme.ref.font;

    switch (props.$variant) {
      case "lg":
        return `
        font-size: ${fs_displayLg};
        letter-spacing: -0.96px;
      `;
        break;
    }
  }};

  ${(props) => {
    const { color_primary600, color_gray900, color_gradient_primary600 } =
      props.theme.ref.colors;

    switch (props.color) {
      case "gradient":
        return `
     color: ${color_gradient_primary600}
   `;
        break;
      case "gray900":
        return `
       color: ${color_gray900}
     `;
        break;
    }
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
