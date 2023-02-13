import { useContext } from "react";
import Contatos from "../../components/Contatos";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
import { AuthContext } from "../../context/UserContext";
import { Container } from "./styles";

const Dashboard = () => {
  const { typePage } = useContext(AuthContext);

  return (
    <Container>
      <Header />
      {typePage === "contatos" ? <Contatos /> : <></>}
      {typePage === "perfil" ? <Perfil /> : <></>}
    </Container>
  );
};

export default Dashboard;
