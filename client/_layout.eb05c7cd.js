import{S as t,i as e,s as r,e as l,t as s,a,c as o,b as n,g as c,f as i,d as u,h as f,j as h,k as d,l as p,m,C as b,D as g,u as v,w as x,x as $,z as k,A as y,B as w,E,F as A,r as C,G as N,H as j,n as I,I as P,q as D,J as L,P as S,K as V,y as z,L as B,M as q}from"./client.72321701.js";import{r as T}from"./reader-hints.d20906b4.js";function U(t,e,r){const l=t.slice();return l[16]=e[r],l[18]=r,l}function W(t,e,r){const l=t.slice();return l[13]=e[r],l[15]=r,l}function F(t){let e,r,g,v,x,$,k,y,w,E,A,C,N,j,L,S,V,z,B,q,T,U=t[4][1]+"";return{c(){e=l("div"),r=l("div"),g=l("p"),v=s("Looks like you've been here before..."),x=a(),$=l("p"),k=s("Want to pick up where you left off?"),y=a(),w=l("div"),E=l("a"),A=s("Sure, take me to chapter "),C=s(U),j=a(),L=l("span"),S=s("Nup"),this.h()},l(t){e=o(t,"DIV",{class:!0});var l=n(e);r=o(l,"DIV",{class:!0});var s=n(r);g=o(s,"P",{class:!0});var a=n(g);v=c(a,"Looks like you've been here before..."),a.forEach(i),x=u(s),$=o(s,"P",{class:!0});var f=n($);k=c(f,"Want to pick up where you left off?"),f.forEach(i),y=u(s),w=o(s,"DIV",{});var h=n(w);E=o(h,"A",{class:!0,href:!0});var d=n(E);A=c(d,"Sure, take me to chapter "),C=c(d,U),d.forEach(i),j=u(h),L=o(h,"SPAN",{class:!0});var p=n(L);S=c(p,"Nup"),p.forEach(i),h.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){f(g,"class","font-header text-xl md:text-2xl"),f($,"class","font-sans text-base md:text-lg mb-4"),f(E,"class","inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious"),f(E,"href",N="read/"+t[4][0]+"/"+t[4][1]),f(L,"class","inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious cursor-pointer"),f(r,"class","rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2"),f(e,"class","fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10")},m(l,s){h(l,e,s),d(e,r),d(r,g),d(g,v),d(r,x),d(r,$),d($,k),d(r,y),d(r,w),d(w,E),d(E,A),d(E,C),d(w,j),d(w,L),d(L,S),B=!0,q||(T=p(L,"click",t[7]),q=!0)},p(t,e){(!B||16&e)&&U!==(U=t[4][1]+"")&&m(C,U),(!B||16&e&&N!==(N="read/"+t[4][0]+"/"+t[4][1]))&&f(E,"href",N)},i(t){B||(I((()=>{z&&z.end(1),V||(V=P(e,D,{delay:1e3})),V.start()})),B=!0)},o(t){V&&V.invalidate(),z=b(e,D,{}),B=!1},d(t){t&&i(e),t&&z&&z.end(),q=!1,T()}}}function G(t){let e,r,a,u,m,b,g,v=t[18]+1+"";return{c(){e=l("li"),r=l("a"),a=s("Chapter "),u=s(v),this.h()},l(t){e=o(t,"LI",{class:!0});var l=n(e);r=o(l,"A",{rel:!0,href:!0});var s=n(r);a=c(s,"Chapter "),u=c(s,v),s.forEach(i),l.forEach(i),this.h()},h(){f(r,"rel","prefetch"),f(r,"href",m="read/"+(t[15]+1)+"/"+(t[18]+1)),f(e,"class","ml-4 p-2 rounded-md"),L(e,"bg-oblivious",t[3]&&t[15]+1===+t[3][0]&&t[18]+1===+t[3][1])},m(l,s){h(l,e,s),d(e,r),d(r,a),d(r,u),b||(g=p(e,"click",t[9]),b=!0)},p(t,r){8&r&&L(e,"bg-oblivious",t[3]&&t[15]+1===+t[3][0]&&t[18]+1===+t[3][1])},d(t){t&&i(e),b=!1,g()}}}function H(t){let e,r=t[15]+1<3&&function(t){let e,r,f,p,m,b=t[15]+1+"",g=[...Array(t[13])],v=[];for(let e=0;e<g.length;e+=1)v[e]=G(U(t,g,e));return{c(){e=s("Book "),r=s(b),f=a(),p=l("ul");for(let t=0;t<v.length;t+=1)v[t].c();m=a()},l(t){e=c(t,"Book "),r=c(t,b),f=u(t),p=o(t,"UL",{});var l=n(p);for(let t=0;t<v.length;t+=1)v[t].l(l);m=u(l),l.forEach(i)},m(t,l){h(t,e,l),h(t,r,l),h(t,f,l),h(t,p,l);for(let t=0;t<v.length;t+=1)v[t].m(p,null);d(p,m)},p(t,e){if(15&e){let r;for(g=[...Array(t[13])],r=0;r<g.length;r+=1){const l=U(t,g,r);v[r]?v[r].p(l,e):(v[r]=G(l),v[r].c(),v[r].m(p,m))}for(;r<v.length;r+=1)v[r].d(1);v.length=g.length}},d(t){t&&i(e),t&&i(r),t&&i(f),t&&i(p),A(v,t)}}}(t);return{c(){r&&r.c(),e=g()},l(t){r&&r.l(t),e=g()},m(t,l){r&&r.m(t,l),h(t,e,l)},p(t,e){t[15]+1<3&&r.p(t,e)},d(t){r&&r.d(t),t&&i(e)}}}function J(t){let e;const r=t[6].default,l=B(r,t,t[11],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,r){l&&l.m(t,r),e=!0},p(t,e){l&&l.p&&2048&e&&q(l,r,t,t[11],e,null,null)},i(t){e||(k(l,t),e=!0)},o(t){y(l,t),e=!1},d(t){l&&l.d(t)}}}function K(t){let e,r;return e=new S({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){v(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){$(e,t,l),r=!0},p(t,r){const l={};2048&r&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function M(t){let e,b,g,v,x,$,w,N,j,I,P,D,L,S=t[1]?"‹":"›",B=t[3],q=t[2]&&F(t),T=t[0],U=[];for(let e=0;e<T.length;e+=1)U[e]=H(W(t,T,e));let G=K(t);return{c(){q&&q.c(),e=a(),b=l("button"),g=s("📖 "),v=l("span"),x=s(S),$=a(),w=l("nav");for(let t=0;t<U.length;t+=1)U[t].c();j=a(),I=l("div"),G.c(),this.h()},l(t){q&&q.l(t),e=u(t),b=o(t,"BUTTON",{class:!0});var r=n(b);g=c(r,"📖 "),v=o(r,"SPAN",{class:!0});var l=n(v);x=c(l,S),l.forEach(i),r.forEach(i),$=u(t),w=o(t,"NAV",{class:!0});var s=n(w);for(let t=0;t<U.length;t+=1)U[t].l(s);s.forEach(i),j=u(t),I=o(t,"DIV",{});var a=n(I);G.l(a),a.forEach(i),this.h()},h(){f(v,"class","absolute font-black top-1/2 right-1 transform -translate-y-1/2"),f(b,"class","absolute top-0 md:top-12 left-0 w-12 h-12 text-lg md:w-16 md:h-16 md:text-2xl bg-oblivious rounded-r-xl"),f(w,"class",N="absolute z-10 top-16 md:top-32 left-0 h-4/5vh max-h-full right-auto overflow-y-scroll transform "+(t[1]?"translate-x-0":"-translate-x-full")+" transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2")},m(r,l){q&&q.m(r,l),h(r,e,l),h(r,b,l),d(b,g),d(b,v),d(v,x),h(r,$,l),h(r,w,l);for(let t=0;t<U.length;t+=1)U[t].m(w,null);h(r,j,l),h(r,I,l),G.m(I,null),P=!0,D||(L=[p(b,"click",t[8]),p(I,"click",t[10])],D=!0)},p(t,[l]){if(t[2]?q?(q.p(t,l),4&l&&k(q,1)):(q=F(t),q.c(),k(q,1),q.m(e.parentNode,e)):q&&(V(),y(q,1,1,(()=>{q=null})),E()),(!P||2&l)&&S!==(S=t[1]?"‹":"›")&&m(x,S),15&l){let e;for(T=t[0],e=0;e<T.length;e+=1){const r=W(t,T,e);U[e]?U[e].p(r,l):(U[e]=H(r),U[e].c(),U[e].m(w,null))}for(;e<U.length;e+=1)U[e].d(1);U.length=T.length}(!P||2&l&&N!==(N="absolute z-10 top-16 md:top-32 left-0 h-4/5vh max-h-full right-auto overflow-y-scroll transform "+(t[1]?"translate-x-0":"-translate-x-full")+" transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2"))&&f(w,"class",N),8&l&&r(B,B=t[3])?(V(),y(G,1,1,z),E(),G=K(t),G.c(),k(G),G.m(I,null)):G.p(t,l)},i(t){P||(k(q),k(G),P=!0)},o(t){y(q),y(G),P=!1},d(t){q&&q.d(t),t&&i(e),t&&i(b),t&&i($),t&&i(w),A(U,t),t&&i(j),t&&i(I),G.d(t),D=!1,C(L)}}}var O=function(t,e,r,l){return new(r||(r=Promise))((function(s,a){function o(t){try{c(l.next(t))}catch(t){a(t)}}function n(t){try{c(l.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,n)}c((l=l.apply(t,e||[])).next())}))};function Q({params:t,query:e}){return O(this,void 0,void 0,(function*(){const t=yield this.fetch("read/book-index.json"),e=yield t.json();if(200===t.status)return{chapterCounts:e};this.error(t.status)}))}function R(t,e,r){let l,s;N(t,T,(t=>r(4,s=t)));let{$$slots:a={},$$scope:o}=e,{chapterCounts:n}=e;const{page:c}=j();N(t,c,(t=>r(12,l=t)));let i=!1,u=!1;let f;return t.$$set=t=>{"chapterCounts"in t&&r(0,n=t.chapterCounts),"$$scope"in t&&r(11,o=t.$$scope)},t.$$.update=()=>{var e,a;4096&t.$$.dirty&&r(3,f=l.params.slug?l.params.slug.map((t=>+t)):null),24&t.$$.dirty&&(f&&(a=f,!(e=s)&&a||a[0]>e[0]||a[0]===e[0]&&a[1]>e[1])?T.set(f):!f&&s?setTimeout((()=>{r(2,u=!0)}),1):r(2,u=!1))},[n,i,u,f,s,c,a,()=>{r(2,u=!1),T.set(null)},()=>r(1,i=!i),()=>{r(2,u=!1),r(1,i=!1)},()=>r(1,i=!1),o]}export default class extends t{constructor(t){super(),e(this,t,R,M,r,{chapterCounts:0})}}export{Q as preload};