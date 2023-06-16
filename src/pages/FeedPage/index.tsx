import RecipeCard from "./components/RecipeCard";

type dataProps = {
  Description: string;
  createdAt: "2023-06-11T20:40:17.847Z";
  id: number;
  img: string;
  name: string;
  user?: unknown;
};

export default function FeedPage(prop: dataProps) {
  return (
    <>
      <RecipeCard
        Description={prop.Description}
        createdAt={prop.createdAt}
        id={prop.id}
        img={prop.img}
        name={prop.name}
      />
    </>
  );
}
