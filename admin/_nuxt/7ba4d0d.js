(window.webpackJsonp=window.webpackJsonp||[]).push([[105,14,43],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),c=r(11);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(c.c)("ui",["errors"]))},d=l,m=r(16),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,r){"use strict";r.r(e);var n=r(1),c=(r(21),r(436)),o={name:"SettingLayout",middleware:["common-middleware","auth"],data:function(){return{tabs:[{title:this.$t("setting.cur"),tabId:"currency"},{title:this.$t("list.addr"),tabId:"address"},{title:this.$t("list.lang"),tabId:"languages"},{title:this.$t("list.sl"),tabId:"social-login"},{title:this.$t("list.smtp"),tabId:"smtp"},{title:this.$t("title.ana"),tabId:"analytics"},{title:this.$t("list.payment"),tabId:"payment"},{title:this.$t("list.ms"),tabId:"media-storage"},{title:this.$t("dataPage.mis"),tabId:"miscellaneous"},{title:this.$t("setting.cClear"),tabId:"clear-cache"}]}},props:{activeRoute:{type:String}},mixins:[],components:{ErrorFormatter:c.default},computed:{},methods:{},created:function(){},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},l=r(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-sidebar pos-rel"},[r("h5",{staticClass:"title bold"},[t._v("\n    "+t._s(t.$t("list.set"))+"\n  ")]),t._v(" "),r("div",{staticClass:"dply-felx"},[r("ul",{staticClass:"left-area"},t._l(t.tabs,(function(e,n){return r("li",{key:n,class:{active:e.tabId===t.activeRoute}},[r("nuxt-link",{attrs:{to:"/setting/"+e.tabId}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0),t._v(" "),r("div",{staticClass:"right-area"},[r("error-formatter"),t._v(" "),t._t("rightArea")],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default})},837:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),c=r(5),o=(r(21),r(11)),l=r(446),d=r(149),m=r(150),y=r(80),f=r(48);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={middleware:["common-middleware","auth"],data:function(){return{updatedCurrency:null,decimalFormat:"en-US",currencyPosition:1,loading:!1,updatingCurrency:!1,hasError:!1}},props:{},mixins:[y.a],components:{Spinner:f.default,Dropdown:m.default,AjaxButton:d.default,SettingLayout:l.default},computed:h(h({currency:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency)||"USD"}},Object(o.c)("resource",["currencyList","decimalFormatList"])),Object(o.c)("setting",["setting"])),methods:h(h(h({selectedDecimalFormat:function(data){this.decimalFormat=data.key},selectedCurrencyPosition:function(data){this.currencyPosition=data.key},selectedCurrency:function(data){this.updatedCurrency=data.key,this.currencyIcon=data.value.symbolNative},updateCurrency:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.updatedCurrency&&t.currencyIcon&&t.currencyPosition)){e.next=11;break}return t.updatingCurrency=!0,e.prev=2,e.next=5,t.setCurrency({currency:t.updatedCurrency||t.currency,currency_icon:t.currencyIcon,decimal_format:t.decimalFormat,currency_position:t.currencyPosition});case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 10:t.updatingCurrency=!1;case 11:case"end":return e.stop()}}),e,null,[[2,7]])})))()}},Object(o.b)("common",["getById"])),Object(o.b)("resource",["setCurrencyList","setDecimalFormatList"])),Object(o.b)("setting",["setCurrency"])),created:function(){},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,data,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.currencyList){e.next=7;break}return t.loading=!0,e.next=4,t.getById({params:null,id:"currencies",api:"resource"});case 4:data=e.sent,t.setCurrencyList(data),t.loading=!1;case 7:if(t.decimalFormatList){e.next=14;break}return t.loading=!0,e.next=11,t.getById({params:null,id:"decimalFormats",api:"resource"});case 11:l=e.sent,t.setDecimalFormatList(l),t.loading=!1;case 14:t.updatedCurrency=null===(r=t.setting)||void 0===r?void 0:r.currency,t.currencyIcon=null===(n=t.setting)||void 0===n?void 0:n.currency_icon,t.currencyPosition=null===(c=t.setting)||void 0===c?void 0:c.currency_position,null!==(o=t.setting)&&void 0!==o&&o.decimal_format&&(t.decimalFormat=null===(d=t.setting)||void 0===d?void 0:d.decimal_format);case 18:case"end":return e.stop()}}),e)})))()}},_=r(16),component=Object(_.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("setting-layout",{staticClass:"mb-5",attrs:{"active-route":"currency"},scopedSlots:t._u([{key:"rightArea",fn:function(){return[r("form",{class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.updateCurrency.apply(null,arguments)}}},[t.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[t._v("\n          "+t._s(t.$t("setting.cur"))+"\n        ")]),t._v(" "),t.currency?r("dropdown",{attrs:{"selected-key":t.currency,options:t.currencyList,"key-name":"name",searching:!0},on:{clicked:t.selectedCurrency}}):t._e()],1),t._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[t._v("\n          "+t._s(t.$t("setting.curPos"))+"\n        ")]),t._v(" "),r("dropdown",{attrs:{selectedKey:""+t.currencyPosition,options:t.currencyPositions},on:{clicked:t.selectedCurrencyPosition}})],1),t._v(" "),r("div",{staticClass:"input-wrapper single-line"},[r("label",[t._v("\n          "+t._s(t.$t("dataPage.df"))+"\n        ")]),t._v(" "),t.decimalFormat?r("dropdown",{attrs:{"selected-key":t.decimalFormat,options:t.decimalFormatList,"key-name":"name",searching:!0},on:{clicked:t.selectedDecimalFormat}}):t._e()],1),t._v(" "),t.$can("setting","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{text:t.$t("dataPage.uc"),"fetching-data":t.updatingCurrency}}):t._e()],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(48).default,Dropdown:r(150).default,AjaxButton:r(149).default})}}]);