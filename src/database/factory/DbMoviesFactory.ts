import Db from '../model/Db'
import IDbMovies from '../model/IDbMovies'
import MongoDbMovies from '../model/MongoDbMovies'

export default class DbMoviesFactory {
    private static readonly type: Db = Db.MONGODB
    
    public static create(): IDbMovies {
        return new MongoDbMovies()
    }
}