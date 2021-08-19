export class IFileException implements Error{
    name: string;
    message: string;
    stack?: string | undefined;
    
    constructor(message: string = 'Occurs some FileException', name:string = 'FileException') {
        this.name = name;
        this.message = message;
    }
}