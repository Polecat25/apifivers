import { Router } from "express";
import { loginUsuario, RegistroUsuario } from "../../controllers/mg/auth.controller";

const routeAuth = Router()

routeAuth.post('/auth/login', loginUsuario)
routeAuth.post('/auth/register', RegistroUsuario)

export default routeAuth