const fontFamily_inter = 'Inter';

const fontWeight_regular = '400';
const fontWeight_medium = '500';
const fontWeight_semibold = '600';

const spacing_4 = '4px';
const spacing_8 = '8px';
const spacing_12 = '12px';
const spacing_16 = '16px';
const spacing_20 = '20px';
const spacing_24 = '24px';
const spacing_32 = '32px';
const spacing_40 = '40px';
const spacing_48 = '48px';
const spacing_64 = '64px';
const spacing_80 = '80px';
const spacing_96 = '96px';
const spacing_128 = '128px';
const spacing_160 = '160px';
const spacing_192 = '192px';
const spacing_224 = '224px';
const spacing_256 = '256px';

const breakpoint = {
    breakpoint_sm: '640px',
    breakpoint_md: '768px',
    breakpoint_lg: '1024px',
    breakpoint_xl: '1280px',
};

type BreakpointName = 'breakpoint_sm' | 'breakpoint_md' | 'breakpoint_lg' | 'breakpoint_xl';

export const bpHelper = (bp: BreakpointName, content: string) =>
    `@media screen and (min-width: ${breakpoint[bp]}) {
    ${content}
  }`;

const fontFamily = {
    fontFamily_inter,
};

export type FontSizeName = '14px' | '16px' | '20px' | '48px';

interface FontSize {
    [key: string]: FontSizeName;
}

const fontSize: FontSize = {
    fontSize_textSm: '14px',
    fontSize_textMd: '16px',
    fontSize_textXl: '20px',
    fontSize_displayLg: '48px',
};

export type FontWeightName = 'fontWeight_semibold' | 'fontWeight_regular' | 'fontWeight_medium';

const fontWeight = {
    fontWeight_semibold,
    fontWeight_regular,
    fontWeight_medium,
};

export type ColorName =
    | 'color_gradient_primary600'
    | 'color_primary500'
    | 'color_primary600'
    | 'color_gray500'
    | 'color_gray900'
    | 'color_gray50'
    | 'color_white'
    | 'color_black';

interface Color {
    [key: string]: ColorName;
}

const colors: Color = {
    color_gradient_primary600: `linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);`,
    color_primary500: '#9e77ed',
    color_primary600: '#7f56d9',
    color_gray500: '#667085',
    color_gray900: '#101828',
    color_gray50: '#f9fafb',
    color_white: '#ffffff',
    color_black: '#000000',
};

const spacing = {
    spacing_4,
    spacing_8,
    spacing_12,
    spacing_16,
    spacing_20,
    spacing_24,
    spacing_32,
    spacing_40,
    spacing_48,
    spacing_64,
    spacing_80,
    spacing_96,
    spacing_128,
    spacing_160,
    spacing_192,
    spacing_224,
    spacing_256,
};

export type ThemeName = 'light' | 'dark';

type Theme = {
    name: ThemeName;
    ref: {
        breakpoint: typeof breakpoint;
        spacing: typeof spacing;
        colors: typeof colors;
        fontFamily: typeof fontFamily;
        fontSize: typeof fontSize;
        fontWeight: typeof fontWeight;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

export const themeLight = {
    name: 'light',
    ref: { breakpoint, spacing, colors, font },
};

export const darkTheme = {
    name: 'dark',
    ref: { breakpoint, spacing, colors, font },
};
