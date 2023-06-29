const express= require('express');
const router = require('./routes/route.js');
const Connection = require('./database/db.js');   //to write .js extension is important in server side
const cors= require('cors');
const bodyParser = require('body-parser');


console.log('index');

Connection();


const app= express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);



const PORT = 8000;
app.listen(PORT,()=>{console.log('server is running successfully on PORT: ', PORT)});