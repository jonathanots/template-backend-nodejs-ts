import { CreateItemController } from "../../adapters/controllers/item/CreateItemController";
import { DeleteItemController } from "../../adapters/controllers/item/DeleteItemController";
import { ReadItemByIdController } from "../../adapters/controllers/item/ReadItemByIdController";
import { ReadItemController } from "../../adapters/controllers/item/ReadItemController";
import { UpdateItemController } from "../../adapters/controllers/item/UpdateItemController";
import { createItemUsecase } from "./create";
import { deleteItemUsecase } from "./delete";
import { findAllItemUsecase, findItemByIdStatusUsecase, findItemByIdUsecase, findItemByStatusUsecase } from "./read";
import { updateItemUsecase } from "./update";

const createItemController = new CreateItemController(createItemUsecase);

const readItemController = new ReadItemController(findAllItemUsecase, findItemByStatusUsecase);

const readItemByIdController = new ReadItemByIdController(findItemByIdUsecase, findItemByIdStatusUsecase);

const updateItemController = new UpdateItemController(updateItemUsecase);

const deleteItemController = new DeleteItemController(deleteItemUsecase);

export { createItemController, readItemController, readItemByIdController, updateItemController, deleteItemController }

