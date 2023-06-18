type prop = {
  Ingredients: Ingredients[];
};

type Ingredients = {
  id: number;
  RecipeId: number;
  quantity: number;
  name: string;
  measureUnit: string;
};

export default function IngredientsList(prop: prop) {
  const { Ingredients } = prop;

  return (
    <>
      {Ingredients.map((e) => (
        <p>
          - {e.quantity} {e.measureUnit} de {e.name}
        </p>
      ))}
    </>
  );
}
