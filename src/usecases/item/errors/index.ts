export class IItemException implements Error {
    name: string;
    statusCode: number;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Occurs some ItemException', statusCode: number = 400, name: string = 'ItemException') {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
    }
}