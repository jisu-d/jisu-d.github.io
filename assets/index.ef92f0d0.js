import{r as o,j as a,a as e,F as d,c as N,R as $}from"./jsx-runtime.4063c5da.js";import{a as w,s as y,p as v,l as u}from"./proxy.ced3beb3.js";const m=JSON.parse(localStorage.getItem("obj")),x=()=>m?!(m.login>0):!0;x()&&w(y);const D=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],S=await(await fetch(`${v}/comciganData?school=${u.schoolname}&Year=${u.year}&class=${u.class}&zeroOne=0`)).json(),b=(i,n)=>a("tr",{children:[e("td",{children:n+1}),i.map((t,r)=>t?a("td",{children:[t[0],e("br",{}),t[1]]},r+1+n*6):e("td",{},r+1+n*6))]},n*6),B=i=>{const n=[];for(let t=0;t<i;t++)n.push(b(D.map(r=>S[r][t]),t));return n},_=()=>{const i=[];return D.map((n,t)=>i.push(e("td",{children:n},`first-${t}`))),a("tr",{children:[e("td",{}),i]})};function k(i){let[n,t]=o.exports.useState();const r=()=>{t(a(d,{children:[_(),B(i.size)]}))};return o.exports.useEffect(()=>{t(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a(d,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:e("tbody",{children:n})})]})}function E(){return a(d,{children:[a("div",{className:"school-container",children:[e("div",{children:m.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:m.year+"\uD559\uB144 "}),e("span",{children:m.class+"\uBC18"})]})]})}function A(){location.href="/login/"}let h=await(await fetch(`${v}/cookInfo?school=${u.schoolname}&getnum=14`)).json();function M(){let[i,n]=o.exports.useState();const t=()=>{const s=[];if("RESULT"in h){if(h.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return h.RESULT.MESSAGE}else if("mealServiceDietInfo"in h){const l=h.mealServiceDietInfo[1].row;for(let c=0;c<l.length;c++){const p=a("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:l[c].CAL_INFO})}),e("div",{className:"food-list",children:l[c].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((f,g)=>e("div",{children:f},`cook-menu-${g}`))}),e("div",{className:"date",children:l[c].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${c}`);s.push(p)}}n(e(d,{children:s}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),t()},[]),a(d,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:i})]})}function T(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.5"})]})}function j(){let[i,n]=o.exports.useState();const t=async()=>{const r=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();n(e(d,{children:r[1].respond}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),t()},[]),a("div",{children:[a("div",{className:"myou-container",children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{className:"arrow"})]}),e("div",{children:i})]})}function I(){location.href="/myounEon/"}function L(){location.href="/calender/"}function F(){let i=0,n=0,[t,r]=o.exports.useState();const s=async()=>{const c=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i}&lon=${n}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();r(a(d,{children:[a("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${c?.weather[0].icon}@2x.png`}),a("div",{children:[Math.floor(c?.main.temp),"\xB0C"]})]}),a("div",{className:"small_info",children:[a("div",{children:[a("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(c?.main.feels_like),"\xB0"]}),a("div",{children:[Math.floor(c?.main.temp_max),"\xB0/",Math.floor(c?.main.temp_min),"\xB0"]})]}),a("div",{children:[a("div",{children:["\uC2B5\uB3C4 ",c?.main.humidity,"%"]}),e("div",{children:c?.weather[0].description})]})]})]}))};return o.exports.useEffect(()=>{r(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(l=>{i=l.coords.latitude,n=l.coords.longitude,s()})},[]),e("div",{className:"container",children:t})}const C=i=>{const n=new Date;n.setDate(n.getDate()+Number(i));const t=`${n.getFullYear()}`.padStart(2,"0"),r=`${n.getMonth()+1}`.padStart(2,"0"),s=`${n.getDate()}`.padStart(2,"0");return`${t}${r}${s}`},R=await(await fetch(`${v}/schoolSchedule?school=${u.schoolname}&startDay=${C(0)}&lastDay=${C(200)}`)).json();function H(){let[i,n]=o.exports.useState(),t=[];const r=()=>{t=[],R.forEach(s=>{const l=new Date,p=new Date(`${s.day.start.slice(0,4)}-${s.day.start.slice(4,6)}-${s.day.start.slice(6,8)}`).getTime()-l.getTime(),f=Math.floor(p/(1e3*60*60*24));t.push(a("div",{children:[a("span",{children:[s.eventName," "]}),a("span",{children:["D-",f+1]}),e("br",{})]}))}),n(e(d,{children:t}))};return o.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a("div",{children:[e("div",{className:"title d",children:"\uD559\uC0AC\uC77C\uC815 D-Day"}),e("div",{className:"D-day-container",children:i})]})}const O=document.getElementById("app");N.createRoot(O).render(e($.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:A,children:e(E,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(F,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(k,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(M,{})}),e("div",{className:"school_schedule box_shadow",onClick:L,children:e(H,{})}),e("div",{className:"myoungEon-container box_shadow",onClick:I,children:e(j,{})}),e("div",{className:"side-comment-container box_shadow",children:e(T,{})})]})})}));
