import{a as D,s as g,p,l as d,j as n,F as o,b as e,r as m,c as B,R as w}from"./jsx-runtime.9612456d.js";const l=JSON.parse(localStorage.getItem("obj")),b=()=>l?!(l.login>0):!0;b()&&D(g);const v=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],N=await(await fetch(`${p}/comciganData?school=${d.schoolname}&Year=${d.year}&class=${d.class}&zeroOne=0`)).json(),$=(i,t)=>n("tr",{children:[e("td",{children:t+1}),i.map((a,r)=>a?n("td",{children:[a[0],e("br",{}),a[1]]},r+1+t*6):e("td",{},r+1+t*6))]},t*6),x=i=>{const t=[];for(let a=0;a<i;a++)t.push($(v.map(r=>N[r][a]),a));return t},S=()=>{const i=[];return v.map((t,a)=>i.push(e("td",{children:t},`first-${a}`))),n("tr",{children:[e("td",{}),i]})};function _(i){return n(o,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:n("tbody",{children:[S(),x(i.size)]})})]})}function k(){return n(o,{children:[n("div",{className:"school-container",children:[e("div",{children:l.schoolname}),e("div",{className:"arrow"})]}),n("div",{children:[e("span",{children:l.year+"\uD559\uB144 "}),e("span",{children:l.class+"\uBC18"})]})]})}function A(){location.href="/page/"}let c=await(await fetch(`${p}/cookInfo?school=${d.schoolname}&getnum=14`)).json();function E(){return n(o,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:y()})]})}const y=()=>{const i=[];if("RESULT"in c){if(c.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return c.RESULT.MESSAGE}else if("mealServiceDietInfo"in c){const t=c.mealServiceDietInfo[1].row;for(let a=0;a<t.length;a++){const r=n("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:t[a].CAL_INFO})}),e("div",{className:"food-list",children:t[a].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((u,s)=>e("div",{children:u},`cook-menu-${s}`))}),e("div",{className:"date",children:t[a].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${a}`);i.push(r)}}return e(o,{children:i})};function M(){return n("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.0"})]})}const T=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();function j(){return n("div",{children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{children:T[1].respond})]})}function I(){let i=0,t=0,[a,r]=m.exports.useState(null),[u,s]=m.exports.useState();const f=async()=>{const C=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i}&lon=${t}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();r(C)};return m.exports.useEffect(()=>{s(n("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(h=>{i=h.coords.latitude,t=h.coords.longitude,f(),s(n(o,{children:[n("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${a?.weather[0].icon}@2x.png`}),n("div",{children:[Math.floor(a?.main.temp),"\xB0C"]})]}),n("div",{className:"small_info",children:[n("div",{children:[n("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(a?.main.feels_like),"\xB0"]}),n("div",{children:[Math.floor(a?.main.temp_max),"\xB0/",Math.floor(a?.main.temp_min),"\xB0"]})]}),n("div",{children:[n("div",{children:["\uC2B5\uB3C4 ",a?.main.humidity,"%"]}),e("div",{children:a?.weather[0].description})]})]})]}))})},[]),e("div",{className:"container",children:u})}const L=document.getElementById("app");B.createRoot(L).render(e(w.StrictMode,{children:e("main",{children:n("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:A,children:e(k,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(I,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(_,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(E,{})}),e("div",{className:"myoungEon-container box_shadow",children:e(j,{})}),e("div",{className:"side-comment-container box_shadow",children:e(M,{})})]})})}));
