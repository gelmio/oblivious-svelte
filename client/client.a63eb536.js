function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function f(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=u(e,n,r,a);t.p(o,c)}}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&h(g)}function $(t){let e;return 0===m.size&&h(g),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function v(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function A(){return w("")}function S(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t){return Array.from(t.childNodes)}function k(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):E(e)}function I(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function P(t){return I(t," ")}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}class T{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=E(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}const O=new Set;let U,q=0;function M(t,e,n,r,o,s,a,c=0){const l=16.666/r;let i="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*s(t);i+=100*t+`%{${a(r,1-r)}}\n`}const u=i+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=t.ownerDocument;O.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(E("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,q+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),q-=o,q||h((()=>{q||(O.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),O.clear())})))}function B(t){U=t}function J(){if(!U)throw new Error("Function called outside component initialization");return U}function D(t){J().$$.on_mount.push(t)}function V(t){J().$$.on_destroy.push(t)}const G=[],K=[],H=[],F=[],Y=Promise.resolve();let Q=!1;function W(t){H.push(t)}let X=!1;const Z=new Set;function tt(){if(!X){X=!0;do{for(let t=0;t<G.length;t+=1){const e=G[t];B(e),et(e.$$)}for(B(null),G.length=0;K.length;)K.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];Z.has(e)||(Z.add(e),e())}H.length=0}while(G.length);for(;F.length;)F.pop()();Q=!1,X=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let nt;function rt(){return nt||(nt=Promise.resolve(),nt.then((()=>{nt=null}))),nt}function ot(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const st=new Set;let at;function ct(){at={r:0,c:[],p:at}}function lt(){at.r||s(at.c),at=at.p}function it(t,e){t&&t.i&&(st.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),at.c.push((()=>{st.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const ft={duration:0};function dt(n,r,o){let s,c,l=r(n,o),i=!1,u=0;function f(){s&&z(n,s)}function d(){const{delay:r=0,duration:o=300,easing:a=e,tick:d=t,css:h}=l||ft;h&&(s=M(n,0,1,o,r,a,h,u++)),d(0,1);const m=p()+r,g=m+o;c&&c.abort(),i=!0,W((()=>ot(n,!0,"start"))),c=$((t=>{if(i){if(t>=g)return d(1,0),ot(n,!0,"end"),f(),i=!1;if(t>=m){const e=a((t-m)/o);d(e,1-e)}}return i}))}let h=!1;return{start(){h||(z(n),a(l)?(l=l(),rt().then(d)):d())},invalidate(){h=!1},end(){i&&(f(),i=!1)}}}function pt(n,r,o){let c,l=r(n,o),i=!0;const u=at;function f(){const{delay:r=0,duration:o=300,easing:a=e,tick:f=t,css:d}=l||ft;d&&(c=M(n,1,0,o,r,a,d));const h=p()+r,m=h+o;W((()=>ot(n,!1,"start"))),$((t=>{if(i){if(t>=m)return f(0,1),ot(n,!1,"end"),--u.r||s(u.c),!1;if(t>=h){const e=a((t-h)/o);f(1-e,e)}}return i}))}return u.r+=1,a(l)?rt().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),i&&(c&&z(n,c),i=!1)}}}function ht(n,r,o,c){let l=r(n,o),i=c?0:1,u=null,f=null,d=null;function h(){d&&z(n,d)}function m(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:a=300,easing:c=e,tick:g=t,css:v}=l||ft,b={start:p()+o,b:r};r||(b.group=at,at.r+=1),u||f?f=b:(v&&(h(),d=M(n,i,r,a,o,c,v)),r&&g(0,1),u=m(b,a),W((()=>ot(n,r,"start"))),$((t=>{if(f&&t>f.start&&(u=m(f,a),f=null,ot(n,u.b,"start"),v&&(h(),d=M(n,i,u.b,u.duration,0,c,l.css))),u)if(t>=u.end)g(i=u.b,1-i),ot(n,u.b,"end"),f||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;i=u.a+u.d*c(e/u.duration),g(i,1-i)}return!(!u&&!f)})))}return{run(t){a(l)?rt().then((()=>{l=l(),g(t)})):g(t)},end(){h(),u=f=null}}}const mt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function gt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function $t(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:o,on_mount:c,on_destroy:l,after_update:i}=t.$$;o&&o.m(e,n),W((()=>{const e=c.map(r).filter(a);l?l.push(...e):s(e),t.$$.on_mount=[]})),i.forEach(W)}function yt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(G.push(t),Q||(Q=!0,Y.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,r,a,c,l,i=[-1]){const u=U;B(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:i,skip_bound:!1};let p=!1;if(d.ctx=r?r(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&Et(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=N(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&it(e.$$.fragment),_t(e,n.target,n.anchor),tt()}B(u)}class xt{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const At=[];function St(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!At.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),At.push(n,e)}if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const jt={};function Nt(t){let e,n,r,o,s,a,c,l;return{c(){e=E("ul"),n=E("li"),r=E("a"),o=w("Book One"),s=x(),a=E("li"),c=E("a"),l=w("Book Two"),this.h()},l(t){e=k(t,"UL",{class:!0});var i=N(e);n=k(i,"LI",{class:!0});var u=N(n);r=k(u,"A",{class:!0,rel:!0,href:!0});var f=N(r);o=I(f,"Book One"),f.forEach(_),u.forEach(_),s=P(i),a=k(i,"LI",{class:!0});var d=N(a);c=k(d,"A",{class:!0,rel:!0,href:!0});var p=N(c);l=I(p,"Book Two"),p.forEach(_),d.forEach(_),i.forEach(_),this.h()},h(){j(r,"class","no-underline p-2"),j(r,"rel","nofollow"),j(r,"href","https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart"),j(n,"class","w-max p-2 hover:bg-oblivious"),j(c,"class","no-underline p-2"),j(c,"rel","nofollow"),j(c,"href","https://transactions.sendowl.com/packages/812169/A234B840/add_to_cart"),j(a,"class","w-max p-2 hover:bg-oblivious"),j(e,"class","absolute left-1/2 transform -translate-x-1/2 top-full rounded-md bg-white shadow-lg border-2 border-oblivious w-auto z-50")},m(t,i){b(t,e,i),v(e,n),v(n,r),v(r,o),v(e,s),v(e,a),v(a,c),v(c,l)},d(t){t&&_(e)}}}function kt(t){let e,n,r,o,a,c;const l=t[4].default,u=i(l,t,t[3],null),d=u||function(t){let e;return{c(){e=w("download")},l(t){e=I(t,"download")},m(t,n){b(t,e,n)},d(t){t&&_(e)}}}();let p=t[0]&&Nt();return{c(){e=E("div"),n=E("span"),d&&d.c(),r=x(),p&&p.c(),this.h()},l(t){e=k(t,"DIV",{class:!0,tabindex:!0});var o=N(e);n=k(o,"SPAN",{class:!0});var s=N(n);d&&d.l(s),s.forEach(_),r=P(o),p&&p.l(o),o.forEach(_),this.h()},h(){j(n,"class","cursor-pointer"),j(e,"class","relative"),j(e,"tabindex","0")},m(s,l){b(s,e,l),v(e,n),d&&d.m(n,null),v(e,r),p&&p.m(e,null),t[5](e),o=!0,a||(c=[S(n,"click",t[2]),S(e,"blur",t[6])],a=!0)},p(t,[n]){u&&u.p&&8&n&&f(u,l,t,t[3],n,null,null),t[0]?p||(p=Nt(),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(t){o||(it(d,t),o=!0)},o(t){ut(d,t),o=!1},d(n){n&&_(e),d&&d.d(n),p&&p.d(),t[5](null),a=!1,s(c)}}}function It(t,e,n){let r,{$$slots:o={},$$scope:s}=e,a=!1;return t.$$set=t=>{"$$scope"in t&&n(3,s=t.$$scope)},[a,r,()=>{n(0,a=!0),sendOwl.emptyCart(35479,(()=>{console.log("Cart Emptied")})),r.focus()},s,o,function(t){K[t?"unshift":"push"]((()=>{r=t,n(1,r)}))},()=>{setTimeout((()=>{n(0,a=!1)}),300)}]}class Pt extends xt{constructor(t){super(),wt(this,t,It,kt,c,{})}}function Lt(t){let e;return{c(){e=w("download")},l(t){e=I(t,"download")},m(t,n){b(t,e,n)},d(t){t&&_(e)}}}function Ct(t){let e,n,r,o,s,a,c,l,i,u,f,d,p,h,m,g,$,y,A,S,L,C,R,T,O;return A=new Pt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=E("div"),n=E("nav"),r=E("a"),o=E("img"),a=x(),c=E("ul"),l=E("li"),i=E("a"),u=w("home"),d=x(),p=E("li"),h=E("a"),m=w("about"),$=x(),y=E("li"),vt(A.$$.fragment),S=x(),L=E("li"),C=E("a"),R=w("read it now"),this.h()},l(t){e=k(t,"DIV",{class:!0});var s=N(e);n=k(s,"NAV",{class:!0});var f=N(n);r=k(f,"A",{href:!0});var g=N(r);o=k(g,"IMG",{src:!0,alt:!0}),g.forEach(_),a=P(f),c=k(f,"UL",{class:!0});var v=N(c);l=k(v,"LI",{class:!0});var b=N(l);i=k(b,"A",{class:!0,"aria-current":!0,href:!0});var E=N(i);u=I(E,"home"),E.forEach(_),b.forEach(_),d=P(v),p=k(v,"LI",{class:!0});var w=N(p);h=k(w,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var x=N(h);m=I(x,"about"),x.forEach(_),w.forEach(_),$=P(v),y=k(v,"LI",{class:!0});var j=N(y);bt(A.$$.fragment,j),j.forEach(_),S=P(v),L=k(v,"LI",{class:!0});var T=N(L);C=k(T,"A",{class:!0,href:!0,"aria-current":!0,rel:!0});var O=N(C);R=I(O,"read it now"),O.forEach(_),T.forEach(_),v.forEach(_),f.forEach(_),s.forEach(_),this.h()},h(){o.src!==(s="/images/logo-150.png")&&j(o,"src","/images/logo-150.png"),j(o,"alt","Oblivious logo of motorbike in an outline of Africa"),j(r,"href","/"),j(i,"class","no-underline p-2 svelte-17jh4ho"),j(i,"aria-current",f=void 0===t[0]?"page":void 0),j(i,"href","."),j(l,"class","block p-1 sm:p-4"),j(h,"class","no-underline p-2 svelte-17jh4ho"),j(h,"rel","prefetch"),j(h,"aria-current",g="about"===t[0]?"page":void 0),j(h,"href","about"),j(p,"class","block p-1 sm:p-4"),j(y,"class","block p-1 sm:p-4"),j(C,"class","p-2 md:p-4 rounded-lg no-underline bg-oblivious svelte-17jh4ho"),j(C,"href","read"),j(C,"aria-current",T="read"===t[0]?"page":void 0),j(C,"rel","nofollow"),j(L,"class","block p-1 sm:p-4 my-2"),j(c,"class","flex flex-col md:flex-row text-base md:text-xl items-center ml-4"),j(n,"class","flex flex-row justify-between md:justify-start items-center p-4 max-w-4xl w-full"),j(e,"class","flex justify-center")},m(t,s){b(t,e,s),v(e,n),v(n,r),v(r,o),v(n,a),v(n,c),v(c,l),v(l,i),v(i,u),v(c,d),v(c,p),v(p,h),v(h,m),v(c,$),v(c,y),_t(A,y,null),v(c,S),v(c,L),v(L,C),v(C,R),O=!0},p(t,[e]){(!O||1&e&&f!==(f=void 0===t[0]?"page":void 0))&&j(i,"aria-current",f),(!O||1&e&&g!==(g="about"===t[0]?"page":void 0))&&j(h,"aria-current",g);const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),A.$set(n),(!O||1&e&&T!==(T="read"===t[0]?"page":void 0))&&j(C,"aria-current",T)},i(t){O||(it(A.$$.fragment,t),O=!0)},o(t){ut(A.$$.fragment,t),O=!1},d(t){t&&_(e),yt(A)}}}function Rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Tt extends xt{constructor(t){super(),wt(this,t,Rt,Ct,c,{segment:0})}}function Ot(t){let e;return{c(){e=w("download")},l(t){e=I(t,"download")},m(t,n){b(t,e,n)},d(t){t&&_(e)}}}function Ut(t){let e,n,r,o,s,a,c,l,i,u,f,d,p,h,m,g,$,y,A,S,L,C,R,T,O,U,q,M,z,B,J,D,V,G,K,H,F,Y,Q,W,X;return D=new Pt({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){e=E("div"),n=E("nav"),r=E("a"),o=E("img"),a=x(),c=E("ul"),l=E("li"),i=E("a"),u=w("home"),d=x(),p=E("li"),h=E("a"),m=w("about"),$=x(),y=E("li"),A=E("a"),S=w("get help"),C=x(),R=E("li"),T=E("a"),O=w("get in touch"),U=x(),q=E("li"),M=E("a"),z=w("give"),B=x(),J=E("li"),vt(D.$$.fragment),V=x(),G=E("li"),K=E("a"),H=w("read it now"),Y=x(),Q=E("span"),W=w("© Luke Gelmi 2021"),this.h()},l(t){e=k(t,"DIV",{class:!0});var s=N(e);n=k(s,"NAV",{class:!0});var f=N(n);r=k(f,"A",{href:!0});var g=N(r);o=k(g,"IMG",{src:!0,alt:!0}),g.forEach(_),a=P(f),c=k(f,"UL",{class:!0});var v=N(c);l=k(v,"LI",{class:!0});var b=N(l);i=k(b,"A",{class:!0,"aria-current":!0,href:!0});var E=N(i);u=I(E,"home"),E.forEach(_),b.forEach(_),d=P(v),p=k(v,"LI",{class:!0});var w=N(p);h=k(w,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var x=N(h);m=I(x,"about"),x.forEach(_),w.forEach(_),$=P(v),y=k(v,"LI",{class:!0});var j=N(y);A=k(j,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var L=N(A);S=I(L,"get help"),L.forEach(_),j.forEach(_),C=P(v),R=k(v,"LI",{class:!0});var F=N(R);T=k(F,"A",{class:!0,rel:!0,href:!0});var X=N(T);O=I(X,"get in touch"),X.forEach(_),F.forEach(_),U=P(v),q=k(v,"LI",{class:!0});var Z=N(q);M=k(Z,"A",{class:!0,href:!0,rel:!0});var tt=N(M);z=I(tt,"give"),tt.forEach(_),Z.forEach(_),B=P(v),J=k(v,"LI",{class:!0});var et=N(J);bt(D.$$.fragment,et),et.forEach(_),V=P(v),G=k(v,"LI",{class:!0});var nt=N(G);K=k(nt,"A",{class:!0,href:!0,"aria-current":!0,rel:!0});var rt=N(K);H=I(rt,"read it now"),rt.forEach(_),nt.forEach(_),v.forEach(_),Y=P(f),Q=k(f,"SPAN",{class:!0});var ot=N(Q);W=I(ot,"© Luke Gelmi 2021"),ot.forEach(_),f.forEach(_),s.forEach(_),this.h()},h(){o.src!==(s="/images/logo-150.png")&&j(o,"src","/images/logo-150.png"),j(o,"alt","Oblivious logo of motorbike in an outline of Africa"),j(r,"href","/"),j(i,"class","no-underline p-2 svelte-ic3gzm"),j(i,"aria-current",f=void 0===t[0]?"page":void 0),j(i,"href","."),j(l,"class","p-1 sm:p-4"),j(h,"class","no-underline p-2 svelte-ic3gzm"),j(h,"rel","prefetch"),j(h,"aria-current",g="about"===t[0]?"page":void 0),j(h,"href","about"),j(p,"class","p-1 sm:p-4"),j(A,"class","no-underline p-2 svelte-ic3gzm"),j(A,"rel","prefetch"),j(A,"aria-current",L="help"===t[0]?"page":void 0),j(A,"href","help"),j(y,"class","p-1 sm:p-4"),j(T,"class","no-underline p-2"),j(T,"rel","prefetch"),j(T,"href","mailto:obliviousthebook@protonmail.com"),j(R,"class","p-1 sm:p-4"),j(M,"class","no-underline p-2"),j(M,"href","https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart"),j(M,"rel","nofollow"),j(q,"class","p-1 sm:p-4"),j(J,"class","p-1 sm:p-4"),j(K,"class","p-2 md:p-4 rounded-lg no-underline bg-white svelte-ic3gzm"),j(K,"href","read"),j(K,"aria-current",F="read"===t[0]?"page":void 0),j(K,"rel","prefetch"),j(G,"class","p-1 sm:p-4"),j(c,"class","flex flex-col lg:flex-row items-center ml-4"),j(Q,"class","absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 mb-2 text-sm"),j(n,"class","relative z-0 flex flex-row justify-between lg:justify-start items-center p-4 max-w-5xl w-full"),j(e,"class","flex justify-center bg-oblivious")},m(t,s){b(t,e,s),v(e,n),v(n,r),v(r,o),v(n,a),v(n,c),v(c,l),v(l,i),v(i,u),v(c,d),v(c,p),v(p,h),v(h,m),v(c,$),v(c,y),v(y,A),v(A,S),v(c,C),v(c,R),v(R,T),v(T,O),v(c,U),v(c,q),v(q,M),v(M,z),v(c,B),v(c,J),_t(D,J,null),v(c,V),v(c,G),v(G,K),v(K,H),v(n,Y),v(n,Q),v(Q,W),X=!0},p(t,[e]){(!X||1&e&&f!==(f=void 0===t[0]?"page":void 0))&&j(i,"aria-current",f),(!X||1&e&&g!==(g="about"===t[0]?"page":void 0))&&j(h,"aria-current",g),(!X||1&e&&L!==(L="help"===t[0]?"page":void 0))&&j(A,"aria-current",L);const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),D.$set(n),(!X||1&e&&F!==(F="read"===t[0]?"page":void 0))&&j(K,"aria-current",F)},i(t){X||(it(D.$$.fragment,t),X=!0)},o(t){ut(D.$$.fragment,t),X=!1},d(t){t&&_(e),yt(D)}}}function qt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Mt extends xt{constructor(t){super(),wt(this,t,qt,Ut,c,{segment:0})}}function zt(t){const e=t-1;return e*e*e+1}function Bt(t,{delay:n=0,duration:r=400,easing:o=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}function Jt(t,{delay:e=0,duration:n=400,easing:r=zt,x:o=0,y:s=0,opacity:a=0}){const c=getComputedStyle(t),l=+c.opacity,i="none"===c.transform?"":c.transform,u=l*(1-a);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${i} translate(${(1-t)*o}px, ${(1-t)*s}px);\n\t\t\topacity: ${l-u*e}`}}function Dt(t){let e,n,r;const o=t[1].default,s=i(o,t,t[0],null);return{c(){e=E("div"),s&&s.c()},l(t){e=k(t,"DIV",{});var n=N(e);s&&s.l(n),n.forEach(_)},m(t,n){b(t,e,n),s&&s.m(e,null),r=!0},p(t,[e]){s&&s.p&&1&e&&f(s,o,t,t[0],e,null,null)},i(t){r||(it(s,t),n||W((()=>{n=dt(e,Jt,{y:-20,duration:500}),n.start()})),r=!0)},o(t){ut(s,t),r=!1},d(t){t&&_(e),s&&s.d(t)}}}function Vt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class Gt extends xt{constructor(t){super(),wt(this,t,Vt,Dt,c,{})}}function Kt(t){let e,n;const r=t[1].default,o=i(r,t,t[2],null);return{c(){e=E("main"),o&&o.c(),this.h()},l(t){e=k(t,"MAIN",{class:!0});var n=N(e);o&&o.l(n),n.forEach(_),this.h()},h(){j(e,"class","flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-hidden svelte-6dikup")},m(t,r){b(t,e,r),o&&o.m(e,null),n=!0},p(t,e){o&&o.p&&4&e&&f(o,r,t,t[2],e,null,null)},i(t){n||(it(o,t),n=!0)},o(t){ut(o,t),n=!1},d(t){t&&_(e),o&&o.d(t)}}}function Ht(t){let e,n;return e=new Gt({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){vt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){_t(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){ut(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function Ft(e){let n,r,o,s,a,l,i,u,f,d,p,h=e[0];i=new Tt({props:{segment:e[0]}});let m=Ht(e);return d=new Mt({props:{segment:e[0]}}),{c(){n=E("meta"),r=E("meta"),o=E("meta"),s=E("meta"),a=E("meta"),l=x(),vt(i.$$.fragment),u=x(),m.c(),f=x(),vt(d.$$.fragment),this.h()},l(t){const e=R('[data-svelte="svelte-gvmthf"]',document.head);n=k(e,"META",{property:!0,content:!0}),r=k(e,"META",{property:!0,content:!0}),o=k(e,"META",{property:!0,content:!0}),s=k(e,"META",{name:!0,content:!0}),a=k(e,"META",{name:!0,content:!0}),e.forEach(_),l=P(t),bt(i.$$.fragment,t),u=P(t),m.l(t),f=P(t),bt(d.$$.fragment,t),this.h()},h(){j(n,"property","og:site_name"),j(n,"content","ObliviousTheBook.com"),j(r,"property","fb:admins"),j(r,"content","563453705"),j(o,"property","og:image"),j(o,"content","/images/carousel/images(1).jpg"),j(s,"name","twitter:card"),j(s,"content","summary_large_image"),j(a,"name","twitter:image"),j(a,"content","/images/carousel/images(1).jpg")},m(t,e){v(document.head,n),v(document.head,r),v(document.head,o),v(document.head,s),v(document.head,a),b(t,l,e),_t(i,t,e),b(t,u,e),m.m(t,e),b(t,f,e),_t(d,t,e),p=!0},p(e,[n]){const r={};1&n&&(r.segment=e[0]),i.$set(r),1&n&&c(h,h=e[0])?(ct(),ut(m,1,1,t),lt(),m=Ht(e),m.c(),it(m),m.m(f.parentNode,f)):m.p(e,n);const o={};1&n&&(o.segment=e[0]),d.$set(o)},i(t){p||(it(i.$$.fragment,t),it(m),it(d.$$.fragment,t),p=!0)},o(t){ut(i.$$.fragment,t),ut(m),ut(d.$$.fragment,t),p=!1},d(t){_(n),_(r),_(o),_(s),_(a),t&&_(l),yt(i,t),t&&_(u),m.d(t),t&&_(f),yt(d,t)}}}function Yt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(2,o=t.$$scope)},[s,r,o]}class Qt extends xt{constructor(t){super(),wt(this,t,Yt,Ft,c,{segment:0})}}function Wt(t){let e,n,r=t[1].stack+"";return{c(){e=E("pre"),n=w(r)},l(t){e=k(t,"PRE",{});var o=N(e);n=I(o,r),o.forEach(_)},m(t,r){b(t,e,r),v(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&L(n,r)},d(t){t&&_(e)}}}function Xt(e){let n,r,o,s,a,c,l,i,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Wt(e);return{c(){r=x(),o=E("h1"),s=w(e[0]),a=x(),c=E("p"),l=w(f),i=x(),d&&d.c(),u=A(),this.h()},l(t){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(_),r=P(t),o=k(t,"H1",{class:!0});var n=N(o);s=I(n,e[0]),n.forEach(_),a=P(t),c=k(t,"P",{class:!0});var p=N(c);l=I(p,f),p.forEach(_),i=P(t),d&&d.l(t),u=A(),this.h()},h(){j(o,"class","svelte-q86zst"),j(c,"class","svelte-q86zst")},m(t,e){b(t,r,e),b(t,o,e),v(o,s),b(t,a,e),b(t,c,e),v(c,l),b(t,i,e),d&&d.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&L(s,t[0]),2&e&&f!==(f=t[1].message+"")&&L(l,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Wt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&_(r),t&&_(o),t&&_(a),t&&_(c),t&&_(i),d&&d.d(t),t&&_(u)}}}function Zt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class te extends xt{constructor(t){super(),wt(this,t,Zt,Xt,c,{status:0,error:1})}}function ee(t){let e,r,o;const s=[{segment:t[2][1]},t[4].props];var a=t[4].component;function c(t){let e={$$slots:{default:[oe]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(c(t))),{c(){e&&vt(e.$$.fragment),r=A()},l(t){e&&bt(e.$$.fragment,t),r=A()},m(t,n){e&&_t(e,t,n),b(t,r,n),o=!0},p(t,n){const o=20&n?gt(s,[4&n&&{segment:t[2][1]},16&n&&$t(t[4].props)]):{};if(288&n&&(o.$$scope={dirty:n,ctx:t}),a!==(a=t[4].component)){if(e){ct();const t=e;ut(t.$$.fragment,1,0,(()=>{yt(t,1)})),lt()}a?(e=new a(c(t)),vt(e.$$.fragment),it(e.$$.fragment,1),_t(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&it(e.$$.fragment,t),o=!0)},o(t){e&&ut(e.$$.fragment,t),o=!1},d(t){t&&_(r),e&&yt(e,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){vt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){_t(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){ut(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function re(t){let e,r,o;const s=[t[5].props];var a=t[5].component;function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&vt(e.$$.fragment),r=A()},l(t){e&&bt(e.$$.fragment,t),r=A()},m(t,n){e&&_t(e,t,n),b(t,r,n),o=!0},p(t,n){const o=32&n?gt(s,[$t(t[5].props)]):{};if(a!==(a=t[5].component)){if(e){ct();const t=e;ut(t.$$.fragment,1,0,(()=>{yt(t,1)})),lt()}a?(e=new a(c()),vt(e.$$.fragment),it(e.$$.fragment,1),_t(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&it(e.$$.fragment,t),o=!0)},o(t){e&&ut(e.$$.fragment,t),o=!1},d(t){t&&_(r),e&&yt(e,t)}}}function oe(t){let e,n,r=t[5]&&re(t);return{c(){r&&r.c(),e=A()},l(t){r&&r.l(t),e=A()},m(t,o){r&&r.m(t,o),b(t,e,o),n=!0},p(t,n){t[5]?r?(r.p(t,n),32&n&&it(r,1)):(r=re(t),r.c(),it(r,1),r.m(e.parentNode,e)):r&&(ct(),ut(r,1,1,(()=>{r=null})),lt())},i(t){n||(it(r),n=!0)},o(t){ut(r),n=!1},d(t){r&&r.d(t),t&&_(e)}}}function se(t){let e,n,r,o;const s=[ne,ee],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=A()},l(t){n.l(t),r=A()},m(t,n){a[e].m(t,n),b(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(ct(),ut(a[l],1,1,(()=>{a[l]=null})),lt(),n=a[e],n||(n=a[e]=s[e](t),n.c()),it(n,1),n.m(r.parentNode,r))},i(t){o||(it(n),o=!0)},o(t){ut(n),o=!1},d(t){a[e].d(t),t&&_(r)}}}function ae(t){let e,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Qt({props:s}),{c(){vt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,n){_t(e,t,n),r=!0},p(t,[n]){const r=12&n?gt(o,[4&n&&{segment:t[2][0]},8&n&&$t(t[3].props)]):{};311&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(it(e.$$.fragment,t),r=!0)},o(t){ut(e.$$.fragment,t),r=!1},d(t){yt(e,t)}}}function ce(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{level2:i=null}=e,{notify:u}=e;var f,d,p;return f=u,J().$$.after_update.push(f),d=jt,p=r,J().$$.context.set(d,p),t.$$set=t=>{"stores"in t&&n(6,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"level2"in t&&n(5,i=t.level2),"notify"in t&&n(7,u=t.notify)},[o,s,a,c,l,i,r,u]}class le extends xt{constructor(t){super(),wt(this,t,ce,ae,c,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5,notify:7})}}const ie=[/^\/read\/book-index\.json$/,/^\/read\/smooth-scroll\/?$/,/^\/read\/reader-hints\/?$/,/^\/read\/(.+)\.json$/],ue=[{js:()=>Promise.all([import("./index.2025cb01.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./success.9732eb18.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.0b048c78.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./help.5d12d743.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_layout.d1e94238.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.b5dc310c.js"),__inject_styles(["client-cdc73663.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[...slug].51ef3dd8.js"),__inject_styles(["client-cdc73663.css","[...slug]-ad77d0a3.css"])]).then((function(t){return t[0]}))}],fe=(de=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/success\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/help\/?$/,parts:[{i:3}]},{pattern:/^\/read\/?$/,parts:[{i:4},{i:5}]},{pattern:/^\/read\/(.+)\/?$/,parts:[{i:4},{i:6,params:t=>({slug:de(t[1]).split("/")})}]}]);var de;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function pe(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{l(r.next(t))}catch(t){s(t)}}function c(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))}function he(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let me,ge=1;const $e="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ve={};let be,_e;function ye(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ie.some((t=>t.test(e))))for(let n=0;n<fe.length;n+=1){const r=fe[n],o=r.pattern.exec(e);if(o){const n=ye(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=he(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ee(o);if(s){Se(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),$e.pushState({id:me},"",o.href)}}function xe(){return{x:pageXOffset,y:pageYOffset}}function Ae(t){if(ve[me]=xe(),t.state){const e=Ee(new URL(location.href));e?Se(e,t.state.id):location.href=location.href}else ge=ge+1,function(t){me=t}(ge),$e.replaceState({id:me},"",location.href)}function Se(t,e,n,r){return pe(this,void 0,void 0,(function*(){const o=!!e;if(o)me=e;else{const t=xe();ve[me]=t,me=e=++ge,ve[me]=n?t:{x:0,y:0}}if(yield _e(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ve[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ve[me]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function je(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ne,ke=null;function Ie(t){const e=he(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ee(new URL(t,je(document)));if(e)ke&&t===ke.href||(ke={href:t,promise:He(e)}),ke.promise}(e.href)}function Pe(t){clearTimeout(Ne),Ne=setTimeout((()=>{Ie(t)}),20)}function Le(t,e={noscroll:!1,replaceState:!1}){const n=Ee(new URL(t,je(document)));return n?($e[e.replaceState?"replaceState":"pushState"]({id:me},"",t),Se(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Ce="undefined"!=typeof __SAPPER__&&__SAPPER__;let Re,Te,Oe,Ue=!1,qe=[],Me="{}";const ze={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(Ce&&Ce.session)};let Be,Je,De;function Ve(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return pe(this,void 0,void 0,(function*(){Re&&ze.preloading.set(!0);const e=function(t){return ke&&ke.href===t.href?ke.promise:He(t)}(t),n=Te={},r=yield e,{redirect:o}=r;if(n===Te)if(o)yield Le(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ke(n,e,Ve(e,t.page))}}))}function Ke(t,e,n){return pe(this,void 0,void 0,(function*(){ze.page.set(n),ze.preloading.set(!1),Re?Re.$set(e):(e.stores={page:{subscribe:ze.page.subscribe},preloading:{subscribe:ze.preloading.subscribe},session:ze.session},e.level0={props:yield Oe},e.notify=ze.page.notify,Re=new le({target:De,props:e,hydrate:!0})),qe=t,Me=JSON.stringify(n.query),Ue=!0,Je=!1}))}function He(t){return pe(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Oe){const t=()=>({});Oe=Ce.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Be)}let c,l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>pe(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Me)return!0;const o=qe[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const d=l++;if(!Je&&!u&&qe[c]&&qe[c].part===e.i)return qe[c];u=!1;const{default:p,preload:h}=yield ue[e.i].js();let m;return m=Ue||!Ce.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Be):{}:Ce.preloaded[c+1],s["level"+d]={component:p,props:m,segment:f,match:i,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}ze.session.subscribe((t=>pe(void 0,void 0,void 0,(function*(){if(Be=t,!Ue)return;Je=!0;const e=Ee(new URL(location.href)),n=Te={},{redirect:r,props:o,branch:s}=yield He(e);n===Te&&(r?yield Le(r.location,{replaceState:!0}):yield Ke(s,o,Ve(o,e.page)))}))));const Fe=()=>{return t=jt,J().$$.context.get(t);var t};var Ye,Qe,We;Ye={target:document.querySelector("#sapper")},Qe=Ye.target,De=Qe,We=Ce.baseUrl,be=We,_e=Ge,"scrollRestoration"in $e&&($e.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{$e.scrollRestoration="auto"})),addEventListener("load",(()=>{$e.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",Ae),addEventListener("touchstart",Ie),addEventListener("mousemove",Pe),Ce.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Ce;Oe||(Oe=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:Oe},level1:{props:{status:s,error:a},component:te},segments:o},l=ye(n);Ke([],c,{host:t,path:e,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;$e.replaceState({id:ge},"",e);const n=Ee(new URL(location.href));if(n)return Se(n,ge,!0,t)}));export{yt as A,t as B,pt as C,Pt as D,A as E,lt as F,y as G,l as H,Fe as I,dt as J,C as K,ct as L,i as M,f as N,St as O,Gt as P,D as Q,mt as R,xt as S,T,K as U,x as a,N as b,k as c,P as d,E as e,_ as f,I as g,j as h,wt as i,b as j,v as k,S as l,L as m,W as n,ht as o,V as p,Bt as q,s as r,c as s,w as t,vt as u,R as v,bt as w,_t as x,it as y,ut as z};

import __inject_styles from './inject_styles.5607aec6.js';