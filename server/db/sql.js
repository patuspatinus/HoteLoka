const mysql = require('mysql');
const pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'bbd4b755f6a2cc',
    database: 'heroku_1904eff09043173',
    password: '1621b744',
    multipleStatements: true
});
let Sql_query = {};
Sql_query.register = (firstName,lastName,age,phoneNumber,country,username,password)=>{
    return new Promise((res,rej)=>{
        pool.query('INSERT INTO `customer` ( `firstName`, `lastName`, `age`, `phoneNumber`, `country`) VALUES(?,?,?,?,?);Set @lid = (select LAST_INSERT_ID());  INSERT INTO `account` (`username`, `password` , `Wallet`, `customerID`) VALUES (?, ?, 0, @lid);',[firstName,lastName,age,phoneNumber,country,username,password],(err,result)=>{
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
Sql_query.getByLocaltion = (location) =>{
    return new Promise((res,rej)=>{
        pool.query("SELECT * FROM `hotel` WHERE hotelLocation LIKE CONCAT('%',?,'%')",[location],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        })  
    })
}
Sql_query.getList = (hotelID, date, timeStaying)=>{
    return new Promise((res,rej)=>{
        pool.query("SELECT * FROM room r WHERE r.roomID NOT IN ( SELECT (SELECT bd.roomID FROM bookingdetails bd WHERE b.bookingID = bd.bookingID) as RoomID FROM booking b WHERE (DATEDIFF(?, DATE_ADD(b.bookTime, INTERVAL b.timeStaying DAY)) <= 0) AND (DATEDIFF(DATE_ADD(?, INTERVAL ? DAY), b.bookTime) >= 0)) AND r.hotelID = ?;",[date,date,timeStaying,hotelID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        })
    }) 
};
Sql_query.booking = (roomID, customerID, bookTime, timeStaying) =>{
    return new Promise((res,rej)=>{
        pool.query("INSERT INTO `booking` ( `customerID`, `bookTime`, `timeStaying`) VALUES(?,?,?);Set @lid = (select LAST_INSERT_ID());  INSERT INTO `bookingdetails` (`bookingID`, `roomID` ,`customerRating`) VALUES (@lid,?,0);",[customerID,bookTime,timeStaying,roomID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        });
    })
}
Sql_query.getProfile = (customerID)=>{
    return new Promise((res,rej)=>{
        pool.query("SELECT * FROM `customer` WHERE customerID = ?",[customerID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        });
    })
}
Sql_query.addPayment = (date, amount, customerID)=>{
    return new Promise((res,rej)=>{
        pool.query("INSERT INTO `payment` (`paymentDate`, `amount`, `customerID`) VALUES(?,?,?);",[date,amount,customerID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        });
    })
}
Sql_query.getPaymentHistory = (customerID) =>{
    return new Promise((res,rej)=>{
        pool.query("SELECT * from payment where customerID = ?",[customerID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        })
    })
}
Sql_query.addmoney = (amount,customerID) =>{
    return new Promise((res,rej)=>{
        pool.query("UPDATE `account` SET `wallet` = `wallet` + ? WHERE `account`.`customerID` = ?;",[amount,customerID],(err,result)=>{
            if(err) return rej(err);
            else return res(result);
        })
    })
}
module.exports = Sql_query;
