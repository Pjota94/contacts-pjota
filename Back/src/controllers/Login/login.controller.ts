import { Request, Response } from "express";
import { IUser } from "../../interfaces/user.interface";
import loginService from "../../services/Login/login.service";

const loginController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const token = await loginService(user);
    res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default loginController;
