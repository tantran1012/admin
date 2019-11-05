var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cart', { title: 'Quản lý giỏ hàng' });
});


module.exports = router;
