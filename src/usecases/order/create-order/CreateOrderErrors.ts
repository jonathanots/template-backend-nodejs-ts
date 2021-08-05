import { IOrderException } from "../errors";

export class CreateOrderInvalidDataException implements IOrderException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Create Order Invalid Data Exception') {
        this.name = name;
        this.message = message;
    }
}

export class CreateOrderAlreadyExistsException implements IOrderException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Create Order Already Exists Exception') {
        this.name = name;
        this.message = message;
    }
}