var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use('/assets', express.static('public'))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
  
});

router.post('/', (req, res) => {
  console.log(req.body);  
  res.render('index', { title: 'ok' })
})

module.exports = router;
