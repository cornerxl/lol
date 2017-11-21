// /**
//  * Created by xll on 2017/11/13.
//  */
var models = require("../db");
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/heroType', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var sql = 'select * from heroType';
  connection.query(sql, function (err, result) {
    res.send(result);
  });
  connection.end();
});

router.get('/getOneType', function (req, res, next) {
  connection = mysql.createConnection(connection.config);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroTypeId': req.query.heroTypeId
  };
  var sql = 'select * from heroType where heroTypeId = ?';
  var params = [condition.heroTypeId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

module.exports = router;
