"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../../controllers/mg/post.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const routerP = (0, express_1.Router)();
routerP.get('/post', post_controller_1.GetTodoPost); //--> depende del controtrolador postController
routerP.get('/post/:id', post_controller_1.GetUnPost); //--> sirve para ir a los comentarios, es el id PERO DEL POST 
routerP.post('/post/new', post_controller_1.NuevoPost);
routerP.put('/post/update/:id', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['USER', 'ADMIN']), post_controller_1.ModificarPost); //--> necesita verificacion para editar el post
routerP.delete('/post/del/:id', auth_middleware_1.VerificarSesion, (0, role_middleware_1.VerificarRol)(['USER', 'ADMIN']), post_controller_1.BorrarPost);
exports.default = routerP;
