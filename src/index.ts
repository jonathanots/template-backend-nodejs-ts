import 'dotenv/config'
import { app } from "./app";


app.listen(process.env.PORT || 3333, () => {
    console.log(`[server] Server is up and running on localhost:${process.env.PORT}.`);
});