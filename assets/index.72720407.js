(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const q of i.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&l(q)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const ne={name:"Ned Flanders",className:"ned-flanders",imgPath:"img/person.png"},re={name:"Sideshow Bob",className:"sideshow-bob",imgPath:"img/person.png"},ae={name:"Edna Krabappel",className:"edna-krabappel",imgPath:"img/person.png"},ce={name:"Krusty The Clown",className:"krusty-the-clown",imgPath:"img/person.png"},le={name:"Agnes Skinner",className:"agnes-skinner",imgPath:"img/person.png"},ie={name:"Helen Lovejoy",className:"helen-lovejoy",imgPath:"img/person.png"},de={name:"rope",className:"rope",imgPath:"img/sword.png"},me={name:"revolver",className:"revolver",imgPath:"img/sword.png"},ue={name:"candlestick",className:"candlestick",imgPath:"img/sword.png"},he={name:"knife",className:"knife",imgPath:"img/sword.png"},ge={name:"wrench",className:"wrench",imgPath:"img/sword.png"},pe={name:"baseball bat",className:"baseball-bat",imgPath:"img/sword.png"},ye={name:"Krusty Burger",className:"krusty-burger",imgPath:"img/map.png"},fe={name:"Moes Tavern",className:"moes-tavern",imgPath:"img/map.png"},Le={name:"Town Hall",className:"town-hall",imgPath:"img/map.png"},ve={name:"Burns Manor",className:"burns-manor",imgPath:"img/map.png"},Se={name:"Simpsons House",className:"simpsons-house",imgPath:"img/map.png"},be={name:"Kwik-E-Mart",className:"kwik-e-mart",imgPath:"img/map.png"},ke={name:"Nuclear Power Plant",className:"nuclear-power-plant",imgPath:"img/map.png"},we={name:"Town Square",className:"town-square",imgPath:"img/map.png"},Ae={name:"Elementary School",className:"elementary-school",imgPath:"img/map.png"},Me={name:"Apu",rounds:121},Ne={name:"Comic Guy",rounds:78},qe={name:"Barney",rounds:153},Pe={name:"Willie",rounds:86},Te={name:"Milhouse",rounds:86},Ce={name:"Lenny",rounds:134},He={name:"Quimby",rounds:69},Ee={name:"Fat Tony",rounds:99},xe={name:"Smithers",rounds:105},Re=[ne,re,ae,ce,le,ie],$e=[de,me,ue,he,ge,pe],Ie=[ye,fe,Le,ve,Se,be,ke,we,Ae],Oe=[Me,Ne,qe,Pe,Te,Ce,He,Ee,xe],s={suspectsArray:Re,weaponsArray:$e,roomsArray:Ie,highScoresArray:Oe},P=document.querySelector("#dice"),T=document.querySelectorAll(".counter span"),k=document.querySelector("#rolled span"),g=document.querySelector("#info span"),Ye=document.querySelector("#player"),Q=document.querySelectorAll(".computer"),d=document.querySelectorAll("[class^=room]"),c=document.querySelector("main"),C=document.querySelector(".intro"),u=document.querySelector("#result"),y=document.querySelector("#help"),f=document.querySelector("#high-score"),H=document.querySelector("#accuse-reveal"),E=document.querySelector("#mobile"),w=document.querySelector("#solution"),x=document.querySelector("#play"),o=document.querySelector("#guess"),a=document.querySelector("#high-score-toggle"),R=document.querySelector("#result-high-score-toggle"),$=document.querySelector("#accuse"),m=document.querySelector("#help-toggle"),L=document.querySelector("#play-again"),_=[],Y=[],B=[],I=[],U=[],K=document.querySelector("#suspects"),V=document.querySelector("#weapon"),W=document.querySelector("#locations"),A=document.querySelector("#nickname");u==null||u.classList.toggle("hidden");y==null||y.classList.toggle("tot-hidden");f==null||f.classList.toggle("tot-hidden");E==null||E.classList.toggle("tot-hidden");c==null||c.classList.toggle("tot-hidden");a.classList.add("tot-hidden");m.classList.add("tot-hidden");let M="Homer",j=!1,z=null,ee=!1,p=null,v=null,S=null,O=null,b=[],h=0,N=0,D=0;const Ke=()=>{A!==void 0&&A.value.length!==0?(c==null||c.classList.toggle("tot-hidden"),C==null||C.classList.toggle("intro-out"),a.classList.toggle("tot-hidden"),m.classList.toggle("tot-hidden"),M=A.value):A.value="IsThatYouHomer?"},Ve=()=>{p=s.suspectsArray[Math.floor(Math.random()*s.suspectsArray.length)];const n=s.suspectsArray.indexOf(p);s.suspectsArray.splice(n,1),v=s.weaponsArray[Math.floor(Math.random()*s.weaponsArray.length)];const e=s.weaponsArray.indexOf(v);s.weaponsArray.splice(e,1),S=s.roomsArray[Math.floor(Math.random()*s.roomsArray.length)];const r=s.roomsArray.indexOf(S);return s.roomsArray.splice(r,1),b=s.suspectsArray.concat(s.weaponsArray,s.roomsArray),{suspect:p,weapon:v,room:S}};Ve();const G=n=>{for(let e=0;e<6;e+=1){O=b[Math.floor(Math.random()*b.length)];const r=b.indexOf(O);n.push(O),b.splice(r,1)}},We=()=>{switch(z=Math.floor(Math.random()*9)+1,z){case 0:d[0].classList.add("active");break;case 1:d[1].classList.add("active");break;case 2:d[2].classList.add("active");break;case 3:d[3].classList.add("active");break;case 4:d[4].classList.add("active");break;case 5:d[5].classList.add("active");break;case 6:d[6].classList.add("active");break;case 7:d[7].classList.add("active");break;case 8:d[8].classList.add("active");break;default:d[0].classList.add("active");break}},F=(n,e)=>{let r="";const l=e;for(const t of n){const i=`
      <li class ="card">${t.name}
      <img src = ${t.imgPath} alt ="Category Icon"><li>`;r+=i,l!=null&&(l.innerHTML=r)}},X=n=>{if(g!==null){for(let e=n.length-1;e>=0;e--)if(K.value===n[e].className||V.value===n[e].className||W.value===n[e].className){D+=1;const r=n[e];I.length<6?(I.push(r),F(I,Q[0])):(U.push(r),F(U,Q[1])),n.splice(e,1)}g.textContent=`Your guess resulted in ${D}/3 matches!`}},J=()=>{D=0,Y.length!==0?X(Y):X(B),o==null||o.removeEventListener("click",J),o==null||o.classList.remove("active-btn")},je=()=>{j&&o!==null?o==null||o.classList.add("active-btn"):(o==null||o.classList.remove("active-btn"),o==null||o.removeEventListener("click",J))},De=()=>{m!==null&&y!==null&&c!==null&&(y.classList.toggle("tot-hidden"),a.classList.toggle("tot-hidden"),c.classList.toggle("tot-hidden"),m.innerHTML==="Return"?m.innerHTML="HELP!":m.innerHTML="Return")},te=()=>{a!==null&&f!==null&&c!==null&&(f.classList.toggle("tot-hidden"),m.classList.toggle("tot-hidden"),c.classList.toggle("tot-hidden"),a.innerHTML==="Return"?(a.style.right="120px",a.innerHTML="Highscore"):(a.style.right="10px",a.innerHTML="Return")),ee===!0&&a!==null&&f!==null&&c!==null&&(m.classList.add("tot-hidden"),c.classList.add("tot-hidden"),u==null||u.classList.toggle("hidden"),L==null||L.classList.remove("hidden"),a.classList.toggle("tot-hidden"))};function Z(n){o==null||o.addEventListener("click",J),d.forEach(e=>{e.getAttribute("id")===n.currentTarget.id&&g!==null?(e.classList.add("active"),g.textContent="You may make a guess."):e.classList.remove("active")}),h=0,je(),se(h)}const se=n=>{if(n>3?(j=!0,d.forEach(e=>{e.addEventListener("click",Z)})):(j=!1,d.forEach(e=>{e.removeEventListener("click",Z)})),N+=1,T!=null)for(let e=0;e<T.length;e++)T[e].textContent=String(N);console.log(N)},Fe=()=>{h=Math.floor(Math.random()*6)+1,h>3&&k!==null&&g!==null?(k.textContent=`You rolled a ${h}!`,g.textContent="Woho! You may move to another location!"):h<=3&&k!==null&&g!==null&&(k.textContent=`You rolled a ${h}!`,g.textContent=' D"oh! You are stuck!'),o==null||o.classList.remove("active-btn"),se(h)},Ge=()=>{const n=document.querySelector("#high-score-table");s.highScoresArray.sort((l,t)=>l.rounds>t.rounds?1:-1),s.highScoresArray.length>10&&s.highScoresArray.splice(10,1);let e=`
  <tr>
    <th>Name</th>
    <th>Rounds</th>
  </tr>
  `;const r=n;for(const l of s.highScoresArray){const t=`
      <tr>
      <td>${l.name}</td>
      <td> ${l.rounds}</td>
      </tr>`;e+=t,r!=null&&(r.innerHTML=e)}},oe=()=>{s.highScoresArray=JSON.parse(localStorage.getItem("highScorePlayers")||"[]"),Ge()},Je=()=>{if(p!==null&&v!==null&&S!==null&&H!==null&&w!==null&&y!==null&&f!==null){const n=K.value.replaceAll("-"," "),e=W.value.replaceAll("-"," "),r=V.value.replaceAll("-"," ");if(ee=!0,a.classList.add("tot-hidden"),m.classList.add("tot-hidden"),y.classList.add("tot-hidden"),c==null||c.classList.toggle("tot-hidden"),u==null||u.classList.toggle("hidden"),w.innerHTML=`Your accused ${n} for killing Mr Burns at 
      ${e} with a ${r}.<br><br>`,K.value===p.className&&V.value===v.className&&W.value===S.className){H.innerHTML=`You win ${M}!<br><br>`,w.innerHTML+=`Chief Wiggum will take over from here, ${p.name} will
      be taken into custody.<br><br>`;const l={name:M,rounds:N};s.highScoresArray.push(l),localStorage.setItem("highScorePlayers",JSON.stringify(s.highScoresArray))}else H.innerHTML=`You loose ${M}!<br><br>`,w.innerHTML+=` The truth is that ${p.name} killed Mr Burns at ${S.name} 
      with a ${v.name}!<br><br> Unfortunately only correct solutions reaches the highscore.<br><br>`}oe()},Qe=()=>{window.location.reload()};x==null||x.addEventListener("click",Ke);L==null||L.addEventListener("click",Qe);P==null||P.addEventListener("click",Fe);m==null||m.addEventListener("click",De);a==null||a.addEventListener("click",te);R==null||R.addEventListener("click",te);$==null||$.addEventListener("click",Je);G(_);G(Y);G(B);We();F(_,Ye);oe();
