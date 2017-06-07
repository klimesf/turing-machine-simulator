!function(e){function t(a){if(n[a])return n[a].exports;var u=n[a]={i:a,l:!1,exports:{}};return e[a].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DIR_RIGHT="R",t.DIR_LEFT="L",t.STATE_RUNNING="running",t.STATE_STOPPED_FAIL="stopped-fail",t.STATE_STOPPED_SUCCESS="stopped-success",t.BLANK="B"},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function e(t,n,u){a(this,e),this.nextState=t,this.rewrite=n,this.direction=u};t.default=u},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function e(t,n,u,l){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];a(this,e),this.direction=t,this.highlight=n,this.tape=u,this.newState=l,this.added=i};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],a=!0,u=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){u=!0,l=e}finally{try{!a&&c.return&&c.return()}finally{if(u)throw l}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t,n){var u=[],i=document.querySelector(".transition-table > thead"),c=document.createElement("tr");c.innerHTML="";for(var r in e)e.hasOwnProperty(r)&&u.push(r);u.pop(),i.appendChild(c);var d=document.createElement("th");d.textContent="-",c.appendChild(d),t.forEach(function(e){var t=document.createElement("th");t.textContent=e,c.appendChild(t)});var s=document.querySelector(".transition-table > tbody");s.innerHTML="",u.forEach(function(n){if(e.hasOwnProperty(n)){var a=document.createElement("tr"),l=document.createElement("th");l.innerHTML="q<sub>"+n+"</sub>",a.appendChild(l),t.forEach(function(t){var l=document.createElement("td");if(e[n].hasOwnProperty(t)){var i=e[n][t],c=i.nextState<u.length?i.nextState:"F";l.innerHTML="q<sub>"+c+"</sub><span>|</span>"+i.rewrite+"<span>|</span>"+i.direction}l.dataset.state=n,l.dataset.symbol=t,l.classList.add("transition"),a.appendChild(l)}),s.appendChild(a)}});var f=function(e){e.addEventListener("click",function(t){if(!e.classList.contains("editing")){var n=e.textContent.length>0?e.textContent:"";e.innerHTML='<input value="'+n+'" type="text"/>',e.classList.add("editing"),document.querySelector("#set-transitions").style.display="inline"}})};document.querySelectorAll("td.transition").forEach(function(e){return f(e)}),document.querySelector("#set-transitions").addEventListener("click",function(t){t.preventDefault(),document.querySelectorAll("td.transition").forEach(function(t){var n=t.querySelector("input");if(n){e.hasOwnProperty(t.dataset.state)||(e[t.dataset.state]={}),e[t.dataset.state].hasOwnProperty[t.dataset.symbol]||(e[t.dataset.state][t.dataset.symbol]={});var u=n.value.split("|"),i=a(u,3),c=i[0],r=i[1],d=i[2];c=c.replace("q",""),e[t.dataset.state][t.dataset.symbol]=new l.default(parseInt(c),r,d),t.classList.remove("editing"),t.innerHTML=n.value,f(t)}}),n.transitionTable=e})};var u=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(u)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),i=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(){function e(t,n,u,i,c,r){a(this,e),this.states=t,this.finalStates=n,this.head=u,this.state=i,this.transitionFunction=c,this.tape=r,this.running=l.STATE_RUNNING,this.apply=this.apply.bind(this)}return u(e,[{key:"apply",value:function(e){var t=!1;-1==this.head?(this.tape.unshift(e.rewrite),this.head=0,t=!0):this.head>=this.tape.length?(this.tape.push(e.rewrite),t=!0):this.tape[this.head]=e.rewrite;var n=this.head;return this.head+=e.direction===l.DIR_LEFT?-1:1,this.state=e.nextState,new c.default(e.direction,n,this.tape,this.state,t)}}]),e}();t.default=r},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.set34=t.set33=t.set32=t.set31=t.set303=t.set302=t.set301=void 0;var u=n(3),l=a(u),i=n(1),c=a(i),r=n(0),d=function(e,t,n,a){return e={0:{a:new c.default(1,"a",r.DIR_RIGHT)},1:{a:new c.default(1,"a",r.DIR_RIGHT),b:new c.default(2,"b",r.DIR_RIGHT)},2:{b:new c.default(2,"b",r.DIR_RIGHT),c:new c.default(3,"c",r.DIR_RIGHT)},3:{c:new c.default(3,"c",r.DIR_RIGHT),B:new c.default(4,r.BLANK,r.DIR_LEFT)},4:{}},t.transitionFunction=e,t.states=[0,1,2,3,4],t.finalStates=[4],document.querySelector(".description").innerHTML="This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0}",a=["a","a","b","b","c"],n(a),(0,l.default)(e,["a","b","c",r.BLANK],t),a},s=function(e,t,n,a){return e={0:{a:new c.default(1,r.BLANK,r.DIR_RIGHT)},1:{a:new c.default(1,"a",r.DIR_RIGHT),b:new c.default(1,"b",r.DIR_RIGHT),c:new c.default(1,"c",r.DIR_RIGHT),B:new c.default(2,r.BLANK,r.DIR_LEFT)},2:{c:new c.default(3,r.BLANK,r.DIR_LEFT)},3:{a:new c.default(3,"a",r.DIR_LEFT),b:new c.default(3,"b",r.DIR_LEFT),c:new c.default(3,"c",r.DIR_LEFT),B:new c.default(4,r.BLANK,r.DIR_RIGHT)},4:{a:new c.default(1,r.BLANK,r.DIR_RIGHT),b:new c.default(5,r.BLANK,r.DIR_RIGHT)},5:{b:new c.default(5,"b",r.DIR_RIGHT),c:new c.default(5,"c",r.DIR_RIGHT),B:new c.default(6,r.BLANK,r.DIR_LEFT)},6:{c:new c.default(7,r.BLANK,r.DIR_LEFT)},7:{b:new c.default(7,"b",r.DIR_LEFT),c:new c.default(7,"c",r.DIR_LEFT),B:new c.default(8,r.BLANK,r.DIR_RIGHT)},8:{b:new c.default(5,r.BLANK,r.DIR_RIGHT),B:new c.default(9,r.BLANK,r.DIR_RIGHT)},9:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6,7,8,9],t.finalStates=[9],document.querySelector(".description").innerHTML="This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0, i+j=k}",a=["a","a","b","b","c","c","c","c"],n(a),(0,l.default)(e,["a","b","c",r.BLANK],t),a},f=function(e,t,n,a){return e={0:{a:new c.default(1,"B",r.DIR_RIGHT),b:new c.default(0,"B",r.DIR_RIGHT),B:new c.default(6,"B",r.DIR_RIGHT)},1:{a:new c.default(1,"a",r.DIR_RIGHT),b:new c.default(2,"X",r.DIR_RIGHT)},2:{b:new c.default(2,"b",r.DIR_RIGHT),c:new c.default(2,"c",r.DIR_RIGHT),B:new c.default(3,"B",r.DIR_LEFT)},3:{c:new c.default(4,"B",r.DIR_LEFT)},4:{b:new c.default(5,"b",r.DIR_LEFT),c:new c.default(4,"c",r.DIR_LEFT),X:new c.default(5,"b",r.DIR_LEFT)},5:{a:new c.default(5,"a",r.DIR_LEFT),b:new c.default(5,"b",r.DIR_LEFT),X:new c.default(1,"b",r.DIR_RIGHT),B:new c.default(0,"B",r.DIR_RIGHT)},6:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6],t.finalStates=[6],document.querySelector(".description").innerHTML="This Turing Machine accepts <br/> L = {w | w = a<sup>i</sup>b<sup>j</sup>c<sup>k</sup>; i,j,k > 0, i*j=k}",a=["a","a","b","b","c","c","c","c"],n(a),(0,l.default)(e,["a","b","c","X",r.BLANK],t),a},o=function(e,t,n,a){return e={0:{0:new c.default(1,"0",r.DIR_LEFT),1:new c.default(1,"1",r.DIR_LEFT),B:new c.default(7,"0",r.DIR_RIGHT)},1:{B:new c.default(2,"X",r.DIR_RIGHT)},2:{0:new c.default(3,"Y",r.DIR_LEFT),1:new c.default(3,"Z",r.DIR_LEFT)},3:{0:new c.default(3,"0",r.DIR_LEFT),1:new c.default(3,"1",r.DIR_LEFT),X:new c.default(3,"X",r.DIR_LEFT),B:new c.default(4,"0",r.DIR_RIGHT)},4:{0:new c.default(4,"0",r.DIR_RIGHT),1:new c.default(4,"1",r.DIR_RIGHT),X:new c.default(4,"X",r.DIR_RIGHT),Y:new c.default(5,"0",r.DIR_RIGHT),Z:new c.default(5,"1",r.DIR_RIGHT)},5:{0:new c.default(3,"Y",r.DIR_LEFT),1:new c.default(3,"Z",r.DIR_LEFT),B:new c.default(6,"B",r.DIR_LEFT)},6:{0:new c.default(6,"0",r.DIR_LEFT),1:new c.default(6,"1",r.DIR_LEFT),X:new c.default(7,"0",r.DIR_RIGHT)},7:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6,7],t.finalStates=[7],document.querySelector(".description").innerHTML="This Turing Machine realizes function<br/> f(w) = 0<sup>k+1</sup>w, k = |w|",a=["0","1","1"],n(a),(0,l.default)(e,["0","1","X","Y","Z",r.BLANK],t),a},I=function(e,t,n,a){return e={0:{0:new c.default(1,"a",r.DIR_RIGHT),1:new c.default(1,"b",r.DIR_RIGHT),X:new c.default(4,"X",r.DIR_RIGHT),Y:new c.default(4,"Y",r.DIR_RIGHT),B:new c.default(6,"B",r.DIR_RIGHT)},1:{0:new c.default(1,"0",r.DIR_RIGHT),1:new c.default(1,"1",r.DIR_RIGHT),X:new c.default(2,"X",r.DIR_LEFT),Y:new c.default(2,"Y",r.DIR_LEFT),B:new c.default(2,"B",r.DIR_LEFT)},2:{0:new c.default(3,"X",r.DIR_LEFT),1:new c.default(3,"Y",r.DIR_LEFT),a:new c.default(4,"X",r.DIR_RIGHT),b:new c.default(4,"Y",r.DIR_RIGHT)},3:{0:new c.default(3,"0",r.DIR_LEFT),1:new c.default(3,"1",r.DIR_LEFT),a:new c.default(0,"0",r.DIR_RIGHT),b:new c.default(0,"1",r.DIR_RIGHT)},4:{X:new c.default(4,"X",r.DIR_RIGHT),Y:new c.default(4,"X",r.DIR_RIGHT),B:new c.default(5,"B",r.DIR_LEFT)},5:{0:new c.default(6,"0",r.DIR_LEFT),1:new c.default(6,"1",r.DIR_LEFT),a:new c.default(6,"0",r.DIR_LEFT),b:new c.default(6,"1",r.DIR_LEFT),X:new c.default(5,"B",r.DIR_LEFT),Y:new c.default(5,"B",r.DIR_LEFT)},6:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6],t.finalStates=[6],document.querySelector(".description").innerHTML="This Turing Machine realizes function<br/> f(a<sub>1</sub>a<sub>1</sub>..a<sub>n</sub>) = a<sub>1</sub>a<sub>1</sub>..a<sub>k</sub>, k = floor(n/2)",a=["0","1","1","0","1"],n(a),(0,l.default)(e,["0","1","a","b","X","Y",r.BLANK],t),a},R=function(e,t,n,a){return e={0:{a:new c.default(0,"a",r.DIR_RIGHT),b:new c.default(0,"b",r.DIR_RIGHT),c:new c.default(1,"Z",r.DIR_RIGHT)},1:{a:new c.default(1,"a",r.DIR_RIGHT),b:new c.default(2,"c",r.DIR_LEFT),c:new c.default(1,"c",r.DIR_RIGHT),B:new c.default(3,"B",r.DIR_LEFT)},2:{a:new c.default(2,"a",r.DIR_LEFT),b:new c.default(2,"b",r.DIR_LEFT),c:new c.default(2,"c",r.DIR_LEFT),Z:new c.default(0,"b",r.DIR_RIGHT)},3:{a:new c.default(3,"a",r.DIR_LEFT),b:new c.default(3,"b",r.DIR_LEFT),c:new c.default(3,"c",r.DIR_LEFT),Z:new c.default(3,"c",r.DIR_LEFT),B:new c.default(4,"B",r.DIR_RIGHT)},4:{a:new c.default(4,"a",r.DIR_RIGHT),b:new c.default(5,"Y",r.DIR_RIGHT),c:new c.default(4,"c",r.DIR_RIGHT)},5:{a:new c.default(6,"b",r.DIR_LEFT),b:new c.default(5,"b",r.DIR_RIGHT),c:new c.default(5,"c",r.DIR_RIGHT),B:new c.default(7,"B",r.DIR_LEFT)},6:{a:new c.default(6,"a",r.DIR_LEFT),b:new c.default(6,"b",r.DIR_LEFT),c:new c.default(6,"c",r.DIR_LEFT),Y:new c.default(4,"a",r.DIR_RIGHT)},7:{a:new c.default(7,"a",r.DIR_LEFT),b:new c.default(7,"b",r.DIR_LEFT),c:new c.default(7,"c",r.DIR_LEFT),Y:new c.default(7,"b",r.DIR_LEFT),B:new c.default(8,"B",r.DIR_RIGHT)},8:{a:new c.default(8,"a",r.DIR_RIGHT),b:new c.default(8,"b",r.DIR_RIGHT),c:new c.default(9,"Z",r.DIR_RIGHT)},9:{a:new c.default(9,"a",r.DIR_RIGHT),b:new c.default(10,"c",r.DIR_LEFT),c:new c.default(9,"c",r.DIR_RIGHT),B:new c.default(11,"B",r.DIR_LEFT)},10:{a:new c.default(10,"a",r.DIR_LEFT),b:new c.default(10,"b",r.DIR_LEFT),c:new c.default(10,"c",r.DIR_LEFT),Z:new c.default(8,"b",r.DIR_RIGHT)},11:{a:new c.default(11,"a",r.DIR_LEFT),b:new c.default(11,"b",r.DIR_LEFT),c:new c.default(11,"c",r.DIR_LEFT),Z:new c.default(11,"c",r.DIR_LEFT),B:new c.default(12,"B",r.DIR_RIGHT)},12:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6,7,8,9,10,11,12],t.finalStates=[12],document.querySelector(".description").innerHTML="This Turing Machine realizes function<br/> f(w) = a<sub>k</sub>b<sub>l</sub>c<sub>m</sub>, k = |w|<sub>a</sub>, L = |w|<sub>l</sub>, m = |w|<sub>m</sub>",a=["a","c","b","a","c","a","b","c"],n(a),(0,l.default)(e,["a","b","c","X","Y","Z",r.BLANK],t),a},T=function(e,t,n,a){return e={0:{0:new c.default(0,"0",r.DIR_RIGHT),1:new c.default(0,"1",r.DIR_RIGHT),B:new c.default(1,"S",r.DIR_LEFT)},1:{0:new c.default(1,"0",r.DIR_LEFT),1:new c.default(1,"1",r.DIR_LEFT),B:new c.default(2,"B",r.DIR_RIGHT)},2:{0:new c.default(3,"B",r.DIR_RIGHT),1:new c.default(9,"B",r.DIR_RIGHT)},3:{0:new c.default(3,"0",r.DIR_RIGHT),1:new c.default(4,"1",r.DIR_RIGHT)},4:{0:new c.default(5,"X",r.DIR_RIGHT),1:new c.default(8,"1",r.DIR_LEFT),S:new c.default(8,"S",r.DIR_LEFT)},5:{0:new c.default(5,"0",r.DIR_RIGHT),1:new c.default(5,"1",r.DIR_RIGHT),S:new c.default(6,"S",r.DIR_RIGHT)},6:{0:new c.default(6,"0",r.DIR_RIGHT),B:new c.default(7,"0",r.DIR_LEFT)},7:{0:new c.default(7,"0",r.DIR_LEFT),1:new c.default(7,"1",r.DIR_LEFT),S:new c.default(7,"S",r.DIR_LEFT),X:new c.default(4,"0",r.DIR_RIGHT)},8:{0:new c.default(8,"0",r.DIR_LEFT),1:new c.default(8,"1",r.DIR_LEFT),B:new c.default(2,"B",r.DIR_RIGHT)},9:{0:new c.default(9,"B",r.DIR_RIGHT),1:new c.default(9,"B",r.DIR_RIGHT),S:new c.default(10,"B",r.DIR_RIGHT)},10:{}},t.transitionFunction=e,t.states=[0,1,2,3,4,5,6,7,8,9,10],t.finalStates=[10],document.querySelector(".description").innerHTML="This Turing Machine realizes function<br/> f(m,n) = m*n, number x is represented as 0<sup>x</sup>1",a=["0","0","1","0","0","1"],n(a),(0,l.default)(e,["0","1","X","S",r.BLANK],t),a};t.set301=d,t.set302=s,t.set303=f,t.set31=o,t.set32=I,t.set33=R,t.set34=T},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector(".symbols-wrapper");n.innerHTML="";var u=50*e.tape.length;document.querySelector(".current-state").innerHTML="q<sub>"+e.newState+"</sub>",u+=50;var l=document.createElement("div");l.classList.add("symbol"),l.classList.add("blank"),l.textContent=a.BLANK,n.appendChild(l),e.tape.forEach(function(t,a){var u=document.createElement("div");u.classList.add("symbol"),void 0!==e.highlight&&e.highlight===a&&u.classList.add("highlight"),u.textContent=t,n.appendChild(u)}),u+=50,l=document.createElement("div"),l.classList.add("symbol"),l.classList.add("blank"),l.textContent=a.BLANK,n.appendChild(l),n.style.width=u+"px";var i=parseInt(getComputedStyle(n).transform.split(",")[4]);(-1===i||t)&&(i=u/2-25),e.direction===a.DIR_RIGHT?(e.added&&(i-=25),i-=50):e.direction===a.DIR_LEFT&&(e.added&&(i+=25),i+=50),n.style.transform="translateX("+i+"px)"};var a=n(0),u=n(2);!function(e){e&&e.__esModule}(u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.state,n=a.BLANK;e.head>=0&&e.head<e.tape.length&&(n=e.tape[e.head]);var u=e.transitionFunction[t];return e.finalStates.indexOf(t)>-1?(console.log("Machine stopped successfuly"),{machineStep:null,running:a.STATE_STOPPED_SUCCESS}):u.hasOwnProperty(n)?{machineStep:u[n],running:a.STATE_RUNNING}:(console.log("Machine stopped because of undefined transition from the current state"),{machineStep:null,running:a.STATE_STOPPED_FAIL})};var a=n(0),u=n(1);!function(e){e&&e.__esModule}(u)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var u=n(0),l=n(6),i=a(l),c=n(7),r=a(c),d=n(4),s=a(d),f=n(1),o=a(f),I=n(2),R=a(I),T=n(3),_=a(T),w=n(5),D={0:{a:new o.default(1,"a",u.DIR_RIGHT)},1:{a:new o.default(1,"a",u.DIR_RIGHT),b:new o.default(2,"b",u.DIR_RIGHT)},2:{b:new o.default(2,"b",u.DIR_RIGHT),c:new o.default(3,"c",u.DIR_RIGHT)},3:{c:new o.default(3,"c",u.DIR_RIGHT),B:new o.default(4,u.BLANK,u.DIR_LEFT)},4:{}},b=["a","b","c","B"],L=window.input||["a","a","b","b","c"],p=[0,1,2,3,4],E=[4],h=0,H=new s.default(p,E,0,0,D,L.slice()),v=!0,G=function(e){H.head=0,H.state=0,H.tape=e.slice(),H.running=u.STATE_RUNNING;var t=document.querySelector(".state");t.classList.remove("fail"),t.textContent="",h=0,document.querySelector(".counter").textContent=h,document.querySelector("#machine-input").value=e.join(""),(0,i.default)(new R.default(u.DIR_RIGHT,void 0,H.tape,0),!0)},S=function(){v&&(v=!1,G(L),setTimeout(function(){v=!0},100))},F=function(){if(v&&H.running===u.STATE_RUNNING){v=!1;var e=(0,r.default)(H),t=e.machineStep,n=e.running,a=null;switch(n){case u.STATE_STOPPED_FAIL:H.running=u.STATE_STOPPED_FAIL,a=document.querySelector(".state"),a.classList.add("fail"),a.textContent="Machine stopped unsuccessfully";break;case u.STATE_STOPPED_SUCCESS:H.running=u.STATE_STOPPED_SUCCESS,a=document.querySelector(".state"),a.classList.add("success"),a.textContent="Machine stopped successfully";break;case u.STATE_RUNNING:var l=H.apply(t);(0,i.default)(l),document.querySelector(".counter").textContent=++h;break;default:console.err("Unknown machine state")}setTimeout(function(){v=!0},100)}};document.onkeypress=function(e){"KeyR"===e.code&&S(),"Space"===e.code&&F()},document.querySelector("a#r").addEventListener("click",function(e){e.preventDefault(),S()}),document.querySelector("a#space").addEventListener("click",function(e){e.preventDefault(),F()}),document.querySelector("#editor > a.banner").addEventListener("click",function(e){var t=document.querySelector("#editor");t.classList.contains("active")?t.style.right="-850px":t.style.right="0",t.classList.toggle("active")}),document.querySelector("#machine-input").value=L.join("");var y=document.querySelector("#reset");switch(y.addEventListener("click",function(e){e.preventDefault(),y.blur();var t=L=document.querySelector("#machine-input").value;"tourette"===t?(L="fuck".split(""),p=[0,1,2,3,4],E=[4],b=["f","u","c","k"],D={0:{f:new o.default(1,"s",u.DIR_RIGHT)},1:{u:new o.default(2,"h",u.DIR_RIGHT)},2:{c:new o.default(3,"i",u.DIR_RIGHT)},3:{k:new o.default(4,"t",u.DIR_RIGHT)}},H=new s.default(p,E,0,0,D,L.slice())):(L=t.split(""),b=L.reduce(function(e,t){return e.indexOf(t)<0&&e.push(t),e},[])),b.push(u.BLANK),G(L),(0,_.default)(D,b,H)}),document.querySelector("#add-state").addEventListener("click",function(e){e.preventDefault();var t=p.reduce(function(e,t){return t>e?t:e},0)+1;p.push(t),D[t]={},H.transitionTable=D,H.finalStates=[t],(0,_.default)(D,b,H)}),window.location.hash){case"#cv31":L=(0,w.set31)(D,H,G);break;case"#cv32":L=(0,w.set32)(D,H,G);break;case"#cv33":L=(0,w.set33)(D,H,G);break;case"#cv34":L=(0,w.set34)(D,H,G);break;case"#cv302":L=(0,w.set302)(D,H,G);break;case"#cv303":L=(0,w.set303)(D,H,G);break;case"#cv301":default:L=(0,w.set301)(D,H,G),(0,_.default)(D,b,H)}document.querySelector("a#cv301").addEventListener("click",function(e){L=(0,w.set301)(D,H,G,L)}),document.querySelector("a#cv302").addEventListener("click",function(e){L=(0,w.set302)(D,H,G,L)}),document.querySelector("a#cv303").addEventListener("click",function(e){L=(0,w.set303)(D,H,G,L)}),document.querySelector("a#cv31").addEventListener("click",function(e){L=(0,w.set31)(D,H,G,L)}),document.querySelector("a#cv32").addEventListener("click",function(e){L=(0,w.set32)(D,H,G,L)}),document.querySelector("a#cv33").addEventListener("click",function(e){L=(0,w.set33)(D,H,G,L)}),document.querySelector("a#cv34").addEventListener("click",function(e){L=(0,w.set34)(D,H,G,L)}),window.reset=G}]);