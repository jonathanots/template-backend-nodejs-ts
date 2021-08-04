import { ActionResponse } from "../../../../entities/actions";
import { ICreateActionDTO } from "../../../../usecases/actions/create-actions/CreateActionDTO";
import { IActionException } from "../../../../usecases/actions/errors";

export interface IActionsRepository{
    findById (id: string): Promise<IActionException | ActionResponse>
    createAction(data: ICreateActionDTO): Promise<IActionException | void>
}