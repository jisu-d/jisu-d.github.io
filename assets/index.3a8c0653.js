import{j as a,F as u,a as e,r as o,c as v,R as C}from"./jsx-runtime.4063c5da.js";import{a as f,s as g,p as B,l as y}from"./proxy.ced3beb3.js";const d=JSON.parse(localStorage.getItem("obj")),D=()=>d?!(d.login>0):!0;D()&&f(g);function w(){return a(u,{children:[a("div",{className:"school-container",children:[e("div",{children:d.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:d.year+"\uD559\uB144 "}),e("span",{children:d.class+"\uBC18"})]})]})}function x(){location.href="/login/"}function N(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.5"})]})}function $(){let[t,n]=o.exports.useState();const i=async()=>{const r=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();n(e(u,{children:r[1].respond}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),i()},[]),a("div",{children:[a("div",{className:"myou-container",children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{className:"arrow"})]}),e("div",{children:t})]})}function _(){location.href="/myounEon/"}function b(){let t=0,n=0,[i,r]=o.exports.useState();const s=async()=>{const c=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();r(a(u,{children:[a("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${c?.weather[0].icon}@2x.png`}),a("div",{children:[Math.floor(c?.main.temp),"\xB0C"]})]}),a("div",{className:"small_info",children:[a("div",{children:[a("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(c?.main.feels_like),"\xB0"]}),a("div",{children:[Math.floor(c?.main.temp_max),"\xB0/",Math.floor(c?.main.temp_min),"\xB0"]})]}),a("div",{children:[a("div",{children:["\uC2B5\uB3C4 ",c?.main.humidity,"%"]}),e("div",{children:c?.weather[0].description})]})]})]}))};return o.exports.useEffect(()=>{r(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(l=>{t=l.coords.latitude,n=l.coords.longitude,s()})},[]),e("div",{className:"container",children:i})}const h=t=>{const n=new Date;n.setDate(n.getDate()+Number(t));const i=`${n.getFullYear()}`.padStart(2,"0"),r=`${n.getMonth()+1}`.padStart(2,"0"),s=`${n.getDate()}`.padStart(2,"0");return`${i}${r}${s}`},S=await(await fetch(`${B}/schoolSchedule?school=${y.schoolname}&startDay=${h(0)}&lastDay=${h(200)}`)).json();function k(){let[t,n]=o.exports.useState(),i=[];const r=()=>{i=[],S.forEach(s=>{const l=new Date,m=new Date(`${s.day.start.slice(0,4)}-${s.day.start.slice(4,6)}-${s.day.start.slice(6,8)}`).getTime()-l.getTime(),p=Math.floor(m/(1e3*60*60*24));i.push(a("div",{children:[a("span",{children:[s.eventName," "]}),a("span",{children:["D-",p+1]}),e("br",{})]}))}),n(e(u,{children:i}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a("div",{children:[e("div",{className:"title d",children:"\uD559\uC0AC\uC77C\uC815 D-Day"}),e("div",{className:"D-day-container",children:t})]})}const E=document.getElementById("app");v.createRoot(E).render(e(C.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:x,children:e(w,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(b,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:"\uC11C\uBC84 \uBB38\uC81C\uB85C \uC810\uAC80\uC911 \uC785\uB2C8\uB2E4..."}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:"\uC11C\uBC84 \uBB38\uC81C\uB85C \uC810\uAC80\uC911 \uC785\uB2C8\uB2E4..."}),e("div",{className:"school_schedule box_shadow",children:e(k,{})}),e("div",{className:"myoungEon-container box_shadow",onClick:_,children:e($,{})}),e("div",{className:"side-comment-container box_shadow",children:e(N,{})})]})})}));
