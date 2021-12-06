import { Item } from "../../../../entities/item";
import { ICreateItemResponse } from "../../../../usecases/item/create/CreateItemDTO";
import { IItemException } from "../../../../usecases/item/errors";
import { IItemRepository } from "../interfaces";
import { DatabaseService } from "../../../databases";
import { IDatabaseException } from "../../../databases/DatabaseErrors";
import { CreateItemAlreadyExistsException } from "../../../../usecases/item/create/CreateItemErrors";
import { Connection } from "mongoose";
import { IFindItemByStatusDTO, IFindItemByIdStatusDTO, IFindItemByIdDTO, IFindOperation } from "../../../../usecases/item/read/FindItemDTO";
import { IUpdatedItemResponse } from "../../../../usecases/item/update/UpdateItemDTO";
import { UpdateItemNotFoundException } from "../../../../usecases/item/update/UpdateItemErrors";
import { IDeleteItemDTO, IDeleteItemResponse } from "../../../../usecases/item/delete/DeleteItemDTO";
import { DeleteItemNotFoundException } from "../../../../usecases/item/delete/DeleteItemErrors";
import { FindItemNotFoundException } from "../../../../usecases/item/read/FindItemErrors";

export class ItemRepository implements IItemRepository {

    constructor(private datasource: DatabaseService) { }

    async tryOpenConnection(): Promise<any | IDatabaseException> {
        const db = await this.datasource.connect();

        if (db instanceof Error)
            throw new IItemException("Some error was occurred with database connection");

        return db;
    }

    async closeConnection(): Promise<void | IDatabaseException> {
        await this.datasource.disconnect();
    }

    async findAll(data?: IFindItemByStatusDTO): Promise<IItemException | Item[]> {
        console.log("data", data)
        try {
            if (!data)
                throw new IItemException("Data not valid");


            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').find({}).skip(IFindOperation.getOffset(data.offset, data.limit)).limit(data.limit).toArray();

            if (result)
                return result.map<Item>((document) => {
                    return new Item(document);
                });

            throw new FindItemNotFoundException("None object was found");
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async findById(data?: IFindItemByIdDTO): Promise<Item | IItemException> {
        try {
            if (!data)
                throw new IItemException("ID not valid");

            return this.findByTag(data.id);

            // const db = await this.tryOpenConnection() as Connection;

            // const result = await db.collection('items').findOne(
            //     {
            //         id: data.id,
            //     }, {}
            // );

            // if (result)
            //     return new Item(result);

            // throw new FindItemNotFoundException("None object was found");
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async findByStatus(data?: IFindItemByStatusDTO): Promise<Item[] | IItemException> {
        try {

            if (!data)
                throw new IItemException("Data not valid");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').find(
                {
                    status: data.status
                }, {}
            ).skip(IFindOperation.getOffset(data.offset, data.limit)).limit(data.limit).toArray();

            if (result)
                return result.map<Item>((document) => {
                    return new Item(document);
                });

            throw new FindItemNotFoundException("None object was found");
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async findBYIdStatus(data?: IFindItemByIdStatusDTO): Promise<Item | IItemException> {
        try {

            if (!data)
                throw new IItemException("Data not valid");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').findOne(
                {
                    id: data.id
                }, {}
            );

            if (result)
                return new Item(result);

            throw new FindItemNotFoundException("None object was found");
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async findByTag(tag?: String): Promise<Item | IItemException> {
        try {

            if (!tag)
                throw new IItemException("Data not valid");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').findOne(
                {
                    'tag.tagCode': tag
                }, {}
            );

            if (result)
                return new Item(result);

            throw new FindItemNotFoundException("None object was found");
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async save(item?: Item): Promise<IItemException | ICreateItemResponse> {
        try {

            if (!item)
                throw new IItemException("Data not valid");

            // const found = await this.findById(<IFindItemByIdDTO>{ id: item.id });
            const found = await this.findByTag(item.tag?.tagCode);

            if (found instanceof Item)
                throw new CreateItemAlreadyExistsException("Data already exists on database.");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').insertOne(item);

            if (!result)
                throw new IItemException('Some error was occurred when tried insert data.');

            return <ICreateItemResponse>{
                id: item.id ?? '',
                tag: item.tag,
                state: item.state,
                status: item.status
            };
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async updateItem(data?: Item): Promise<IItemException | IUpdatedItemResponse> {
        try {

            if (!data)
                throw new IItemException("Data not valid");

            const found = await this.findById(<IFindItemByIdDTO>{ id: data.id });

            if (found! instanceof Item)
                throw new UpdateItemNotFoundException("Data not found on database.");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').updateOne({ id: data.id }, {
                $set: data
            });

            if (!result)
                throw new IItemException('Some error was occurred when tried update data.');

            return <IUpdatedItemResponse>{
                id: data.id ?? '',
                status: "success"
            };
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }

    async deleteItem(data?: IDeleteItemDTO): Promise<IItemException | IDeleteItemResponse> {
        try {

            if (!data)
                throw new IItemException("Data not valid");

            const found = await this.findById(<IFindItemByIdDTO>{ id: data.id });

            if (found! instanceof Item)
                throw new DeleteItemNotFoundException("Data not found on database.");

            const db = await this.tryOpenConnection() as Connection;

            const result = await db.collection('items').deleteOne({ id: data.id });

            if (!result)
                throw new IItemException('Some error was occurred when tried remove data.');

            return <IDeleteItemResponse>{
                status: "success"
            };
        } catch (error: any) {
            return error;
        } finally {
            await this.closeConnection();
        }
    }
}