import { colors, font, spacing, bp } from './ref';

export type ThemeName = 'light' | 'dark';

type Theme = {
    name: ThemeName;
    ref: {
        colors: typeof colors;
        font: typeof font;
        spacing: typeof spacing;
        bp: typeof bp;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

export const themeLight = {
    name: 'light',
    ref: { colors, font, spacing, bp },
};

export const darkTheme = {
    name: 'dark',
    ref: { colors, font, spacing, bp },
};
