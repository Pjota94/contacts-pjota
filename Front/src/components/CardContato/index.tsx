import { Container } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";

const CardContato = () => {
  return (
    <Container>
      <p className="info-name">Paulo Roberto Rangel de Paiva Júnior</p>
      <p className="info-email">juniorgurinhem9@gmail.com</p>
      <p className="info-telefone">(83) 999479372</p>
      <p className="info-data">20/09/2023</p>
      <div className="buttons">
        <button className="btn-edit">
          <AiFillEdit />
        </button>
        <button className="btn-delete">
          <AiTwotoneDelete />
        </button>
      </div>
    </Container>
  );
};

export default CardContato;
