/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[86,17,21],{437:function(t,e,r){"use strict";r.r(e);var n=r(438),o=r.n(n),c=r(80),l={name:"LazyImage",props:{alt:{type:String,default:null},title:{type:String,default:null},backgroundColor:{type:String,default:"#d9f4eb"},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null}},data:function(){return{loading:!0}},mixins:[c.a],computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={};return this.width&&(style.width="".concat(this.width,"px"),this.height||(style.height="".concat(.66*this.width,"px"))),this.loading&&this.aspectRatio&&(style.height=this.height?"".concat(this.height,"px"):"".concat(this.applyAspectRatio,"px")),style}},mounted:function(){var t=this,e=function(){t.loading=!1,t.$el.style.opacity=1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),o()(this.$el,{load:function(t){t.src=t.getAttribute("data-src")}}).observe()},methods:{onError:function(t){t.target.src=this.getImageURL()}}},d=r(16),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"lazy-img",style:t.style,attrs:{"data-src":t.lazySrc,alt:t.alt,title:t.title,height:"50",width:"50"},on:{error:t.onError}})}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(o),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=Object.assign({},t,l),i=d.root,h=d.rootMargin,m=d.threshold,u=d.load,g=d.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:h,threshold:m}));for(var f,v=n(c,i),b=0;b<v.length;b++)(f=v[b]).getAttribute("data-placeholder-background")&&(f.style.background=f.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(c,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},811:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(27),r(17),r(28);var n=r(1),o=r(5),c=(r(21),r(23),r(8),r(159),r(25),r(72),r(80)),l=r(11),d=r(437);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"images",middleware:["common-middleware","auth"],data:function(){return{loading:!1,imageList:[]}},directives:{},components:{Spinner:r(48).default,LazyImage:d.default},mixins:[c.a],computed:{imageCount:function(){return this.thumbs.length},thumbs:function(){var t;return null===(t=this.imageList)||void 0===t?void 0:t.filter((function(t){return t.startsWith("thumb-")}))}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({deleteImage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm(e.$t("admin.dltMsg"))){r.next=13;break}return r.prev=1,e.loading=!0,r.next=5,e.deleteData({params:e.thumbToMain(e.thumbs[t]),api:"imgDelete"});case 5:return r.next=7,e.fetchingData();case 7:e.loading=!1,r.next=13;break;case 10:return r.prev=10,r.t0=r.catch(1),r.abrupt("return",e.$nuxt.error(r.t0));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},thumbToMain:function(image){return image=image.replace("thumb-","")},fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.getRequest({params:{},api:"imgAll"});case 3:t.imageList=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}},Object(l.b)("common",["deleteData","getRequest"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:case"end":return e.stop()}}),e)})))()}},f=m,v=r(16),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h5",{staticClass:"mb-20"},[t._v(t._s(t.$t("list.show",{from:1,to:t.imageCount,total:t.imageCount})))]),t._v(" "),t.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{staticClass:"mr-15",attrs:{radius:100,color:"primary"}})],1):r("div",{staticClass:"image-container"},t._l(t.thumbs,(function(data,e){return r("div",{key:e,staticClass:"card"},[r("lazy-image",{staticClass:"mr-20",attrs:{"data-src":t.getImageURL(data),alt:t.thumbToMain(data)}}),t._v("\n      "+t._s(t.thumbToMain(data))+"\n      "),r("button",{on:{click:function(r){return r.preventDefault(),t.deleteImage(e)}}},[t._v("\n        ✖\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(48).default,LazyImage:r(437).default})}}]);