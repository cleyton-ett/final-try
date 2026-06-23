import { DataSource } from "typeorm";
import { arte } from "../models/artistas.js";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "reseau.proxy.rlwy.net",
    port: 50749,
    username: "root",
    password: "NQAJUhVSXbGgGUrurnvlEesXQikhLafU",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: [arte],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=database.js.map