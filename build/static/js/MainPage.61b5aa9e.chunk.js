(this.webpackJsonpa=this.webpackJsonpa||[]).push([[4],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(91),c=a.n(n),r=a(92),s=a(93),i=a.n(s),o=a(12),l=a(94);i.a.defaults.baseURL="https://teatralna.herokuapp.com";var u=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j=function(){i.a.defaults.headers.common.Authorization=""},b=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(o.e)()),t.prev=1,t.next=4,i.a.post("/api/v1/auth/signin",e);case 4:n=t.sent,r=n.data,a(Object(o.f)(r.result)),Object(l.b)("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c."),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),Object(l.a)("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),a(Object(o.d)(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(o.h)()),e.prev=1,n=a().auth.token,u(n),e.next=6,i.a.get("/api/v1/auth/logout");case 6:r=e.sent,r.data,j(),t(Object(o.i)()),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t(Object(o.g)(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()}},313:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(5),r=a(32),s=a(85),i=a(18),o=(a(313),a.p+"static/media/menu_icon.560605aa.svg"),l=a.p+"static/media/close_icon.80067b51.svg",u=a(14),j=a(116),b=a(2);var h=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],h=Object(c.i)(),d=function(){return r(!a)},O=Object(u.c)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsxs)("a",{href:"https://www.instagram.com/teatralnakondyterska/?hl=ru",target:"_blank",className:"nav-logo",rel:"noreferrer",children:["Teatralnaya",Object(b.jsx)("i",{className:"fas fa-code"})]}),Object(b.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{exact:!0,to:"".concat(h.url),activeClassName:"active",className:"nav-links",onClick:d,children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{exact:!0,to:"".concat(h.url,"/ordersOfDay"),activeClassName:"active",className:"nav-links",onClick:d,children:"\u0417\u0430\u043a\u0430\u0437\u044b \u0437\u0430 \u0434\u0435\u043d\u044c"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{exact:!0,to:"".concat(h.url,"/ordersOfMonth"),activeClassName:"active",className:"nav-links",onClick:d,children:"\u0417\u0430\u043a\u0430\u0437\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-links",onClick:function(){O(Object(j.b)())},children:"\u0412\u044b\u0445\u043e\u0434"})})]}),Object(b.jsx)("div",{className:"nav-icon",onClick:d,children:Object(b.jsx)("img",{src:a?l:o,alt:"",width:"35",height:"35"})})]})})})},d=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(6)]).then(a.bind(null,382))})),O=Object(n.lazy)((function(){return Promise.all([a.e(11),a.e(7)]).then(a.bind(null,379))})),v=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,378))}));t.default=function(){var e=Object(c.i)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(r.a,{}),children:Object(b.jsxs)(c.d,{children:[Object(b.jsx)(c.b,{exact:!0,path:"".concat(e.path),component:d}),Object(b.jsx)(c.b,{exact:!0,path:"".concat(e.path,"/ordersOfDay"),component:O}),Object(b.jsx)(c.b,{exact:!0,path:"".concat(e.path,"/ordersOfMonth"),component:v})]})})]})}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));var n=a(26);a(40);function c(e){return n.c.error(e,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}function r(e){return n.c.success(e,{position:"top-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}}]);
//# sourceMappingURL=MainPage.61b5aa9e.chunk.js.map