import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Container } from "./styles";

const Register = () => {
  return (
    <Container>
      <Logo />
      <div className="main">
        <div className="card-register">
          <p>REGISTER</p>
          <form>
            <label>Nome Completo</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Telefone</label>
            <input type="text" />
            <label>Senha</label>
            <input type="text" />
            <label>Foto</label>
            <input type="text" />
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
