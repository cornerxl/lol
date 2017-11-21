/**
 * Created by xll on 2017/11/11.
 */
var CONHTMLURL = HTMLURL + "/content";
var CONJSONURL = JSONURL + "/content";
var CONCSSURL = CSSURL + "/content";
var CONJSURL = JSURL + "/content";
(function () {
  DD.createModule([
      {
          parent: "index",
          name: "indexHeader",
          el: ".header",
          templateUrl: HTMLURL + "/header/header.html",
          dataUrl: JSONURL + "/header/indexHeader.json",
          requires: [{type: 'css', path: CSSURL + "/header/header.css"}]
      }
      // ,{
      //     parent: "index",
      //     name: "content",
      //     el: ".content",
      //     templateUrl: CONHTMLURL + "/contentNavBar/contentNavBar.html",
      //     dataUrl: CONJSONURL + "/contentNavBar/contentNavBar.json",
      //     requires: [{type:'css', path: CONCSSURL + "/contentNavBar/contentNavBar.css"}, CONJSURL + "/contentNavBar/contentNavBar.js"]
      // }
  ]);
}())