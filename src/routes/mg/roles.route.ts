import { Router } from "express"
import { BorrarRol, CrearRol, GetTodoRol, GetUnRol, ModificarRol } from "../../controllers/mg/roles.controller"
import { VerificarSesion } from "../../middlewares/auth.middleware"
import { VerificarRol } from "../../middlewares/role.middleware"

const routerR = Router()

routerR.get('/roles',VerificarSesion,  VerificarRol(['ADMIN']), GetTodoRol) //traer todos
routerR.get('/roles/:codigo', GetUnRol)
routerR.post('/roles',VerificarSesion, VerificarRol(['ADMIN']), CrearRol) //nuevo
routerR.put('/roles/:id',VerificarSesion, VerificarRol(['ADMIN']), ModificarRol)// modificar
routerR.delete('/roles/:id', VerificarSesion, VerificarRol(['ADMIN']),  BorrarRol) //borrar

export{routerR}