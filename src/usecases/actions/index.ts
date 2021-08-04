import { ActionController } from "../../adapters/controllers/ActionController";
import { createActionUsecase } from "./create-actions";

const actionController = new ActionController(createActionUsecase);

export { actionController };