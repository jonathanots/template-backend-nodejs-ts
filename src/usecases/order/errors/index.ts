export class IOrderException implements Error{
    name: string;
    message: string;
    stack?: string | undefined;
    
    constructor(message: string = 'Occurs some OrderException', name:string = 'OrderException') {
        this.name = name;
        this.message = message;
    }
}