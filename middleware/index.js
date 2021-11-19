var express = require('express');
var auth = require('./auth');
var verifikasi = require('./verifikasi');
var router = express.Router();

// route daftar
router.post('/api/v1/daftar', auth.daftar);

// router login
router.post('/api/v1/login', auth.login);

// router wajib auth
router.get('/api/v1/rahasia', verifikasi(), auth.hrahasia);

module.exports = router;