import api from "./api";

export type Ingredients = {
  quantity: number;
  name: string;
  measureUnit: string;
}[];

export async function getRecipeList(range?: number) {
  const response = await api.get("/recipes");
  return response;
}

export async function postRecipe({
  name,
  Description,
  img,
  Ingredients,
}: {
  name: string;
  Description: string;
  img: string;
  Ingredients: Ingredients;
}) {
  const response = await api.post("/recipes", {
    name,
    Description,
    img,
    Ingredients,
  });

  return response;
}
