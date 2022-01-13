import { connect } from "mongoose";
import config from "../../config";
import IDb from "./interfaces/IDb";

export default class MongoDB implements IDb {
    private readonly uri: string = config.dbconnection!

    async connect(): Promise<void> {
        await connect(this.uri)
    }
}