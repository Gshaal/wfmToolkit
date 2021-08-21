const Model = require("../Models/settingsM");
const Model2 = require("../Models/schedulerM");

exports.addTeam = (req, res, next) => {
  const { name } = req.body;
  const formatName = "#" + name.split(" ").join("");
  Model.addTeam(formatName)
    .then((data) => {
      return Model2.wfm_teams();
    })
    .then((teams) => {
      res.status(200).json({
        results: teams,
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

exports.analysis = (req, res, next) => {
  Model.wfmAnalysis()
    .then((result) => {
      res.status(200).json({
        results: result,
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

exports.shiftAnalysis = (req, res, next) => {
  Model.wfmShiftAnalysis()
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
