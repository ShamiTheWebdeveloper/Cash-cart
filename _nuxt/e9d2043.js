(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{478:function(t,e,r){"use strict";r.r(e);r(295);var n={name:"Breadcrumb",data:function(){return{}},props:{page:{type:String,required:!0},slugs:{type:Array,default:function(){return[]}}},computed:{},mounted:function(){},destroyed:function(){}},m=r(11),component=Object(m.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb",attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("nuxt-link",{attrs:{to:"/",itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("product.home")))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),t._l(t.slugs,(function(r,i){return e("li",{key:i,attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("nuxt-link",{attrs:{title:r.title,to:r.link,itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(r.title))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:i+2}})],1)})),t._v(" "),e("li",{staticClass:"breadcrumb-item",attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.page))]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:t.slugs.length+2}})])],2)])}),[],!1,null,null,null);e.default=component.exports}}]);