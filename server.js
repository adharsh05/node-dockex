'use strict';

const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const instantMongoCrud = require('express-mongo-crud');
mongoose.connect('database:27017/mongocrud');
const PORT = 8080;
const HOST = '0.0.0.0';
const options = {
    host: `localhost:${PORT}`
}


const app = express();
app.get('/', (req, res)=>{
    res.send('SLF Goal');
});
app.use(bodyParser.json());
app.use(instantMongoCrud(options));
app.listen(PORT, HOST);

console.log(`__________Running on host://${HOST}:${PORT}`);