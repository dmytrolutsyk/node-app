var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ville', function(req, res, next) {
  res.render('ville', { title: "Node app"});
});

module.exports = router;