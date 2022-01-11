import { Model, connect } from "mongoose";
import IDb from "./IDb";

export default abstract class BaseDb<T> implements IDb<T> {
    
    constructor(private model: Model<T>, private uri: string) {}

    async connect(): Promise<void> {
        await connect(this.uri)
    }

    async create(data: T): Promise<T> {
        const model = new this.model(data)
        const register = await model.save()
        return register as T
    }

    async findById(id: string, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<T | null> {
        let register = null
        try {
            register = await this.model.findById(id, projection, options)
        } catch (error) {
            console.log(error);
        }
        return register
    }

    async findOne(conditions: Partial<Record<keyof T, unknown>>, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<T | null> {
        let register = null
        try {
            register = await this.model.findOne(conditions, projection, options)
        } catch (error) {
            console.log(error);
        }
        return register
    }

    async find(conditions: Partial<Record<keyof T, unknown>>, projection?: string | Record<string, unknown>, options?: Record<string, unknown>): Promise<T | T[] | null> {
        let register = null
        try {
            register = await this.model.find(conditions, projection, options)
        } catch (error) {
            console.log(error);
        }
        return register
    }

    async findAll(): Promise<T[] | null> {
        let registers = null
        try {
            registers = await this.model.find({})
        } catch (error) {
            console.log(error);
        }
        return registers
    }

    update(data: Partial<Record<keyof T, unknown>>): Promise<T> {
        let register = null
        try {
            register = await this.model.updateOne()
        } catch (error) {
            console.log(error);
        }
        return register
    }

    remove(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}