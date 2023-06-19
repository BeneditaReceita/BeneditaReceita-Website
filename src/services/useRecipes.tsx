import api from "./api";

export type Ingredients = {
  quantity: number;
  name: string;
  measureUnit: string;
}[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getRecipeList(range?: number) {
  const response = await api.get("/recipes");
  return response;
}

export async function getRecipeById(id: string | undefined) {
  const response = await api.get(`/recipes/${id}`);
  return response;
}

export async function postRecipe({
  name,
  Description,
  img,
  HowTo,
  Ingredients,
}: {
  name: string;
  Description: string;
  img: string;
  HowTo: string;
  Ingredients: Ingredients;
}) {
  const response = await api.post("/recipes", {
    name,
    Description,
    img,
    HowTo,
    Ingredients,
  });

  return response;
}
