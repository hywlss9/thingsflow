import { useState, useEffect } from "react";

import getIssues from "../../api/getIssues";
import type { IssuesResponse } from "../../api/getIssues";

import Footer from "../../components/Footer";

import * as S from "./styled";
import { Link } from "react-router-dom";

export default function List() {
  const [issues, setIssues] = useState<Array<IssuesResponse | null>>([]);
  const [page, setPage] = useState<number>(0);

  const handlePage = () => setPage((prevPage) => (prevPage ? prevPage + 1 : 1));

  const issuesLoad = async () => {
    const response = await getIssues({ page });
    if (!response) return;
    setIssues([...response, null]);
  };

  const issuesReset = () => {};

  useEffect(() => {
    if (!page) return;
    issuesLoad();
  }, [page]);

  return (
    <S.Container>
      <S.List>
        {issues.map((issue, index) => {
          if (!issue)
            return (
              <a href="https://thingsflow.com/ko/home" target="__blank">
                <img
                  key={index}
                  src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
                  alt="광고"
                />
              </a>
            );

          const {
            id,
            number,
            title,
            user: { html_url },
            created_at,
            comments,
          } = issue;

          return (
            <S.Item key={id}>
              <Link to={`/detail/${id}`}>
                <p>{number}</p>
                <p>{title}</p>
                <p>{html_url}</p>
                <p>{created_at}</p>
                <p>{comments}</p>
              </Link>
            </S.Item>
          );
        })}
      </S.List>
      <Footer load={handlePage} reset={issuesReset} />
    </S.Container>
  );
}
