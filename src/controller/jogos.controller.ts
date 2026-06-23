import { Request, Response } from "express";
import { jogos } from "../models/jogos.js";
import { AppDataSource } from "../database/database.js";


const eventRepository = AppDataSource.getRepository(jogos)


export const addgame = async (req: Request, res: Response): Promise <void> =>{
    const game_info = req.body as jogos;
    const game = eventRepository.create(game_info)
    const database_result= await eventRepository.save(game)
    console.log(database_result)
    res.json(database_result)
}
export const getgame = async (req: Request, res: Response): Promise <void> =>{
    const allgames = await eventRepository.find()
    res.json(allgames)

}