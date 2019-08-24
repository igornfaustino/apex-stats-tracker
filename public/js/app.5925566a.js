(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"271e":function(t,e,a){},"28d0":function(t,e,a){"use strict";var n=a("872e"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("a65d"),o=a.n(r),i=a("1881"),s=a.n(i),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header"),a("router-view")],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{attrs:{src:t.image}})])},d=[],f={name:"Header",data:function(){return{image:a("cf05")}}},g=f,p=(a("28d0"),a("2877")),m=Object(p["a"])(g,u,d,!1,null,"43d64f12",null),v=m.exports,h={name:"app",components:{Header:v}},b=h,_=(a("034f"),Object(p["a"])(b,l,c,!1,null,null,null)),y=_.exports,L=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"search"},[a("h1",[t._v("Track Player Stats")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[t._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.platform=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[t._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[t._v("Xbox")]),a("option",{attrs:{value:"origin"}},[t._v("Origin")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[t._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gamertag,expression:"gamertag"}],attrs:{type:"text",id:"gamertag",name:"gamertag",placeholder:"Origin ID, Xbox live gamertag, PSN ID, etc"},domProps:{value:t.gamertag},on:{input:function(e){e.target.composing||(t.gamertag=e.target.value)}}})]),t._m(0)])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])}],k={name:"Search",data:function(){return{platform:"origin",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){if(!this.gamertag)return this.$toasted.show("Please enter a gamertag",{duration:3e3,icon:"exclamation-circle"});this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag))}}},C=k,O=Object(p["a"])(C,x,w,!1,null,null,null),P=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.loading?a("div",{staticClass:"loading-area"},[a("Loader")],1):t._e(),t.error?a("div",[a("h1",[t._v(t._s(t.error))]),a("router-link",{attrs:{to:"/"}},[t._v("Go back")])],1):t._e(),t.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"gamertag"},[a("img",{staticClass:"platform-avatar",attrs:{src:t.profileData.platformInfo.avatarUrl}}),t._v("\n\t\t\t"+t._s(t.profileData.platformInfo.platformUserId)+"\n\t\t")]),a("div",{staticClass:"grid"},[a("div",[a("ul",[a("li",[a("h4",[t._v("Selected Legend")]),a("p",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.profileData.segments[t.selectedLegendIdx].metadata.name)+"\n\t\t\t\t\t\t")])]),t._l(t.profileData.segments[t.selectedLegendIdx].stats,function(e){return a("li",{key:e.displayname},[a("h4",[t._v(t._s(e.displayName))]),a("p",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.displayValue)+"\n\t\t\t\t\t\t\t"),a("span",[t._v("("+t._s(e.percentile)+"%)")])])])})],2)]),a("div",{staticClass:"legend-image"},[a("img",{attrs:{src:t.profileData.segments[t.selectedLegendIdx].metadata.tallImageUrl}}),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.showModal}},[t._v("\n\t\t\t\t\tChoose other legend\n\t\t\t\t")])])]),a("router-link",{attrs:{to:"/"}},[t._v("Go back")])],1):t._e(),a("modal",{attrs:{name:"legends-picker",width:800,height:500,adaptive:!0}},[a("LegendPicker",{attrs:{legends:t.legends,activeLegend:t.selectedLegendIdx-1},on:{legend:t.setLegend}})],1)],1)},$=[],D=(a("a481"),a("28a5"),a("96cf"),a("3b8d")),I=a("bc3a"),S=a.n(I),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"})},M=[],N={name:"Loader"},R=N,T=(a("e9ff"),Object(p["a"])(R,E,M,!1,null,"7429eb29",null)),U=T.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"legend-picker"},[a("div",{staticClass:"picker"},[a("div",{on:{click:t.goLeft}},[a("i",{staticClass:"fas fa-chevron-left icon"})]),a("img",{staticClass:"legend-img",attrs:{src:t.legends[t.actualLegend].metadata.imageUrl}}),a("div",{on:{click:t.goRight}},[a("i",{staticClass:"fas fa-chevron-right icon"})])]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.selectLegend}},[t._v("\n\t\t"+t._s(t.legends[t.actualLegend].metadata.name)+"\n\t")])])},H=[],J={name:"LegendPicker",props:["legends","activeLegend"],data:function(){return{actualLegend:this.activeLegend}},methods:{goLeft:function(){this.actualLegend=this.actualLegend>0?this.actualLegend-1:this.legends.length-1},goRight:function(){this.actualLegend=(this.actualLegend+1)%this.legends.length},selectLegend:function(){this.$emit("legend",this.actualLegend+1)}}},X=J,A=(a("f71c"),Object(p["a"])(X,G,H,!1,null,"e1dcbd12",null)),V=A.exports,q={name:"Profile",components:{Loader:U,LegendPicker:V},data:function(){return{loading:!1,error:null,profileData:null,selectedLegendIdx:1}},computed:{legends:function(){return this.profileData?this.profileData.segments.slice(1):[]}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var t=Object(D["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,S.a.get("/api/v1/profile/".concat(this.$route.params.platform,"/").concat(this.$route.params.gamertag));case 4:e=t.sent,this.profileData=e.data.data,console.log(this.profileData),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),a=t.t0.response.data.split(":"),this.error=a.length>1?a[1].replace(/"/g,""):a[0];case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[1,9,13,16]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{showModal:function(){this.$modal.show("legends-picker",{width:1e3})},teste:function(){alert("owaaaaaaaaaaa")},setLegend:function(t){this.$modal.hide("legends-picker"),this.selectedLegendIdx=t}},events:{legend:function(t){alert(t)}}},z=q,B=(a("db59"),Object(p["a"])(z,j,$,!1,null,"56026190",null)),F=B.exports;n["a"].use(L["a"]);var K=new L["a"]({mode:"history",routes:[{path:"/",name:"search",component:P},{path:"/profile/:platform/:gamertag",name:"profile",component:F}]});n["a"].config.productionTip=!1,n["a"].use(o.a,{iconPack:"fontawesome"}),n["a"].use(s.a),new n["a"]({router:K,render:function(t){return t(y)}}).$mount("#app")},5816:function(t,e,a){},"64a9":function(t,e,a){},7379:function(t,e,a){},"872e":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.1c0e46e5.png"},db59:function(t,e,a){"use strict";var n=a("5816"),r=a.n(n);r.a},e9ff:function(t,e,a){"use strict";var n=a("271e"),r=a.n(n);r.a},f71c:function(t,e,a){"use strict";var n=a("7379"),r=a.n(n);r.a}});
//# sourceMappingURL=app.5925566a.js.map