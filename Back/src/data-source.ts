import { DataSource } from "typeorm";
import "dotenv/config";
import User from "./entities/users.entity";
import Contact from "./entities/contacts.entity";
import { initial1676156323513 } from "./migrations/1676156323513-initial";
import { update1676158213707 } from "./migrations/1676158213707-update";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [User, Contact],
        migrations: [initial1676156323513, update1676158213707],
      }
);

export default AppDataSource;
