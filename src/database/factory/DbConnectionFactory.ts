import Db from '../Db'
import IDb from '../interfaces/IDb'
import MongoDB from '../MongoDB'

export default class DbConnectionFactory {
    private static readonly type: Db = Db.MONGODB
    private static DB: IDb

    public static async conenct(): Promise<IDb> {

        if (DbConnectionFactory.type === Db.MONGODB) {
            DbConnectionFactory.DB = new MongoDB()
        }

        await DbConnectionFactory.DB.connect()
        return DbConnectionFactory.DB
    }
}