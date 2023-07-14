import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import getIssues from "../../api/getIssues";
import type { IssuesResponse } from "../../api/getIssues";

import Footer from "../../components/Footer";

import * as S from "./styled";

export default function List() {
  const [issues, setIssues] = useState<
    Array<IssuesResponse | "start" | "banner">
  >([]);
  const [page, setPage] = useState<number>(0);

  const startLoad = () => {
    setPage((prevPage) => (prevPage ? prevPage + 1 : 1));
    setIssues((prevState) => [...prevState, "start"]);
  };

  const issuesLoad = async () => {
    const response = await getIssues({ page });
    if (!response) return;
    setIssues((prevState) => [...prevState, ...response, "banner"]);
  };

  const issuesReset = () => {
    setPage(0);
    setIssues([]);
  };

  useEffect(() => {
    if (!page) return;
    issuesLoad();
  }, [page]);

  return (
    <S.Container>
      <S.List>
        {issues.map((issue, index) => {
          if (issue === "start") {
            return (
              <S.NotifyIssue key={index}>Issue 10개 로딩 시작</S.NotifyIssue>
            );
          }
          if (issue === "banner") {
            return (
              <S.Banner key={index}>
                <a href="https://thingsflow.com/ko/home" target="__blank">
                  <img
                    src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
                    alt="광고"
                  />
                </a>
              </S.Banner>
            );
          }

          const {
            id,
            number,
            title,
            created_at,
            comments,
            body,
            user: { html_url, avatar_url, login },
          } = issue;

          return (
            <S.Item key={id}>
              <Link
                to="/detail"
                state={{
                  number,
                  title,
                  created_at,
                  comments,
                  body,
                  html_url,
                  avatar_url,
                  login,
                }}
              >
                <S.Content>
                  <S.InfoBox>
                    <S.Title>
                      #{number} <span>{title}</span>
                    </S.Title>
                    <S.Info>
                      작성자:{login}, 작성일: {created_at}
                    </S.Info>
                  </S.InfoBox>
                  <S.CommentBox>코멘트: {comments}</S.CommentBox>
                </S.Content>
              </Link>
            </S.Item>
          );
        })}
      </S.List>
      <Footer load={startLoad} reset={issuesReset} />
    </S.Container>
  );
}
