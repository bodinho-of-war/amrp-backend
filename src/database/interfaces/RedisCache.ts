import { RedisClientType } from "redis";
import IDb from "./IDb";


export default abstract class RedisCache <T> implements IDb {
    protected client: RedisClientType | any


    async connect (): Promise<void> {
        return this.client.connect()
    }

    abstract get (key: string): Promise<T>

    abstract set (key: string, value: T): Promise<boolean>

}