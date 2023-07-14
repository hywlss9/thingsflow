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
  > li {
    list-style: none;
  }
`;

export const Item = styled.li`
  border: 1px solid #eee;
  border-radius: 4px;
  > a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: #000;
  }
`;

export const NotifyIssue = styled.li`
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Banner = styled.li``;
