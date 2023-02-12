import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appErros";
import { IContact } from "../../interfaces/contact.interface";
import { formatDate } from "../../utils/date";

const contactCreateService = async (
  { email, nome, telefone }: IContact,
  idOwner: string
) => {
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

  const nomeExiste = contact.find((contato) => contato.nome === nome);

  if (nomeExiste) {
    throw new AppError("Contact already exist", 404);
  }

  const createContact = contactRepository.create({
    nome,
    email,
    telefone,
    createdAt: formatDate(),
    user,
  });

  await contactRepository.save(createContact);

  return createContact;
};

export default contactCreateService;
