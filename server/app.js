const express = require('express');
const mysql = require('mysql');
const app = express();
const route = require('./routes/route');
app.use(express.json());
app.use('/login',route); 
app.listen(5000,() =>{
    console.log("123");
})