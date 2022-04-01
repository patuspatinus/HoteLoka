const express = require('express');
const route = express.Router();
const db = require('../db/sql');
route.post('/',async (req, res) =>{
    try{
        let result = await db.authen(req.body.username,req.body.password);
        if(typeof result[0] !== 'undefined') res.send('You are in');
        else res.send('Invalid username or password');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = route;

