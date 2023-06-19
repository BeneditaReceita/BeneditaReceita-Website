import { useState } from "react";
import DescriptionForm from "./components/descriptionForm";
import { Container, Globalstyles, Button } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Receita } from "./components/descriptionForm";
// import { Ingredients } from "../../services/useRecipes";
import api from "../../services/api";

type Inputs = {
  quantity: number;
  name: string;
  measureUnit: string;
};

// type completeForm = {
//   name: string;
//   Description: string;
//   img: string;
//   HowTo: string;
//   Ingredients: Ingredients;
// };

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const array: Inputs[] = [];

  const [receita, setreceita] = useState<Receita>({} as Receita);
  const [ingredientArray, setingredientArray] = useState<Inputs[]>(
    [] as Inputs[]
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.quantity = parseInt(data.quantity);
    array.push(data);
    setingredientArray(array);
  };
  // console.log(ingredientArray);

  async function post() {
    if (Object.keys(receita).length === 0 || !ingredientArray[0]) {
      alert("preencha todos os campos e clique em salvar");
      return 0;
    }
    const response = await api.post("/recipes", {
      name: receita.name,
      Description: receita.Description,
      img: receita.img,
      HowTo: receita.HowTo,
      Ingredients: ingredientArray,
    });
  }

  return (
    <Container>
      <h1>Compartilhe suas receitas favoritas!</h1>
      <DescriptionForm receita={setreceita} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>
          <h2>adicionar ingredientes:</h2>
          <h3>Adicione o nome do ingrediente:</h3>
        </span>

        <input
          style={{ background: "white" }}
          placeholder="nome do ingrediente"
          type="name"
          {...register("name", { required: true, maxLength: 100 })}
        />
        {errors.name && <span> maximo 100 caracteres</span>}
        <h3>Adicione a unidade de medida:</h3>

        <input
          style={{ background: "white" }}
          placeholder="unidade de medida"
          type="text"
          {...register("measureUnit", { required: true })}
        />
        {errors.measureUnit && <span> Coloque unidade de medida!</span>}
        <h3>Adicione a quantidade de acordo com a medida:</h3>
        <input
          style={{ background: "white" }}
          placeholder="quantidade"
          type="number"
          {...register("quantity", { required: true, maxLength: 100 })}
        />
        {errors.quantity && <span> coloque a quantidade</span>}

        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
          value={"Adicionar ingrediente"}
        />
      </form>
      <Button onClick={() => post()}>Enviar receita</Button>
      <Globalstyles />
    </Container>
  );
}
