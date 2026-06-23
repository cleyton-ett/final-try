import { DataSource } from "typeorm";
import { jogos } from "../models/jogos.js";
import { arte } from "../models/artistas.js";
import { instrumentos } from "../models/instrumentos.js";
import { livros } from "../models/livros.js";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: "reseau.proxy.rlwy.net",
    port: 50749,
    username: "root",
    password: "NQAJUhVSXbGgGUrurnvlEesXQikhLafU",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: [ arte ],
    subscribers: [],
    migrations: [],

    ssl:{
        rejectUnauthorized:false,
    },

    extra:{
        connectionLimit:5
    }
    
})