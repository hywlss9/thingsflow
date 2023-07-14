import Button from "../Button";

import * as S from "./styled";

interface FooterProps {
  load: () => void;
  reset: () => void;
}

export default function Footer({ load, reset }: FooterProps) {
  return (
    <S.Footer>
      <Button onClick={load}>load</Button>
      <Button onClick={reset}>초기화</Button>
    </S.Footer>
  );
}
