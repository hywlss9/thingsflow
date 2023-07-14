import { useLocation } from "react-router-dom";

import { marked } from "marked";

import * as S from "./styled";

export default function Detail() {
  const navigate = useLocation();

  const {
    number,
    title,
    created_at,
    comments,
    body,
    html_url,
    avatar_url,
    login,
  } = navigate.state;

  return (
    <S.Container>
      <S.Header>
        <S.ProfileBox>
          <S.ProfileImg src={avatar_url} alt="profile_img" />
        </S.ProfileBox>
        <S.InfoBox>
          <S.Title>
            #{number} {title}
          </S.Title>
          <p>
            <S.Info>
              작성자: {login}, 작성일: {created_at}
            </S.Info>
          </p>
        </S.InfoBox>
        <S.CommentBox>코멘트: {comments}</S.CommentBox>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{ __html: marked.parse(body) }} />
    </S.Container>
  );
}
