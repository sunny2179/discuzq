(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"/V7O":function(e,t,r){"use strict";r.r(t);var a=r("T6Ka"),s=r("yDFb");for(var c in s)["default"].indexOf(c)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(c);var i=r("KHd+"),d=Object(i.a)(s.default,a.a,a.b,!1,null,null,null);t.default=d.exports},T6Ka:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rol-permission-box"},[r("div",{staticClass:"index-main-con__main-title__class permission__title"},[r("i"),e._v(" "),e._l(e.menuData,(function(t,a){return r("span",{key:a,class:e.activeTab.name===t.name?"is-active":"",on:{click:function(r){e.activeTab=t}}},[e._v(e._s(t.title))])}))],2),e._v(" "),r("Card",{attrs:{header:e.$router.history.current.query.name+"--"+e.activeTab.title}}),e._v(" "),"操作权限"==e.activeTab.title?r("div",{staticClass:"scope-action"},[e._v("\n    生效范围\n  ")]):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"userOperate"===e.activeTab.name,expression:"activeTab.name === 'userOperate'"}]},[r("div",{staticClass:"user-operate"},[r("Card",{attrs:{header:"内容发布权限"}}),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布文字帖"}},[r("el-checkbox",{attrs:{label:"createThread.0",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布文字")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布帖子"}},[r("el-checkbox",{attrs:{label:"createThread.1",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布帖子")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布视频帖，需先开启腾讯云-云点播服务"}},[r("el-checkbox",{attrs:{label:"createThread.2",disabled:e.videoDisabled||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布视频")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布图片帖"}},[r("el-checkbox",{attrs:{label:"createThread.3",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布图片")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布语音帖，需先开启腾讯云-云点播服务"}},[r("el-checkbox",{attrs:{label:"createThread.4",disabled:e.videoDisabled||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布语音")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布问答，只有在开启微信支付且允许发布付费内容时才能设置提问价格"}},[r("el-checkbox",{attrs:{label:"createThread.5",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布问答")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布商品帖"}},[r("el-checkbox",{attrs:{label:"createThread.6",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布商品")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布私信"}},[r("el-checkbox",{attrs:{label:"dialog.create",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布私信")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许成为发布问答时的提问对象"}},[r("el-checkbox",{attrs:{label:"canBeAsked",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("允许被提问")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许在发布问答时设置围观，需先在全局设置里配置问答围观价格"}},[r("el-checkbox",{attrs:{label:"canBeOnlooker",disabled:!e.canBeOnlooker||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("设置围观")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"发布主题时上传附件的权限"}},[r("el-checkbox",{attrs:{label:"attachment.create.0",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("上传附件")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"发布主题时上传图片的权限"}},[r("el-checkbox",{attrs:{label:"attachment.create.1",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("上传图片")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"允许发布付费内容、付费附件"}},[r("el-checkbox",{attrs:{label:"createThreadPaid",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id||e.wechatPayment},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布付费内容")])],1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"允许在内容分类发布主题的权限"}},[r("el-checkbox",{attrs:{label:"switch.createThread",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"createThread")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布主题")])],1),e._v(" "),r("el-select",{attrs:{multiple:"",disabled:-1===e.checked.indexOf("switch.createThread"),"collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"createThread")}},model:{value:e.selectList.createThread,callback:function(t){e.$set(e.selectList,"createThread",t)},expression:"selectList.createThread"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("createThread",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"允许在内容分类回复主题的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.reply",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.reply")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("回复主题")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.reply"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.reply")}},model:{value:e.selectList["thread.reply"],callback:function(t){e.$set(e.selectList,"thread.reply",t)},expression:"selectList['thread.reply']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.reply",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"内容分类下内容允许被打赏的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.canBeReward",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id||e.wechatPayment},on:{change:function(t){return e.changeChecked(t,"thread.canBeReward")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("允许被打赏")])],1),e._v(" "),r("el-select",{attrs:{multiple:"","collapse-tags":"",disabled:-1===e.checked.indexOf("switch.thread.canBeReward"),placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.canBeReward")}},model:{value:e.selectList["thread.canBeReward"],callback:function(t){e.$set(e.selectList,"thread.canBeReward",t)},expression:"selectList['thread.canBeReward']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.canBeReward",t.id)}}})})),1)],1)],1),e._v(" "),r("div",{staticClass:"user-operate"},[r("Card",{attrs:{header:"查看权限"}}),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"查看内容分类主题列表的权限"}},[r("el-checkbox",{attrs:{label:"switch.viewThreads",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"viewThreads")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("查看主题列表")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.viewThreads"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"viewThreads")}},model:{value:e.selectList.viewThreads,callback:function(t){e.$set(e.selectList,"viewThreads",t)},expression:"selectList.viewThreads"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("viewThreads",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"查看内容分类主题详情的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.viewPosts",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.viewPosts")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("查看主题详情")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.viewPosts"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.viewPosts")}},model:{value:e.selectList["thread.viewPosts"],callback:function(t){e.$set(e.selectList,"thread.viewPosts",t)},expression:"selectList['thread.viewPosts']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.viewPosts",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"免费查看内容分类下的付费帖子"}},[r("el-checkbox",{attrs:{label:"switch.thread.freeViewPosts.1",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.freeViewPosts.1")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("免费查看付费帖子")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.freeViewPosts.1"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.freeViewPosts.1")}},model:{value:e.selectList["thread.freeViewPosts.1"],callback:function(t){e.$set(e.selectList,"thread.freeViewPosts.1",t)},expression:"selectList['thread.freeViewPosts.1']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.freeViewPosts.1",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"免费查看内容分类下的付费视频"}},[r("el-checkbox",{attrs:{label:"switch.thread.freeViewPosts.2",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.freeViewPosts.2")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("免费查看付费视频")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.freeViewPosts.2"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.freeViewPosts.2")}},model:{value:e.selectList["thread.freeViewPosts.2"],callback:function(t){e.$set(e.selectList,"thread.freeViewPosts.2",t)},expression:"selectList['thread.freeViewPosts.2']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.freeViewPosts.2",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"免费查看内容分类下的付费图片"}},[r("el-checkbox",{attrs:{label:"switch.thread.freeViewPosts.3",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.freeViewPosts.3")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("免费查看付费图片")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.freeViewPosts.3"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.freeViewPosts.3")}},model:{value:e.selectList["thread.freeViewPosts.3"],callback:function(t){e.$set(e.selectList,"thread.freeViewPosts.3",t)},expression:"selectList['thread.freeViewPosts.3']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.freeViewPosts.3",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"免费查看内容分类下的付费语音"}},[r("el-checkbox",{attrs:{label:"switch.thread.freeViewPosts.4",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.freeViewPosts.4")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("免费查看付费语音")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.freeViewPosts.4"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.freeViewPosts.4")}},model:{value:e.selectList["thread.freeViewPosts.4"],callback:function(t){e.$set(e.selectList,"thread.freeViewPosts.4",t)},expression:"selectList['thread.freeViewPosts.4']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.freeViewPosts.4",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"免费查看内容分类下的付费问答"}},[r("el-checkbox",{attrs:{label:"switch.thread.freeViewPosts.5",disabled:"1"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.freeViewPosts.5")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("免费查看付费问答")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.freeViewPosts.5"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.freeViewPosts.5")}},model:{value:e.selectList["thread.freeViewPosts.5"],callback:function(t){e.$set(e.selectList,"thread.freeViewPosts.5",t)},expression:"selectList['thread.freeViewPosts.5']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.freeViewPosts.5",t.id)}}})})),1)],1)],1),e._v(" "),r("div",{staticClass:"user-operate"},[r("Card",{attrs:{header:"管理权限"}}),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"前台置顶、取消置顶主题的权限"}},[r("el-checkbox",{attrs:{label:"thread.sticky",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("置顶")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"前台站点管理中按用户组邀请成员的权限"}},[r("el-checkbox",{attrs:{label:"createInvite",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("邀请加入")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"前台更改成员所属用户组的权限"}},[r("el-checkbox",{attrs:{label:"user.edit.group",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("编辑用户组")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"前台更改成员禁用状态的权限"}},[r("el-checkbox",{attrs:{label:"user.edit.status",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("编辑用户状态")])],1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"前台精华、取消精华主题的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.essence",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.essence")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("加精")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.essence"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.essence")}},model:{value:e.selectList["thread.essence"],callback:function(t){e.$set(e.selectList,"thread.essence",t)},expression:"selectList['thread.essence']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.essence",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"前台单个主题的编辑权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.edit",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.edit")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("编辑主题")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.edit"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.edit")}},model:{value:e.selectList["thread.edit"],callback:function(t){e.$set(e.selectList,"thread.edit",t)},expression:"selectList['thread.edit']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.edit",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"前台删除单个主题的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.hide",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.hide")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("删除主题")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.hide"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.hide")}},model:{value:e.selectList["thread.hide"],callback:function(t){e.$set(e.selectList,"thread.hide",t)},expression:"selectList['thread.hide']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.hide",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"前台单个回复的编辑权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.editPosts",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.editPosts")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("编辑回复")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.editPosts"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.editPosts")}},model:{value:e.selectList["thread.editPosts"],callback:function(t){e.$set(e.selectList,"thread.editPosts",t)},expression:"selectList['thread.editPosts']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.editPosts",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"前台删除单个回复的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.hidePosts",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.hidePosts")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("删除回复")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.hidePosts"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.hidePosts")}},model:{value:e.selectList["thread.hidePosts"],callback:function(t){e.$set(e.selectList,"thread.hidePosts",t)},expression:"selectList['thread.hidePosts']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.hidePosts",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"作者编辑自己的主题或回复的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.editOwnThreadOrPost",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.editOwnThreadOrPost")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("编辑自己的主题或回复")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.editOwnThreadOrPost"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.editOwnThreadOrPost")}},model:{value:e.selectList["thread.editOwnThreadOrPost"],callback:function(t){e.$set(e.selectList,"thread.editOwnThreadOrPost",t)},expression:"selectList['thread.editOwnThreadOrPost']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.editOwnThreadOrPost",t.id)}}})})),1)],1),e._v(" "),r("Card",{staticClass:"hasSelect"},[r("CardRow",{attrs:{description:"作者删除自己的主题或回复的权限"}},[r("el-checkbox",{attrs:{label:"switch.thread.hideOwnThreadOrPost",disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:function(t){return e.changeChecked(t,"thread.hideOwnThreadOrPost")}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("删除自己的主题或回复")])],1),e._v(" "),r("el-select",{attrs:{disabled:-1===e.checked.indexOf("switch.thread.hideOwnThreadOrPost"),multiple:"","collapse-tags":"",placeholder:"请选择"},on:{"remove-tag":function(t){return e.clearItem(t,"thread.hideOwnThreadOrPost")}},model:{value:e.selectList["thread.hideOwnThreadOrPost"],callback:function(t){e.$set(e.selectList,"thread.hideOwnThreadOrPost",t)},expression:"selectList['thread.hideOwnThreadOrPost']"}},e._l(e.categoriesList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id},nativeOn:{click:function(r){return e.changeCategory("thread.hideOwnThreadOrPost",t.id)}}})})),1)],1)],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"security"===e.activeTab.name,expression:"activeTab.name === 'security'"}]},[r("Card",[r("CardRow",{attrs:{description:"启用验证码需先在腾讯云设置中开启验证码服务"}},[r("el-checkbox",{attrs:{label:"createThreadWithCaptcha",disabled:e.captchaDisabled||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布内容时启用验证码")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"实名认证后才可发布内容"}},[r("el-checkbox",{attrs:{label:"publishNeedRealName",disabled:e.realNameDisabled||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布内容需先实名认证")])],1)],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:"绑定手机后才可发布内容"}},[r("el-checkbox",{attrs:{label:"publishNeedBindPhone",disabled:e.bindPhoneDisabled||"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("发布内容需先绑定手机")])],1)],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"default"===e.activeTab.name,expression:"activeTab.name === 'default'"}]},[r("Card",[r("CardRow",{attrs:{description:""}},[r("p",{staticStyle:{"margin-left":"24PX"}},[e._v("站点信息")])])],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:""}},[r("p",{staticStyle:{"margin-left":"24PX"}},[e._v("主题点赞")])])],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:""}},[r("p",{staticStyle:{"margin-left":"24PX"}},[e._v("主题收藏")])])],1),e._v(" "),r("Card",[r("CardRow",{attrs:{description:""}},[r("p",{staticStyle:{"margin-left":"24PX"}},[e._v("主题打赏")])])],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"other"===e.activeTab.name,expression:"activeTab.name === 'other'"}]},[r("Card",{attrs:{header:"裂变推广："}},[r("CardRow",{attrs:{description:"允许用户裂变推广以及通过推广注册进来的用户收入是否能分成"}},[r("el-checkbox",{attrs:{disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:e.handlePromotionChange},model:{value:e.is_subordinate,callback:function(t){e.is_subordinate=t},expression:"is_subordinate"}},[e._v("裂变推广")]),e._v(" "),r("el-checkbox",{attrs:{disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id},on:{change:e.handleScaleChange},model:{value:e.is_commission,callback:function(t){e.is_commission=t},expression:"is_commission"}},[e._v("收入分成")])],1),e._v(" "),e.is_subordinate||e.is_commission?r("CardRow",{staticClass:"proportion-box",attrs:{description:"站点开启付费模式时下线付费加入、主题被打赏、被付费等的分成比例设置，填1表示10%，不填或为0时为不分成"}},[r("div",[r("span",[e._v("提成比例")]),e._v(" "),r("el-input",{attrs:{type:"number"},on:{blur:e.checkNum},model:{value:e.scale,callback:function(t){e.scale=t},expression:"scale"}})],1)]):e._e()],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"pricesetting"===e.activeTab.name,expression:"activeTab.name === 'pricesetting'"}]},[r("Card",{attrs:{header:"允许购买："}},[r("CardRow",{staticClass:"allow-box",attrs:{description:"允许购买"}},[r("el-switch",{attrs:{disabled:"1"===e.$router.history.current.query.id||"7"===e.$router.history.current.query.id||!e.allowtobuy||e.defaultuser,"active-color":"#336699","inactive-color":"#bbbbbb"},on:{change:e.fun},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1),e._v(" "),e.value?r("Card",{attrs:{header:"购买价格（元）："}},[r("CardRow",{attrs:{description:"需支付的金额"}},[r("el-input",{attrs:{placeholder:"加入价格",type:"number"},on:{input:e.addprice},model:{value:e.purchasePrice,callback:function(t){e.purchasePrice=t},expression:"purchasePrice"}})],1)],1):e._e(),e._v(" "),e.value?r("Card",{attrs:{header:"到期时间："}},[r("CardRow",{attrs:{description:"到期时间，可维持的时间"}},[e._v("\n        加入起\n        "),r("el-input",{staticClass:"elinput",staticStyle:{height:"36PX",width:"80PX"},attrs:{clearable:"",placeholder:"天数",type:"number"},on:{input:e.duedata},model:{value:e.dyedate,callback:function(t){e.dyedate=t},expression:"dyedate"}}),e._v("\n        天后\n      ")],1)],1):e._e()],1),e._v(" "),r("Card",{staticClass:"footer-btn"},[r("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.submitClick}},[e._v("提交")])],1)],1)},s=[]},fsy8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r("QbLZ"));r("I1+7");var s=c(r("zxK7"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"user-permission-view"},s.default)},yDFb:function(e,t,r){"use strict";r.r(t);var a=r("fsy8"),s=r.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(c);t.default=s.a},zxK7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r("4gYi")),s=c(r("pNQN"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{groupId:0,checked:[],videoDisabled:!1,captchaDisabled:!1,realNameDisabled:!1,is_subordinate:!1,is_commission:!1,scale:0,bindPhoneDisabled:!1,wechatPayment:!1,canBeOnlooker:!1,categoriesList:[],selectList:{viewThreads:[],createThread:[],"thread.reply":[],"thread.edit":[],"thread.hide":[],"thread.essence":[],"thread.viewPosts":[],"thread.editPosts":[],"thread.hidePosts":[],"thread.canBeReward":[],"thread.editOwnThreadOrPost":[],"thread.hideOwnThreadOrPost":[],"thread.freeViewPosts.1":[],"thread.freeViewPosts.2":[],"thread.freeViewPosts.3":[],"thread.freeViewPosts.4":[],"thread.freeViewPosts.5":[]},activeTab:{title:"操作权限",name:"userOperate"},menuData:[{title:"操作权限",name:"userOperate"},{title:"安全设置",name:"security"},{title:"价格设置",name:"pricesetting"},{title:"其他设置",name:"other"}],value:"",purchasePrice:"",dyedate:"",ispad:"",allowtobuy:"",defaultuser:!1}},methods:{duedata:function(e){this.duedata=e.replace(/[^\d]/g,"")},addprice:function(e){var t=this;setTimeout((function(){t.purchasePrice=e.replace(/[^\d.]/g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^(-)*(\d+)\.(\d\d).*$/,"$1$2.$3").replace(/^\./g,"")}),5)},signUpSet:function(){var e=this;this.appFetch({url:"forum",method:"get"}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.videoDisabled=!1===t.readdata._data.qcloud.qcloud_vod,e.captchaDisabled=!1===t.readdata._data.qcloud.qcloud_captcha,e.realNameDisabled=!1===t.readdata._data.qcloud.qcloud_faceid,e.bindPhoneDisabled=!1===t.readdata._data.qcloud.qcloud_sms,e.wechatPayment=!1===t.readdata._data.paycenter.wxpay_close,e.canBeOnlooker=t.readdata._data.set_site.site_onlooker_price>0,e.allowtobuy=t.readdata._data.set_site.site_pay_group_close,e.allowtobuy||(e.value=!1))}))},getCategories:function(){var e=this;this.appFetch({url:"categories",method:"get"}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.categoriesList=[{id:"",name:"全局"}],t.readdata.forEach((function(t){var r={id:t._data.id,name:t._data.name};e.categoriesList.push(r)})))}))},submitClick:function(){if(this.checkNum())if(this.value){if(0==this.purchasePrice)return void this.$message.error("价格不能为0");if(" "==this.purchasePrice)return void this.$message.error("价格不能为空");if(0==this.dyedate)return void this.$message.error("到期时间不能为0");if(" "==this.dyedate)return void this.$message.error("到期时间不能为空");this.patchGroupScale()}else this.patchGroupScale()},getGroupResource:function(){var e=this;this.appFetch({url:"groups",method:"get",splice:"/"+this.groupId,data:{include:["permission","categoryPermissions"]}}).then((function(t){if(t.errors)t.errors[0].detail?e.$message.error(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$message.error(t.errors[0].code);else{e.ispad=t.data.attributes.isPaid,e.purchasePrice=t.data.attributes.fee,e.dyedate=t.data.attributes.days;var r=t.readdata.permission;e.checked=[],e.scale=t.data.attributes.scale,e.is_subordinate=t.data.attributes.is_subordinate,e.is_commission=t.data.attributes.is_commission,e.defaultuser=t.data.attributes.default,e.value=t.data.attributes.isPaid,r.forEach((function(t){e.checked.push(t._data.permission)})),e.setSelectValue(e.checked)}})).catch((function(e){}))},patchGroupPermission:function(){var e=this,t=this.checked;this.is_commission||this.is_subordinate?-1===t.indexOf("other.canInviteUserScale")&&t.push("other.canInviteUserScale"):t=t.filter((function(e){return"other.canInviteUserScale"!==e})),this.appFetch({url:"groupPermission",method:"post",data:{data:{attributes:{groupId:this.groupId,permissions:t}}}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):e.$message({showClose:!0,message:"提交成功",type:"success"})})).catch((function(e){}))},patchGroupScale:function(){var e=this;this.appFetch({url:"groups",method:"PATCH",splice:"/"+this.groupId,data:{data:{attributes:{name:this.$route.query.name,is_paid:this.value?1:0,fee:this.purchasePrice,days:this.dyedate,scale:this.scale,is_subordinate:this.is_subordinate,is_commission:this.is_commission}}}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):e.patchGroupPermission()})).catch((function(e){}))},handlePromotionChange:function(e){this.is_subordinate=e},handleScaleChange:function(e){this.is_commission=e},checkNum:function(){if(!this.scale)return!0;return!!/^([0-9](\.\d)?|10)$/.test(this.scale)||(this.$message({message:"提成比例必须是0~10的整数或者一位小数",type:"error"}),!1)},changeCategory:function(e,t){var r=this.checked,a="category"+t+"."+e;if(t)-1!==this.selectList[e].indexOf(t)?r.push(a):r=r.filter((function(e){return e!==a})),r=r.filter((function(t){return t!==e})),this.selectList[e]=this.selectList[e].filter((function(e){return!!e}));else{for(var s=0;s<r.length;s++)-1!==r[s].indexOf(e)&&-1!==r[s].indexOf("category")&&(r.splice(s,1),s-=1);-1===r.indexOf(e)&&r.push(e),this.selectList[e]=[""]}this.checked=r},setSelectValue:function(e){var t=e,r=this.selectList,a=["viewThreads","createThread","thread.reply","thread.edit","thread.hide","thread.essence","thread.viewPosts","thread.editPosts","thread.hidePosts","thread.canBeReward","thread.editOwnThreadOrPost","thread.hideOwnThreadOrPost","thread.freeViewPosts.1","thread.freeViewPosts.2","thread.freeViewPosts.3","thread.freeViewPosts.4","thread.freeViewPosts.5"];t.forEach((function(e,s){if(-1!==a.indexOf(e)&&r[e].push(""),-1!==e.indexOf("category")){var c=e.indexOf("."),i=e.substring(c+1),d=e.substring(8,c);r[i]&&-1===t.indexOf(i)&&r[i].push(d),-1!==t.indexOf(i)&&t.splice(s,1)}})),this.selectList=r,this.checked=t},clearItem:function(e,t){var r="";r=e?"category"+e+"."+t:t;var a=this.checked;a=a.filter((function(e){return e!==r})),this.checked=a},changeChecked:function(e,t){if(!e){var r=this.checked;this.selectList[t]=[],this.checked=r.filter((function(e){return-1===e.indexOf(t)}))}}},created:function(){this.groupId=this.$route.query.id,this.activeTab.title=this.$route.query.title||"操作权限",this.activeTab.name=this.$route.query.names||"userOperate",this.getGroupResource(),this.signUpSet(),this.getCategories()},components:{Card:a.default,CardRow:s.default}}}}]);