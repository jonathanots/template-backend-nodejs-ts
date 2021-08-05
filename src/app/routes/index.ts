import { Request, Response, Router } from "express";
import { actionRouter } from "./actions";
import { orderRouter } from "./order";
import { serverRouter } from "./server";

export const routes = Router();

routes.use('/server', serverRouter);
routes.use('/order', orderRouter);
routes.use('/action', actionRouter);
