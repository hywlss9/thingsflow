import type { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 2px 4px;
  border: 1px solid #666;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  font-size: 16px;
`;
