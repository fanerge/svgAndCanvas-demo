import{a as t}from"./index.470b8426.js";import{e,p as r,g as o,o as l,c as i,w as s,h as a}from"./vendor.da6d4c39.js";function n(){var e=document.getElementById("star"),r=document.getElementById("star-group");Array.from({length:500}).forEach((()=>{let o=(l=e,(i=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",`#${l.id}`),i);var l,i;o.setAttribute("fill",`rgba(255, 255, 255, ${Math.random()})`),o.setAttribute("transform",`translate(${t(-400,400)}, ${t(-300,50)}) \n        scale(${Math.random()})`),r.appendChild(o)}))}document.getElementById("svg");const c={name:"svg-light",setup(t){e((()=>{n()}))}},d=s();r("data-v-5ba0cb67");const f={class:"lignth-box"},p=a("svg",{id:"svg",width:"100%",height:"100%",viewBox:"-400 -300 800 600",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[a("defs",null,[a("polygon",{id:"star",points:"0 -10, 2 -2, 10 0, 2 2, 0 10, -2 2, -10 0, -2 -2"})]),a("g",{id:"real"},[a("g",{id:"title"},[a("text",{x:"30",y:"15","font-size":"12px",fill:"white"},"星空、灯塔、海面、倒影")]),a("g",{id:"star-group"}),a("g",{id:"moon-group"},[a("mask",{id:"moon-mask"},[a("circle",{cx:"-250",cy:"-150",r:"100",fill:"white"}),a("circle",{cx:"-200",cy:"-200",r:"100",fill:"black"})]),a("circle",{cx:"-250",cy:"-150",r:"100",fill:"yellow",mask:"url(#moon-mask)"})]),a("g",{id:"light-tower",transform:"translate(250, 0)"},[a("defs",null,[a("linearGradient",{id:"tower",x1:"0",y1:"0",x2:"1",y2:"0"},[a("stop",{offset:"0","stop-color":"#999"}),a("stop",{offset:"1","stop-color":"#333"})]),a("radialGradient",{id:"light",cx:"0.5",cy:"0.5",r:"0.5"},[a("stop",{offset:"0","stop-color":"rgba(255, 255, 255, 0.8)"}),a("stop",{offset:"1","stop-color":"rgba(255, 255, 255, 0)"})]),a("clipPath",{id:"light-clip"},[a("circle",{x:"0",y:"0",r:"3",fill:"#fff"}),a("polygon",{points:"0 0, -400 -15, -400 15",fill:"rgba(255, 0, 0, 0.5)"},[a("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0",to:"360",dur:"10s",repeatCount:"indefinite"})])])]),a("polygon",{points:"0 0, 5 50, -5 50",fill:"url(#tower)"}),a("ellipse",{cx:"0",cy:"0",rx:"300",ry:"100",fill:"url(#light)","clip-path":"url(#light-clip)"})])]),a("line",{x1:"-400",y1:"50",x2:"400",y2:"50",stroke:"white","stroke-width":".3"}),a("g",{id:"reflect",mask:"url(#reflect-mask)"},[a("defs",null,[a("linearGradient",{id:"fade",x1:"0",y1:"0",x2:"0",y2:"1"},[a("stop",{offset:"0","stop-color":"rgba(255, 255, 255, 0.6)"}),a("stop",{offset:"0.5","stop-color":"rgba(255, 255, 255, 0.1)"})]),a("mask",{id:"reflect-mask"},[a("rect",{x:"-400",y:"0",width:"800",height:"300",fill:"url(#fade)"})])]),a("use",{"xlink:href":"#real",transform:"scale(1, -1) translate(0, -100)"})])],-1);o();const g=d(((t,e,r,o,s,a)=>(l(),i("div",f,[p]))));c.render=g,c.__scopeId="data-v-5ba0cb67";export{c as default};
