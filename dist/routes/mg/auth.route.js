"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/mg/auth.controller");
const routeAuth = (0, express_1.Router)();
routeAuth.post('/auth/login', auth_controller_1.loginUsuario);
routeAuth.post('/auth/register', auth_controller_1.RegistroUsuario);
exports.default = routeAuth;
