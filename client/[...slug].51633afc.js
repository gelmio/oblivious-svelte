import{S as t,i as e,s as o,e as s,c as a,b as r,f as n,h as l,j as c,l as i,y as u,a as h,t as f,D as d,v as p,d as m,g as b,k as g,m as v,A as x,E as y,z as k,r as E,G as w,H as $,Q as T,R as I,n as L,I as P,T as C,K as j,U as A,O as B,u as N,w as D,x as V,B as O,q,C as H}from"./client.830b5db6.js";import{r as S,g as z}from"./reader-hints.4c7907ab.js";function W(t,e,o,s,a=null){let r;const n=l=>{const c=l-r,i=c/s,u=[e[0]+(o[0]-e[0])*i,e[1]+(o[1]-e[1])*i];c<s?(t.scrollTo(u[0],u[1]),requestAnimationFrame(n)):(t.scrollTo(o[0],o[1]),a&&a())};requestAnimationFrame((t=>{r=t,n(t)}))}const{document:G,window:M}=I;function Y(t){let e,o,d,p,v,y,E,w,$,T,I,L,P,C;return I=new B({props:{text:"buy me a coffee"}}),{c(){e=s("div"),o=s("p"),d=f("Congrats! You've made it to the end of Book 2!"),p=h(),v=s("p"),y=f("That's as far as things go for the moment, but Book 3 is on\n\t\t\t\t\tthe way out soon!"),E=h(),w=s("p"),$=f("While you wait, feel free to jump on the mailing list, or maybe even "),T=s("span"),N(I.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);o=a(s,"P",{});var l=r(o);d=b(l,"Congrats! You've made it to the end of Book 2!"),l.forEach(n),p=m(s),v=a(s,"P",{});var c=r(v);y=b(c,"That's as far as things go for the moment, but Book 3 is on\n\t\t\t\t\tthe way out soon!"),c.forEach(n),E=m(s),w=a(s,"P",{});var i=r(w);$=b(i,"While you wait, feel free to jump on the mailing list, or maybe even "),T=a(i,"SPAN",{class:!0});var u=r(T);D(I.$$.fragment,u),u.forEach(n),i.forEach(n),s.forEach(n),this.h()},h(){l(T,"class","border-b border-oblivious-dark"),l(e,"class","text-center font-header mt-8")},m(t,s){c(t,e,s),g(e,o),g(o,d),g(e,p),g(e,v),g(v,y),g(e,E),g(e,w),g(w,$),g(w,T),V(I,T,null),L=!0,P||(C=i(T,"click",ot),P=!0)},p:u,i(t){L||(k(I.$$.fragment,t),L=!0)},o(t){x(I.$$.fragment,t),L=!1},d(t){t&&n(e),O(I),P=!1,C()}}}function R(t){let e,o,u,d,p,E,w,$,T,I=t[3]?"Chapter":"Book",L=t[10][1]>10&&!(t[10][1]%5)&&U();return{c(){e=s("div"),o=s("a"),u=f("Next "),d=f(I),E=h(),L&&L.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);o=a(s,"A",{rel:!0,href:!0,class:!0});var l=r(o);u=b(l,"Next "),d=b(l,I),l.forEach(n),E=m(s),L&&L.l(s),s.forEach(n),this.h()},h(){l(o,"rel","prefetch"),l(o,"href",p="read/"+t[10][0]+"/"+t[10][1]),l(o,"class","inline-block text-lg p-2 rounded-lg no-underline bg-oblivious mr-4"),l(e,"class","flex flex-col md:flex-row justify-end items-end mt-8")},m(t,s){c(t,e,s),g(e,o),g(o,u),g(o,d),g(e,E),L&&L.m(e,null),w=!0,$||(T=i(o,"click",tt),$=!0)},p(t,s){(!w||8&s[0])&&I!==(I=t[3]?"Chapter":"Book")&&v(d,I),(!w||1024&s[0]&&p!==(p="read/"+t[10][0]+"/"+t[10][1]))&&l(o,"href",p),t[10][1]>10&&!(t[10][1]%5)?L?1024&s[0]&&k(L,1):(L=U(),L.c(),k(L,1),L.m(e,null)):L&&(j(),x(L,1,1,(()=>{L=null})),y())},i(t){w||(k(L),w=!0)},o(t){x(L),w=!1},d(t){t&&n(e),L&&L.d(),$=!1,T()}}}function U(t){let e,o,u,h,d,p,m;return h=new B({props:{text:"buy me a coffee"}}),{c(){e=s("span"),o=f("... or "),u=s("span"),N(h.$$.fragment),this.h()},l(t){e=a(t,"SPAN",{class:!0});var s=r(e);o=b(s,"... or "),u=a(s,"SPAN",{class:!0});var l=r(u);D(h.$$.fragment,l),l.forEach(n),s.forEach(n),this.h()},h(){l(u,"class","border-b border-oblivious-dark"),l(e,"class","m-2")},m(t,s){c(t,e,s),g(e,o),g(e,u),V(h,u,null),d=!0,p||(m=i(u,"click",et),p=!0)},i(t){d||(k(h.$$.fragment,t),d=!0)},o(t){x(h.$$.fragment,t),d=!1},d(t){t&&n(e),O(h),p=!1,m()}}}function X(t){let e,o,h,f;return{c(){e=s("div"),this.h()},l(t){e=a(t,"DIV",{class:!0}),r(e).forEach(n),this.h()},h(){l(e,"class","fixed inset-0 flex justify-center items-center cursor-zoom-out bg-oblivious-opaque")},m(o,s){c(o,e,s),t[18](e),h||(f=i(e,"click",t[19]),h=!0)},p:u,i(t){o||L((()=>{o=P(e,q,{}),o.start()}))},o:u,d(o){o&&n(e),t[18](null),h=!1,f()}}}function F(t){let e,o,d,p,v,x,y,k,w,$,T,I,C,j,A,B,N;return{c(){e=s("div"),o=s("div"),d=s("p"),p=f("Looks like you've been here before..."),v=h(),x=s("p"),y=f("Want to jump to the last page you were reading?"),k=h(),w=s("div"),$=s("button"),T=f("Sure"),I=h(),C=s("button"),j=f("Nup"),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);o=a(s,"DIV",{class:!0});var l=r(o);d=a(l,"P",{class:!0});var c=r(d);p=b(c,"Looks like you've been here before..."),c.forEach(n),v=m(l),x=a(l,"P",{class:!0});var i=r(x);y=b(i,"Want to jump to the last page you were reading?"),i.forEach(n),k=m(l),w=a(l,"DIV",{});var u=r(w);$=a(u,"BUTTON",{class:!0});var h=r($);T=b(h,"Sure"),h.forEach(n),I=m(u),C=a(u,"BUTTON",{class:!0});var f=r(C);j=b(f,"Nup"),f.forEach(n),u.forEach(n),l.forEach(n),s.forEach(n),this.h()},h(){l(d,"class","font-header text-xl md:text-2xl"),l(x,"class","font-sans text-base md:text-lg mb-4"),l($,"class","inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious"),l(C,"class","inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious cursor-pointer"),l(o,"class","rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2"),l(e,"class","fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10")},m(s,a){c(s,e,a),g(e,o),g(o,d),g(d,p),g(o,v),g(o,x),g(x,y),g(o,k),g(o,w),g(w,$),g($,T),g(w,I),g(w,C),g(C,j),B||(N=[i($,"click",t[21]),i(C,"click",t[22])],B=!0)},p:u,i(t){A||L((()=>{A=P(e,q,{delay:1e3}),A.start()}))},o:u,d(t){t&&n(e),B=!1,E(N)}}}function K(t){let e,o,d,p,v,x,y,k,E,w,$,T,I,C,j,A,B,N,D,V,O,S,z,W,G;return{c(){e=s("div"),o=s("div"),d=s("p"),p=f("Here's some tips:"),v=h(),x=s("p"),y=f("Tap the text to turn the pages."),k=h(),E=s("p"),w=f("Tap the images to zoom."),$=h(),T=s("p"),I=f("I'll help you out by keeping track of where you're up to."),C=h(),j=s("p"),A=f("I'll also scroll automatically to where the pages are so you\n\t\t\t\tdon't have to bother your finger..."),B=h(),N=s("div"),D=s("span"),V=f("Got it"),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=r(e);o=a(s,"DIV",{class:!0});var l=r(o);d=a(l,"P",{class:!0});var c=r(d);p=b(c,"Here's some tips:"),c.forEach(n),v=m(l),x=a(l,"P",{class:!0});var i=r(x);y=b(i,"Tap the text to turn the pages."),i.forEach(n),k=m(l),E=a(l,"P",{class:!0});var u=r(E);w=b(u,"Tap the images to zoom."),u.forEach(n),$=m(l),T=a(l,"P",{class:!0});var h=r(T);I=b(h,"I'll help you out by keeping track of where you're up to."),h.forEach(n),C=m(l),j=a(l,"P",{class:!0});var f=r(j);A=b(f,"I'll also scroll automatically to where the pages are so you\n\t\t\t\tdon't have to bother your finger..."),f.forEach(n),B=m(l),N=a(l,"DIV",{});var g=r(N);D=a(g,"SPAN",{class:!0});var L=r(D);V=b(L,"Got it"),L.forEach(n),g.forEach(n),l.forEach(n),s.forEach(n),this.h()},h(){l(d,"class","font-header text-xl md:text-2xl mb-4"),l(x,"class","font-sans text-base md:text-lg mb-1"),l(E,"class","font-sans text-base md:text-lg mb-1"),l(T,"class","font-sans text-base md:text-lg mb-1"),l(j,"class","font-sans text-base md:text-lg mb-1"),l(D,"class","inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious cursor-pointer"),l(o,"class","rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2"),l(e,"class","fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10")},m(s,a){c(s,e,a),g(e,o),g(o,d),g(d,p),g(o,v),g(o,x),g(x,y),g(o,k),g(o,E),g(E,w),g(o,$),g(o,T),g(T,I),g(o,C),g(o,j),g(j,A),g(o,B),g(o,N),g(N,D),g(D,V),z=!0,W||(G=i(D,"click",t[20]),W=!0)},p:u,i(t){z||(L((()=>{S&&S.end(1),O||(O=P(e,q,{delay:1e3})),O.start()})),z=!0)},o(t){O&&O.invalidate(),S=H(e,q,{}),z=!1},d(t){t&&n(e),t&&S&&S.end(),W=!1,G()}}}function Q(t){let e,o,u,w,$,T,I,L,P,A,B,N,D,V,O,q,H,S,z,W,U,Q,J,Z,tt,et;G.title=e="Oblivious | Book "+t[1]+", Chapter "+t[2]+" | An overlanding motorbike journey through West Africa";const ot=[R,Y],st=[];function at(t,e){return t[10][0]<3?0:1}D=at(t),V=st[D]=ot[D](t);let rt=t[8]&&X(t);const nt=[K,F],lt=[];function ct(t,e){return t[11]?0:t[9]?1:-1}return~(U=ct(t))&&(Q=lt[U]=nt[U](t)),{c(){o=h(),u=s("article"),w=s("h2"),$=f("Book "),T=f(t[1]),I=f(", Chapter "),L=f(t[2]),P=h(),A=s("div"),N=h(),V.c(),q=h(),H=s("div"),S=f("Oblivious | Luke Gelmi"),z=h(),rt&&rt.c(),W=h(),Q&&Q.c(),J=d(),this.h()},l(e){p('[data-svelte="svelte-1uu6ren"]',G.head).forEach(n),o=m(e),u=a(e,"ARTICLE",{class:!0});var s=r(u);w=a(s,"H2",{class:!0});var l=r(w);$=b(l,"Book "),T=b(l,t[1]),I=b(l,", Chapter "),L=b(l,t[2]),l.forEach(n),P=m(s),A=a(s,"DIV",{class:!0,style:!0});var c=r(A);N=m(c),V.l(c),c.forEach(n),q=m(s),H=a(s,"DIV",{class:!0});var i=r(H);S=b(i,"Oblivious | Luke Gelmi"),i.forEach(n),s.forEach(n),z=m(e),rt&&rt.l(e),W=m(e),Q&&Q.l(e),J=d(),this.h()},h(){l(w,"class","font-header"),B=new C(N),l(A,"class","reader relative overflow-hidden no-scrollbar py-12 svelte-1hqhvkr"),l(A,"style",O=t[5]&&t[6]?`height: ${t[6]}px; columns: auto ${t[5]}px; column-gap: ${_}px; column-rule: 1px solid #000;`:""),l(H,"class","text-xs text-center -mt-10"),l(u,"class","prose md:prose-xl text-justify mb-8 md:mb-12 pt-16")},m(e,s){c(e,o,s),c(e,u,s),g(u,w),g(w,$),g(w,T),g(w,I),g(w,L),g(u,P),g(u,A),B.m(t[0],A),g(A,N),st[D].m(A,null),t[17](A),g(u,q),g(u,H),g(H,S),c(e,z,s),rt&&rt.m(e,s),c(e,W,s),~U&&lt[U].m(e,s),c(e,J,s),Z=!0,tt||(et=[i(M,"resize",t[16]),i(A,"click",t[14])],tt=!0)},p(t,o){(!Z||6&o[0])&&e!==(e="Oblivious | Book "+t[1]+", Chapter "+t[2]+" | An overlanding motorbike journey through West Africa")&&(G.title=e),(!Z||2&o[0])&&v(T,t[1]),(!Z||4&o[0])&&v(L,t[2]),(!Z||1&o[0])&&B.p(t[0]);let s=D;D=at(t),D===s?st[D].p(t,o):(j(),x(st[s],1,1,(()=>{st[s]=null})),y(),V=st[D],V||(V=st[D]=ot[D](t),V.c()),k(V,1),V.m(A,null)),(!Z||96&o[0]&&O!==(O=t[5]&&t[6]?`height: ${t[6]}px; columns: auto ${t[5]}px; column-gap: ${_}px; column-rule: 1px solid #000;`:""))&&l(A,"style",O),t[8]?rt?(rt.p(t,o),256&o[0]&&k(rt,1)):(rt=X(t),rt.c(),k(rt,1),rt.m(W.parentNode,W)):rt&&(rt.d(1),rt=null);let a=U;U=ct(t),U===a?~U&&lt[U].p(t,o):(Q&&(j(),x(lt[a],1,1,(()=>{lt[a]=null})),y()),~U?(Q=lt[U],Q||(Q=lt[U]=nt[U](t),Q.c()),k(Q,1),Q.m(J.parentNode,J)):Q=null)},i(t){Z||(k(V),k(rt),k(Q),Z=!0)},o(t){x(V),x(Q),Z=!1},d(e){e&&n(o),e&&n(u),st[D].d(),t[17](null),e&&n(z),rt&&rt.d(e),e&&n(W),~U&&lt[U].d(e),e&&n(J),tt=!1,E(et)}}}var J=function(t,e,o,s){return new(o||(o=Promise))((function(a,r){function n(t){try{c(s.next(t))}catch(t){r(t)}}function l(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,l)}c((s=s.apply(t,e||[])).next())}))};function Z({params:t,query:e}){return J(this,void 0,void 0,(function*(){const[e,o]=t.slug.map((t=>+t)),s=yield this.fetch(`read/${e}/${o}.json`),{chapter:a,nextChapterExists:r,message:n}=yield s.json();if(200===s.status)return{content:a,book:e,chapter:o,nextChapterExists:r};this.error(s.status,n)}))}let _=50;const tt=t=>t.stopPropagation(),et=t=>t.stopPropagation(),ot=t=>t.stopPropagation();function st(t,e,o){let s,a,r;w(t,S,(t=>o(30,a=t))),w(t,z,(t=>o(11,r=t)));let n,l,c,i,u,h,f,d,p,m,{content:b}=e,{book:g}=e,{chapter:v}=e,{nextChapterExists:x}=e,y=!1,k=!1;const{page:E}=$();function I(){n&&(c=[window.innerWidth,window.innerHeight],(!l||!u||!i||c[0]<i||c[1]<u||c[0]>i+100||c[1]>u+100)&&(o(6,u=Math.round(c[1])),l=n.getBoundingClientRect(),o(5,i=Math.round(l.width))))}w(t,E,(t=>o(29,s=t)));const L=(P=()=>{const t=n.scrollLeft;setTimeout((()=>{const e=n.scrollLeft%(i+_);if(t===n.scrollLeft&&e){const t=e/(i+_)<.5?-e:i+_-e;W(n,[n.scrollLeft,n.scrollTop],[n.scrollLeft+t,n.scrollLeft],300)}}),50)},C=1e3,function(){clearTimeout(j),j=setTimeout((function(){P()}),C)});var P,C,j;function B(){const t=m[a[2]-1];t instanceof HTMLElement&&W(n,[n.scrollLeft,n.scrollTop],[t.offsetLeft,n.scrollTop],300,L)}function N(){m&&m.length>0&&(p=new IntersectionObserver((t=>{if(!0===t[0].isIntersecting){const e=Array.from(m).indexOf(t[0].target);e>-1&&e>a[2]-1&&S.set([D[0],D[1],e+1])}}),{threshold:[0]}),Array.from(m).forEach((t=>p.observe(t))))}T((()=>{var t,e;m=document.querySelectorAll(".reader p"),D&&(e=D,(!(t=a)||!t[0]||!t[1])&&e||e[0]>t[0]||e[0]===t[0]&&e[1]>t[1])?(S.set([D[0],D[1],1]),N()):a[0]===D[0]&&a[1]===D[1]&&a[2]>1?(o(9,k=!0),N()):a[0]===D[0]&&a[1]===D[1]&&1===a[2]&&N(),I(),setTimeout((()=>{I(),h=(window.pageYOffset||document.documentElement.scrollTop)+l.top,W(window,[window.scrollX,window.scrollY],[window.scrollX,h],600)}),2e3)}));let D;return t.$$set=t=>{"content"in t&&o(0,b=t.content),"book"in t&&o(1,g=t.book),"chapter"in t&&o(2,v=t.chapter),"nextChapterExists"in t&&o(3,x=t.nextChapterExists)},t.$$.update=()=>{536870912&t.$$.dirty[0]&&(D=s.params.slug?s.params.slug.map((t=>+t)):null),14&t.$$.dirty[0]&&o(10,d=!x&&g<3?[g+1,1]:[g,v+1])},[b,g,v,x,n,i,u,f,y,k,d,r,E,I,({clientX:t,target:e})=>{if("IMG"===e.tagName)o(8,y=!0),setTimeout((()=>{o(7,f.innerHTML=e.outerHTML,f)}),1);else if(t&&l&&l.left&&i){const e=l.left+i/2,o=i+_;W(n,[n.scrollLeft,n.scrollTop],[n.scrollLeft+(t<=e?-1:1)*o,n.scrollTop],300,L)}},B,()=>I(),function(t){A[t?"unshift":"push"]((()=>{n=t,o(4,n)}))},function(t){A[t?"unshift":"push"]((()=>{f=t,o(7,f)}))},()=>o(8,y=!1),()=>{z.set(!1)},()=>{o(9,k=!1),B()},()=>{o(9,k=!1),S.set([S[0],S[1],1])}]}export default class extends t{constructor(t){super(),e(this,t,st,Q,o,{content:0,book:1,chapter:2,nextChapterExists:3},[-1,-1])}}export{Z as preload};
