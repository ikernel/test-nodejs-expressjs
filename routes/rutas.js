const express = require('express');
const router = express.Router();
const main = require('../controllers/main.js');

router.get('/', main.init);
router.get('/admin', main.admin);
router.post('/create', main.create);


module.exports = router;
