(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const w of a.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&l(w)}).observe(document,{childList:!0,subtree:!0});function c(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=c(o);fetch(o.href,a)}})();const U={name:"Ned Flanders",imgPath:"public/img/person.png"},V={name:"Sideshow Bob",imgPath:"public/img/person.png"},X={name:"Edna Krabappel",imgPath:"public/img/person.png"},Z={name:"Krusty The Clown",imgPath:"public/img/person.png"},_={name:"Agnes Skinner",imgPath:"public/img/person.png"},B={name:"Helen Lovejoy",imgPath:"public/img/person.png"},ee={name:"rope",imgPath:"public/img/sword.png"},te={name:"revolver",imgPath:"public/img/sword.png"},ne={name:"candlestick",imgPath:"public/img/sword.png"},oe={name:"knife",imgPath:"public/img/sword.png"},se={name:"wrench",imgPath:"public/img/sword.png"},ae={name:"baseball bat",imgPath:"public/img/sword.png"},re={name:"Krusty Burger",className:"krusty-burger",imgPath:"public/img/map.png"},ce={name:"Moes Tavern",className:"moes-tavern",imgPath:"public/img/map.png"},le={name:"Town Hall",className:"town-hall",imgPath:"public/img/map.png"},ie={name:"Burns Manor",className:"burns-manor",imgPath:"public/img/map.png"},me={name:"Simpsons House",className:"simpsons-house",imgPath:"public/img/map.png"},ue={name:"Kwik-E-Mart",className:"kwik-e-mart",imgPath:"public/img/map.png"},de={name:"Nuclear Power Plant",className:"nuclear-power-plant",imgPath:"public/img/map.png"},pe={name:"Town Square",className:"town-square",imgPath:"public/img/map.png"},ge={name:"Elementary School",className:"elementary-school",imgPath:"public/img/map.png"},he=[U,V,X,Z,_,B],ye=[ee,te,ne,oe,se,ae],fe=[re,ce,le,ie,me,ue,de,pe,ge],s={suspectsArray:he,weaponsArray:ye,roomsArray:fe},P=document.querySelector("#dice"),A=document.querySelectorAll(".counter span"),v=document.querySelector("#rolled span"),m=document.querySelector("#info span"),be=document.querySelector("#player"),$=document.querySelectorAll(".computer"),r=document.querySelectorAll("[class^=room]"),b=document.querySelector("main"),p=document.querySelector("#result"),d=document.querySelector("#help"),M=document.querySelector("#accuse-reveal"),S=document.querySelector("#mobile"),K=document.querySelector("#solution"),t=document.querySelector("#guess"),q=document.querySelector("#accuse"),u=document.querySelector("#help-toggle"),C=document.querySelector("#play-again");p==null||p.classList.toggle("hidden");d==null||d.classList.toggle("tot-hidden");S==null||S.classList.toggle("tot-hidden");const W=document.querySelector("#suspects"),z=document.querySelector("#weapon"),J=document.querySelector("#locations");let T=!1,j=null,g=null,h=null,y=null,x=null,f=[];const R=[],k=[],I=[],L=[],D=[];let i=0,E=0,H=0;const ve=()=>{g=s.suspectsArray[Math.floor(Math.random()*s.suspectsArray.length)];const n=s.suspectsArray.indexOf(g);s.suspectsArray.splice(n,1),h=s.weaponsArray[Math.floor(Math.random()*s.weaponsArray.length)];const e=s.weaponsArray.indexOf(h);s.weaponsArray.splice(e,1),y=s.roomsArray[Math.floor(Math.random()*s.roomsArray.length)];const c=s.weaponsArray.indexOf(y);return s.roomsArray.splice(c,1),{suspect:g,weapon:h,room:y}};f=s.suspectsArray.concat(s.weaponsArray,s.roomsArray);const O=n=>{for(let e=0;e<6;e+=1){x=f[Math.floor(Math.random()*f.length)];const c=f.indexOf(x);n.push(x),f.splice(c,1)}},Le=()=>{switch(j=Math.floor(Math.random()*9)+1,j){case 0:r[0].classList.add("active");break;case 1:r[1].classList.add("active");break;case 2:r[2].classList.add("active");break;case 3:r[3].classList.add("active");break;case 4:r[4].classList.add("active");break;case 5:r[5].classList.add("active");break;case 6:r[6].classList.add("active");break;case 7:r[7].classList.add("active");break;case 8:r[8].classList.add("active");break;default:r[0].classList.add("active");break}},N=(n,e)=>{let c="";const l=e;for(const o of n){const a=`
      <li class ="card">${o.name}
      <img src = ${o.imgPath} alt ="An icon explaining what category the card belong to"></div>`;c+=a,l!=null&&(l.innerHTML=c)}},F=n=>{if(m!==null){for(let e=0;e<n.length;e++)if(W.value===n[e].name||z.value===n[e].name||J.value===n[e].name){H+=1;const c=e,l=n[e];L.length<6?L.push(l):D.push(l),n.splice(c,1),e=0,L.length<6?N(L,$[0]):N(D,$[1])}m.textContent=`Your guess resulted in ${H}/3 matches!`}},Y=()=>{H=0,k.length!==0?(console.log("array 1 running"),F(k)):(console.log("array 2 running"),F(I)),t==null||t.removeEventListener("click",Y),t==null||t.classList.remove("active-btn")},ke=()=>{T&&t!==null?t==null||t.classList.add("active-btn"):(t==null||t.classList.remove("active-btn"),t==null||t.removeEventListener("click",Y))},we=()=>{u!==null&&d!==null&&b!==null&&(d.classList.toggle("tot-hidden"),b.classList.toggle("tot-hidden"),u.innerHTML==="Return"?u.innerHTML="HELP!":u.innerHTML="Return")};function G(n){t==null||t.addEventListener("click",Y),r.forEach(e=>{e.getAttribute("id")===n.currentTarget.id&&m!==null?(e.classList.add("active"),console.log(n),m.textContent="You may make a guess."):e.classList.remove("active")}),i=0,ke(),Q(i)}const Q=n=>{if(n>3?(T=!0,r.forEach(e=>{e.addEventListener("click",G)})):(T=!1,r.forEach(e=>{e.removeEventListener("click",G)})),E+=1,A!=null)for(let e=0;e<A.length;e++)A[e].textContent=String(E);console.log(E)},Pe=()=>{i=Math.floor(Math.random()*6)+1,i>3&&v!==null&&m!==null?(v.textContent=`You rolled a ${i}!`,m.textContent="You may move to another location!"):i<=3&&v!==null&&m!==null&&(v.textContent=`You rolled a ${i}!`,m.textContent=" You are stuck!"),t==null||t.classList.remove("active-btn"),Q(i)};console.log(R);console.log(k);console.log(I);const Ae=()=>{g!==null&&h!==null&&y!==null&&M!==null&&K!==null&&d!==null&&(W.value===g.name&&z.value===h.name&&J.value===y.name?M.innerHTML="You win!":M.innerHTML="You loose!",u.classList.add("tot-hidden"),d.classList.add("tot-hidden"),b==null||b.classList.toggle("tot-hidden"),p==null||p.classList.toggle("hidden"),K.innerHTML=`${g.name} killed Mr Burns at ${y.name} with a ${h.name}!`)},Me=()=>{window.location.reload()};C==null||C.addEventListener("click",Me);P==null||P.addEventListener("click",Pe);u==null||u.addEventListener("click",we);q==null||q.addEventListener("click",Ae);ve();O(R);O(k);O(I);Le();N(R,be);
