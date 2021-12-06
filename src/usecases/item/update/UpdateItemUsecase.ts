import { Item } from "../../../entities/item";
import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { IUpdatedItemResponse} from "./UpdateItemDTO";

export class UpdateItemUsecase {
    constructor (private repository: IItemRepository) {}

    async execute(data: Item): Promise<IItemException | IUpdatedItemResponse> {
        return await this.repository.updateItem(data);
    }
}