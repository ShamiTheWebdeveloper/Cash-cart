/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[68,21],{438:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,n=void 0,i=0;i<=a.length-1;i++)(n=a[i].getAttribute("data-src"))&&(a[i].src=n);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var o=",";if(t.getAttribute("data-background-delimiter")&&(o=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(o).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var l=t.getAttribute("data-background-image-set").split(o),u=l[0].substr(0,l[0].indexOf(" "))||l[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===l.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+l+"); background-image: image-set("+l+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},n=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var o,a,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,d),i=c.root,f=c.rootMargin,m=c.threshold,u=c.load,g=c.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((o=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),r(t.target)||(o(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:m}));for(var v,y=n(l,i),b=0;b<y.length;b++)(v=y[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=n(l,i),o=0;o<t.length;o++)r(t[o])||(s?s.observe(t[o]):(u(t[o]),e(t[o]),g(t[o])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},849:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(150)),d=r(445),c=r(80),f=r(11);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"brands",middleware:["common-middleware","auth"],data:function(){return{result:{id:"",title:"",slug:"",featured:2,status:2,image:""}}},mixins:[c.a],components:{DataPage:d.default,Dropdown:l.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.c)("language",["currentLanguage"])),methods:{featuredSelected:function(data){this.result.featured=data.key},dropdownSelected:function(data){this.result.status=data.key}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},y=v,w=r(16),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$can("brand","create")||t.$can("brand","view")?r("data-page",{ref:"dataPage",attrs:{"set-api":"setBrand","get-api":"getBrand","empty-store-variable":"allBrands","set-image-api":"setBrandImage","route-name":"brands",name:t.$t("prod.brand"),gate:"brand","validation-keys":["title","slug"],"file-keys":["id","status"],result:t.result},on:{result:function(e){t.result=e}},scopedSlots:t._u([{key:"form",fn:function(e){var n=e.hasError;return[r("div",{staticClass:"input-wrapper"},[r("label",[t._v(t._s(t.$t("index.title")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.title,expression:"result.title"}],ref:"title",class:{invalid:!t.result.title&&n},attrs:{type:"text",placeholder:t.$t("index.title"),name:"title"},domProps:{value:t.result.title},on:{change:t.slugChange,input:function(e){e.target.composing||t.$set(t.result,"title",e.target.value)}}}),t._v(" "),!t.result.title&&n?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("index.title")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[t._v(t._s(t.$t("category.slug")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.slug,expression:"result.slug"}],ref:"slug",class:{invalid:!t.result.slug&&n},attrs:{type:"text",placeholder:t.$t("category.slug"),name:"slug"},domProps:{value:t.result.slug},on:{input:function(e){e.target.composing||t.$set(t.result,"slug",e.target.value)}}}),t._v(" "),!t.result.slug&&n?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("category.slug")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"dply-felx j-left mb-20 mb-sm-15"},[r("span",{staticClass:"mr-15"},[t._v("\n          "+t._s(t.$t("category.featured"))+"\n        ")]),t._v(" "),r("dropdown",{attrs:{selectedKey:""+t.result.featured,options:t.featuredObj},on:{clicked:t.featuredSelected}})],1)]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"dply-felx j-left mb-20 mb-sm-15"},[r("span",{staticClass:"mr-15"},[t._v("\n          "+t._s(t.$t("category.status"))+"\n        ")]),t._v(" "),r("dropdown",{attrs:{selectedKey:""+t.result.status,options:t.statusObj},on:{clicked:t.dropdownSelected}})],1)])]}}],null,!1,3570347860)}):t._e()}),[],!1,null,"7b1f8be5",null);e.default=component.exports;installComponents(component,{Dropdown:r(150).default})}}]);