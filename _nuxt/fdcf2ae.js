(window.webpackJsonp=window.webpackJsonp||[]).push([[54,41,42,66],{470:function(e,t,n){"use strict";n.r(t);n(202),n(81);var o=n(489),r={name:"ImageSlider",data:function(){return{glide:null}},watch:{},props:{activeSlide:{type:Number,default:0},imageCount:{type:Number,default:0},perView:{type:Number,default:1},responsive:{type:Array,default:function(){return[1,1,1,1,1]}},gap:{type:Number,default:1},loop:{type:Boolean,default:!1},bullets:{type:Boolean,default:!1},autoplay:{type:Number,default:0},lazyImage:{type:Boolean,default:!1}},components:{},computed:{currentPerView:function(){var e,t;return null===(e=this.glide)||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.perView}},mixins:[],methods:{changeSlide:function(e){this.glide.go("=".concat(e))},sliderInit:function(){var e=this;this.glide=new o.a(this.$refs.glide,{startAt:this.activeSlide,perView:this.perView,autoplay:this.autoplay,gap:this.gap,perTouch:3,bound:!0,rewind:this.loop,breakpoints:{1200:{perView:this.responsive[0]},992:{perView:this.responsive[1]},768:{perView:this.responsive[2]},576:{perView:this.responsive[3],gap:10},360:{perView:this.responsive[4],gap:10}}}),this.bullets||this.$nextTick((function(){var t=e.currentPerView;e.glide.on("run.before",(function(e){e.steps=">"===e.direction?-t:t}))})),this.lazyImage&&this.$nextTick((function(){e.glide.on("run.before",(function(t){e.imageCount-1>=e.glide.index&&("="===t.direction?e.$emit("change",{index:t.steps-1,direction:1}):e.$emit("change",{index:e.glide.index,direction:">"===t.direction?1:-1}))}))})),this.glide.on("mount.after",(function(){setTimeout((function(){e.$emit("loaded",e.glide.index)}),50)})),this.$emit("glide",this.glide),this.glide.mount()}},created:function(){},mounted:function(){var e=this;this.$nextTick((function(){e.sliderInit()}))}},l=n(11),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{ref:"glide",staticClass:"glide"},[e._t("bullet-area",(function(){return[e.bullets?t("ul",{staticClass:"glide-bullets",attrs:{"data-glide-el":"controls[nav]"}},e._l(e.imageCount,(function(e){return t("li",{key:e,attrs:{"data-glide-dir":"=".concat(e-1)}})})),0):e._e()]})),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[t("ul",{staticClass:"glide__slides"},[e._t("content")],2)])],2)}),[function(){var e=this._self._c;return e("div",{staticClass:"glide-nav",attrs:{"data-glide-el":"controls"}},[e("button",{staticClass:"prev-btn",attrs:{"aria-label":"prev","data-glide-dir":"<"}},[e("i",{staticClass:"m-0 icon arrow-left"})]),this._v(" "),e("button",{staticClass:"next-btn",attrs:{"aria-label":"next","data-glide-dir":">"}},[e("i",{staticClass:"m-0 icon arrow-right"})])])}],!1,null,null,null);t.default=component.exports},485:function(e,t,n){"use strict";n.r(t);n(19),n(17),n(22),n(6),n(26),n(18),n(27);var o=n(9),r=n(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={data:function(){return{}},props:{product:{type:Object}},components:{},mixins:[],computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({currentURL:function(){var e=window.location.origin;return this.$route?e+this.$route.path:e},metaTitle:function(){var e,t;return(null===(e=this.product)||void 0===e?void 0:e.meta_title)||(null===(t=this.site_setting)||void 0===t?void 0:t.meta_title)||""},metaDescription:function(){var e,t;return(null===(e=this.product)||void 0===e?void 0:e.meta_description)||(null===(t=this.site_setting)||void 0===t?void 0:t.meta_description)||""},productTags:function(){var e,t;return null!==(e=null===(t=this.product)||void 0===t?void 0:t.tags)&&void 0!==e?e:""}},Object(r.c)("common",["site_setting"])),methods:{},mounted:function(){}},d=c,m=n(11),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex start mt-15 mt-sm social-share"},[t("span",{staticClass:"mr-10 color-lite hide-sm"},[e._v("\n  "+e._s(e.$t("socialShare.share"))+":\n")]),e._v(" "),t("ShareNetwork",{attrs:{network:"facebook",url:e.currentURL,title:e.metaTitle,description:e.metaDescription,quote:e.metaTitle,hashtags:e.productTags}},[t("i",{staticClass:"icon facebook-icon"}),e._v(" "),t("span",{staticClass:"hide block-sm"},[e._v("\n    "+e._s(e.$t("socialShare.facebook"))+"\n  ")])]),e._v(" "),t("ShareNetwork",{staticClass:"mlr-5",attrs:{network:"twitter",url:e.currentURL,title:e.metaTitle,description:e.metaDescription,quote:e.metaTitle,hashtags:e.productTags}},[t("i",{staticClass:"icon twitter-icon"}),e._v(" "),t("span",{staticClass:"hide block-sm"},[e._v("\n    "+e._s(e.$t("socialShare.twitter"))+"\n  ")])]),e._v(" "),t("ShareNetwork",{attrs:{network:"pinterest",url:e.currentURL,title:e.metaTitle,description:e.metaDescription,quote:e.metaTitle,hashtags:e.productTags}},[t("i",{staticClass:"icon pinterest-icon"}),e._v(" "),t("span",{staticClass:"hide block-sm"},[e._v("\n     "+e._s(e.$t("socialShare.pinterest"))+"\n  ")])])],1)}),[],!1,null,null,null);t.default=component.exports},497:function(e,t,n){"use strict";n(42);t.a={data:function(){return{currentSlider:this.activeId||0,glide:null}},methods:{changed:function(e){var t=e.index,n=e.direction;if(t+n<0)return!1;var o=this,img=this.loadedImage(t+n);null==img||img.addEventListener("load",(function(){img.style.opacity=1})),null==img||img.addEventListener("error",(function(){img.style.opacity=1,img.src=null==o?void 0:o.getImageURL()}))},firstImgLoaded:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this,img=this.loadedImage(t);null==img||img.addEventListener("load",(function(){img.style.opacity=1,e.imgLoaded=!0})),null==img||img.addEventListener("error",(function(){img.style.opacity=1;var o=document.getElementById(e.generateElemId(t));null==o||o.setAttribute("src",null==n?void 0:n.getImageURL())}))},loadedImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.getElementById(this.generateElemId(e));return null==t||t.setAttribute("src",null==t?void 0:t.getAttribute("data-source")),t},generateElemId:function(e){return"".concat(this._uid,"--").concat(e)},loadImage:function(e){var t=this,n=document.getElementById(this.generateElemId(e)),o=(null==n?void 0:n.getAttribute("data-src"))||null;o&&(n.src=o,n.onload=function(){n.removeAttribute("data-src")},n.onerror=function(){n.src=t.imageURL()})},glideSlider:function(data){data.on("run",function(){this.loadImage(data.index),this.currentSlider=data.index}.bind(this))}}}},503:function(e,t,n){"use strict";n.r(t);n(202);var o=n(497),r=n(71),l=n(470),c=n(61),d=n(485),m=n(157),h=n(24),v={name:"ImagePopup",data:function(){return{sharePopOver:!1,scrollPosition:0}},components:{ImageSlider:l.default,LazyImage:c.default,SocialShare:d.default,PopOver:m.default},directives:{outsideClick:r.a},mixins:[h.a,o.a],props:{product:{type:Object},title:{type:String,default:""},activeId:{type:Number,default:1},imageList:{type:Array,default:function(){return[]}},noScroll:{type:Boolean,default:!0},stackedOnResponsive:{type:Boolean,default:!1}},computed:{imageCount:function(){return this.video?this.imageList.length+1:this.imageList.length},video:function(){var e;return(null===(e=this.product)||void 0===e?void 0:e.video)||""},videoThumb:function(){var e;return(null===(e=this.product)||void 0===e?void 0:e.video_thumb)||""},wishListed:function(){var e,t,n;return(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id)&&(null===(n=this.product)||void 0===n?void 0:n.wishlisted)},isFavourited:function(){return this.wishListed?"heart-fill-icon":"heart-icon"}},methods:{clickOnThumb:function(e){var t,n;null===(t=this.$refs)||void 0===t||null===(n=t.imageSlider)||void 0===n||n.changeSlide(e)},closePopOver:function(){this.sharePopOver=!1},closePopup:function(){this.$emit("close-popup")}},mounted:function(){this.noScroll&&document.body.classList.add("no-scroll")},destroyed:function(){document.body.classList.remove("no-scroll")}},f=n(11),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"image-popup-wrapper",class:{stacked:e.stackedOnResponsive}},[e.sharePopOver?t("pop-over",{attrs:{title:e.$t("socialShare.share"),layer:!0,"elem-id":"social-pop-over"},on:{close:e.closePopOver},scopedSlots:e._u([{key:"content",fn:function(){return[t("social-share",{attrs:{product:e.product}})]},proxy:!0}],null,!1,1050117750)}):e._e(),e._v(" "),t("div",{directives:[{name:"outside-click",rawName:"v-outside-click",value:e.closePopup,expression:"closePopup"}],staticClass:"image-popup"},[e.stackedOnResponsive?t("div",{staticClass:"image-popup-icons"},[t("button",{staticClass:"left-btn fav-btn",on:{click:function(t){return t.preventDefault(),e.$emit("add-to-wishlist")}}},[t("i",{staticClass:"m-0 icon",class:e.isFavourited})]),e._v(" "),t("button",{staticClass:"right-btn share-btn",on:{click:function(t){e.sharePopOver=!e.sharePopOver}}},[t("i",{staticClass:"m-0 icon share-icon"})])]):e._e(),e._v(" "),t("button",{staticClass:"right-btn close-btn",on:{click:e.closePopup}},[t("i",{staticClass:"m-0 icon close-icon"})]),e._v(" "),t("image-slider",{ref:"imageSlider",staticClass:"slider-wrapper",attrs:{"active-slide":e.activeId,"image-count":e.imageCount,bullets:!0,"lazy-image":!0},on:{glide:e.glideSlider,change:e.changed,loaded:e.firstImgLoaded},scopedSlots:e._u([{key:"bullet-area",fn:function(){return[t("div",{staticClass:"thumb-wrapper"},[t("h5",{staticClass:"title mb-10"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"flex start wrap",attrs:{"data-glide-el":"controls[nav]"}},[e._l(e.imageList,(function(n,o){return t("lazy-image",{key:o,staticClass:"img-handler",class:{active:o===e.currentSlider},attrs:{"data-src":e.getThumbImageURL(n.image),"data-glide-dir":"=".concat(o),height:"50",width:"50"}})})),e._v(" "),e.videoThumb?t("div",{staticClass:"img-handler video-thumb",class:{active:e.imageList.length===e.currentSlider},attrs:{"data-glide-dir":"=".concat(e.imageList.length)}},[t("lazy-image",{attrs:{"data-src":e.getImageURL(e.videoThumb),height:"50",width:"50"}}),e._v(" "),t("span",{staticClass:"flex"},[t("i",{staticClass:"icon play-icon"})])],1):e._e()],2)])]},proxy:!0},{key:"content",fn:function(){return[e._l(e.imageList,(function(n,o){return t("li",{key:o},[t("div",{staticClass:"slider-content"},[t("div",{staticClass:"slider-content-inner"},[t("img",{staticClass:"full-dimen opacity-0",attrs:{id:e.generateElemId(o),"data-source":e.getImageURL(n.image),alt:"Product image",height:"100",width:"100"}})])])])})),e._v(" "),e.video?t("li",[t("div",{staticClass:"slider-content"},[t("div",{staticClass:"slider-content-inner"},[t("video",{attrs:{controls:"",autostart:0}},[t("source",{attrs:{src:e.getVideoURL(e.video),type:"video/mp4"}})])])])]):e._e()]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SocialShare:n(485).default,PopOver:n(157).default,LazyImage:n(61).default,ImageSlider:n(470).default})},544:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(208),l=(n(12),n(6),n(18),n(47),n(52),n(42),n(37),n(38),n(81),n(503)),c=n(24),d={name:"ProductImages",data:function(){return{key:0,loaded:!1,noScroll:!0,showSliderMessage:!1,activeId:0,imagePopup:!1,imageList:[],zoomImageList:{thumbs:[],normal_size:[],large_size:[]},zoomerOptions:{zoomFactor:2.5,pane:"pane",hoverDelay:300,namespace:"zoomer",move_by_click:!1,scroll_items:4,choosed_thumb_border_color:"#bbdefb",scroller_button_style:"line",scroller_position:"left",zoomer_pane_position:"right"}}},components:{ImagePopup:l.default},mixins:[c.a],props:{product:{type:Object},images:{type:Array,default:function(){return[]}},mainImage:{type:String,default:""},title:{type:String,default:""}},directives:{},computed:{videoThumb:function(){var e;return(null===(e=this.product)||void 0===e?void 0:e.video_thumb)||""},isSmallerDevice:function(){return window.innerWidth<=992},isArrowVisible:function(){var e;return this.zoomerOptions.scroll_items<(null===(e=this.images)||void 0===e?void 0:e.length)+1}},methods:{zoomActiveChange:function(e){var t,n,o;null!==(t=this.zoomImageList)&&void 0!==t&&t.thumbs&&this.zoomImageList.thumbs[e]&&(null===(n=this.$refs)||void 0===n||null===(o=n.imagePopup)||void 0===o||o.clickOnThumb(e),this.$refs.productZoomer.chooseThumb(this.zoomImageList.thumbs[e],{type:null}))},closePopup:function(){this.isSmallerDevice||(this.imagePopup=!1),this.$emit("image-popup",this.imagePopup)},imagePopupOpen:function(e){var t=this;if(e.target.classList.contains("zoomer-control")||e.target.classList.contains("video-thumb"))return!1;Object(r.a)(this.$el.querySelectorAll(".thumb-list")[0].children).forEach((function(e,n){e.className.includes("choosed-thumb")&&(t.activeId=n-1)})),this.imagePopup=!0,this.$emit("image-popup",this.imagePopup)},generateImageObj:function(e,t){return{id:e,url:t}}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,c,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isSmallerDevice&&(e.imagePopup=!0),e.images?e.imageList=[{image:e.mainImage}].concat(e.images):e.imageList=[{image:e.mainImage}],n=[],o=[],r=[],l=0,c=e,d=[],m=[],e.imageList.forEach((function(t){t&&(l++,d.push(new Promise((function(n,o){var r=document.createElement("img");r.onload=function(){n(c.generateImageObj(this.dataset.index,this.src))},r.onerror=function(){n(c.generateImageObj(this.dataset.index,c.getThumbImageURL()))},r.src=e.getThumbImageURL(t.image),r.setAttribute("data-index",l)}))),m.push(new Promise((function(n,o){var r=document.createElement("img");r.onload=function(){n(c.generateImageObj(this.dataset.index,this.src))},r.onerror=function(){n(c.generateImageObj(this.dataset.index,c.getImageURL()))},r.src=e.getImageURL(t.image),r.setAttribute("data-index",l)}))))})),t.next=12,Promise.all(d).then((function(t){n=t,e.zoomImageList.thumbs=n}));case 12:return t.next=14,Promise.all(m).then((function(t){o=t,r=t,e.zoomImageList.normal_size=o,e.zoomImageList.large_size=r}));case 14:e.key++,e.$nextTick((function(){setTimeout((function(){if(e.loaded=!0,e.videoThumb){var t=document.querySelector(".thumb-list"),div=document.createElement("div");div.classList.add("video-thumb");var span=document.createElement("span");span.classList.add("flex");var i=document.createElement("i");i.classList.add("icon"),i.classList.add("play-icon");var img=document.createElement("img");img.onerror=function(){img.src=c.getThumbImageURL()},img.src=e.getImageURL(e.videoThumb),div.appendChild(img),span.appendChild(i),div.appendChild(span),t.appendChild(div),div.addEventListener("click",(function(){var e;c.activeId=null===(e=o)||void 0===e?void 0:e.length,c.imagePopup=!0,c.$emit("image-popup",c.imagePopup)}))}}),1e3)}));case 16:case"end":return t.stop()}}),t)})))()}},m=n(11),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail-image shimmer-wrapper"},[e.key?[t("client-only",[t("div",{staticClass:"hide-md mx-h-100",on:{mouseleave:function(t){e.showSliderMessage=!1},mouseover:function(t){e.showSliderMessage=!0},click:function(t){return t.preventDefault(),e.imagePopupOpen.apply(null,arguments)}}},[t("ProductZoomer",{ref:"productZoomer",staticClass:"mx-h-100",class:{"arrow-hide":!e.isArrowVisible},attrs:{"base-images":e.zoomImageList,"base-zoomer-options":e.zoomerOptions}})],1),e._v(" "),e.imagePopup?t("image-popup",{ref:"imagePopup",attrs:{title:e.title,product:e.product,"active-id":e.activeId,"no-scroll":!e.isSmallerDevice,"image-list":e.imageList,"stacked-on-responsive":!0},on:{"close-popup":e.closePopup,"add-to-wishlist":function(t){return e.$emit("add-to-wishlist")}}}):e._e(),e._v(" "),e.loaded?t("p",{staticClass:"mt-5 pb-15 center-text lh-30 hide-md"},[e.showSliderMessage?t("span",[e._v("\n            "+e._s(e.$t("productImage.extendedView"))+"\n          ")]):t("span",[e._v("\n            "+e._s(e.$t("productImage.rollOver"))+"\n          ")])]):e._e()],1)]:e._e(),e._v(" "),e.key?e._e():[t("div",{staticClass:"pleceholder-zoomer-base-container center-text"},[t("img",{staticClass:"preload-img",attrs:{src:e.getThumbImageURL(this.mainImage),alt:e.title,height:"100",width:"100"}})]),e._v(" "),e._m(0)]],2)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pleceholder-thumb-list"},[t("div",{staticClass:"responsive-image shimmer hide-sm"}),e._v(" "),t("div",{staticClass:"responsive-image shimmer hide-sm"}),e._v(" "),t("div",{staticClass:"responsive-image shimmer hide-sm"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ImagePopup:n(503).default})}}]);