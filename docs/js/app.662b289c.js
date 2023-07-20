(function(){"use strict";var e={418:function(e,a,t){var c=t(963),n=t(252);function i(e,a,t,c,i,s){const r=(0,n.up)("CafeList");return(0,n.wg)(),(0,n.j4)(r)}const s=e=>((0,n.dD)("data-v-2c0b3d2d"),e=e(),(0,n.Cn)(),e),r={class:"cafe-list"},f=s((()=>(0,n._)("h2",{class:"cafe-list__title"},"Cafe List",-1))),o={key:0,class:"selected-cafe"},l=s((()=>(0,n._)("h3",{class:"selected-cafe__title"},"Randomly Selected Cafe:",-1))),u={class:"cafes-grid"};function d(e,a,t,c,i,s){const d=(0,n.up)("CafeItem");return(0,n.wg)(),(0,n.iD)("div",r,[f,(0,n._)("button",{class:"cafe-list__button",onClick:a[0]||(a[0]=(...e)=>c.randomCafe&&c.randomCafe(...e))},"Get Random Cafe"),c.selectedCafe?((0,n.wg)(),(0,n.iD)("div",o,[l,(0,n.Wm)(d,{cafe:c.selectedCafe},null,8,["cafe"])])):(0,n.kq)("",!0),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.cafes,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,cafe:e,class:"cafe-item"},null,8,["cafe"])))),128))])])}var p=t(262),m=t(577);const v={class:"cafe-item"},_={class:"cafe-item__title"},h=["src"],w={key:1,class:"cafe-item__price"},k={key:2,class:"cafe-item__price"},g={key:3,class:"cafe-item__price"},b={key:4,class:"cafe-item__cuisine"},y={key:5,class:"cafe-item__distance"},C={key:6,class:"cafe-item__time"},D={key:7,class:"cafe-item__address"},O={key:8,class:"cafe-item__landmark"};function j(e,a,t,c,i,s){return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("h3",_,(0,m.zw)(t.cafe.name),1),t.cafe.photo?((0,n.wg)(),(0,n.iD)("img",{key:0,src:t.cafe.photo,alt:"Cafe Photo",class:"cafe-item__photo"},null,8,h)):(0,n.kq)("",!0),t.cafe.business_lunch&&t.cafe.price?((0,n.wg)(),(0,n.iD)("p",w," Price: "+(0,m.zw)(t.cafe.price),1)):t.cafe.business_lunch&&!t.cafe.price?((0,n.wg)(),(0,n.iD)("p",k," Price: No lunch available ")):((0,n.wg)(),(0,n.iD)("p",g," Price: No lunch available ")),t.cafe.cuisine?((0,n.wg)(),(0,n.iD)("p",b,"Cuisine: "+(0,m.zw)(t.cafe.cuisine),1)):(0,n.kq)("",!0),t.cafe.distance?((0,n.wg)(),(0,n.iD)("p",y,"Distance: "+(0,m.zw)(t.cafe.distance)+" meters",1)):(0,n.kq)("",!0),t.cafe.time?((0,n.wg)(),(0,n.iD)("p",C,"Time: "+(0,m.zw)(t.cafe.time)+" minutes",1)):(0,n.kq)("",!0),t.cafe.address?((0,n.wg)(),(0,n.iD)("p",D,"Address: "+(0,m.zw)(t.cafe.address),1)):(0,n.kq)("",!0),t.cafe.landmark?((0,n.wg)(),(0,n.iD)("p",O,"Landmark: "+(0,m.zw)(t.cafe.landmark),1)):(0,n.kq)("",!0)])}var q={props:{cafe:{type:Object,required:!0}}},z=t(744);const P=(0,z.Z)(q,[["render",j],["__scopeId","data-v-b4a47512"]]);var x=P,I={components:{CafeItem:x},setup(){const e=(0,p.iH)([]),a=(0,p.iH)(null),t=async()=>{try{const a=await fetch("https://bandaumnikov.ru/api/test/site/get-index"),t=await a.json();e.value=t.data}catch(a){console.error(a)}},c=()=>{if(e.value.length>0){const t=Math.floor(Math.random()*e.value.length);a.value=e.value[t]}};return t(),{cafes:e,selectedCafe:a,randomCafe:c}}};const L=(0,z.Z)(I,[["render",d],["__scopeId","data-v-2c0b3d2d"]]);var H=L,T={name:"App",components:{CafeList:H}};const Z=(0,z.Z)(T,[["render",i]]);var A=Z;(0,c.ri)(A).mount("#app")}},a={};function t(c){var n=a[c];if(void 0!==n)return n.exports;var i=a[c]={exports:{}};return e[c](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,c,n,i){if(!c){var s=1/0;for(l=0;l<e.length;l++){c=e[l][0],n=e[l][1],i=e[l][2];for(var r=!0,f=0;f<c.length;f++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](c[f])}))?c.splice(f--,1):(r=!1,i<s&&(s=i));if(r){e.splice(l--,1);var o=n();void 0!==o&&(a=o)}}return a}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[c,n,i]}}(),function(){t.d=function(e,a){for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,c){var n,i,s=c[0],r=c[1],f=c[2],o=0;if(s.some((function(a){return 0!==e[a]}))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(f)var l=f(t)}for(a&&a(c);o<s.length;o++)i=s[o],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},c=self["webpackChunkrest"]=self["webpackChunkrest"]||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))}();var c=t.O(void 0,[998],(function(){return t(418)}));c=t.O(c)})();
//# sourceMappingURL=app.662b289c.js.map