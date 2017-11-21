/**
 * Created by xll on 2017/11/17.
 */
var models = require("../db");
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//获取装备
router.get('/getEquip', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err) {
      console.log(err);
    }
  });
  var condition = {
    'heroId': req.query.heroId,
    "mapId": req.query.mapId
  };

  var startSql = 'select goods.imgUrl,goods.goodId from startequip,goods where heroId = ? and mapId = ? and startequip.goodId = goods.goodId';
  var kernelSql = 'select goods.imgUrl,goods.goodId from kernelequip,goods where heroId = ? and mapId = ? and kernelequip.goodId = goods.goodId';
  var fitSql = 'select goods.imgUrl,goods.goodId from fitequip,goods where heroId = ? and mapId = ? and fitequip.goodId = goods.goodId';
  var defenderSql = 'select goods.imgUrl,goods.goodId from defenderequip,goods where heroId = ? and mapId = ? and defenderequip.goodId = goods.goodId';
  var params = [condition.heroId, condition.mapId];
  var data = [];
  connection.query(startSql, params, function (err, startRes) {
    if(startRes.length !== 0) {
      data[0] = [];
      data[0].push([{"name": "起始装备"}]);
      data[0].push(startRes);
    }
    connection = mysql.createConnection(models.mysql);
    connection.query(kernelSql, params, function (err, kernelRes) {
      if(kernelRes.length !== 0 ){
        data[1] = [];
        data[1].push([{"name": "核心装备"}]);
        data[1].push(kernelRes);
      }
      connection = mysql.createConnection(models.mysql);
      connection.query(fitSql, params, function (err, fitRes) {
        if(fitRes.length !== 0) {
          data[2] = [];
          data[2].push([{"name": "进攻装备"}]);
          data[2].push(fitRes);
        }
        connection = mysql.createConnection(models.mysql);
        connection.query(defenderSql, params, function (err, defenderRes) {
          if(defenderRes.length !== 0) {
            data[3] = [];
            data[3].push([{"name": "防御装备"}]);
            data[3].push(defenderRes);
          }
          res.send(data);
        });
      });
    });
  });
  connection.end();
});

//获取物品详情
router.get('/getGoodDetail', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'goodId': req.query.goodId
  };
  var sql = 'select * from goods where goodId = ?';
  var params = [condition.goodId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

//获取物品所有类型
router.get('/getAllGoodType', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var sql = 'select goodTypeId,goodTypeName from goodtype';
  connection.query(sql, function (err, result) {
    res.send(result);
  });
  connection.end();
});
//获取一类物品
router.get('/getOneGoodTypeList', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'goodTypeId': req.query.goodTypeId
  };
  var sql = 'select goods.name,goods.goodId,goods.imgUrl from goods,good_mat_type where good_mat_type.goodTypeId = ? and good_mat_type.goodId = goods.goodId';
  var params = [condition.goodTypeId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});



//获取某个物品类型
router.get('/getGoodType', function (req, res, next) {
  connection = mysql.createConnection(models.mysql);
  connection.connect(function (err) {
    if (err){
      console.log(err);
    }
  });
  var condition = {
    'goodId': req.query.goodId
  };
  var sql = 'select distinct goodTypeName from goodtype,good_mat_type where goodId = ? and goodType.goodTypeId = good_mat_type.goodTypeId';
  var params = [condition.goodId];
  connection.query(sql,params, function (err, result) {
    res.send(result);
  });
  connection.end();
});

module.exports = router;
