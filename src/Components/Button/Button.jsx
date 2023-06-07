import React from "react";

import THEME from "src/Constants/theme.js";
import { styled } from "styled-components";

const Button = ({
  state = "primary",
  size = "large",
  disabled = false,
  children,
  onClick,
}) => {
  const background =
    state === "primary" ? THEME.COLORS.primary.main : "transparent";

  const buttonFont =
    size === "large" ? THEME.FONTS.body.P1 : THEME.FONTS.body.S1;

  return (
    <ButtonWrapper background={background} size={size} onClick={onClick}>
      <p
        style={{
          ...buttonFont,
          fontWeight: "bold",
          color: THEME.COLORS.content.main,
        }}
      >
        {children}
      </p>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  padding: ${(p) => (p.size === "large" ? "10px 18px" : "9px 16px")};
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${(p) => p.background};
`;
