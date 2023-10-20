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

  type TSpacing = {
    sp4: string;
    sp8: string;
    sp12: string;
    sp16: string;
    sp20: string;
    sp24: string;
    sp32: string;
    sp40: string;
    sp48: string;
    sp64: string;
    sp80: string;
    sp96: string;
    sp128: string;
    sp160: string;
    sp192: string;
    sp224: string;
    sp256: string;
  };

  type TBreakpoint = {
    bp_sm: string;
    bp_md: string;
    bp_lg: string;
    bp_xl: string;
  };

  export interface DefaultTheme {
    ref: {
      colors: TColors;
      font: TFont;
      spacing: TSpacing;
      bp: TBreakpoint;
    };
  }
}
