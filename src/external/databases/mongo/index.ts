import { Connection, Mongoose } from "mongoose";
import { DatabaseService } from "..";
import { Config } from "../../../app/config";

export class MongoDBService implements DatabaseService{

    private host: string;
    private port: string;
    private user: string;
    private pass: string;

    private client: null | Mongoose;

    constructor(
        private config = new Config()
    ) {
        this.host = this.config.noRelationalLDatabase.host;
        this.port = this.config.noRelationalLDatabase.port;
        this.user = this.config.noRelationalLDatabase.user;
        this.pass = this.config.noRelationalLDatabase.password;

        this.client = null;

        // this.connect();
    }

    async connect (): Promise<Connection | undefined> {
        if(this.client) {
            try {
                await this.client.connect(`mongodb://${this.host}:${this.port}`);
                const db = this.client.connection;

                db.on('error', console.error.bind(console, 'connection error: '));
                db.once('open', function() {
                    return db.useDb('test');
                });
            } catch (error) {
                this.client = null;
                return undefined;
            } 
        }

    }
    async disconnect (): Promise<void> {
        if(this.client) {
            this.client.disconnect();
        }
    }
}