import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ILogin, IProviderProps, IUser, IValuesProps } from "../interfaces";
import { api } from "../services/api";

export const AuthContext = createContext<IValuesProps>({} as IValuesProps);

const UserContext = ({ children }: IProviderProps) => {
  const [typePage, setTypePage] = useState("contatos");

  const navigate = useNavigate();

  const onLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((res) => {
        const { token } = res.data;

        // window.localStorage.clear();
        window.localStorage.setItem("@kenzie:token", token);
        navigate("/dashboard", { replace: true });
        toast.success("Login feito!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  };

  const onRegister = (data: IUser) => {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
        toast.success("Conta Criada com Sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      });
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
    toast.success("Deslogado!");
  };

  return (
    <AuthContext.Provider
      value={{ onRegister, onLogin, logout, typePage, setTypePage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
