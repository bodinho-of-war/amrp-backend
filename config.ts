import dotenv from 'dotenv'

dotenv.config({path: (process.env.NODE_ENV === 'staging')? '.dev.env' : '.env'})

const config = {
    dbconnection : process.env.MONGODB_HOST,
    port: process.env.PORT
}

export default config