import{S as t,a as s,s as e,b as a,e as o,t as n,x as r,g as h,f as c,c as i,d as l,h as u,j as m,k as f,l as d,n as p,v as x}from"./client.0af0fdb0.js";function b(t){let s,e,b,g,v,E,j,w,H,S,k=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),b=o("h1"),g=n(k),v=a(),E=o("section"),j=a(),w=o("h4"),H=n("Seen enough?"),S=n("\nGet the books here"),this.h()},l(t){r('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=c(t),b=i(t,"H1",{});var s=l(b);g=u(s,k),s.forEach(h),v=c(t),E=i(t,"SECTION",{class:!0}),l(E).forEach(h),j=c(t),w=i(t,"H4",{class:!0});var a=l(w);H=u(a,"Seen enough?"),a.forEach(h),S=u(t,"\nGet the books here"),this.h()},h(){m(E,"class","max-w-4xl mb-20 md:mb-32"),m(w,"class","max-w-4xl")},m(t,s){f(t,e,s),f(t,b,s),d(b,g),f(t,v,s),f(t,E,s),E.innerHTML=y,f(t,j,s),f(t,w,s),d(w,H),f(t,S,s)},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&k!==(k=t[0].title+"")&&p(g,k),1&e&&y!==(y=t[0].html+"")&&(E.innerHTML=y)},i:x,o:x,d(t){t&&h(e),t&&h(b),t&&h(v),t&&h(E),t&&h(j),t&&h(w),t&&h(S)}}}async function g({params:t,query:s}){const e=await this.fetch(`get-a-taste/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function v(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,v,b,e,{post:0})}}export{g as preload};
