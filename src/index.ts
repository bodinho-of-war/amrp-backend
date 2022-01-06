import express from 'express'
import config from '../config'
import CacheMoviesFactory from './database/movies/factory/CacheMoviesFactory';
import DbMoviesFactory from './database/movies/factory/DbMoviesFactory';

const app = express();
const PORT = config.port;
const MOVIES_DB = DbMoviesFactory.create()
const MOVIES_CACHE = CacheMoviesFactory.create()

app.get('/', async (req, res) => {
    const movies = await MOVIES_DB.getMovies()
    res.send(movies)
});

app.get('*', (req, res) => res.sendStatus(404))

app.listen(PORT, async () => {
    await MOVIES_DB.connect()
    await MOVIES_CACHE.connect()
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});