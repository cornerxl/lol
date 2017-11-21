/**
 * Created by xll on 2017/11/10.
 */
var HTMLURL = "/lolHandbook/public/view";
var CSSURL = "/lolHandbook/public/css";
var JSURL = "/lolHandbook/public/js";
var JSONURL = "/lolHandbook/public/json";
(function () {
   DD.createModule({
       name: 'index',
       templateUrl: HTMLURL + "/index/index.html",
       data: {
           hero: true,
           goods: false,
           summoner: false
       },
       requires: [{type:'css', path: CSSURL + "/base.css"}, JSURL + "/index/index.js"],
       modules: [
           {
               name: "hero",
               delayInit: true,
               templateUrl: HTMLURL + "/content/hero/hero.html",
               requires: [{type: 'css', path: CSSURL + "/content/hero/hero.css"}, JSURL + "/content/hero/heroType.js"]
           }, {
               name: "goods",
               delayInit: true,
               templateUrl: HTMLURL + "/content/goods/goods.html"
           }, {
               name: "summoner",
               delayInit: true,
               templateUrl: HTMLURL + "/content/summoner/summoner.html"
           }
       ]
   });

    DD.createRoute([
        {
            path: "/index",
            module: 'index',
            routes: [
                {
                    path: "/hero",
                    module: "hero",
                },{
                    path: "/goods",
                    module: "goods",
                },{
                    path: "/summoner",
                    module: "summoner",
                }
            ]
        }
    ]);

    DD.createModule({
        name: 'lol',
        el: '.lol',
        root: true,
        data: {
            active: true
        }

    });
}());
