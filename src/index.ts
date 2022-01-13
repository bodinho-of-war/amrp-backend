import express from 'express'
import config from '../config'
import DbMoviesFactory from './database/factory/DbConnectionFactory';
import moviesRoutes from './movies/routes';

const app = express();
const PORT = config.port;

app.get('/', moviesRoutes.getMovies);

app.get('*', (req, res) => res.sendStatus(404))

app.listen(PORT, async () => {
    await DbMoviesFactory.conenct()
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});