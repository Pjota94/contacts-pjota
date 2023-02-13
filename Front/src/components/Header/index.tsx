import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Container } from "./styles";

const Header = () => {
  const { logout, setTypePage } = useContext(AuthContext);

  const pageContatos = () => {
    setTypePage("contatos");
  };

  const pagePerfil = () => {
    setTypePage("perfil");
  };

  return (
    <Container>
      <p>CONTACTS</p>
      <div className="buttons">
        <button onClick={pageContatos}>CONTATOS</button>
        <button onClick={pagePerfil}>PERFIL</button>
        <button onClick={logout}>SAIR</button>
      </div>
    </Container>
  );
};

export default Header;
