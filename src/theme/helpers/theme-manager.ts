import { DefaultTheme } from "styled-components";

export const getRefColor = (theme: DefaultTheme, color: string) => {
  return theme.ref.por_ref_colors[`${color}`];
};
