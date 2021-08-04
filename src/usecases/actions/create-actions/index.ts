import { MongoDBService } from "../../../external/databases/mongo";
import { ActionRepository } from "../../../external/repositories/actions/implementations";
import { CreateActionUsecase } from "./CreateActionUsecase";

const datasource = new MongoDBService();

const repository = new ActionRepository(datasource);

const createActionUsecase = new CreateActionUsecase(repository);

export { createActionUsecase };