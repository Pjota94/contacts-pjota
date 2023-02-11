import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <p>CONTACTS</p>
      <div className="buttons">
        <button>CONTATOS</button>
        <button>PERFIL</button>
        <button>SAIR</button>
      </div>
    </Container>
  );
};

export default Header;
