import RedisCache from "../redis/RedisCache";
import IMovie from "../repositories/interfaces/IMovie";

export default class PopulateMoviesOnRedis {
    constructor(private redis: RedisCache<IMovie>) { }

    async populate(movies: IMovie[]): Promise<void> {
        for (const movie of movies) {
            await this.redis.set(movie.name, movie)
        }
    }

}