import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Recipe } from "./entities/recipe";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "prueba23",
    database: "recipes",
    synchronize: true,
    entities: [User, Recipe]
});