(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{827:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(21),n(441)),l=n(80),c={name:"subscription-email-formats",middleware:["common-middleware","auth"],data:function(){return{orderOptions:{title:{title:this.$t("index.title")},subject:{title:this.$t("util.sub")},created_at:{title:this.$t("category.date")}}}},directives:{outsideClick:n(66).a},components:{ListPage:o.default},mixins:[l.a],computed:{},methods:{},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=n(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-page",{ref:"listPage",attrs:{"list-api":"getSubscriptionEmailFormats","delete-api":"deleteSubscriptionEmailFormat","route-name":"subscription-email-formats",name:t.$t("dataPage.sef"),gate:"subscription_email_format","empty-store-variable":"allSubscriptionEmailFormats","order-options":t.orderOptions},scopedSlots:t._u([{key:"table",fn:function(e){var r=e.list;return[n("tr",{staticClass:"lite-bold"},[n("th",[t._v(t._s(t.$t("index.title")))]),t._v(" "),n("th",[t._v(t._s(t.$t("util.sub")))]),t._v(" "),n("th",[t._v(t._s(t.$t("category.created")))]),t._v(" "),n("th")]),t._v(" "),t._l(r,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.subject))]),t._v(" "),n("td",[t._v(t._s(e.created))]),t._v(" "),n("td",[t.$can("subscription_email_format","edit")?n("button",{staticClass:"lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.editItem(e.id)}}},[t._v(t._s(t.$t("category.edit")))]):t._e(),t._v(" "),t.$can("subscription_email_format","delete")?n("button",{staticClass:"delete-btn lite-btn",on:{click:function(n){return n.preventDefault(),t.$refs.listPage.deleteItem(e.id)}}},[t._v("\n          "+t._s(t.$t("category.delete"))+"\n        ")]):t._e()])])}))]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);