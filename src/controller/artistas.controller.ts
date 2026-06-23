import { NextFunction, Request, Response } from "express";
import { arte } from "../models/artistas.js";
import { AppDataSource } from "../database/database.js";


const eventRepository = AppDataSource.getRepository(arte)


export const addautor = async (req: Request, res: Response, next: NextFunction): Promise <void> =>{
    
    const artistas = eventRepository.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        imagem: req.file?.path as string    
    })
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    const database_result= await eventRepository.save(artistas)
    console.log(database_result)
    res.json(database_result)
}
export const getautor = async (req: Request, res: Response): Promise <void> =>{
    const allartistas = await eventRepository.find()
    res.json(allartistas)
}