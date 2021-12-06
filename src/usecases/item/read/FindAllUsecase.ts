import { Item } from "../../../entities/item";
import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { IFindItemByStatusDTO } from "./FindItemDTO";

export class FindAllItemUsecase {
    constructor(private repository: IItemRepository) { }

    async execute(data?: IFindItemByStatusDTO): Promise<IItemException | Array<Item>> {
        return this.repository.findAll(data);
    }
}