import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { IDeleteItemDTO, IDeleteItemResponse } from "./DeleteItemDTO";

export class DeleteItemUsecase {
    constructor (private repository: IItemRepository) {}

    async execute(data: IDeleteItemDTO): Promise<IItemException | IDeleteItemResponse> {
        return await this.repository.deleteItem(data);
    }
}