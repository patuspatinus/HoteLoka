const express = require('express');
const route = express.Router();
const db = require('../db/sql_auth');
route.post('/login',async (req, res) =>{
    try{
        let result = await db.login(req.body.username,req.body.password);
        if(typeof result[0] !== 'undefined') res.send('You are in');
        else res.send('Invalid username or password');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
route.post('/register',async (req,res)=>{
    console.log(req.body);
    try{
        let result = await db.register(req.body.customerID,req.body.firstName,req.body.lastName,req.body.age,req.body.phoneNumber,req.body.country,req.body.username,req.body.password);
        if(typeof result[0] !== 'undefined') res.send('Adding user successfully');
        else res.send('Something went wrong');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = route;

