(function(e){function n(n){for(var r,u,c=n[0],s=n[1],i=n[2],l=0,p=[];l<c.length;l++)u=c[l],o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(p.length)p.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b56301de"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e),a=function(n){s.onerror=s.onload=null,clearTimeout(i);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var i=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"485e":function(e,n,t){"use strict";var r=t("dbde"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("034f"),t("2877")),c={},s=Object(u["a"])(c,o,a,!1,null,null,null),i=s.exports,l=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("img",{staticClass:"head_icon",attrs:{src:e.userInfo.headIcon,alt:e.userInfo.nickname}}),t("p",[e._v(e._s(e.userInfo.nickname))]),t("p",[e._v(e._s(e.userInfo.phonenum))]),t("p",[e._v(e._s(e.userInfo.email))]),t("p",[e._v(e._s(e.userInfo.gender))])])},m=[],b=(t("96cf"),t("3b8d")),h=t("b383"),v=t.n(h),g=t("bad9"),y={name:"HelloWorld",props:{msg:String},data:function(){return{userInfo:{}}},mounted:function(){var e=Object(b["a"])(regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(">>>>>user: ",g["user"]),e.next=3,g["user"].login(v.a.stringify({username:"ls",password:"123123"})).then(function(e){var t=e.data;200===t.status?(n.userInfo=t.data,console.log("登录成功；",JSON.stringify(t.data,null,2))):console.log("登录失败：",t.message)}).catch(function(e){console.log("登录失败：",e.message)});case 3:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()},O=y,j=(t("485e"),Object(u["a"])(O,d,m,!1,null,"f9e889ca",null)),w=j.exports,_={name:"home",components:{HelloWorld:w}},I=_,P=(t("a2cc"),Object(u["a"])(I,f,p,!1,null,"50d520d4",null)),k=P.exports;r["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),S=t("2f62");r["a"].use(S["a"]);var $=new S["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:$,render:function(e){return e(i)}}).$mount("#app")},"64a9":function(e,n,t){},"8a7c":function(e,n,t){},a2cc:function(e,n,t){"use strict";var r=t("8a7c"),o=t.n(r);o.a},b9c9:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"login",function(){return g}),t.d(r,"register",function(){return y});t("8e6e"),t("ac6a"),t("456d");var o=t("bd86"),a=t("086d"),u=t.n(a),c=u.a.create({timeout:3e3}),s=c,i={baseUrl:"https://talkapi.dei2.com",login:"/Zpm/user/login"},l={userInfo:"local-user-info"};t("a481");function f(e){var n=e.username,t=e.phonenum,r=e.nickname,o=e.headIcon,a=e.email,u=e.gender;return{phonenum:t.replace(/^(\d{3})(\d{4})(\d{4})$/,"$1****$3"),username:n,nickname:r,headIcon:o,email:a.replace(/^(.{3})([^@]{0,})(@.*)$/,"$1****$3"),gender:1===u?"男":"女"}}var p=t("3f4a"),d=t.n(p),m=d.a.createInstance({name:"zpm",storeName:"user"});d.a.createInstance({name:"zpm",storeName:"position"}),d.a.createInstance({name:"zpm",storeName:"company"}),d.a.createInstance({name:"zpm",storeName:"resume"}),d.a.createInstance({name:"zpm",storeName:"ads"});function b(e){return new Promise(function(n,t){s({method:"post",url:i.baseUrl+i.login,data:e}).then(function(e){var t=JSON.parse(JSON.stringify(e.data));200===t.status?(t.data=f(t.data),m.setItem(l.userInfo,e.data.data),n(Object.assign({},e,{data:t}))):n(e)}).catch(function(e){t(new Error(e.message||"登录失败，请稍后再试"))})})}function h(e){return console.log("inner register"),Promise.resolve({})}function v(e){return!e||!!e&&0===Object.keys(e).length&&e.constructor===Object}function g(e){return v(e)?Promise.reject(new Error("用户名密码不能为空")):b(e)}function y(e){return h(e),"注册成功"}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach(function(n){Object(o["a"])(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}t.d(n,"user",function(){return w});var w=j({},r)},bad9:function(e,n,t){e.exports=t("b9c9")},dbde:function(e,n,t){}});
//# sourceMappingURL=app.37bc42a7.js.map