import{r as C,j as l,a as e,F as i,c as f,R as D}from"./jsx-runtime.4063c5da.js";import{p as d}from"./proxy.6e5bd081.js";let u={schoolname:"",year:0,class:0,login:0};const p=n=>{localStorage.setItem("obj",JSON.stringify(n))},B=async n=>n!==""?await(await fetch(`${d}/schoolList?school=${n}`)).json():[];let o;function g(){const n=C.exports.useRef(null);let[a,t]=C.exports.useState([]);return l("div",{children:[e("input",{onChange:async r=>{const c=r.currentTarget;c instanceof HTMLInputElement&&(u.schoolname=c.value,o&&clearTimeout(o),o=setTimeout(async()=>{const s=await B(c.value);console.log(s),s[0]?t(s.map((h,m)=>l("div",{className:"school-list-arr",children:[e("div",{children:h[1]}),e("div",{children:h[2]})]},`list-${m}`))):t(l("div",{className:"msg2",children:["\uAC80\uC0C9\uC774 \uB418\uC9C0 \uC54A\uC744\uC2DC ",e("strong",{children:'"\uC815\uD655\uD55C \uC815\uBCF4"'}),"\uC744 \uC785\uB825\uD6C4\uC5D0 ",e("strong",{children:"\uAC80\uC0C9 \uBC84\uD2BC"}),"\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694."]}))},500))},placeholder:"\uD559\uAD50\uC774\uB984",ref:n,type:"text"}),e("div",{className:"school-list",onClick:r=>{if(r.target instanceof HTMLDivElement&&r.target.textContent!=="\uAC80\uC0C9\uC774 \uB418\uC9C0 \uC54A\uC544\uB3C4 \uC815\uD655\uD55C \uD559\uAD50 \uD559\uB144 \uBC18\uC744 \uC785\uB825\uD6C4\uC5D0 \uAC80\uC0C9 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694."){const c=r.target.parentElement.querySelector("div:nth-child(2)").innerHTML;u.schoolname=c,n.current.value=c,t([])}},children:a})]})}function v(){return e(i,{children:e("input",{onChange:async a=>{const t=a.currentTarget;t instanceof HTMLInputElement&&(u.year=Number(t.value))},type:"number",placeholder:"\uD559\uB144 ex) 1 ~ 15",min:"1",max:"15"})})}function y(){return e(i,{children:e("input",{onChange:async a=>{const t=a.currentTarget;t instanceof HTMLInputElement&&(u.class=Number(t.value))},type:"number",placeholder:"\uBC18 ex) 1 ~ 15",min:"1",max:"15"})})}function A(){return C.exports.useRef(null),e(i,{children:e("button",{onClick:async()=>{if(u.year&&u.class&&u.schoolname)if(u.year<0||u.class<0)alert("\uD559\uAD50\uC640 \uD559\uB144\uC744 \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694");else{const a=await(await fetch(`${d}/checkSchool?school=${u.schoolname}&Year=${u.year}&class=${u.class}`)).text();let t;a==="true"?t=!0:t=!1,t?(u.login++,p(u),location.href="/"):alert("\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}},children:"\uAC80\uC0C9"})})}const x=document.getElementById("app");f.createRoot(x).render(e(D.StrictMode,{children:e("main",{children:e("div",{children:l("div",{className:"box_shadow serch-input",children:[e("div",{className:"title",children:"\uD559\uAD50 \uCC3E\uAE30"}),e("div",{className:"small-title",children:"\uD559\uAD50\uC640 \uD559\uB144\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."}),l("div",{className:"input-container",children:[e(g,{}),e(v,{}),e(y,{}),e(A,{})]})]})})})}));
