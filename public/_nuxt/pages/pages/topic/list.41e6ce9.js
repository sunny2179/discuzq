(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,9,10,12,15,18,19,21,22,25,27],{19:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return c}));r(283),r(27);var n=function(time){var e=new Date-new Date(time);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60)>0?Math.ceil(e/1e3/60):1,"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60)>0?Math.ceil(e/1e3/60/60):1,"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)},c=function(e){var t=Math.round(new Date(e)/1e3),r=Math.round(new Date/1e3)-t,n=parseInt(r/86400,0);return n>365?parseInt(r/86400/365,0)+"年":n+"天"}},2:function(e,t,r){r(17);var n=r(757);r(27),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/pages/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error")}}}}},methods:{handleError:function(e){var t=arguments,r=this;return n(regeneratorRuntime.mark((function n(){var o,c,l,d,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",!(c=e.response.data.errors)[0]){n.next=13;break}if(l=c[0].code,d=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,f=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:r.$t("core.".concat(d)),"site_closed"!==c[0].code){n.next=10;break}return n.next=9,r.siteClose(c);case 9:return n.abrupt("return",n.sent);case 10:r.$message.error(f),r.errorCodeHandler.default[l]&&r.errorCodeHandler.default[l](),o&&r.errorCodeHandler[o][l]&&r.errorCodeHandler[o][l]();case 13:case"end":return n.stop()}}),n)})))()},siteClose:function(e){var t=this;return n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return r.next=5,t.$router.push("/pages/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},377:function(e,t,r){"use strict";t.a={data:function(){return{scrollTop:0}},mounted:function(){this.addEventListener(window,"scroll",this.handleScroll)},destroyed:function(){this.removeEventListener(window,"scroll",this.handleScroll)},methods:{handleScroll:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,r=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(e+t+10)>=r&&this.scrollLoadMore(),this.scrollTop=e},addEventListener:function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on"+t,r)},removeEventListener:function(e,t,r,n){e.removeEventListener?e.removeEventListener(t,r,n):e.detachEvent&&e.detachEvent("on"+t,r)}}}},52:function(e,t,r){"use strict";r(23);var n=r(36),o=(r(50),r(21),r(18),r(9),r(44),r(758),r(283),r(27),r(759)),c=(r(761),r(285),r(760));function l(e,t){l=function(e,t){return new h(e,void 0,t)};var r=Object(c.a)(RegExp),d=RegExp.prototype,f=new WeakMap;function h(e,t,n){var o=r.call(this,e,t);return f.set(o,n||f.get(e)),o}function v(e,t){var g=f.get(t);return Object.keys(g).reduce((function(t,r){return t[r]=e[g[r]],t}),Object.create(null))}return Object(o.a)(h,r),h.prototype.exec=function(e){var t=d.exec.call(this,e);return t&&(t.groups=v(t,this)),t},h.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=f.get(this);return d[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+r[t]})))}if("function"==typeof t){var o=this;return d[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==Object(n.a)(e[e.length-1])&&e.push(v(e,o)),t.apply(this,e)}))}return d[Symbol.replace].call(this,e,t)},l.apply(this,arguments)}var d={topic:function(text){if(text){var e=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){var t="/pages/topic/content?id=".concat(e);return'<a href="'.concat(t,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var e=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){var t="/pages/profile/index?userId=".concat(e);return'<a href="'.concat(t,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var e=/&lt;/gim;return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){return"<"}))}))}},parseHtml2:function(text){if(text){var e=/&gt;/gim;return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){return">"}))}))}}};t.a={parse:function(text){for(var e in d)text=d[e](text);return text}}},804:function(e,t){}}]);