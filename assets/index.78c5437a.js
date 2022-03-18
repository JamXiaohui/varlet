var C=Object.defineProperty,U=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,l,u)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,V=(e,l)=>{for(var u in l||(l={}))g.call(l,u)&&v(e,u,l[u]);if(p)for(var u of p(l))w.call(l,u)&&v(e,u,l[u]);return e},f=(e,l)=>U(e,b(l));import{A as F}from"./AppType.6775b756.js";import{S as z}from"./index.691cfac8.js";import{d as A}from"./index.9b1139e6.js";import{u as h,a as _,_ as E,b as N,c as S}from"./en-US.628e0d34.js";import{w as y,a as B}from"./utils.1735a57b.js";import{_ as D}from"./elevation.229458c1.js";import{q as L,$ as T,e as c,o as j,c as q,i as o,j as r,a as m,F as I,m as n,t as i}from"./vendor.49f89f0d.js";import"./components.721843ff.js";import"./shared.506a394a.js";import"./provide.053d917d.js";import"./index.9e43ebc8.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./elements.92736b4e.js";var M={basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",notAvailable:"\u4E0D\u53EF\u7528",size:"\u4E0D\u540C\u5927\u5C0F",loading:"\u52A0\u8F7D\u72B6\u6001",validateValue:"\u503C\u7684\u6821\u9A8C",text:"\u662F\u5426\u6253\u5F00\u5F00\u5173",state:"\u9519\u8BEF\uFF01"},R={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"};const{add:k,use:W,pack:G,packs:Ve,merge:fe}=h(),H=e=>{S(e),W(e)};_("zh-CN",E);_("en-US",N);k("zh-CN",M);k("en-US",R);const J={name:"SwitchExample",components:{VarSwitch:z,AppType:F},setup(){const e=L({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return y(H),B(A),f(V({},T(e)),{pack:G})}},K={class:"var-switch__example-block"},O={class:"var-switch__example-block"},P={class:"var-switch__example-block"},Q={class:"var-switch__example-block"},X={class:"var-switch__example-block"};function Y(e,l,u,s,Z,$){const d=c("app-type"),t=c("var-switch");return j(),q(I,null,[o(d,null,{default:r(()=>[n(i(s.pack.basicUsage),1)]),_:1}),m("div",K,[o(t,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),o(d,null,{default:r(()=>[n(i(s.pack.notAvailable),1)]),_:1}),m("div",O,[o(t,{modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value1=a),disabled:""},null,8,["modelValue"]),o(t,{modelValue:e.value1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value1=a),readonly:""},null,8,["modelValue"])]),o(d,null,{default:r(()=>[n(i(s.pack.customColor),1)]),_:1}),m("div",P,[o(t,{modelValue:e.value2,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value2=a),ripple:!1},null,8,["modelValue"]),o(t,{modelValue:e.value2,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value2=a),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),o(d,null,{default:r(()=>[n(i(s.pack.size),1)]),_:1}),m("div",Q,[o(t,{modelValue:e.value3,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value3=a),size:"15"},null,8,["modelValue"]),o(t,{modelValue:e.value3,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value3=a)},null,8,["modelValue"]),o(t,{modelValue:e.value3,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value3=a),size:"25"},null,8,["modelValue"])]),o(d,null,{default:r(()=>[n(i(s.pack.loading),1)]),_:1}),m("div",X,[o(t,{"model-value":!0,loading:""}),o(t,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),o(d,null,{default:r(()=>[n(i(s.pack.validateValue),1)]),_:1}),o(t,{modelValue:e.value4,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value4=a),rules:[a=>a===!0||s.pack.state]},null,8,["modelValue","rules"])],64)}var ce=D(J,[["render",Y],["__scopeId","data-v-5b98a314"]]);export{ce as default};
