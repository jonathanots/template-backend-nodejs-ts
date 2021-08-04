export class OrderResponse {
    public id!: string;
    public company_id!: string;
    public customer_id!: string | null;
    public status_id!: string;
    public method_order_id!: string;
    public payment_id!: string;
    public description!: string;

    constructor(props: OrderResponse) {
        Object.assign(this, props);
    }
}

export class Order {
    public order_id!: string;
    public company_id!: string;
    public customer_id!: string | null;
    public status_id!: string;
    public method_order_id!: string;
    public payment_id!: string;
    public description!: string;
    public products!: OrderProduct[];

    constructor(props: Order) {
        Object.assign(this, props);
    }
}

export class OrderProduct {
    public order_id!: string;
    public catalog_id!: string;

    constructor(props: OrderProduct) {
        Object.assign(this, props);
    }
}

