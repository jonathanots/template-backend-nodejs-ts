export class IFindOperation {
    public operation: string = "AND"; //AND or OR
    public limit: number = 100;
    public offset: number = 1;
    
    public static getOffset = (offset: number, limit:number):  number => {
        return limit * (offset - 1);
    }
}

export interface IFindItemByIdDTO extends IFindOperation {
    id: string;
}

export interface IFindItemByStatusDTO extends IFindOperation {
    status?: number;
}

export interface IFindItemByIdStatusDTO extends IFindOperation {
    id: string;
    status: number;
}
