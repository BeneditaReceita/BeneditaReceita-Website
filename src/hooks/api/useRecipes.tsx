import useAsync from "../useAsync";

import * as Recipes from "../../services/useRecipes";

export default function useRecipeList() {
  const {
    data: recipes,
    loading: recipesLoading,
    error: recipesError,
    act: getRecipes,
  } = useAsync(() => Recipes.getRecipeList());

  return {
    recipes,
    recipesLoading,
    recipesError,
    getRecipes,
  };
}
