import{p as d,l as s,j as n,F as l,a as e,c as p,R as v}from"./jsx-runtime.8158af12.js";const o=JSON.parse(localStorage.getItem("obj")),f=()=>o?!(o.login>0):!0;f()&&(location.href="/page/");const u=["\uC6D4","\uD654","\uC218","\uBAA9","\uAE08"],g=await(await fetch(`${d}/comciganData?school=${s.schoolname}&Year=${s.year}&class=${s.class}&zeroOne=0`)).json(),C=(i,c)=>n("tr",{children:[e("td",{children:c+1}),i.map((a,r)=>a?n("td",{children:[a[0],e("br",{}),a[1]]},r+1+c*6):e("td",{},r+1+c*6))]},c*6),b=i=>{const c=[];for(let a=0;a<i;a++)c.push(C(u.map(r=>g[r][a]),a));return c},D=()=>{const i=[];return u.map((c,a)=>i.push(e("td",{children:c},`first-${a}`))),n("tr",{children:[e("td",{}),i]})};function N(i){return n(l,{children:[e("div",{className:"title",children:"\uC2DC\uAC04\uD45C"}),e("table",{children:n("tbody",{children:[D(),b(i.size)]})})]})}function B(){return n(l,{children:[n("div",{className:"school-container",children:[e("div",{children:o.schoolname}),e("div",{className:"arrow"})]}),n("div",{children:[e("span",{children:o.year+"\uD559\uB144 "}),e("span",{children:o.class+"\uBC18"})]})]})}function w(){location.href="/page/"}let t=await(await fetch(`${d}/cookInfo?school=${s.schoolname}&getnum=5`)).json();function y(){return n(l,{children:[e("div",{className:"title",children:"\uC624\uB298 \uAE09\uC2DD"}),e("div",{className:"cook-List",children:$()})]})}const $=()=>{const i=[];if("RESULT"in t){if(t.RESULT.MESSAGE==="\uD574\uB2F9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")return t.RESULT.MESSAGE}else if("mealServiceDietInfo"in t){const c=t.mealServiceDietInfo[1].row;for(let a=0;a<c.length;a++){const r=n("div",{className:"cooktable",children:[e("div",{className:"kcal",children:e("span",{children:c[a].CAL_INFO})}),e("div",{className:"food-list",children:c[a].DDISH_NM.replace(/[\.0-9\(\)]/g,"").split("<br/>").map((h,m)=>e("div",{children:h},`cook-menu-${m}`))}),e("div",{className:"date",children:c[a].MLSV_TO_YMD.slice(4).replace(/(\d{2})(\d{2})/,"$1\uC6D4 $2\uC77C")})]},`cook-${a}`);i.push(r)}}return e(l,{children:i})};function S(){return n(l,{children:[e("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6211769300139830",crossOrigin:"anonymous"}),e("ins",{className:"adsbygoogle","data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-6211769300139830","data-ad-slot":"5189642459"}),n("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]})]})}function k(){return n("div",{children:[e("span",{children:"\uC624\uB958 \uBC0F \uBB38\uC758\uC0AC\uD56D : "}),e("br",{}),e("span",{children:"version 0.5"})]})}const A=await(await fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")).json();function E(){return n("div",{children:[e("div",{className:"title d",children:"\uC624\uB298\uC758 \uBA85\uC5B8"}),e("div",{children:A[1].respond})]})}const _=document.getElementById("app");p.createRoot(_).render(e(v.StrictMode,{children:e("main",{children:n("div",{children:[e("div",{children:e("div",{className:"user-info-container",id:"user-info-container",onClick:w,children:e(B,{})})}),e("div",{className:"timetable-container box_shadow",id:"timetable-container",children:e(N,{size:7})}),e("div",{className:"cooktable-container box_shadow",id:"cooktable-container",children:e(y,{})}),e("div",{className:"myoungEon-container box_shadow",children:e(E,{})}),e("div",{className:"google_adsense box_shadow",children:e(S,{})}),e("div",{className:"side-comment-container box_shadow",children:e(k,{})})]})})}));
