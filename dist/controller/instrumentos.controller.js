import { instrumentos } from "../models/instrumentos.js";
import { AppDataSource } from "../database/database.js";
const eventRepository = AppDataSource.getRepository(instrumentos);
export const addinstrument = async (req, res) => {
    const intrumento_info = req.body;
    const intrumento = eventRepository.create(intrumento_info);
    const database_result = await eventRepository.save(intrumento);
    console.log(database_result);
    res.json(database_result);
};
export const getinstrumento = async (req, res) => {
    const allinstruments = await eventRepository.find();
    res.json(allinstruments);
};
//# sourceMappingURL=instrumentos.controller.js.map