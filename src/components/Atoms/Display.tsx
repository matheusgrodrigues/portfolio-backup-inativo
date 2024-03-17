import { ReactNode } from "react";

import styled from "styled-components";

import { ThemeProvider } from "@/src/config/theme/helpers/theme-provider";
import { themeLight } from "@/src/config/theme";

type DisplayColor = "gradient" | "gray900";

interface DisplayProps {
   fontWeight: "semibold";
   children: ReactNode;
   $variant: "lg";
   color: DisplayColor;
}

const setDisplayLgStyles = (fontSize: string) => `
letter-spacing: -0.96px;
font-size: ${fontSize};
`;

const DisplayStyled = styled("h1").attrs<DisplayProps>((props) => ({}))`
   ${(props) => {
      const { fs_displayLg } = props.theme.ref.font;

      switch (props.$variant) {
         case "lg":
            return setDisplayLgStyles(fs_displayLg);
            break;
      }
   }};

   ${(props) => {
      const { color_gradient_primary600, color_primary600, color_gray900 } = props.theme.ref.colors;

      switch (props.color) {
         case "gradient":
            return `color: ${color_gradient_primary600}   `;
            break;
         case "gray900":
            return `
       color: ${color_gray900}
     `;
            break;
      }
   }};
`;

export const Display = ({ fontWeight, $variant, children, color }: DisplayProps) => {
   return (
      <>
         {$variant === "lg" && (
            <ThemeProvider theme={themeLight}>
               <DisplayStyled data-testid="a-display" fontWeight={fontWeight} $variant={$variant} color={color}>
                  {children}
               </DisplayStyled>
            </ThemeProvider>
         )}
      </>
   );
};
