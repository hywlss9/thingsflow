import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import dayjs from "dayjs";

import getIssues from "../../api/getIssues";
import type { IssuesResponse } from "../../api/getIssues";

import Footer from "../../components/Footer";

import * as S from "./styled";

export default function List() {
  const [issues, setIssues] = useState<
    Array<IssuesResponse | "start" | "banner">
  >([]);
  const [page, setPage] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const startLoad = () => {
    if (isLast) {
      alert("마지막 페이지입니다.");
      return;
    }
    setPage((prevPage) => (prevPage ? prevPage + 1 : 1));
    setIssues((prevState) => [...prevState, "start"]);
  };

  const issuesLoad = async () => {
    const response = await getIssues({ page });
    if (!response) return;
    setIssues((prevState) => [...prevState, ...response, "banner"]);
    if (response.length < 10) setIsLast(true);
  };

  const issuesReset = () => {
    setPage(0);
    setIssues([]);
  };

  useEffect(() => {
    if (!page) return;
    issuesLoad();
  }, [page]);

  useEffect(() => {
    if (!listRef.current) return;
    const list = listRef.current;
    list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
  }, [issues]);

  return (
    <S.Container>
      <S.List ref={listRef}>
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
            user: { avatar_url, login },
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
                      작성자:{login}, 작성일:{" "}
                      {dayjs(created_at).format("YYYY-MM-DD HH:mm:ss")}
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
