var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('category', { title: 'Quản lý ngành hàng' });
});


module.exports = router;
