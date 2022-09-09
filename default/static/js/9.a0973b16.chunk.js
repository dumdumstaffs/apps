(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[9],{110:function(e,t,n){"use strict";var a,c,r,i,o,s=n(0),l=n(96),p=n(32),d=n(13),u=n(19),b=n(10),j=n(102),x=n(136),h=n(129),f=n(97),m=n(1),O=b.d.aside(a||(a=Object(d.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),g=Object(b.d)(j.e)(c||(c=Object(d.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),v=b.d.h3(r||(r=Object(d.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),y=b.d.div(i||(i=Object(d.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.open&&Object(b.c)(o||(o=Object(d.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),w=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)};return Object(m.jsxs)(O,{children:[Object(m.jsx)(g,{onClick:c}),Object(m.jsx)(u.b,{to:"/dashboard",children:Object(m.jsxs)(v,{children:[Object(m.jsx)(x.a,{}),"Bittellar"]})}),Object(m.jsx)(h.a,{open:n,onClick:c}),Object(m.jsx)(y,{open:n,children:Object(m.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(m.jsx)(f.a,{as:"a",display:"block",href:"https://".concat("bittellar.co"),children:"Home"}),Object(m.jsx)(f.a,{display:"block",to:"/account/login",children:"Login"}),Object(m.jsx)(f.a,{display:"block",to:"/account/register",children:"Register"}),Object(m.jsx)(f.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};t.a=function(e){var t=e.children;return Object(m.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(m.jsx)(w,{}),Object(m.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:t})]})}},398:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(0),c=n(2),r=n(33),i=n(100),o=n.n(i),s=n(101),l=n(105),p=n(109),d=n(96),u=n(97),b=n(106),j=n(116),x=n(98),h=n(107),f=n(211),m=n(121),O=n(110),g=n(104),v=n(216),y=n(31),w=n(217),k=n(1),D=function(){var e,t,n,a,r,i,D,S,C,I,_,P,F,R=Object(c.g)(),z=Object(g.a)(),U=z.profile,V=z.mutate,N=Object(l.c)({defaultValues:{firstName:U.firstName,lastName:U.lastName,profile:{phone:"",gender:"",dob:new Date,city:"",zipCode:"",country:(null===(e=w.a.find((function(e){return"US"===e.code})))||void 0===e?void 0:e.name)||""}},resolver:Object(p.yupResolver)(v.a)}),L=N.register,M=N.control,E=N.handleSubmit,Y=N.errors,A=N.setError,B=N.formState.isSubmitting,T=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new Date(t.profile.dob),a=new Date,c=new Date(a.setFullYear(a.getFullYear()-10)),n<c){e.next=6;break}return e.abrupt("return",A("profile.dob",{type:"server",message:"Select valid Date"}));case 6:return e.prev=6,e.next=9,y.a.put("/profile",t);case 9:return e.next=11,V();case 11:R.push("/dashboard"),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return U.profile?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"KYC Verification"}),Object(k.jsx)(u.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly complete identification process to complete verification"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:E(T),children:[Object(k.jsx)("input",{hidden:!0,ref:L,name:"firstName"}),Object(k.jsx)("input",{hidden:!0,ref:L,name:"lastName"}),Object(k.jsx)(j.a,{radius:"6px",p:"12px",label:"Country",ref:L,name:"profile.country",error:null===(t=Y.profile)||void 0===t||null===(n=t.country)||void 0===n?void 0:n.message,children:w.a.map((function(e){return Object(k.jsx)("option",{value:e.name,children:e.name},e.code)}))}),Object(k.jsx)(b.a,{radius:"6px",p:"12px",label:"zip Code",placeholder:"Zip Code",ref:L,name:"profile.zipCode",error:null===(a=Y.profile)||void 0===a||null===(r=a.zipCode)||void 0===r?void 0:r.message}),Object(k.jsx)(b.a,{radius:"6px",p:"12px",label:"City",placeholder:"City",ref:L,name:"profile.city",error:null===(i=Y.profile)||void 0===i||null===(D=i.city)||void 0===D?void 0:D.message}),Object(k.jsx)(f.a,{radius:"6px",p:"12px",type:"tel",label:"Phone Number",placeholder:"Phone Number",ref:L,name:"profile.phone",error:null===(S=Y.profile)||void 0===S||null===(C=S.phone)||void 0===C?void 0:C.message}),Object(k.jsxs)(j.a,{radius:"6px",p:"12px",label:"Gender",ref:L,name:"profile.gender",error:null===(I=Y.profile)||void 0===I||null===(_=I.gender)||void 0===_?void 0:_.message,children:[Object(k.jsx)("option",{value:"male",children:"Male"}),Object(k.jsx)("option",{value:"female",children:"Female"}),Object(k.jsx)("option",{value:"other",children:"Other"})]}),Object(k.jsx)(m.a,{radius:"6px",p:"12px",label:"Date of Birth",hint:"Pick Date",placeholder:"Date of Birth",control:M,name:"profile.dob",error:null===(P=Y.profile)||void 0===P||null===(F=P.dob)||void 0===F?void 0:F.message}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:B,children:B?Object(k.jsx)(h.a,{}):"Submit"})]})]})},S=n(32),C=n(103),I=function(){var e=Object(g.a)().profile,t=Object(a.useState)(!1),n=Object(S.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(!1),p=Object(S.a)(l,2),b=p[0],j=p[1],f=Object(a.useState)(!1),m=Object(S.a)(f,2),v=m[0],w=m[1],D=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,y.a.post("/profile/request-email-verification");case 4:i(!0),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e.meta.isEmailVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Verify Your Email"}),Object(k.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:r?"We just sent you a verification link. Check your email and click on the link to verify your account":"Please check your email to verify your account"})]}),Object(k.jsxs)(d.a,{m:"24px 0 0",wide:!0,children:[!r&&Object(k.jsxs)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,children:["Didn't get a verification email?",Object(k.jsx)(C.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:!0,underline:!0,onClick:function(){return w(!0)},children:"Click Here"})]}),v&&Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"12px 0 12px",full:!0,bold:!0,disabled:r,onClick:D,children:b?Object(k.jsx)(h.a,{}):r?"Please check your email":"Request Verification"})]})]})},_=n(8),P={loading:!0,valid:!1},F=function(e,t){switch(t.type){case"load":return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},R=function(){var e=Object(c.i)().token,t=Object(c.g)(),n=Object(g.a)().mutate,i=Object(a.useReducer)(F,P),l=Object(S.a)(i,2),p=l[0],b=p.loading,j=p.valid,h=l[1];Object(a.useEffect)((function(){e||h({type:"error"}),function(){var t=Object(s.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("/auth/verify-email",{emailToken:e});case 3:n=t.sent,a=n.data,h({type:"success",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h({type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var f=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t.push("/dashboard");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?Object(k.jsx)(r.a,{}):j?Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(k.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your email has been verified"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"24px 0 12px",full:!0,bold:!0,onClick:f,children:"Log In"})})]}):Object(k.jsx)(O.a,{children:Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(k.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},z=function(){var e=Object(g.a)(),t=e.profile,n=e.logout;return t.meta.isActive?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Account Disabled"}),Object(k.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your account has been deactivated"})]}),Object(k.jsxs)(d.a,{wide:!0,children:[Object(k.jsx)(u.a,{font:"12px",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"If you think this is a mistake kindly send us a message"}),Object(k.jsx)(x.a,{type:"submit",bg:"secondary",color:"black",radius:"2px",m:"12px 0",full:!0,bold:!0,onClick:n,children:"Log Out"})]})]})},U=function(e){var t=e.title,n=e.desc;return Object(k.jsxs)(d.a,{p:"12px 16px",m:"0 0 12px 0",bg:"bg",radius:"8px",wide:!0,children:[Object(k.jsx)(u.a,{p:"0",m:"0 0 8px 0",opacity:"0.8",font:"12px",weight:"500",children:t}),Object(k.jsx)(u.a,{p:"0",weight:"400",opacity:"0.9",font:"10px",multiline:!0,children:n})]})},V=function(){return Object(g.a)().profile.isDocumentVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Submit Documents"}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"We need to verify your information. Please submit the following documents"})]}),Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(U,{title:"1.) Photo of ID (front side)",desc:"International Passport, Driver's License or National ID"}),Object(k.jsx)(U,{title:"2.) Photo of ID (back side)",desc:"Same document as above"}),Object(k.jsx)(U,{title:"3.) Take a selfie holding your ID",desc:"A photo clearly showing your face and your ID"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:"true",bold:"true",to:"/confirmation/documents/1",children:"Start Verification"})})]})},N=n(36),L=n.n(N),M=n(134),E=n(112),Y=n(135),A=function(){var e=Object(c.g)(),t=Object(g.a)().profile,n=Object(E.a)(),r=n.processing,i=n.start,l=n.complete,p=n.fail,b=Object(a.useState)(),j=Object(S.a)(b,2),f=j[0],m=j[1],v=Object(a.useState)(null),w=Object(S.a)(v,2),D=w[0],C=w[1],I=function(){var t=Object(s.a)(o.a.mark((function t(n){var a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=Object(Y.a)(f),!(atob(a.split("base64,")[1]).length/Math.pow(1024,2)>10)){t.next=5;break}return t.abrupt("return",C("File too large, max file size is 10 MB"));case 5:return t.prev=5,i(),t.next=9,L.a.post("https://api.cloudinary.com/v1_1/bitmax/image/upload",{file:a,upload_preset:"bitbank"});case 9:return c=t.sent,r=c.data,t.next=13,y.a.post("/profile/document/1",{url:r.secure_url,cloudId:r.public_id});case 13:l({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/2"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),p(t.t0.response.message);case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}();return t.isDocumentVerified?Object(k.jsx)(c.a,{to:"/dashboard"}):Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 1"}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of your ID Document (International Passport, Driver's License or National ID)"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:I,children:[Object(k.jsx)(M.a,{image:f,action:function(e){var t=e.target.files[0];if(C(null),t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return m(n.result)}}},hint:"Select Document"}),D&&Object(k.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:D}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!f,children:r?Object(k.jsx)(h.a,{}):f?"Upload Photo":"Choose an image"})]})]})},B=function(){var e=Object(c.g)(),t=Object(E.a)(),n=t.processing,r=t.start,i=t.complete,l=t.fail,p=Object(a.useState)(),b=Object(S.a)(p,2),j=b[0],f=b[1],m=Object(a.useState)(null),g=Object(S.a)(m,2),v=g[0],w=g[1],D=function(){var t=Object(s.a)(o.a.mark((function t(n){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),w(!1),a=Object(Y.a)(j),!(atob(a.split("base64,")[1]).length/Math.pow(1024,2)>10)){t.next=6;break}return t.abrupt("return",w("File too large, max file size is 10 MB"));case 6:return t.prev=6,r(),t.next=10,L.a.post("https://api.cloudinary.com/v1_1/bitmax/image/upload",{file:a,upload_preset:"bitbank"});case 10:return c=t.sent,s=c.data,t.next=14,y.a.post("/profile/document/2",{url:s.secure_url,cloudId:s.public_id});case 14:i({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/3"),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),w(!0),l(t.t0.response.message);case 22:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 2"}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of the back of your ID document"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:D,children:[Object(k.jsx)(M.a,{image:j,action:function(e){var t=e.target.files[0];if(w(null),t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return f(n.result)}}},hint:"Select Document"}),v&&Object(k.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:v}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!j,children:n?Object(k.jsx)(h.a,{}):j?"Upload Photo":"Choose an image"})]})]})},T=function(){var e=Object(c.g)(),t=Object(E.a)(),n=t.processing,r=t.start,i=t.complete,l=t.fail,p=Object(a.useState)(),b=Object(S.a)(p,2),j=b[0],f=b[1],m=Object(a.useState)(!1),g=Object(S.a)(m,2),v=g[0],w=g[1],D=function(){var t=Object(s.a)(o.a.mark((function t(n){var a,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),w(!1),a=Object(Y.a)(j),!(atob(a.split("base64,")[1]).length/Math.pow(1024,2)>10)){t.next=6;break}return t.abrupt("return",w("File too large, max file size is 10 MB"));case 6:return t.prev=6,r(),t.next=10,L.a.post("https://api.cloudinary.com/v1_1/bitmax/image/upload",{file:a,upload_preset:"bitbank"});case 10:return c=t.sent,s=c.data,t.next=14,y.a.post("/profile/document/3",{url:s.secure_url,cloudId:s.public_id});case 14:i({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/completed"),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(6),w(!0),l(t.t0.response.message),console.log(t.t0,t.t0.response);case 23:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 3"}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Take a photo of you holding the ID you just submitted. Ensure the front of the ID is visible"})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:D,children:[Object(k.jsx)(M.a,{image:j,action:function(e){var t=e.target.files[0];if(w(null),t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return f(n.result)}}},hint:"Select Document"}),v&&Object(k.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:v}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!j,children:n?Object(k.jsx)(h.a,{}):j?"Upload Photo":"Choose an image"})]})]})},q=function(){var e=Object(c.g)(),t=Object(g.a)().profile,n=Object(E.a)(),r=n.processing,i=n.success,l=n.response,p=n.start,b=n.complete,j=n.fail,f=Object(a.useState)(),m=Object(S.a)(f,2),v=m[0],w=m[1],D=Object(a.useState)(""),C=Object(S.a)(D,2),I=C[0],_=C[1],P=function(){var t=Object(s.a)(o.a.mark((function t(n){var a,c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),_(""),a=Object(Y.a)(v),!(atob(a.split("base64,")[1]).length/Math.pow(1024,2)>10)){t.next=6;break}return t.abrupt("return",_("File too large, max file size is 10 MB"));case 6:return t.prev=6,p(),t.next=10,L.a.post("https://api.cloudinary.com/v1_1/bitmax/image/upload",{file:a,upload_preset:"bitbank"});case 10:return c=t.sent,r=c.data,t.next=14,y.a.post("/profile/document/upload",{url:r.secure_url,cloudId:r.public_id});case 14:b({mssg:"Document Submitted Successfully"}),e.push({pathname:"/confirmation/documents/completed",state:{title:"Upload Successful",message:"Thank you. Your documents has been received and is currently being processed."}}),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),j(t.t0.response.message),console.log(t.t0,t.t0.response);case 22:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}();return t.requestedDocument?Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsxs)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:["Upload ",t.requestedDocument]}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:t.requestedDocumentDescription})]}),Object(k.jsxs)(d.a,{as:"form",wide:!0,onSubmit:P,children:[Object(k.jsx)(M.a,{image:v,action:function(e){var t=e.target.files[0];if(_(""),t){var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return w(n.result)}}},hint:"Select Document"}),!r&&!i&&!("Processing..."===l)&&Object(k.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:l}),I&&Object(k.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:I}),Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!v,children:r?Object(k.jsx)(h.a,{}):v?"Upload Document":"Choose an image"})]})]}):Object(k.jsx)(c.a,{to:"/dashboard"})},K=function(){var e=Object(c.h)().state,t=Object(g.a)().mutate;return Object(a.useEffect)((function(){t()}),[t]),Object(k.jsxs)(O.a,{children:[Object(k.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(k.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:(null===e||void 0===e?void 0:e.title)||"Verification Completed"}),Object(k.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:(null===e||void 0===e?void 0:e.message)||"Thank you. Your documents are being processed and you can already access your account"})]}),Object(k.jsx)(d.a,{wide:!0,children:Object(k.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",full:"true",bold:"true",to:"/dashboard",children:"Go To Dashboard"})})]})},H=function(e){var t=e.children,n=Object(c.h)(),a=Object(g.a)(),i=a.profile;if(a.loading)return Object(k.jsx)(r.a,{});var o=n.pathname.split("/").slice(0,3).join("/"),s=["/confirmation/verify-email"].includes(o);return i||s?t:Object(k.jsx)(c.a,{to:"/account/login"})};function W(){var e=Object(c.j)().path;return Object(k.jsx)(H,{children:Object(k.jsxs)(c.d,{children:[Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/kyc"),children:Object(k.jsx)(D,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/verify-email/:token"),children:Object(k.jsx)(R,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/email-verification"),children:Object(k.jsx)(I,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/lock"),children:Object(k.jsx)(z,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/start"),children:Object(k.jsx)(V,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/1"),children:Object(k.jsx)(A,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/2"),children:Object(k.jsx)(B,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/3"),children:Object(k.jsx)(T,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/upload"),children:Object(k.jsx)(q,{})}),Object(k.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/completed"),children:Object(k.jsx)(K,{})}),Object(k.jsx)(c.b,{children:Object(k.jsx)(c.a,{to:"/"})})]})})}}}]);
//# sourceMappingURL=9.a0973b16.chunk.js.map