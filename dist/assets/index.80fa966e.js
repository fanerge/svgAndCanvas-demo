import{r as e,o as t,c as n,a as r,b as o,d as s}from"./vendor.59127c8b.js";const a={setup:r=>(r,o)=>{const s=e("router-view");return t(),n(s)}};let i;const m={},p=function(e,t){if(!t||0===t.length)return e();if(void 0===i){const e=document.createElement("link").relList;i=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":i,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},c=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>p((()=>import("./Home.8db49ff9.js")),["assets/Home.8db49ff9.js","assets/vendor.59127c8b.js"])},{path:"/CanvasTime",name:"CanvasTime",component:()=>p((()=>import("./canvas-time.62fc5a2e.js")),["assets/canvas-time.62fc5a2e.js","assets/index.870fa76e.js","assets/vendor.59127c8b.js"])},{path:"/SvgLight",name:"SvgLight",component:()=>p((()=>import("./svg-light.6a5733a0.js")),["assets/svg-light.6a5733a0.js","assets/svg-light.61f0bf59.css","assets/index.870fa76e.js","assets/vendor.59127c8b.js"])},{path:"/SvgSpring",name:"SvgSpring",component:()=>p((()=>import("./svg-spring.87180c66.js")),["assets/svg-spring.87180c66.js","assets/svg-spring.8a66c234.css","assets/vendor.59127c8b.js","assets/index.870fa76e.js"])}];var d=r({history:o(),routes:c});const l=s(a);l.use(d),l.mount("#app");
