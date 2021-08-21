connection = require('../dbConn');
module.exports = class Settings {
    static addTeam(name){
        return new Promise(function (resolve, reject) {
            connection.query(
                "INSERT INTO `heroku_930837092c17f24`.`wfm_teams` (`name`) VALUES (?)",
                [name],
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
    static wfmAnalysis(){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT month_name , count(shift_id) * 8 as total FROM heroku_930837092c17f24.wfm_scheduler where shift_id = 1 and datestamp > DATE_SUB(now(), INTERVAL 6 MONTH) group by month_name order by datestamp",
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

    static wfmShiftAnalysis(){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT tb2.shift_name , count(tb1.shift_id) as total, shift_color as bgcolor FROM heroku_930837092c17f24.wfm_scheduler as tb1 left join heroku_930837092c17f24.wfm_shifts as tb2 on tb1.shift_id = tb2.shift_id where  month_number = MONTH(CURRENT_DATE()) and tb2.shift_name is not null group by shift_name order by datestamp",
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
}