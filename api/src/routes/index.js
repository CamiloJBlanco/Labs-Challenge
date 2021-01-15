const {Router} = require("express");

const searchRouter = require("./search.js");

const router = Router();

//Routes
router.use('/api', searchRouter);

module.exports = router;