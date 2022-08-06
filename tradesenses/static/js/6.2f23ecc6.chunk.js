(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[6],{103:function(e,n,r){"use strict";var t,a=r(13),o=r(10),i=r(97),s=Object(o.d)(i.a).attrs((function(){return{as:"span"}}))(t||(t=Object(a.a)([""])));n.a=s},104:function(e,n,r){"use strict";r.d(n,"a",(function(){return d}));var t=r(100),a=r.n(t),o=r(101),i=r(34),s=r(11),c=r.n(s),l=r(31),d=function(){var e=Object(i.b)("/profile"),n=e.data,r=e.mutate,t=e.error,s=!n&&!t,d=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.removeItem("access_token"),c.a.removeItem("refresh_token"),l.a.defaults.headers.Authorization=null,e.next=5,r();case 5:window.location.href="/account/login";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{profile:n,loading:s,error:t,mutate:r,logout:d}}},106:function(e,n,r){"use strict";var t,a,o=r(13),i=r(10),s=r(144),c=Object(i.e)(t||(t=Object(o.a)(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),l=Object(i.d)(s.a)(a||(a=Object(o.a)(["\n  --size: ",";\n  width: var(--size);\n  height: var(--size);\n\n  display: block;\n\n  color: ",";\n\n  animation: "," 0.8s linear infinite;\n"])),(function(e){return e.size||"21px"}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),c);n.a=l},107:function(e,n,r){"use strict";var t,a,o,i,s,c=r(8),l=r(99),d=r(13),u=r(0),p=r(10),b=r(1),f=p.d.div(t||(t=Object(d.a)(["\n  position: relative;\n  display: ",";\n\n  font-size: 12px;\n\n  width: ",";\n  margin: ",";\n  font-weight: ",";\n  padding-top: ",";\n"])),(function(e){var n=e.display;return n&&n}),(function(e){return e.w||"100%"}),(function(e){return e.m||"8px 0"}),(function(e){return e.weight||"600"}),(function(e){return e.label&&"24px"})),h=p.d.input(a||(a=Object(d.a)(["\n  /* padding: 12px; */\n  padding: ",";\n  width: 100%;\n\n  font-size: 12px;\n\n  background-color: ",";\n\n  color: ",";\n\n  border-radius: ",";\n\n  border: none;\n  appearance: none;\n  outline: none;\n\n  ","\n"])),(function(e){return e.p||"12px"}),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bg}),(function(e){var n=e.theme,r=e.color;return n.colors[r]||r||n.colors.text}),(function(e){return e.radius||"4px"}),(function(e){return e.outline&&Object(p.c)(o||(o=Object(d.a)(["\n      background: none;\n      border: 2px solid ",";\n      transition: border-color 0.3s ease;\n\n      &:focus {\n        border-color: #222;\n        transition-delay: 0.1s;\n      }\n    "])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"#ddd"}))})),x=p.d.label(i||(i=Object(d.a)(["\n  position: absolute;\n  left: 12px;\n  top: 10px;\n\n  font-size: 11px;\n  color: ",";\n\n  transform: translateY(-50%);\n  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;\n\n  ","\n"])),(function(e){var n=e.error,r=e.color,t=e.theme;return n?t.colors.danger:r?t.colors[r]||r:void 0}),(function(e){return e.wide&&Object(p.c)(s||(s=Object(d.a)(["\n      width: 100%;\n      left: 0;\n      padding: 0 12px;\n    "])))})),j=function(e,n){var r=e.label,t=e.error,a=e.extra,o=e.w,i=e.m,s=e.weight,d=e.display,u=e.color,p=Object(l.a)(e,["label","error","extra","w","m","weight","display","color"]);return Object(b.jsxs)(f,{label:r,w:o,m:i,weight:s,display:d,children:[t?Object(b.jsx)(x,{error:!0,children:t}):a?Object(b.jsx)(x,{color:u,wide:!0,children:a}):r&&Object(b.jsx)(x,{color:u,children:r}),Object(b.jsx)(h,Object(c.a)({ref:n},p))]})};n.a=Object(u.forwardRef)(j)},110:function(e,n,r){"use strict";var t,a,o,i,s,c=r(0),l=r(96),d=r(32),u=r(13),p=r(19),b=r(10),f=r(102),h=r(127),x=r(123),j=r(97),m=r(1),w=b.d.aside(t||(t=Object(u.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),v=Object(b.d)(f.e)(a||(a=Object(u.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),g=b.d.h3(o||(o=Object(u.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),O=b.d.div(i||(i=Object(u.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.bgContrast}),(function(e){return e.open&&Object(b.c)(s||(s=Object(u.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),y=function(){var e=Object(c.useState)(!1),n=Object(d.a)(e,2),r=n[0],t=n[1],a=function(){return t(!r)};return Object(m.jsxs)(w,{children:[Object(m.jsx)(v,{onClick:a}),Object(m.jsx)(p.b,{to:"/dashboard",children:Object(m.jsxs)(g,{children:[Object(m.jsx)(h.a,{}),"Tradesenses"]})}),Object(m.jsx)(x.a,{open:r,onClick:a}),Object(m.jsx)(O,{open:r,children:Object(m.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(m.jsx)(j.a,{as:"a",display:"block",href:"https://".concat("tradesenses.org"),children:"Home"}),Object(m.jsx)(j.a,{display:"block",to:"/account/login",children:"Login"}),Object(m.jsx)(j.a,{display:"block",to:"/account/register",children:"Register"}),Object(m.jsx)(j.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};n.a=function(e){var n=e.children;return Object(m.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(m.jsx)(y,{}),Object(m.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:n})]})}},111:function(e,n,r){"use strict";var t,a=r(8),o=r(99),i=r(13),s=r(0),c=r(102),l=r(10),d=r(1),u=l.d.label(t||(t=Object(i.a)(["\n  position: relative;\n  display: ",";\n\n  display: inline-flex;\n  align-items: center;\n\n  width: ",";\n  padding: ",";\n  margin: ",";\n\n  font-size: 12px;\n\n  color: ",";\n\n  span {\n    width: 18px;\n    height: 18px;\n\n    background-color: lightgrey;\n    color: transparent;\n\n    font-size: 12px;\n    margin-right: 12px;\n\n    border-radius: 2px;\n    border: 0.5px solid #ccc;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-shrink: 0;\n\n    transition: 0.2s;\n  }\n\n  input:checked + span {\n    background-color: #2196f3;\n    color: white;\n    border-color: #2196f3;\n  }\n"])),(function(e){var n=e.display;return n&&n}),(function(e){return e.w||"100%"}),(function(e){return e.p||"12px 8px"}),(function(e){return e.m||"8px 0"}),(function(e){var n=e.color,r=e.theme;return n?r.colors[n]||n:void 0})),p=function(e,n){var r=e.label,t=e.w,i=e.p,s=e.m,l=e.weight,p=e.display,b=e.color,f=Object(o.a)(e,["label","w","p","m","weight","display","color"]);return Object(d.jsxs)(u,{w:t,p:i,m:s,weight:l,display:p,color:b,children:[Object(d.jsx)("input",Object(a.a)({type:"checkbox",hidden:!0,ref:n},f)),Object(d.jsx)("span",{children:Object(d.jsx)(c.f,{})}),r]})};n.a=Object(s.forwardRef)(p)},120:function(e,n,r){"use strict";var t=r(8),a=r(99),o=(r(0),r(104)),i=r(135),s=r(136),c=r(1);n.a=function(e){var n,r,l,d=e.size,u=void 0===d?"32px":d,p=e.user,b=Object(a.a)(e,["size","user"]),f=Object(o.a)().profile,h=p||f,x=(null===(n=h.avatar)||void 0===n?void 0:n.url)&&h.avatar.url.split("/");return x&&(x.splice(6,0,"w_200,h_200,c_fill"),l=x.join("/")),(null===(r=h.avatar)||void 0===r?void 0:r.url)?Object(c.jsx)(s.a,{src:l,w:u,h:u,radius:"50%",alt:h.fullName}):Object(c.jsx)(i.a,Object(t.a)({size:u,name:h.fullName},b))}},123:function(e,n,r){"use strict";var t,a=r(13),o=r(10).d.div(t||(t=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: ",";\n\n  overflow-y: hidden;\n\n  display: ",";\n\n  @media screen and (min-width: ",") {\n    display: ",";\n  }\n"])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"rgba(0, 0, 0, 0.4)"}),(function(e){return e.z||"-1"}),(function(e){return e.open?"block":"none"}),(function(e){return e.theme.breakpoints.lg}),(function(e){var n=e.mobile;return e.open?n?"none":"block":"none"}));n.a=o},127:function(e,n,r){"use strict";r.d(n,"a",(function(){return l}));var t=r(0);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createElement("rect",{x:287,y:258,width:928,height:844,fill:"white"}),s=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z",fill:"#E84142"});function c(e,n){var r=e.title,c=e.titleId,l=o(e,["title","titleId"]);return t.createElement("svg",a({width:1503,height:1504,viewBox:"0 0 1503 1504",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},l),r?t.createElement("title",{id:c},r):null,i,s)}var l=t.forwardRef(c);r.p},135:function(e,n,r){"use strict";var t,a=r(8),o=r(99),i=r(13),s=r(10),c=r(1),l=s.d.div(t||(t=Object(i.a)(["\n  --size: ",";\n  width: var(--size);\n  height: var(--size);\n\n  min-width: var(--size);\n\n  border-radius: 50%;\n  background-color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  font-size: ",";\n  cursor: pointer;\n"])),(function(e){return e.size||"32px"}),(function(e){var n=e.bg,r=e.theme;return r.colors[n]||n||r.colors.primary}),(function(e){return e.font||"calc(0.4375 * var(--size))"}));n.a=function(e){var n=e.name,r=Object(o.a)(e,["name"]),t=null===n||void 0===n?void 0:n.split(" ").slice(0,2).map((function(e){return e.substring(0,1)})).join("");return Object(c.jsx)(l,Object(a.a)(Object(a.a)({},r),{},{children:t}))}},136:function(e,n,r){"use strict";var t,a=r(13),o=r(10).d.img(t||(t=Object(a.a)(["\n  width: ",";\n  height: ",";\n  padding: ",";\n  margin: ",";\n  border-radius: ",";\n\n  max-width: ",";\n\n  object-fit: ",";\n  object-position: ",";\n"])),(function(e){var n=e.w;return n||"100%"}),(function(e){var n=e.h;return n||"100%"}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){return e.max||"100%"}),(function(e){return e.fit||"cover"}),(function(e){return e.pos||"center"}));n.a=o},137:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return i}));var t=r(109),a=t.d().shape({oldPassword:t.f().trim().label("Old Password").required("Old Password is required"),password:t.f().trim().label("New Password").required("New Password is required").min(8,"Password must be at least 8 characters").notOneOf([t.e("oldPassword")],"New password cannot be same as old password"),pass:t.f().trim().label("Password Confirmation").required("Password confirmation is required").oneOf([t.e("password")],"Password do not match")}),o=t.d().shape({email:t.f().email("Invalid Email Address").lowercase().required("Email is required")}),i=t.d().shape({password:t.f().trim().label("New Password").required("New Password is required").min(8,"Password must be at least 8 characters"),pass:t.f().trim().label("Password Confirmation").required("Password confirmation is required").oneOf([t.e("password")],"Password do not match")})},360:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return V}));var t=r(0),a=r(2),o=r(33),i=r(100),s=r.n(i),c=r(99),l=r(101),d=r(11),u=r.n(d),p=r(105),b=r(108),f=r(96),h=r(97),x=r(107),j=r(111),m=r(98),w=r(106),v=r(110),g=r(104),O=r(109),y=O.d().shape({email:O.f().email("Enter a valid Email Address").lowercase().required("Email is required"),password:O.f().trim().required("Password is required")}),k=O.d().shape({email:O.f().email("Enter a valid Email Address").lowercase().required("Email is required"),firstName:O.f().trim().required("First Name is required"),lastName:O.f().trim().required("Last Name is required"),password:O.f().trim().min(8).required("Password is required"),pass:O.f().trim().oneOf([O.e("password")],"Passwords do not match").required("Please Confirm Password")}),P=r(31),C=r(1),z=function(){var e,n,r,t,o,i=Object(a.g)(),d=Object(a.h)().state,O=Object(g.a)().mutate,k=Object(p.c)({defaultValues:{email:"",password:"",showPassword:!1},resolver:Object(b.yupResolver)(y)}),z=k.register,E=k.handleSubmit,N=k.watch,R=k.errors,S=k.setError,q=k.formState.isSubmitting,L=N().showPassword,A=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,t,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,r=Object(c.a)(n,["showPassword"]),e.prev=1,e.next=4,P.a.post("/auth/login",r);case 4:return t=e.sent,a=t.data,P.a.defaults.headers.Authorization="Bearer "+a.accessToken,u.a.setItem("access_token",a.accessToken),u.a.setItem("refresh_token",a.refreshToken),e.next=11,O();case 11:i.push((null===d||void 0===d?void 0:d.from)||"/dashboard"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),o=e.t0.response.data.status,S("email",{type:"server",message:401===o||422===o?"Invalid Email Address or Password":"Something went wrong"});case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}();return Object(C.jsxs)(v.a,{children:[Object(C.jsx)(h.a,{font:"16px",align:"center",bold:!0,children:"Login"}),Object(C.jsxs)(f.a,{as:"form",wide:!0,onSubmit:E(A),children:[Object(C.jsx)(x.a,{type:"email",radius:"6px",p:"12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:"server"!==(null===(e=R.email)||void 0===e?void 0:e.type)&&(null===(n=R.email)||void 0===n?void 0:n.message),ref:z,name:"email"}),Object(C.jsx)(x.a,{type:L?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Password",label:"Password",error:null===(r=R.password)||void 0===r?void 0:r.message,ref:z,name:"password"}),Object(C.jsx)(j.a,{m:"0",label:"Show password?",ref:z,name:"showPassword"}),"server"===(null===(t=R.email)||void 0===t?void 0:t.type)&&Object(C.jsx)(h.a,{font:"12px",p:"0",m:"12px 0 0",color:"red",align:"center",bold:!0,children:null===(o=R.email)||void 0===o?void 0:o.message}),Object(C.jsx)(m.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:q,children:q?Object(C.jsx)(w.a,{}):"Login"}),Object(C.jsxs)(h.a,{font:"12px",align:"center",children:["Don't have an account?"," ",Object(C.jsx)(h.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/register",children:"Create an Account"})]}),Object(C.jsxs)(h.a,{font:"12px",p:"0 0 12px",align:"center",children:["Forgot password?",Object(C.jsx)(h.a,{color:"primary",font:"inherit",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/forgot-password",children:"Click here"})]})]})]})},E=function(){var e,n,r,t,o,i=Object(a.g)(),d=Object(a.h)().state,O=Object(g.a)().mutate,y=Object(p.c)({defaultValues:{email:"",firstName:"",lastName:"",password:"",pass:"",showPassword:!1},resolver:Object(b.yupResolver)(k)}),z=y.register,E=y.handleSubmit,N=y.watch,R=y.errors,S=y.setError,q=y.formState.isSubmitting,L=N().showPassword,A=function(){var e=Object(l.a)(s.a.mark((function e(n){var r,t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,r=Object(c.a)(n,["showPassword"]),(null===d||void 0===d?void 0:d.referrer)&&(r.referrer=d.referrer),e.prev=2,e.next=5,P.a.post("/auth/register",r);case 5:return t=e.sent,a=t.data,P.a.defaults.headers.Authorization="Bearer "+a.accessToken,u.a.setItem("access_token",a.accessToken),u.a.setItem("refresh_token",a.refreshToken),e.next=12,O();case 12:i.push((null===d||void 0===d?void 0:d.from)||"/dashboard"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0,e.t0.response),409===e.t0.response.data.status&&S("email",{type:"server",message:"Email Address already taken"});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(n){return e.apply(this,arguments)}}();return Object(C.jsxs)(v.a,{children:[Object(C.jsx)(h.a,{font:"16px",align:"center",bold:!0,children:"Create Account"}),Object(C.jsxs)(f.a,{as:"form",wide:!0,onSubmit:E(A),children:[Object(C.jsx)(x.a,{type:"email",radius:"6px",p:"12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:null===(e=R.email)||void 0===e?void 0:e.message,ref:z,name:"email"}),Object(C.jsxs)(f.a,{flex:"space-between",m:"8px 0",wide:!0,children:[Object(C.jsx)(x.a,{w:"calc(50% - 6px)",radius:"6px",p:"12px",label:"First Name",placeholder:"First Name",ref:z,name:"firstName",error:null===(n=R.firstName)||void 0===n?void 0:n.message}),Object(C.jsx)(x.a,{w:"calc(50% - 6px)",radius:"6px",p:"12px",label:"Last Name",placeholder:"Last Name",ref:z,name:"lastName",error:null===(r=R.lastName)||void 0===r?void 0:r.message})]}),Object(C.jsx)(x.a,{type:L?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Password",label:"Password",error:null===(t=R.password)||void 0===t?void 0:t.message,ref:z,name:"password"}),Object(C.jsx)(x.a,{type:L?"text":"password",radius:"6px",p:"12px",m:"12px 0",placeholder:"Confirm Password",label:"Confirm Password",error:null===(o=R.pass)||void 0===o?void 0:o.message,ref:z,name:"pass"}),Object(C.jsx)(j.a,{m:"0",label:"Show password?",ref:z,name:"showPassword"}),Object(C.jsx)(m.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:q,children:q?Object(C.jsx)(w.a,{}):"Register"}),Object(C.jsxs)(h.a,{font:"12px",align:"center",children:["Already have an account?"," ",Object(C.jsx)(h.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/login",children:"Login"})]})]})]})},N=r(32),R=r(8),S=r(103),q=r(120),L={loading:!0,referrer:null,error:!1},A=function(e,n){var r=n.type,t=n.payload;switch(r){case"load":return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case"success":return{error:!1,loading:!1,referrer:t};case"error":return Object(R.a)(Object(R.a)({},e),{},{loading:!1,error:!0})}},I=function(){var e=Object(a.i)().ref,n=Object(t.useReducer)(A,L),r=Object(N.a)(n,2),i=r[0],c=i.loading,d=i.referrer,u=i.error,p=r[1];return Object(t.useEffect)((function(){e||p({type:"error"}),function(){var n=Object(l.a)(s.a.mark((function n(){var r,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.a.get("/profile/"+e);case 3:r=n.sent,t=r.data,p({type:"success",payload:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p({type:"error"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()()}),[e]),c?Object(C.jsx)(o.a,{}):u?Object(C.jsx)(v.a,{children:Object(C.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(C.jsx)(h.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Referral"}),Object(C.jsx)(h.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})}):Object(C.jsxs)(v.a,{children:[Object(C.jsx)(h.a,{font:"16px",align:"center",bold:!0,children:"Referral"}),Object(C.jsxs)(f.a,{p:"24px 0",flexCol:"center",wide:!0,children:[Object(C.jsx)(q.a,{user:d,size:"120px"}),Object(C.jsxs)(h.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:["You were referred by ",d.fullName]}),Object(C.jsxs)(h.a,{p:"12px 0",font:"12px",align:"center",multiline:!0,children:["Register under ",d.fullName," and you both earn"," ",Object(C.jsxs)(S.a,{font:"inherit",p:"0",bold:!0,children:["$","20"]})," ","when you sign up using their referral link."]})]}),Object(C.jsxs)(f.a,{wide:!0,children:[Object(C.jsx)(m.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",full:"true",bold:"true",to:{pathname:"/account/register",state:{referrer:d.id}},children:"Register Now"}),Object(C.jsxs)(h.a,{font:"12px",align:"center",children:["Register directly?"," ",Object(C.jsx)(h.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/register",children:"Click here"})]})]})]})},T=r(137),_=function(){var e,n,r,a,o=Object(t.useState)(!1),i=Object(N.a)(o,2),c=i[0],d=i[1],u=Object(p.c)({defaultValues:{email:""},resolver:Object(b.yupResolver)(T.b)}),j=u.register,g=u.handleSubmit,O=u.errors,y=u.setError,k=u.formState.isSubmitting,z=function(){var e=Object(l.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.email,e.prev=1,e.next=4,P.a.post("/auth/reset-password",{email:r});case 4:d(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),y("email",{type:"server",message:"Unable to find account"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return Object(C.jsx)(v.a,{children:c?Object(C.jsx)(h.a,{multiline:!0,children:"Please check your email to continue. We have sent you a link to reset your password"}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(C.jsx)(h.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Reset Password"}),Object(C.jsx)(h.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Enter your email address to find your account"})]}),Object(C.jsxs)(f.a,{as:"form",wide:!0,onSubmit:g(z),children:[Object(C.jsx)(x.a,{type:"email",radius:"6px",p:"14px 12px",m:"12px 0",placeholder:"Email Address",label:"Email Address",error:"server"!==(null===(e=O.email)||void 0===e?void 0:e.type)&&(null===(n=O.email)||void 0===n?void 0:n.message),ref:j,name:"email"}),"server"===(null===(r=O.email)||void 0===r?void 0:r.type)&&Object(C.jsx)(h.a,{font:"12px",p:"0",m:"24px 0 0",color:"red",align:"center",bold:!0,children:null===(a=O.email)||void 0===a?void 0:a.message}),Object(C.jsx)(m.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",full:!0,bold:!0,disabled:k,children:k?Object(C.jsx)(w.a,{}):"Reset Password"}),Object(C.jsxs)(h.a,{font:"12px",align:"center",children:["Remember your password?"," ",Object(C.jsx)(h.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:"true",to:"/account/login",children:"Login"})]})]})]})})},H={loading:!0,valid:!1},F=function(e,n){switch(n.type){case"load":return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},W=function(){var e,n,r=Object(a.g)(),i=Object(a.i)().token,d=Object(t.useReducer)(F,H),u=Object(N.a)(d,2),g=u[0],O=g.loading,y=g.valid,k=u[1];Object(t.useEffect)((function(){i||k({type:"error"}),function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/auth/reset-password/token",{passwordResetToken:i});case 3:k({type:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),k({type:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var z=Object(p.c)({defaultValues:{password:"",pass:"",showPassword:!1},resolver:Object(b.yupResolver)(T.c)}),E=z.register,R=z.handleSubmit,S=z.watch,q=z.formState,L=z.errors,A=S().showPassword,I=q.isSubmitting,_=function(){var e=Object(l.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.showPassword,(t=Object(c.a)(n,["showPassword"])).passwordResetToken=i,e.prev=2,e.next=5,P.a.post("/auth/reset-password/change",t);case 5:r.push("/account/login"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}();return O?Object(C.jsx)(o.a,{}):y?Object(C.jsxs)(v.a,{children:[Object(C.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(C.jsx)(h.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Reset Password"}),Object(C.jsx)(h.a,{font:"12px",p:"0",m:"12px 0 0 0",opacity:"0.6",align:"center",bold:!0,multiline:!0,children:"Updating your password would log you out of all devices"})]}),Object(C.jsxs)(f.a,{as:"form",wide:!0,onSubmit:R(_),children:[Object(C.jsx)(x.a,{radius:"6px",p:"14px 12px",type:A?"text":"password",label:"New Password",placeholder:"New Password",ref:E,name:"password",error:null===(e=L.password)||void 0===e?void 0:e.message}),Object(C.jsx)(x.a,{radius:"6px",p:"14px 12px",type:A?"text":"password",label:"Confirm Password",placeholder:"Confirm Password",ref:E,name:"pass",error:null===(n=L.pass)||void 0===n?void 0:n.message}),Object(C.jsx)(j.a,{m:"0",label:"Show password?",ref:E,name:"showPassword"}),Object(C.jsx)(m.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"24px 0",full:!0,bold:!0,disabled:I,children:I?Object(C.jsx)(w.a,{}):"Reset Password"})]})]}):Object(C.jsx)(v.a,{children:Object(C.jsxs)(f.a,{p:"12px 0",wide:!0,children:[Object(C.jsx)(h.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Reset Password"}),Object(C.jsx)(h.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},B=function(e){var n=e.children,r=Object(g.a)(),t=r.profile;return r.loading?Object(C.jsx)(o.a,{}):t?Object(C.jsx)(a.a,{to:"/dashboard"}):t?void 0:n};function V(){var e=Object(a.j)(),n=e.path,r=e.url;return Object(C.jsx)(B,{children:Object(C.jsxs)(a.d,{children:[Object(C.jsx)(a.b,{exact:!0,path:"".concat(n,"/login"),children:Object(C.jsx)(z,{})}),Object(C.jsx)(a.b,{exact:!0,path:"".concat(n,"/register"),children:Object(C.jsx)(E,{})}),Object(C.jsx)(a.b,{exact:!0,path:"".concat(n,"/referral/:ref"),children:Object(C.jsx)(I,{})}),Object(C.jsx)(a.b,{exact:!0,path:"".concat(n,"/forgot-password"),children:Object(C.jsx)(_,{})}),Object(C.jsx)(a.b,{exact:!0,path:"".concat(n,"/reset-password/:token"),children:Object(C.jsx)(W,{})}),Object(C.jsx)(a.b,{children:Object(C.jsx)(a.a,{to:"".concat(r,"/login")})})]})})}},96:function(e,n,r){"use strict";var t,a,o,i,s,c,l,d,u,p,b,f=r(13),h=r(19),x=r(35),j=r(10),m=j.d.div.attrs((function(e){var n=e.to,r=e.scrollto;return{as:n&&(r?x.Link:h.b)}}))(t||(t=Object(f.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n  color: ",";\n  padding: ",";\n  border-radius: ",";\n  margin: ",";\n\n  cursor: ",";\n\n  max-width: ",";\n  min-width: ",";\n  max-height: ",";\n  min-height: ",";\n\n  display: ",";\n  overflow: ",";\n\n  // grid\n  grid-area: ",";\n  grid-gap: ",";\n  grid-auto-flow: ",";\n  grid-template-columns: ",";\n  grid-template-rows: ",";\n\n  // full width and default height\n  ","\n\n  // flex row with center align\n  ","\n\n  // flex column with center align\n  ","\n\n  // flex overrides\n  align-items: ",";\n  justify-content: ",";\n  flex-direction: ",";\n\n  // position\n  position: ",";\n  top: ",";\n  bottom: ",";\n  left: ",";\n  right: ",";\n  z-index: ",";\n\n  // border\n  border: ",";\n  border-top: ",";\n  border-bottom: ",";\n  border-left: ",";\n  border-right: ",";\n  border-color: ",";\n\n  // scroll behaviour for y-axis\n  ","\n\n  ","\n\n    // scroll behaviour for x-axis\n    ","\n\n    ","\n\n    // media overrides for screens below/above breakpoint, supports: p, m, radius, display\n    ","\n"])),(function(e){var n=e.w;return n||"100%"}),(function(e){var n=e.h;return n||"100%"}),(function(e){var n=e.bg;return e.theme.colors[n]||n&&n}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){return e.pointer&&"pointer"}),(function(e){var n=e.maxW;return n&&n}),(function(e){var n=e.minW;return n&&n}),(function(e){var n=e.maxH;return n&&n}),(function(e){var n=e.minH;return n&&n}),(function(e){var n=e.display;return n&&n}),(function(e){var n=e.o;return n&&n}),(function(e){var n=e.area;return n&&n}),(function(e){var n=e.gap;return n&&n}),(function(e){var n=e.flow;return n&&n}),(function(e){var n=e.templatecolumns;return n&&n}),(function(e){var n=e.templaterows;return n&&n}),(function(e){return e.wide&&Object(j.c)(a||(a=Object(f.a)(["\n      width: 100%;\n      height: auto;\n    "])))}),(function(e){return e.flex&&Object(j.c)(o||(o=Object(f.a)(["\n      display: flex;\n      justify-content: ",";\n      align-items: center;\n    "])),(function(e){return e.flex}))}),(function(e){return e.flexCol&&Object(j.c)(i||(i=Object(f.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: ",";\n      justify-content: center;\n    "])),(function(e){return e.flexCol}))}),(function(e){var n=e.align;return n&&n}),(function(e){var n=e.justify;return n&&n}),(function(e){var n=e.direction;return n&&n}),(function(e){var n=e.position;return n&&n}),(function(e){var n=e.top;return n&&n}),(function(e){var n=e.bottom;return n&&n}),(function(e){var n=e.left;return n&&n}),(function(e){var n=e.right;return n&&n}),(function(e){var n=e.z;return n&&n}),(function(e){var n=e.border;return n&&n}),(function(e){var n=e.bordertop;return n&&n}),(function(e){var n=e.borderbottom;return n&&n}),(function(e){var n=e.borderleft;return n&&n}),(function(e){var n=e.borderright;return n&&n}),(function(e){var n=e.theme,r=e.bordercolor;return n.colors[r]||r||"rgba(0, 0, 0, 0.1)"}),(function(e){return e.scroll&&Object(j.c)(s||(s=Object(f.a)(["\n      overflow-y: scroll;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    "])))}),(function(e){return e.noscroll&&Object(j.c)(c||(c=Object(f.a)(["\n      overflow-y: hidden;\n    "])))}),(function(e){return e.scrollX&&Object(j.c)(l||(l=Object(f.a)(["\n      overflow-x: scroll;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    "])))}),(function(e){return e.noscrollX&&Object(j.c)(d||(d=Object(f.a)(["\n      overflow-x: hidden;\n    "])))}),(function(e){var n=e.media;if(n){var r=Object(j.c)(u||(u=Object(f.a)(["\n        display: ",";\n        overflow: ",";\n\n        width: ",";\n        height: ",";\n\n        padding: ",";\n        margin: ",";\n        border-radius: ",";\n\n        background-color: ",";\n\n        max-width: ",";\n        min-width: ",";\n        max-height: ",";\n        min-height: ",";\n\n        align-items: ",";\n        justify-content: ",";\n        flex-direction: ",";\n\n        grid-area: ",";\n        grid-gap: ",";\n        grid-auto-flow: ",";\n        grid-template-columns: ",";\n        grid-template-rows: ",";\n\n        overflow-y: ",";\n        overflow-x: ",";\n        &::-webkit-scrollbar {\n          display: none;\n        }\n      "])),n.display,n.o,n.w,n.h,n.p,n.m,n.radius,(function(e){var n=e.media;return e.theme.colors[n.bg]||n.bg}),n.maxW,n.minW,n.maxH,n.minH,n.align,n.justify,n.direction,n.area,n.gap,n.flow,n.templatecolumns,n.templaterows,n.overflowY,n.overflowX),t=n.breakpoint||"xl";return n.targetBelow?Object(j.c)(p||(p=Object(f.a)(["\n            @media screen and (max-width: ",") {\n              ","\n            }\n          "])),(function(e){return e.theme.breakpoints[t]}),r):Object(j.c)(b||(b=Object(f.a)(["\n            @media screen and (min-width: ",") {\n              ","\n            }\n          "])),(function(e){return e.theme.breakpoints[t]}),r)}}));n.a=m},97:function(e,n,r){"use strict";var t,a,o,i=r(13),s=r(19),c=r(35),l=r(10),d=l.d.p.attrs((function(e){var n=e.to,r=e.scrollto,t=e.href;return{as:n?r?c.Link:s.b:t&&"a"}}))(t||(t=Object(i.a)(["\n  padding: ",";\n  margin: ",";\n  width: ",";\n  height: ",";\n\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  border-radius: ",";\n\n  font-weight: ",";\n  font-size: ",";\n  text-align: ",";\n\n  cursor: ",";\n\n  display: ",";\n\n  word-break: ",";\n  text-decoration: ",";\n\n  ","\n  ",";\n"])),(function(e){var n=e.p;return n||"12px"}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.w;return n&&n}),(function(e){var n=e.h;return n&&n}),(function(e){var n=e.color;return e.theme.colors[n]||n&&n}),(function(e){var n=e.bg;return e.theme.colors[n]||n&&n}),(function(e){var n=e.opacity;return n&&n}),(function(e){var n=e.radius;return n&&n}),(function(e){var n=e.bold,r=e.weight;return r||(n?"600":"400")}),(function(e){var n=e.font;return n||"12px"}),(function(e){var n=e.align;return n&&n}),(function(e){return e.pointer&&"pointer"}),(function(e){var n=e.display,r=e.inline;return n||r&&"inline"}),(function(e){return e.breakword&&"break-all"}),(function(e){return e.underline&&"underline"}),(function(e){return!e.multiline&&Object(l.c)(a||(a=Object(i.a)(["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "])))}),(function(e){var n=e.flexalign,r=e.justify,t=e.align,a=e.inline;return n&&Object(l.c)(o||(o=Object(i.a)(["\n      display: ",";\n      justify-content: ",";\n      align-items: ",";\n    "])),a?"inline-flex":"flex",r&&r,t||"center")}));n.a=d},98:function(e,n,r){"use strict";var t,a,o,i,s=r(13),c=r(19),l=r(35),d=r(10),u=d.d.button.attrs((function(e){var n=e.to,r=e.scrollto;return{as:n&&(r?l.Link:c.b)}}))(t||(t=Object(s.a)(["\n  --bg: ",";\n  --color: ",";\n\n  background-color: var(--bg);\n  color: var(--color);\n\n  padding: 12px;\n  min-height: 24px;\n  /* min-width: 48px; */\n  font-size: 12px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  /* appearance: none; */\n  border: none;\n  outline: none;\n\n  &:hover,\n  &:active {\n    /* filter: brightness(0.8); */\n  }\n\n  // inlines\n  padding: ",";\n  margin: ",";\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  font-size: ",";\n  font-weight: ",";\n  border-radius: ",";\n\n  // customs\n  ","\n\n  ","\n\n  ","\n"])),(function(e){var n=e.bg;return e.theme.colors[n]||n||"grey"}),(function(e){var n=e.color;return e.theme.colors[n]||n||"white"}),(function(e){var n=e.p;return n&&n}),(function(e){var n=e.m;return n&&n}),(function(e){var n=e.w;return n&&n}),(function(e){var n=e.max;return n&&n}),(function(e){var n=e.min;return n&&n}),(function(e){var n=e.font;return n&&n}),(function(e){var n=e.bold,r=e.weight;return r||n&&"600"}),(function(e){return e.radius||"4px"}),(function(e){return e.full&&Object(d.c)(a||(a=Object(s.a)(["\n      width: 100%;\n    "])))}),(function(e){return e.round&&Object(d.c)(o||(o=Object(s.a)(["\n      border-radius: 16px;\n    "])))}),(function(e){return e.outline&&Object(d.c)(i||(i=Object(s.a)(["\n      --color: ",";\n      background-color: transparent;\n      border: 1.5px solid;\n\n      &:hover,\n      &:active {\n        --bg: ",";\n        color: var(--bg);\n        background-color: var(--color);\n        border: none;\n      }\n    "])),(function(e){var n=e.color;return e.theme.colors[n]||n||"grey"}),(function(e){var n=e.bg;return e.theme.colors[n]||n||"white"}))}));n.a=u}}]);
//# sourceMappingURL=6.2f23ecc6.chunk.js.map