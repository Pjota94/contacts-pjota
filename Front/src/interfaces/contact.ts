import { Dispatch, SetStateAction } from "react";

export interface IContactProps {
  listarContatos: () => void;
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
  isModalCreate: boolean;
  setModalCreate: Dispatch<SetStateAction<boolean>>;
  criarContato: (data: IContact) => void;
  deletarContato: (event: React.FormEvent<HTMLButtonElement>) => void;
  isModalUpdate: boolean;
  setModalUpdate: Dispatch<SetStateAction<boolean>>;
  idUpdate: string;
  setIdUpdate: Dispatch<SetStateAction<string>>;
  atualizarContato: (data: IContact) => void;
}

export interface IContact {
  email: string;
  telefone: string;
  nome: string;
  createdAt: string;
  id?: string;
}
