(()=>{var e={138:e=>{let t,n=null;function r(){const e=[["","",""],["","",""],["","",""]];function r(t=e){let n=!1;return n=!(t[0].includes("")||t[1].includes("")||t[2].includes("")),n}const a=()=>{const l=document.querySelector(".container");let u="";e.forEach(((e,t)=>{e.forEach(((e,n)=>{u+=`\n         <div class="gameboard" data-primary-index = '${t}' data-index='${n}'>${e}</div>\n         `}))})),null!=n||r()?null==n&&r()?document.querySelector("#current-player").innerHTML="It's a tie!":null!=n&&(document.querySelector("#current-player").innerHTML=`The Winner is ${n.name} (${n.pSymbol}) !!`):document.querySelector("#current-player").innerHTML=`It is ${t.name}'s (${t.pSymbol}) turn! `,l.innerHTML=u,document.querySelectorAll(".gameboard").forEach((r=>{r.addEventListener("click",(()=>{var l,u;l=parseInt(r.getAttribute("data-index"),10),u=parseInt(r.getAttribute("data-primary-index"),10),""===e[u][l]&&null===n&&(e[u][l]=t.pSymbol,o.checkGame(),o.alterPlayer(t),a())}))}))};return{gameboard:e,boardFull:r,render:a}}function a(e,t="Player"){return{pSymbol:e,name:t}}const l=r();let o=c(a("x"),a("o"),l);function u(e,t,n){return e===t&&t===n&&""!==e}function c(e,l,d){function m(t){n="x"===t?e:l}return{play:function(){t=e,d.render()},checkGame:function(){const{gameboard:e}=d;for(let t=0;t<3;t+=1)u(e[t][0],e[t][1],e[t][2])&&m(e[t][0]);for(let t=0;t<3;t+=1)u(e[0][t],e[1][t],e[2][t])&&m(e[0][t]);u(e[0][0],e[1][1],e[2][2])?m(e[0][0]):u(e[0][2],e[1][1],e[2][0])&&m(e[0][2])},alterPlayer:function(n){return t=n===e?l:e,t},resetGame:function(u=null){null!==u&&u.preventDefault(),"start"===document.getElementById("start_reset_button").value?""!==document.getElementById("onename").value&&""!==document.getElementById("twoname").value?(document.querySelector(".c-holder").classList.add("container"),o.play(),e.name=document.getElementById("onename").value,l.name=document.getElementById("twoname").value,document.getElementById("labels").style.display="none",d.render(),document.getElementById("start_reset_button").value="reset"):alert("Please enter a valid name"):(n=null,d=r(),e=a("x",e.name),l=a("o",l.name),t=e,o=c(e,l,d),d.render())},currentPlayer:t}}e.exports={GameBoard:r,Players:a,GameLogic:c},window.onload=()=>{document.getElementById("start_reset_button").value="start",document.getElementById("start_reset_button").addEventListener("click",o.resetGame)}}},t={};!function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(138)})();