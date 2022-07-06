(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[9],{109:function(e,t,n){"use strict";var a,c,r,i,o,s=n(0),l=n(94),p=n(31),d=n(13),b=n(19),u=n(10),j=n(100),x=n(126),h=n(95),f=n(1),m=u.d.aside(a||(a=Object(d.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),O=Object(u.d)(j.e)(c||(c=Object(d.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),g=u.d.h3(r||(r=Object(d.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),v=u.d.div(i||(i=Object(d.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.open&&Object(u.c)(o||(o=Object(d.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),y=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)};return Object(f.jsxs)(m,{children:[Object(f.jsx)(O,{onClick:c}),Object(f.jsx)(b.b,{to:"/dashboard",children:Object(f.jsxs)(g,{children:[Object(f.jsx)("img",{src:"/logo.png",alt:"logo"}),"SuperCoin Trade"]})}),Object(f.jsx)(x.a,{open:n,onClick:c}),Object(f.jsx)(v,{open:n,children:Object(f.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(f.jsx)(h.a,{as:"a",display:"block",href:"https://".concat("supercointrade.com"),children:"Home"}),Object(f.jsx)(h.a,{display:"block",to:"/account/login",children:"Login"}),Object(f.jsx)(h.a,{display:"block",to:"/account/register",children:"Register"}),Object(f.jsx)(h.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};t.a=function(e){var t=e.children;return Object(f.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(f.jsx)(y,{}),Object(f.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:t})]})}},395:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(0),c=n(2),r=n(32),i=n(98),o=n.n(i),s=n(99),l=n(103),p=n(106),d=n(94),b=n(95),u=n(105),j=n(113),x=n(96),h=n(104),f=n(208),m=n(119),O=n(109),g=n(102),v=n(213),y=n(30),w=n(214),k=n(1),D=function(){var e,t,n,a,r,i,D,S,C,I,P,V=Object(c.g)(),N=Object(g.a)(),R=N.profile,F=N.mutate,L=Object(l.c)({defaultValues:{firstName:R.firstName,lastName:R.lastName,profile:{phone:"",gender:"",dob:new Date,city:"",country:(null===(e=w.a.find((function(e){return"US"===e.code})))||void 0===e?void 0:e.name)||""}},resolver:Object(p.yupResolver)(v.a)}),E=L.register,U=L.control,Y=L.handleSubmit,A=L.errors,T=L.setError,K=L.formState.isSubmitting,z=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new Date(t.profile.dob),a=new Date,c=new Date(a.setFullYear(a.getFullYear()-10)),n<c){e.next=6;break}return e.abrupt("return",T("profile.dob",{type:"server",message:"Select valid Date"}));case 6:return e.prev=6,e.next=9,y.a.put("/profile",t);case 9:return e.next=11,F();case 11:V.push("/dashboard"),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return R.profile?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"KYC Verification"}),Object(k.jsx)(b.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly complete identification process to complete verification"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:Y(z),children:[Object(k.jsx)("input",{hidden:!0,ref:E,name:"firstName"}),Object(k.jsx)("input",{hidden:!0,ref:E,name:"lastName"}),Object(k.jsx)(j.a,{radius:"6px",p:"12px",label:"Country",ref:E,name:"profile.country",error:null===(t=A.profile)||void 0===t||null===(n=t.country)||void 0===n?void 0:n.message,children:w.a.map((function(e){return Object(k.jsx)("option",{value:e.name,children:e.name},e.code)}))}),Object(k.jsx)(u.a,{radius:"6px",p:"12px",label:"City",placeholder:"City",ref:E,name:"profile.city",error:null===(a=A.profile)||void 0===a||null===(r=a.city)||void 0===r?void 0:r.message}),Object(k.jsx)(f.a,{radius:"6px",p:"12px",type:"tel",label:"Phone Number",placeholder:"Phone Number",ref:E,name:"profile.phone",error:null===(i=A.profile)||void 0===i||null===(D=i.phone)||void 0===D?void 0:D.message}),Object(k.jsxs)(j.a,{radius:"6px",p:"12px",label:"Gender",ref:E,name:"profile.gender",error:null===(S=A.profile)||void 0===S||null===(C=S.gender)||void 0===C?void 0:C.message,children:[Object(k.jsx)("option",{value:"male",children:"Male"}),Object(k.jsx)("option",{value:"female",children:"Female"}),Object(k.jsx)("option",{value:"other",children:"Other"})]}),Object(k.jsx)(m.a,{radius:"6px",p:"12px",label:"Date of Birth",hint:"Pick Date",placeholder:"Date of Birth",control:U,name:"profile.dob",error:null===(I=A.profile)||void 0===I||null===(P=I.dob)||void 0===P?void 0:P.message}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:K,children:K?Object(k.jsx)(h.a,{}):"Submit"})]})]})},S=n(31),C=n(101),I=function(){var e=Object(g.a)().profile,t=Object(a.useState)(!1),n=Object(S.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(!1),p=Object(S.a)(l,2),u=p[0],j=p[1],f=Object(a.useState)(!1),m=Object(S.a)(f,2),v=m[0],w=m[1],D=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,y.a.post("/profile/request-email-verification");case 4:i(!0),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e.meta.isEmailVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Verify Your Email"}),Object(k.jsx)(b.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:r?"We just sent you a verification link. Check your email and click on the link to verify your account":"Please check your email to verify your account"})]}),Object(k.jsxs)(d.a,{m:"24px 0 0",wide:!0,children:[!r&&Object(k.jsxs)(b.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,children:["Didn't get a verification email?",Object(k.jsx)(C.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:!0,underline:!0,onClick:function(){return w(!0)},children:"Click Here"})]}),v&&Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"12px 0 12px",full:!0,bold:!0,disabled:r,onClick:D,children:u?Object(k.jsx)(h.a,{}):r?"Please check your email":"Request Verification"})]})]})},P=n(8),V={loading:!0,valid:!1},N=function(e,t){switch(t.type){case"load":return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},R=function(){var e=Object(c.i)().token,t=Object(c.g)(),n=Object(g.a)().mutate,i=Object(a.useReducer)(N,V),l=Object(S.a)(i,2),p=l[0],u=p.loading,j=p.valid,h=l[1];Object(a.useEffect)((function(){e||h({type:"error"}),function(){var t=Object(s.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("/auth/verify-email",{emailToken:e});case 3:n=t.sent,a=n.data,h({type:"success",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h({type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var f=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t.push("/dashboard");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u?Object(k.jsx)(r.a,{}):j?Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(k.jsx)(b.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your email has been verified"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"24px 0 12px",full:!0,bold:!0,onClick:f,children:"Log In"})})]}):Object(k.jsx)(O.a,{children:Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(k.jsx)(b.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},F=function(){var e=Object(g.a)(),t=e.profile,n=e.logout;return t.meta.isActive?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Account Disabled"}),Object(k.jsx)(b.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your account has been deactivated"})]}),Object(k.jsxs)(d.a,{wide:!0,children:[Object(k.jsx)(b.a,{font:"12px",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"If you think this is a mistake kindly send us a message"}),Object(k.jsx)(x.a,{type:"submit",bg:"secondary",color:"black",radius:"2px",m:"12px 0",full:!0,bold:!0,onClick:n,children:"Log Out"})]})]})},L=function(e){var t=e.title,n=e.desc;return Object(k.jsxs)(d.a,{p:"12px 16px",m:"0 0 12px 0",bg:"bg",radius:"8px",wide:!0,children:[Object(k.jsx)(b.a,{p:"0",m:"0 0 8px 0",opacity:"0.8",font:"12px",weight:"500",children:t}),Object(k.jsx)(b.a,{p:"0",weight:"400",opacity:"0.9",font:"10px",multiline:!0,children:n})]})},E=function(){return Object(g.a)().profile.isDocumentVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Submit Documents"}),Object(k.jsx)(b.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"We need to verify your information. Please submit the following documents below"})]}),Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(L,{title:"1.) Photo of ID (front side)",desc:"International Passport, Driver's License or National ID"}),Object(k.jsx)(L,{title:"2.) Photo of ID (back side)",desc:"Same document as above"}),Object(k.jsx)(L,{title:"3.) Take a selfie holding your ID",desc:"A photo clearly showing your face and your ID"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:"true",bold:"true",to:"/confirmation/documents/1",children:"Start Verification"})})]})},U=n(142),Y=n(114),A=n(143),T=function(){var e=Object(c.g)(),t=Object(g.a)().profile,n=Object(Y.a)(),r=n.processing,i=n.response,l=n.start,p=n.complete,u=n.fail,j=Object(a.useState)(),f=Object(S.a)(j,2),m=f[0],v=f[1],w=Object(a.useState)(!1),D=Object(S.a)(w,2),C=D[0],I=D[1],P=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I(!1),a=Object(A.a)(m),t.prev=3,l(),t.next=7,y.a.post("/profile/document/1",{document:a});case 7:p({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/2"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),I(!0),u(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return t.isDocumentVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 1"}),Object(k.jsx)(b.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of your ID Document (International Passport, Driver's License or National ID)"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:P,children:[Object(k.jsx)(U.a,{image:m,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return v(n.result)}},hint:"Select Document"}),C&&r&&Object(k.jsx)(b.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:i}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!m,children:r?Object(k.jsx)(h.a,{}):m?"Upload Photo":"Choose an image"})]})]})},K=function(){var e=Object(c.g)(),t=Object(g.a)().profile,n=Object(Y.a)(),r=n.processing,i=n.response,l=n.start,p=n.complete,u=n.fail,j=Object(a.useState)(),f=Object(S.a)(j,2),m=f[0],v=f[1],w=Object(a.useState)(!1),D=Object(S.a)(w,2),C=D[0],I=D[1],P=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I(!1),a=Object(A.a)(m),t.prev=3,l(),t.next=7,y.a.post("/profile/document/2",{document:a});case 7:p({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/3"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),I(!0),u(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return t.idFront?Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 2"}),Object(k.jsx)(b.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of the back of your ID document"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:P,children:[Object(k.jsx)(U.a,{image:m,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return v(n.result)}},hint:"Select Document"}),C&&Object(k.jsx)(b.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:i}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!m,children:r?Object(k.jsx)(h.a,{}):m?"Upload Photo":"Choose an image"})]})]}):Object(k.jsx)(c.a,{to:"/confirmation/documents/1"})},z=function(){var e=Object(c.g)(),t=Object(g.a)().profile,n=Object(Y.a)(),r=n.processing,i=n.response,l=n.start,p=n.complete,u=n.fail,j=Object(a.useState)(),f=Object(S.a)(j,2),m=f[0],v=f[1],w=Object(a.useState)(!1),D=Object(S.a)(w,2),C=D[0],I=D[1],P=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I(!1),a=Object(A.a)(m),t.prev=3,l(),t.next=7,y.a.post("/profile/document/3",{document:a});case 7:p({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/completed"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(3),I(!0),u(t.t0.response.message),console.log(t.t0,t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return t.idBack?Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 3"}),Object(k.jsx)(b.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Take a photo of you holding the ID you just submitted. Ensure the front of the ID is visible"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:P,children:[Object(k.jsx)(U.a,{image:m,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return v(n.result)}},hint:"Select Document"}),C&&Object(k.jsx)(b.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:i}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!m,children:r?Object(k.jsx)(h.a,{}):m?"Upload Photo":"Choose an image"})]})]}):Object(k.jsx)(c.a,{to:"/confirmation/documents/2"})},B=function(){return Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(b.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Verification Completed"}),Object(k.jsx)(b.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Thank you. Your data is beign processed and you can already access your account"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:"true",bold:"true",to:"/dashboard",children:"Go To Dashboard"})})]})},H=function(e){var t=e.children,n=Object(c.h)(),a=Object(g.a)(),i=a.profile;if(a.loading)return Object(k.jsx)(r.a,{});var o=n.pathname.split("/").slice(0,3).join("/"),s=["/confirmation/verify-email"].includes(o);return i||s?t:Object(k.jsx)(c.a,{to:"/account/login"})};function W(){var e=Object(c.j)().path;return Object(k.jsx)(H,{children:Object(k.jsxs)(c.d,{children:[Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/kyc"),children:Object(k.jsx)(D,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/verify-email/:token"),children:Object(k.jsx)(R,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/email-verification"),children:Object(k.jsx)(I,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/lock"),children:Object(k.jsx)(F,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/start"),children:Object(k.jsx)(E,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/1"),children:Object(k.jsx)(T,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/2"),children:Object(k.jsx)(K,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/3"),children:Object(k.jsx)(z,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/completed"),children:Object(k.jsx)(B,{})}),Object(k.jsx)(c.b,{children:Object(k.jsx)(c.a,{to:"/"})})]})})}}}]);
//# sourceMappingURL=9.5b0dc4ff.chunk.js.map