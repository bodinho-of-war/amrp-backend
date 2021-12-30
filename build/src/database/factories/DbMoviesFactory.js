"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../Db"));
const MongoDbMovies_1 = __importDefault(require("../MongoDbMovies"));
class DbMoviesFactory {
    static create() {
        if (DbMoviesFactory.type === Db_1.default.MONGODB)
            return new MongoDbMovies_1.default();
    }
}
exports.default = DbMoviesFactory;
DbMoviesFactory.type = Db_1.default.MONGODB;
