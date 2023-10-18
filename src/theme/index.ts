import { colors, colorsDark, font } from "./ref";

export const themeLight: Theme = {
  ref: { colors, font },
};

export const darkTheme: Theme = {
  ...themeLight,
  ref: { ...themeLight.ref, colors: { ...colorsDark } },
};
