import IDbMovies from "../interfaces/IDbMovies";
import {Schema, model, connect } from "mongoose";
import config from "../../../../config";
import IMovie from "../interfaces/IMovie";

const movieSchema = new Schema<IMovie>({
    name: String
})

const MovieModel = model<IMovie>('Movie', movieSchema)

export default class MongoDbMovies implements IDbMovies {
    private readonly uri: string = config.dbconnection!
    
    create(data: IMovie): Promise<IMovie> {
        throw new Error("Method not implemented.");
    }
    
    findById(id: string, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<IMovie> {
        throw new Error("Method not implemented.");
    }
    findOne(conditions: Partial<Record<"name", unknown>>, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<IMovie> {
        throw new Error("Method not implemented.");
    }
    find(conditions: Partial<Record<"name", unknown>>, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<IMovie | IMovie[]> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<IMovie[]> {
        throw new Error("Method not implemented.");
    }
    update(data: Partial<Record<"name", unknown>>): Promise<IMovie> {
        throw new Error("Method not implemented.");
    }
    remove(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async connect(): Promise<void> {
        await connect(this.uri)
    }

    async getMovies(): Promise<IMovie[]> {
        const movies = await MovieModel.find({})
        return movies
    }

    async createMovie(movie: any): Promise<any> {
        const newMovie = new MovieModel(movie)
        return newMovie.save()
    }

}