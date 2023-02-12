import { Exclude } from "class-transformer";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import Contact from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column()
  telefone: number;

  @Column()
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[];
}

export default User;
