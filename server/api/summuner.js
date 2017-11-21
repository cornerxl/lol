/**
 * Created by xll on 2017/11/20.
 */
var models = require("../db");
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//获取召唤师技能列表
router.get('/getSummonerList', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var sql = 'select summonerId,name,imgUrl from summoner';
  connection.query(sql, function (err, result) {
    res.send(result);
  });
  connection.end();
});


//获取一个召唤师技能
router.get('/getOneSummoner', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'summonerId': req.query.summonerId,
  }
  var sql = 'select * from summoner where summonerId = ?';
  var params = [condition.summonerId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});


module.exports = router;
