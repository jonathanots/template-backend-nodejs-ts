import { IDatabaseException } from "../DatabaseErrors";

export class OpenConnectionException implements IDatabaseException {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name: string = 'Fail at trying open the database connection') {
        this.name = name;
        this.message = message;
    }
}

export class CloseConnectionException implements IDatabaseException {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name: string = 'Fail at trying close the database connection') {
        this.name = name;
        this.message = message;
    }
}

export class DatabaseManagementException implements IDatabaseException {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name: string = 'Fail at trying management the database') {
        this.name = name;
        this.message = message;
    }
}