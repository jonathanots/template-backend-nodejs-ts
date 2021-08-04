import { Action } from "../../../entities/actions";
import { IActionsRepository } from "../../../external/repositories/actions/interfaces";
import { IActionException } from "../errors";
import { ICreateActionDTO } from "./CreateActionDTO";

export class CreateActionUsecase {

    constructor(
        private repository:IActionsRepository
    ) { }

    async execute(data: ICreateActionDTO) : Promise<IActionException | void>{
        return await this.repository.createAction(data);
    }
}