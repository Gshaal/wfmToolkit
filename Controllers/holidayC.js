const Model = require("../Models/holidayM");

exports.wfmManagers = (req, res, next) => {
  Model.wfm_managers()
    .then((data) => {
      res.status(200).json({
        results: data,
      });
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
};

exports.submitRequest = (req, res, next) => {
  const { dateFrom, dateTo, manager, comment } = req.body;
  const ref = generateRef();
  Model.submitRequest(ref, req.userId, manager, dateFrom, dateTo, comment)
    .then((data) => {
      if (data.affectedRows > 0) {
        return Model.updateCalender(dateFrom, dateTo, req.userId,true);
      } else {
        const error = new Error();
        error.statusCode = 401;
        error.data = [{ msg: "Something went wrong" }];
        throw error;
      }
    })
    .then((cells) => {
      console.log(cells);
      res.status(200).json({
        submitted: true,
      });
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
};

const generateRef = () => {
  return "wfmxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

exports.fetchPto = (req, res, next) => {
  const user_id = req.userId;
  Model.fetchPendingPto(user_id)
    .then((data) => {
      res.status(200).json({
        results: data,
      });
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
};


exports.history = async (req, res, next)=> {
  const user_id = req.userId;
  try{

    const data = await Model.fetchHistory(user_id);

    res.status(200).json({
      results: data,
    });


  }catch(err){
    console.error(err);
    if (!err.statusCode) {
      err.statusCode = 404;
    }
    next(err);
  }
}

exports.actionRequest = async (req, res, next) => {
  try {
    const { id, approved ,dateFrom, dateTo, user_id} = req.body;

    const apprveRequest = approved
      ? await Model.approveRequest(id)
      : await Model.declineRequest(id);

    if (apprveRequest.affectedRows > 0) {
      if(approved){
        await Model.updateCalender(dateFrom, dateTo, user_id,false) 
        await Model.setHoliday(dateFrom, dateTo, user_id)
      }else {
        await Model.updateCalender(dateFrom, dateTo, user_id,false) 
      }
      let respond = await Model.fetchPendingPto(req.userId);
      res.status(200).json({
        results: respond,
      });
    } else {
        const error = new Error();
        error.statusCode = 401;
        error.data = [{ msg: "Something went wrong,  please try again later" }];
        throw error;
    }
  } catch (err) {
    console.error(err);
    if (!err.statusCode) {
      err.statusCode = 404;
    }
    next(err);
  }
};
