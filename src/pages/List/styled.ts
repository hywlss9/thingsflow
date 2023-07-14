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
  display: flex;
  border: 1px solid #eee;
  border-radius: 4px;
  > a {
    display: block;
    width: 100%;
    padding: 8px;
    text-decoration: none;
    color: #000;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Info = styled.span``;

export const CommentBox = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

export const NotifyIssue = styled.li`
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const Banner = styled.li`
  img {
    max-width: 100%;
  }
`;
