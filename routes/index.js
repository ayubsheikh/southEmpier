var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/zonecreate',(req, res, next) => {
  res.render('zonecreate', null)
})
module.exports = router;
