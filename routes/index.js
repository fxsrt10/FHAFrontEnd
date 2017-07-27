var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FHA insured Single Family Portfolio Purchase' });
});

router.get('/refinance', function(req, res, next) {
  res.render('refinance', { title: 'FHA insured Single Family Portfolio Refinance' });
});

module.exports = router;
