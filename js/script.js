!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DIR_RIGHT="R",t.DIR_LEFT="L",t.STATE_RUNNING="running",t.STATE_STOPPED_FAIL="stopped-fail",t.STATE_STOPPED_SUCCESS="stopped-success",t.BLANK="B"},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,n,r){a(this,e),this.nextState=t,this.rewrite=n,this.direction=r};t.default=r},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,n,r,i){a(this,e),this.direction=t,this.highlight=n,this.tape=r,this.newState=i};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t,n){var r=[],u=document.querySelector(".transition-table > thead > tr");u.innerHTML="";for(var c in e)e.hasOwnProperty(c)&&r.push(c);r.pop();var s=document.createElement("th");s.textContent="-",u.appendChild(s),t.forEach(function(e){var t=document.createElement("th");t.textContent=e,u.appendChild(t)});var o=document.querySelector(".transition-table > tbody");o.innerHTML="",r.forEach(function(n){if(e.hasOwnProperty(n)){var a=document.createElement("tr"),i=document.createElement("th");i.innerHTML="q<sub>"+n+"</sub>",a.appendChild(i),t.forEach(function(t){var i=document.createElement("td");if(e[n].hasOwnProperty(t)){var u=e[n][t],c=u.nextState<r.length?u.nextState:"F";i.innerHTML="q<sub>"+c+"</sub><span>|</span>"+u.rewrite+"<span>|</span>"+u.direction}i.dataset.state=n,i.dataset.symbol=t,i.classList.add("transition"),a.appendChild(i)}),o.appendChild(a)}});var l=function(e){e.addEventListener("click",function(t){if(!e.classList.contains("editing")){var n=e.textContent.length>0?e.textContent:"";e.innerHTML='<input value="'+n+'" type="text"/>',e.classList.add("editing"),document.querySelector("#set-transitions").style.display="inline"}})};document.querySelectorAll("td.transition").forEach(function(e){return l(e)}),document.querySelector("#set-transitions").addEventListener("click",function(t){t.preventDefault(),document.querySelectorAll("td.transition").forEach(function(t){var n=t.querySelector("input");if(n){e.hasOwnProperty(t.dataset.state)||(e[t.dataset.state]={}),e[t.dataset.state].hasOwnProperty[t.dataset.symbol]||(e[t.dataset.state][t.dataset.symbol]={});var r=n.value.split("|"),u=a(r,3),c=u[0],s=u[1],o=u[2];c=c.replace("q",""),e[t.dataset.state][t.dataset.symbol]=new i.default(parseInt(c),s,o),t.classList.remove("editing"),t.innerHTML=n.value,l(t)}}),n.transitionTable=e})};var r=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),u=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(){function e(t,n,r,u,c,s){a(this,e),this.states=t,this.finalStates=n,this.head=r,this.state=u,this.transitionFunction=c,this.tape=s,this.running=i.STATE_RUNNING,this.apply=this.apply.bind(this)}return r(e,[{key:"apply",value:function(e){this.tape[this.head]=e.rewrite;var t=this.head;return this.head+=e.direction===i.DIR_LEFT?-1:1,this.state=e.nextState,new c.default(e.direction,t,this.tape,this.state)}}]),e}();t.default=s},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.set72=t.set71=void 0;var r=n(3),i=a(r),u=n(1),c=a(u),s=n(0),o=function(e,t,n,a){return e={0:{a:new c.default(1,"a",s.DIR_RIGHT)},1:{a:new c.default(1,"a",s.DIR_RIGHT),b:new c.default(2,"b",s.DIR_RIGHT)},2:{b:new c.default(2,"b",s.DIR_RIGHT),c:new c.default(3,"c",s.DIR_RIGHT)},3:{c:new c.default(3,"c",s.DIR_RIGHT),B:new c.default(4,s.BLANK,s.DIR_LEFT)},4:{}},t.transitionFunction=e,t.states=[0,1,2,3,4],t.finalStates=[4],document.querySelector(".description").innerHTML="This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0}",a=["a","a","b","b","c"],n(a),(0,i.default)(e,["a","b","c",s.BLANK],t),a},l=function(e,t,n,a){return e={0:{a:new c.default(1,s.BLANK,s.DIR_RIGHT)},1:{a:new c.default(1,"a",s.DIR_RIGHT),b:new c.default(1,"b",s.DIR_RIGHT),c:new c.default(1,"c",s.DIR_RIGHT),B:new c.default(2,s.BLANK,s.DIR_LEFT)},2:{c:new c.default(3,s.BLANK,s.DIR_LEFT)},3:{a:new c.default(3,"a",s.DIR_LEFT),b:new c.default(3,"b",s.DIR_LEFT),c:new c.default(3,"c",s.DIR_LEFT),B:new c.default(4,s.BLANK,s.DIR_RIGHT)},4:{a:new c.default(1,s.BLANK,s.DIR_RIGHT),b:new c.default(5,s.BLANK,s.DIR_RIGHT)},5:{b:new c.default(5,"b",s.DIR_RIGHT),c:new c.default(5,"c",s.DIR_RIGHT),B:new c.default(6,s.BLANK,s.DIR_LEFT)},6:{c:new c.default(7,s.BLANK,s.DIR_LEFT)},7:{b:new c.default(7,"b",s.DIR_LEFT),c:new c.default(7,"c",s.DIR_LEFT),B:new c.default(8,s.BLANK,s.DIR_RIGHT)},8:{b:new c.default(5,s.BLANK,s.DIR_RIGHT),B:new c.default(9,s.BLANK,s.DIR_RIGHT)},9:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6,7,8,9],t.finalStates=[9],document.querySelector(".description").innerHTML="This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0, i+j=k}",a=["a","a","b","b","c","c","c","c"],n(a),(0,i.default)(e,["a","b","c",s.BLANK],t),a};t.set71=o,t.set72=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector(".symbols-wrapper");n.innerHTML="";var r=50*e.tape.length;document.querySelector(".current-state").innerHTML="q<sub>"+e.newState+"</sub>",r+=50;var i=document.createElement("div");i.classList.add("symbol"),i.classList.add("blank"),i.textContent=a.BLANK,n.appendChild(i),e.tape.forEach(function(t,a){var r=document.createElement("div");r.classList.add("symbol"),void 0!==e.highlight&&e.highlight===a&&r.classList.add("highlight"),r.textContent=t,n.appendChild(r)}),e.tape[e.tape.length-1]!==a.BLANK&&(r+=50,i=document.createElement("div"),i.classList.add("symbol"),i.classList.add("blank"),i.textContent=a.BLANK,n.appendChild(i)),n.style.width=r+"px";var u=parseInt(getComputedStyle(n).transform.split(",")[4]);(-1===u||t)&&(u=r/2-25),e.direction===a.DIR_RIGHT?u-=50:e.direction===a.DIR_LEFT&&(u+=50),n.style.transform="translateX("+u+"px)"};var a=n(0),r=n(2);!function(e){e&&e.__esModule}(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.state,n="B";e.head>=0&&e.head<e.tape.length&&(n=e.tape[e.head]);var r=e.transitionFunction[t];return e.finalStates.indexOf(t)>-1?(console.log("Machine stopped successfuly"),{machineStep:null,running:a.STATE_STOPPED_SUCCESS}):r.hasOwnProperty(n)?{machineStep:r[n],running:a.STATE_RUNNING}:(console.log("Machine stopped because of undefined transition from the current state"),{machineStep:null,running:a.STATE_STOPPED_FAIL})};var a=n(0),r=n(1);!function(e){e&&e.__esModule}(r)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(0),i=n(6),u=a(i),c=n(7),s=a(c),o=n(4),l=a(o),d=n(1),f=a(d),p=n(2),h=a(p),T=n(3),_=a(T),v=n(5),I={0:{a:new f.default(1,"a",r.DIR_RIGHT)},1:{a:new f.default(1,"a",r.DIR_RIGHT),b:new f.default(2,"b",r.DIR_RIGHT)},2:{b:new f.default(2,"b",r.DIR_RIGHT),c:new f.default(3,"c",r.DIR_RIGHT)},3:{c:new f.default(3,"c",r.DIR_RIGHT),B:new f.default(4,r.BLANK,r.DIR_LEFT)},4:{}},y=["a","b","c","B"],R=window.input||["a","a","b","b","c"],b=[0,1,2,3,4],w=[4],S=new l.default(b,w,0,0,I,R.slice()),L=!0,m=function(e){S.head=0,S.state=0,S.tape=e.slice(),S.running=r.STATE_RUNNING;var t=document.querySelector(".state");t.classList.remove("fail"),t.textContent="",document.querySelector("#machine-input").value=e.join(""),(0,u.default)(new h.default(r.DIR_RIGHT,void 0,S.tape,0),!0)},E=function(){L&&(L=!1,m(R),setTimeout(function(){L=!0},100))},D=function(){if(L&&S.running===r.STATE_RUNNING){L=!1;var e=(0,s.default)(S),t=e.machineStep,n=e.running,a=null;switch(n){case r.STATE_STOPPED_FAIL:S.running=r.STATE_STOPPED_FAIL,a=document.querySelector(".state"),a.classList.add("fail"),a.textContent="Machine stopped unsuccessfully";break;case r.STATE_STOPPED_SUCCESS:S.running=r.STATE_STOPPED_SUCCESS,a=document.querySelector(".state"),a.classList.add("success"),a.textContent="Machine stopped successfully";break;case r.STATE_RUNNING:var i=S.apply(t);(0,u.default)(i);break;default:console.err("Unknown machine state")}setTimeout(function(){L=!0},100)}};document.onkeypress=function(e){"KeyR"===e.code&&E(),"Space"===e.code&&D()},document.querySelector("a#r").addEventListener("click",function(e){e.preventDefault(),E()}),document.querySelector("a#space").addEventListener("click",function(e){e.preventDefault(),D()}),document.querySelector("#editor > a.banner").addEventListener("click",function(e){var t=document.querySelector("#editor");t.classList.contains("active")?t.style.right="-550px":t.style.right="0",t.classList.toggle("active")}),document.querySelector("#machine-input").value=R.join("");var A=document.querySelector("#reset");switch(A.addEventListener("click",function(e){e.preventDefault(),A.blur();var t=R=document.querySelector("#machine-input").value;"tourette"===t?(R="fuck".split(""),b=[0,1,2,3,4],w=[4],y=["f","u","c","k"],I={0:{f:new f.default(1,"s",r.DIR_RIGHT)},1:{u:new f.default(2,"h",r.DIR_RIGHT)},2:{c:new f.default(3,"i",r.DIR_RIGHT)},3:{k:new f.default(4,"t",r.DIR_RIGHT)}},S=new l.default(b,w,0,0,I,R.slice())):(R=t.split(""),y=R.reduce(function(e,t){return e.indexOf(t)<0&&e.push(t),e},[])),y.push(r.BLANK),m(R),(0,_.default)(I,y,S)}),document.querySelector("#add-state").addEventListener("click",function(e){e.preventDefault();var t=b.reduce(function(e,t){return t>e?t:e},0)+1;b.push(t),I[t]={},S.transitionTable=I,S.finalStates=[t],(0,_.default)(I,y,S)}),window.location.hash){case"#cv72":R=(0,v.set72)(I,S,m);break;case"#cv71":default:R=(0,v.set71)(I,S,m),(0,_.default)(I,y,S)}document.querySelector("a#cv71").addEventListener("click",function(e){R=(0,v.set71)(I,S,m,R)}),document.querySelector("a#cv72").addEventListener("click",function(e){R=(0,v.set72)(I,S,m,R)}),window.reset=m}]);