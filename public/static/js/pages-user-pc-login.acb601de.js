(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-user-pc-login"],{"0e1a":function(n,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"pc-login"},[i("v-uni-view",{staticClass:"pc-login-tp"},[i("v-uni-view",{staticClass:"pc-login__box"},[i("v-uni-image",{staticClass:"pc-login__box__img",attrs:{src:n.pcLoginLogo?n.pcLoginLogo:"/static/logo.png"}})],1),i("v-uni-view",{staticClass:"pc-login__title"},[n._v(n._s(n.i18n.t("user.pcloginconfirm")))])],1),i("v-uni-view",{staticClass:"pc-login-bt"},[i("v-uni-view",{staticClass:"pc-login__btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.pcLogin.apply(void 0,arguments)}}},[n._v(n._s(n.i18n.t("user.login")))]),i("v-uni-view",{staticClass:"pc-login__cancel",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.cancelPclogin.apply(void 0,arguments)}}},[n._v(n._s(n.i18n.t("user.cancelpclogin")))])],1)],1)},o=[]},"184f":function(n,t,i){"use strict";var e=i("cce9");i.n(e).a},2174:function(n,t,i){"use strict";i.r(t);var e=i("0e1a"),o=i("fb99");for(var s in o)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return o[n]}))}(s);i("184f");var c=i("f0c5"),a=Object(c.a)(o.default,e.b,e.c,!1,null,"6c972049",null,!1,e.a,void 0);t.default=a.exports},"68b9":function(n,t,i){(t=i("24fb")(!1)).push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.pc-login[data-v-6c972049]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100vw;height:100%;padding-top:%?417?%;background:#fff;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pc-login__box[data-v-6c972049]{width:%?437?%;height:%?70?%;margin:0 auto}.pc-login__box__img[data-v-6c972049]{width:100%;height:120%}.pc-login__title[data-v-6c972049]{height:%?45?%;margin-top:%?63?%;font-size:%?36?%;font-weight:400;line-height:%?45?%;color:#777;text-align:center}.pc-login__btn[data-v-6c972049]{width:%?670?%;height:%?90?%;margin:0 auto;font-size:%?28?%;font-weight:400;line-height:%?90?%;color:#fff;text-align:center;background:#1878f3;border-radius:%?5?%}.pc-login__cancel[data-v-6c972049]{height:%?37?%;margin-top:%?80?%;font-size:%?28?%;font-weight:400;color:#1878f3;text-align:center}.pc-login-bt[data-v-6c972049]{margin-bottom:%?223?%}',""]),n.exports=t},8724:function(n,t,i){"use strict";var e=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i("ceb9");var o={mixins:[e(i("b469")).default],data:function(){return{num:!1,code:"",sessionId:"",token:"",switch:!1,content:{},showPage:!1,pcLoginLogo:"",registers:""}},watch:{forums:{handler:function(n){n&&(this.pcLoginLogo=this.forums.set_site.site_logo,2===this.forums.set_reg.register_type&&(this.registers=1))},deep:!0}},onLoad:function(n){var t=this;this.content=n,this.isLogin=this.$store.getters["session/get"]("isLogin"),n.session_token&&(uni.showToast({icon:"none",title:this.i18n.t("user.loging")}),uni.setStorage({key:"session_token_data",data:n.session_token,success:function(){t.token=n.session_token,t.$store.dispatch("session/wxPcLogin")}}))},methods:{pcLogin:function(){var n=this;uni.getStorage({key:"session_token_data",success:function(t){if(""!=t.data){var i=t.data,e=n.content.code,o=n.content.state,s=n.content.sessionId,c=n.registers;n.$store.dispatch("session/scancodeverification",{code:e,state:o,sessionId:s,sessionToken:i,Insensibility:c}).then((function(t){t&&t.data&&t.data.data&&uni.showToast({icon:"none",title:n.i18n.t("user.loginSuccess"),success:function(){n.cancelPclogin()}})})).catch((function(t){t&&t.data&&t.data.errors&&"no_bind_user"===t.data.errors[0].code&&uni.showToast({icon:"none",title:n.i18n.t("user.loginSuccess"),success:function(){n.cancelPclogin()}})}))}}})},cancelPclogin:function(){WeixinJSBridge.call("closeWindow")}}};t.default=o},b469:function(n,t){n.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},cce9:function(n,t,i){var e=i("68b9");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,i("4f06").default)("43c553c6",e,!0,{sourceMap:!1,shadowMode:!1})},fb99:function(n,t,i){"use strict";i.r(t);var e=i("8724"),o=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(s);t.default=o.a}}]);