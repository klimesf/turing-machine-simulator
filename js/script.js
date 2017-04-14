!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DIR_RIGHT="R",t.DIR_LEFT="L",t.STATE_RUNNING="running",t.STATE_STOPPED_FAIL="stopped-fail",t.STATE_STOPPED_SUCCESS="stopped-success",t.BLANK="B"},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function e(t,n,i,r){a(this,e),this.direction=t,this.highlight=n,this.tape=i,this.newState=r};t.default=i},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function e(t,n,i){a(this,e),this.nextState=t,this.rewrite=n,this.direction=i};t.default=i},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),u=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(){function e(t,n,i,u,o,s){a(this,e),this.states=t,this.finalStates=n,this.head=i,this.state=u,this.transitionFunction=o,this.tape=s,this.running=r.STATE_RUNNING,this.apply=this.apply.bind(this)}return i(e,[{key:"apply",value:function(e){this.tape[this.head]=e.rewrite;var t=this.head;return this.head+=e.direction===r.DIR_LEFT?-1:1,this.state=e.nextState,new o.default(e.direction,t,this.tape,this.state)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=[],a=document.querySelector(".transition-table > thead > tr");a.innerHTML="";var i=document.createElement("th");i.textContent="-",a.appendChild(i),t.forEach(function(e){var t=document.createElement("th");t.textContent=e,a.appendChild(t)});var r=document.querySelector(".transition-table > tbody");r.innerHTML="";for(var u in e){(function(){if(!e.hasOwnProperty(u))return"continue";var a=document.createElement("tr"),i=document.createElement("th");i.innerHTML="q<sub>"+u+"</sub>",a.appendChild(i),t.forEach(function(t){var i=document.createElement("td");if(e[u].hasOwnProperty(t)){var r=e[u][t],o=r.nextState<n.length?r.nextState:"F";i.innerHTML="q<sub>"+o+"</sub><span>|</span>"+r.rewrite+"<span>|</span>"+r.direction}a.appendChild(i)}),r.appendChild(a)})()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector(".symbols-wrapper");n.innerHTML="";var i=50*e.tape.length;if(document.querySelector(".current-state").innerHTML="q<sub>"+e.newState+"</sub>",e.tape[0]!==a.BLANK){i+=50;var r=document.createElement("div");r.classList.add("symbol"),r.classList.add("blank"),r.textContent=a.BLANK,n.appendChild(r)}if(e.tape.forEach(function(t,a){var i=document.createElement("div");i.classList.add("symbol"),void 0!==e.highlight&&e.highlight===a&&i.classList.add("highlight"),i.textContent=t,n.appendChild(i)}),e.tape[e.tape.length-1]!==a.BLANK){i+=50;var u=document.createElement("div");u.classList.add("symbol"),u.classList.add("blank"),u.textContent=a.BLANK,n.appendChild(u)}n.style.width=i+"px";var o=parseInt(getComputedStyle(n).transform.split(",")[4]);(-1===o||t)&&(o=i/2-25),e.direction===a.DIR_RIGHT?o-=50:e.direction===a.DIR_LEFT&&(o+=50),n.style.transform="translateX("+o+"px)"};var a=n(0),i=n(1);!function(e){e&&e.__esModule}(i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.state,n="B";e.head>=0&&e.head<e.tape.length&&(n=e.tape[e.head]);var i=e.transitionFunction[t];return e.finalStates.indexOf(t)>-1?(console.log("Machine stopped successfuly"),{machineStep:null,running:a.STATE_STOPPED_SUCCESS}):i.hasOwnProperty(n)?{machineStep:i[n],running:a.STATE_RUNNING}:(console.log("Machine stopped because of undefined transition from the current state"),{machineStep:null,running:a.STATE_STOPPED_FAIL})};var a=n(0),i=n(2);!function(e){e&&e.__esModule}(i)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=n(5),u=a(r),o=n(6),s=a(o),c=n(3),l=a(c),d=n(2),f=a(d),p=n(1),h=a(p),T=n(4),_=a(T),S={0:{a:new f.default(1,"a",i.DIR_RIGHT)},1:{a:new f.default(1,"a",i.DIR_RIGHT),b:new f.default(2,"b",i.DIR_RIGHT)},2:{b:new f.default(2,"b",i.DIR_RIGHT),c:new f.default(3,"c",i.DIR_RIGHT)},3:{c:new f.default(3,"c",i.DIR_RIGHT),B:new f.default(4,i.BLANK,i.DIR_LEFT)}},v=["a","b","c","B"],m=window.input||["a","a","b","b","c"],y=new l.default([0,1,2,3,4],[4],0,0,S,m.slice()),E=!0,b=function(e){y.head=0,y.state=0,y.tape=e.slice(),y.running=i.STATE_RUNNING;var t=document.querySelector(".state");t.classList.remove("fail"),t.textContent="",(0,u.default)(new h.default(i.DIR_RIGHT,void 0,y.tape,0),!0)};document.onkeypress=function(e){if("KeyR"===e.code){if(!E)return;return E=!1,b(window.input||m),void setTimeout(function(){E=!0},100)}if("Space"===e.code){if(!E)return;if(y.running!==i.STATE_RUNNING)return;E=!1;var t=(0,s.default)(y),n=t.machineStep,a=t.running,r=null;switch(a){case i.STATE_STOPPED_FAIL:y.running=i.STATE_STOPPED_FAIL,r=document.querySelector(".state"),r.classList.add("fail"),r.textContent="Machine stopped unsuccessfully";break;case i.STATE_STOPPED_SUCCESS:y.running=i.STATE_STOPPED_SUCCESS,r=document.querySelector(".state"),r.classList.add("success"),r.textContent="Machine stopped successfully";break;case i.STATE_RUNNING:var o=y.apply(n);(0,u.default)(o);break;default:console.err("Unknown machine state")}return void setTimeout(function(){E=!0},100)}},document.querySelector("#editor > a.banner").addEventListener("click",function(e){var t=document.querySelector("#editor");t.classList.contains("active")?t.style.right="-550px":t.style.right="0",t.classList.toggle("active")}),document.querySelector("#machine-input").value=m.join("");var w=document.querySelector("#reset");w.addEventListener("click",function(e){e.preventDefault(),w.blur();var t=m=document.querySelector("#machine-input").value;"tourette"===t?(m="fuck".split(""),y=new l.default([0,1,2,3,4],[4],0,0,{0:{f:new f.default(1,"s",i.DIR_RIGHT)},1:{u:new f.default(2,"h",i.DIR_RIGHT)},2:{c:new f.default(3,"i",i.DIR_RIGHT)},3:{k:new f.default(4,"t",i.DIR_RIGHT)}},m.slice())):m=t.split(""),v=m.reduce(function(e,t){return e.indexOf(t)<0&&e.push(t),e},[]),v.push(i.BLANK),console.log(v),b(m),(0,_.default)(S,v)}),(0,_.default)(S,v),window.reset=b}]);