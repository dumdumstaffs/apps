(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[2],{31:function(e,n,t){"use strict";var r=t(36),a=t.n(r),i=t(11),c=t.n(i),o="/auth/refresh-token",s=c.a.getItem("access_token"),l=a.a.create({baseURL:"https://splendid-genie-64cad0.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var n=e.config,t=c.a.getItem("access_token"),r=c.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):n.url===o?(c.a.removeItem("access_token"),c.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):r?l.post(o,{refreshToken:r}).then((function(e){var t=e.data;return c.a.setItem("access_token",t.accessToken),l.defaults.headers.Authorization="Bearer ".concat(t.accessToken),n.headers.Authorization="Bearer ".concat(t.accessToken),l(n)})):(t&&c.a.removeItem("access_token"),Promise.reject(e))})),n.a=l},33:function(e,n,t){"use strict";var r,a,i,c=t(13),o=(t(0),t(10)),s=t(1),l=Object(o.e)(r||(r=Object(c.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),d=o.d.div(a||(a=Object(c.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),u=o.d.div(i||(i=Object(c.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));n.a=function(e){var n=e.page;return Object(s.jsxs)(u,{page:n,children:[Object(s.jsx)(d,{}),Object(s.jsx)(d,{}),Object(s.jsx)(d,{}),Object(s.jsx)(d,{})]})}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return m}));var r,a=t(32),i=t(0),c=t(10),o=t(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},d=Object(o.a)(Object(o.a)({},l),s),u={primary:"#F6BB42",board:"#F6BB42",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REFERRAL_BONUS:"25",REACT_APP_NAME:"Prime Digital Mining",REACT_APP_DOMAIN:"primedigitalmining.com",REACT_APP_CHAT_URL:"https://primedigitalmining.com",REACT_APP_API_BASE:"https://splendid-genie-64cad0.netlify.app",REACT_APP_EMAIL:"primedigitalmining@gmail.com",REACT_APP_PASS:"iofrfnnlqgrnjbox",REACT_APP_ADDRESS:"San Francisco, CA",REACT_APP_EMAIL_ALIAS:"support@primedigitalmining.com",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"false",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#0095eb",REACT_APP_BOARD_COLOR:"#0095eb",REACT_APP_ACTION_BG:"#0095eb"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#F6BB42",danger:"#FF4747",success:"#68CA6D"},b=Object(o.a)(Object(o.a)({},d),{},{colors:Object(o.a)(Object(o.a)({},u),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:u.actionBg||"#383B42",secondary:"#EBEBEB"})}),f=Object(o.a)(Object(o.a)({},d),{},{colors:Object(o.a)(Object(o.a)({},u),{},{text:"#fff",invertText:"#000",bg:"#242526",bgContrast:"#2F3137",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:u.actionBg||"#335C67",secondary:"#7B818E"})}),h=t(1),j=Object(i.createContext)(),O=localStorage.getItem("theme")||(null===(r="dark")?void 0:r.toLowerCase()),m=function(e){var n=e.children,t=Object(i.useState)(O),r=Object(a.a)(t,2),o=r[0],s=r[1];Object(i.useEffect)((function(){localStorage.setItem("theme",o)}),[o]);var l="dark"===o?f:b;return Object(h.jsx)(j.Provider,{value:{theme:o,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(h.jsx)(c.a,{theme:l,children:n})})}},95:function(e,n,t){"use strict";t.r(n);var r,a=t(0),i=t.n(a),c=t(16),o=t.n(c),s=t(19),l=t(2),d=t(34),u=t(33),b=t(13),f=t(10),h=Object(f.b)(r||(r=Object(b.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=t(54),O=t(35),m=function(){var e=Object(l.h)().pathname;return Object(a.useEffect)((function(){O.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},g=t(31),A={fetcher:function(e){return g.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},_=t(1),p=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,360))})),P=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(7)]).then(t.bind(null,358))})),x=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,359))}));function T(){return Object(_.jsx)(j.b,{children:Object(_.jsx)(d.a,{value:A,children:Object(_.jsxs)(s.a,{children:[Object(_.jsx)(m,{}),Object(_.jsx)(h,{}),Object(_.jsx)(a.Suspense,{fallback:Object(_.jsx)(u.a,{}),children:Object(_.jsxs)(l.d,{children:[Object(_.jsx)(l.b,{path:"/dashboard",children:Object(_.jsx)(P,{})}),Object(_.jsx)(l.b,{path:"/account",children:Object(_.jsx)(p,{})}),Object(_.jsx)(l.b,{path:"/confirmation",children:Object(_.jsx)(x,{})}),Object(_.jsx)(l.b,{children:Object(_.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var E=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,357)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(T,{})}),document.getElementById("root")),E()}},[[95,3,4]]]);
//# sourceMappingURL=main.eab7d874.chunk.js.map