import{p as d,l as o,j as t,F as s,a as e,c as p,R as C}from"./jsx-runtime.8158af12.js";const l=JSON.parse(localStorage.getItem("obj")),D=()=>l?!(l.login>0):!0;D()&&(location.href="/page/");const u=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],b=await(await fetch(`${d}/comciganData?school=${o.schoolname}&Year=${o.year}&class=${o.class}&zeroOne=0`)).json(),g=(n,i)=>t("tr",{children:[e("td",{children:i+1}),n.map((a,r)=>a?t("td",{children:[a[0],e("br",{}),a[1]]},r+1+i*6):e("td",{},r+1+i*6))]},i*6),N=n=>{const i=[];for(let a=0;a<n;a++)i.push(g(u.map(r=>b[r][a]),a));return i},$=()=>{const n=[];return u.map((i,a)=>n.push(e("td",{children:i},`first-${a}`))),t("tr",{children:[e("td",{}),n]})};function B(n){return t(s,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:t("tbody",{children:[$(),N(n.size)]})})]})}function w(){return t(s,{children:[t("div",{className:"school-container",children:[e("div",{children:l.schoolname}),e("div",{className:"arrow"})]}),t("div",{children:[e("span",{children:l.year+"\uD559\uB144 "}),e("span",{children:l.class+"\uBC18"})]})]})}function S(){location.href="/page/"}let c=await(await fetch(`${d}/cookInfo?school=${o.schoolname}&getnum=5`)).json();function k(){return t(s,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:E()})]})}const E=()=>{const n=[];if("RESULT"in c){if(c.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return c.RESULT.MESSAGE}else if("mealServiceDietInfo"in c){const i=c.mealServiceDietInfo[1].row;for(let a=0;a<i.length;a++){const r=t("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:i[a].CAL_INFO})}),e("div",{className:"food-list",children:i[a].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((v,f)=>e("div",{children:v},`cook-menu-${f}`))}),e("div",{className:"date",children:i[a].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${a}`);n.push(r)}}return e(s,{children:n})};function A(){return t("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : "}),e("br",{}),e("span",{children:"version 0.5"})]})}const _=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();function x(){return t("div",{children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{children:_[1].respond})]})}let h,m;navigator.geolocation.getCurrentPosition(async n=>{h=n.coords.latitude,m=n.coords.longitude});const y=await(await fetch(`${d}/Skydata?x=${h}&y=${m}`)).json();function T(){const n=[];return y.data.map(i=>n.push(e("div",{children:i}))),e("div",{children:e("div",{children:n})})}const j=document.getElementById("app");p.createRoot(j).render(e(C.StrictMode,{children:e("main",{children:t("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:S,children:e(w,{})})}),e("div",{className:"box_shadow",children:e(T,{})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(B,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(k,{})}),e("div",{className:"myoungEon-container box_shadow",children:e(x,{})}),e("div",{className:"side-comment-container box_shadow",children:e(A,{})})]})})}));
