(window.webpackJsonp=window.webpackJsonp||[]).push([[98,15,39,49,55,56,60,67,75],{466:function(t,e,r){"use strict";r(19),r(17),r(22),r(26),r(27);var n=r(9),o=(r(6),r(18),r(203),r(23),r(54),r(7));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("common",["customScripts"])),mounted:function(){var t=this;this.customScripts.forEach((function(i){var e=new RegExp(null==i?void 0:i.route_pattern),r=t.$route.path;if(e.test(r)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var n=document.createElement("script");n.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(n)}}}))}}},467:function(t,e,r){"use strict";var n=r(0);r(12),r(102),r(472),r(474);e.a={data:function(){return{ajaxingWishlist:!1,priceType:{flat:1,percent:2}}},computed:{},methods:{wishListAction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=t.$auth)&&void 0!==r&&r.loggedIn){e.next=3;break}return t.$auth.redirect("login"),e.abrupt("return");case 3:return t.ajaxingWishlist=!0,e.next=6,t.userWishlistAction({product_id:t.product.id});case 6:data=e.sent,t.ajaxingWishlist=!1,200===(null==data?void 0:data.status)?t.setToastMessage(data.message):t.setToastError(data.data.form.join(", "));case 9:case"end":return e.stop()}}),e)})))()},refundable:function(t){return 1===parseInt(null==t?void 0:t.refundable)},warranty:function(t){return 1===parseInt(null==t?void 0:t.warranty)?this.$t("productHelper.available"):this.$t("productHelper.notAvailable")},getPriceType:function(t){return parseInt(t.type)===this.priceType.flat?this.priceFormat(this.currencyPosition,this.currencyIcon,t.price,this.setting):t.price+"%"}}}},468:function(t,e,r){"use strict";r.r(e);r(202);var n={name:"RatingStar",props:{rating:{type:Number,default:5}},data:function(){return{}},mixins:[],computed:{ratingPercent:function(){return{width:"".concat(parseInt(this.rating/5*100),"%")}}},mounted:function(){},methods:{}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"rating-stars",attrs:{title:t.$t("ratingStar.outOf",{rating:t.rating})}},[e("span",[t._v("☆☆☆☆☆")]),t._v(" "),e("span",{staticClass:"rating",style:t.ratingPercent},[t._v("★★★★★")])])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,r){"use strict";r.r(e);r(36),r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(9);r(202),r(23),r(82);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"Pagination",data:function(){return{sortByType:this.$route.query.orderByType||"desc",sortBy:this.$route.query.orderBy||"created_at",currentPage:Number(this.$route.query.page)||this.page,search:this.$route.query.q||null}},props:{changingRoute:{type:Boolean,default:!0},page:{type:Number,default:1},totalPage:{type:Number},pagePer:{type:Number,default:5}},watch:{},directives:{},components:{},mixins:[],computed:{getActivePages:function(){var t=this.getPage+(this.pagePer-1);t%this.pagePer!=0&&(t=parseInt(t/this.pagePer)*this.pagePer);var e=t-(this.pagePer-1);return t>=this.totalPage&&(t=this.totalPage),[e-1,t]},getPage:function(){return this.currentPage},allPages:function(){for(var t=[],i=1;i<=this.totalPage;i++)t.push(i);return t}},methods:{routeParam:function(){this.isDefaultPage()?this.resettingRoute():(this.clearQuery(),this.$emit("fetching-data")),this.scrollToTop()},resettingRoute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.clearQuery(),this.$router.push({query:c(c({},t),{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.search})}),this.$emit("fetching-data")},clearQuery:function(){this.orderByType="desc",this.orderBy="created_at",this.currentPage=1},isDefaultPage:function(){return"desc"===this.orderByType&&"created_at"===this.orderBy&&1===this.currentPage},settingRoute:function(){this.$router.push({query:c(c({},this.$route.query),{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.search})})},dropdownSelected:function(t,data){this.currentPage=1,t?this.orderByType=data.key:this.orderBy=data.key,this.getDataWithRoute()},scrollToTop:function(){window.scrollTo(0,0)},getDataFromRoute:function(){this.sortByType=this.$route.query.orderByType||"desc",this.sortBy=this.$route.query.orderBy||"created_at",this.currentPage=Number(this.$route.query.page)||1,this.search=this.$route.query.q||null,this.$emit("fetching-data")},getDataWithRoute:function(){this.changingRoute&&(this.settingRoute(),this.scrollToTop()),this.$emit("fetching-data",{orderBy:this.orderBy,orderByType:this.orderByType,page:this.currentPage,q:this.q})},navigate:function(param){param>0&&this.currentPage>=this.totalPage||param<0&&this.currentPage<=1||(this.currentPage+=param,this.getDataWithRoute())},paginate:function(t){this.currentPage!==t&&(this.currentPage=t,this.getDataWithRoute())},loadData:function(){this.getDataFromRoute()}},destroyed:function(){window.removeEventListener("popstate",this.loadData)},mounted:function(){window.addEventListener("popstate",this.loadData)}},d=l,f=r(11),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.totalPage>1?e("ul",{staticClass:"pagination"},[e("li",{class:{disabled:1===t.currentPage},on:{click:function(e){return e.preventDefault(),t.navigate(-1)}}},[e("i",{staticClass:"icon arrow-left black"})]),t._v(" "),t._l(t.allPages.slice(t.getActivePages[0],t.getActivePages[1]),(function(r,n){return e("li",{key:n,staticClass:"page",class:{disabled:t.currentPage===r},on:{click:function(e){return e.preventDefault(),t.paginate(r)}}},[e("span",[t._v("\n      "+t._s(r)+"\n    ")])])})),t._v(" "),e("li",{class:{disabled:t.currentPage===t.totalPage},on:{click:function(e){return e.preventDefault(),t.navigate(1)}}},[e("i",{staticClass:"icon arrow-right black"})])],2):t._e()}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";r.r(e);var n={name:"TileShimmer",data:function(){return{}},watch:{},props:{},components:{},computed:{},mixins:[],methods:{},created:function(){},mounted:function(){}},o=r(11),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-tile"},[e("div",{staticClass:"img-wrapper pb-100p"},[e("div",{staticClass:"shimmer"})]),t._v(" "),e("div",{staticClass:"h-24x shimmer mtb-10"}),t._v(" "),e("div",{staticClass:"h-24x w-70 shimmer"})])}],!1,null,null,null);e.default=component.exports},472:function(t,e,r){"use strict";var n=r(4),o=r(473),c=r(51),l=r(62),d=r(72),f=r(158);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),n=f(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:d(t)),n}})},473:function(t,e,r){"use strict";var n=r(103),o=r(62),c=r(205),l=r(40),d=function(t,e,source,r,f,h,m,v){for(var element,y,O=f,w=0,P=!!m&&l(m,v);w<r;)w in source&&(element=P?P(source[w],w,e):source[w],h>0&&n(element)?(y=o(element),O=d(t,e,element,y,O,h-1)-1):(c(O+1),t[O]=element),O++),w++;return O};t.exports=d},474:function(t,e,r){r(123)("flat")},475:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(9),o=(r(202),r(61)),c=r(24),l=r(204),d=r(467),f=r(206),h=r(7),m=r(156),v=r(468);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"ProductTile",props:{product:{type:Object,default:function(){return null}},isLazyImage:{type:Boolean,default:!0},compared:{type:Boolean,default:!1},titleEllipsis:{type:Number,default:2}},data:function(){return{ajaxingCompare:!1}},components:{RatingStar:v.default,PriceFormat:m.default,LazyImage:o.default},mixins:[c.a,d.a,l.a,f.a],computed:O({badge:function(){var t;return null===(t=this.product)||void 0===t?void 0:t.badge}},Object(h.c)("common",["currencyIcon","setting"])),mounted:function(){},methods:O({},Object(h.b)("common",["postRequest","setToastMessage","setToastError"]))},P=r(11),component=Object(P.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-tile"},[e("nuxt-link",{staticClass:"page-link",attrs:{title:t.product.title,to:t.productLink(t.product)}},[e("span",{staticClass:"block img-wrapper"},[t.badge?e("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.badge)+"\n      ")]):t._e(),t._v(" "),t._t("floating-btn",(function(){return[e("button",{staticClass:"compare-btn",attrs:{"aria-label":"submit",title:t.$t("product.compare")},on:{click:function(e){return e.preventDefault(),t.addToCompare.apply(null,arguments)}}},[e("i",{staticClass:"icon reload-icon"})])]})),t._v(" "),t.isLazyImage?e("lazy-image",{attrs:{"data-src":t.thumbImageURL(t.product),title:t.product.title,alt:t.product.title}}):e("img",{attrs:{src:t.thumbImageURL(t.product),title:t.product.title,alt:t.product.title,height:"50",width:"50"}})],2),t._v(" "),e("div",{staticClass:"item-title"},[e("h5",{staticClass:"ellipsis",class:"ellipsis-".concat(t.titleEllipsis)},[t._v("\n        "+t._s(t.product.title)+"\n      ")]),t._v(" "),e("span",{staticClass:"block mtb-5"},[e("rating-star",{attrs:{rating:parseFloat(t.product.rating)}}),t._v(" "),e("span",{staticClass:"f-10 ml-5 semi-bold color-lite"},[t._v("\n          "+t._s(t.$t("productReview.reviews",{count:t.product.review_count})))])],1),t._v(" "),e("span",{staticClass:"flex wrap start"},[e("h4",{staticClass:"price-wrapper"},[t.prevPrice?e("span",{staticClass:"strike-through"},[e("price-format",{attrs:{price:t.prevPrice}})],1):t._e(),t._v(" "),e("span",{staticClass:"price"},[e("price-format",{attrs:{price:t.currentPricing}})],1)]),t._v(" "),t.reducedPercent?e("span",{staticClass:"discount ml-10"},[t._v("\n          -"+t._s(t.reducedPercent)+"%")]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:r(61).default,RatingStar:r(468).default,PriceFormat:r(156).default})},476:function(t,e,r){"use strict";r(202),r(23),r(82);e.a={data:function(){return{orderByType:"",orderBy:"",page:0,search:null}},methods:{settingParam:function(data){this.orderByType=(null==data?void 0:data.orderByType)||"desc",this.orderBy=(null==data?void 0:data.orderBy)||"created_at",this.page=Number(null==data?void 0:data.page)||1,this.search=(null==data?void 0:data.q)||null},settingRouteParam:function(){this.orderByType=this.$route.query.orderByType||"desc",this.orderBy=this.$route.query.orderBy||"created_at",this.page=Number(this.$route.query.page)||1,this.search=this.$route.query.q||null}}}},478:function(t,e,r){"use strict";r.r(e);r(295);var n={name:"Breadcrumb",data:function(){return{}},props:{page:{type:String,required:!0},slugs:{type:Array,default:function(){return[]}}},computed:{},mounted:function(){},destroyed:function(){}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb",attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("nuxt-link",{attrs:{to:"/",itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("product.home")))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),t._l(t.slugs,(function(r,i){return e("li",{key:i,attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("nuxt-link",{attrs:{title:r.title,to:r.link,itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(r.title))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:i+2}})],1)})),t._v(" "),e("li",{staticClass:"breadcrumb-item",attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.page))]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:t.slugs.length+2}})])],2)])}),[],!1,null,null,null);e.default=component.exports},480:function(t,e,r){"use strict";e.a={computed:{pageData:function(){return this.$route.query.page||""},sortByData:function(){return this.$route.query.sortby||""},searchedKeyword:function(){return this.$route.query.q||""},ratingFromRoute:function(){return this.$route.query.rating||0},brandFromRoute:function(){return this.$route.query.brand||""},collectionFromRoute:function(){return this.$route.query.collection||""},shippingFromRoute:function(){return this.$route.query.shipping||""},minPriceFromRoute:function(){var t,e,r,n;return isNaN(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.min)?0:(null===(r=this.$route)||void 0===r||null===(n=r.query)||void 0===n?void 0:n.min)||0},maxPriceFromRoute:function(){var t,e,r,n;return isNaN(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.max)?0:(null===(r=this.$route)||void 0===r||null===(n=r.query)||void 0===n?void 0:n.max)||0}}}},488:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(12),r(7));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"FollowBtn",data:function(){return{ajaxing:!1}},components:{AjaxButton:r(293).default},props:{color:{type:String,default:""},storeId:{required:!0},following:{type:Boolean,default:!1}},mixins:[],computed:{followingText:function(){return this.following?this.$t("store.following"):this.$t("store.follow")}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({followStore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=t.$auth)&&void 0!==r&&r.loggedIn){e.next=3;break}return t.$auth.redirect("login"),e.abrupt("return");case 3:return e.prev=3,t.ajaxing=!0,e.next=7,t.postRequest({params:{store_id:t.storeId},api:"followStore",requiredToken:!0});case 7:data=e.sent,t.ajaxing=!1,200===data.status&&t.$emit("change-following"),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",t.$nuxt.error(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))()}},Object(c.b)("common",["postRequest"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},f=d,h=r(11),component=Object(h.a)(f,(function(){var t=this;return(0,t._self._c)("ajax-button",{class:{following:t.following},attrs:{type:"button",color:t.color,"loading-text":"","fetching-data":t.ajaxing,text:t.followingText},on:{clicked:t.followStore}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AjaxButton:r(293).default})},543:function(t,e,r){"use strict";r.r(e);r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(12),r(24)),l=r(476),d=r(159);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"SortBy",data:function(){return{filterPopup:!0,sortingOptions:{featured:{title:this.$t("featured.featured")},price_low_to_high:{title:this.$t("listingLayout.priceLowToHigh")},price_high_to_low:{title:this.$t("listingLayout.priceHighToLow")},avg_customer_review:{title:this.$t("listingLayout.avgCustomerReview")}},sortby:this.$route.query.sortby||""}},mixins:[c.a,l.a],watch:{},props:{},components:{Dropdown:d.default},computed:{filteredCount:function(){var t=0;return this.shippingFromRoute&&t++,this.ratingFromRoute&&t++,this.minPriceFromRoute&&t++,this.maxPriceFromRoute&&t++,t},isXsDevice:function(){return window.innerWidth<=576}},methods:{openFilter:function(){this.filterPopup=!0,document.body.classList.add("no-scroll")},closeFilter:function(){this.filterPopup=!1,document.body.classList.remove("no-scroll")},selectedSorting:function(data){if(this.sortby){var t=Object.assign({},this.$route.query);t=h(h({},t),{sortby:data.key}),this.$emit("fetching-data",t)}this.sortby=data.key},clearSortby:function(){this.sortby="featured"}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isXsDevice&&(t.filterPopup=!1);case 1:case"end":return e.stop()}}),e)})))()}},v=r(11),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-10"},[e("span",{staticClass:"hide-sm"},[t._v("\n    "+t._s(t.$t("listingLayout.sortBy"))+"\n  ")]),t._v(" "),e("client-only",[e("dropdown",{staticClass:"sort-dropdown",attrs:{options:t.sortingOptions,"selected-key":t.sortby},on:{clicked:t.selectedSorting}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:r(159).default})},583:function(t,e,r){"use strict";r.r(e);r(33),r(19),r(17),r(22),r(6),r(26),r(18),r(27);var n=r(0),o=r(9),c=(r(81),r(12),r(7)),l=r(24),d=r(125),f=r(469),h=r(478),m=r(471),v=r(293),y=r(480),O=r(160),w=r.n(O),P=r(543),_=r(475),j=r(488),C=r(466);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={middleware:["common-middleware"],data:function(){return{result:null,fetchingProductData:!1}},components:{FollowBtn:j.default,ProductTile:_.default,SortBy:P.default,AjaxButton:v.default,TileShimmer:m.default,Breadcrumb:h.default,Pagination:f.default},head:function(){var t,e,r,n;return{title:null===(t=this.store)||void 0===t?void 0:t.meta_title,meta:[this.generatingMeta("description",null===(e=this.store)||void 0===e?void 0:e.meta_description),this.generatingMeta("og:image",this.imageURL(this.store)),this.generatingMeta("og:title",null===(r=this.store)||void 0===r?void 0:r.meta_title),this.generatingMeta("og:description",null===(n=this.store)||void 0===n?void 0:n.meta_description)]}},mixins:[l.a,d.a,y.a,C.a],computed:$({storeId:function(){var t;return null===(t=this.store)||void 0===t?void 0:t.id},storeDate:function(){var t,e;return w()(null===(t=this.product)||void 0===t||null===(e=t.store)||void 0===e?void 0:e.created_at).format("MMM DD, YYYY")},currentItems:function(){var t;return(null===(t=this.products)||void 0===t?void 0:t.data)||null},totalPage:function(){var t;return null===(t=this.products)||void 0===t?void 0:t.last_page}},Object(c.c)("language",["langCode"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,f,h,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.error,o=t.route,c=t.i18n,e.prev=1,e.next=4,r.dispatch("common/ssrGetRequest",{params:{slug:null==o||null===(l=o.params)||void 0===l?void 0:l.slug,sortby:o.query.sortby||"",page:o.query.page||"",required_rating:!0},api:"store",lang:r.state.language.langCode,requiredToken:!0});case 4:if(200===(null==(data=e.sent)?void 0:data.status)){e.next=7;break}return e.abrupt("return",n({statusCode:404,message:c.t("categoryListingLayout.noItemFound")}));case 7:return e.abrupt("return",{review:null==data||null===(d=data.data)||void 0===d?void 0:d.review,following:null==data||null===(f=data.data)||void 0===f?void 0:f.following,products:null==data||null===(h=data.data)||void 0===h?void 0:h.result,store:null==data||null===(m=data.data)||void 0===m?void 0:m.store});case 10:e.prev=10,e.t0=e.catch(1),n(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},methods:$({shortByChanged:function(t){var e;null===(e=this.$refs.productPagination)||void 0===e||e.resettingRoute(t)},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchingProductData=!0,r=t,e.prev=2,setTimeout(Object(n.a)(regeneratorRuntime.mark((function e(){var n,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest({params:{slug:null===(n=t.$route)||void 0===n||null===(o=n.params)||void 0===o?void 0:o.slug,sortby:t.sortByData,page:t.pageData},api:"store",lang:t.langCode});case 2:data=e.sent,r.products=null==data||null===(c=data.data)||void 0===c?void 0:c.result,r.fetchingProductData=!1;case 5:case"end":return e.stop()}}),e)}))),100),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 9:case"end":return e.stop()}}),e,null,[[2,6]])})))()}},Object(c.b)("common",["ssrGetRequest","getRequest","postRequest"])),mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},B=r(11),component=Object(B.a)(R,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"store-container mb-30 mb-sm-15"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"store-info"},[e("div",{staticClass:"left-area"},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:t.imageURL(t.store),alt:t.$t("footer.siteLogo"),height:"50",width:"50"}})]),t._v(" "),e("div",{staticClass:"store-content"},[e("div",[e("h4",{staticClass:"bold mb-5"},[t._v(t._s(t.store.name))]),t._v(" "),e("h6",{staticClass:"store-rating ls-0"},[t._v(t._s(t.$t("store.avgRating"))+" "),e("b",{staticClass:"f-12 ml-5"},[t._v(t._s(t.formatPrice(t.review)))])])]),t._v(" "),e("div",[e("p",{staticClass:"opacity-8 f-9"},[t._v(t._s(t.$t("store.memberSince")))]),t._v(" "),e("h6",{},[e("b",[t._v(t._s(t.storeDate))])])])])]),t._v(" "),e("div",{staticClass:"right-area"},[e("follow-btn",{staticClass:"primary-btn w-150x",attrs:{following:t.following,"store-id":t.storeId},on:{"change-following":function(e){t.following=!t.following}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid mb-50 mb-sm-20"},[e("div",{staticClass:"flex sided mb-15"},[e("breadcrumb",{staticClass:"mtb-0",attrs:{page:t.store.name}}),t._v(" "),e("sort-by",{on:{"fetching-data":t.shortByChanged}})],1),t._v(" "),e("div",{staticClass:"main-content"},[t.fetchingProductData?e("div",{staticClass:"tile-container"},[e("div",{staticClass:"shimmer-wrapper"},t._l(20,(function(t){return e("tile-shimmer",{key:t})})),1)]):e("div",{staticClass:"pos-rel"},[t.currentItems&&!t.currentItems.length?e("div",{staticClass:"info-msg"},[t._v("\n          "+t._s(t.$t("listingLayout.noProductFound"))+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"tile-container"},t._l(t.currentItems,(function(t,r){return e("product-tile",{key:r,attrs:{product:t}})})),1),t._v(" "),e("div",{staticClass:"flow-hidden"},[e("pagination",{ref:"productPagination",staticClass:"mt-30",attrs:{"total-page":t.totalPage},on:{"fetching-data":t.fetchingData}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FollowBtn:r(488).default,Breadcrumb:r(478).default,SortBy:r(543).default,TileShimmer:r(471).default,ProductTile:r(475).default,Pagination:r(469).default})}}]);