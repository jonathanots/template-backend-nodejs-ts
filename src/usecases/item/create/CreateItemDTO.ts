export interface ICreateTagResponse {
    tagCode?: string;
    tagType?: number;
}

export interface ICreateItemResponse {
    id: string;
    tag?: ICreateTagResponse;
    state: number;
    status: number;
}

export interface ICreateTagDTO {
    tagCode: string;
    tagType: number;
    createdAt?: Date;
}

export interface ICreateItemDTO {
    id?: string;
    name: string;
    tag: ICreateTagDTO;
    description: string;
    data: object;
    state: number;
    status: number;
    createdAt?: Date;
}