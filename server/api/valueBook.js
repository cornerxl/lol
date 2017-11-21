/**
 * Created by xll on 2017/11/14.
 */
var models = require("../db");
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/getVB', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var sql = 'select distinct id,name from contributor';
  connection.query(sql, function (err, result) {
    res.send(result);
  });
  connection.end();
});

router.get('/getOneVB', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
      'id': req.query.id
  };
  var sql = 'select * from contributor where id = ?';
  var params = [condition.id];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

module.exports = router;
