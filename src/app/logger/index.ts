import morgan from "morgan";
import fs from "fs";
import path from "path";

const folder = '/logs';

const accessLogStream = fs.createWriteStream(path.join(__dirname, folder, 'access.log'), { flags: 'a' });

export const logger = morgan('common', {stream: accessLogStream});
