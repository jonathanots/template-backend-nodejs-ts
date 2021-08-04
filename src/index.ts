import 'dotenv/config'
import { app } from "./app";


app.listen(process.env.PORT || 3333, () => {
    console.log(`[server] Server is up and running on http://localhost:${process.env.PORT}`);
});