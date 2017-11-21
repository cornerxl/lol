/**
 * Created by xll on 2017/11/11.
 */
(function () {
    DD.createModule([
        {
            name: "hero",
            delayInit: true,
            templateUrl: CONHTMLURL + "/hero/hero.html",
            requires: [{type: 'css', path: CSSURL + "/hero/hero.css"}, JSURL + "/hero/heroType.js"],
            onInit: function () {

            }
        }, {
            name: "goods",
            delayInit: true,
            templateUrl: CONHTMLURL + "/goods/goods.html"
        }, {
            name: "summoner",
            delayInit: true,
            templateUrl: CONHTMLURL + "/summoner/summoner.html"
        }
    ]);
}())
