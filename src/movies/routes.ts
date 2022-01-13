import { Request, Response } from "express"
import RedisCache from "../redis/RedisCache"
import IMovie from "../repositories/interfaces/IMovie"
import MoviesRepository from "../repositories/models/MoviesRepository"
import GetMoviesList from "./GetMoviesList"

const MoviesRepo = new MoviesRepository()
const Redis = new RedisCache<IMovie>()

Redis.connect()

const moviesRoutes: any = {}

moviesRoutes.getMovies = async (req: Request, res: Response) => {
    const list = new GetMoviesList(MoviesRepo, Redis)
    const movies = await list.get()
    res.status(200).send(movies)
}

export default moviesRoutes