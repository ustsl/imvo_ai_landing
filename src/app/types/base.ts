export const baseSizes = {
  S: "4px",
  M: "8px",
  L: "16px",
  XL: "24px",
} as const;

export type BaseSize = keyof typeof baseSizes;

export type baseLanguages = "en" | "ru" | "tr" | "de";
