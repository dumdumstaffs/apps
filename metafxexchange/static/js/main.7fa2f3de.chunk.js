(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[3],{30:function(e,n,t){"use strict";var a=t(43),c=t.n(a),r=t(11),o=t.n(r),i="/auth/refresh-token",s=o.a.getItem("access_token"),l=c.a.create({baseURL:"https://bucolic-bombolone-20e7b6.netlify.app/api",timeout:8e3,headers:{Authorization:s?"Bearer "+s:null,"Content-Type":"application/json",accept:"application/json"}});l.interceptors.response.use((function(e){return e}),(function(e){var n=e.config,t=o.a.getItem("access_token"),a=o.a.getItem("refresh_token");return e.response,401!==e.response.status?Promise.reject(e):n.url===i?(o.a.removeItem("access_token"),o.a.removeItem("refresh_token"),window.location.href="/account/login",Promise.reject(e)):a?l.post(i,{refreshToken:a}).then((function(e){var t=e.data;return o.a.setItem("access_token",t.accessToken),l.defaults.headers.Authorization="Bearer ".concat(t.accessToken),n.headers.Authorization="Bearer ".concat(t.accessToken),l(n)})):(t&&o.a.removeItem("access_token"),Promise.reject(e))})),n.a=l},32:function(e,n,t){"use strict";var a,c,r,o=t(13),i=(t(0),t(10)),s=t(1),l=Object(i.e)(a||(a=Object(o.a)(["\n  0% {\n      left: -20px;\n  }\n  49% {\n      left: 49%;\n  }\n  50% {\n      left: 50%;\n  }\n  100% {\n      left: 115%;\n  }\n"]))),b=i.d.div(c||(c=Object(o.a)(["\n  --size: 10px;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n\n  background-color: ",";\n\n  position: absolute;\n  left: -20px;\n\n  animation: "," 3s ease infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.9s;\n  }\n"])),(function(e){return e.theme.colors.primary||"grey"}),l),u=i.d.div(r||(r=Object(o.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n  overflow: hidden;\n\n  @media screen and (max-width: ",") {\n    height: ",";\n  }\n"])),(function(e){return e.page?"100%":"100vh"}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.page?"calc(100vh - 96px)":"100vh"}));n.a=function(e){var n=e.page;return Object(s.jsxs)(u,{page:n,children:[Object(s.jsx)(b,{}),Object(s.jsx)(b,{}),Object(s.jsx)(b,{}),Object(s.jsx)(b,{})]})}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return m}));var a,c=t(31),r=t(0),o=t(10),i=t(8),s={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},l={fontSize:{small:"16px",normal:"16px",large:"16px"},fontWeight:{light:"300",normal:"400",bold:"600",thick:"800"},fontFamily:{basic:"sans-serif"}},b=Object(i.a)(Object(i.a)({},l),s),u={primary:"#0095eb;",board:"#0095eb;",chart:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REFERRAL_BONUS:"25",REACT_APP_NAME:"Meta FX Exchange",REACT_APP_DOMAIN:"metafxexchange.com",REACT_APP_CHAT_URL:"https://metafxexchange.com",REACT_APP_API_BASE:"https://bucolic-bombolone-20e7b6.netlify.app",REACT_APP_EMAIL:"metafxexchange@gmail.com",REACT_APP_PASS:"hubhumdehhfyvqsz",REACT_APP_ADDRESS:"San Francisco, CA",REACT_APP_EMAIL_ALIAS:"support@metafxexchange.com",REACT_APP_MINIMUM_WITHDRAWAL:"1000",REACT_APP_BANK_WITHDRAWAL:"true",REACT_APP_AUTO_INCREMENT_PROFIT:"true",REACT_APP_DOCUMENT_VERIFICATION:"false",REACT_APP_THEME:"dark",REACT_APP_THEME_SWITCH:"true",REACT_APP_PRIMARY_COLOR:"#0095eb;",REACT_APP_BOARD_COLOR:"#0095eb;",REACT_APP_ACTION_BG:"#0095eb;"}).REACT_APP_CHART_COLOR||"#68CA6D",actionBg:"#0095eb;",danger:"#FF4747",success:"#68CA6D"},h=Object(i.a)(Object(i.a)({},b),{},{colors:Object(i.a)(Object(i.a)({},u),{},{text:"#141414",invertText:"#fff",bg:"#f0f0f0",bgContrast:"white",skeleton:"linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",actionBg:u.actionBg||"#383B42",secondary:"#EBEBEB"})}),d=Object(i.a)(Object(i.a)({},b),{},{colors:Object(i.a)(Object(i.a)({},u),{},{text:"#fff",invertText:"#000",bg:"#242526",bgContrast:"#2F3137",skeleton:"linear-gradient(-90deg, #2f3137 0%, #242526 50%, #2f3137 100%)",actionBg:u.actionBg||"#335C67",secondary:"#7B818E"})}),f=t(1),j=Object(r.createContext)(),O=localStorage.getItem("theme")||(null===(a="dark")?void 0:a.toLowerCase()),m=function(e){var n=e.children,t=Object(r.useState)(O),a=Object(c.a)(t,2),i=a[0],s=a[1];Object(r.useEffect)((function(){localStorage.setItem("theme",i)}),[i]);var l="dark"===i?d:h;return Object(f.jsx)(j.Provider,{value:{theme:i,toggle:function(){s((function(e){return"light"===e?"dark":"light"}))}},children:Object(f.jsx)(o.a,{theme:l,children:n})})}},93:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),o=t(16),i=t.n(o),s=t(19),l=t(2),b=t(33),u=t(32),h=t(13),d=t(10),f=Object(d.b)(a||(a=Object(h.a)(["\n    html, body {\n        color: ",";\n        background-color: ",";\n    }\n    * {\n        border: 0;\n        padding:0;\n        margin: 0;\n        box-sizing: border-box;\n        transition: background-color 0.3s ease-in-out;\n        /* font-family: ","; */\n        font-family: 'Poppins', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.bgContrast}),(function(e){return e.theme.fontFamily.basic})),j=t(53),O=t(34),m=function(){var e=Object(l.h)().pathname;return Object(c.useEffect)((function(){O.animateScroll.scrollToTop({smooth:!0,duration:200})}),[e]),null},A=t(30),_={fetcher:function(e){return A.a.get(e).then((function(e){return e.data}))},shouldRetryOnError:!1,dedupingInterval:1e4},g=t(1),p=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,361))})),x=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6),t.e(2),t.e(8)]).then(t.bind(null,359))})),P=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,360))}));function E(){return Object(g.jsx)(j.b,{children:Object(g.jsx)(b.a,{value:_,children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(m,{}),Object(g.jsx)(f,{}),Object(g.jsx)(c.Suspense,{fallback:Object(g.jsx)(u.a,{}),children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/dashboard",children:Object(g.jsx)(x,{})}),Object(g.jsx)(l.b,{path:"/account",children:Object(g.jsx)(p,{})}),Object(g.jsx)(l.b,{path:"/confirmation",children:Object(g.jsx)(P,{})}),Object(g.jsx)(l.b,{children:Object(g.jsx)(l.a,{to:"/dashboard"})})]})})]})})})}var T=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,358)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),T()}},[[93,4,5]]]);
//# sourceMappingURL=main.7fa2f3de.chunk.js.map