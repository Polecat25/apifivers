"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coment_controller_1 = require("../../controllers/mg/coment.controller");
const routerC = (0, express_1.Router)();
routerC.get('/comments/:id', coment_controller_1.getTodoComentario);
routerC.post('/comment', coment_controller_1.NuevoCometario);
routerC.delete('/comment/:id', coment_controller_1.BorrarComentario);
exports.default = routerC;
