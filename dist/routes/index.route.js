"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutas = void 0;
const express_1 = require("express");
const post_route_1 = __importDefault(require("./mg/post.route"));
const coments_route_1 = __importDefault(require("./mg/coments.route"));
const auth_route_1 = __importDefault(require("./mg/auth.route"));
const roles_route_1 = require("./mg/roles.route");
const rutas = (0, express_1.Router)();
exports.rutas = rutas;
rutas.use(coments_route_1.default, post_route_1.default, roles_route_1.routerR, auth_route_1.default);
