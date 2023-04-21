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
exports.DeletePost = exports.UpdatePost = exports.NewPost = exports.GetOnePost = exports.GetAllPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const GetAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield post_model_1.default.find({});
    return data;
});
exports.GetAllPost = GetAllPost;
const GetOnePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield post_model_1.default.findOne({ _id: id });
    return data;
});
exports.GetOnePost = GetOnePost;
const NewPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield post_model_1.default.create(data);
    return newPost;
});
exports.NewPost = NewPost;
const UpdatePost = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const dataU = yield post_model_1.default.findOneAndUpdate({ _id: id }, body, { new: true });
    return dataU;
});
exports.UpdatePost = UpdatePost;
const DeletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const dataD = yield post_model_1.default.findOneAndRemove({ _id: id });
    return dataD;
});
exports.DeletePost = DeletePost;