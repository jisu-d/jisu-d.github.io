import{r as u,j as o,a as e,p as d,F as i,c as f,R as p}from"./jsx-runtime.21fb73f5.js";let t={schoolname:"",year:0,class:0,login:0};localStorage.getItem("obj")||localStorage.setItem("obj",JSON.stringify(t));JSON.parse(localStorage.getItem("obj"));const g=a=>{localStorage.setItem("obj",JSON.stringify(a))},D=async a=>await(await fetch(`${d}/schoolList?school=${a}`)).json();let s;function y(){const a=u.exports.useRef(null);let[c,n]=u.exports.useState([]);return o("div",{children:[e("input",{onChange:async r=>{const l=r.currentTarget;l instanceof HTMLInputElement&&(t.schoolname=l.value,s&&clearTimeout(s),s=setTimeout(async()=>{const h=await D(l.value);n(h?h.map((C,m)=>o("div",{className:"school-list-arr",children:[e("div",{children:C[1]}),e("div",{children:C[2]})]},`list-${m}`)):e("div",{}))},800))},placeholder:"\uD559\uAD50",ref:a,type:"text"}),e("div",{className:"school-list",onClick:r=>{r.target instanceof HTMLDivElement&&r.target.textContent.length>2&&(t.schoolname=r.target.textContent,a.current.value=r.target.textContent,n([]))},children:c})]})}function v(){return e(i,{children:e("input",{onChange:async c=>{const n=c.currentTarget;n instanceof HTMLInputElement&&(t.year=Number(n.value))},type:"number",placeholder:"\uD559\uB144",min:"1",max:"15"})})}function x(){return e(i,{children:e("input",{onChange:async c=>{const n=c.currentTarget;n instanceof HTMLInputElement&&(t.class=Number(n.value))},type:"number",placeholder:"\uBC18",min:"1",max:"15"})})}function S(){return u.exports.useRef(null),e(i,{children:e("button",{onClick:async()=>{if(t.year&&t.class&&t.schoolname)if(t.year<0||t.class<0)alert("\uD559\uAD50\uC640 \uD559\uB144\uC744 \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694");else{const c=await(await fetch(`${d}/checkSchool?school=${t.schoolname}&Year=${t.year}&class=${t.class}`)).text();let n;c==="true"?n=!0:n=!1,n?(t.login++,g(t),location.href="/"):alert("\uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}},children:"\uAC80\uC0C9"})})}const B=document.getElementById("app");f.createRoot(B).render(e(p.StrictMode,{children:e("main",{children:e("div",{children:o("div",{className:"box_shadow serch-input",children:[e("div",{className:"title",children:"\uD559\uAD50 \uCC3E\uAE30"}),e("div",{className:"small-title",children:"\uD559\uAD50\uC640 \uD559\uB144\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."}),o("div",{className:"input-container",children:[e(y,{}),e(v,{}),e(x,{}),e(S,{})]})]})})})}));
