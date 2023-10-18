export const color_white = "#ffffff";
export const color_black = "#000000";

// Gray
export const color_gray50 = "#f9fafb";
export const color_gray500 = "#667085";
export const color_gray900 = "#101828";

// Primary
export const color_primary500 = "#9e77ed";
export const color_primary600 = "#7f56d9";

// Gradient Primary 600 -> 500 (90deg)
export const color_gradient_primary600 = `${color_primary600}, linear-gradient(90deg, ${color_primary600} 0%, ${color_primary500} 100%));`;

export const colors = {
  color_white,
  color_black,
  color_gray50,
  color_gray500,
  color_gray900,
  color_primary500,
  color_primary600,
  color_gradient_primary600,
};

export const colorsDark = {
  color_white,
  color_black,
  color_gray50,
  color_gray500: color_primary600,
  color_gray900,
  color_primary500,
  color_primary600,
  color_gradient_primary600,
};
