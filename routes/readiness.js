var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/readiness', function(req, res, next) {
  db.any('SELECT now()')    .then(data => {
    console.log('DATA:', data[0].now); // print data;
    res.send(data[0].now);
})
.catch(error => {
    console.log('ERROR:', error); // print the error;
    res.send('KO');
});
});

module.exports = router;