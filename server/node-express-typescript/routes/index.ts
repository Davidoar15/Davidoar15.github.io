const router = require("express").Router();

router.get("/", () => {
    console.log('Challenge');
});

module.exports = router;