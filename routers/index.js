const express = require('express');
const router = express.Router();
const mainRouter = require('./main')
const userRouter = require('./user/index')
const boardRouter = require('./board');

router.use('/', mainRouter);
router.use('/user', userRouter);
router.use('/board', boardRouter);



module.exports = router;