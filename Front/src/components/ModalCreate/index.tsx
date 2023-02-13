import { Container } from "./styles";
import { FaRegWindowClose } from "react-icons/fa";
import { useContext } from "react";
import { AuthContact } from "../../context/ContactContext";
import { useForm } from "react-hook-form";
import { IContact } from "../../interfaces/contact";

const ModalCreate = () => {
  const { setModalCreate, criarContato } = useContext(AuthContact);

  const fecharModal = () => {
    setModalCreate(false);
  };

  const { register, handleSubmit } = useForm<IContact>();

  return (
    <Container>
      <div className="card">
        <div className="div-close">
          <button className="closeModal" onClick={fecharModal}>
            <FaRegWindowClose />
          </button>
        </div>
        <p>CRIAR CONTATO</p>
        <form action="" onSubmit={handleSubmit(criarContato)}>
          <label htmlFor="">Nome</label>
          <input type="text" {...register("nome")} />
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
          <label htmlFor="">Telefone</label>
          <input type="text" {...register("telefone")} />
          <button type="submit">Criar</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalCreate;
