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
exports.DeleteCommet = exports.AllComments = exports.newComment = void 0;
const coments_model_1 = __importDefault(require("../../models/mg/coments.model"));
const newComment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield coments_model_1.default.create(data);
    return comment;
});
exports.newComment = newComment;
const AllComments = (idpost) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield coments_model_1.default.find({ idfrom: idpost });
    return comments;
});
exports.AllComments = AllComments;
const DeleteCommet = (idcomment) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield coments_model_1.default.findOneAndRemove({ _id: idcomment });
    return comment;
});
exports.DeleteCommet = DeleteCommet;
