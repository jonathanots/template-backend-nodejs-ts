import cors from "cors";
import express from "express";
import { logger } from "./logger";
import { routes } from "./routes";

export const app = express();

app.use(cors({
    methods: 'HEAD, OPTIONS, PUT, POST, PATCH, GET, DELETE',
    allowedHeaders: 'content-type, authorization, x-usr-addr',
    credentials: true,
    maxAge: 1000 * 60 * 24,
    origin: '*',
  }
));
app.use(express.json());
app.use(logger);
app.use(routes);
