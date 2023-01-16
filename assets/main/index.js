System.register("chunks:///_virtual/main",["./positionCamera.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/positionCamera.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,r,s;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,n=t.TiledMap,r=t.Vec3,s=t.Component}],execute:function(){var a;o._RF.push({},"2ecdbq+1HxP2JYxvRUHtLJG","positionCamera",void 0);var c=i.ccclass;i.property,t("positionCamera",c("positionCamera")(a=function(t){function o(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this).tiledMap=void 0,e}return e(o,t),o.prototype.start=function(){this.tiledMap=this.node.getComponent(n);var t=this.tiledMap.getObjectGroup("Locations").getObject("PlayerStart");this.node.setPosition(new r(t.offset.x,t.offset.y,0))},o}(s))||a);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});