import IDbMovies from "./IDbMovies";
import mongoose from "mongoose";
import config from "../../../config";

const movieSchema = new mongoose.Schema({
    name: String
})

const Movie = mongoose.model('Movie', movieSchema)

export default class MongoDbMovies implements IDbMovies {
    private readonly uri: string = config.dbconnection!

    async connect(): Promise<void> {
        await mongoose.connect(this.uri)
    }

    async getMovies(): Promise<any[]> {
        const movies = await Movie.find({})
        return movies
    }

    async createMovie(movie: any): Promise<any> {
        const newMovie = new Movie(movie)
        return newMovie.save()
    }

}