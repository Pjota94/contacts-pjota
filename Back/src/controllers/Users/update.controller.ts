import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUser } from "../../interfaces/user.interface";
import updateUserService from "../../services/Users/update.service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const id: string = req.params.id;
    const idOwner: string = req.user.id!;
    const updatedUser = await updateUserService(user, idOwner);
    return res.status(200).json(instanceToPlain(updatedUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default updateUserController;
