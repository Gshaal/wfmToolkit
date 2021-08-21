const express = require("express");
const { body } = require("express-validator");
const protected = require("../middlewares/protected")
const router = express.Router();
const controller = require('../Controllers/schedulerC'); 

router.post('/wfm/teams',protected, controller.getTeams)
router.post('/search',protected, controller.searchScheduler)
router.post('/update',protected, controller.updateScheduler)

module.exports = router;