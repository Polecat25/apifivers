import express, { Router } from "express";
import { BorrarComentario, getTodoComentario, NuevoCometario } from "../../controllers/mg/coment.controller";


const routerC = Router()

routerC.get('/comments/:id', getTodoComentario)
routerC.post('/comment', NuevoCometario)
routerC.delete('/comment/:id',  BorrarComentario)

export default routerC