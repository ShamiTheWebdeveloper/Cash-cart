(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{449:function(o,e,t){var content=t(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(61).default)("3eb70cdb",content,!0,{sourceMap:!1})},455:function(o,e,t){"use strict";t.r(e);var r={name:"PopOver",components:{},directives:{outsideClick:t(66).a},props:{title:{type:String,default:""},elemId:{type:String,default:""},layer:{type:Boolean,default:!1},outsideClickOn:{type:Boolean,default:!0}},computed:{isSmallerDevice:function(){return window.innerWidth<992},hasFooterSlot:function(){return!!this.$slots["pop-footer"]}},data:function(){return{hasLayer:this.layer}},methods:{outsideClickFn:function(){this.outsideClickOn&&this.closePopOver()},closePopOver:function(){this.$emit("close")}},mounted:function(){this.isSmallerDevice&&(this.hasLayer=!0),this.hasLayer&&document.body.classList.add("no-scroll")},destroyed:function(){document.body.classList.remove("no-scroll")}},n=(t(462),t(16)),component=Object(n.a)(r,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"pop-over",class:{"has-layer":o.hasLayer}},[t("div",{staticClass:"pop-layer"}),o._v(" "),t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:o.outsideClickFn,expression:"outsideClickFn"}],staticClass:"pop-over-inner",attrs:{id:o.elemId}},[t("div",{staticClass:"pop-heading flex sided plr-15 plr-xs-10 ptb-10 b-b pos-rel"},[o._t("heading",(function(){return[t("h4",[o._v("\n          "+o._s(o.title)+"\n        ")])]})),o._v(" "),t("button",{staticClass:"right-btn close-btn pos-static no-shadow",on:{click:function(e){return e.preventDefault(),o.closePopOver.apply(null,arguments)}}},[t("i",{staticClass:"icon close-icon"})])],2),o._v(" "),t("div",{staticClass:"pop-over-content p-15 p-xs-10"},[o._t("content")],2),o._v(" "),o.hasFooterSlot?t("div",{staticClass:"pop-footer b-t plr-15 plr-xs-10 ptb-10"},[o._t("pop-footer")],2):o._e()])])}),[],!1,null,null,null);e.default=component.exports},462:function(o,e,t){"use strict";t(449)},463:function(o,e,t){var r=t(60)(!1);r.push([o.i,'.pop-layer{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1;background:rgba(0,0,0,.4);display:none}.user-addresses .pop-over-content{padding-bottom:0!important}.pop-over{position:relative;z-index:1000;top:10px}.pop-over .pop-over-inner{left:50%;min-width:400px;border-radius:5px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2);border:1px solid #ccc;background:#fff;position:absolute;z-index:1}.pop-over .pop-over-inner .pop-over-content{overflow:auto;max-height:500px}.pop-over .pop-over-inner .pop-heading .close-btn{background:#e8f0fe}.pop-over .pop-over-inner:after,.pop-over .pop-over-inner:before{content:"";position:absolute;left:50%;margin-left:-10px;top:-10px;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff}.pop-over .pop-over-inner:before{top:-11px;border-bottom:10px solid #aaa}.has-layer .pop-over-inner{border:none}.has-layer .pop-layer{display:block}.has-layer .pop-layer+.pop-over-inner{position:fixed;top:50%;max-height:85vh;overflow:auto;transform:translate(-50%,-50%)}.has-layer .pop-layer+.pop-over-inner:after,.has-layer .pop-layer+.pop-over-inner:before{display:none}@media only screen and (max-width:992px){.pop-over{position:fixed;left:0;right:0;bottom:0;top:0}.pop-over .pop-over-inner{border:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)!important}.pop-over .pop-over-inner:after,.pop-over .pop-over-inner:before{display:none}}@media only screen and (max-width:768px){.layer-responsive .pop-layer{display:block}.popup-top-auto.has-layer .pop-layer+.pop-over-inner{top:auto;transform:translate(0)!important;min-width:0;border-radius:0;left:0;right:0;bottom:0;width:100%;max-width:100vw}}@media only screen and (max-width:576px){.pop-over .pop-over-inner{min-width:0;border-radius:5px 5px 0 0}.has-layer .pop-layer+.pop-over-inner{top:auto;bottom:0;left:0;right:0;max-height:100%;transform:none!important}}',""]),o.exports=r}}]);