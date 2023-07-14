import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 45px);
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #666;
`;

export const ProfileBox = styled.div`
  flex-shrink: 0;
  width: 45px;
  height: 45px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cetner;
`;

export const Title = styled.strong``;

export const Info = styled.span``;

export const CommentBox = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const Content = styled.div`
  padding: 16px;
`;
