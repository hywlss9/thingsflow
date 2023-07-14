import styled from "styled-components";

import Button from "../Button";

export default function Footer() {
  return (
    <StyledFooter>
      <Button>load</Button>
      <Button>초기화</Button>
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
