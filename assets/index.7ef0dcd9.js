(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))C(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&C(g)}).observe(document,{childList:!0,subtree:!0});function f(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function C(s){if(s.ep)return;s.ep=!0;const a=f(s);fetch(s.href,a)}})();const R={name:"Ned Flanders"},I={name:"Sideshow Bob"},Y={name:"Edna Krabappel"},K={name:"Krusty The Clown"},P={name:"Agnes Skinner"},j={name:"Helen Lovejoy"},D={name:"rope"},F={name:"revolver"},G={name:"candlestick"},B={name:"knife"},W={name:"wrench"},z={name:"baseball bat"},J={name:"Krusty Burger",className:"krusty-burger"},Q={name:"Moes Tavern",className:"moes-tavern"},U={name:"Town Hall",className:"town-hall"},V={name:"Burns Manor",className:"burns-manor"},X={name:"Simpsons House",className:"simpsons-house"},Z={name:"Kwik-E-Mart",className:"kwik-e-mart"},_={name:"Nuclear Power Plant",className:"nuclear-power-plant"},ee={name:"Town Square",className:"town-square"},se={name:"Elementary School",className:"elementary-school"},oe=[R,I,Y,K,P,j],te=[D,F,G,B,W,z],ne=[J,Q,U,V,X,Z,_,ee,se],o={suspectsArray:oe,weaponsArray:te,roomsArray:ne},k=document.querySelector("#dice"),N=document.querySelector(".counter span"),v=document.querySelector("#rolled span"),y=document.querySelector("#info span"),x=document.querySelector("#player"),t=document.querySelectorAll("[class^=room]"),r=document.querySelector("#guess"),m=document.querySelector("main"),c=document.querySelector("#result"),L=document.querySelector("#accuse-reveal"),w=document.querySelector("#solution"),b=document.querySelector("#accuse");c==null||c.classList.toggle("hidden");const ae=document.querySelector("#suspects"),re=document.querySelector("#weapon"),ce=document.querySelector("#locations");let q=!1,T=null,i=null,u=null,d=null,M=null,p=[];const h=[],H=[],$=[];let l=0,A=0;const le=()=>{i=o.suspectsArray[Math.floor(Math.random()*o.suspectsArray.length)];const n=o.suspectsArray.indexOf(i);o.suspectsArray.splice(n,1),u=o.weaponsArray[Math.floor(Math.random()*o.weaponsArray.length)];const e=o.weaponsArray.indexOf(u);o.weaponsArray.splice(e,1),d=o.roomsArray[Math.floor(Math.random()*o.roomsArray.length)];const f=o.weaponsArray.indexOf(d);return o.roomsArray.splice(f,1),{suspect:i,weapon:u,room:d}};p=o.suspectsArray.concat(o.weaponsArray,o.roomsArray);console.log(p[1].name);const S=n=>{for(let e=0;e<3;e+=1){M=p[Math.floor(Math.random()*p.length)];const f=p.indexOf(M);n.push(M),p.splice(f,1)}},ie=()=>{switch(T=Math.floor(Math.random()*9)+1,T){case 0:t[0].classList.add("active");break;case 1:t[1].classList.add("active");break;case 2:t[2].classList.add("active");break;case 3:t[3].classList.add("active");break;case 4:t[4].classList.add("active");break;case 5:t[5].classList.add("active");break;case 6:t[6].classList.add("active");break;case 7:t[7].classList.add("active");break;case 8:t[8].classList.add("active");break;default:t[0].classList.add("active");break}},ue=()=>{q&&r!==null?(r==null||r.classList.add("active-btn"),r.innerHTML="Guess function not implemented, work in progress!"):r==null||r.classList.remove("active-btn")};function E(n){t.forEach(e=>{e.getAttribute("id")===n.currentTarget.id&&y!==null?(e.classList.add("active"),console.log(n),y.textContent="You may make a guess."):e.classList.remove("active")}),l=0,ue(),O(l)}const O=n=>{n>3?(q=!0,t.forEach(e=>{e.addEventListener("click",E)})):(q=!1,t.forEach(e=>{e.removeEventListener("click",E)})),A+=1,N!=null&&(N.textContent=String(A)),console.log(A)},de=()=>{l=Math.floor(Math.random()*6)+1,l>3&&v!==null&&y!==null?(v.textContent=`You rolled a ${l}!`,y.textContent="You may move to another location!"):l<=3&&v!==null&&y!==null&&(v.textContent=`You rolled a ${l}!`,y.textContent=" You are stuck!"),r==null||r.classList.remove("active-btn"),O(l)};k==null||k.addEventListener("click",de);console.log(h);console.log(H);console.log($);const me=()=>{let n="";const e=`
      <div class ="card">${h[0].name}</div>
      <div class ="card">${h[1].name}</div>
      <div class ="card">${h[2].name}</div>`;n+=e,x!==null&&(x.innerHTML=n)},ye=()=>{i!==null&&u!==null&&d!==null&&L!==null&&w!==null&&(ae.value===i.name&&re.value===u.name&&ce.value===d.name?(m==null||m.classList.toggle("tot-hidden"),c==null||c.classList.toggle("hidden"),L.innerHTML="You win!",w.innerHTML=`${i.name} killed Mr Burns at ${d.name} with a ${u.name}!`,console.log("you win!")):(m==null||m.classList.toggle("tot-hidden"),c==null||c.classList.toggle("hidden"),L.innerHTML="You loose!",w.innerHTML=`${i.name} killed Mr Burns at ${d.name} with a ${u.name}!`,console.log("you loose!")))};b==null||b.addEventListener("click",ye);le();S(h);S(H);S($);ie();me();
