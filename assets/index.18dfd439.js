import{r as l,j as a,a as e,F as o,c as D,R as N}from"./jsx-runtime.4063c5da.js";import{a as B,s as w,p,l as m}from"./proxy.ced3beb3.js";const u=JSON.parse(localStorage.getItem("obj")),x=()=>u?!(u.login>0):!0;x()&&B(w);const v=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],b=await(await fetch(`${p}/comciganData?school=${m.schoolname}&Year=${m.year}&class=${m.class}&zeroOne=0`)).json(),S=(t,n)=>a("tr",{children:[e("td",{children:n+1}),t.map((i,c)=>i?a("td",{children:[i[0],e("br",{}),i[1]]},c+1+n*6):e("td",{},c+1+n*6))]},n*6),$=t=>{const n=[];for(let i=0;i<t;i++)n.push(S(v.map(c=>b[c][i]),i));return n},k=()=>{const t=[];return v.map((n,i)=>t.push(e("td",{children:n},`first-${i}`))),a("tr",{children:[e("td",{}),t]})};function _(t){let[n,i]=l.exports.useState();const c=()=>{i(a(o,{children:[k(),$(t.size)]}))};return l.exports.useEffect(()=>{i(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),c()},[]),a(o,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:e("tbody",{children:n})})]})}function E(){return a(o,{children:[a("div",{className:"school-container",children:[e("div",{children:u.schoolname}),e("div",{className:"arrow"})]}),a("div",{children:[e("span",{children:u.year+"\uD559\uB144 "}),e("span",{children:u.class+"\uBC18"})]})]})}function A(){location.href="/login/"}let d=await(await fetch(`${p}/cookInfo?school=${m.schoolname}&getnum=14`)).json();function y(){let[t,n]=l.exports.useState();const i=()=>{const h=[];if("RESULT"in d){if(d.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return d.RESULT.MESSAGE}else if("mealServiceDietInfo"in d){const s=d.mealServiceDietInfo[1].row;for(let r=0;r<s.length;r++){const f=a("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:s[r].CAL_INFO})}),e("div",{className:"food-list",children:s[r].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((C,g)=>e("div",{children:C},`cook-menu-${g}`))}),e("div",{className:"date",children:s[r].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${r}`);h.push(f)}}n(e(o,{children:h}))};return l.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),i()},[]),a(o,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:t})]})}function M(){return a("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : weschedulecs@gmail.com"}),e("br",{}),e("span",{children:"version 1.0.5"})]})}function T(){let[t,n]=l.exports.useState();const i=async()=>{const c=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();n(e(o,{children:c[1].respond}))};return l.exports.useEffect(()=>{n(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),i()},[]),a("div",{children:[a("div",{className:"myou-container",children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{className:"arrow"})]}),e("div",{children:t})]})}function j(){location.href="/myounEon/"}function I(){let t=0,n=0,[i,c]=l.exports.useState();const h=async()=>{const r=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&appid=d931b3df313d8586e334f45873e59273&units=metric&lang=kr`)).json();c(a(o,{children:[a("div",{className:"img_temp_container",children:[e("img",{src:`http://openweathermap.org/img/wn/${r?.weather[0].icon}@2x.png`}),a("div",{children:[Math.floor(r?.main.temp),"\xB0C"]})]}),a("div",{className:"small_info",children:[a("div",{children:[a("div",{children:["\uCCB4\uAC10\uC628\uB3C4 ",Math.floor(r?.main.feels_like),"\xB0"]}),a("div",{children:[Math.floor(r?.main.temp_max),"\xB0/",Math.floor(r?.main.temp_min),"\xB0"]})]}),a("div",{children:[a("div",{children:["\uC2B5\uB3C4 ",r?.main.humidity,"%"]}),e("div",{children:r?.weather[0].description})]})]})]}))};return l.exports.useEffect(()=>{c(a("div",{className:"loading",children:[e("span",{}),e("span",{}),e("span",{})]})),navigator.geolocation.getCurrentPosition(s=>{t=s.coords.latitude,n=s.coords.longitude,h()})},[]),e("div",{className:"container",children:i})}const L=document.getElementById("app");D.createRoot(L).render(e(N.StrictMode,{children:e("main",{children:a("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:A,children:e(E,{})})}),e("div",{className:"SkyDiv-container box_shadow",children:e(I,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(_,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(y,{})}),e("div",{className:"myoungEon-container box_shadow",onClick:j,children:e(T,{})}),e("div",{className:"side-comment-container box_shadow",children:e(M,{})})]})})}));
