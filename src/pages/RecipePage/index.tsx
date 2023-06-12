import styled from "styled-components";

import Banner from "./components/Banner";
import ImageContainer from "../FeedPage/components/imageContainer";

export default function RecipePage() {
  return (
    <>
      <Container>
        <RecipeContainer>
          <RecipeBlock>
            <HeadDiv>
              <img
                src="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg"
                alt=""
              />
              <Title>Pao caseiro gostoso Pao caseiro gostoso</Title>
            </HeadDiv>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </RecipeBlock>
        </RecipeContainer>
        <Banner />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 120px;
  z-index: 1;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
`;

const RecipeBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 80%;
  background-color: #faf6d0;

  padding: 50px;
  box-sizing: border-box;
  flex-direction: column;
`;

const RecipeContainer = styled.div`
  width: 100vw;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 120px;
  color: black;
  background-image: linear-gradient(to bottom, #ba541450, #ba5414);
  z-index: 1;
  height: 100vh;

  font-family: "Ubuntu", sans-serif;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffa600;
    border-radius: 15px;
    min-height: 30px;
    overflow: auto;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: height 0.2s ease-in-out;
    padding: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #ff990040;
    border: 0px solid transparent;
    box-shadow: none;
  }
`;

const Title = styled.span`
  font-size: 50px;
  width: 50%;
  position: relative;

  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  word-wrap: break-word;
`;

const HeadDiv = styled.div`
  display: flex;
  img {
    max-height: 250px;
    position: relative;
    width: 50%;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3),
      -3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;
