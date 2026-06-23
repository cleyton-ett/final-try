import { Request, Response } from "express";
import { instrumentos } from "../models/instrumentos.js";
import { AppDataSource } from "../database/database.js";


const eventRepository = AppDataSource.getRepository(instrumentos)


export const addinstrument = async (req: Request, res: Response): Promise <void> =>{
    const intrumento_info = req.body as instrumentos;
    const intrumento = eventRepository.create(intrumento_info)
    const database_result= await eventRepository.save(intrumento)
    console.log(database_result)
    res.json(database_result)
}
export const getinstrumento = async (req: Request, res: Response): Promise <void> =>{
    const allinstruments = await eventRepository.find()
    res.json(allinstruments)
}