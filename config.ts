import dotenv from 'dotenv'

dotenv.config({path: (process.env.NODE_ENV === 'staging')? '.dev.env' : '.env'})

const config = {
    dbconnection : process.env.DB_HOST,
    port: process.env.PORT,
    cacheconnection: process.env.CACHE_HOST
}

export default config