/**
 * Created by xll on 2017/11/13.
 */
const goods = require('./api/good');
const heroType = require('./api/heroType');
const hero = require('./api/hero');
const valueBook = require("./api/valueBook");
const summoner = require("./api/summuner");
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/heroType', heroType);
app.use('/api/hero', hero);
app.use('/api/valueBook', valueBook);
app.use('/api/goods', goods);
app.use('/api/summoner',summoner);

// 监听端口
app.listen(8080);
console.log('success listen at port:8080......');

