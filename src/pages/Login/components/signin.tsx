import { BodySignin, StyledLink } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <BodySignin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Email</h2>
        <input
          style={{ background: "white" }}
          placeholder="email"
          type="email"
          {...register("example")}
        />
        <h2>senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="senha"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
        />
      </form>

      <StyledLink to="/sign-up">
        Não se registrou ainda? Cadastre-se!
      </StyledLink>
    </BodySignin>
  );
}
