import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connect from './comman/connection.js';

dotenv.config();

const app = express();

Connect();
const port = 9900;

app.listen(port, () => {
    console.log("Server is running on:", port);
});
