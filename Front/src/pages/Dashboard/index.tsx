import Contatos from "../../components/Contatos";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      {/* <Perfil /> */}
      <Contatos />
    </Container>
  );
};

export default Dashboard;
