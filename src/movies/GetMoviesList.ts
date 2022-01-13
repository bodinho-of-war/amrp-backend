import RedisCache from "../redis/RedisCache";
import IMovie from "../repositories/interfaces/IMovie";
import IMoviesRepository from "../repositories/interfaces/IMoviesRepository";
import PopulateMoviesOnRedis from "./PopulateMoviesOnRedis";

export default class GetMoviesList {
    private populateOnRedis: PopulateMoviesOnRedis
    constructor(private moviesRepository: IMoviesRepository, private redis: RedisCache<IMovie>) {
        this.populateOnRedis = new PopulateMoviesOnRedis(this.redis)
    }

    async get(): Promise<IMovie[]> {
        const redisRegisters = await this.redis.getAll()
        if (redisRegisters) return redisRegisters
        const movies = await this.moviesRepository.getMovies()
        await this.populateOnRedis.populate(movies)
        if (movies) return movies
        return []
    }

}