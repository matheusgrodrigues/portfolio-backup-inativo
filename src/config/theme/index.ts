import { colors, font, spacing, bp } from './ref'

export const bpHelper = (bp: string, content: string) =>
    `
  @media screen and (min-width: ${bp}) {
    ${content}
  }
  `

export const themeLight = {
    name: 'light',
    ref: { colors, font, spacing, bp },
}

export const darkTheme = {
    name: 'dark',
    ref: { colors, font, spacing, bp },
}
