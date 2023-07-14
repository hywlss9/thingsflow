import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 700px;
  height: calc(100vh - 45px);
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 8px 0;
`;

export const Item = styled.li`
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  list-style: none;
`;
