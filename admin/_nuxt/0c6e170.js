(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{440:function(t,e,n){"use strict";n(53),n(151);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},821:function(t,e,n){"use strict";n.r(e);var c=n(441),l=n(80),r=n(440),o={name:"categories",middleware:["common-middleware","auth"],data:function(){return{orderOptions:{title:{title:this.$t("index.title")},created_at:{title:this.$t("category.date")}}}},components:{ListPage:c.default},mixins:[l.a,r.a],computed:{},methods:{},mounted:function(){}},d=n(16),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-page",{ref:"listPage",attrs:{"list-api":"getShippingRules","delete-api":"deleteShippingRule","route-name":"shipping-rules","empty-store-variable":"allShippingRules",name:t.$t("brand.shipRule"),gate:"shipping_rule","order-options":t.orderOptions},on:{"delete-bulk":t.deleteBulk,list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table",fn:function(e){var c=e.list;return[n("tr",{staticClass:"lite-bold"},[n("th",{staticClass:"w-50x mx-w-50x"},[n("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),n("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),n("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),n("th",[t._v(" ")])]),t._v(" "),t._l(c,(function(e,c){return n("tr",{key:c},[n("td",{staticClass:"w-50x mx-w-50x"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,e.id)>-1:t.cbList},on:{change:function(n){var c=t.cbList,l=n.target,r=!!l.checked;if(Array.isArray(c)){var o=e.id,d=t._i(c,o);l.checked?d<0&&(t.cbList=c.concat([o])):d>-1&&(t.cbList=c.slice(0,d).concat(c.slice(d+1)))}else t.cbList=r}}})]),t._v(" "),n("td",{},[n("nuxt-link",{staticClass:"link",attrs:{to:"/shipping-rules/"+e.id}},[n("h5",{staticClass:"mx-w-300x"},[t._v(t._s(e.title))])])],1),t._v(" "),n("td",[t._v(t._s(e.created))]),t._v(" "),n("td",[t.$can("shipping_rule","edit")?n("button",{staticClass:"lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.editItem(e.id)}}},[t._v("\n          "+t._s(t.$t("category.edit")))]):t._e(),t._v(" "),t.$can("shipping_rule","delete")?n("button",{staticClass:"delete-btn lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v("\n          "+t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"3147effe",null);e.default=component.exports}}]);