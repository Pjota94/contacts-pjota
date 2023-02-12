import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appErros";
import { IContact } from "../../interfaces/contact.interface";

const updateContactService = async (
  { nome, email, telefone }: IContact,
  id: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id });

  if (!findContact) {
    throw new AppError("User Not Found!", 404);
  }

  await contactRepository.update(id, {
    nome: nome ? nome : findContact.nome,
    email: email ? email : findContact.email,
    telefone: telefone ? telefone : findContact.telefone,
  });

  const contact = await contactRepository.findOneBy({ id });

  return contact!;
};

export default updateContactService;
