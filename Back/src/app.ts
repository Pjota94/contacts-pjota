import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.routes";
import contactRoutes from "./routes/contactsRoutes.routes";
import handdleErrorMiddleware from "./middlewares/handleError.middleware";
import userLogin from "./routes/userLogin.routes";

const app = express();

app.use(express.json());

app.use(cors());

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/users", userRoutes);
app.use("/login", userLogin);
app.use("/contacts", contactRoutes);

app.use(handdleErrorMiddleware);

export default app;
