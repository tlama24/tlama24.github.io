(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da79976a"],{"0e8f":function(t,e,i){"use strict";i("db6d");var s=i("e8f2");e["a"]=Object(s["a"])("flex")},"253d":function(t,e,i){},"40cf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-card",{attrs:{dark:""}},[s("v-img",{staticClass:"grey lighten-2",attrs:{height:"400",width:"100%",src:i("bf30")}},[s("v-layout",{attrs:{"fill-height":"","align-center":""}},[s("v-flex",{attrs:{"offset-md3":""}},[s("h1",{staticClass:"font-weight-light",staticStyle:{"font-size":"5rem"}},[t._v("\n          Natural Frontier Market\n        ")]),s("div",{staticClass:"subheading text-uppercase pl-2 mb-4"},[t._v("\n          eat fresh, organic, and healthy\n        ")]),s("v-btn",{staticStyle:{"font-size":"12px"},attrs:{color:"primary",depressed:"",round:"",href:"https://www.mercato.com/shop/natural-frontier-market-long-island-city"}},[t._v("\n          Order online for exclusive deals with free shipping\n        ")])],1)],1)],1)],1)},a=[],r=i("2877"),n=i("6544"),c=i.n(n),o=i("8336"),l=i("0e8f"),h=i("adda"),d=i("a722"),u={},g=Object(r["a"])(u,s,a,!1,null,null,null);e["default"]=g.exports;c()(g,{VBtn:o["a"],VFlex:l["a"],VImg:h["a"],VLayout:d["a"]})},"4c34":function(t,e,i){},a722:function(t,e,i){"use strict";i("db6d");var s=i("e8f2");e["a"]=Object(s["a"])("layout")},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bf"),a=i("58df"),r=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=r,c=i("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},bf30:function(t,e,i){t.exports=i.p+"img/fruits.414745c0.jpg"}}]);
//# sourceMappingURL=chunk-da79976a.3e640aa0.js.map