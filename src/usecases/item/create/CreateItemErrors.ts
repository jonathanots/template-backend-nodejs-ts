import { IItemException } from "../errors";

export class CreateItemInvalidDataException implements IItemException {
    name: string;
    message: string;
    statusCode: number;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', statusCode: number = 409, name: string = 'Create Item Invalid Data Exception') {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
    }
}

export class CreateItemAlreadyExistsException implements IItemException {
    name: string;
    message: string;
    statusCode: number;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', statusCode: number = 409, name: string = 'Create Item Already Exists Exception') {
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
    }
}