import IDb from "./IDb";

export default interface IDbMovies extends IDb {
    getMovies(): Promise<any[]>
}