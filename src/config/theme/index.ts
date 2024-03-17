import { colors, colorsDark, font, spacing, bp } from './ref'

export const bpHelper = (bp: string, content: string) => {
    return `
  @media screen and (min-width: ${bp}) {
    ${content}
  }
  `
}

export const themeLight = {
    ref: { colors, font, spacing, bp },
}

export const darkTheme = {
    ...themeLight,
    ref: { ...themeLight.ref, colors: { ...colorsDark } },
}
