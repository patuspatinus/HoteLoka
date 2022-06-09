const express = require('express');
const route = express.Router();
const db = require('../db/sql');
route.post('/login',async (req, res) =>{
    try{
        let result = await db.login(req.body.username,req.body.password);
        if(typeof result[0] !== 'undefined'){
            res.json(result[0])
        }
        else res.sendStatus(404);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
route.post('/history',async (req,res)=>{
    try{  
        let result = await db.getPaymentHistory(req.body.customerID);
        if(typeof result !== 'undefined') res.json(result);
        else res.send('Error');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
route.post('/filter', async (req,res)=>{
    try{  
        let result = await db.getByLocaltion(req.body.location);
        if(typeof result !== 'undefined') res.json(result);
        else res.send('Error');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
route.post('/list',async (req,res)=>{
    try{ 
        let result = await db.getList(req.body.hotelID,req.body.date,req.body.timeStaying);
        if(typeof result !== 'undefined') res.send(result);
        else res.send('Error');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
route.post('/getuser',async (req,res)=>{
    try{
        let result = await db.getProfile(req.body.customerID);
        if(typeof result[0] !== 'undefined') res.json(result[0]);
        else res.send('Something went wrong');
    } 
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
route.post('/register',async (req,res)=>{
    try{
        let result = await db.register(req.body.firstName,req.body.lastName,req.body.age,req.body.phoneNumber,req.body.country,req.body.username,req.body.password);
        if(typeof result[0] !== 'undefined') res.json(result[0]);
        else res.send('Something went wrong');
    } 
    catch(e){ 
        console.log(e);
        res.sendStatus(500);
    }
}); 
route.post('/bookroom',async (req,res)=>{
    try{ 
        let result = await db.booking(req.body.roomID,req.body.customerID,req.body.bookTime,req.body.timeStaying);
        if(typeof result[0] !== 'undefined') res.json(result);
        else res.send('Something went wrong');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
route.post('/addpayment',async (req,res)=>{
    try{
        let result = await db.addPayment(req.body.date,req.body.amount,req.body.customerID);
        if(typeof result !== 'undefined') res.json(result);
        else res.send('Something went wrong');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
route.post('/addmoney',async (req,res)=>{
    try{
        let result = await db.addmoney(req.body.amount,req.body.customerID);
        if(typeof result !== 'undefined') res.json(result);
        else res.send('Something went wrong');
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports = route;
