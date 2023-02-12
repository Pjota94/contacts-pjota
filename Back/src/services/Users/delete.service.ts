import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser: any = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new Error("ID not exist");
  }

  await userRepository.delete(findUser!.id);

  const message = { message: "User deleted with success" };

  return message;
};

export default deleteUserService;
