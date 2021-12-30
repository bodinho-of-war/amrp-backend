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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../../config"));
const movieSchema = new mongoose_1.default.Schema({
    name: String
});
const Movie = mongoose_1.default.model('Movie', movieSchema);
class MongoDbMovies {
    constructor() {
        this.uri = config_1.default.dbconnection;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect(this.uri);
        });
    }
    getMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield Movie.find({});
            return movies;
        });
    }
    createMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMovie = new Movie(movie);
            return newMovie.save();
        });
    }
}
exports.default = MongoDbMovies;
