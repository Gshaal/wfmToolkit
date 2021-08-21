connection = require('../dbConn');
module.exports = class Scheduler {
    static wfm_teams(){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT team_id as `key`, name as `text`, team_id as `value` FROM  heroku_930837092c17f24.wfm_teams ORDER BY name",
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


    static wfm_calender(start_date,end_date,team){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT distinct datestamp, month_name, day_name, day_number, `year` FROM heroku_930837092c17f24.wfm_scheduler where datestamp between ? and ?  order by datestamp",
                [new Date(start_date),new Date(end_date),team],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error(err));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        console.log(data);
                        resolve(data);
                    }
                }
            )
        })
    }

    static wfm_calender_staff(start_date,end_date,team){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.vw_wfm_calender where datestamp between ? and ? and team  IN ('" + team.join("','") + "')",
                [new Date(start_date),new Date(end_date)],
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


    static wfm_shifts(){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.wfm_shifts where standard = 1",
                [],
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


    static wfm_calender_update(shift_id,scheduler_id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "update heroku_930837092c17f24.wfm_scheduler set shift_id = ? where scheduler_id = ?",
                [shift_id,scheduler_id],
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


    static updatedCell(scheduler_id){
        return new Promise(function (resolve, reject) {
            connection.query(
                "SELECT * FROM heroku_930837092c17f24.vw_wfm_calender where scheduler_id = ?",
                [scheduler_id],
                function (err, rows) {
                    if (rows === undefined) {
                        reject(new Error(err));
                    } else {
                        const data = JSON.parse(JSON.stringify(rows))
                        console.log(data);
                        resolve(data);
                    }
                }
            )
        })
    }


    static wfm_calender_search(start_date,end_date,team){
        const data = Promise.all([
            this.wfm_calender(start_date,end_date,team),
            this.wfm_calender_staff(start_date,end_date,team),
            this.wfm_shifts()
        ])

        return data
    }
    




    
}