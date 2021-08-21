connection = require('../dbConn');
module.exports = class Holiday {

    static wfm_managers(){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.vw_wfm_managers",
                [],
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

    static submitRequest(ref,userId,manager,dateFrom, dateTo, comment){
        return new Promise(function (resolve, reject) {
            connection.query(
                "INSERT INTO `heroku_930837092c17f24`.`wfm_holiday`(`ref_number`,`user_id`,`manager`,`date_from`,`date_to`,`comment`,`status`) VALUES (?,?,?,?,?,?,?);",
                [ref,userId,manager,dateFrom, dateTo, comment, 'pending'],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }


    static updateCalender(dateFrom, dateTo, userId, block){
        const value = block ? 1 : null
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_scheduler set requestedPto = ? where datestamp between ? and ? and user_id = ?",
                [value, dateFrom, dateTo, userId],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }

    static fetchPendingPto(user_id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.vw_holiday_requests where approver_id = ? and `status` = 'pending'",
                [user_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })

    }

    static fetchHistory(user_id){

        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.vw_holiday_requests where approver_id = ? and `status` != 'pending'",
                [user_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })


    }

    static approveRequest(id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_holiday set `status` = 'approved' where ref_number = ?",
                [id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }

    static declineRequest(id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_holiday set `status` = 'declined' where ref_number = ?",
                [id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }

    static setHoliday(dateFrom, dateTo, user_id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_scheduler set shift_id = 2 where datestamp between ? and ? and user_id = ?",
                [dateFrom, dateTo, user_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error("Error: rows is undefined"));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        resolve(data);
                    }
                }
            )
        })
    }


    
}