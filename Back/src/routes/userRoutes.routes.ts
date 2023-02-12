import { Router } from "express";
import createUserController from "../controllers/Users/create.controller";
import deleteUserController from "../controllers/Users/delete.controller";
import listUsersController from "../controllers/Users/list.controller";
import updateUserController from "../controllers/Users/update.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const userRoutes = Router();

userRoutes.get("", listUsersController);
userRoutes.post("", createUserController);
userRoutes.patch("", authTokenMiddleware, updateUserController);
userRoutes.delete("/:id", authTokenMiddleware, deleteUserController);

export default userRoutes;
