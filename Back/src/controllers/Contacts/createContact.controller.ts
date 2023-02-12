import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import AppError from "../../errors/appErros";
import { IContact } from "../../interfaces/contact.interface";
import contactCreateService from "../../services/Contacts/createContact.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const idOwner: string = req.user.id!;
    const contact: IContact = req.body;
    const createContact = await contactCreateService(contact, idOwner);
    res.status(201).json(createContact);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default contactCreateController;
