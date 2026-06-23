import { Request, Response } from "express";
import { livros } from "../models/livros.js";
import { AppDataSource } from "../database/database.js";


const eventRepository = AppDataSource.getRepository(livros)


export const addlivro = async (req: Request, res: Response): Promise <void> =>{
    const livro_info = req.body as livros;
    const livro = eventRepository.create(livro_info)
    const database_result= await eventRepository.save(livro)
    console.log(database_result)
    res.json(database_result)
}
export const getlivro = async (req: Request, res: Response): Promise <void> =>{
    const alllivros = await eventRepository.find()
    res.json(alllivros)

}