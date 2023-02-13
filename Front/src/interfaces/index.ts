import { HeadersDefaults } from "axios";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IValuesProps {
  onRegister: (data: IUser) => void;
  onLogin: (data: ILogin) => void;
  logout: () => void;
  typePage: string;
  setTypePage: Dispatch<SetStateAction<string>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
  telefone: string;
  nome: string;
  createdAt: string;
  foto: string;
}

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}
