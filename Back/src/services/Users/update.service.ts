import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appErros";
import { IUser } from "../../interfaces/user.interface";

const updateUserService = async (
  { nome, password, email, telefone, foto }: IUser,
  idOwner: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: idOwner });

  if (!findUser) {
    throw new AppError("User Not Found!", 404);
  }

  const emailExist = await userRepository.findOneBy({ email });

  if (emailExist) {
    throw new AppError("Email already exist!", 404);
  }

  await userRepository.update(idOwner, {
    nome: nome ? nome : findUser.nome,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    telefone: telefone ? telefone : findUser.telefone,
    foto: foto ? foto : findUser.foto,
  });

  const user = await userRepository.findOneBy({ id: idOwner });

  return user!;
};

export default updateUserService;
