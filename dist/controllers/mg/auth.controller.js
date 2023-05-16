"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroUsuario = exports.loginUsuario = void 0;
const uth_service_1 = require("../../services/mg/uth.service");
const errorHandler_1 = __importDefault(require("../../utilities/errorHandler"));
const RegistroUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, pass, nombre, role } = req.body;
        const data = yield (0, uth_service_1.newUser)({ email, pass, nombre, role });
        res.status(data.code).send(data);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 400, error.message);
    }
});
exports.RegistroUsuario = RegistroUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, pass } = req.body;
        const loginuser = yield (0, uth_service_1.loginUser)({ email, pass });
        res.status(loginuser.code).send(loginuser.login);
    }
    catch (error) {
        (0, errorHandler_1.default)(res, 500, error.message, error);
    }
});
exports.loginUsuario = loginUsuario;
