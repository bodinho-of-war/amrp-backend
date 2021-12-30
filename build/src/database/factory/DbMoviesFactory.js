"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../model/Db"));
const MongoDbMovies_1 = __importDefault(require("../model/MongoDbMovies"));
class DbMoviesFactory {
    static create() {
        return new MongoDbMovies_1.default();
    }
}
exports.default = DbMoviesFactory;
DbMoviesFactory.type = Db_1.default.MONGODB;
