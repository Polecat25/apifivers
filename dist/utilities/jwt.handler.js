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
exports.jwtVerify = exports.jwtGenerator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const secret_jwt = process.env.jwt_secret || "secreto de respaldo";
const jwtGenerator = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, jsonwebtoken_1.sign)(payload, secret_jwt, { expiresIn: '1h' });
    return token;
});
exports.jwtGenerator = jwtGenerator;
const jwtVerify = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenOk = (0, jsonwebtoken_1.verify)(token, secret_jwt);
    return tokenOk;
});
exports.jwtVerify = jwtVerify;
