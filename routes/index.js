var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bird-info', function(req, res, next) {
  res.render('sub-folder/birds');
});

module.exports = router;
