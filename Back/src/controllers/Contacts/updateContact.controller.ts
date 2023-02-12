import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/contact.interface";
import updateContactService from "../../services/Contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contact: IContact = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateContactService(contact, id);
    return res.status(200).json(instanceToPlain(updatedUser));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default updateContactController;
