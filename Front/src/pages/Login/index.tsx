import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { AuthContext } from "../../context/UserContext";
import { ILogin } from "../../interfaces";
import { Container } from "./styles";

const Login = () => {
  const { register, handleSubmit } = useForm<ILogin>();

  const { onLogin } = useContext(AuthContext);

  return (
    <Container>
      <Logo />
      <div className="main">
        <div className="card-login">
          <p>LOGIN</p>
          <form action="" onSubmit={handleSubmit(onLogin)}>
            <label>Email</label>
            <input type="text" {...register("email")} />
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <button type="submit">Entrar</button>
          </form>
          <div className="div-span">
            <span className="span-text">Ainda não tem um cadastro?</span>
            <Link to="/register">
              <span className="span-link">Cadastre-se</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
