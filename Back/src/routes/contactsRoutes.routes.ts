import { Router } from "express";
import contactCreateController from "../controllers/Contacts/createContact.controller";
import deleteContactController from "../controllers/Contacts/deleteContact.controller";
import listContactController from "../controllers/Contacts/listContact.controller";
import updateContactController from "../controllers/Contacts/updateContact.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const contactRoutes = Router();

contactRoutes.get("", authTokenMiddleware, listContactController);
contactRoutes.post("", authTokenMiddleware, contactCreateController);
contactRoutes.patch("/:id", authTokenMiddleware, updateContactController);
contactRoutes.delete("/:id", authTokenMiddleware, deleteContactController);

export default contactRoutes;
