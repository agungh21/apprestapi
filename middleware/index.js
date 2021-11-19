var express = require('express');
var auth = require('./auth');
var router = express.Router();

// route daftar
router.post('/api/v1/daftar', auth.daftar);

module.exports = router;