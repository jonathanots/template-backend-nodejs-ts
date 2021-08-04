import { IActionException } from "../errors";

export class CreateActionInvalidDataException implements IActionException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Create Action Invalid Data Exception') {
        this.name = name;
        this.message = message;
    }
}

export class CreateActionAlreadyExistsException implements IActionException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Create Action Already Exists Exception') {
        this.name = name;
        this.message = message;
    }
}