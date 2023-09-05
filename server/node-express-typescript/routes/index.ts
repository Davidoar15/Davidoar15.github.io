const router = require("express").Router();
const { getDataForm } = require('../controllers/getData');
const { getAnswers } = require('../controllers/getAnswers');
const { postAnswer } = require('../controllers/postData');
const { putAnswer } = require('../controllers/putAnswer');

router.get("/data", getDataForm);

router.get("/answer", getAnswers);
router.post("/answer", postAnswer);
router.put("/answer/:id", putAnswer);

module.exports = router;