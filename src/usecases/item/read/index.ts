import { MongoDBService } from "../../../external/databases/mongo";
import { ItemRepository } from "../../../external/repositories/item/implementations";
import { FindAllItemUsecase } from "./FindAllUsecase";
import { FindItemByIdStatusUsecase } from "./FindItemByIdStatusUsecase";
import { FindItemByIdUsecase } from "./FindItemByIdUsecase";
import { FindItemByStatusUsecase } from "./FindItemByStatusUsecase";

const datasource = new MongoDBService();

const repository = new ItemRepository(datasource);

const findAllItemUsecase = new FindAllItemUsecase(repository);

const findItemByIdUsecase = new FindItemByIdUsecase(repository);

const findItemByStatusUsecase = new FindItemByStatusUsecase(repository);

const findItemByIdStatusUsecase = new FindItemByIdStatusUsecase(repository);

export { findAllItemUsecase, findItemByIdUsecase, findItemByStatusUsecase, findItemByIdStatusUsecase }