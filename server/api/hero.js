/**
 * Created by xll on 2017/11/15.
 */
var models = require("../db");
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//获取一类英雄列表
router.get('/getOneTypeList', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroTypeId': req.query.heroTypeId
  };
  var sql = 'select hero.heroId,hero.name,hero.title,hero.imgUrl,hero.detailImg from hero,hero_mat_type where hero_mat_type.heroTypeId = ? and hero_mat_type.heroId = hero.heroId';
  var params = [condition.heroTypeId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

//获取英雄详情
router.get('/getHeroDetail', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroId': req.query.heroId
  };
  var sql = 'select * from hero where heroId = ?';
  var params = [condition.heroId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

//获取英雄类型
router.get('/getHeroType', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroId': req.query.heroId
  };
  var sql = 'select herotype.herotypeId,herotype.heroTypeName from hero_mat_type,herotype where heroId = ? and hero_mat_type.heroTypeId = heroType.heroTypeId';
  var params = [condition.heroId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

//获取skill
router.get('/getSkill', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroId': req.query.heroId
  };
  var sql = 'select * from skill where heroId = ?';
  var params = [condition.heroId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

//获取使用技巧
router.get('/getUseSkill', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'heroId': req.query.heroId
  };
  var sql = 'select * from useskill where heroId = ?';
  var params = [condition.heroId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

module.exports = router;
