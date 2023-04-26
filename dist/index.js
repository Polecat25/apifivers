"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = __importDefault(require("./config/mongo"));
const index_route_1 = require("./routes/index.route");
//import router from './routes/mg/post.route';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, mongo_1.default)().then(() => {
    console.log("conexion establecida: ");
});
app.use(index_route_1.rutas);
dotenv_1.default.config();
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`EL SERVIDOR ESTA ENEL PORT ${PORT} gg`);
});
