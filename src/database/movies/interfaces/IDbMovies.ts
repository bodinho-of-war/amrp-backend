import IDb from "../../interfaces/IDb";

export default interface IDbMovies extends IDb {
    getMovies(): Promise<any[]>
}