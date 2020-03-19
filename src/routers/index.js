const express = require('express');
const router = express.Router();
const userRouter = require('../controllers/user');

router.use('/users', userRouter);


module.exports =  router;