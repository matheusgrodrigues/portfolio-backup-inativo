import { por_ref_colors, por_ref_colorsDark } from "./ref";

const theme = {
  ref: { por_ref_colors },
  sys: {},
  comp: {},
};

export const darkTheme = {
  ...theme,
  ref: { ...theme.ref, por_ref_colors: { ...por_ref_colorsDark } },
};
