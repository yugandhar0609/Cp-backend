import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connect from './comman/connection.js';
import authRouter from './Routes/UserRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use(authRouter);

Connect();
const port = 9900;

app.listen(port, () => {
    console.log("Server is running on:", port);
});
