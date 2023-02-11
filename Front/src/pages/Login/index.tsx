import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Container } from "./styles";

const Login = () => {
  return (
    <Container>
      <Logo />
      <div className="main">
        <div className="card-login">
          <p>LOGIN</p>
          <form action="">
            <label>Email</label>
            <input type="text" />
            <label>Senha</label>
            <input type="text" />
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
