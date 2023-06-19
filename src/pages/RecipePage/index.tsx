import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import {
  RecipeContainer,
  Container,
  RecipeBlock,
  HeadDiv,
  Title,
  RecipeBody,
  Description,
  Ingredients,
  HowTo,
  Spacer,
} from "./styles";
import { useRecipeById } from "../../hooks/api/useRecipes";
import { useState } from "react";
import IngredientsList from "./components/ingredients";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState(recipeObject);
  const { id } = useParams();
  const { recipe } = useRecipeById(id);

  if (!recipeData.id) {
    if (recipe) {
      const { data } = recipe;
      setRecipeData(data);
    } else {
      return <>loading</>;
    }
  }

  if (recipeData.id) {
    return (
      <>
        <Container>
          <RecipeContainer>
            <RecipeBlock>
              <HeadDiv>
                <img src={recipeData.img} alt="" />
                <Title>{recipeData.name}</Title>
              </HeadDiv>
              <RecipeBody>
                <Description>
                  <h2>Sobre a receita:</h2>
                  {recipeData.Description}
                </Description>
                <h2>Ingredientes:</h2>
                <Ingredients>
                  <IngredientsList Ingredients={recipeData.Ingredients} />
                  {/* <p>- 1 e 1/2 xícara de leite morno</p>
                  <p>- água 1/2 xícara de água morna</p>
                  <p>- óleo 1/2 xícara</p>
                  <p>- açúcar 4 colheres de sopa</p>
                  <p>- 10 g de fermento biológico</p>
                  <p>- sal 1/2 colher de sopa</p>
                  <p>- 2 ovos </p> */}
                </Ingredients>
                <HowTo>
                  <h2>Como fazer:</h2>
                  {recipeData.HowTo}
                </HowTo>
              </RecipeBody>
            </RecipeBlock>
            <Spacer />
          </RecipeContainer>
          <Banner />
        </Container>
      </>
    );
  }
}

const recipeObject = {
  id: null,
  Ingredients: [
    {
      id: 0,
      RecipeId: 0,
      quantity: 0,
      name: "",
      measureUnit: "",
    },
  ],
  Description: "",
  name: "",
  img: "",
  HowTo: "",
};
