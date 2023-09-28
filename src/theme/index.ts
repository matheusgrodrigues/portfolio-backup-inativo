import { por_ref_colors, por_ref_colorsDark } from "./ref";

export const themeLight: Theme = {
  ref: { por_ref_colors },
  sys: {},
  comp: {},
};

export const darkTheme: Theme = {
  ...themeLight,
  ref: { ...themeLight.ref, por_ref_colors: { ...por_ref_colorsDark } },
};
