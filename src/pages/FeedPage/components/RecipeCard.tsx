import { Link } from "react-router-dom";
import ImageContainer from "./imageContainer";
import {
  RecipeContainer,
  SuperiorDiv,
  TitleCard,
  InferiorDiv,
  Spacing,
} from "./styles";

export default function RecipeCard() {
  return (
    <>
      <RecipeContainer>
        <SuperiorDiv>
          <ImageContainer
            to={"/receita/"}
            size={"100%"}
            image="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg"
          />

          <TitleCard>
            <Link style={{ color: "black" }} to={"/receita/"}>
              Pão caseiro delicioso
            </Link>
          </TitleCard>
        </SuperiorDiv>
        <Spacing />
        <InferiorDiv>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        </InferiorDiv>
      </RecipeContainer>
    </>
  );
}
