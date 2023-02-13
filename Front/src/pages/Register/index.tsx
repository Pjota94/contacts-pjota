import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { AuthContext } from "../../context/UserContext";
import { IUser } from "../../interfaces";
import { Container } from "./styles";

const Register = () => {
  const { register, handleSubmit } = useForm<IUser>();

  const { onRegister } = useContext(AuthContext);

  return (
    <Container>
      <Logo />
      <div className="main">
        <div className="card-register">
          <p>REGISTER</p>
          <form onSubmit={handleSubmit(onRegister)}>
            <label>Nome Completo</label>
            <input type="text" {...register("nome")} />
            <label>Email</label>
            <input type="text" {...register("email")} />
            <label>Telefone</label>
            <input type="text" {...register("telefone")} />
            <label>Senha</label>
            <input type="text" {...register("password")} />
            <label>Foto</label>
            <input type="text" {...register("foto")} />
            <button type="submit">Cadastrar</button>
          </form>
          <div className="div-span">
            <span className="span-text">Já possui cadastro?</span>
            <Link to="/">
              <span className="span-link">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
