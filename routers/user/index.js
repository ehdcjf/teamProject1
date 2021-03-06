const express = require('express');
const router = express.Router();
const controller = require('./user.controller')




router.get('/join', controller.join);
router.post('/join_success', controller.join_success);
router.get('/login', controller.login);
router.post('/login_check', controller.login_check);
router.get('/logout', controller.logout);
router.get('/info', controller.info);
router.get('/userid_check', controller.userid_check);



module.exports = router;