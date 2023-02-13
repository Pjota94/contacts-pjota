import { Container } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { IContact } from "../../interfaces/contact";
import { useContext } from "react";
import { AuthContact } from "../../context/ContactContext";

const CardContato = ({ createdAt, email, nome, telefone, id }: IContact) => {
  const { deletarContato, setModalUpdate, setIdUpdate } =
    useContext(AuthContact);

  const abrirModal = (event: any) => {
    const id = event.currentTarget.id;
    setIdUpdate(id);
    setModalUpdate(true);
  };

  return (
    <Container>
      <p className="info-name">{nome}</p>
      <p className="info-email">{email}</p>
      <p className="info-telefone">{telefone}</p>
      <p className="info-data">{createdAt}</p>
      <div className="buttons">
        <button id={id} className="btn-edit" onClick={abrirModal}>
          <AiFillEdit />
        </button>
        <button id={id} className="btn-delete" onClick={deletarContato}>
          <AiTwotoneDelete />
        </button>
      </div>
    </Container>
  );
};

export default CardContato;
