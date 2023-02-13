import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appErros";
import { IUser } from "../../interfaces/user.interface";
import { formatDate } from "../../utils/date";

const createUserService = async ({
  nome,
  email,
  telefone,
  password,
  foto,
}: IUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExist = await userRepository.findOneBy({ nome });

  if (userAlreadyExist) {
    throw new AppError("User Already Exist", 400);
  }

  const emailAlreadyExist = await userRepository.findOneBy({ email });

  if (emailAlreadyExist) {
    throw new AppError("Email Already Exist", 400);
  }

  const hashedPassword = await hash(password, 10);

  const createUser = userRepository.create({
    nome,
    password: hashedPassword,
    email,
    telefone,
    foto,
    createdAt: formatDate(),
  });

  await userRepository.save(createUser);

  return createUser;
};

export default createUserService;
