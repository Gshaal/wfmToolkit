const express = require("express");
const { body } = require("express-validator");
const protected = require("../middlewares/protected")
const router = express.Router();
const controller = require('../Controllers/settingsC'); 

router.post("/add-team", protected, controller.addTeam)

router.post("/work-force-analysis", protected, controller.analysis)


router.post("/work-force-shifts", protected, controller.shiftAnalysis)


module.exports = router