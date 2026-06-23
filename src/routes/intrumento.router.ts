import { Router } from "express";
import { addinstrument, getinstrumento } from "../controller/instrumentos.controller.js";
export const instrumento = Router()

instrumento.post("/", addinstrument)
instrumento.get("/", getinstrumento)