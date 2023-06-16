import api from "./api";

export async function getRecipeList(range?: number) {
  const response = await api.get("/recipes");
  return response;
}
