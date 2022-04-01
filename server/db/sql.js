const mysql = require('mysql');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database: 'hotel_booking_app',
    port: 3307
});
let Sql_query = {};
Sql_query.authen = (username, password)=>{
    return new Promise((res,rej) => {
        pool.query('SELECT * FROM `customer` WHERE PASSWORD = ? AND Username = ?',[password,username],(err,result)=>{
            if(err){
                return rej(err);
            }    
                return res(result);
        });
    });
};
module.exports = Sql_query;
