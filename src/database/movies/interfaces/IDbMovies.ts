import IDb from "../../interfaces/IDb";
import IMovie from "./IMovie";

export default interface IDbMovies extends IDb<IMovie> {
    getMovies(): Promise<IMovie[]>
    createMovie(movie: IMovie): Promise<IMovie>
}