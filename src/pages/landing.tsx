import styled, { createGlobalStyle } from "styled-components";
import FeedPage from "./FeedPage";

export default function Landing() {
  return (
    <>
      <FeedContainer></FeedContainer>
      <FeedPage></FeedPage>
      <FeedPage></FeedPage>
      <FeedPage></FeedPage>
      <GlobalStyles />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #dbdbdb;
    z-index: 0;
    overflow-y: scroll;
    padding-bottom: 100px;
  }

`;

const FeedContainer = styled.div`
  top: 40px;
  position: relative;
  width: 85vw;
  display: flex;
  background-color: bisque;
`;
