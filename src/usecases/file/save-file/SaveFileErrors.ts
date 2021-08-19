import { IFileException } from "../errors";

export class SaveFileInvalidDataException implements IFileException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Save File Invalid Data Exception') {
        this.name = name;
        this.message = message;
    }
}

export class SaveFileAlreadyExistsException implements IFileException{
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(message: string = 'Some data on body is invalid', name:string = 'Save File Already Exists Exception') {
        this.name = name;
        this.message = message;
    }
}