webpackJsonp([35],{TNuQ:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={methods:{click:function(){this.$Notify.info("info")},success:function(){this.$Notify.success("成功")},warning:function(){this.$Notify.warning("警告")},errer:function(){this.$Notify.errer("错误")},iconfont:function(){this.$Notify.success({icon:"iconinfo",context:"成功"})},close:function(){var t=this.$Notify.success("消息");setTimeout(function(){t.close()},2e3)},duration:function(){this.$Notify.success({duration:5e3,context:"成功"})}}},o={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("demoTop",{attrs:{gray:"",text:"Notify"}},[i("section",{staticClass:"demo-button-row"},[i("h3",[t._v("基本用法")]),t._v(" "),i("div",{staticClass:"cell"},[i("Button",{on:{click:t.click}},[t._v("Notify info")]),t._v(" "),i("Button",{attrs:{type:"success"},on:{click:t.success}},[t._v("Notify success")])],1),t._v(" "),i("div",{staticClass:"cell",staticStyle:{padding:"15px 0 0 0"}},[i("Button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("Notify warning")]),t._v(" "),i("Button",{attrs:{type:"errer"},on:{click:t.errer}},[t._v("Notify errer")])],1)]),t._v(" "),i("section",{staticClass:"demo-button-row"},[i("h3",[t._v("自定义用法")]),t._v(" "),i("div",{staticClass:"cell"},[i("Button",{on:{click:t.iconfont}},[t._v("自定义icon")]),t._v(" "),i("Button",{on:{click:t.duration}},[t._v("自定义关闭时长")])],1)]),t._v(" "),i("section",{staticClass:"demo-button-row"},[i("h3",[t._v("手动关闭")]),t._v(" "),i("div",{staticClass:"cell"},[i("Button",{on:{click:t.close}},[t._v("消 息")])],1)])])},staticRenderFns:[]};var s=i("VU/8")(c,o,!1,function(t){i("jem3")},"data-v-bb1e3126",null);n.default=s.exports},jem3:function(t,n){}});
//# sourceMappingURL=35.bf0c42c0a80f357fbfb5.js.map