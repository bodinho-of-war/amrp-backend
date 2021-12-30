export default interface IDb {
    connect(): Promise<void>
}