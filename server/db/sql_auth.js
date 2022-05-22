const mysql = require('mysql');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database: 'hotel_booking_app',
    port: 3306,
    multipleStatements: true
});
let Sql_query = {};
Sql_query.register = (customerID,firstName,lastName,age,phoneNumber,country,username,password)=>{
    return new Promise((res,rej)=>{
        pool.query('INSERT INTO `customer` (`customerID`, `firstName`, `lastName`, `age`, `phoneNumber`, `country`) VALUES (?, ?, ?, ?, ?, ?);INSERT INTO `account` (`username`, `password`, `customerID`, `Wallet`) VALUES (?, ?, ?, NULL);',[customerID,firstName,lastName,age,phoneNumber,country,username,password,customerID],(err,result)=>{
            if(err){
                return rej(err);
            }
            return res(result);
        })
    })
}
Sql_query.login = (username, password)=>{
    return new Promise((res,rej) => {
        pool.query('SELECT * FROM `account` WHERE PASSWORD = ? AND Username = ?',[password,username],(err,result)=>{
            if(err){
                return rej(err);
            }    
                return res(result);
        });
    });
};
module.exports = Sql_query;
