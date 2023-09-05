"use strict";
const router = require("express").Router();
const { getDataForm } = require('../controllers/getData');
router.get("/data", getDataForm);
module.exports = router;
