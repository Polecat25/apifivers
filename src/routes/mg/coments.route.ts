import express, { Router } from "express";
import { BorrarComentario, getTodoComentario, NuevoCometario } from "../../controllers/mg/coment.controller";
import { VerificarSesion } from "../../middlewares/auth.middleware";
import { VerificarRol } from "../../middlewares/role.middleware";


const routerC = Router()

routerC.get('/comments/:id', getTodoComentario)
routerC.post('/comments', NuevoCometario)
routerC.delete('/comments/:id', VerificarSesion, VerificarRol(['USER', 'ADMIN']), BorrarComentario)

export default routerC