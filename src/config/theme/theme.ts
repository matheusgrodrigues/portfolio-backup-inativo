const fontFamily = {
    fontFamily_inter: 'Inter',
};

export type FontSizeName = 'fontSize_textSm' | 'fontSize_textMd' | 'fontSize_textXl' | 'fontSize_displayLg';

const fontSize = {
    fontSize_textSm: '14px',
    fontSize_textMd: '16px',
    fontSize_textXl: '20px',
    fontSize_displayLg: '48px',
};

export type FontWeightName = 'fontWeight_semibold' | 'fontWeight_regular' | 'fontWeight_medium';

const fontWeight = {
    fontWeight_regular: '400',
    fontWeight_medium: '500',
    fontWeight_semibold: '600',
};

export type ColorName =
    | 'color_gradient_primary600'
    | 'color_primary500'
    | 'color_primary600'
    | 'color_gray500'
    | 'color_gray900'
    | 'color_gray50'
    | 'color_white'
    | 'color_black'
    | 'color_transparent';

const colors = {
    color_gradient_primary600: `linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);`,
    color_primary500: '#9e77ed',
    color_primary600: '#7f56d9',
    color_gray500: '#667085',
    color_gray900: '#101828',
    color_gray50: '#f9fafb',
    color_white: '#ffffff',
    color_black: '#000000',
    color_transparent: 'transparent',
};

export type SpacingName =
    | 'spacing_4'
    | 'spacing_8'
    | 'spacing_12'
    | 'spacing_16'
    | 'spacing_20'
    | 'spacing_24'
    | 'spacing_32'
    | 'spacing_40'
    | 'spacing_48'
    | 'spacing_64'
    | 'spacing_80'
    | 'spacing_96'
    | 'spacing_128'
    | 'spacing_160'
    | 'spacing_192'
    | 'spacing_224'
    | 'spacing_256';

const spacing = {
    spacing_4: '4px',
    spacing_8: '8px',
    spacing_12: '12px',
    spacing_16: '16px',
    spacing_20: '20px',
    spacing_24: '24px',
    spacing_32: '32px',
    spacing_40: '40px',
    spacing_48: '48px',
    spacing_64: '64px',
    spacing_80: '80px',
    spacing_96: '96px',
    spacing_128: '128px',
    spacing_160: '160px',
    spacing_192: '192px',
    spacing_224: '224px',
    spacing_256: '256px',
};

type BreakpointName = 'breakpoint_sm' | 'breakpoint_md' | 'breakpoint_lg' | 'breakpoint_xl';

const breakpoint = {
    breakpoint_sm: '640px',
    breakpoint_md: '768px',
    breakpoint_lg: '1024px',
    breakpoint_xl: '1280px',
};

export const bpHelper = (bp: BreakpointName, content: string) =>
    `@media screen and (min-width: ${breakpoint[bp]}) {
    ${content}
  }`;

export type ThemeName = 'light' | 'dark';

type Theme = {
    name: ThemeName;
    ref: {
        breakpoint: typeof breakpoint;
        fontFamily: typeof fontFamily;
        fontWeight: typeof fontWeight;
        fontSize: typeof fontSize;
        spacing: typeof spacing;
        colors: typeof colors;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

export const themeLight = {
    name: 'light',
    ref: { breakpoint, fontFamily, fontWeight, fontSize, spacing, colors },
};

export const darkTheme = {
    name: 'dark',
    ref: { breakpoint, fontFamily, fontWeight, fontSize, spacing, colors },
};
