export interface ICreateActionDTO {
    company_id: string;
    employee_id: string;
    method: ICreateMethodActionProductDTO;
    api: string;
    before: object;
    now: object;
}
export interface ICreateMethodActionProductDTO{
    name:string;
    alias:string;
} 