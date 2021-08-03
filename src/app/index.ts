import cors from "cors";
import express from "express";
import { logger } from "./logger";
import { routes } from "./routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger)
app.use(routes);
