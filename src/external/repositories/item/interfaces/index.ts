import { Item} from "../../../../entities/item";
import { ICreateItemResponse } from "../../../../usecases/item/create/CreateItemDTO";
import { IDeleteItemDTO, IDeleteItemResponse } from "../../../../usecases/item/delete/DeleteItemDTO";
import { IItemException } from "../../../../usecases/item/errors";
import { IFindItemByIdDTO, IFindItemByIdStatusDTO, IFindItemByStatusDTO } from "../../../../usecases/item/read/FindItemDTO";
import { IUpdatedItemResponse } from "../../../../usecases/item/update/UpdateItemDTO";
import { IRepository } from "../../RespositoryInterface";

export interface IItemRepository extends IRepository {
    save(item?: Item): Promise<IItemException | ICreateItemResponse>
    findAll(data?: IFindItemByStatusDTO): Promise<IItemException | Array<Item>>
    findById(data?: IFindItemByIdDTO): Promise<IItemException | Item>
    findByStatus(data?: IFindItemByStatusDTO): Promise<IItemException | Array<Item>>
    findBYIdStatus(data?: IFindItemByIdStatusDTO): Promise<IItemException | Item>
    updateItem(data?: Item) : Promise<IItemException | IUpdatedItemResponse>
    deleteItem(data?: IDeleteItemDTO) : Promise<IItemException | IDeleteItemResponse>
}