import { Item } from "../../../entities/item";
import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { IFindItemByIdDTO } from "./FindItemDTO";

export class FindItemByIdUsecase {
    constructor (private repository: IItemRepository) {}

    async execute (data: IFindItemByIdDTO): Promise <IItemException | Item>  {
        return await this.repository.findById(data);
    }
}