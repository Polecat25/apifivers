import { Router } from "express";

import routerP from "./mg/post.route";
import routerC from "./mg/coments.route";
import routeAuth from "./mg/auth.route";
import { routerR } from "./mg/roles.route";

const rutas = Router();

rutas.use(routerC, routerP, routerR, routeAuth)

export {rutas}
