(()=>{"use strict";var e={741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Statue=void 0;class n{constructor(e,t,n,a){this.title=e,this.year=t,this.price=n,this.height=a}}t.Statue=n,t.Statue=n}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var m=t[a]={exports:{}};return e[a](m,m.exports,n),m.exports}(()=>{const e=n(741);let t=[];document.addEventListener("DOMContentLoaded",(()=>{var n;let a=0,d=0,m=/^[A-Za-z, ]{1,}$/;null===(n=document.getElementById("felvetel"))||void 0===n||n.addEventListener("click",(()=>{document.getElementById("rNev").textContent="",document.getElementById("rEv").textContent="",document.getElementById("rAr").textContent="",document.getElementById("rMagassag").textContent="";let n=m.test(document.getElementById("nev").value),o=parseInt(document.getElementById("ev").value)<=2022,l=parseInt(document.getElementById("ara").value)>=1,r=parseInt(document.getElementById("Szmagassag").value)>10;n&&o&&l&&r?(a++,d+=parseInt(document.getElementById("ar").value),document.getElementById("SzSzam").textContent=a.toString(),document.getElementById("osszesAra").textContent=d.toString(),t.push(new e.Statue(document.getElementById("nev").value,parseInt(document.getElementById("ev").value),parseInt(document.getElementById("ara").value),parseInt(document.getElementById("Szmagassag").value))),document.getElementById("nev").value="",document.getElementById("ev").value="",document.getElementById("ara").value="",document.getElementById("magassag").value=""):n?o?l?r||(document.getElementById("rMagassag").textContent="Rossz magasságot adott meg (min 10)!"):document.getElementById("rAr").textContent="Rossz áratt adott meg (min 1)!":document.getElementById("rEv").textContent="Rossz évjáratot adott meg!":document.getElementById("rNev").textContent="Nem megfelelő név!(Csak angol ABC karaktereket, szőköz illetve vessző karaktereket tartalmazhat)"}))}))})()})();