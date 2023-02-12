import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";
import AppError from "../../errors/appErros";
import listContactService from "../../services/Contacts/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  try {
    const idOwner: string = req.user.id!;
    const pool = await listContactService(idOwner);

    return res.status(200).json(instanceToInstance(pool));
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default listContactController;
