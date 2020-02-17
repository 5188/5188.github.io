!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){"use strict";var r,s,i,o=n(5),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){i=!1}function d(e){if(e){if(e!==r){if(e.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,l()}}else r!==a&&(r=a,l())}function c(){return i||(i=function(){r||d(a);for(var e,t=r.split(""),n=[],s=o.nextValue();t.length>0;)s=o.nextValue(),e=Math.floor(s*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||a},characters:function(e){return d(e),r},seed:function(e){o.seed(e),s!==e&&(l(),s=e)},lookup:function(e){return c()[e]},shuffled:c}},function(e,t,n){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],s=0;s<e.length;s++){var i=e[s],l=t.base?i[0]+t.base:i[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var h=a(c),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==h?(o[h].references++,o[h].updater(u)):o.push({identifier:c,updater:v(u,t),references:1}),r.push(c)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=n.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,h=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var s=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,s=n.media,i=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,t){var n,r,s;if(t.singleton){var i=f++;n=m||(m=d(t)),r=u.bind(null,n,i,!1),s=u.bind(null,n,i,!0)}else n=d(t),r=p.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var s=a(n[r]);o[s].references--}for(var i=l(e,t),d=0;d<n.length;d++){var c=a(n[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var s=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([s]).join("\n")}var o,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(s[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&s[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){"use strict";var r=n(0),s=n(6),i=n(10),o=n(11)||0;function a(){return s(o)}e.exports=a,e.exports.generate=a,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=i},function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},function(e,t,n){"use strict";var r,s,i=n(7);n(0);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===s?r++:(r=0,s=n),t+=i(7),t+=i(e),r>0&&(t+=i(r)),t+=i(n)}},function(e,t,n){"use strict";var r=n(0),s=n(8),i=n(9);e.exports=function(e){for(var t,n=0,o="";!t;)o+=i(s,r.get(),1),t=e<Math.pow(16,n+1),n++;return o}},function(e,t,n){"use strict";var r,s="object"==typeof window&&(window.crypto||window.msCrypto);r=s&&s.getRandomValues?function(e){return s.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*r*n/t.length),i="";;)for(var o=e(s),a=s;a--;)if((i+=t[o[a]&r]||"").length===+n)return i}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},function(e,t,n){"use strict";e.exports=0},function(e,t,n){var r=n(1),s=n(13);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var i={insert:"head",singleton:!1},o=(r(s,i),s.locals?s.locals:{});e.exports=o},function(e,t,n){(t=n(2)(!1)).push([e.i,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    min-width: 720px;\n}\n\nbody {\n    color: #000000;\n}\n\nul {\n    list-style: none;\n}\n",""]),e.exports=t},function(e,t,n){var r=n(1),s=n(15);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var i={insert:"head",singleton:!1},o=(r(s,i),s.locals?s.locals:{});e.exports=o},function(e,t,n){(t=n(2)(!1)).push([e.i,"\n.ez-header {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n}\n\n.ez-content {\n    margin-top: 100px;\n}\n\n.page {\n    width: 100%;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.ez-code {\n    width: 640px;\n    font-size: 1rem;\n    margin: 0 auto;\n    display: inline-block;\n}\n\n.ez-temp-header {\n    margin: 200px 0 60px 0;\n}\n\n.ez-temp-header-sub-title {\n    font-size: 1.2rem;\n    line-height: 2rem;\n}\n\n.ez-help p {\n    margin-bottom: 10px;\n}\n\n.ez-docs {\n    min-width: 720px;\n    width: 80%;\n    text-align: left;\n}\n.ez-docs-tree {\n    width: 160px;\n}\n\n.logo {\n    font-size: 24px;\n    color: cadetblue;\n}\n\n.header-line {\n    height: 6px;\n    background-color: #5e03fd;\n}\n\n.header-content {\n    line-height: 60px;\n    background-color: #2fd4dc;\n    padding: 0 100px;\n}\n\n.main-menu, .main-menu-item {\n    display: inline;\n}\n\n.main-menu {\n    margin-left: 20%;\n}\n\n.main-menu-item {\n    margin-left: 30px;\n    cursor: pointer;\n}\n\n\n\n/* home css */\n.home-header {\n    margin: 30px;\n}\n\n.home-header-title {\n    font-size: 3rem;\n}\n\n.home-header-sub-title {\n    font-size: 2rem;\n}\n\n\n",""]),e.exports=t},function(e,t,n){var r=n(1),s=n(17);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var i={insert:"head",singleton:!1},o=(r(s,i),s.locals?s.locals:{});e.exports=o},function(e,t,n){(t=n(2)(!1)).push([e.i,"\r\n.ezdo-tree ul {\r\n    list-style: none;\r\n    padding-inline-start: 10px;\r\n    margin-inline-start: 10px;\r\n}\r\n\r\n.ezdo-tree li {\r\n    cursor: pointer;\r\n}\r\n\r\n.ezdo-tree .item-ico {\r\n    display: inline-block;\r\n    width: 12px;\r\n    height: 12px;\r\n    line-height: 12px;\r\n    text-align: center;\r\n    margin: 8px;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.ezdo-tree .active {\r\n    background-color: turquoise;\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),i=new class{addEvent(e,t,n,r){var s,i,o;null==r&&(r=!0);try{o=!!window.navigator.msPointerEnabled}catch(e){o=!1}try{s="ontouchstart"in document&&!isPC()}catch(e){s=!1}try{i=!!("ontouchstart"in document&&isPC())}catch(e){i=!1}var a=null;if(o)switch(t){case"mousedown":t="MSPointerDown";break;case"mousemove":t="MSPointerMove";break;case"mouseup":t="MSPointerUp";break;case"mouseover":t="MSPointerOver";break;case"mouseout":t="MSPointerOut"}else if(s)switch(t){case"mousedown":t="touchstart";break;case"mousemove":t="touchmove";break;case"mouseup":t="touchend";break;case"mouseover":case"mouseout":t=""}if(i)switch(t){case"mousedown":a="touchstart";break;case"mousemove":a="touchmove";break;case"mouseup":a="touchend";break;case"mouseover":case"mouseout":a=""}""!=t&&(e._plisteners||(e._plisteners={}),e._plisteners[t]=n,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n,a&&(e.addEventListener?e.addEventListener(a,n,r):e.attachEvent?e.attachEvent("on"+a,n):e["on"+a]=n))}removeEvent(e,t,n,r){var s,i,o;null==r&&(r=!0);try{o=!!window.navigator.msPointerEnabled}catch(e){o=!1}try{s="ontouchstart"in document&&!isPC()}catch(e){s=!1}try{i=!!("ontouchstart"in document&&isPC())}catch(e){i=!1}var a=null;if(o)switch(t){case"mousedown":t="MSPointerDown";break;case"mousemove":t="MSPointerMove";break;case"mouseup":t="MSPointerUp";break;case"mouseover":t="MSPointerOver";break;case"mouseout":t="MSPointerOut"}else if(s)switch(t){case"mousedown":t="touchstart";break;case"mousemove":t="touchmove";break;case"mouseup":t="touchend";break;case"mouseover":case"mouseout":t=""}if(i)switch(t){case"mousedown":a="touchstart";break;case"mousemove":a="touchmove";break;case"mouseup":a="touchend";break;case"mouseover":case"mouseout":a=""}e._plisteners&&delete e._plisteners[t],e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null,a&&(e.removeEventListener?e.removeEventListener(a,n,r):e.detachEvent?e.detachEvent("on"+a,n):e["on"+a]=null)}isPC(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n}};class o{constructor(){this.el=null,this.vn=null}}class a extends Map{constructor(){super()}}var l=new a;class d{constructor(e){this.mFragment=e}newFragment(e,t){t||(t=this.mFragment);let n=this.newView(e);if(t.appendChild(n),this._updateNode(e),e.children&&e.children.length){let t=e.children.length;for(var r=0;r<t;r++)this.newFragment(e.children[r],n)}}render(e){let t=e.get("node"),n=t._eid,r=null;switch(e.get("cmd")){case"del":r=l.get(n),r&&r.el&&r.el.parentNode&&r.el.parentNode.removeChild(r.el),l.delete(n);break;case"add":r=l.get(e.get("parent")._eid),this.newFragment(t,r.el);break;case"mod":this._updateNode(t)}}_updateNode(e){let t=l.get(e._eid);if(t){let r=t.el;if(e._attr)for(var n in e._attr){let t=e._attr[n];t instanceof Array&&(t.length?t=t.join(" "):(t=null,r.removeAttribute(n))),t&&r.getAttribute(n)!=t&&r.setAttribute(n,t)}if(e._listener){for(var n in r._plisteners)e._listener[n]||i.removeEvent(r,n,this.handlerProxy);for(var n in e._listener)r._plisteners&&r._plisteners[n]||i.addEvent(r,n,this.handlerProxy)}}}handlerProxy(e){let t=e||event;if(!t)return void console.warn("evt is undefined");if(!t.target.__ez__eid)return void console.warn("not found element");let n=l.get(t.target.__ez__eid),r=n.vn._listener[t.type];r&&r(n.vn),e?(e.stopPropagation(),e.preventDefault()):(window.event.returnValue=!1,window.event.cancelBubble=!0)}newView(e){let t=null;"cd"===e._ez_create_type?t=document.createElement(e.type):"new"===e._ez_create_type&&"Text"===e.type&&(t=new Text(e._ez_data)),t.__ez__eid=e._eid;let n=new o;return n.el=t,n.vn=e,l.set(e._eid,n),t}}var c=new class{constructor(){this.isInit=!1}render(e){this.isInit&&e.forEach(e=>{let t=new d(this.newVContainer());t.render(e),t=null})}init(e,t){if(this.isInit)return;let n=document.getElementById(t);if(n){let t="puc"+(Math.floor(2e3*Math.random())+100);n._eid=t;let r=new o;r.el=n,l.set(t,r);let s=new d(this.newVContainer());s.newFragment(e),n.appendChild(s.mFragment),s=null,this.isInit=!0}}newVContainer(){return document.createDocumentFragment()}},h=new class{constructor(){this.renderTime=20,this.timeId=0,this.shell_add="add",this.shell_del="del",this.shell_mod="mod",this.ctrl_class="class",this.ctrl_attr="attr",this.ctrl_text="text",this.ctrl_node="node",this.ctrl_event="event",this.tasks=[],this.shells=new Map}_ez_hasParentIsAdd(e){for(let t of this.shells.values())if(t&&t.get("node")._eid===e.parent._eid&&t.get("cmd")!==this.shell_mod)return!0;return!1}_ez_handle(){let e=[];for(this.shells.forEach(t=>{if("add"===t.get("cmd")){let n=t.get("node");this._ez_hasParentIsAdd(n)&&e.push(n._eid)}});e.length;){let t=e.shift();this.shells.delete(t)}}push(){0===this.timeId&&(this.timeId=setInterval(()=>{this._ez_handle(),c.render(this.shells),this.shells.clear(),clearInterval(this.timeId),this.timeId=0},this.renderTime))}commit(e,t,n,r){if(!c.isInit||!n.parent)return;let s=this.shells.get(n._eid);if(s)s.get("cmd")===this.shell_mod?s.set("cmd",e):e!==this.shell_mod&&s.set("cmd",e);else{let t=new Map;t.set("cmd",e),t.set("node",n),this.shells.set(n._eid,t)}r&&this.shells.get(n._eid).set("parent",r),this.push()}};class u{constructor(){this._eid=s.a.generate(),this._ename="ezobj",this._isVdom=!0,this._ez_create_type="cd"}_ez_del_attr(e){delete this[e]}}class p extends u{constructor(){super(),this._ez_data="",this._ez_create_type="new",this.type="Text"}set text(e){this._ez_data!==e&&(this._ez_data=e,h.commit(h.shell_mod,h.ctrl_text,this,null))}get text(){return this._ez_data}}class m extends u{constructor(e){super(),this.type=e||"div",this._attr={class:[],value:void 0,id:void 0},this.children=[],this._listener={},this.ezText=null,this.parent=null}on(e,t,n){this._listener[e]=t.bind(n||this),h.commit(h.shell_mod,h.ctrl_event,this,null)}off(e,t){delete this._listener[e],h.commit(h.shell_mod,h.ctrl_event,this,null)}add(e){return e.parent=this,this.children.push(e),h.commit(h.shell_add,h.ctrl_node,e,this),this}remove(e){for(var t=this.children.length-1;t>=0;t--){let n=this.children[t];if(e._elId===n._elId){this.children.splice(t,1);break}}for(var n in h.commit(h.shell_del,h.ctrl_node,e,this),this){let t=this[n];if(t&&t._ename&&t._eid===e._eid){this._ez_del_attr(n);break}}return e.parent=null,this}removeAll(){for(;this.children.length;)this.remove(this.children[0])}addAttr(e,t){this._attr[e]=t,h.commit(h.shell_mod,h.ctrl_attr,this,null)}removeAttr(e,t){delete this._attr[e],h.commit(h.shell_mod,h.ctrl_attr,this,null)}addClass(e){this._attr.class.push(e),h.commit(h.shell_mod,h.ctrl_attr,this,null)}removeClass(e){this._attr.class=this._attr.class.filter(t=>t!==e),h.commit(h.shell_mod,h.ctrl_attr,this,null)}set value(e){this._attr.value!==e&&(this._attr._value=e,h.commit(h.shell_mod,h.ctrl_text,this,null))}get value(){return this._attr._value}set id(e){this._attr.id!==e&&(this._attr.id=e,h.commit(h.shell_mod,h.ctrl_text,this,null))}get id(){return this._attr.id}set text(e){this.ezText||(this.ezText=new p,this.add(this.ezText)),this.ezText.text!==e&&(this.ezText.text=e)}get text(){return this.ezText?this.ezText.text:""}}class f extends m{constructor(){super("a"),this.addClass("link"),this.addAttr("href","javascript:")}}class v extends m{constructor(){super("img")}set src(e){this._attr.src=e}get src(){return this._attr.src}}class _ extends m{}class g extends m{constructor(){super("input")}}class x{constructor(){this.container=null,this.routerArray=[],this.routerMap=new Map,this.history=[],this.currentRouteName=""}set routers(e){this.routerArray=e,e.forEach(e=>{this.routerMap.set(e.name,e)})}add(e,t){let n={name:e,node:t};this.routers.push(n),this.routerMap.set(e,n)}to(e){if(e===this.currentRouteName)return;let t=this.routerMap.get(e).node;if(this.container.add(t),this.history.length){let e=this.history[this.history.length-1];this.container.remove(e)}this.history.push(t),this.currentRouteName=e}back(){if(this.history.length>1){let e=this.history.pop();this.container.remove(e),e=this.history.pop(),this.container.add(e)}}}var w=new class{constructor(){this.type="Body",this.Node=m,this.Link=f,this.Image=v,this.Video=_,this.Input=g,this.Router=x,this.appId="app"}render(e){c.init(e,this.appId)}renderTo(e,t){this.appId=t,this.render(e)}};n(12),n(14);class b extends w.Node{constructor(e){super(),this.router=e,this.addClass("header-content");let t=new w.Node("span");t.text="Ezdo",t.addClass("logo"),this.add(t),this.nav=new w.Node("ul"),this.nav.addClass("main-menu"),this.add(this.nav),this.data.nav.forEach(e=>{let t=new w.Node("li");t.addClass("main-menu-item"),t.text=e.name,t.data=e,this.nav.add(t),t.on("click",this.onSelectMenuItem,this)})}onSelectMenuItem(e){this.router.to(e.data.link),setTimeout(()=>{Prism.highlightAll(document)},60)}get data(){return{nav:[{name:"首页",link:"home"},{name:"模板",link:"temp"},{name:"文档",link:"docs"},{name:"帮助",link:"help"}]}}}var y=b;class z extends w.Node{constructor(e){super(),this.addClass("ez-header");let t=new w.Node;t.addClass("header-line"),this.add(t),this.add(new y(e))}}var C=z;class N extends w.Node{constructor(){super(),this.addClass("home-header"),this.subTitle=new w.Node("p"),this.subTitle.text="用于构建用户界面的 JavaScript 库",this.add(this.subTitle),this.subTitle.addClass("home-header-sub-title")}}class k extends w.Node{constructor(){super(),this.addClass("page"),this.header=new N,this.add(this.header),this.codeContainer=new w.Node,this.add(this.codeContainer);let e=this.data.code;this.showCodeBlock(e[0]);let t=new w.Node;t.text="将会渲染成如下结构",this.codeContainer.add(t),this.showCodeBlock(e[1])}showCodeBlock(e){let t=e,n=new w.Node("pre");n.addClass("ez-code");let r=new w.Node("code");r.addClass(t.type),r.text=t.text,n.add(r),this.codeContainer.add(n)}get data(){let e={code:[{type:"language-js",text:"\n        class Ezdo extends ez.Node {\n            constructor() {\n                super()\n\n                for(let i = 0; i < 10; i++) {\n                    let bar = new ez.Node('p')\n                    bar.text = 'id-' + i\n                    bar.addClass('bar' + i)\n                    this.add(bar)\n                }\n            }\n        }\n"},{type:"language-html",text:"\n        <div>\n            <p class='bar0'>id-0</p>\n            <p class='bar1'>id-1</p>\n            <p class='bar2'>id-2</p>\n            <p class='bar3'>id-3</p>\n            <p class='bar4'>id-4</p>\n            <p class='bar5'>id-5</p>\n            <p class='bar6'>id-6</p>\n            <p class='bar7'>id-7</p>\n            <p class='bar8'>id-8</p>\n            <p class='bar9'>id-9</p>\n        </div>\n"}]};return e}}var M=k;n(16);class E extends w.Node{constructor(){super(),this.addClass("ezdo-tree"),this._ez_s_handler=null,this._ez_s_caller=null,this._ez_lastActiveNode=null}setSelect(e,t){this._ez_s_handler=e,this._ez_s_caller=t}setData(e){this._render(e,this)}_render(e,t){let n=new w.Node("ul");t.add(n),e.forEach(e=>{let t=new w.Node("li");n.add(t);let r=new w.Node;r.addClass("item-ico"),t.add(r),t.text=e.name,t.ssdata=e,t.isFolder=e.children&&e.children.length,t.isOpen=!1,t.on("click",this._select,this),t.isFolder?r.text="+":r.text="-"})}_select(e){e.isFolder?(e.isOpen?(e.children[0].text="+",e.remove(e.children[2])):(e.children[0].text="-",this._render(e.ssdata.children,e)),e.isOpen=!e.isOpen):(this._ez_lastActiveNode&&this._ez_lastActiveNode.removeClass("active"),e.addClass("active"),this._ez_lastActiveNode=e),this._ez_s_handler}}var P=E;class S extends w.Node{constructor(){super(),this.addClass("page ez-docs"),this.tree=new P,this.tree.addClass("ez-docs-tree"),this.tree.setSelect(this.select,this),this.tree.setData([{name:"简介",children:null},{name:"安装",children:[{name:"模板项目",children:null},{name:"手动安装",children:null}]},{name:"虚拟节点",children:null},{name:"事件",children:null},{name:"列表",children:null},{name:"批处理",children:null},{name:"扩展性",children:null},{name:"自定义组件",children:null}]),this.add(this.tree)}select(e){console.log(e)}}var I=S;class T extends w.Node{constructor(){super(),this.addClass("page"),this.addClass("ez-help");["您可以选下面的一种联系方式来获得帮助","邮箱：cn.coder@tom.com","QQ群：1050845971","微信/手机：15011021101"].forEach(e=>{let t=new w.Node("p");t.text=e,this.add(t)})}}var j=T;class A extends w.Node{constructor(){super(),this.addClass("ez-temp-header");["为了让朋友们更快的了解ezdo，这里也为大家提供了一个简单的小项目。","这个项目就是当前的官方网站的项目源码，有喜欢的朋友可以在下面找到线索"].forEach(e=>{let t=new w.Node("p");t.text=e,this.add(t),t.addClass("ez-temp-header-sub-title")})}}class O extends w.Node{constructor(){super(),this.addClass("page"),this.header=new A,this.add(this.header);let e=new w.Node;this.add(e);["git clone https://github.com/ezdojs/ezdo-start","cd ezdo-start","npm install","npm start"].forEach(t=>{let n=new w.Node("pre");e.add(n);let r=new w.Node("code");n.add(r),r.text=t,n.addClass("ez-code"),r.addClass("language-shell"),e.add(new w.Node)})}}var L=O;class R extends w.Node{constructor(){super();let e=new w.Router;this.nav=new C(e),this.add(this.nav),this.content=new w.Node,this.add(this.content),this.content.addClass("ez-content"),e.container=this.content,e.routers=[{name:"home",node:new M},{name:"temp",node:new L},{name:"docs",node:new I},{name:"help",node:new j}],e.to("home")}}var V=R;w.render(new V)}]);