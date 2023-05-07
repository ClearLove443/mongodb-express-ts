import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
dotenv.config()

const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

import { router } from "./routes/routes";

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server Started at ${port}`)
})