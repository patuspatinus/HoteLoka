const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes/route');
app.use(express.json());
app.use(cors());
app.use('/',route); 
app.listen(5000,() =>{
    console.log("123");
})