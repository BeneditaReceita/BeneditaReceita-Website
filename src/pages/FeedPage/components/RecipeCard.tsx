import { Link } from "react-router-dom";
import ImageContainer from "./imageContainer";
import {
  RecipeContainer,
  SuperiorDiv,
  TitleCard,
  InferiorDiv,
  Spacing,
} from "./styles";

type dataProps = {
  Description: string;
  createdAt: "2023-06-11T20:40:17.847Z";
  id: number;
  img: string;
  name: string;
  user?: unknown;
};

export default function RecipeCard(prop: dataProps) {
  return (
    <>
      <RecipeContainer>
        <SuperiorDiv>
          <ImageContainer
            to={`/receita/${prop.id}`}
            size={"100%"}
            image={`${prop.img}`}
          />

          <TitleCard>
            <Link style={{ color: "black" }} to={`/receita/${prop.id}`}>
              {prop.name}
            </Link>
          </TitleCard>
        </SuperiorDiv>
        <Spacing />
        <InferiorDiv>{prop.Description}</InferiorDiv>
      </RecipeContainer>
    </>
  );
}
