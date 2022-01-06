import IDbMovies from "../interfaces/IDbMovies";
import RedisCacheMovies from "../model/RedisCacheMovies";

export default class CacheMoviesFactory {
    public static create(): IDbMovies {
        return new RedisCacheMovies()
    }
}