import { CSSProperties, createElement } from "react";

import styled from "styled-components";
import { TypographyProps } from "./models";

export const DynamicTypography = styled(
  ({ tag, children, ...props }: TypographyProps & CSSProperties) => {
    if (!tag || !children) return null;

    return createElement(tag, props, children);
  }
)`
  /* your default css */
`;
