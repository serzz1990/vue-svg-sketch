webpackJsonp([2],{11:function(t,e){},14:function(t,e,i){"use strict";e.a={width:300,height:300,minDistance:3,strokeWidth:3,stroke:"#ff0028",disabled:!1}},16:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),n=i.n(s),h=i(11);i.n(h);e.default=n.a},17:function(t,e,i){"use strict";var s=i(22),n=i.n(s),h=i(23),r=i.n(h),o=i(35),a=(i.n(o),i(18)),u=i(14),d=function(){function t(e,s){return n()(this,t),this.element=e,this.options=i.i(o.assign)({},u.a,s),this._temp={},this.$parent=document.createElement("div"),this.$svg=this.createSvg(this.options),this.is_touch="ontouchstart"in document.documentElement,this.$parent.appendChild(this.$svg),e.appendChild(this.$parent),this.$parent.classList.add("svg-sketch-wrap"),this.$parent.style.display="inline-block",this.listen(),this}return r()(t,[{key:"listen",value:function(){return this.is_touch?(this.element.addEventListener("touchstart",this.beginDraw.bind(this)),this.element.addEventListener("touchmove",this.drawMove.bind(this)),document.addEventListener("touchend",this.endDraw.bind(this))):(this.element.addEventListener("mousedown",this.beginDraw.bind(this)),this.element.addEventListener("mousemove",this.drawMove.bind(this)),document.addEventListener("mouseup",this.endDraw.bind(this))),this}},{key:"createSvg",value:function(t){var e=t.width,i=t.height,s=t.version,n=void 0===s?1.1:s,h=document.createElementNS("http://www.w3.org/2000/svg","svg");return h.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),h.setAttribute("version",n),h.setAttribute("width",e),h.setAttribute("height",i),h}},{key:"createPath",value:function(t){var e=t.strokeWidth,i=t.stroke,s=t.d,n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("stroke-width",e),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke",i),n.setAttribute("fill","none"),s&&n.setAttribute("d",s),n}},{key:"setOffset",value:function(){this._temp.offsetLeft=this.$parent.offsetLeft||0,this._temp.offsetTop=this.$parent.offsetTop||0}},{key:"getCoordsByShiftKey",value:function(t,e){if(e){if(this._temp.line=!0,this._temp.lineStartCoords){if(!this._temp.lineDirection){var s=i.i(a.a)(this._temp.lineStartCoords,t);s>10&&(this._temp.lineDirection=i.i(a.b)(this._temp.lineStartCoords,t))}}else this._temp.lineStartCoords=t;"x"===this._temp.lineDirection?t.y=this._temp.prevCoords.y:"y"===this._temp.lineDirection&&(t.x=this._temp.prevCoords.x)}else this._temp.line=!1,this._temp.lineDirection=null,this._temp.lineStartCoords=null;return t}},{key:"beginDraw",value:function(t){if(!this.options.disabled){if(t.targetTouches){if(t.targetTouches.length>1)return;t.preventDefault()}this.setOffset(),this._temp.drawing=!0;var e=this.getCoords(t);e=this.getCoordsByShiftKey(e,t.shiftKey),this.$path=this.createPath(this.options),this.$svg.appendChild(this.$path),this._temp.path="M"+e.x+","+e.y+"l0,0",this.$path.setAttribute("d",this._temp.path),this._temp.prevCoords=e}}},{key:"drawMove",value:function(t){if(!this.options.disabled&&this._temp.drawing){if(t.targetTouches){if(t.targetTouches.length>1)return;t.preventDefault()}var e=this.getCoords(t);i.i(a.a)(this._temp.prevCoords,e)>this.options.minDistance&&(e=this.getCoordsByShiftKey(e,t.shiftKey),this._temp.path+="l"+(e.x-this._temp.prevCoords.x)+","+(e.y-this._temp.prevCoords.y),this._temp.prevCoords=e,this.$path.setAttribute("d",this._temp.path))}}},{key:"endDraw",value:function(){this.options.disabled||(this._temp.drawing=!1,this._temp.path="",this._temp.offsetLeft=0,this._temp.offsetTop=0,this._temp.lineDirection=null,this._temp.line=!1,this._temp.lineStartCoords=null)}},{key:"back",value:function(){this.$svg.children&&this.$svg.children.length&&this.$svg.children[this.$svg.children.length-1].remove()}},{key:"clean",value:function(){this.$svg&&(this.$svg.innerHTML="")}},{key:"getCoords",value:function(t){var e=i.i(a.c)(t);return e.x-=this._temp.offsetLeft,e.y-=this._temp.offsetTop,e}},{key:"strokeWidth",set:function(t){this.options.strokeWidth=t}},{key:"stroke",set:function(t){this.options.stroke=t}},{key:"disabled",set:function(t){this.options.disabled=t}},{key:"sketchJson",set:function(t){2==t.sketchVersion?this.sketchJsonV3=t:this.sketchJsonV1=t},get:function(){return i.i(a.d)(this.$svg)}},{key:"sketchJsonV3",set:function(t){var e=this,i=this.createSvg({width:t.width,height:t.height,version:t.version}),s=t.paths||[],n="";s.forEach(function(t){var i=e.createPath({strokeWidth:t.sw,stroke:t.s,d:t.d});n+=i.outerHTML}),i.innerHTML=n}},{key:"sketchJsonV1",set:function(t){var e=this,i=this.createSvg({width:t.width,height:t.height}),s=t.paths||[],n="";s.forEach(function(t){var i=e.createPath({d:t,strokeWidth:u.a.strokeWidth,stroke:u.a.stroke});n+=i.outerHTML}),i.innerHTML=n}},{key:"sketchSvg",get:function(){return this.$svg.outerHTML}}]),t}();e.a=d},18:function(t,e,i){"use strict";function s(t){var e={type:"svg",version:1.1,sketchVersion:2,width:t.getAttribute("width"),height:t.getAttribute("height"),paths:[]};if(!t||"[object SVGSVGElement]"!==t.toString())return e;var i=t.children.length;if(i)for(var s=0;i>s;s++){var n=t.children[s];e.paths.push({d:n.getAttribute("d"),s:n.getAttribute("stroke"),sw:n.getAttribute("stroke-width")})}return e}function n(t){var e={x:0,y:0};return t.changedTouches?(e.x=t.changedTouches[0].pageX,e.y=t.changedTouches[0].pageY):(e.x=t.layerX,e.y=t.layerY),e}function h(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))}function r(t,e){return Math.abs(t.x-e.x)<Math.abs(t.y-e.y)?"y":"x"}e.d=s,e.c=n,e.a=h,e.b=r},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(17);e.default={name:"svg-sketch",props:{disabled:Boolean,size:{type:[String,Number],default:3},color:{type:String,default:"red"},width:{type:[String,Number],default:300},height:{type:[String,Number],default:300}},data:function(){return{sketch:null}},mounted:function(){this.sketch=new s.a(this.$el,{width:this.width,height:this.height,stroke:this.color,strokeWidth:this.size})},methods:{revert:function(){this.sketch.back()},clean:function(){this.sketch.clean()},getJSON:function(){return this.sketch.sketchJson}},watch:{disabled:function(t){this.sketch.disabled=t},size:function(t){this.sketch.strokeWidth=t},color:function(t){this.sketch.stroke=t}}}},3:function(t,e,i){var s=i(8)(i(20),i(40),null,null,null);t.exports=s.exports},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"svg-sketch"})},staticRenderFns:[]}}},[16]);
//# sourceMappingURL=vue-svg-sketch.868a03b377179f1d9f09.js.map