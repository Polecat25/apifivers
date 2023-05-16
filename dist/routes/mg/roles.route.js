"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerR = void 0;
const express_1 = require("express");
const roles_controller_1 = require("../../controllers/mg/roles.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const routerR = (0, express_1.Router)();
exports.routerR = routerR;
routerR.get('/roles', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['ADMIN']), roles_controller_1.GetTodoRol); //traer todos
routerR.get('/roles/:codigo', roles_controller_1.GetUnRol);
routerR.post('/roles', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['ADMIN']), roles_controller_1.CrearRol); //nuevo
routerR.put('/roles/:id', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['ADMIN']), roles_controller_1.ModificarRol); // modificar
routerR.delete('/roles/:id', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['ADMIN']), roles_controller_1.BorrarRol); //borrar
