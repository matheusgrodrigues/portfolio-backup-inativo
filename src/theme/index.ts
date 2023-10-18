import { colors, colorsDark } from "./ref";

export const themeLight: Theme = {
  ref: { colors }
};

export const darkTheme: Theme = {
  ...themeLight,
  ref: { ...themeLight.ref, colors: { ...colorsDark } },
};
