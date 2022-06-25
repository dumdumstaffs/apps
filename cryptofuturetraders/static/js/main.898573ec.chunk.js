(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[2],{30:function(e,t,n){"use strict";var r=n(38),a=n.n(r),o=n(11),c=n.n(o),i="/auth/refresh-token",s=c.a.getItem("access_token"),l=a.a.create({baseURL:"https://tranquil-mermaid-b6ff0f.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=c.a.getItem("access_token"),r=c.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):t.url===i?(c.a.removeItem("access_token"),c.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):r?l.post(i,{refreshToken:r}).then((function(e){var n=e.data;return c.a.setItem("access_token",n.accessToken),l.defaults.headers.Authorization="Bearer ".concat(n.accessToken),t.headers.Authorization="Bearer ".concat(n.accessToken),l(t)})):(n&&c.a.removeItem("access_token"),Promise.reject(e))})),t.a=l},32:function(e,t,n){"use strict";var r,a,o,c=n(13),i=(n(0),n(10)),s=n(1),l=Object(i.e)(r||(r=Object(c.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),u=i.d.div(a||(a=Object(c.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),d=i.d.div(o||(o=Object(c.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));t.a=function(e){var t=e.page;return Object(s.jsxs)(d,{page:t,children:[Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{}),Object(s.jsx)(u,{})]})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return A}));var r,a=n(31),o=n(0),c=n(10),i=n(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},u=Object(i.a)(Object(i.a)({},l),s),d={primary:"#05AAC5",board:"#05AAC5",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REFERRAL_BONUS:"25",REACT_APP_NAME:"Crypto Future Traders",REACT_APP_DOMAIN:"cryptofuturetraders.org",REACT_APP_CHAT_URL:"https://cryptofuturetraders.org",REACT_APP_API_BASE:"https://tranquil-mermaid-b6ff0f.netlify.app",REACT_APP_EMAIL:"cryptofuturetraders@gmail.com",REACT_APP_PASS:"hbwehbmoiqfldhad",REACT_APP_ADDRESS:"San Francisco, CA",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"false",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#0ba026",REACT_APP_BOARD_COLOR:"#0ba026",REACT_APP_ACTION_BG:"#0ba026"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#0ba026",danger:"#FF4747",success:"#68CA6D"},b=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},d),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:d.actionBg||"#383B42",secondary:"#EBEBEB"})}),f=Object(i.a)(Object(i.a)({},u),{},{colors:Object(i.a)(Object(i.a)({},d),{},{text:"#fff",invertText:"#000",bg:"#242526",bgContrast:"#2F3137",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:d.actionBg||"#335C67",secondary:"#7B818E"})}),h=n(1),j=Object(o.createContext)(),O=localStorage.getItem("theme")||(null===(r="dark")?void 0:r.toLowerCase()),A=function(e){var t=e.children,n=Object(o.useState)(O),r=Object(a.a)(n,2),i=r[0],s=r[1];Object(o.useEffect)((function(){localStorage.setItem("theme",i)}),[i]);var l="dark"===i?f:b;return Object(h.jsx)(j.Provider,{value:{theme:i,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(h.jsx)(c.a,{theme:l,children:t})})}},93:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),c=n(16),i=n.n(c),s=n(19),l=n(2),u=n(33),d=n(32),b=n(13),f=n(10),h=Object(f.b)(r||(r=Object(b.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=n(53),O=n(34),A=function(){var e=Object(l.h)().pathname;return Object(a.useEffect)((function(){O.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},_=n(30),m={fetcher:function(e){return _.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},p=n(1),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,358))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(1),n.e(7)]).then(n.bind(null,356))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,357))}));function T(){return Object(p.jsx)(j.b,{children:Object(p.jsx)(u.a,{value:m,children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(A,{}),Object(p.jsx)(h,{}),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(d.a,{}),children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/dashboard",children:Object(p.jsx)(P,{})}),Object(p.jsx)(l.b,{path:"/account",children:Object(p.jsx)(g,{})}),Object(p.jsx)(l.b,{path:"/confirmation",children:Object(p.jsx)(x,{})}),Object(p.jsx)(l.b,{children:Object(p.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var C=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,355)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),C()}},[[93,3,4]]]);
//# sourceMappingURL=main.898573ec.chunk.js.map