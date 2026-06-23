import { Router } from "express";
import { addgame, getgame } from "../controller/jogos.controller.js";

export const jogo = Router()

jogo.post("/", addgame)
jogo.get("/", getgame)