import { IItemException } from "../errors";

export class FindItemNotFoundException implements IItemException {
    name: string;
    message: string;
    statusCode: number;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', statusCode: number = 422, name: string = 'Find Item Not Found Exception') {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
    }
}