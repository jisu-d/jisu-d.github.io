import{p as h,j as n,F as o,a as e,r as s,c as C,R as p}from"./jsx-runtime.21fb73f5.js";const u=JSON.parse(localStorage.getItem("obj")),f=()=>u?!(u.login>0):!0;f();const m=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],D=await(await fetch(`${h}/comciganData?school=\uC0C8\uC194\uACE0\uB4F1\uD559\uAD50&Year=${1}&class=${1}&zeroOne=0`)).json(),B=(i,t)=>n("tr",{children:[e("td",{children:t+1}),i.map((a,r)=>a?n("td",{children:[a[0],e("br",{}),a[1]]},r+1+t*6):e("td",{},r+1+t*6))]},t*6),g=i=>{const t=[];for(let a=0;a<i;a++)t.push(B(m.map(r=>D[r][a]),a));return t},w=()=>{const i=[];return m.map((t,a)=>i.push(e("td",{children:t},`first-${a}`))),n("tr",{children:[e("td",{}),i]})};function b(i){return n(o,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:n("tbody",{children:[w(),g(i.size)]})})]})}function N(){return n(o,{children:[n("div",{className:"school-container",children:[e("div",{children:"\uC0C8\uC194\uACE0\uB4F1\uD559\uAD50"}),e("div",{className:"arrow"})]}),n("div",{children:[e("span",{children:"1\uD559\uB144 "}),e("span",{children:"1\uBC18"})]})]})}function A(){location.href="/page/"}let l=await(await fetch(`${h}/cookInfo?school=\uC0C8\uC194\uACE0\uB4F1\uD559\uAD50&getnum=5`)).json();function _(){return n(o,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:$()})]})}const $=()=>{const i=[];if("RESULT"in l){if(l.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return l.RESULT.MESSAGE}else if("mealServiceDietInfo"in l){const t=l.mealServiceDietInfo[1].row;for(let a=0;a<t.length;a++){const r=n("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:t[a].CAL_INFO})}),e("div",{className:"food-list",children:t[a].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((d,c)=>e("div",{children:d},`cook-menu-${c}`))}),e("div",{className:"date",children:t[a].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${a}`);i.push(r)}}return e(o,{children:i})};function k(){return n("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : "}),e("br",{}),e("span",{children:"version 0.5"})]})}const x=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();function S(){return n("div",{children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{children:x[1].respond})]})}function E(){let[i,t]=s.exports.useState(null),a=0,r=0;navigator.geolocation.getCurrentPosition(c=>{a=c.coords.latitude,r=c.coords.longitude});const d=async()=>{const v=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${r}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();t(v)};return s.exports.useEffect(()=>{d()},[]),n("div",{className:"container",children:[n("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${i?.weather[0].icon}@2x.png`}),n("div",{children:[Math.floor(i?.main.temp),"\xB0C"]})]}),n("div",{className:"small_info",children:[n("div",{children:[n("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(i?.main.feels_like),"\xB0"]}),n("div",{children:[Math.floor(i?.main.temp_max),"\xB0/",Math.floor(i?.main.temp_min),"\xB0"]})]}),n("div",{children:[n("div",{children:["\uC2B5\uB3C4 ",i?.main.humidity,"%"]}),e("div",{children:i?.weather[0].description})]})]})]})}const M=document.getElementById("app");C.createRoot(M).render(e(p.StrictMode,{children:e("main",{children:n("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:A,children:e(N,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(E,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(b,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(_,{})}),e("div",{className:"myoungEon-container box_shadow",children:e(S,{})}),e("div",{className:"side-comment-container box_shadow",children:e(k,{})})]})})}));
