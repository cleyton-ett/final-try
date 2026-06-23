import { Router } from "express";
import { getautor, addautor } from "../controller/artistas.controller.js";

export const autores = Router()

autores.post("/", addautor)
autores.get("/", getautor)