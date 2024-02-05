(window.webpackJsonp=window.webpackJsonp||[]).push([[38,14],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=l,f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,r){"use strict";r(25),r(37);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:1,maxExcelSize:2,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},442:function(t,e,r){var n=r(12);t.exports=function(t){return n(Set.prototype.values,t)}},452:function(t,e,r){var n=r(4),o=r(273).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},603:function(t,e,r){r(623)},604:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(624)})},605:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(278)})},606:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=d(this),r=new(f(e,o("Set")))(e),n=l(r.delete);return v(t,(function(t){c(n,r,t)})),r}})},607:function(t,e,r){"use strict";var n=r(4),o=r(10),c=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},608:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(12),l=r(34),d=r(10),f=r(36),v=r(81),h=r(442),m=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=d(this),r=h(e),n=f(t,arguments.length>1?arguments[1]:void 0),y=new(v(e,o("Set"))),x=l(y.add);return m(r,(function(t){n(t,t,e)&&c(x,y,t)}),{IS_ITERATOR:!0}),y}})},609:function(t,e,r){"use strict";var n=r(4),o=r(10),c=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},610:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=d(this),r=new(f(e,o("Set"))),n=l(e.has),h=l(r.add);return v(t,(function(t){c(n,e,t)&&c(h,r,t)})),r}})},611:function(t,e,r){"use strict";var n=r(4),o=r(12),c=r(34),l=r(10),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!d(t,(function(t,n){if(!0===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},612:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(12),l=r(34),d=r(14),f=r(10),v=r(152),h=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=v(this),r=f(t),n=r.has;return d(n)||(r=new(o("Set"))(t),n=l(r.has)),!h(e,(function(t,e){if(!1===c(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},613:function(t,e,r){"use strict";var n=r(4),o=r(12),c=r(34),l=r(10),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!d(t,(function(t,n){if(!1===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},614:function(t,e,r){"use strict";var n=r(4),o=r(6),c=r(10),l=r(26),d=r(442),f=r(33),v=o([].join),h=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=d(e),n=void 0===t?",":l(t),o=[];return f(r,h,{that:o,IS_ITERATOR:!0}),v(o,n)}})},615:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(36),l=r(12),d=r(34),f=r(10),v=r(81),h=r(442),m=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=f(this),r=h(e),n=c(t,arguments.length>1?arguments[1]:void 0),y=new(v(e,o("Set"))),x=d(y.add);return m(r,(function(t){l(x,y,n(t,t,e))}),{IS_ITERATOR:!0}),y}})},616:function(t,e,r){"use strict";var n=r(4),o=r(2),c=r(34),l=r(10),d=r(442),f=r(33),v=o.TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=l(this),r=d(e),n=arguments.length<2,o=n?void 0:arguments[1];if(c(t),f(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw v("Reduce of empty set with no initial value");return o}})},617:function(t,e,r){"use strict";var n=r(4),o=r(10),c=r(36),l=r(442),d=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},618:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(12),l=r(34),d=r(10),f=r(81),v=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=d(this),r=new(f(e,o("Set")))(e),n=l(r.delete),h=l(r.add);return v(t,(function(t){c(n,r,t)||c(h,r,t)})),r}})},619:function(t,e,r){"use strict";var n=r(4),o=r(35),c=r(34),l=r(10),d=r(81),f=r(33);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),r=new(d(e,o("Set")))(e);return f(t,c(r.add),{that:r}),r}})},620:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("61ef1aa8",content,!0,{sourceMap:!1})},623:function(t,e,r){"use strict";r(276)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(277))},624:function(t,e,r){"use strict";var n=r(12),o=r(34),c=r(10);t.exports=function(){for(var t=c(this),e=o(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},638:function(t,e,r){"use strict";r(620)},639:function(t,e,r){var n=r(60)(!1);n.push([t.i,".atr-wrapper{border-radius:5px;border:1px solid #ddd;background:#f7f7f5}.atr-wrapper .single-atr{display:flex;flex-wrap:wrap;align-items:center;border-bottom:1px solid #ddd}.atr-wrapper .single-atr label{padding:15px}.atr-wrapper .single-atr .atr-title{width:120px;max-width:120px}.atr-wrapper .single-atr:last-child{border-bottom:none}",""]),t.exports=n},646:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(27),r(28);var n=r(104),o=r(1),c=r(5),l=(r(21),r(271),r(188),r(99),r(452),r(8),r(17),r(39),r(38),r(274),r(153),r(37),r(49),r(151),r(53),r(272),r(23),r(121),r(603),r(604),r(605),r(606),r(607),r(608),r(609),r(610),r(611),r(612),r(613),r(614),r(615),r(616),r(617),r(618),r(619),r(149)),d=r(436),f=r(11),v=r(80),h=r(439);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"ProductInventory",data:function(){return{inventoryOpen:!1,result:[],selectedAttributes:[],selectedAttributeValues:[],selected:{},combinations:[],formSubmitting:!1,redirect:!1,existing:{}}},props:{attributes:{type:Array,default:[]},productPrice:{type:Number,default:0}},mixins:[v.a,h.a],components:{AjaxButton:l.default,ErrorFormatter:d.default},computed:y({currencyIcon:function(){var t;return(null===(t=this.setting)||void 0===t?void 0:t.currency_icon)||"$"},productId:function(){return this.$route.params.id}},Object(f.c)("setting",["setting"])),methods:y({imageDelete:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(o=r.combinations[t]).images.splice(e,1),(c=r.combinations)[t]=y(y({},c[t]),o),r.combinations=[],setTimeout((function(){r.combinations=c}),10);case 6:case"end":return n.stop()}}),n)})))()},fileClicked:function(t){var e,r;this.$refs[t]&&null!==(e=this.$refs[t])&&void 0!==e&&e.length&&(null===(r=this.$refs[t][0])||void 0===r||r.click())},fileChanged:function(t,e){var r,n,o=this,c=this.combinations[t];null===(r=Object.values(null==e||null===(n=e.target)||void 0===n?void 0:n.files))||void 0===r||r.forEach((function(i,t){var r,n;o.isValidImage(i)||(null!==(r=c)&&void 0!==r&&r.images||(c=y(y({},c),{images:[]})),c.images.push({blob:URL.createObjectURL(i),file:null==e||null===(n=e.target)||void 0===n?void 0:n.files[t]}))}));var l=this.combinations;l[t]=y(y({},l[t]),c),this.combinations=[],setTimeout((function(){o.combinations=l}),20)},redirectingEnable:function(t){this.redirect="save"===t},fetchingData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getById({id:t.productId,params:{},api:"getInventory"});case 4:t.result=e.sent,t.loading=!1,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},saveInventory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.redirectingEnable(event.submitter.name),t.formSubmitting=!0,e.prev=2,r=new FormData,t.combinations.forEach((function(t,e){var n=function(n){var o;t.hasOwnProperty(n)&&("images"===n||"values"===n?t[n].forEach((function(t,o){for(var c in t){var l;if(t.hasOwnProperty(c))r.append("inventories[".concat(e,"][").concat(n,"][").concat(o,"][").concat(c,"]"),null!==(l=t[c])&&void 0!==l?l:"")}})):r.append("inventories[".concat(e,"][").concat(n,"]"),null!==(o=t[n])&&void 0!==o?o:""))};for(var o in t)n(o)})),e.next=7,t.setById({id:t.productId,params:r,api:"setInventory"});case 7:if(!(data=e.sent)){e.next=15;break}return t.result=data,e.next=12,t.mappingData();case 12:t.$router.push({path:"/products".concat(t.redirect?"":"/"+t.productId)}),e.next=16;break;case 15:t.$emit("has-error");case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 21:t.formSubmitting=!1;case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))()},renderLabel:function(t){return t.map((function(i){return i.title})).join(" + ")},combos:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r===t.length){var l={id:"",sku:"",price:this.productPrice,quantity:0},d=c.map((function(t){return t.id})).join("-");void 0!==this.existing[d]&&(l={id:this.existing[d].id,sku:this.existing[d].sku,price:this.existing[d].price,quantity:this.existing[d].quantity}),o.push(y(y({},l),{values:c}))}else t[r].forEach((function(l){return e.combos(t,r+1,o,[].concat(Object(n.a)(c),[l]))}));return o},attributeValueChanged:function(t,e){var r,n,o;if(e.target.checked)-1===(null===(r=this.selectedAttributes)||void 0===r?void 0:r.findIndex((function(i){return i===(null==t?void 0:t.attribute_id)})))&&(this.selectedAttributes.push(t.attribute_id),this.selected=y(y({},this.selected),Object(c.a)({},t.attribute_id,[]))),-1===(null===(n=this.selected[t.attribute_id])||void 0===n?void 0:n.findIndex((function(i){return i===t.id})))&&this.selected[t.attribute_id].push(t);else if(this.selected[t.attribute_id]=this.selected[null==t?void 0:t.attribute_id].filter((function(i){return i.id!==t.id})),null===(o=this.selected[t.attribute_id])||void 0===o||!o.length){delete this.selected[t.attribute_id];var l=this.selectedAttributes.findIndex((function(i){return t.attribute_id===i}));this.selectedAttributes.splice(l,1)}this.combinations=this.combos(Object.values(this.selected))},attributeChanged:function(t,e){if(e.target.checked){var r,o=null===(r=this.attributes.find((function(i){return i.id===t.id})))||void 0===r?void 0:r.values;this.selected=y(y({},this.selected),Object(c.a)({},t.id,o));var l=null==o?void 0:o.map((function(i){return i.id}));this.selectedAttributeValues=Object(n.a)(new Set(this.selectedAttributeValues.concat(l)))}else{var d,f=null===(d=this.selected[t.id])||void 0===d?void 0:d.map((function(i){return i.id}));delete this.selected[t.id],this.selectedAttributeValues=this.selectedAttributeValues.filter((function(t){return-1===f.indexOf(t)}))}this.combinations=this.combos(Object.values(this.selected))},mappingData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.result||null===(r=t.result)||void 0===r||!r.length){e.next=11;break}return t.selected={},t.combinations=[],l=[],d=[],e.next=7,null===(o=Object.values(t.result))||void 0===o?void 0:o.forEach((function(i){var e=[];i.inventory_attributes.forEach((function(r){l.push(r.attribute_value.attribute_id),d.push(r.attribute_value.id),e.push(r.attribute_value),void 0===t.selected[r.attribute_value.attribute_id]&&(t.selected=y(y({},t.selected),Object(c.a)({},r.attribute_value.attribute_id,[]))),-1===t.selected[r.attribute_value.attribute_id].findIndex((function(i){return r.attribute_value.id===i.id}))&&t.selected[r.attribute_value.attribute_id].push(r.attribute_value)})),t.existing[e.map((function(t){return t.id})).join("-")]={id:i.id,price:parseFloat(i.price)>0?i.price:t.productPrice,sku:i.sku,quantity:i.quantity},t.combinations.push({id:i.id,sku:i.sku,price:parseFloat(i.price)>0?i.price:t.productPrice,quantity:i.quantity,values:e})}));case 7:t.selectedAttributes=Object(n.a)(new Set(l)),t.selectedAttributeValues=Object(n.a)(new Set(d)),e.next=12;break;case 11:t.combinations=[{price:t.productPrice,quantity:0,sku:"",images:[],values:[]}];case 12:case"end":return e.stop()}}),e)})))()}},Object(f.b)("common",["getById","setById"])),beforeCreate:function(){},destroyed:function(){},created:function(){},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:return e.next=4,t.mappingData();case 4:case"end":return e.stop()}}),e)})))()}},_=x,w=(r(638),r(16)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"dply-felx gap-15 title ptb-5 b-0"},[r("h4",{},[t._v(t._s(t.$t("prod.pInv")))]),t._v(" "),r("button",{staticClass:"btn-clear dply-felx",on:{click:function(e){e.preventDefault(),t.inventoryOpen=!t.inventoryOpen}}},[r("i",{staticClass:"icon black ignore-click",class:[{"arrow-up":t.inventoryOpen},{"arrow-down":!t.inventoryOpen}]})])]),t._v(" "),t.inventoryOpen?r("div",{staticClass:"form-wrapper attr-inventory b-t"},[r("error-formatter",{attrs:{type:"inventory"}}),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.saveInventory.apply(null,arguments)}}},[t.attributes&&t.attributes.length?r("div",{staticClass:"mb-20 mb-sm-15 atr-wrapper"},t._l(t.attributes,(function(e,n){return r("div",{key:n,staticClass:"single-atr"},[e.values.length?[r("label",{staticClass:"cb atr-title f-1-2 bold"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributes,expression:"selectedAttributes"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedAttributes)?t._i(t.selectedAttributes,e.id)>-1:t.selectedAttributes},on:{change:[function(r){var n=t.selectedAttributes,o=r.target,c=!!o.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);o.checked?d<0&&(t.selectedAttributes=n.concat([l])):d>-1&&(t.selectedAttributes=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributes=c},function(r){return t.attributeChanged(e,r)}]}}),t._v(" "),r("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(e.values,(function(e,i){return r("label",{key:i,staticClass:"cb"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedAttributeValues,expression:"selectedAttributeValues"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedAttributeValues)?t._i(t.selectedAttributeValues,e.id)>-1:t.selectedAttributeValues},on:{change:[function(r){var n=t.selectedAttributeValues,o=r.target,c=!!o.checked;if(Array.isArray(n)){var l=e.id,d=t._i(n,l);o.checked?d<0&&(t.selectedAttributeValues=n.concat([l])):d>-1&&(t.selectedAttributeValues=n.slice(0,d).concat(n.slice(d+1)))}else t.selectedAttributeValues=c},function(r){return t.attributeValueChanged(e,r)}]}}),t._v(" "),r("span",[t._v(t._s(e.title))])])}))]:t._e()],2)})),0):t._e(),t._v(" "),r("div",{staticClass:"inventory-wrap mb-20 mb-sm-15"},[r("div",{staticClass:"mn-w-400x dply-felx f-column gap-15 "},[r("div",{staticClass:"tr dply-felx gap-10 "},[r("span",{staticClass:"title"},[t._v(t._s(t.$t("list.attr")))]),t._v(" "),r("div",{staticClass:"right dply-felx gap-10 f-wrap"},[r("div",{staticClass:"inputs dply-felx gap-10 f-wrap"},[r("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("title.sku")))]),t._v(" "),r("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("brand.price"))+"("+t._s(t.currencyIcon)+")")]),t._v(" "),r("span",{staticClass:"w-120x"},[t._v(t._s(t.$t("fSale.qty")))]),t._v(" "),r("span",{staticClass:"w-120x"})])])]),t._v(" "),t._l(t.combinations,(function(e,n){return r("div",{key:n,staticClass:"tr dply-felx gap-10"},[e.values.length?r("h5",{staticClass:"title"},[t._v(t._s(t.renderLabel(e.values)))]):r("h5",{staticClass:"title"},[t._v(t._s(t.$t("list.aq")))]),t._v(" "),r("div",{staticClass:"right dply-felx gap-10"},[r("div",{staticClass:"inputs dply-felx gap-10 f-wrap"},[r("div",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sku,expression:"item.sku"}],attrs:{type:"text",placeholder:t.$t("title.sku")},domProps:{value:e.sku},on:{input:function(r){r.target.composing||t.$set(e,"sku",r.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{disabled:!e.values.length,type:"number",step:"any",placeholder:t.$t("brand.price")},domProps:{value:e.price},on:{input:function(r){r.target.composing||t.$set(e,"price",r.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-120x"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],attrs:{type:"number",step:"any",placeholder:t.$t("fSale.qty")},domProps:{value:e.quantity},on:{input:function(r){r.target.composing||t.$set(e,"quantity",r.target.value)}}})])])])])}))],2)]),t._v(" "),t.$can("product","edit")||t.$can("product","create")?r("div",{staticClass:"dply-felx j-right"},[r("ajax-button",{staticClass:"primary-btn mr-10",attrs:{name:"save-edit",text:t.$t("list.svn"),"fetching-data":t.formSubmitting&&!t.redirect}}),t._v(" "),r("ajax-button",{staticClass:"primary-btn",attrs:{name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting&&t.redirect}})],1):t._e()])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default,AjaxButton:r(149).default})}}]);