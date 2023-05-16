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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesencriptarPass = exports.EncriptarPass = void 0;
const bcryptjs_1 = require("bcryptjs");
//SE HACEN DOS FUNCIONES UNA PARA ENCRIPTAR Y OTRA PARA DESENCRIPTAR LA PSS
const EncriptarPass = (pass) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const passTohash = yield (0, bcryptjs_1.hash)(pass, salt);
    return passTohash;
});
exports.EncriptarPass = EncriptarPass;
const DesencriptarPass = (hashPass, NOhashPass) => __awaiter(void 0, void 0, void 0, function* () {
    const thehashtopass = yield (0, bcryptjs_1.compare)(NOhashPass, hashPass);
    return thehashtopass;
});
exports.DesencriptarPass = DesencriptarPass;
