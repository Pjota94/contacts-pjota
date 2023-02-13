import ContactContext from "../context/ContactContext";
import UserContext from "../context/UserContext";
import { IProviderProps } from "../interfaces";

const Providers = ({ children }: IProviderProps) => {
  return (
    <>
      <UserContext>
        <ContactContext>{children}</ContactContext>
      </UserContext>
    </>
  );
};

export default Providers;
