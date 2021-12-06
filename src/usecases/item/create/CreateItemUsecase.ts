import { Item, Tag } from "../../../entities/item";
import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { ICreateItemDTO, ICreateItemResponse } from "./CreateItemDTO";

export class CreateItemUsecase {

    constructor(private repository: IItemRepository) { }

    async execute(data: ICreateItemDTO): Promise<IItemException | ICreateItemResponse> {
        const item = new Item({
            name: data.name,
            tag: data.tag,
            data: data.data,
            description: data.description,
            state: data.state,
            status: data.status
        });

        return await this.repository.save(item);
    }
}