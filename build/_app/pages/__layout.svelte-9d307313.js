import{D as se,S as Q,i as W,s as X,e as c,k as L,t as H,c as u,a as p,d as l,n as M,g as D,b as t,E as q,F as te,f as w,G as a,H as Y,I as ae,J as re,j as le,m as ie,o as oe,K as ne,L as ce,M as ue,x as Z,u as x,v as fe}from"../chunks/vendor-dbb812ab.js";const ve=()=>{const i=se("__svelte__");return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:i.navigating.subscribe}},session:i.session}},_e={subscribe(i){return ve().page.subscribe(i)}};var pe="/_app/assets/profpic-2c055d2e.jpg";function de(i){let s,h,f,v,r,_,g,$,I,m,d,j,n,e,o,G,S,E,A,F,N,k,O;return{c(){s=c("header"),h=c("div"),f=L(),v=c("nav"),r=c("ul"),_=c("li"),g=c("a"),$=H("Game"),I=L(),m=c("li"),d=c("a"),j=H("Scoreboard"),n=L(),e=c("li"),o=c("a"),G=H("Login"),S=L(),E=c("div"),A=c("h2"),F=H("Spieler123"),N=L(),k=c("img"),this.h()},l(y){s=u(y,"HEADER",{class:!0});var b=p(s);h=u(b,"DIV",{class:!0});var ee=p(h);ee.forEach(l),f=M(b),v=u(b,"NAV",{class:!0});var P=p(v);r=u(P,"UL",{class:!0});var V=p(r);_=u(V,"LI",{class:!0});var R=p(_);g=u(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=p(g);$=D(J,"Game"),J.forEach(l),R.forEach(l),I=M(V),m=u(V,"LI",{class:!0});var K=p(m);d=u(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var T=p(d);j=D(T,"Scoreboard"),T.forEach(l),K.forEach(l),n=M(V),e=u(V,"LI",{class:!0});var U=p(e);o=u(U,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var z=p(o);G=D(z,"Login"),z.forEach(l),U.forEach(l),V.forEach(l),P.forEach(l),S=M(b),E=u(b,"DIV",{class:!0});var C=p(E);A=u(C,"H2",{id:!0,class:!0});var B=p(A);F=D(B,"Spieler123"),B.forEach(l),N=M(C),k=u(C,"IMG",{id:!0,src:!0,alt:!0,class:!0}),C.forEach(l),b.forEach(l),this.h()},h(){t(h,"class","corner svelte-1717g60"),t(g,"sveltekit:prefetch",""),t(g,"href","/game"),t(g,"class","svelte-1717g60"),t(_,"class","svelte-1717g60"),q(_,"active",i[0].path==="/game"),t(d,"sveltekit:prefetch",""),t(d,"href","/scoreboard"),t(d,"class","svelte-1717g60"),t(m,"class","svelte-1717g60"),q(m,"active",i[0].path==="/scoreboard"),t(o,"sveltekit:prefetch",""),t(o,"href","/login"),t(o,"class","svelte-1717g60"),t(e,"class","svelte-1717g60"),q(e,"active",i[0].path==="/login"),t(r,"class","svelte-1717g60"),t(v,"class","svelte-1717g60"),t(A,"id","player"),t(A,"class","svelte-1717g60"),t(k,"id","profpic"),te(k.src,O=pe)||t(k,"src",O),t(k,"alt","Profile"),t(k,"class","svelte-1717g60"),t(E,"class","corner svelte-1717g60"),t(s,"class","svelte-1717g60")},m(y,b){w(y,s,b),a(s,h),a(s,f),a(s,v),a(v,r),a(r,_),a(_,g),a(g,$),a(r,I),a(r,m),a(m,d),a(d,j),a(r,n),a(r,e),a(e,o),a(o,G),a(s,S),a(s,E),a(E,A),a(A,F),a(E,N),a(E,k)},p(y,[b]){b&1&&q(_,"active",y[0].path==="/game"),b&1&&q(m,"active",y[0].path==="/scoreboard"),b&1&&q(e,"active",y[0].path==="/login")},i:Y,o:Y,d(y){y&&l(s)}}}function he(i,s,h){let f;return ae(i,_e,v=>h(0,f=v)),[f]}class ge extends Q{constructor(s){super();W(this,s,he,de,X,{})}}function me(i){let s,h,f,v,r,_,g,$,I,m,d;s=new ge({});const j=i[1].default,n=re(j,i,i[0],null);return{c(){le(s.$$.fragment),h=L(),f=c("main"),n&&n.c(),v=L(),r=c("footer"),_=c("p"),g=H("visit "),$=c("a"),I=H("git.it.hs-heilbronn.de"),m=H(" to learn more about Salamander Miteinander"),this.h()},l(e){ie(s.$$.fragment,e),h=M(e),f=u(e,"MAIN",{class:!0});var o=p(f);n&&n.l(o),o.forEach(l),v=M(e),r=u(e,"FOOTER",{class:!0});var G=p(r);_=u(G,"P",{});var S=p(_);g=D(S,"visit "),$=u(S,"A",{href:!0,class:!0});var E=p($);I=D(E,"git.it.hs-heilbronn.de"),E.forEach(l),m=D(S," to learn more about Salamander Miteinander"),S.forEach(l),G.forEach(l),this.h()},h(){t(f,"class","svelte-7j2i6y"),t($,"href","https://git.it.hs-heilbronn.de/it/courses/seb/cc1/ws21/demoproject123"),t($,"class","svelte-7j2i6y"),t(r,"class","svelte-7j2i6y")},m(e,o){oe(s,e,o),w(e,h,o),w(e,f,o),n&&n.m(f,null),w(e,v,o),w(e,r,o),a(r,_),a(_,g),a(_,$),a($,I),a(_,m),d=!0},p(e,[o]){n&&n.p&&(!d||o&1)&&ne(n,j,e,e[0],d?ue(j,e[0],o,null):ce(e[0]),null)},i(e){d||(Z(s.$$.fragment,e),Z(n,e),d=!0)},o(e){x(s.$$.fragment,e),x(n,e),d=!1},d(e){fe(s,e),e&&l(h),e&&l(f),n&&n.d(e),e&&l(v),e&&l(r)}}}function be(i,s,h){let{$$slots:f={},$$scope:v}=s;return i.$$set=r=>{"$$scope"in r&&h(0,v=r.$$scope)},[v,f]}class Ee extends Q{constructor(s){super();W(this,s,be,me,X,{})}}export{Ee as default};
