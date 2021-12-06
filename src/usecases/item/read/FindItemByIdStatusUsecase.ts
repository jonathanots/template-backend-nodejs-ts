import { Item } from "../../../entities/item";
import { IItemRepository } from "../../../external/repositories/item/interfaces";
import { IItemException } from "../errors";
import { IFindItemByIdStatusDTO } from "./FindItemDTO";

export class FindItemByIdStatusUsecase {
    constructor (private repository: IItemRepository) {}

    async execute (data: IFindItemByIdStatusDTO): Promise <IItemException | Item>  {
        return await this.repository.findBYIdStatus(data);
    }
}