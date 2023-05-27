// all npm package....
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')
const {readdirSync} = require('fs');


// app.use ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.static('./views/registration'));


// registration section......
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + "./views/registration/index.html"));
});


// all router read code....
readdirSync('./routers').map(r => app.use('/api/v1',require(`./routers/${r}`)));


// route error code....
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/publick/error.html"));
});


// app and port exports... in index.js
module.exports = {app,port};

