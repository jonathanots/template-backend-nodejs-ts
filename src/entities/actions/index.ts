import { v4 } from "uuid";

export class ActionResponse {
    public readonly id?: string;
    public company_id?: string;
    public employee_id?: string;
    public method?: MethodAction;
    public date?: Date;
    public api?: string;
    public before?: object;
    public now?: object;

    constructor(props: ActionResponse) {
        Object.assign(this, props);
    }
}

export class MethodAction {
    public name?:string;
    public alias?:string;

    constructor(props: { name:string , alias: string } ) {
        Object.assign(this, props);
    }
} 

export class Action {
    public readonly id?: string;
    public company_id?: string;
    public employee_id?: string;
    public method?: MethodAction;
    public date?: Date;
    public api?: string;
    public before?: object;
    public now?: object;

    constructor(props: Omit<Action, 'id'>, id?: string){
        Object.assign(this, props);

        if(!this.id)
            this.id = v4();
        
        if(!this.date)
            this.date = new Date();
    }

}