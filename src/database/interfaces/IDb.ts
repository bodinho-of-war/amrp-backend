export default interface IDb <T>{
    connect(): Promise<void>
    create(data: T): Promise<T>
    findById(
        id: string,
        projection?: string | Record<string, unknown>,
        options?: Record<string, unknown>,
    ): Promise<T | null>
    findOne(
        conditions: Partial<Record<keyof T, unknown>>,
        projection?: string | Record<string, unknown>,
        options?: Record<string, unknown>,
    ): Promise<T | null>
    find(
        conditions: Partial<Record<keyof T, unknown>>,
        projection?: string | Record<string, unknown>,
        options?: Record<string, unknown>,
    ): Promise<T | T[] | null>
    findAll(): Promise<T[] | null>
    update(data: Partial<Record<keyof T, unknown>>): Promise<T>
    remove(): Promise<boolean>
}