import { MongoDBService } from "../../../external/databases/mongo";
import { ItemRepository } from "../../../external/repositories/item/implementations";
import { DeleteItemUsecase } from "./DeleteItemUsecase";

const datasource = new MongoDBService();

const repository = new ItemRepository(datasource);

const deleteItemUsecase = new DeleteItemUsecase(repository);

export { deleteItemUsecase }
