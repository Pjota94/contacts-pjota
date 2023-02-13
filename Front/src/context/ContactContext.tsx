import { HeadersDefaults } from "axios";
import { totalmem } from "os";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { IProviderProps } from "../interfaces";
import { IContact, IContactProps } from "../interfaces/contact";
import { api } from "../services/api";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}
export const AuthContact = createContext<IContactProps>({} as IContactProps);

const ContactContext = ({ children }: IProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isModalCreate, setModalCreate] = useState(false);
  const [isModalUpdate, setModalUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");

  const listarContatos = async () => {
    const token = localStorage.getItem("@kenzie:token");

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/contacts");
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const criarContato = async (data: IContact) => {
    const token = localStorage.getItem("@kenzie:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data: newData } = await api.post("contacts", data);
      setContacts([newData, ...contacts]);
      setModalCreate(false);
      toast.success("Contato Criado!");
    } catch (err: any) {
      console.log(err);
      toast.error(`${err.response.data.message}`);
    }
  };

  const atualizarContato = async (data: IContact) => {
    const token = localStorage.getItem("@kenzie:token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data: newData } = await api.patch(`contacts/${idUpdate}`, data);
      const update = contacts.filter(({ id }) => {
        return id !== idUpdate;
      });
      setContacts([newData, ...update]);
      setModalUpdate(false);
      toast.success("Contato Atualizado!");
    } catch (err: any) {
      console.log(err);
      toast.error(`${err.response.data.message}`);
    }
  };

  const deletarContato = async (event: React.FormEvent<HTMLButtonElement>) => {
    const token = localStorage.getItem("@kenzie:token");
    const currentTarget = event.currentTarget;
    const idCard = currentTarget.id;

    const filterDel = contacts.filter(({ id }) => {
      return id !== idCard;
    });

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`contacts/${idCard}`);
      setContacts(filterDel);
      toast.success("Contato Excluido!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContact.Provider
      value={{
        listarContatos,
        contacts,
        setContacts,
        isModalCreate,
        setModalCreate,
        criarContato,
        deletarContato,
        isModalUpdate,
        setModalUpdate,
        idUpdate,
        setIdUpdate,
        atualizarContato,
      }}
    >
      {children}
    </AuthContact.Provider>
  );
};

export default ContactContext;
