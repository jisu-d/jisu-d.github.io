import{r as o,j as a,a as e,F as d,c as N,R as $}from"./jsx-runtime.4063c5da.js";import{a as w,s as y,p as v,l as u}from"./proxy.ced3beb3.js";const m=JSON.parse(localStorage.getItem("obj")),x=()=>m?!(m.login>0):!0;x()&&w(y);const C=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],S=await(await fetch(`${v}/comciganData?school=${u.schoolname}&Year=${u.year}&class=${u.class}&zeroOne=0`)).json(),b=(i,t)=>a("tr",{children:[e("td",{children:t+1}),i.map((n,r)=>n?a("td",{children:[n[0],e("br",{}),n[1]]},r+1+t*6):e("td",{},r+1+t*6))]},t*6),B=i=>{const t=[];for(let n=0;n<i;n++)t.push(b(C.map(r=>S[r][n]),n));return t},_=()=>{const i=[];return C.map((t,n)=>i.push(e("td",{children:t},`first-${n}`))),a("tr",{children:[e("td",{}),i]})};function E(i){let[t,n]=o.exports.useState();const r=()=>{n(a(d,{children:[_(),B(i.size)]}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a(d,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:e("tbody",{children:t})})]})}function k(){return a(d,{children:[a("div",{className:"school-container",children:[e("div",{children:m.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:m.year+"\uD559\uB144 "}),e("span",{children:m.class+"\uBC18"})]})]})}function A(){location.href="/login/"}let h=await(await fetch(`${v}/cookInfo?school=${u.schoolname}&getnum=14`)).json();function M(){let[i,t]=o.exports.useState();const n=()=>{const c=[];if("RESULT"in h){if(h.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return h.RESULT.MESSAGE}else if("mealServiceDietInfo"in h){const l=h.mealServiceDietInfo[1].row;for(let s=0;s<l.length;s++){const p=a("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:l[s].CAL_INFO})}),e("div",{className:"food-list",children:l[s].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((f,g)=>e("div",{children:f},`cook-menu-${g}`))}),e("div",{className:"date",children:l[s].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${s}`);c.push(p)}}t(e(d,{children:c}))};return o.exports.useEffect(()=>{t(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),n()},[]),a(d,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:i})]})}function T(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.5"})]})}function j(){let[i,t]=o.exports.useState();const n=async()=>{const r=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();t(e(d,{children:r[1].respond}))};return o.exports.useEffect(()=>{t(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),n()},[]),a("div",{children:[a("div",{className:"myou-container",children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{className:"arrow"})]}),e("div",{children:i})]})}function I(){location.href="/myounEon/"}function L(){let i=0,t=0,[n,r]=o.exports.useState();const c=async()=>{const s=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i}&lon=${t}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();r(a(d,{children:[a("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${s?.weather[0].icon}@2x.png`}),a("div",{children:[Math.floor(s?.main.temp),"\xB0C"]})]}),a("div",{className:"small_info",children:[a("div",{children:[a("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(s?.main.feels_like),"\xB0"]}),a("div",{children:[Math.floor(s?.main.temp_max),"\xB0/",Math.floor(s?.main.temp_min),"\xB0"]})]}),a("div",{children:[a("div",{children:["\uC2B5\uB3C4 ",s?.main.humidity,"%"]}),e("div",{children:s?.weather[0].description})]})]})]}))};return o.exports.useEffect(()=>{r(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(l=>{i=l.coords.latitude,t=l.coords.longitude,c()})},[]),e("div",{className:"container",children:n})}const D=i=>{const t=new Date;t.setDate(t.getDate()+Number(i));const n=`${t.getFullYear()}`.padStart(2,"0"),r=`${t.getMonth()+1}`.padStart(2,"0"),c=`${t.getDate()}`.padStart(2,"0");return`${n}${r}${c}`},F=await(await fetch(`${v}/schoolSchedule?school=${u.schoolname}&startDay=${D(0)}&lastDay=${D(200)}`)).json();function R(){let[i,t]=o.exports.useState(),n=[];const r=()=>{n=[],F.forEach(c=>{const l=new Date,p=new Date(`${c.day.start.slice(0,4)}-${c.day.start.slice(4,6)}-${c.day.start.slice(6,8)}`).getTime()-l.getTime(),f=Math.floor(p/(1e3*60*60*24));n.push(a("div",{children:[a("span",{children:[c.eventName," "]}),a("span",{children:["D-",f]}),e("br",{})]}))}),t(e(d,{children:n}))};return o.exports.useEffect(()=>{t(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a("div",{children:[e("div",{className:"title d",children:"\uD559\uC0AC\uC77C\uC815 D-Day"}),e("div",{className:"D-day-container",children:i})]})}const O=document.getElementById("app");N.createRoot(O).render(e($.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:A,children:e(k,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(L,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(E,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(M,{})}),e("div",{className:"school_schedule box_shadow",children:e(R,{})}),e("div",{className:"myoungEon-container box_shadow",onClick:I,children:e(j,{})}),e("div",{className:"side-comment-container box_shadow",children:e(T,{})})]})})}));
