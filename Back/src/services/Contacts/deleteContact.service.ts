import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact: any = await contactRepository.findOneBy({ id });

  if (!findContact) {
    throw new Error("ID not exist");
  }

  await contactRepository.delete(findContact!.id);

  const message = { message: "Contact deleted with success" };

  return message;
};

export default deleteContactService;
