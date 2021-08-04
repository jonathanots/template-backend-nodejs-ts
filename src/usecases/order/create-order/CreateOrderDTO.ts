export interface ICreateOrderDTO {
    order_id: string;
    company_id: string;
    customer_id: string | null;
    status_id: string;
    method_order_id: string;
    payment_id: string;
    description: string;
    products: ICreateOrderProductDTO[];

}
export interface ICreateOrderProductDTO {
    id: string;
    catalog_id: string;
}
