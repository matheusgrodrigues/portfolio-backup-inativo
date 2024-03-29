import { DefaultTheme } from 'styled-components/dist/types';

export type BorderRadiusName = '8px';
export type FontWeightName = 'semibold' | 'regular' | 'medium';
export type BreakpointName = 'sm' | 'md' | 'lg' | 'xl';
export type FontSizeName = 'sm' | 'md' | 'lg' | 'xl';

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

export type ColorName =
    | 'transparent'
    | 'white'
    | 'black'
    | 'gray50'
    | 'gray500'
    | 'gray900'
    | 'primary500'
    | 'primary600'
    | 'gradient_primary600';

export type ThemeName = 'light' | 'dark';

const ref = {
    borderRadius: {
        radius_8: '8px',
    },
    breakpoint: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    fontFamily: {
        inter: 'Inter',
    },
    fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
    },
    fontSize: {
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '48px',
    },
    spacing: {
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
    },
    colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        gray50: '#f9fafb',
        gray500: '#667085',
        gray900: '#101828',
        primary500: '#9e77ed',
        primary600: '#7f56d9',
        gradient_primary600: `linear-gradient(90deg, #7f56d9 0%, #9e77ed 100%);`,
    },
};

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeName;
        ref: {
            borderRadius: typeof ref.borderRadius;
            breakpoint: typeof ref.breakpoint;
            fontFamily: typeof ref.fontFamily;
            fontWeight: typeof ref.fontWeight;
            fontSize: typeof ref.fontSize;
            spacing: typeof ref.spacing;
            colors: typeof ref.colors;
        };
    }
}

export const lineHeight = (px: string) => {
    const pxToNumber = Number(px.replace('px', ''));

    return `${pxToNumber * 1.5}px`;
};

export const screen = (bp: BreakpointName, content: string) =>
    `@media screen and (min-width: ${ref.breakpoint[bp]}) {
    ${content}
  }`;

export const themeLight: DefaultTheme = {
    name: 'light',
    ref,
};

export const darkTheme: DefaultTheme = {
    name: 'dark',
    ref,
};
