(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const L of a.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&l(L)}).observe(document,{childList:!0,subtree:!0});function c(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=c(n);fetch(n.href,a)}})();const W={name:"Ned Flanders"},z={name:"Sideshow Bob"},J={name:"Edna Krabappel"},Q={name:"Krusty The Clown"},U={name:"Agnes Skinner"},V={name:"Helen Lovejoy"},X={name:"rope"},Z={name:"revolver"},_={name:"candlestick"},B={name:"knife"},ee={name:"wrench"},te={name:"baseball bat"},oe={name:"Krusty Burger",className:"krusty-burger"},ne={name:"Moes Tavern",className:"moes-tavern"},se={name:"Town Hall",className:"town-hall"},ae={name:"Burns Manor",className:"burns-manor"},re={name:"Simpsons House",className:"simpsons-house"},ce={name:"Kwik-E-Mart",className:"kwik-e-mart"},le={name:"Nuclear Power Plant",className:"nuclear-power-plant"},ie={name:"Town Square",className:"town-square"},ue={name:"Elementary School",className:"elementary-school"},de=[W,z,J,Q,U,V],me=[X,Z,_,B,ee,te],pe=[oe,ne,se,ae,re,ce,le,ie,ue],s={suspectsArray:de,weaponsArray:me,roomsArray:pe},b=document.querySelector("#dice"),w=document.querySelectorAll(".counter span"),v=document.querySelector("#rolled span"),d=document.querySelector("#info span"),ye=document.querySelector("#player"),x=document.querySelectorAll(".computer"),r=document.querySelectorAll("[class^=room]"),t=document.querySelector("#guess"),f=document.querySelector("main"),i=document.querySelector("#result"),A=document.querySelector("#accuse-reveal"),M=document.querySelector("#solution"),C=document.querySelector("#accuse");i==null||i.classList.toggle("hidden");const j=document.querySelector("#suspects"),D=document.querySelector("#weapon"),F=document.querySelector("#locations");let E=!1,O=null,m=null,p=null,y=null,S=null,h=[];const H=[],k=[],I=[],g=[],Y=[];let u=0,q=0,T=0;const fe=()=>{m=s.suspectsArray[Math.floor(Math.random()*s.suspectsArray.length)];const o=s.suspectsArray.indexOf(m);s.suspectsArray.splice(o,1),p=s.weaponsArray[Math.floor(Math.random()*s.weaponsArray.length)];const e=s.weaponsArray.indexOf(p);s.weaponsArray.splice(e,1),y=s.roomsArray[Math.floor(Math.random()*s.roomsArray.length)];const c=s.weaponsArray.indexOf(y);return s.roomsArray.splice(c,1),{suspect:m,weapon:p,room:y}};h=s.suspectsArray.concat(s.weaponsArray,s.roomsArray);const R=o=>{for(let e=0;e<6;e+=1){S=h[Math.floor(Math.random()*h.length)];const c=h.indexOf(S);o.push(S),h.splice(c,1)}},he=()=>{switch(O=Math.floor(Math.random()*9)+1,O){case 0:r[0].classList.add("active");break;case 1:r[1].classList.add("active");break;case 2:r[2].classList.add("active");break;case 3:r[3].classList.add("active");break;case 4:r[4].classList.add("active");break;case 5:r[5].classList.add("active");break;case 6:r[6].classList.add("active");break;case 7:r[7].classList.add("active");break;case 8:r[8].classList.add("active");break;default:r[0].classList.add("active");break}},N=(o,e)=>{let c="";const l=e;for(const n of o){const a=`
      <li class ="card">${n.name}</div>`;c+=a,l!=null&&(l.innerHTML=c)}},K=o=>{if(d!==null){for(let e=0;e<o.length;e++)if(j.value===o[e].name||D.value===o[e].name||F.value===o[e].name){T+=1;const c=e,l=o[e];g.length<6?g.push(l):Y.push(l),o.splice(c,1),e=0,g.length<6?N(g,x[0]):N(Y,x[1])}d.textContent=`Your guess resulted in ${T}/3 matches!`}};console.log(x.item(1));const $=()=>{T=0,k.length!==0?(console.log("array 1 running"),K(k)):(console.log("array 2 running"),K(I)),t==null||t.removeEventListener("click",$),t==null||t.classList.remove("active-btn")},ve=()=>{E&&t!==null?t==null||t.classList.add("active-btn"):(t==null||t.classList.remove("active-btn"),t==null||t.removeEventListener("click",$))};function P(o){t==null||t.addEventListener("click",$),r.forEach(e=>{e.getAttribute("id")===o.currentTarget.id&&d!==null?(e.classList.add("active"),console.log(o),d.textContent="You may make a guess."):e.classList.remove("active")}),u=0,ve(),G(u)}const G=o=>{if(o>3?(E=!0,r.forEach(e=>{e.addEventListener("click",P)})):(E=!1,r.forEach(e=>{e.removeEventListener("click",P)})),q+=1,w!=null)for(let e=0;e<w.length;e++)w[e].textContent=String(q);console.log(q)},ge=()=>{u=Math.floor(Math.random()*6)+1,u>3&&v!==null&&d!==null?(v.textContent=`You rolled a ${u}!`,d.textContent="You may move to another location!"):u<=3&&v!==null&&d!==null&&(v.textContent=`You rolled a ${u}!`,d.textContent=" You are stuck!"),t==null||t.classList.remove("active-btn"),G(u)};b==null||b.addEventListener("click",ge);console.log(H);console.log(k);console.log(I);const ke=()=>{m!==null&&p!==null&&y!==null&&A!==null&&M!==null&&(j.value===m.name&&D.value===p.name&&F.value===y.name?(f==null||f.classList.toggle("tot-hidden"),i==null||i.classList.toggle("hidden"),A.innerHTML="You win!",M.innerHTML=`${m.name} killed Mr Burns at ${y.name} with a ${p.name}!`,console.log("you win!")):(f==null||f.classList.toggle("tot-hidden"),i==null||i.classList.toggle("hidden"),A.innerHTML="You loose!",M.innerHTML=`${m.name} killed Mr Burns at ${y.name} with a ${p.name}!`,console.log("you loose!")))};C==null||C.addEventListener("click",ke);fe();R(H);R(k);R(I);he();N(H,ye);
