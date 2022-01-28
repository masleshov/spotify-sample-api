const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.route('/')
    .get(loginController.login);

router.route('/callback')
    .get(loginController.callback)

module.exports = router;