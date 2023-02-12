import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/users.entity";

const listContactService = async (idOwner: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: idOwner });

  const contact = await contactRepository.find({
    where: {
      user: {
        id: idOwner,
      },
    },
  });

  return contact;
};

export default listContactService;
