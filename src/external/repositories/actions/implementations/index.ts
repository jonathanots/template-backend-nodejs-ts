import { Action, ActionResponse } from "../../../../entities/actions";
import { ICreateActionDTO } from "../../../../usecases/actions/create-actions/CreateActionDTO";
import { CreateActionAlreadyExistsException } from "../../../../usecases/actions/create-actions/CreateActionErrors";
import { IActionException } from "../../../../usecases/actions/errors";
import { DatabaseService } from "../../../databases";
import { IActionsRepository } from "../interfaces";

export class ActionRepository implements IActionsRepository{

    private datasource:DatabaseService;

    constructor(datasource:DatabaseService) {
        this.datasource = datasource;
     }

     async findById (id: string): Promise<IActionException | ActionResponse> {

        try {

            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some error was occurred with database connection');
            
            const data = await db.collection('actions').findOne(
                {
                    id: id
                }, { }
            );

            if(data)
                return new ActionResponse(data);
            
            throw Error("No object was found.");
        }  catch (error) {
            return error;
        } finally {
            await this.datasource.disconnect();
        }
    }

    async createAction (data: ICreateActionDTO): Promise<IActionException | void> {
        const action = new Action({
            company_id: data.company_id,
            employee_id: data.employee_id,
            api: data.api,
            method: data.method,
            before: data.before,
            now: data.now
        });

        try {
            
            const found = await this.findById(action.id!);
            
            if(found instanceof ActionResponse)
                throw new CreateActionAlreadyExistsException("Data already exists on database.");
            
            const db = await this.datasource.connect();

            if(!db)
                throw Error('Some error was occurred with database connection');
            
            const result = await db.collection('actions').insertOne(action);

            if(!result)
                throw Error('Some error was occurred when tried insert data.');
        } catch (error) {
            throw error;
        } finally {
            await this.datasource.disconnect();
        }
    }

}