import { IDatabaseException } from "../databases/DatabaseErrors";

export interface IRepository {
    tryOpenConnection(): Promise<IDatabaseException | any>
    closeConnection(): Promise<IDatabaseException | void>
}