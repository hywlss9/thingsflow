import type { ButtonHTMLAttributes } from "react";

import * as S from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return <S.Button {...props}>{props.children}</S.Button>;
}
