import { MongoDBService } from "../../../external/databases/mongo";
import { ItemRepository } from "../../../external/repositories/item/implementations";
import { CreateItemUsecase } from "./CreateItemUsecase";

const datasource = new MongoDBService();

const itemRepository = new ItemRepository(datasource);

const createItemUsecase = new CreateItemUsecase(itemRepository);

export { createItemUsecase };
