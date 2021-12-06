export class IDatabaseException implements Error {
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Occurs some DatabaseException', name: string = 'DatabaseException') {
        this.name = name;
        this.message = message;
    }
}