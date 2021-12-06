import { IDatabaseException } from "./DatabaseErrors";

export interface DatabaseService {
    connect(): Promise<any | IDatabaseException>
    disconnect(): Promise<void>
}