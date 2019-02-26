var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }) 
    
  console.log(req.session)
});

router.post('/', (req, res) => {
  if(req.body.message === '' || req.body.message === undefined) {
    
    req.flash('error', 'message vide')
    res.redirect('/')
  }
})

module.exports = router;
