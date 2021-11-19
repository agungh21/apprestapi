var express = require('express');
var auth = require('./auth');
var router = express.Router();

// route daftar
router.post('/api/v1/daftar', auth.daftar);

// router login
router.post('/api/v1/login', auth.login);

module.exports = router;