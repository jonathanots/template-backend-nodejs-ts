export interface DatabaseService {
    connect(): Promise<any>
    disconnect(): Promise<void>
}