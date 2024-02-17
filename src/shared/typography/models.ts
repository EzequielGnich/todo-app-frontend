import { CSSProperties, ReactNode } from "react";

export type TagVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export enum ColorVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
  WHITE = "WHITE",
  BLACK_07 = "BLACK_07",
  BLACK_05 = "BLACK_05",
}

export type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  style?: CSSProperties;
  color?: ColorVariants;
};
