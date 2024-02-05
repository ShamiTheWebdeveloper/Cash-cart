/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[80,14,17,21,23,24],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},d=c,f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},437:function(t,e,r){"use strict";r.r(e);var n=r(438),o=r.n(n),l=r(80),c={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[l.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=r(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(o),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,c),i=d.root,f=d.rootMargin,m=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:m}));for(var v,h=n(l,i),b=0;b<h.length;b++)(v=h[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(l,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},712:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(11)),c=r(149),d=r(150),f=r(436);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"FooterLink",data:function(){return{formSubmitting:!1}},props:{result:{type:Object,default:function(){return{about_links:[],service_links:[]}}}},mixins:[],components:{ErrorFormatter:f.default,Dropdown:d.default,AjaxButton:c.default},computed:v({},Object(l.c)("common",["allPages"])),methods:v({saveFooterLinks:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.formSubmitting=!0,e.prev=1,e.next=4,t.setRequest({params:t.result,api:"setFooterLink"});case 4:(data=e.sent)&&t.$emit("result",data),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 11:t.formSubmitting=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},removeItem:function(source,t){var e,r=t.index,n=!0;null!==(e=this.result[source][r])&&void 0!==e&&e.deleted&&(n=!1),this.$emit("remove-item",{source:source,index:r,deleted:n})},updateItem:function(source,t){var e=t.index,r=t.value;this.$emit("update-item",{source:source,index:e,value:r})},addItem:function(source){this.$emit("add-item",{source:source})}},Object(l.b)("common",["setRequest"])),mounted:function(){}},_=r(16),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("error-formatter"),t._v(" "),r("p",{staticClass:"info-msg mb-15 mb-sm-15"},[t._v("\n    "+t._s(t.$t("setting.linkMsg"))+"\n  ")]),t._v(" "),r("div",{staticClass:"dply-felx align-start f-wrap"},[r("div",[r("h4",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("setting.servLink"))+"\n      ")]),t._v(" "),t.$can("footer_link","create")?r("button",{staticClass:"lite-btn mb-15",on:{click:function(e){return e.preventDefault(),t.addItem("service_links")}}},[t._v("\n        "+t._s(t.$t("setting.addLink"))+"\n      ")]):t._e(),t._v(" "),t._l(t.result.service_links,(function(e,n){return r("div",{key:n,staticClass:"input-wrapper dply-felx start mb-15 gap-15"},[r("dropdown",{attrs:{disabled:e.deleted,options:t.allPages,"selected-key":e.page_id},on:{clicked:function(e){return t.updateItem("service_links",{index:n,value:e})}}}),t._v(" "),t.$can("footer_link","delete")?r("button",{staticClass:"delete-btn dply-felx",on:{click:function(e){return e.preventDefault(),t.removeItem("service_links",{index:n})}}},[r("i",{staticClass:"icon",class:e.deleted?"undo-icon":"delete-icon"})]):t._e()],1)}))],2),t._v(" "),r("div",[r("h4",{staticClass:"mb-10"},[t._v("\n        "+t._s(t.$t("setting.al"))+"\n      ")]),t._v(" "),t.$can("footer_link","create")?r("button",{staticClass:"lite-btn mb-15",on:{click:function(e){return e.preventDefault(),t.addItem("about_links")}}},[t._v("\n        "+t._s(t.$t("setting.addLink"))+"\n      ")]):t._e(),t._v(" "),t._l(t.result.about_links,(function(e,n){return r("div",{key:n,staticClass:"input-wrapper dply-felx start mb-15"},[r("dropdown",{staticClass:"mr-10",attrs:{disabled:e.deleted,options:t.allPages,"selected-key":e.page_id},on:{clicked:function(e){return t.updateItem("about_links",{index:n,value:e})}}}),t._v(" "),t.$can("footer_link","delete")?r("button",{staticClass:"delete-btn dply-felx",on:{click:function(e){return e.preventDefault(),t.removeItem("about_links",{index:n})}}},[r("i",{staticClass:"icon",class:e.deleted?"undo-icon":"delete-icon"})]):t._e()],1)}))],2)]),t._v(" "),r("div",{staticClass:"dply-felx j-right"},[t.$can("footer_link","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{type:"button",name:"save",text:t.$t("setting.sv"),"fetching-data":t.formSubmitting},on:{clicked:t.saveFooterLinks}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default,Dropdown:r(150).default,AjaxButton:r(149).default})},713:function(t,e,r){"use strict";r.r(e);var n=r(80),o=r(437),l={name:"FooterImageLink",data:function(){return{deleting:!1}},props:{result:{type:Object,default:function(){return{payment_links:[],social_links:[]}}}},mixins:[n.a],components:{LazyImage:o.default},computed:{},methods:{},mounted:function(){}},c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"dply-felx"},[r("h4",[t._v(t._s(t.$t("setting.pl")))]),t._v(" "),t.$can("footer_link","create")?r("nuxt-link",{staticClass:"lite-btn button",attrs:{to:"/footer-links/add?type=1"}},[t._v("\n      "+t._s(t.$t("setting.addLink"))+"\n    ")]):t._e()],1),t._v(" "),r("div",[r("div",{staticClass:"table-wrapper mt-0 mb-15"},[t.result.payment_links.length?r("table",{staticClass:"mtb-15"},[r("tr",{staticClass:"lite-bold"},[r("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),r("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),r("th")]),t._v(" "),t._l(t.result.payment_links,(function(e,n){return r("tr",{key:n},[r("td",[r("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/footer-links/"+e.id+"?type=1/"}},[r("lazy-image",{staticClass:"mr-20 mn-w-30x w-30x",attrs:{"data-src":t.getThumbImageURL(e.image),alt:e.title}}),t._v(" "),r("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])],1)],1),t._v(" "),r("td",{staticClass:"status",class:{active:1==e.status}},[r("span",[t._v(t._s(t.getStatus(e.status)))])]),t._v(" "),r("td",{staticClass:"right-text"},[t.$can("footer_link","edit")?r("nuxt-link",{staticClass:"edit-btn lite-btn button",attrs:{to:"/footer-links/"+e.id+"?type=1"}},[r("i",{staticClass:"edit-icon icon"})]):t._e(),t._v(" "),t.$can("footer_link","delete")?r("button",{staticClass:"delete-btn lite-btn",on:{click:function(r){return r.preventDefault(),t.$emit("delete-item",e.id)}}},[r("i",{staticClass:"delete-icon icon"})]):t._e()],1)])}))],2):r("p",[t._v("\n        "+t._s(t.$t("setting.noData"))+"\n      ")])])]),t._v(" "),r("div",{staticClass:"dply-felx"},[r("h4",[t._v(t._s(t.$t("setting.sl")))]),t._v(" "),t.$can("footer_link","create")?r("nuxt-link",{staticClass:"lite-btn button",attrs:{to:"/footer-links/add?type=2"}},[t._v("\n      "+t._s(t.$t("setting.addLink"))+"\n    ")]):t._e()],1),t._v(" "),r("div",{staticClass:"table-wrapper mt-0"},[t.result.social_links.length?r("table",{staticClass:"mtb-15"},[r("tr",{staticClass:"lite-bold"},[r("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),r("th",[t._v(t._s(t.$t("category.status")))]),t._v(" "),r("th")]),t._v(" "),t._l(t.result.social_links,(function(e,n){return r("tr",{key:n},[r("td",[r("nuxt-link",{staticClass:"dply-felx j-left link",attrs:{to:"/footer-links/"+e.id+"?type=2/"}},[r("lazy-image",{staticClass:"mr-20 mn-w-30x w-30x",attrs:{"data-src":t.getThumbImageURL(e.image),alt:e.title}}),t._v(" "),r("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])],1)],1),t._v(" "),r("td",{staticClass:"status",class:{active:1==e.status}},[r("span",[t._v(t._s(t.getStatus(e.status)))])]),t._v(" "),r("td",{staticClass:"right-text"},[t.$can("footer_link","edit")?r("nuxt-link",{staticClass:"edit-btn lite-btn button",attrs:{to:"/footer-links/"+e.id+"?type=2"}},[r("i",{staticClass:"edit-icon icon"})]):t._e(),t._v(" "),t.$can("footer_link","delete")?r("button",{staticClass:"delete-btn lite-btn",on:{click:function(r){return r.preventDefault(),t.$emit("delete-item",e.id)}}},[r("i",{staticClass:"delete-icon icon"})]):t._e()],1)])}))],2):r("p",[t._v("\n      "+t._s(t.$t("setting.noData"))+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyImage:r(437).default})},806:function(t,e,r){"use strict";r.r(e);r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(188),r(20),r(25),r(72),r(11)),c=r(712),d=r(48);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"footer-links",middleware:["common-middleware","auth"],data:function(){return{result:{about_links:[],service_links:[],payment_links:[],social_links:[]},tabId:["service-about","payment-social"],activeTab:"service",tabs:[{title:this.$t("admin.service"),tabId:"service-about"},{title:this.$t("admin.payment"),tabId:"payment-social"}],loading:!1}},components:{FooterImageLink:r(713).default,Spinner:d.default,FooterLink:c.default},mixins:[],computed:m({},Object(l.c)("common",["allPages"])),methods:m({removeItem:function(t){var source=t.source,e=t.index,r=t.deleted,n=m(m({},this.result[source][e]),{deleted:r});this.result[source].splice(e,1),this.result[source].splice(e,0,n)},updateItem:function(t){var e,source=t.source,r=t.index,n=t.value;null!==(e=this.result[source][r])&&void 0!==e&&e.id&&(this.result[source][r]=m(m({},this.result[source][r]),{updated:!0}));var o=m(m({},this.result[source][r]),{page_id:n.key});this.result[source].splice(r,1),this.result[source].splice(r,0,o)},addItem:function(t){var source=t.source;this.result[source].push({page_id:Object.keys(this.allPages)[0]})},tabSelect:function(t){t.tabId!==this.$route.hash.replace("#","")&&this.$router.push({hash:t.tabId}),this.activeTab=t.tabId},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.getRequest({params:{},api:"getFooterLinks"});case 4:t.result=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",t.$nuxt.error(e.t0));case 10:t.loading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},deleteFooterImageLink:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm(e.$t("admin.dltMsg"))){r.next=12;break}return r.prev=1,e.loading=!0,r.next=5,e.deleteData({params:t,api:"deleteFooterImageLink"});case 5:return r.next=7,e.fetchingData();case 7:r.next=12;break;case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",e.$nuxt.error(r.t0));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}},Object(l.b)("common",["getAllList","getRequest","deleteData"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.activeTab=t.$route.hash?t.$route.hash.replace("#",""):t.tabs[0].tabId,t.allPages){e.next=11;break}return e.prev=3,e.next=6,t.getAllList({api:"getAllPages",mutation:"SET_ALL_PAGES"});case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(3),e.abrupt("return",t.$nuxt.error(e.t0));case 11:if(!t.$can("footer_link","view")){e.next=16;break}return e.next=14,t.fetchingData();case 14:e.next=17;break;case 16:t.loading=!1;case 17:case"end":return e.stop()}}),e,null,[[3,8]])})))()}},h=r(16),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$can("footer_link","view")?r("div",{staticClass:"tab-sidebar"},[r("h4",{staticClass:"title"},[t._v(t._s(t.$t("admin.footer")))]),t._v(" "),r("div",{staticClass:"dply-felx"},[r("ul",{staticClass:"left-area"},t._l(t.tabs,(function(e,n){return r("li",{key:n,class:{active:e.tabId===t.activeTab},on:{click:function(r){return r.preventDefault(),t.tabSelect(e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),0),t._v(" "),r("div",{staticClass:"right-area pos-rel"},[t.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),t.tabId[0]===t.activeTab?r("footer-link",{attrs:{result:t.result},on:{"remove-item":t.removeItem,"update-item":t.updateItem,"add-item":t.addItem,result:function(e){t.result=Object.assign({},e)}}}):t._e(),t._v(" "),t.tabId[1]===t.activeTab?r("footer-image-link",{attrs:{result:t.result},on:{"delete-item":t.deleteFooterImageLink}}):t._e()],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(48).default})}}]);