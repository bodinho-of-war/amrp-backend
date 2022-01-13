import IMoviesRepository from "../interfaces/IMoviesRepository";
import { Schema, model } from "mongoose";
import IMovie from "../interfaces/IMovie";
import BaseAbstractRepository from "../base/BaseAbstractRepository";

const movieSchema = new Schema<IMovie>({
    name: String
})

const MovieModel = model<IMovie>('Movie', movieSchema)

export default class MoviesRepository extends BaseAbstractRepository<IMovie> implements IMoviesRepository {
    constructor() {
        super(MovieModel)
    }

    async getMovies(): Promise<IMovie[]> {
        const movies = await this.findAll()
        if (movies) return movies
        return []
    }

    async createMovie(movie: IMovie): Promise<IMovie> {
        const createdMovie = await this.create(movie)
        return createdMovie
    }

}