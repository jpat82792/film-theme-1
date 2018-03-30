var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog.html', { title: 'Express' });
});

router.get('/snapshots', function(req, res, next){
  res.render('snapshots.html', {});
});

router.get('/films', function(req, res, next){
  res.render('film.html', {});
});

router.get('/us', function(req, res, next){
  res.render('about.html', {});
});

module.exports = router;
