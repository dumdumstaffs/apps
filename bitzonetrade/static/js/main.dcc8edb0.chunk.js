(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[3],{30:function(e,n,t){"use strict";var r=t(38),a=t.n(r),o=t(11),c=t.n(o),i="/auth/refresh-token",s=c.a.getItem("access_token"),l=a.a.create({baseURL:"https://silver-tarsier-10a49e.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var n=e.config,t=c.a.getItem("access_token"),r=c.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):n.url===i?(c.a.removeItem("access_token"),c.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):r?l.post(i,{refreshToken:r}).then((function(e){var t=e.data;return c.a.setItem("access_token",t.accessToken),l.defaults.headers.Authorization="Bearer ".concat(t.accessToken),n.headers.Authorization="Bearer ".concat(t.accessToken),l(n)})):(t&&c.a.removeItem("access_token"),Promise.reject(e))})),n.a=l},32:function(e,n,t){"use strict";var r,a,o,c=t(13),i=(t(0),t(10)),s=t(1),l=Object(i.e)(r||(r=Object(c.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),b=i.d.div(a||(a=Object(c.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),u=i.d.div(o||(o=Object(c.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));n.a=function(e){var n=e.page;return Object(s.jsxs)(u,{page:n,children:[Object(s.jsx)(b,{}),Object(s.jsx)(b,{}),Object(s.jsx)(b,{}),Object(s.jsx)(b,{})]})}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return _}));var r,a=t(31),o=t(0),c=t(10),i=t(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},b=Object(i.a)(Object(i.a)({},l),s),u={primary:"#0095eb",board:"#0095eb",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REFERRAL_BONUS:"25",REACT_APP_NAME:"BitZone Trade",REACT_APP_DOMAIN:"bitzonetrade.com",REACT_APP_CHAT_URL:"https://bitzonetrade.com",REACT_APP_API_BASE:"https://silver-tarsier-10a49e.netlify.app",REACT_APP_EMAIL:"bitzonetrade@gmail.com",REACT_APP_PASS:"Zionmoney2224",REACT_APP_ADDRESS:"San Francisco, CA",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"false",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#0095eb",REACT_APP_BOARD_COLOR:"#0095eb",REACT_APP_ACTION_BG:"#0095eb"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#0095eb",danger:"#FF4747",success:"#68CA6D"},d=Object(i.a)(Object(i.a)({},b),{},{colors:Object(i.a)(Object(i.a)({},u),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:u.actionBg||"#383B42",secondary:"#EBEBEB"})}),f=Object(i.a)(Object(i.a)({},b),{},{colors:Object(i.a)(Object(i.a)({},u),{},{text:"#fff",invertText:"#000",bg:"#242526",bgContrast:"#2F3137",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:u.actionBg||"#335C67",secondary:"#7B818E"})}),h=t(1),j=Object(o.createContext)(),O=localStorage.getItem("theme")||(null===(r="dark")?void 0:r.toLowerCase()),_=function(e){var n=e.children,t=Object(o.useState)(O),r=Object(a.a)(t,2),i=r[0],s=r[1];Object(o.useEffect)((function(){localStorage.setItem("theme",i)}),[i]);var l="dark"===i?f:d;return Object(h.jsx)(j.Provider,{value:{theme:i,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(h.jsx)(c.a,{theme:l,children:n})})}},93:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(16),i=t.n(c),s=t(19),l=t(2),b=t(33),u=t(32),d=t(13),f=t(10),h=Object(f.b)(r||(r=Object(d.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=t(53),O=t(34),_=function(){var e=Object(l.h)().pathname;return Object(a.useEffect)((function(){O.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},A=t(30),m={fetcher:function(e){return A.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},p=t(1),g=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,361))})),P=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6),t.e(2),t.e(8)]).then(t.bind(null,359))})),x=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,360))}));function T(){return Object(p.jsx)(j.b,{children:Object(p.jsx)(b.a,{value:m,children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(_,{}),Object(p.jsx)(h,{}),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(u.a,{}),children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/dashboard",children:Object(p.jsx)(P,{})}),Object(p.jsx)(l.b,{path:"/account",children:Object(p.jsx)(g,{})}),Object(p.jsx)(l.b,{path:"/confirmation",children:Object(p.jsx)(x,{})}),Object(p.jsx)(l.b,{children:Object(p.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var E=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,358)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),E()}},[[93,4,5]]]);
//# sourceMappingURL=main.dcc8edb0.chunk.js.map