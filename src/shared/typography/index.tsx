import { CSSProperties } from "react";

import { ColorVariants, TypographyProps } from "./models";
import * as S from "./styled";

const setColors = (color: ColorVariants) => {
  switch (color) {
    case ColorVariants.PRIMARY:
      return "rgba(252, 70, 107, 1)";
    case ColorVariants.SECONDARY:
      return "rgba(63, 94, 251, 1)";
    case ColorVariants.TERTIARY:
      return "rgb(63, 163, 251)";
    case ColorVariants.WHITE:
      return "rgb(255, 255, 255)";
    case ColorVariants.BLACK_07:
      return "rgba(0, 0, 0, 0.7)";
    case ColorVariants.BLACK_05:
      return "rgba(0, 0, 0, 0.5)";
    default:
      return "rgba(252, 70, 107, 1)";
  }
};

const Typography = ({
  tag = "p",
  children,
  color = ColorVariants.PRIMARY,
  ...props
}: TypographyProps & CSSProperties) => (
  <S.DynamicTypography
    tag={tag}
    style={{
      color: setColors(color),
      ...props,
    }}
  >
    {children}
  </S.DynamicTypography>
);

export default Typography;
