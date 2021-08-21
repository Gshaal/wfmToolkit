connection = require('../dbConn');
const bcrypt = require("bcryptjs");
module.exports = class Auth {

   static userExists(email) {

        return new Promise(function (resolve, reject) {
            connection.query(
                "select count(*) as total from heroku_930837092c17f24.wfm_employees where email = ?",
                [email],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error(err));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })

    }



    static createUser(name, email, password){

        return bcrypt.hash(password, 12).then((hashedPassword) => {

            return new Promise(function (resolve, reject) {
                connection.query(
                    "INSERT INTO heroku_930837092c17f24.wfm_employees(fullname,email,password,manager,role,team,isManger) VALUES(?,?,?,null,1,1,1)",
                    [name, email, hashedPassword],
                    function (err, rows) {
                        if (rows === undefined) {
                            reject(new Error(err));
                        } else {
                            const data = JSON.parse(JSON.stringify(rows))
                            resolve(data);
                        }
                    }
                )
            })
           
        })
    }


   static findUser(email){
        return new Promise(function (resolve, reject) {
            connection.query(
                "select * from heroku_930837092c17f24.wfm_employees where email = ?",
                [email],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }

    static updatePassword(user_id, password){
       return bcrypt.hash(password,12).then(hashedPassword=> {
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_employees set password = ? where user_id = ?",
                [hashedPassword,user_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
       })
    }

    static populate_calender(user_id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "CALL `heroku_930837092c17f24`.`populate_Calender`(?);",
                [user_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error(err));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }



}