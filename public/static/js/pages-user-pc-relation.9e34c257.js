(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-user-pc-relation"],{"0678":function(t,e,n){"use strict";n.r(e);var i=n("a3b4"),a=n("a2cd");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d869");var s=n("f0c5"),c=Object(s.a)(a.default,i.b,i.c,!1,null,"3a7ae34e",null,!1,i.a,void 0);e.default=c.exports},2846:function(t,e,n){(e=n("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.pc-relation[data-v-3a7ae34e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100vw;height:100%;padding-top:%?288?%;background:#fff;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pc-relation__box[data-v-3a7ae34e]{width:%?437?%;height:%?70?%;margin:0 auto}.pc-relation__box__img[data-v-3a7ae34e]{width:100%;height:120%}.pc-relation__imgbox[data-v-3a7ae34e]{margin-top:%?58?%}.pc-relation__text[data-v-3a7ae34e]{height:%?37?%;margin-top:%?18?%;font-size:%?30?%;font-weight:700;line-height:%?37?%;color:#000;text-align:center}.pc-relation__image[data-v-3a7ae34e]{width:%?120?%;height:%?120?%;margin:0 auto;border-radius:50%}.pc-relation__image-img[data-v-3a7ae34e]{width:100%;height:100%;border-radius:50%}.pc-relation__title[data-v-3a7ae34e]{height:%?45?%;margin-top:%?63?%;font-size:%?36?%;font-weight:400;line-height:%?45?%;color:#777;text-align:center}.pc-relation__fail[data-v-3a7ae34e]{height:%?45?%;margin-top:%?63?%;font-size:%?36?%;font-weight:400;line-height:%?45?%;color:#fa5151;text-align:center}.pc-relation__btn[data-v-3a7ae34e]{width:%?670?%;height:%?90?%;margin:0 auto;font-size:%?28?%;font-weight:400;line-height:%?90?%;color:#fff;text-align:center;background:#1878f3;border-radius:%?5?%}.pc-relation__cancel[data-v-3a7ae34e]{height:%?37?%;margin-top:%?80?%;font-size:%?28?%;font-weight:400;color:#1878f3;text-align:center}.pc-relation-bt[data-v-3a7ae34e]{margin-bottom:%?223?%}',""]),t.exports=e},a2cd:function(t,e,n){"use strict";n.r(e);var i=n("f8b6"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=a.a},a3b4:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pc-relation"},[i("v-uni-view",{staticClass:"pc-relation-tp"},[i("v-uni-view",{staticClass:"pc-relation__box"},[i("v-uni-image",{staticClass:"pc-relation__box__img",attrs:{src:n("cac3")}})],1),i("v-uni-view",{staticClass:"pc-relation__imgbox"},[i("v-uni-view",{staticClass:"pc-relation__image"},[i("v-uni-image",{staticClass:"pc-relation__image-img",attrs:{src:t.imageurl}})],1),i("v-uni-view",{staticClass:"pc-relation__text"},[t._v(t._s(t.name))])],1),t.displayRelation?t._e():i("v-uni-view",{staticClass:"pc-relation__fail"},[t._v(t._s(t.i18n.t("user.bindconfirmed")))]),t.displayRelation?i("v-uni-view",{staticClass:"pc-relation__title"},[t._v(t._s(t.i18n.t("user.pcrelation")))]):t._e()],1),t.displayRelation?i("v-uni-view",{staticClass:"pc-relation-bt"},[i("v-uni-view",{staticClass:"pc-relation__btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.authorization.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("user.pcrelation")))]),i("v-uni-view",{staticClass:"pc-relation__cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelPcrelation.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("user.cancelpcrelation")))])],1):t._e()],1)},a=[]},adae:function(t,e,n){var i=n("2846");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("4f06").default)("81990dca",i,!0,{sourceMap:!1,shadowMode:!1})},cac3:function(t,e,n){t.exports=n.p+"static/img/logo.4eaf1b31.png"},d869:function(t,e,n){"use strict";var i=n("adae");n.n(i).a},f8b6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("ceb9");var i={data:function(){return{code:"",sessionId:"",token:"",tokens:"",content:{},imageurl:"",name:"",displayRelation:!0}},onLoad:function(t){var e=this;this.content=t,t.session_token?uni.setStorage({key:"session_token_data",data:t.session_token,success:function(){e.$store.dispatch("session/wxPcRelation")}}):this.username()},methods:{username:function(){var t=this;uni.getStorage({key:"session_token_data",success:function(e){if(""!=e.data){var n=t.content.code,i=t.content.state,a=t.content.sessionId;t.$store.dispatch("session/scancodeverification",{code:n,state:i,sessionId:a,sessionToken:"",Insensibility:""}).then((function(e){uni.showToast({icon:"none",title:t.i18n.t("user.bindconfirmed"),success:function(){t.displayRelation=!1}})})).catch((function(e){"no_bind_user"===e.data.errors[0].code&&(t.tokens=e.data.errors[0].token,t.imageurl=e.data.errors[0].user.headimgurl,t.name=e.data.errors[0].user.nickname)}))}}})},authorization:function(){var t=this;uni.getStorage({key:"session_token_data",success:function(e){if(""!=e.data){var n=e.data,i=t.tokens;t.$store.dispatch("session/pcrelation",{sessionToken:n,wechatToken:i}).then((function(e){e&&e.data&&e.data.bind&&uni.showToast({icon:"none",title:t.i18n.t("user.pcrelationsuccess"),success:function(){t.cancelPclogin()}})}))}}})},cancelPcrelation:function(){WeixinJSBridge.call("closeWindow")}}};e.default=i}}]);