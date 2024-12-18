import { color, font } from "@/styles";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active: boolean;
}

const UnderlineButton = ({ children, onClick, active }: Props) => {
  return (
    <StyledUnderlineButton onClick={onClick} $active={active}>
      <HoverStateBox>{children}</HoverStateBox>
    </StyledUnderlineButton>
  );
};

export default UnderlineButton;

const HoverStateBox = styled.div`
  ${font.Heading1}
  padding: 8px 12px;
  border-radius: 6px;
`;

const StyledUnderlineButton = styled.button<{ $active: boolean }>`
  padding: 0px 4px;
  height: 60px;
  position: relative;
  background-color: ${color.sinabroBlue};
  color: ${color.gray900};
  border-radius: 0;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${color.sinabroBlue};
    transform: scaleX(0);
  }
  &:hover ${HoverStateBox} {
    background-color: ${color.gray100};
  }
  ${(props) =>
    props.$active &&
    css`
      &::before {
        transform: scaleX(1);
      }
    `}
`;
