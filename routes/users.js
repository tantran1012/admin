var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Thành viên' });
});

router.get('/edit/1', function(req, res, next) {
  res.render('users-edit', { title: 'Sửa hồ sơ' });
});

module.exports = router;
