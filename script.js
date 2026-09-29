window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),450));
const stage=document.getElementById("codeStage");
setTimeout(()=>stage.classList.add("built"),2300);
document.getElementById("explore").addEventListener("click",()=>document.getElementById("work").scrollIntoView({behavior:"smooth"}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.12});
document.querySelectorAll(".service-grid article,.steps article,.price").forEach(e=>{e.style.opacity=0;e.style.transform="translateY(25px)";e.style.transition=".8s cubic-bezier(.22,1,.36,1)";obs.observe(e)});
document.querySelectorAll(".in").forEach(e=>{e.style.opacity=1;e.style.transform="none"});
obs.takeRecords();
const style=document.createElement("style");style.textContent=".in{opacity:1!important;transform:none!important}";document.head.appendChild(style);