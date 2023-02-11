import { Container } from "./styles";

import imagem from "../../assets/img.png";

const Perfil = () => {
  return (
    <Container>
      <div className="box">
        <img src={imagem} alt="" />
        <div className="texts">
          <p>Nome: Paulo Roberto Rangel de Paiva Júnior</p>
          <p>Email: juniorgurinhem9@gmail.com</p>
          <p>Telefone: (83) 99947-9372</p>
          <p>Data de Criação: 20/03/2023</p>
        </div>
        <button>Atualizar</button>
      </div>
    </Container>
  );
};

export default Perfil;
