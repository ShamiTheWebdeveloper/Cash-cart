(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{440:function(t,e,n){"use strict";n(53),n(151);e.a={data:function(){return{itemList:[],cbList:[]}},methods:{checkAll:function(t){t.target.checked?this.cbList=this.itemList.map((function(i){return i.id})):this.cbList=[]},deleteBulk:function(){var t;null!==(t=this.cbList)&&void 0!==t&&t.length&&this.$refs.listPage.deleteItem(this.cbList.join(","))}}}},826:function(t,e,n){"use strict";n.r(e);n(25),n(72);var r=n(441),c=n(80),l=n(659),o=n(440),d={name:"rating-reviews",middleware:["common-middleware","auth"],data:function(){return{userObj:{created_at:{title:this.$t("category.date")},email:{title:this.$t("fSale.email")}}}},components:{TableTop:l.default,ListPage:r.default},mixins:[c.a,o.a],computed:{sendEmailRoute:function(){return"".concat(this.$route.path.replace(/\/$/,""),"/send-email")}},methods:{},mounted:function(){}},m=n(16),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-page",{ref:"listPage",attrs:{"list-api":"getSubscribers","delete-api":"deleteSubscriber","route-name":"subscribers",name:t.$t("user.subs"),gate:"subscriber","add-button":!1,"order-options":t.userObj},on:{list:function(e){t.itemList=e}},scopedSlots:t._u([{key:"table-top",fn:function(e){var r=e.orderOptions;return[n("table-top",{staticClass:"mb-20 mb-sm-15",attrs:{"order-by-options":r},on:{"delete-bulk":t.deleteBulk},scopedSlots:t._u([{key:"add-button",fn:function(){return[n("nuxt-link",{staticClass:"button primary-btn",attrs:{to:t.sendEmailRoute}},[t._v("\n          "+t._s(t.$t("user.sEmail"))+"\n        ")])]},proxy:!0}],null,!0)})]}},{key:"table",fn:function(e){var r=e.list;return[n("tr",{staticClass:"lite-bold"},[n("th",[n("input",{attrs:{type:"checkbox"},on:{change:t.checkAll}})]),t._v(" "),n("th",[t._v(t._s(t.$t("fSale.email")))]),t._v(" "),n("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),n("th")]),t._v(" "),t._l(r,(function(e,r){return n("tr",{key:r},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cbList,expression:"cbList"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.cbList)?t._i(t.cbList,e.id)>-1:t.cbList},on:{change:function(n){var r=t.cbList,c=n.target,l=!!c.checked;if(Array.isArray(r)){var o=e.id,d=t._i(r,o);c.checked?d<0&&(t.cbList=r.concat([o])):d>-1&&(t.cbList=r.slice(0,d).concat(r.slice(d+1)))}else t.cbList=l}}})]),t._v(" "),n("td",[n("span",{staticClass:"mx-w-300x"},[t._v(t._s(e.email))])]),t._v(" "),n("td",[t._v(t._s(e.created))]),t._v(" "),n("td",[t.$can("subscriber","delete")?n("button",{staticClass:"delete-btn lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v(t._s(t.$t("category.delete")))]):t._e()])])}))]}}])})}),[],!1,null,"c2e72764",null);e.default=component.exports}}]);