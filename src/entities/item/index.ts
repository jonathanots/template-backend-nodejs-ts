import { v4 } from "uuid";
export class Tag {
    public tagCode?: string;
    public tagType?: number;
    public createdAt?: Date;

    constructor(props: Tag, createdAt?: Date) {
        Object.assign(this, props);

        if (!this.createdAt) {
            if (!createdAt)
                this.createdAt = createdAt;

            this.createdAt = new Date();
        }
    }
}

export class Item {
    public readonly id?: string;
    public name?: string;
    public tag?: Tag;
    public description?: string;
    public data?: object;
    public state?: number;
    public status?: number;
    public createdAt?: Date;

    constructor(props: Item, createdAt?: Date) {
        Object.assign(this, props);

        if (!this.id)
            this.id = v4();

        if (!this.createdAt) {
            if (!createdAt)
                this.createdAt = createdAt;

            this.createdAt = new Date();
        }
    }

}