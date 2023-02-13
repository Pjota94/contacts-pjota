import { Container } from "./styles";

import CardContato from "../CardContato";
import { useContext, useEffect } from "react";
import { AuthContact } from "../../context/ContactContext";
import ModalCreate from "../ModalCreate";
import ModalUpdate from "../ModalUpdate";

const Contatos = () => {
  const {
    listarContatos,
    contacts,
    isModalCreate,
    setModalCreate,
    isModalUpdate,
  } = useContext(AuthContact);

  const abrirModal = () => {
    setModalCreate(true);
  };

  useEffect(() => {
    listarContatos();
  }, []);

  return (
    <>
      <Container>
        <div className="box">
          <button onClick={abrirModal} className="create-contact">
            Criar Contato
          </button>
          <div className="titles">
            <p className="nome">Nome</p>
            <p className="email">Email</p>
            <p className="telefone">Telefone</p>
            <p className="data">Data de Criação</p>
            <div className="auxiliar-btns"></div>
          </div>
          <div className="box-cards">
            {contacts.map((elem, index) => (
              <CardContato
                key={index}
                nome={elem.nome}
                email={elem.email}
                createdAt={elem.createdAt}
                telefone={elem.telefone}
                id={elem.id}
              />
            ))}
          </div>
        </div>
      </Container>
      {isModalCreate && <ModalCreate />}
      {isModalUpdate && <ModalUpdate />}
    </>
  );
};

export default Contatos;
