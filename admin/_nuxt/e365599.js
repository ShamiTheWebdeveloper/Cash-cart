(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{444:function(t,e){function n(t,e,n){var l,r,o,c,d;function f(){var h=Date.now()-c;h<e&&h>=0?l=setTimeout(f,e-h):(l=null,n||(d=t.apply(o,r),o=r=null))}null==e&&(e=100);var h=function(){o=this,r=arguments,c=Date.now();var h=n&&!l;return l||(l=setTimeout(f,e)),h&&(d=t.apply(o,r),o=r=null),d};return h.clear=function(){l&&(clearTimeout(l),l=null)},h.flush=function(){l&&(d=t.apply(o,r),o=r=null,clearTimeout(l),l=null)},h}n.debounce=n,t.exports=n},714:function(t,e,n){"use strict";n.r(e);n(20),n(19),n(23),n(8),n(27),n(17),n(28);var l=n(5);n(444);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"HeaderLink",data:function(){return{result:{left:[],right:[]}}},props:{resultData:{type:Object,default:function(){return{left:[],right:[]}}},type:{type:String,default:"left"},title:{type:String}},computed:{},watch:{resultData:function(){this.assignResult()}},methods:{addNew:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";this.result[t].push({title:"",url:""}),this.$emit("change",this.result)},deleteItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left";this.result[e][t]=o(o({},this.result[e][t]),{deleted:!0}),this.result=o(o({},this.result),Object(l.a)({},e,this.result[e])),this.$emit("change",this.result)},undoDelete:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left";this.result[e][t]=o(o({},this.result[e][t]),{deleted:!1}),this.result=o(o({},this.result),Object(l.a)({},e,this.result[e])),this.$emit("change",this.result)},assignResult:function(){this.result=this.resultData}},mounted:function(){this.assignResult()}},d=c,f=n(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"dply-felx"},[n("h4",[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"lite-btn",on:{click:function(e){return e.preventDefault(),t.addNew(t.type)}}},[t._v("\n      "+t._s(t.$t("setting.addLink"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"table-wrapper mb-20 mb-sm-15"},[n("table",{staticClass:"mn-w-600x"},[n("tr",{staticClass:"lite-bold"},[n("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),n("th",[t._v(t._s(t.$t("admin.url")))]),t._v(" "),n("th")]),t._v(" "),t._l(t.result[t.type],(function(e,l){return n("tr",{key:l,staticClass:"deletable",class:{deleted:e.deleted}},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],attrs:{disabled:e.deleted,type:"text",placeholder:t.$t("index.title"),name:"title"},domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"item.url"}],attrs:{disabled:e.deleted,type:"text",placeholder:t.$t("admin.url"),name:"title"},domProps:{value:e.url},on:{input:function(n){n.target.composing||t.$set(e,"url",n.target.value)}}})]),t._v(" "),n("td",{staticClass:"undo-container"},[e.deleted?n("button",{staticClass:"lite-btn ",on:{click:function(e){return e.preventDefault(),t.undoDelete(l,t.type)}}},[t._v("\n            "+t._s(t.$t("fSale.undo"))+"\n          ")]):n("button",{staticClass:"lite-btn delete-btn",on:{click:function(e){return e.preventDefault(),t.deleteItem(l,t.type)}}},[t._v("\n            "+t._s(t.$t("category.delete"))+"\n          ")])])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);