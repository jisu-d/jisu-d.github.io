import"./modulepreload-polyfill.b7f2da20.js";import{r as l,j as u,a as e,F as i,c as f,R as p}from"./jsx-runtime.62d8ffb1.js";import{s as t,p as d,a as D}from"./proxy.ced3beb3.js";const g=async c=>await(await fetch(`${d}/schoolList?school=${c}`)).json();let s;function v(){const c=l.exports.useRef(null);let[a,n]=l.exports.useState([]);return u("div",{children:[e("input",{onChange:async r=>{const o=r.currentTarget;o instanceof HTMLInputElement&&(t.schoolname=o.value,s&&clearTimeout(s),s=setTimeout(async()=>{const h=await g(o.value);n(h?h.map((C,m)=>u("div",{className:"school-list-arr",children:[e("div",{children:C[1]}),e("div",{children:C[2]})]},`list-${m}`)):e("div",{}))},500))},placeholder:"\uD559\uAD50",ref:c,type:"text"}),e("div",{className:"school-list",onClick:r=>{r.target instanceof HTMLDivElement&&r.target.textContent.length>2&&(t.schoolname=r.target.textContent,c.current.value=r.target.textContent,n([]))},children:a})]})}function x(){return e(i,{children:e("input",{onChange:async a=>{const n=a.currentTarget;n instanceof HTMLInputElement&&(t.year=Number(n.value))},type:"number",placeholder:"\uD559\uB144",min:"1",max:"15"})})}function y(){return e(i,{children:e("input",{onChange:async a=>{const n=a.currentTarget;n instanceof HTMLInputElement&&(t.class=Number(n.value))},type:"number",placeholder:"\uBC18",min:"1",max:"15"})})}function B(){return l.exports.useRef(null),e(i,{children:e("button",{onClick:async()=>{if(t.year&&t.class&&t.schoolname)if(t.year<0||t.class<0)alert("\uD559\uAD50\uC640 \uD559\uB144\uC744 \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694");else{const a=await(await fetch(`${d}/checkSchool?school=${t.schoolname}&Year=${t.year}&class=${t.class}`)).text();console.log(a);let n;a==="true"?n=!0:n=!1,n?(t.login++,D(t),location.href="/"):alert("\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}},children:"\uAC80\uC0C9"})})}const A=document.getElementById("app");f.createRoot(A).render(e(p.StrictMode,{children:e("main",{children:e("div",{children:u("div",{className:"box_shadow serch-input",children:[e("div",{className:"title",children:"\uD559\uAD50 \uCC3E\uAE30"}),e("div",{className:"small-title",children:"\uD559\uAD50\uC640 \uD559\uB144\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."}),u("div",{className:"input-container",children:[e(v,{}),e(x,{}),e(y,{}),e(B,{})]})]})})})}));
