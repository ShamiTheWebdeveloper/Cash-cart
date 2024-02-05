(window.webpackJsonp=window.webpackJsonp||[]).push([[107,14,29,43],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),l=r(11);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(l.c)("ui",["errors"]))},d=c,f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,r){"use strict";r.r(e);var n=r(1),l=(r(21),r(436)),o={name:"SettingLayout",middleware:["common-middleware","auth"],data:function(){return{tabs:[{title:this.$t("setting.cur"),tabId:"currency"},{title:this.$t("list.addr"),tabId:"address"},{title:this.$t("list.lang"),tabId:"languages"},{title:this.$t("list.sl"),tabId:"social-login"},{title:this.$t("list.smtp"),tabId:"smtp"},{title:this.$t("title.ana"),tabId:"analytics"},{title:this.$t("list.payment"),tabId:"payment"},{title:this.$t("list.ms"),tabId:"media-storage"},{title:this.$t("dataPage.mis"),tabId:"miscellaneous"},{title:this.$t("setting.cClear"),tabId:"clear-cache"}]}},props:{activeRoute:{type:String}},mixins:[],components:{ErrorFormatter:l.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-sidebar pos-rel"},[r("h5",{staticClass:"title bold"},[t._v("\n    "+t._s(t.$t("list.set"))+"\n  ")]),t._v(" "),r("div",{staticClass:"dply-felx"},[r("ul",{staticClass:"left-area"},t._l(t.tabs,(function(e,n){return r("li",{key:n,class:{active:e.tabId===t.activeRoute}},[r("nuxt-link",{attrs:{to:"/setting/"+e.tabId}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0),t._v(" "),r("div",{staticClass:"right-area"},[r("error-formatter"),t._v(" "),t._t("rightArea")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default})},719:function(t,e,r){"use strict";r.r(e);var n=r(1),l=(r(21),r(80)),o=r(441),c={name:"LanguageSetting",data:function(){return{orderOptions:{created_at:{title:this.$t("category.date")},name:{title:this.$t("user.name")},code:{title:this.$t("setting.code")},direction:{title:this.$t("setting.dir")},default:{title:this.$t("admin.default")},status:{title:this.$t("category.status")}}}},props:{},mixins:[l.a],components:{ListPage:o.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=r(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$can("language","view")?r("list-page",{ref:"listPage",attrs:{"list-api":"getLanguages","delete-api":"deleteLanguage","route-name":"setting/languages",name:t.$t("profile.langLower"),gate:"language","order-options":t.orderOptions},scopedSlots:t._u([{key:"table",fn:function(e){var n=e.list;return[r("tr",{staticClass:"lite-bold"},[r("th",[t._v(t._s(t.$t("user.name")))]),t._v(" "),r("th",[t._v(t._s(t.$t("setting.code")))]),t._v(" "),r("th",[t._v(t._s(t.$t("setting.dir")))]),t._v(" "),r("th",[t._v(t._s(t.$t("admin.default")))]),t._v(" "),r("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),r("th",[t._v(" ")])]),t._v(" "),t._l(n,(function(e,n){return r("tr",{key:n},[r("td",[r("nuxt-link",{staticClass:"link",attrs:{to:"/setting/languages/"+e.id}},[r("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.name))])])],1),t._v(" "),r("td",[t._v(t._s(e.code))]),t._v(" "),r("td",[t._v(t._s(e.direction))]),t._v(" "),r("td",{staticClass:"status",class:{active:1==e.default}},[r("span",[t._v(t._s(t.getBoolean(e.default)))])]),t._v(" "),r("td",{staticClass:"status",class:{active:1==e.status}},[r("span",[t._v(t._s(t.getStatus(e.status)))])]),t._v(" "),r("td",[t.$can("language","edit")?r("button",{staticClass:"lite-btn",on:{click:function(r){return r.preventDefault(),t.$refs.listPage.editItem(e.id)}}},[t._v("Edit\n        ")]):t._e(),t._v(" "),t.$can("language","delete")?r("button",{staticClass:"delete-btn lite-btn",on:{click:function(r){return r.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v("\n          "+t._s(t.$t("category.delete"))+"\n        ")]):t._e()])])}))]}}],null,!1,3928362485)}):t._e()}),[],!1,null,null,null);e.default=component.exports},838:function(t,e,r){"use strict";r.r(e);var n=r(1),l=(r(21),r(446)),o={middleware:["common-middleware","auth"],data:function(){return{}},props:{},mixins:[],components:{LanguageSetting:r(719).default,SettingLayout:l.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("setting-layout",{staticClass:"mb-5",attrs:{"active-route":"languages"},scopedSlots:t._u([{key:"rightArea",fn:function(){return[r("language-setting")]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);