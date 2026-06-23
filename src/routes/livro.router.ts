import { Router } from "express";
import { addlivro, getlivro } from "../controller/livros.controller.js";

export const livros = Router()

livros.post("/", addlivro)
livros.get("/", getlivro)