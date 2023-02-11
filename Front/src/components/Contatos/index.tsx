import { Container } from "./styles";

import CardContato from "../CardContato";

const Contatos = () => {
  return (
    <Container>
      <div className="box">
        <button className="create-contact">Criar Contato</button>
        <div className="titles">
          <p className="nome">Nome</p>
          <p className="email">Email</p>
          <p className="telefone">Telefone</p>
          <p className="data">Data de Criação</p>
          <div className="auxiliar-btns"></div>
        </div>
        <div className="box-cards">
          {/* <CardContato />
          <CardContato />
          <CardContato />
          <CardContato /> */}
        </div>
      </div>
    </Container>
  );
};

export default Contatos;
