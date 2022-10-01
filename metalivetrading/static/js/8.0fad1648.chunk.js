(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[8],{108:function(e,t,n){"use strict";var c,a,r,i,o,s=n(0),l=n(94),p=n(31),d=n(13),u=n(19),b=n(10),j=n(100),x=n(121),h=n(95),f=n(1),m=b.d.aside(c||(c=Object(d.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),O=Object(b.d)(j.e)(a||(a=Object(d.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),g=b.d.h3(r||(r=Object(d.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),v=b.d.div(i||(i=Object(d.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.open&&Object(b.c)(o||(o=Object(d.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),y=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],a=function(){return c(!n)};return Object(f.jsxs)(m,{children:[Object(f.jsx)(O,{onClick:a}),Object(f.jsx)(u.b,{to:"/dashboard",children:Object(f.jsxs)(g,{children:[Object(f.jsx)("img",{src:"/assets/icon/favicon.png",alt:"logo"}),"Ultra Booster System"]})}),Object(f.jsx)(x.a,{open:n,onClick:a}),Object(f.jsx)(v,{open:n,children:Object(f.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(f.jsx)(h.a,{as:"a",display:"block",href:"https://".concat("ultraboostersystem.com"),children:"Home"}),Object(f.jsx)(h.a,{display:"block",to:"/account/login",children:"Login"}),Object(f.jsx)(h.a,{display:"block",to:"/account/register",children:"Register"}),Object(f.jsx)(h.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};t.a=function(e){var t=e.children;return Object(f.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(f.jsx)(y,{}),Object(f.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:t})]})}},356:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var c=n(0),a=n(2),r=n(32),i=n(98),o=n.n(i),s=n(99),l=n(103),p=n(106),d=n(94),u=n(95),b=n(105),j=n(110),x=n(96),h=n(104),f=n(108),m=n(102),O=n(182),g=n(30),v=n(183),y=n(1),w=function(){var e,t,n,c,r,i,w,k,S,D,C,I,N,P=Object(a.g)(),U=Object(m.a)(),R=U.profile,V=U.mutate,z=Object(l.c)({defaultValues:{firstName:R.firstName,lastName:R.lastName,profile:{phone:"",gender:"",city:"",zipCode:"",country:(null===(e=v.a.find((function(e){return"US"===e.code})))||void 0===e?void 0:e.name)||""}},resolver:Object(p.yupResolver)(O.a)}),L=z.register,E=z.handleSubmit,F=z.errors,A=z.watch,T=z.formState,Y=A().profile.country,q=T.isSubmitting,_=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.put("/profile",t);case 3:return e.next=5,V();case 5:P.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return R.profile?Object(y.jsx)(a.a,{to:"/dashboard"}):Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"KYC Verification"}),Object(y.jsx)(u.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly complete identification process to complete verification"})]}),Object(y.jsxs)(d.a,{as:"form",wide:!0,onSubmit:E(_),children:[Object(y.jsx)("input",{hidden:!0,ref:L,name:"firstName"}),Object(y.jsx)("input",{hidden:!0,ref:L,name:"lastName"}),Object(y.jsx)(j.a,{radius:"6px",p:"12px",label:"Country",ref:L,name:"profile.country",error:null===(t=F.profile)||void 0===t||null===(n=t.country)||void 0===n?void 0:n.message,children:v.a.map((function(e){return Object(y.jsx)("option",{value:e.name,children:e.name},e.code)}))}),Object(y.jsx)(b.a,{radius:"6px",p:"12px",label:"Zip Code",placeholder:"Zip Code",ref:L,name:"profile.zipCode",error:null===(c=F.profile)||void 0===c||null===(r=c.zipCode)||void 0===r?void 0:r.message}),Object(y.jsx)(b.a,{radius:"6px",p:"12px",label:"City",placeholder:"City",ref:L,name:"profile.city",error:null===(i=F.profile)||void 0===i||null===(w=i.city)||void 0===w?void 0:w.message}),"United States"===Y&&Object(y.jsx)(b.a,{radius:"6px",p:"12px",label:"Social Security Number",placeholder:"SSN",ref:L,name:"profile.ssn",error:null===(k=F.profile)||void 0===k||null===(S=k.ssn)||void 0===S?void 0:S.message}),Object(y.jsx)(b.a,{radius:"6px",p:"12px",type:"tel",label:"Phone Number",placeholder:"Phone Number",ref:L,name:"profile.phone",error:null===(D=F.profile)||void 0===D||null===(C=D.phone)||void 0===C?void 0:C.message}),Object(y.jsxs)(j.a,{radius:"6px",p:"12px",label:"Gender",ref:L,name:"profile.gender",error:null===(I=F.profile)||void 0===I||null===(N=I.gender)||void 0===N?void 0:N.message,children:[Object(y.jsx)("option",{value:"",children:"Select Gender"}),Object(y.jsx)("option",{value:"male",children:"Male"}),Object(y.jsx)("option",{value:"female",children:"Female"}),Object(y.jsx)("option",{value:"other",children:"Other"})]}),Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:q,children:q?Object(y.jsx)(h.a,{}):"Submit"})]})]})},k=n(31),S=n(101),D=function(){var e=Object(m.a)().profile,t=Object(c.useState)(!1),n=Object(k.a)(t,2),r=n[0],i=n[1],l=Object(c.useState)(!1),p=Object(k.a)(l,2),b=p[0],j=p[1],O=Object(c.useState)(!1),v=Object(k.a)(O,2),w=v[0],D=v[1],C=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,g.a.post("/profile/request-email-verification");case 4:i(!0),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e.meta.isEmailVerified?Object(y.jsx)(a.a,{to:"/dashboard"}):Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Verify Your Email"}),Object(y.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:r?"We just sent you a verification link. Check your email and click on the link to verify your account":"Please check your email to verify your account"})]}),Object(y.jsxs)(d.a,{m:"24px 0 0",wide:!0,children:[!r&&Object(y.jsxs)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,children:["Didn't get a verification email?",Object(y.jsx)(S.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:!0,underline:!0,onClick:function(){return D(!0)},children:"Click Here"})]}),w&&Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"12px 0 12px",full:!0,bold:!0,disabled:r,onClick:C,children:b?Object(y.jsx)(h.a,{}):r?"Please check your email":"Request Verification"})]})]})},C=n(8),I=n(38),N=n.n(I),P={loading:!0,valid:!1},U=function(e,t){switch(t.type){case"load":return Object(C.a)(Object(C.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},R=function(){var e=Object(a.i)().token,t=Object(a.g)(),n=Object(m.a)().mutate,i=Object(c.useReducer)(U,P),l=Object(k.a)(i,2),p=l[0],b=p.loading,j=p.valid,h=l[1];Object(c.useEffect)((function(){e||h({type:"error"}),function(){var t=Object(s.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/auth/verify-email",{emailToken:e});case 3:n=t.sent,c=n.data,h({type:"success",payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h({type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var O=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t.push("/dashboard");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?Object(y.jsx)(r.a,{}):j?Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(y.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your email has been verified"})]}),Object(y.jsx)(d.a,{wide:!0,children:Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"24px 0 12px",full:!0,bold:!0,onClick:O,children:"Log In"})})]}):Object(y.jsx)(f.a,{children:Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(y.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},V=function(){var e=Object(m.a)(),t=e.profile,n=e.logout;return t.meta.isActive?Object(y.jsx)(a.a,{to:"/dashboard"}):Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Account Disabled"}),Object(y.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your account has been deactivated"})]}),Object(y.jsxs)(d.a,{wide:!0,children:[Object(y.jsx)(u.a,{font:"12px",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"If you think this is a mistake kindly send us a message"}),Object(y.jsx)(x.a,{type:"submit",bg:"secondary",radius:"2px",m:"12px 0",full:!0,bold:!0,onClick:n,children:"Log Out"})]})]})},z=function(e){var t=e.title,n=e.desc;return Object(y.jsxs)(d.a,{p:"12px 16px",m:"0 0 12px 0",bg:"bg",radius:"8px",wide:!0,children:[Object(y.jsx)(u.a,{p:"0",m:"0 0 8px 0",opacity:"0.8",font:"12px",weight:"500",children:t}),Object(y.jsx)(u.a,{p:"0",weight:"400",opacity:"0.9",font:"10px",multiline:!0,children:n})]})},L=function(){return Object(m.a)().profile.isDocumentVerified?Object(y.jsx)(a.a,{to:"/dashboard"}):Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Submit Documents"}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"We need to verify your information. Please submit the following documents"})]}),Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(z,{title:"1.) Photo of ID (front side)",desc:"International Passport, Driver's License or National ID"}),Object(y.jsx)(z,{title:"2.) Photo of ID (back side)",desc:"Same document as above"}),Object(y.jsx)(z,{title:"3.) Take a selfie holding your ID",desc:"A photo clearly showing your face and your ID"})]}),Object(y.jsx)(d.a,{wide:!0,children:Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:"true",bold:"true",to:"/confirmation/documents/1",children:"Start Verification"})})]})},E=n(135),F=n(111),A=n(136),T=function(){var e=Object(a.g)(),t=Object(m.a)().profile,n=Object(F.a)(),r=n.processing,i=n.response,l=n.start,p=n.complete,b=n.fail,j=Object(c.useState)(),O=Object(k.a)(j,2),v=O[0],w=O[1],S=Object(c.useState)(!1),D=Object(k.a)(S,2),C=D[0],I=D[1],N=function(){var t=Object(s.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I(!1),c=Object(A.a)(v),t.prev=3,l(),t.next=7,g.a.post("/profile/document/1",{document:c});case 7:p({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/2"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),I(!0),b(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return t.isDocumentVerified?Object(y.jsx)(a.a,{to:"/dashboard"}):Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 1"}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of your ID Document (International Passport, Driver's License or National ID)"})]}),Object(y.jsxs)(d.a,{as:"form",wide:!0,onSubmit:N,children:[Object(y.jsx)(E.a,{image:v,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return w(n.result)}},hint:"Select Document"}),C&&r&&Object(y.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:i}),Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!v,children:r?Object(y.jsx)(h.a,{}):v?"Upload Photo":"Choose an image"})]})]})},Y=function(){var e=Object(a.g)(),t=Object(F.a)(),n=t.processing,r=t.response,i=t.start,l=t.complete,p=t.fail,b=Object(c.useState)(),j=Object(k.a)(b,2),m=j[0],O=j[1],v=Object(c.useState)(!1),w=Object(k.a)(v,2),S=w[0],D=w[1],C=function(){var t=Object(s.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),D(!1),c=Object(A.a)(m),t.prev=3,i(),t.next=7,g.a.post("/profile/document/2",{document:c});case 7:l({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/3"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),D(!0),p(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 2"}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of the back of your ID document"})]}),Object(y.jsxs)(d.a,{as:"form",wide:!0,onSubmit:C,children:[Object(y.jsx)(E.a,{image:m,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return O(n.result)}},hint:"Select Document"}),S&&Object(y.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:r}),Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!m,children:n?Object(y.jsx)(h.a,{}):m?"Upload Photo":"Choose an image"})]})]})},q=function(){var e=Object(a.g)(),t=Object(F.a)(),n=t.processing,r=t.response,i=t.start,l=t.complete,p=t.fail,b=Object(c.useState)(),j=Object(k.a)(b,2),m=j[0],O=j[1],v=Object(c.useState)(!1),w=Object(k.a)(v,2),S=w[0],D=w[1],C=function(){var t=Object(s.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),D(!1),c=Object(A.a)(m),t.prev=3,i(),t.next=7,g.a.post("/profile/document/3",{document:c});case 7:l({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/completed"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(3),D(!0),p(t.t0.response.message),console.log(t.t0,t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 3"}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Take a photo of you holding the ID you just submitted. Ensure the front of the ID is visible"})]}),Object(y.jsxs)(d.a,{as:"form",wide:!0,onSubmit:C,children:[Object(y.jsx)(E.a,{image:m,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return O(n.result)}},hint:"Select Document"}),S&&Object(y.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:r}),Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!m,children:n?Object(y.jsx)(h.a,{}):m?"Upload Photo":"Choose an image"})]})]})},_=function(){var e=Object(a.g)(),t=Object(m.a)().profile,n=Object(F.a)(),r=n.processing,i=n.start,l=n.complete,p=Object(c.useRef)(),b=Object(c.useState)(),j=Object(k.a)(b,2),O=j[0],v=j[1],w=Object(c.useState)(null),S=Object(k.a)(w,2),D=S[0],C=S[1],I=function(){var t=Object(s.a)(o.a.mark((function t(){var n,c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",O),n.append("upload_preset","flashtradefx_public"),t.prev=3,i(),t.next=7,N.a.post("https://api.cloudinary.com/v1_1/flashtradefx/image/upload",n);case 7:return c=t.sent,a=c.data,t.next=11,g.a.post("/profile/document/upload",{url:a.secure_url,cloudId:a.public_id});case 11:l({mssg:"Document Submitted Successfully"}),e.push({pathname:"/confirmation/documents/completed",state:{title:"Upload Successful",message:"Thank you. Your documents has been received and is currently being processed."}}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),C("Something went wrong!"),l();case 19:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}}();return t.requestedDocument?Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsxs)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:["Upload ",t.requestedDocument]}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:t.requestedDocumentDescription})]}),Object(y.jsxs)(d.a,{wide:!0,children:[Object(y.jsx)("input",{ref:p,type:"file",onChange:function(e){var t=e.target.files[0];if(C(null),v(null),t){if(t.size/Math.pow(1024,2)>10)return C("File too large, max file size is 10 MB");v(t)}},hidden:!0}),Object(y.jsxs)(d.a,{p:"48px 0",flex:"space-between",wide:!0,children:[Object(y.jsx)(u.a,{children:(null===O||void 0===O?void 0:O.name)||"No file chosen"}),Object(y.jsx)(x.a,{p:"6px",bg:"primary",onClick:function(){return p.current.click()},children:O?"Choose another file":"Choose file"})]}),D&&Object(y.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:D}),Object(y.jsx)(x.a,{bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!O,onClick:I,children:r?Object(y.jsx)(h.a,{}):O?"Upload Document":"Choose a document"})]})]}):Object(y.jsx)(a.a,{to:"/dashboard"})},K=function(){var e=Object(a.h)().state,t=Object(m.a)().mutate;return Object(c.useEffect)((function(){t()}),[t]),Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(y.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:(null===e||void 0===e?void 0:e.title)||"Verification Completed"}),Object(y.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:(null===e||void 0===e?void 0:e.message)||"Thank you. Your documents are being processed and you can already access your account"})]}),Object(y.jsx)(d.a,{wide:!0,children:Object(y.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",full:"true",bold:"true",to:"/dashboard",children:"Go To Dashboard"})})]})},G=function(e){var t=e.children,n=Object(a.h)(),c=Object(m.a)(),i=c.profile;if(c.loading)return Object(y.jsx)(r.a,{});var o=n.pathname.split("/").slice(0,3).join("/"),s=["/confirmation/verify-email"].includes(o);return i||s?t:Object(y.jsx)(a.a,{to:"/account/login"})};function H(){var e=Object(a.j)().path;return Object(y.jsx)(G,{children:Object(y.jsxs)(a.d,{children:[Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/kyc"),children:Object(y.jsx)(w,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/verify-email/:token"),children:Object(y.jsx)(R,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/email-verification"),children:Object(y.jsx)(D,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/lock"),children:Object(y.jsx)(V,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/start"),children:Object(y.jsx)(L,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/1"),children:Object(y.jsx)(T,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/2"),children:Object(y.jsx)(Y,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/3"),children:Object(y.jsx)(q,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/upload"),children:Object(y.jsx)(_,{})}),Object(y.jsx)(a.b,{exact:!0,path:"".concat(e,"/documents/completed"),children:Object(y.jsx)(K,{})}),Object(y.jsx)(a.b,{children:Object(y.jsx)(a.a,{to:"/"})})]})})}}}]);
//# sourceMappingURL=8.0fad1648.chunk.js.map