import "styled-components";

declare module "styled-components" {
  type TColors = {
    color_white: string;
    color_black: string;
    color_gray50: string;
    color_gray500: string;
    color_gray900: string;
    color_primary500: string;
    color_primary600: string;
    color_gradient_primary600: string;
  };

  type TFont = {
    ff_inter: string;
    fw_regular: string;
    fw_medium: string;
    fw_semibold: string;
    fs_textSm: string;
    fs_textMd: string;
    fs_textXl: string;
    fs_displayLg: string;
  };

  export interface DefaultTheme {
    ref: {
      colors: TColors;
      font: TFont;
    };
  }
}
