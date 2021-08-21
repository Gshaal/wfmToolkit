const express = require("express");
const { body } = require("express-validator");
const protected = require("../middlewares/protected")
const router = express.Router();
const controller = require('../Controllers/holidayC'); 



router.post('/wfm-managers', protected, controller.wfmManagers)

router.post('/submit-pto', protected, controller.submitRequest)


router.post('/fetch-pending-pto', protected, controller.fetchPto)


router.post('/history', protected, controller.history)


router.post('/action', protected, controller.actionRequest)

module.exports = router