const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('./db-config');

const router = require('./Routes/model1');

app.use(express.json())
app.use(cors());

app.use('/api/', router);

app.listen(process.env.PORT,()=>{console.log(`Listen to port ${process.env.PORT}`)})