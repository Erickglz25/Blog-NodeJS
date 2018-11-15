var express = require('express');
var router = express.Router();

var mainCtrls = require('../controllers/maincontrollers');

/* GET home page. */
router.get('/',mainCtrls._renderhome);

module.exports = router;
