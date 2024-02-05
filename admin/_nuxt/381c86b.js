(window.webpackJsonp=window.webpackJsonp||[]).push([[97,14,54],{436:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},c=d,m=r(16),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[e._v(e._s(e.$t("error.feo")))]),e._v(" "),e._l(e.errorData,(function(t,n){return r("li",{key:n},[e._v("\n    "+e._s(t)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},439:function(e,t,r){"use strict";r(25),r(37);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:1,maxExcelSize:2,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t*1024?this.$t("util.fSize",{size:t}):this.allowedExcelExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t*1024?this.$t("util.fSize",{size:t}):r&&!this.allowedImageExtensions.exec(e.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},454:function(e,t,r){"use strict";r.r(t);var n={name:"PasswordField",data:function(){return{password:"",passwordFieldType:"password"}},props:{isInvalid:{type:Boolean,default:!1},value:{type:String}},watch:{value:function(e){this.password=e}},mixins:[],components:{},computed:{isPasswordTypePassword:function(){return"password"===this.passwordFieldType}},methods:{passwordFieldToggle:function(){this.isPasswordTypePassword?this.passwordFieldType="text":this.passwordFieldType="password"}},mounted:function(){this.password=this.value}},o=r(16),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"icon-input right-icon"},[r("i",{staticClass:"icon password-icon"}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],class:{invalid:!e.password||e.isInvalid},attrs:{type:e.passwordFieldType,placeholder:e.$t("user.pass")},domProps:{value:e.password},on:{change:function(t){return e.$emit("change",e.password)},input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("i",{staticClass:"icon",class:e.isPasswordTypePassword?"eye-close-icon":"eye-icon",on:{click:e.passwordFieldToggle}})])}),[],!1,null,null,null);t.default=component.exports},817:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(25),r(72),r(11)),d=r(149),c=r(439),m=r(48),f=r(436),w=r(454);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={name:"profile",middleware:["common-middleware","auth"],data:function(){return{formSubmitting:!1,hasError:!1,adminData:{id:null,name:null,username:null,email:null,password:""},password:{password:null,confirm_password:null,new_password:null},tabId:["profile-update","password-update"],activeTab:"profile-update",tabs:[{title:this.$t("profile.up"),tabId:"profile-update"},{title:this.$t("profile.cp"),tabId:"password-update"}]}},mixins:[c.a],components:{ErrorFormatter:f.default,AjaxButton:d.default,Spinner:m.default,PasswordField:w.default},computed:h({isInvalidEmail:function(){return this.adminData.email&&!this.isValidEmail(this.adminData.email)}},Object(l.c)("admin",["profile"])),methods:h(h({tabSelect:function(e){e.tabId!==this.$route.hash.replace("#","")&&this.$router.push({hash:e.tabId}),this.hasError=!1,this.activeTab=e.tabId},checkForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.adminData.username&&e.adminData.email&&e.adminData.password)){t.next=15;break}return e.formSubmitting=!0,t.prev=2,t.next=5,e.updateProfile(e.adminData);case 5:t.sent&&(e.adminData=Object.assign({},e.profile)),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",e.$nuxt.error(t.t0));case 12:e.formSubmitting=!1,t.next=16;break;case 15:e.hasError=!0;case 16:case"end":return t.stop()}}),t,null,[[2,9]])})))()},updatePassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.password.password&&e.password.new_password&&e.password.confirm_password&&e.password.new_password===e.password.confirm_password)){t.next=12;break}return e.formSubmitting=!0,t.next=4,e.setPassword(e.password);case 4:if(200!==(null==(data=t.sent)?void 0:data.status)){t.next=9;break}return t.next=8,e.$auth.logout();case 8:window.location.reload();case 9:e.formSubmitting=!1,t.next=13;break;case 12:e.hasError=!0;case 13:case"end":return t.stop()}}),t)})))()}},Object(l.b)("ui",["setErrors"])),Object(l.b)("admin",["updateProfile","setPassword"])),mounted:function(){this.activeTab=this.$route.hash?this.$route.hash.replace("#",""):this.tabs[0].tabId,this.adminData=Object.assign({},this.profile)}},y=r(16),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$can("profile","view")?r("div",{staticClass:"tab-sidebar"},[r("h5",{staticClass:"title bold"},[e._v("\n    "+e._s(e.$t("profile.ap"))+"\n  ")]),e._v(" "),r("div",{staticClass:"dply-felx"},[r("ul",{staticClass:"left-area"},e._l(e.tabs,(function(t,n){return r("li",{key:n,class:{active:t.tabId===e.activeTab},on:{click:function(r){return e.tabSelect(t)}}},[e._v("\n        "+e._s(t.title)+"\n      ")])})),0),e._v(" "),r("div",{staticClass:"right-area"},[e.tabId[0]===e.activeTab?r("form",{staticClass:"pos-rel",class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[r("error-formatter"),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("user.name"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.adminData.name,expression:"adminData.name"}],attrs:{type:"text",placeholder:e.$t("user.name"),name:"name"},domProps:{value:e.adminData.name},on:{input:function(t){t.target.composing||e.$set(e.adminData,"name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("user.uName"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adminData.username,expression:"adminData.username",modifiers:{trim:!0}}],class:{invalid:!e.adminData.username&&e.hasError},attrs:{type:"text",placeholder:e.$t("user.uName"),name:"username"},domProps:{value:e.adminData.username},on:{input:function(t){t.target.composing||e.$set(e.adminData,"username",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.adminData.username&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("category.req",{type:e.$t("user.uName")}))+"\n          ")]):e._e()]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("fSale.email"))+"\n          ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adminData.email,expression:"adminData.email",modifiers:{trim:!0}}],class:{invalid:!e.adminData.email||e.isInvalidEmail},attrs:{type:"text",placeholder:e.$t("fSale.email")},domProps:{value:e.adminData.email},on:{input:function(t){t.target.composing||e.$set(e.adminData,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),!e.adminData.email&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("category.req",{type:e.$t("fSale.email")}))+"\n          ")]):e.isInvalidEmail&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.isValid",{type:e.$t("fSale.email")}))+"\n          ")]):e._e()]),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("user.pass"))+"\n          ")]),e._v(" "),r("password-field",{attrs:{value:e.adminData.password,"is-invalid":!e.isValidLength(e.adminData.password)},on:{change:function(t){e.adminData.password=t}}}),e._v(" "),!e.adminData.password&&e.hasError?r("span",{staticClass:"error"},[e._v("\n           "+e._s(e.$t("category.req",{type:e.$t("user.pass")}))+"\n          ")]):!e.isValidLength(e.adminData.password)&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.inPass"))+"\n          ")]):e._e()],1),e._v(" "),r("div",{staticClass:"oflow-hidden"},[e.$can("profile","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.formSubmitting}}):e._e()],1)],1):e._e(),e._v(" "),e.tabId[1]===e.activeTab?r("form",{class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.updatePassword.apply(null,arguments)}}},[r("error-formatter"),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("user.pass"))+"\n          ")]),e._v(" "),r("password-field",{attrs:{value:e.password.password,"is-invalid":!e.isValidLength(e.password.password)},on:{change:function(t){e.password.password=t}}}),e._v(" "),!e.password.password&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("category.req",{type:e.$t("user.pass")}))+"\n          ")]):!e.isValidLength(e.password.password)&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.inPass"))+"\n          ")]):e._e()],1),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("profile.np"))+"\n          ")]),e._v(" "),r("password-field",{attrs:{value:e.password.new_password,"is-invalid":!e.isValidLength(e.password.new_password)},on:{change:function(t){e.password.new_password=t}}}),e._v(" "),!e.password.new_password&&e.hasError?r("span",{staticClass:"error"},[e._v("\n             "+e._s(e.$t("category.req",{type:e.$t("profile.np")}))+"\n          ")]):!e.isValidLength(e.password.new_password)&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.inPass"))+"\n          ")]):e._e()],1),e._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[e._v("\n            "+e._s(e.$t("user.cPass"))+"\n          ")]),e._v(" "),r("password-field",{attrs:{value:e.password.confirm_password,"is-invalid":!e.isValidLength(e.password.confirm_password)},on:{change:function(t){e.password.confirm_password=t}}}),e._v(" "),!e.password.confirm_password&&e.hasError?r("span",{staticClass:"error"},[e._v("\n             "+e._s(e.$t("category.req",{type:e.$t("user.cPass")}))+"\n          ")]):!e.isValidLength(e.password.confirm_password)&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.inPass"))+"\n          ")]):e.password.confirm_password!==e.password.new_password&&e.hasError?r("span",{staticClass:"error"},[e._v("\n            "+e._s(e.$t("user.nMatch"))+"\n          ")]):e._e()],1),e._v(" "),r("div",{staticClass:"oflow-hidden"},[e.$can("profile","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":e.formSubmitting}}):e._e()],1)],1):e._e()])])]):e._e()}),[],!1,null,"010ffe5c",null);t.default=component.exports;installComponents(component,{ErrorFormatter:r(436).default,PasswordField:r(454).default,AjaxButton:r(149).default})}}]);