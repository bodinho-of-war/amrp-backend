import express from 'express'
import config from '../config'
import DbMoviesFactory from './database/factory/DbMoviesFactory';

const app = express();
const PORT = config.port;
const DB = DbMoviesFactory.create()

app.get('/', async (req, res) => {
    const movies = await DB.getMovies()
    res.send(movies)
});

app.get('*', (req, res) => res.sendStatus(404))

app.listen(PORT, async () => {
    await DB.connect()
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});