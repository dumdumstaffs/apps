(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[2],{30:function(e,n,t){"use strict";var a=t(43),r=t.n(a),c=t(11),o=t.n(c),i="/auth/refresh-token",s=o.a.getItem("access_token"),l=r.a.create({baseURL:"https://thriving-scone-3a1d1b.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var n=e.config,t=o.a.getItem("access_token"),a=o.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):n.url===i?(o.a.removeItem("access_token"),o.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):a?l.post(i,{refreshToken:a}).then((function(e){var t=e.data;return o.a.setItem("access_token",t.accessToken),l.defaults.headers.Authorization="Bearer ".concat(t.accessToken),n.headers.Authorization="Bearer ".concat(t.accessToken),l(n)})):(t&&o.a.removeItem("access_token"),Promise.reject(e))})),n.a=l},32:function(e,n,t){"use strict";var a,r,c,o=t(13),i=(t(0),t(10)),s=t(1),l=Object(i.e)(a||(a=Object(o.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),u=i.d.div(r||(r=Object(o.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),b=i.d.div(c||(c=Object(o.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));n.a=function(e){var n=e.page;return Object(s.jsxs)(b,{page:n,children:[Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{})]})}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return O}));var a,r=t(31),c=t(0),o=t(10),i=t(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},u=Object(i.a)(Object(i.a)({},l),s),b={primary:"#004b9e",board:"#004b9e",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"Finance Global Market",REACT_APP_DOMAIN:"financeglobalmarket.org",REACT_APP_EMAIL:"financeglobalmarket@gmail.com",REACT_APP_EMAIL_ALIAS:"support@financeglobalmarket.org",REACT_APP_PASS:"slvwlaefdfhxuoke",REACT_APP_ADDRESS:"4900 California Avenue, Bakersfield, CA, USA",REACT_APP_API_BASE:"https://thriving-scone-3a1d1b.netlify.app",REACT_APP_CUSTOM_MAILER:"",REACT_APP_CUSTOM_DOMAIN:"",REACT_APP_REFERRAL_BONUS:"20",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"true",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#080020",REACT_APP_BOARD_COLOR:"#080020",REACT_APP_ACTION_BG:"#080020"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#4281A4",danger:"#FF4747",success:"#68CA6D"},d=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},b),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:b.actionBg||"#383B42",secondary:"#00c94c"})}),f=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},b),{},{text:"#fff",invertText:"#000",bg:"#080f20",bgContrast:"#131927",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:b.actionBg||"#383B42",secondary:"#00c94c"})}),h=t(1),j=Object(c.createContext)(),A=localStorage.getItem("theme")||(null===(a="dark")?void 0:a.toLowerCase()),O=function(e){var n=e.children,t=Object(c.useState)(A),a=Object(r.a)(t,2),i=a[0],s=a[1];Object(c.useEffect)((function(){localStorage.setItem("theme",i)}),[i]);var l="dark"===i?f:d;return Object(h.jsx)(j.Provider,{value:{theme:i,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(h.jsx)(o.a,{theme:l,children:n})})}},93:function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),o=t(16),i=t.n(o),s=t(19),l=t(2),u=t(33),b=t(32),d=t(13),f=t(10),h=Object(f.b)(a||(a=Object(d.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=t(53),A=t(34),O=function(){var e=Object(l.h)().pathname;return Object(r.useEffect)((function(){A.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},_=t(30),g={fetcher:function(e){return _.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},m=t(1),p=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,357))})),P=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(7)]).then(t.bind(null,355))})),T=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,356))}));function x(){return Object(m.jsx)(j.b,{children:Object(m.jsx)(u.a,{value:g,children:Object(m.jsxs)(s.a,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(h,{}),Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(b.a,{}),children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/dashboard",children:Object(m.jsx)(P,{})}),Object(m.jsx)(l.b,{path:"/account",children:Object(m.jsx)(p,{})}),Object(m.jsx)(l.b,{path:"/confirmation",children:Object(m.jsx)(T,{})}),Object(m.jsx)(l.b,{children:Object(m.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var C=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,354)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),C()}},[[93,3,4]]]);
//# sourceMappingURL=main.8c381dbb.chunk.js.map