import { colors, colorsDark, font } from "./ref";

export const themeLight = {
  ref: { colors, font },
};

export const darkTheme = {
  ...themeLight,
  ref: { ...themeLight.ref, colors: { ...colorsDark } },
};
