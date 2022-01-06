import IDbMovies from "../interfaces/IDbMovies";
import RedisCache from "../../interfaces/RedisCache";
import { createClient } from "redis";
import config from '../../../../config'

export default class RedisCacheMovies extends RedisCache<any> implements IDbMovies {
    
    private readonly url: string = config.cacheconnection!

    constructor () {
        super()
        this.client = createClient({ url: this.url })
        this.client.on('error', (error: any) => console.log('Redis Client Error', error))
    }
    
    get(key: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    set(key: string, value: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    getMovies(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

}