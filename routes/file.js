var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/save', function(req, res) {

  fs.writeFileSync('/tmp/file.txt', req.body.content)

  res.status(200).send('OK');
});

router.get('/read', function(req, res) {

  const data = fs.readFileSync('/tmp/file.txt', req.body.content, 'utf-8');
  console.log(data);

  res.status(200).send('OK');
});

module.exports = router;