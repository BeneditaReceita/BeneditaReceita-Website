import styled, { createGlobalStyle } from "styled-components";
import FeedPage from "./FeedPage";
import useRecipeList from "../hooks/api/useRecipes";
import { useState } from "react";

export default function Landing() {
  const [recipeList, setRecipeList] = useState([]);
  const { recipes } = useRecipeList();

  if (!recipeList[0]) {
    if (recipes) {
      const { data } = recipes;
      setRecipeList(data);
    } else {
      return <>loading</>;
    }
  }

  return (
    <>
      <FeedContainer></FeedContainer>
      {recipeList.map((e) => (
        <FeedPage
          key={e.id}
          Description={e.Description}
          createdAt={e.createdAt}
          id={e.id}
          img={e.image}
          name={e.name}
        />
      ))}

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
