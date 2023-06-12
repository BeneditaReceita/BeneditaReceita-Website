import { BodySignin, StyledLink } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  confirmPassword: string;
};

export default function Signup() {
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
        {/* register your input into the hook by invoking the "register" function */}
        <input
          style={{ background: "white" }}
          placeholder="email"
          type="email"
          {...register("example")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <h2>senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="senha"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <h2>Confirmar senha</h2>
        <input
          style={{ background: "white" }}
          type="password"
          placeholder="confirme a senha"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
        />
      </form>
      {/* <Button></Button> */}
      <StyledLink to="/login">Já possui uma conta? Efetue o login!</StyledLink>
    </BodySignin>
  );
}
