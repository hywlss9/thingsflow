import getIssues from "../../api/getIssues";

import Footer from "../../components/Footer";

import * as S from "./styled";

export default function List() {
  const issuesLoad = async () => {
    const response = await getIssues();
  };

  const issuesReset = () => {};

  return (
    <S.Container>
      <ul></ul>
      <Footer load={issuesLoad} reset={issuesReset} />
    </S.Container>
  );
}
