import{S as W,i as z,s as D,N as J,O as S,e as h,t as y,k as g,j as I,c as v,a as U,g as E,d as $,n as b,m as H,b as T,f as L,G as i,o as O,P as A,Q,R as V,T as K,x as P,u as R,v as j,U as X,V as Y,I as Z}from"../../chunks/vendor-dbb812ab.js";function ee(o){let t;return{c(){t=y("This is a mandatory field")},l(e){t=E(e,"This is a mandatory field")},m(e,n){L(e,t,n)},d(e){e&&$(t)}}}function te(o){let t;return{c(){t=y("Email is not valid")},l(e){t=E(e,"Email is not valid")},m(e,n){L(e,t,n)},d(e){e&&$(t)}}}function ae(o){let t,e,n,u;return t=new S({props:{on:"required",$$slots:{default:[ee]},$$scope:{ctx:o}}}),n=new S({props:{on:"email",hideWhenRequired:!0,$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment),e=g(),I(n.$$.fragment)},l(a){H(t.$$.fragment,a),e=b(a),H(n.$$.fragment,a)},m(a,s){O(t,a,s),L(a,e,s),O(n,a,s),u=!0},p(a,s){const p={};s&8&&(p.$$scope={dirty:s,ctx:a}),t.$set(p);const f={};s&8&&(f.$$scope={dirty:s,ctx:a}),n.$set(f)},i(a){u||(P(t.$$.fragment,a),P(n.$$.fragment,a),u=!0)},o(a){R(t.$$.fragment,a),R(n.$$.fragment,a),u=!1},d(a){j(t,a),a&&$(e),j(n,a)}}}function ne(o){let t;return{c(){t=y("This is a mandatory field")},l(e){t=E(e,"This is a mandatory field")},m(e,n){L(e,t,n)},d(e){e&&$(t)}}}function se(o){let t,e,n,u,a,s,p,f,k,_,x,c,F,d,G,N,q,M,B;return f=new J({props:{for:"email",$$slots:{default:[ae]},$$scope:{ctx:o}}}),c=new S({props:{for:"password",on:"required",$$slots:{default:[ne]},$$scope:{ctx:o}}}),{c(){t=h("main"),e=h("form"),n=h("h1"),u=y("Login"),a=g(),s=h("input"),p=g(),I(f.$$.fragment),k=g(),_=h("input"),x=g(),I(c.$$.fragment),F=g(),d=h("button"),G=y("Login"),this.h()},l(l){t=v(l,"MAIN",{class:!0});var m=U(t);e=v(m,"FORM",{class:!0});var r=U(e);n=v(r,"H1",{});var w=U(n);u=E(w,"Login"),w.forEach($),a=b(r),s=v(r,"INPUT",{type:!0,name:!0}),p=b(r),H(f.$$.fragment,r),k=b(r),_=v(r,"INPUT",{type:!0,name:!0}),x=b(r),H(c.$$.fragment,r),F=b(r),d=v(r,"BUTTON",{});var C=U(d);G=E(C,"Login"),C.forEach($),r.forEach($),m.forEach($),this.h()},h(){T(s,"type","email"),T(s,"name","email"),T(_,"type","password"),T(_,"name","password"),d.disabled=N=!o[0].valid,T(e,"class","svelte-o8gfqd"),T(t,"class","svelte-o8gfqd")},m(l,m){L(l,t,m),i(t,e),i(e,n),i(n,u),i(e,a),i(e,s),i(e,p),O(f,e,null),i(e,k),i(e,_),i(e,x),O(c,e,null),i(e,F),i(e,d),i(d,G),q=!0,M||(B=[A(Q.call(null,s,[V,K])),A(Q.call(null,_,[V])),A(o[1].call(null,e))],M=!0)},p(l,[m]){const r={};m&8&&(r.$$scope={dirty:m,ctx:l}),f.$set(r);const w={};m&8&&(w.$$scope={dirty:m,ctx:l}),c.$set(w),(!q||m&1&&N!==(N=!l[0].valid))&&(d.disabled=N)},i(l){q||(P(f.$$.fragment,l),P(c.$$.fragment,l),q=!0)},o(l){R(f.$$.fragment,l),R(c.$$.fragment,l),q=!1},d(l){l&&$(t),j(f),j(c),M=!1,X(B)}}}function le(o,t,e){let n,{name:u}=t;const a=Y();return Z(o,a,s=>e(0,n=s)),o.$$set=s=>{"name"in s&&e(2,u=s.name)},[n,a,u]}class oe extends W{constructor(t){super();z(this,t,le,se,D,{name:2})}}export{oe as default};