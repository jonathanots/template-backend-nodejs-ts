import { Request, Response, Router } from "express";
import { actionRouter } from "./actions";
import { fileRouter } from "./file";
import { itemRouter } from "./item";
import { orderRouter } from "./order";
import { serverRouter } from "./server";

export const routes = Router();

routes.use('/server', serverRouter);
routes.use('/order', orderRouter);
routes.use('/action', actionRouter);
routes.use('/uploadFile', fileRouter);
routes.use('/item', itemRouter);
