import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUser } from "../../interfaces/user.interface";
import AppError from "../../errors/appErros";
import { compare } from "bcrypt";

const loginService = async ({ email, password }: IUser): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ email });

  if (!findUser) {
    throw new AppError("Invalid password or email", 400);
  }

  const passwordMatch = await compare(password, findUser.password);

  if (!passwordMatch) {
    throw new AppError("Invalid password or email", 400);
  }

  const token = jwt.sign({ email: email }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: findUser.id,
  });

  return token;
};

export default loginService;
