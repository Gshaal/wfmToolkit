const Model = require('../Models/schedulerM')
const io = require('../socket')

exports.getTeams = (req, res, next) => {

  Model.wfm_teams()
    .then(data => {
      res.status(200).json({
        results: data
      })
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });

}


exports.searchScheduler = (req, res, next) => {
  const { start_date, end_date, team } = req.body
  const page = req.query.page || 1;
  const rows = page * 10;
  console.log(start_date, end_date, team);
  Model.wfm_calender_search(start_date, end_date, team)
    .then(data => {
      res.status(200).json({
        calender: data[0],
        scheduler: data[1],
        shifts: data[2]
      })
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
}



exports.updateScheduler = (req, res, next) => {
  const { shift_id, scheduler_id } = req.body
  Model.wfm_calender_update(shift_id, scheduler_id)
    .then(data => {
      if(data.affectedRows > 0 ){
        return Model.updatedCell(scheduler_id)

      }else{
        const error = new Error();
        error.statusCode = 401;
        error.data = [{ msg: "Something went wrong,  please try again later" }];
        throw error;
      }
    })
    .then(cell => {
      res.status(200).json({
        results: cell
      })
      io.getIo().emit("update-cell", cell)
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
}