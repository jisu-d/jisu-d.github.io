import{r as s,j as a,a as e,F as d,c as $,R as N}from"./jsx-runtime.4063c5da.js";import{a as w,s as y,p as f,l as u}from"./proxy.ced3beb3.js";const m=JSON.parse(localStorage.getItem("obj")),S=()=>m?!(m.login>0):!0;S()&&w(y);const C=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],x=await(await fetch(`${f}/comciganData?school=${u.schoolname}&Year=${u.year}&class=${u.class}&zeroOne=0`)).json(),B=(i,n)=>a("tr",{children:[e("td",{children:n+1}),i.map((t,r)=>t?a("td",{children:[t[0],e("br",{}),t[1]]},r+1+n*6):e("td",{},r+1+n*6))]},n*6),b=i=>{const n=[];for(let t=0;t<i;t++)n.push(B(C.map(r=>x[r][t]),t));return n},E=()=>{const i=[];return C.map((n,t)=>i.push(e("td",{children:n},`first-${t}`))),a("tr",{children:[e("td",{}),i]})};function k(i){let[n,t]=s.exports.useState();const r=()=>{t(a(d,{children:[E(),b(i.size)]}))};return s.exports.useEffect(()=>{t(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),r()},[]),a(d,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:e("tbody",{children:n})})]})}function A(){return a(d,{children:[a("div",{className:"school-container",children:[e("div",{children:m.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:m.year+"\uD559\uB144 "}),e("span",{children:m.class+"\uBC18"})]})]})}function _(){location.href="/login/"}let h=await(await fetch(`${f}/cookInfo?school=${u.schoolname}&getnum=14`)).json();function M(){let[i,n]=s.exports.useState();const t=()=>{const o=[];if("RESULT"in h){if(h.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return h.RESULT.MESSAGE}else if("mealServiceDietInfo"in h){const l=h.mealServiceDietInfo[1].row;for(let c=0;c<l.length;c++){const p=a("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:l[c].CAL_INFO})}),e("div",{className:"food-list",children:l[c].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((D,g)=>e("div",{children:D},`cook-menu-${g}`))}),e("div",{className:"date",children:l[c].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${c}`);o.push(p)}}n(e(d,{children:o}))};return s.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),t()},[]),a(d,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:i})]})}function T(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.5"})]})}function j(){let[i,n]=s.exports.useState();const t=async()=>{const r=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();n(e(d,{children:r[1].respond}))};return s.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),t()},[]),a("div",{children:[a("div",{className:"myou-container",children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{className:"arrow"})]}),e("div",{children:i})]})}function I(){location.href="/myounEon/"}function L(){let i=0,n=0,[t,r]=s.exports.useState();const o=async()=>{const c=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i}&lon=${n}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();r(a(d,{children:[a("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${c?.weather[0].icon}@2x.png`}),a("div",{children:[Math.floor(c?.main.temp),"\xB0C"]})]}),a("div",{className:"small_info",children:[a("div",{children:[a("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(c?.main.feels_like),"\xB0"]}),a("div",{children:[Math.floor(c?.main.temp_max),"\xB0/",Math.floor(c?.main.temp_min),"\xB0"]})]}),a("div",{children:[a("div",{children:["\uC2B5\uB3C4 ",c?.main.humidity,"%"]}),e("div",{children:c?.weather[0].description})]})]})]}))};return s.exports.useEffect(()=>{r(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(l=>{i=l.coords.latitude,n=l.coords.longitude,o()})},[]),e("div",{className:"container",children:t})}const v=i=>{const n=new Date;n.setDate(n.getDate()+Number(i));const t=`${n.getFullYear()}`.padStart(2,"0"),r=`${n.getMonth()+1}`.padStart(2,"0"),o=`${n.getDate()}`.padStart(2,"0");return`${t}${r}${o}`},F=await(await fetch(`${f}/schoolSchedule?school=${u.schoolname}&startDay=${v(0)}&lastDay=${v(200)}`)).json();function R(){let[i,n]=s.exports.useState();const t=()=>{F.forEach(r=>{const o=new Date,c=new Date(`${r.day.start.slice(0,4)}-${r.day.start.slice(4,6)}-${r.day.start.slice(6,8)}`).getTime()-o.getTime(),p=Math.floor(c/(1e3*60*60*24));n(a(d,{children:[e("span",{children:r.eventName}),a("span",{children:["D-",p,"day"]})]}))})};return s.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),t()},[]),a("div",{children:[e("div",{children:"\uD559\uC0AC\uC77C\uC815 D-Day"}),e("div",{children:i})]})}const O=document.getElementById("app");$.createRoot(O).render(e(N.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:_,children:e(A,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(L,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(k,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(M,{})}),e("div",{children:e(R,{})}),e("div",{className:"myoungEon-container box_shadow",onClick:I,children:e(j,{})}),e("div",{className:"side-comment-container box_shadow",children:e(T,{})})]})})}));
