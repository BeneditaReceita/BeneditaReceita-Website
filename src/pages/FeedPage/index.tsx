import styled from "styled-components";

export default function FeedPage() {
  return (
    <>
      <RecipeCard></RecipeCard>
    </>
  );
}

const RecipeCard = styled.div`
  height: 800px;
  width: 100%;
  top: 160px;
  margin-top: 60px;
  margin-bottom: 60px;

  background-color: white;
  z-index: 1;
  box-sizing: border-box;
`;
