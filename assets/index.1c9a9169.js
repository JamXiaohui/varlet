import{R as v}from"./index.f8492b74.js";import{A as f}from"./AppType.6775b756.js";import{c as l}from"./index.48ee5316.js";import{b as k,w as b}from"./utils.1735a57b.js";import{u as h,a as m,_ as C,b as x,c as F}from"./en-US.628e0d34.js";import{_ as U}from"./elevation.229458c1.js";import{C as g,e as S,f as B,o as t,c,i as n,j as p,w as u,m as a,t as o,F as N}from"./vendor.49f89f0d.js";import"./elements.92736b4e.js";import"./shared.506a394a.js";var w={click:"\u70B9\u51FB",basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",disabledStatus:"\u7981\u7528\u72B6\u6001"},y={click:"Click",basicUsage:"Basic Usage",customColor:"Custom Color",disabledStatus:"Disabled Status"};const{add:_,use:A,pack:z,packs:X,merge:Y}=h(),D=s=>{F(s),A(s)};m("zh-CN",C);m("en-US",x);_("zh-CN",w);_("en-US",y);const E={name:"RippleExample",components:{AppType:f},directives:{Ripple:v},setup(){const s=l.touchmoveForbid;return k(d=>{d==="pc"&&(l.touchmoveForbid=!1)}),b(D),g(()=>{l.touchmoveForbid=s}),{pack:z}}},R={class:"block var-elevation--2"},T={class:"block var-elevation--2"},L={class:"block var-elevation--2"};function V(s,d,j,e,I,P){const i=S("app-type"),r=B("ripple");return t(),c(N,null,[n(i,null,{default:p(()=>[a(o(e.pack.basicUsage),1)]),_:1}),u((t(),c("div",R,[a(o(e.pack.click),1)])),[[r]]),n(i,null,{default:p(()=>[a(o(e.pack.customColor),1)]),_:1}),u((t(),c("div",T,[a(o(e.pack.click),1)])),[[r,{color:"#2979ff"}]]),n(i,null,{default:p(()=>[a(o(e.pack.disabledStatus),1)]),_:1}),u((t(),c("div",L,[a(o(e.pack.click),1)])),[[r,{disabled:!0}]])],64)}var Z=U(E,[["render",V],["__scopeId","data-v-f5e05bac"]]);export{Z as default};
