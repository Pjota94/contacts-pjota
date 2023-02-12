import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import { IUser } from "../../interfaces/user.interface";
import createUserService from "../../services/Users/create.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const createUser = await createUserService(user);
    res.status(201).json(instanceToInstance(createUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default createUserController;
