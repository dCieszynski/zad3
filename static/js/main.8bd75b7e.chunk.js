(this["webpackJsonpquote-gen"]=this["webpackJsonpquote-gen"]||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(18),o=n.n(r),s=n(0),u=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("h1",{children:"Zadanie 4 - React"})})},i=n(21),b=n(9),h=n.n(b),j=n(19),l=n(7),d=n(20),f=n.n(d),O=function(t){return Object(s.jsxs)("div",{className:"container container--quote",children:[Object(s.jsx)("div",{className:"quote",children:t.quote}),Object(s.jsx)("div",{className:"author",children:t.author})]})},x=function(t){var e=Object(c.useState)({}),n=Object(l.a)(e,2),a=n[0],r=a.quote,o=a.author,u=n[1],b=Object(c.useState)([]),d=Object(l.a)(b,2),x=d[0],v=d[1],p=Object(c.useState)([]),m=Object(l.a)(p,2),q=m[0],g=m[1];Object(c.useEffect)((function(){N()}),[]);var N=function(){var t=Object(j.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json");case 2:return e=t.sent,t.next=5,e.data;case 5:n=t.sent,v(n),w(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(t){var e,n,c=t[(e=0,n=t.length,e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e)+e))],a=c.quote,r=c.author;g([].concat(Object(i.a)(q),[{quote:a,author:r}])),u({quote:a,author:r})};return Object(s.jsxs)("main",{className:"body",children:[Object(s.jsx)(O,{quote:r,author:o}),Object(s.jsxs)("div",{className:"container container--buttons",children:[Object(s.jsx)("button",{className:"btn btn--prev",onClick:function(){!function(t){if(t.length-1>0){var e=t[t.length-1-1],n=e.quote,c=e.author,a=t;a.pop(),g(a),u({quote:n,author:c})}else if(1===t.length){var r=t[t.length-1],o=r.quote,s=r.author;u({quote:o,author:s})}}(q)},children:"Previous"}),Object(s.jsx)("button",{className:"btn btn--new",onClick:function(){return w(x)},children:"New"})]})]})};n(46);var v=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{}),Object(s.jsx)(x,{})]})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8bd75b7e.chunk.js.map