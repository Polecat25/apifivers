import { Router } from "express";

import routerP from "./mg/post.route";
import routerC from "./mg/coments.route";

const rutas = Router();

rutas.use(routerC, routerP)

export {rutas}
