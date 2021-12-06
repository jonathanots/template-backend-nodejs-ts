import { MongoDBService } from "../../../external/databases/mongo";
import { ItemRepository } from "../../../external/repositories/item/implementations";
import { UpdateItemUsecase } from "./UpdateItemUsecase";

const datasource = new MongoDBService();

const repository = new ItemRepository(datasource);

const updateItemUsecase = new UpdateItemUsecase(repository);

export { updateItemUsecase }
