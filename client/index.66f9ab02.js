import{S as t,a as e,s as o,e as a,t as n,c as r,d as s,h as l,g as c,j as i,k as h,l as u,n as f,b as m,x as p,f as d,v as g,D as x}from"./client.0af0fdb0.js";function y(t,e,o){const a=t.slice();return a[1]=e[o],a}function v(t){let e,o,m,p,d=t[1].title+"";return{c(){e=a("li"),o=a("a"),m=n(d),this.h()},l(t){e=r(t,"LI",{});var a=s(e);o=r(a,"A",{rel:!0,href:!0});var n=s(o);m=l(n,d),n.forEach(c),a.forEach(c),this.h()},h(){i(o,"rel","prefetch"),i(o,"href",p="get-a-taste/"+t[1].slug)},m(t,a){h(t,e,a),u(e,o),u(o,m)},p(t,e){1&e&&d!==(d=t[1].title+"")&&f(m,d),1&e&&p!==(p="get-a-taste/"+t[1].slug)&&i(o,"href",p)},d(t){t&&c(e)}}}function E(t){let e,o,f,E,b,w,A,T,M,j,k,H,O,S,W,_,G,I,L,N,R,Y=t[0],$=[];for(let e=0;e<Y.length;e+=1)$[e]=v(y(t,Y,e));return{c(){e=a("meta"),o=a("meta"),f=a("meta"),E=a("meta"),b=a("meta"),w=a("meta"),A=a("meta"),T=a("meta"),M=a("meta"),j=m(),k=a("section"),H=a("h1"),O=n("Want to try before you buy?"),S=m(),W=a("h2"),_=n("You're in the right place! Here are a few select chunks from the Oblivious Trilogy adventure!"),G=m(),I=a("span"),L=n("[Spoiler Alert!]"),N=m(),R=a("ul");for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){const a=p('[data-svelte="svelte-1dr6oil"]',document.head);e=r(a,"META",{property:!0,content:!0}),o=r(a,"META",{property:!0,content:!0}),f=r(a,"META",{property:!0,content:!0}),E=r(a,"META",{property:!0,content:!0}),b=r(a,"META",{property:!0,content:!0}),w=r(a,"META",{name:!0,content:!0}),A=r(a,"META",{name:!0,content:!0}),T=r(a,"META",{name:!0,content:!0}),M=r(a,"META",{name:!0,content:!0}),a.forEach(c),j=d(t),k=r(t,"SECTION",{class:!0});var n=s(k);H=r(n,"H1",{class:!0});var i=s(H);O=l(i,"Want to try before you buy?"),i.forEach(c),S=d(n),W=r(n,"H2",{class:!0});var h=s(W);_=l(h,"You're in the right place! Here are a few select chunks from the Oblivious Trilogy adventure!"),h.forEach(c),G=d(n),I=r(n,"SPAN",{class:!0});var u=s(I);L=l(u,"[Spoiler Alert!]"),u.forEach(c),n.forEach(c),N=d(t),R=r(t,"UL",{class:!0});var m=s(R);for(let t=0;t<$.length;t+=1)$[t].l(m);m.forEach(c),this.h()},h(){document.title="Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy",i(e,"property","og:description"),i(e,"content","Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield."),i(o,"property","og:url"),i(o,"content","http://www.obliviousthebook.com/"),i(f,"property","og:site_name"),i(f,"content","ObliviousTheBook.com"),i(E,"property","fb:admins"),i(E,"content","563453705"),i(b,"property","og:image"),i(b,"content","/images/logo-750.png"),i(w,"name","twitter:card"),i(w,"content","summary_large_image"),i(A,"name","twitter:description"),i(A,"content","Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield."),i(T,"name","twitter:title"),i(T,"content","Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy"),i(M,"name","twitter:image"),i(M,"content","/images/logo-750.png"),i(H,"class","text-4xl md:text-6xl text-center"),i(W,"class","text-xl md:text-3xl text-center"),i(I,"class","header-font md:text-xl text-center"),i(k,"class","flex flex-col items-center max-w-4xl mb-16"),i(R,"class","flex flex-row justify-around w-full max-w-3xl mb-20")},m(t,a){u(document.head,e),u(document.head,o),u(document.head,f),u(document.head,E),u(document.head,b),u(document.head,w),u(document.head,A),u(document.head,T),u(document.head,M),h(t,j,a),h(t,k,a),u(k,H),u(H,O),u(k,S),u(k,W),u(W,_),u(k,G),u(k,I),u(I,L),h(t,N,a),h(t,R,a);for(let t=0;t<$.length;t+=1)$[t].m(R,null)},p(t,[e]){if(1&e){let o;for(Y=t[0],o=0;o<Y.length;o+=1){const a=y(t,Y,o);$[o]?$[o].p(a,e):($[o]=v(a),$[o].c(),$[o].m(R,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=Y.length}},i:g,o:g,d(t){c(e),c(o),c(f),c(E),c(b),c(w),c(A),c(T),c(M),t&&c(j),t&&c(k),t&&c(N),t&&c(R),x($,t)}}}function b({params:t,query:e}){return this.fetch("get-a-taste.json").then((t=>t.json())).then((t=>({posts:t})))}function w(t,e,o){let{posts:a}=e;return t.$$set=t=>{"posts"in t&&o(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),e(this,t,w,E,o,{posts:0})}}export{b as preload};
