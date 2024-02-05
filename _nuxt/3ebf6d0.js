(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{466:function(t,e,r){"use strict";r(19),r(17),r(22),r(26),r(27);var n=r(9),o=(r(6),r(18),r(203),r(23),r(54),r(7));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("common",["customScripts"])),mounted:function(){var t=this;this.customScripts.forEach((function(i){var e=new RegExp(null==i?void 0:i.route_pattern),r=t.$route.path;if(e.test(r)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var n=document.createElement("script");n.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(n)}}}))}}},480:function(t,e,r){"use strict";e.a={computed:{pageData:function(){return this.$route.query.page||""},sortByData:function(){return this.$route.query.sortby||""},searchedKeyword:function(){return this.$route.query.q||""},ratingFromRoute:function(){return this.$route.query.rating||0},brandFromRoute:function(){return this.$route.query.brand||""},collectionFromRoute:function(){return this.$route.query.collection||""},shippingFromRoute:function(){return this.$route.query.shipping||""},minPriceFromRoute:function(){var t,e,r,n;return isNaN(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.min)?0:(null===(r=this.$route)||void 0===r||null===(n=r.query)||void 0===n?void 0:n.min)||0},maxPriceFromRoute:function(){var t,e,r,n;return isNaN(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.max)?0:(null===(r=this.$route)||void 0===r||null===(n=r.query)||void 0===n?void 0:n.max)||0}}}},584:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(81),r(12),r(125)),l=r(486),d=r(24),m=r(480),f=r(7),y=r(466);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={middleware:["common-middleware"],data:function(){return{fetchingResult:!1,subCategory:null}},components:{ProductList:l.default},head:function(){var t,e,r,n;return{productList:null,title:null===(t=this.subCategory)||void 0===t?void 0:t.meta_title,meta:[this.generatingMeta("description",null===(e=this.subCategory)||void 0===e?void 0:e.meta_description),this.generatingMeta("og:image",this.imageURL(this.subCategory)),this.generatingMeta("og:title",null===(r=this.subCategory)||void 0===r?void 0:r.meta_title),this.generatingMeta("og:description",null===(n=this.subCategory)||void 0===n?void 0:n.meta_description)]}},mixins:[d.a,c.a,m.a,y.a],computed:h({currentItems:function(){var t;return(null===(t=this.products)||void 0===t?void 0:t.data)||null},subCategoryTitle:function(){var t;return null===(t=this.subCategory)||void 0===t?void 0:t.title},currentCategory:function(){var t;return null===(t=this.subCategory)||void 0===t?void 0:t.category},slug:function(){var t;return[{title:null===(t=this.currentCategory)||void 0===t?void 0:t.title,link:this.categoryLink(this.currentCategory)}]}},Object(f.c)("listing",["brands","shippingRules","collections","products"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.error,o=t.route,e.prev=1,m=r.state.listing,e.next=5,r.dispatch("common/getRequest",{params:{sub_category:null==o||null===(c=o.params)||void 0===c?void 0:c.subCategory,sortby:o.query.sortby||"",shipping:o.query.shipping||"",brand:o.query.brand||"",collection:o.query.collection||"",rating:o.query.rating||0,max:(null==o||null===(l=o.query)||void 0===l?void 0:l.max)||0,min:(null==o||null===(d=o.query)||void 0===d?void 0:d.min)||0,page:o.query.page||"",sidebar_data:!m.brands||!m.shippingRules||!m.collections},api:"all",lang:r.state.language.langCode});case 5:if(200===(null==(data=e.sent)?void 0:data.status)){e.next=8;break}return e.abrupt("return",n({statusCode:404,message:i18n.t("categoryListingLayout.noItemFound")}));case 8:return r.commit("listing/SET_PRODUCTS",data),e.abrupt("return",{subCategory:data.data.sub_category});case 12:e.prev=12,e.t0=e.catch(1),n(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},methods:h(h({fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchingResult=!0,t.emptyProducts(),e.prev=2,setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest({params:{sub_category:null===(r=t.$route)||void 0===r||null===(n=r.params)||void 0===n?void 0:n.subCategory,sortby:t.sortByData,shipping:t.shippingFromRoute,brand:t.brandFromRoute,collection:t.collectionFromRoute,rating:t.ratingFromRoute,max:t.maxPriceFromRoute,min:t.minPriceFromRoute,page:t.pageData,sidebar_data:!t.brands||!t.shippingRules||!t.collections},api:"all"});case 2:data=e.sent,t.fetchingResult=!1,t.setProducts(data);case 5:case"end":return e.stop()}}),e)}))),100),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 9:case"end":return e.stop()}}),e,null,[[2,6]])})))()}},Object(f.b)("listing",["emptyProducts","setProducts"])),Object(f.b)("common",["getRequest"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},j=r(11),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("product-list",{attrs:{"result-title":t.subCategoryTitle,slugs:t.slug,"has-breadcrumb":!0,"fetching-product-data":t.fetchingResult},on:{"fetch-data":t.fetchingData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductList:r(486).default})}}]);