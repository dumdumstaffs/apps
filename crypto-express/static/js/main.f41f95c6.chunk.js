(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[2],{31:function(e,n,t){"use strict";var r=t(44),a=t.n(r),c=t(11),o=t.n(c),i="/auth/refresh-token",s=o.a.getItem("access_token"),l=a.a.create({baseURL:"https://fantastic-donut-4e7354.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var n=e.config,t=o.a.getItem("access_token"),r=o.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):n.url===i?(o.a.removeItem("access_token"),o.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):r?l.post(i,{refreshToken:r}).then((function(e){var t=e.data;return o.a.setItem("access_token",t.accessToken),l.defaults.headers.Authorization="Bearer ".concat(t.accessToken),n.headers.Authorization="Bearer ".concat(t.accessToken),l(n)})):(t&&o.a.removeItem("access_token"),Promise.reject(e))})),n.a=l},33:function(e,n,t){"use strict";var r,a,c,o=t(13),i=(t(0),t(10)),s=t(1),l=Object(i.e)(r||(r=Object(o.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),u=i.d.div(a||(a=Object(o.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),d=i.d.div(c||(c=Object(o.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));n.a=function(e){var n=e.page;return Object(s.jsxs)(d,{page:n,children:[Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{})]})}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return p}));var r,a=t(32),c=t(0),o=t(10),i=t(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},u=Object(i.a)(Object(i.a)({},l),s),d={primary:"#176e4c",board:"#176e4c",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REFERRAL_BONUS:"20",REACT_APP_NAME:"Crypto Express",REACT_APP_DOMAIN:"crypto-express.org",REACT_APP_CHAT_URL:"https://crypto-express.org",REACT_APP_API_BASE:"https://fantastic-donut-4e7354.netlify.app",REACT_APP_EMAIL:"cryptoxpress3@gmail.com",REACT_APP_PASS:"tbvzoksuxnvdrbhz",REACT_APP_ADDRESS:"San Francisco, CA",REACT_APP_EMAIL_ALIAS:"support@crypto-express.org",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"false",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#176e4c",REACT_APP_BOARD_COLOR:"#176e4c",REACT_APP_ACTION_BG:"#176e4c"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#176e4c",danger:"#FF4747",success:"#68CA6D"},b=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},d),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:d.actionBg||"#383B42",secondary:"#EBEBEB"})}),f=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},d),{},{text:"#fff",invertText:"#000",bg:"#242526",bgContrast:"#2F3137",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:d.actionBg||"#335C67",secondary:"#7B818E"})}),h=t(1),j=Object(c.createContext)(),O=localStorage.getItem("theme")||(null===(r="dark")?void 0:r.toLowerCase()),p=function(e){var n=e.children,t=Object(c.useState)(O),r=Object(a.a)(t,2),i=r[0],s=r[1];Object(c.useEffect)((function(){localStorage.setItem("theme",i)}),[i]);var l="dark"===i?f:b;return Object(h.jsx)(j.Provider,{value:{theme:i,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(h.jsx)(o.a,{theme:l,children:n})})}},95:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),o=t(16),i=t.n(o),s=t(19),l=t(2),u=t(34),d=t(33),b=t(13),f=t(10),h=Object(f.b)(r||(r=Object(b.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=t(54),O=t(35),p=function(){var e=Object(l.h)().pathname;return Object(a.useEffect)((function(){O.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},A=t(31),_={fetcher:function(e){return A.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},g=t(1),m=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,360))})),x=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(7)]).then(t.bind(null,358))})),P=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,359))}));function E(){return Object(g.jsx)(j.b,{children:Object(g.jsx)(u.a,{value:_,children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(p,{}),Object(g.jsx)(h,{}),Object(g.jsx)(a.Suspense,{fallback:Object(g.jsx)(d.a,{}),children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/dashboard",children:Object(g.jsx)(x,{})}),Object(g.jsx)(l.b,{path:"/account",children:Object(g.jsx)(m,{})}),Object(g.jsx)(l.b,{path:"/confirmation",children:Object(g.jsx)(P,{})}),Object(g.jsx)(l.b,{children:Object(g.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var T=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,357)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),T()}},[[95,3,4]]]);
//# sourceMappingURL=main.f41f95c6.chunk.js.map