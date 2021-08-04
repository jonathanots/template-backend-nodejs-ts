export class IActionException implements Error{
    name: string;
    message: string;
    stack?: string | undefined;
    
    constructor(message: string = 'Occurs some ActionException', name:string = 'Action Exception') {
        this.name = name;
        this.message = message;
    }
}