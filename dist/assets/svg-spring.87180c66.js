import{i as t,j as e,k as s,e as n,f as r,p as a,g as i,o,c as l,h as c,l as u,v as m,F as d,m as h,w as v,t as y}from"./vendor.59127c8b.js";import{r as p,a as x}from"./index.870fa76e.js";class g{static fromPoints(t,e){return new g(e.x-t.x,e.y-t.y)}constructor(t=0,e=0){this.x=t,this.y=e}square(){const{x:t,y:e}=this;return t*t+e*e}length(){return Math.sqrt(this.square())}add(t){const{x:e,y:s}=this;return new g(e+t.x,s+t.y)}minus(){const{x:t,y:e}=this;return new g(t-q.x,e-q.y)}multipy(t){const{x:e,y:s}=this;return new g(e*t,s*t)}normalize(t){return t=null!=t?t:1,this.multipy(t/this.length())}}let f=[],w=null;let b=0;function A(t){let e=t-b;if(e>=20){let n=e/200;f.forEach((t=>{var e=new g;f.forEach((s=>{if(t!==s){var n=g.fromPoints(t.s,s.s),r=n.length()-300;e=e.add(n.normalize(.05*r))}})),t.a=e,t.v=t.v.add(t.a.multipy(n)).multipy(.98),t.s=t.s.add(t.v.multipy(n)),t.circle.setAttribute("cx",t.s.x),t.circle.setAttribute("cy",t.s.y)}));const r=document.getElementById("links");var s=[];f.forEach((t=>{var e=t.s;f.forEach((n=>{if(t!==n){var r=n.s;s=s.concat([`M ${e.x} ${e.y}`,`L ${r.x} ${r.y}`])}})),r.setAttribute("d",s.join(","))})),b=t}w=requestAnimationFrame(A)}const E={name:"svg-spring",setup(a){const i=t(Array.from({length:19},((t,e)=>e+2))),o=e(6);function l(){let t=document.getElementById("ball-box"),e=document.getElementById("links");t.innerHTML="",e.setAttribute("d",""),function(t=2){const e=document.getElementById("ball-box");f=Array.from({length:t},((t,s)=>{var n=document.createElementNS("http://www.w3.org/2000/svg","circle"),r=p(-300,300),a=p(-300,300),i=x();return n.setAttribute("cx",r),n.setAttribute("cy",a),n.setAttribute("r",10),n.setAttribute("fill",i),e.appendChild(n),{circle:n,color:i,name:s,s:new g(r,a),v:new g(0,0),a:new g(0,0)}})),console.log(f)}(o.value),w=requestAnimationFrame(A)}return s(o,((t,e)=>{l()})),n((()=>{l()})),r((()=>{cancelAnimationFrame(w)})),{options:i,num:o}}},k=v();a("data-v-71845950");const B={class:"lignth-box"},I={class:"form"},M=c("span",null,"弹簧自平衡物理模型，选择小球个数",-1),j=c("svg",{id:"svg",width:"100%",height:"100%",viewBox:"-400 -400 800 800",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[c("g",{id:"ball-box"}),c("path",{id:"links",stroke:"black"})],-1);i();const F=k(((t,e,s,n,r,a)=>(o(),l("div",B,[c("div",I,[M,u(c("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.num=t)},[(o(!0),l(d,null,h(n.options,(t=>(o(),l("option",{key:t,value:t},y(t),9,["value"])))),128))],512),[[m,n.num]])]),j]))));E.render=F,E.__scopeId="data-v-71845950";export{E as default};
