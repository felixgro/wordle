(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5992)}])},5992:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var o,n,l=t(5893),a=t(9008),s=t.n(a),c=t(7294),i=t(8549),d=t.n(i);let u=e=>{let{value:r,state:t,idx:o}=e,n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{void 0!==r&&n.current&&n.current.animate([{transform:"scale(1)"},{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:160,easing:"ease-out"})},[r]),(0,c.useEffect)(()=>{-1!==t&&setTimeout(()=>{var e,r,o;switch(t){case 0:null===(e=n.current)||void 0===e||e.classList.add(d().wrongCell);break;case 1:null===(r=n.current)||void 0===r||r.classList.add(d().rightCell);break;case 2:null===(o=n.current)||void 0===o||o.classList.add(d().perfectCell)}},40*o)},[t,o]),(0,l.jsx)("div",{ref:n,className:d().boardCell,children:r})},_=e=>{let{solution:r,idx:t,attempt:o,onFinished:n,onFocus:a,onBlur:s}=e,i=(0,c.useRef)(null),_=(0,c.useRef)(null),[m,f]=(0,c.useState)(""),[h,p]=(0,c.useState)(Array(r.length).fill(-1)),g=(0,c.useMemo)(()=>m?m.toUpperCase().split(""):[],[m]),w=e=>{let r=e.data.toLowerCase(),t=r.charCodeAt(0);(!t||t<97||t>122)&&e.preventDefault()},x=e=>{if(e.preventDefault(),m.length!==r.length)return;let t=Array(r.length).fill(-1);for(let e=0;e<r.length;e++){let o=m[e].toLowerCase(),n=r[e].toLowerCase();o===n?t[e]=2:r.toLowerCase().includes(o)?t[e]=1:t[e]=0}p(t),W("blur"),n(t.every(e=>2===e))},j=()=>{if(!_.current)return;let e=_.current.value.length;setTimeout(()=>{_.current.setSelectionRange(e,e)},1)},W=e=>{i.current&&("focus"===e?(a(),j(),i.current.classList.add(d().rowInFocus)):(s(),i.current.classList.remove(d().rowInFocus)))},v=e=>{("ArrowLeft"===e.key||"ArrowRight"===e.key||"ArrowUp"===e.key||"ArrowDown"===e.key)&&e.preventDefault()};return(0,l.jsxs)("div",{className:d().boardRow,ref:i,children:[(0,l.jsxs)("form",{onSubmit:x,autoComplete:"off",children:[(0,l.jsx)("label",{htmlFor:"guess-".concat(t),children:"Guess ".concat(t+1)}),(0,l.jsx)("input",{type:"text",id:"guess-".concat(t),ref:_,value:m,onFocus:()=>W("focus"),onBlur:()=>W("blur"),onChange:e=>f(e.target.value),onClick:j,onKeyDown:v,onBeforeInput:w,disabled:o!==t,maxLength:r.length,className:d().boardRowInput})]}),(0,l.jsx)("div",{className:d().boardCellWrapper,"aria-hidden":!0,children:Array.from({length:r.length}).map((e,r)=>(0,l.jsx)(u,{idx:r,state:h[r],value:g[r]},r))})]})},m=e=>{let{maxTries:r,solution:t,onWin:o,onLoose:n}=e,[a,s]=(0,c.useState)(0),i=(0,c.useRef)(null);(0,c.useEffect)(()=>{s(0)},[t]);let u=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s(t=>e?(o(),-1):t+1<r?t+1:(n(),-1))},m=e=>{i.current&&i.current.classList.toggle(d().markerFocus,"focus"===e)};return(0,c.useEffect)(()=>{if(-1===a){i.current.style.opacity="0";return}let e=document.querySelector("#guess-".concat(a));e&&(i.current.style.transform="translateY(".concat(64*a+8*a,"px)"),e.focus())},[a,r]),(0,l.jsxs)("div",{className:d().boardRowWrapper,children:[(0,l.jsxs)("div",{ref:i,className:d().marker,"aria-hidden":"true",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]}),Array.from({length:r}).map((e,r)=>(0,l.jsx)(_,{idx:r,solution:t,attempt:a,onFinished:u,onFocus:()=>m("focus"),onBlur:()=>m("blur")},r))]})};(o=n||(n={}))[o.PLAYING=0]="PLAYING",o[o.WON=1]="WON",o[o.LOST=2]="LOST",o[o.RESET=3]="RESET";let f=e=>{let{getSolution:r,maxTries:t}=e;t=t||6;let[o,a]=(0,c.useState)(n.PLAYING),[s,i]=(0,c.useState)(r);(0,c.useEffect)(()=>{switch(o){case n.WON:console.log("congrats!");break;case n.LOST:console.log("you lost... the word was: "+s);break;case n.RESET:a(n.PLAYING)}},[o,s]);let u=()=>{window.addEventListener("keydown",e=>{"Enter"===e.key&&(i(r),a(n.RESET))},{once:!0})};return(0,l.jsx)("main",{className:d().main,children:(0,l.jsx)("section",{className:"grid-cell",children:(0,l.jsxs)("div",{className:d().gameWrapper,children:[o===n.RESET?(0,l.jsx)("div",{}):(0,l.jsx)(m,{gameState:o,solution:s,maxTries:t,onWin:()=>{a(n.WON),u()},onLoose:()=>{a(n.LOST),u()}}),o===n.WON||o===n.LOST?(0,l.jsxs)("div",{className:d().modal,children:[(0,l.jsx)("h3",{children:o===n.WON?"You made it!":"Oops.."}),o===n.WON?(0,l.jsx)("p",{children:"Press enter to play again"}):(0,l.jsxs)("p",{children:["The word was ",(0,l.jsx)("span",{children:s}),".",(0,l.jsx)("br",{}),"Press Enter to try again."]})]}):null]})})})};var h=t(3915),p=t.n(h),g=JSON.parse('["agent","mission","spur","koffer","akte"]');let w=()=>g[Math.floor(Math.random()*g.length)];function x(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:"Wordle Clone"}),(0,l.jsx)("meta",{name:"description",content:"Just another wordle implementation"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)("main",{className:p().main,children:(0,l.jsx)(f,{getSolution:w,maxTries:5})})]})}},3915:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},8549:function(e){e.exports={main:"Wordle_main__annyt",marker:"Wordle_marker__lgVAX",markerFocus:"Wordle_markerFocus__Qk6sR",gameWrapper:"Wordle_gameWrapper__gHuqN",modal:"Wordle_modal__UUUQh",board:"Wordle_board__umBj6",boardRowWrapper:"Wordle_boardRowWrapper__cj1jv",boardRow:"Wordle_boardRow__QK5Kc",boardCellWrapper:"Wordle_boardCellWrapper__Qn9KC",boardCell:"Wordle_boardCell__N_TjD",rowInFocus:"Wordle_rowInFocus__u40Y_",wrongCell:"Wordle_wrongCell__Oi3NV",rightCell:"Wordle_rightCell__Z3ig5",perfectCell:"Wordle_perfectCell__CtFEa",wordleForm:"Wordle_wordleForm__U3chT"}},9008:function(e,r,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);