const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const Connect = require('./comman/connection');
const app = express();

Connect();
const port = 9900;

app.listen(port,()=>{
    console.log("server in running on:",port)
})  