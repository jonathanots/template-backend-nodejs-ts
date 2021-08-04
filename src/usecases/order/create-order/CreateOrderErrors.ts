import { IOrderException } from "../errors";

export class CreateOrderInvalidData implements IOrderException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'CreateOrderInvalidData') {
        this.name = name;
        this.message = message;
    }
}