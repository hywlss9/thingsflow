import styled from "styled-components";

import Button from "../Button";

interface FooterProps {
  load: () => void;
  reset: () => void;
}

export default function Footer({ load, reset }: FooterProps) {
  return (
    <StyledFooter>
      <Button onClick={load}>load</Button>
      <Button onClick={reset}>초기화</Button>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 4px 16px;
  border-top: 1px solid #000;
`;
