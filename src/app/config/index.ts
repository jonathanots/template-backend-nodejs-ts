import "dotenv/config";

export interface IDatabase{
    host: string;
    port: string;
    user: string;
    password: string;
}
export interface IConfig {
    relationalDatabase: IDatabase;
    noRelationalLDatabase: IDatabase;
}


export class Config implements IConfig{
    public readonly relationalDatabase: IDatabase;
    public readonly noRelationalLDatabase: IDatabase;
    public readonly jwt: string;

    constructor() {
        this.relationalDatabase = {
            host: process.env.RDB_HOST || '',
            port: process.env.RDB_PORT || '',
            user: process.env.RDB_USER || '',
            password: process.env.RDB_PASS || ''
        };

        this.noRelationalLDatabase = {
            host: process.env.NDB_HOST || '',
            port: process.env.NDB_PORT || '',
            user: process.env.NDB_USER || '',
            password: process.env.NDB_PASS || ''
        };

        this.jwt = process.env.JWT || '';
    }

}