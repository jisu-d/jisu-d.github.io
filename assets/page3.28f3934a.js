import{r as c,j as r,a as e,F as o,c as h,R as D}from"./jsx-runtime.4063c5da.js";const g=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];function i(n){const a=new Date(n.getFullYear(),n.getMonth(),0).getDate();console.log(a)}const m=()=>{const n=[];return g.map((a,t)=>n.push(e("td",{children:a},`first-${t}`))),r("tr",{children:[e("td",{}),n]})};function p(){let[n,a]=c.exports.useState(),[t,l]=c.exports.useState(new Date);const s=()=>{a(r(o,{children:[r("div",{className:"heder",children:[e("button",{onClick:d,children:"\u2039"}),r("div",{className:"Day",children:[t.getFullYear(),"\uB144 ",t.getMonth()+1,"\uC6D4 ",t.getDate(),"\uC77C"]}),e("button",{onClick:u,children:"\u203A"})]}),e("div",{className:"calender-div",children:e("table",{children:e("tbody",{children:m()})})})]}))},d=()=>{l(new Date(t.setMonth(t.getMonth()-1))),s(),i(t)},u=()=>{l(new Date(t.setMonth(t.getMonth()+1))),s(),i(t)};return c.exports.useEffect(()=>{a(r("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),s()},[]),e(o,{children:n})}const C=document.getElementById("app");h.createRoot(C).render(e(D.StrictMode,{children:e("main",{children:e(p,{})})}));
