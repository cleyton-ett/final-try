import { arte } from "../models/artistas.js";
import { AppDataSource } from "../database/database.js";
const eventRepository = AppDataSource.getRepository(arte);
export const addautor = async (req, res, next) => {
    const artistas = eventRepository.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        imagem: req.file?.path
    });
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    const database_result = await eventRepository.save(artistas);
    console.log(database_result);
    res.json(database_result);
};
export const getautor = async (req, res) => {
    const allartistas = await eventRepository.find();
    res.json(allartistas);
};
//# sourceMappingURL=artistas.controller.js.map