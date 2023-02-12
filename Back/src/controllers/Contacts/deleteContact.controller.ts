import { Request, Response } from "express";
import deleteContactService from "../../services/Contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deleteUser = await deleteContactService(id);
    return res.status(204).send({ message: "User deleted successfully!" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default deleteContactController;
