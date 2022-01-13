import { Model, UpdateWriteOpResult } from 'mongoose'
import BaseInterfaceRepository from './BaseInterfaceRepository'

export default abstract class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {
    constructor(private model: Model<T>) { }

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
            console.log(error)
        }
        return register
    }

    async findOne(
        conditions: Partial<Record<keyof T, unknown>>,
        projection?: string | Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<T | null> {
        let register = null
        try {
            register = await this.model.findOne(conditions, projection, options)
        } catch (error) {
            console.log(error)
        }
        return register
    }

    async find(
        conditions: Partial<Record<keyof T, unknown>>,
        projection?: string | Record<string, unknown>,
        options?: Record<string, unknown>
    ): Promise<T | T[] | null> {
        let register = null
        try {
            register = await this.model.find(conditions, projection, options)
        } catch (error) {
            console.log(error)
        }
        return register
    }

    async findAll(): Promise<T[] | null> {
        let registers = null
        try {
            registers = await this.model.find({})
        } catch (error) {
            console.log(error)
        }
        return registers
    }

    async updateOne(
        conditions: Partial<Record<keyof T, unknown>>,
        data: Partial<Record<keyof T, unknown>>,
        options?: Record<string, unknown>
    ): Promise<UpdateWriteOpResult | null> {
        let register = null
        try {
            register = await this.model.updateOne(conditions, data, options)
        } catch (error) {
            console.log(error)
        }
        return register
    }

    async updateMany(
        conditions: Partial<Record<keyof T, unknown>>,
        data: Partial<Record<keyof T, unknown>>,
        options?: Record<string, unknown>
    ): Promise<UpdateWriteOpResult | null> {
        let register = null
        try {
            register = await this.model.updateMany(conditions, data, options)
        } catch (error) {
            console.log(error)
        }
        return register
    }

    async remove(conditions: Partial<Record<keyof T, unknown>>): Promise<boolean> {
        let register = false
        try {
            const removed = await this.model.remove(conditions)
            if (removed) register = true
        } catch (error) {
            console.log(error)
        }
        return register
    }
}
