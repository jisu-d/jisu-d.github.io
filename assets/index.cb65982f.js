import{p as d,l as o,j as a,F as l,a as e,c as h,R as m}from"./jsx-runtime.8158af12.js";const i=JSON.parse(localStorage.getItem("obj")),v=()=>i?!(i.login>0):!0;v()&&(location.href="/page/");const u=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],f=await(await fetch(`${d}/comciganData?school=${o.schoolname}&Year=${o.year}&class=${o.class}&zeroOne=0`)).json(),p=(n,t)=>a("tr",{children:[e("td",{children:t+1}),n.map((r,c)=>r?a("td",{children:[r[0],e("br",{}),r[1]]},c+1+t*6):e("td",{},c+1+t*6))]},t*6),C=n=>{const t=[];for(let r=0;r<n;r++)t.push(p(u.map(c=>f[c][r]),r));return t},b=()=>{const n=[];return u.map((t,r)=>n.push(e("td",{children:t},`first-${r}`))),a("tr",{children:[e("td",{}),n]})};function D(n){return a(l,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:a("tbody",{children:[b(),C(n.size)]})})]})}function g(){return a(l,{children:[a("div",{className:"school-container",children:[e("div",{children:i.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:i.year+"\uD559\uB144 "}),e("span",{children:i.class+"\uBC18"})]})]})}function w(){location.href="/page/"}const s=await(await fetch(`${d}/cookInfo?school=${o.schoolname}&getnum=5`)).json();function B(){return a(l,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:N()})]})}const N=()=>{console.log(s);const n=[];return n.push(e("div",{children:s})),n};function $(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : "}),e("br",{}),e("span",{children:"version 0.5"})]})}const k=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();function x(){return a("div",{children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{children:k[1].respond})]})}const A=document.getElementById("app");h.createRoot(A).render(e(m.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:w,children:e(g,{})})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(D,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(B,{})}),e("div",{className:"myoungEon-container box_shadow",children:e(x,{})}),e("div",{className:"side-comment-container box_shadow",children:e($,{})})]})})}));
