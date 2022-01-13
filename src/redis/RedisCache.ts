import { createClient } from "redis"
import config from "../../config"

export default class RedisCache<T> {
    private readonly url: string = config.cacheconnection!
    private client

    constructor() {
        this.client = createClient({ url: this.url })
        this.client.on('error', (error: any) => console.log('Redis Client Error', error))
    }

    async connect(): Promise<void> {
        return this.client.connect()
    }

    async get(key: string): Promise<T | null> {
        const register = await this.client.get(key)
        if (register) return JSON.parse(register)
        return null
    }

    async set(key: string, value: T): Promise<boolean> {
        const parsedValue = typeof value === 'string' ? value : JSON.stringify(value)
        const result = await this.client.set(key, parsedValue)
        if (result) return true
        return false
    }

    async getKeys(): Promise<string[] | null> {
        const keys = await this.client.keys('*')
        if (!keys) return null
        return keys
    }

    async getAll(): Promise<T[] | null> {
        const keys = await this.getKeys()
        if (!keys) return null
        const registers = []
        for (const key of keys) {
            const register = await this.get(key)
            if (register) registers.push(register)
        }
        if (registers) return registers
        return null
    }
}