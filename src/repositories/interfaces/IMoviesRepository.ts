import BaseInterfaceRepository from "../base/BaseInterfaceRepository";
import IMovie from "./IMovie";

export default interface IMoviesRepository {
    getMovies(): Promise<IMovie[]>
    createMovie(movie: IMovie): Promise<IMovie>
}