(this.webpackJsonplambda=this.webpackJsonplambda||[]).push([[9],{109:function(e,t,n){"use strict";var a,c,r,i,o,s=n(0),l=n(94),p=n(31),d=n(13),u=n(19),b=n(10),j=n(100),x=n(128),h=n(123),f=n(95),m=n(1),O=b.d.aside(a||(a=Object(d.a)(["\n  grid-area: navbar;\n  height: 48px;\n  width: 100%;\n\n  margin: 0;\n  padding: 0 80px;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 2;\n\n  background-color: ",";\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* display: none; */\n\n  @media screen and (max-width: ",") {\n    padding: 0 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.theme.breakpoints.xl})),g=Object(b.d)(j.e)(c||(c=Object(d.a)(["\n  font-size: 24px;\n  width: 24px;\n"]))),v=b.d.h3(r||(r=Object(d.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: 20px;\n    display: inline-block;\n    margin-right: 8px;\n  }\n"]))),y=b.d.div(i||(i=Object(d.a)(["\n  position: fixed;\n  top: calc(48px + 12px);\n  left: 80px;\n\n  width: calc(100% - 24px);\n  max-width: 360px;\n  max-height: 0;\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  background-color: ",";\n  border-radius: 12px;\n\n  ","\n\n  @media screen and (max-width: ",") {\n    left: 12px;\n  }\n"])),(function(e){var t=e.bg,n=e.theme;return n.colors[t]||t||n.colors.bgContrast}),(function(e){return e.open&&Object(b.c)(o||(o=Object(d.a)(["\n      max-height: 500px;\n      transition: max-height 0.25s ease-in;\n    "])))}),(function(e){return e.theme.breakpoints.xl})),w=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)};return Object(m.jsxs)(O,{children:[Object(m.jsx)(g,{onClick:c}),Object(m.jsx)(u.b,{to:"/dashboard",children:Object(m.jsxs)(v,{children:[Object(m.jsx)(x.a,{}),"FX Trade Finance"]})}),Object(m.jsx)(h.a,{open:n,onClick:c}),Object(m.jsx)(y,{open:n,children:Object(m.jsxs)(l.a,{p:"12px",wide:!0,children:[Object(m.jsx)(f.a,{as:"a",display:"block",href:"https://".concat("fxtradefinance.com"),children:"Home"}),Object(m.jsx)(f.a,{display:"block",to:"/account/login",children:"Login"}),Object(m.jsx)(f.a,{display:"block",to:"/account/register",children:"Register"}),Object(m.jsx)(f.a,{display:"block",to:"/account/forgot-password",children:"Forgot Password"})]})})]})};t.a=function(e){var t=e.children;return Object(m.jsxs)(l.a,{flex:"center",bg:"bg",m:"48px 0 0 0",h:"calc(100% - 48px)",minH:"calc(100vh - 48px)",children:[Object(m.jsx)(w,{}),Object(m.jsx)(l.a,{p:"16px",m:"64px 0",bg:"bgContrast",radius:"6px",maxW:"calc(100vw - 28px)",w:"400px",h:"auto",children:t})]})}},360:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var a=n(0),c=n(2),r=n(32),i=n(98),o=n.n(i),s=n(99),l=n(103),p=n(106),d=n(94),u=n(95),b=n(105),j=n(113),x=n(96),h=n(104),f=n(117),m=n(109),O=n(102),g=n(189),v=n(30),y=n(190),w=n(1),k=function(){var e,t,n,a,r,i,k,S,D,C,I,P,N,V,F,R=Object(c.g)(),U=Object(O.a)(),z=U.profile,E=U.mutate,L=Object(l.c)({defaultValues:{firstName:z.firstName,lastName:z.lastName,profile:{phone:"",gender:"",dob:new Date,city:"",zipCode:"",country:(null===(e=y.a.find((function(e){return"US"===e.code})))||void 0===e?void 0:e.name)||""}},resolver:Object(p.yupResolver)(g.a)}),Y=L.register,T=L.control,A=L.handleSubmit,q=L.errors,_=L.watch,K=L.setError,B=L.formState,G=_().profile.country,H=B.isSubmitting,M=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new Date(t.profile.dob),a=new Date,c=new Date(a.setFullYear(a.getFullYear()-10)),n<c){e.next=6;break}return e.abrupt("return",K("profile.dob",{type:"server",message:"Select Valid Date"}));case 6:return e.prev=6,e.next=9,v.a.put("/profile",t);case 9:return e.next=11,E();case 11:R.push("/dashboard"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return z.profile?Object(w.jsx)(c.a,{to:"/dashboard"}):Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"KYC Verification"}),Object(w.jsx)(u.a,{font:"12px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly complete identification process to complete verification"})]}),Object(w.jsxs)(d.a,{as:"form",wide:!0,onSubmit:A(M),children:[Object(w.jsx)("input",{hidden:!0,ref:Y,name:"firstName"}),Object(w.jsx)("input",{hidden:!0,ref:Y,name:"lastName"}),Object(w.jsx)(j.a,{radius:"6px",p:"12px",label:"Country",ref:Y,name:"profile.country",error:null===(t=q.profile)||void 0===t||null===(n=t.country)||void 0===n?void 0:n.message,children:y.a.map((function(e){return Object(w.jsx)("option",{value:e.name,children:e.name},e.code)}))}),Object(w.jsx)(b.a,{radius:"6px",p:"12px",label:"Zip Code",placeholder:"Zip Code",ref:Y,name:"profile.zipCode",error:null===(a=q.profile)||void 0===a||null===(r=a.zipCode)||void 0===r?void 0:r.message}),Object(w.jsx)(b.a,{radius:"6px",p:"12px",label:"City",placeholder:"City",ref:Y,name:"profile.city",error:null===(i=q.profile)||void 0===i||null===(k=i.city)||void 0===k?void 0:k.message}),"United States"===G&&Object(w.jsx)(b.a,{radius:"6px",p:"12px",label:"Social Security Number",placeholder:"SSN",ref:Y,name:"profile.ssn",error:null===(S=q.profile)||void 0===S||null===(D=S.ssn)||void 0===D?void 0:D.message}),Object(w.jsx)(b.a,{radius:"6px",p:"12px",type:"tel",label:"Phone Number",placeholder:"Phone Number",ref:Y,name:"profile.phone",error:null===(C=q.profile)||void 0===C||null===(I=C.phone)||void 0===I?void 0:I.message}),Object(w.jsxs)(j.a,{radius:"6px",p:"12px",label:"Gender",ref:Y,name:"profile.gender",error:null===(P=q.profile)||void 0===P||null===(N=P.gender)||void 0===N?void 0:N.message,children:[Object(w.jsx)("option",{value:"",children:"Select Gender"}),Object(w.jsx)("option",{value:"male",children:"Male"}),Object(w.jsx)("option",{value:"female",children:"Female"}),Object(w.jsx)("option",{value:"other",children:"Other"})]}),Object(w.jsx)(f.a,{radius:"6px",p:"12px",label:"Date of Birth",hint:"Pick Date",placeholder:"Date of Birth",control:T,name:"profile.dob",error:null===(V=q.profile)||void 0===V||null===(F=V.dob)||void 0===F?void 0:F.message}),Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",p:"14px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:H,children:H?Object(w.jsx)(h.a,{}):"Submit"})]})]})},S=n(31),D=n(101),C=function(){var e=Object(O.a)().profile,t=Object(a.useState)(!1),n=Object(S.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(!1),p=Object(S.a)(l,2),b=p[0],j=p[1],f=Object(a.useState)(!1),g=Object(S.a)(f,2),y=g[0],k=g[1],C=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,v.a.post("/profile/request-email-verification");case 4:i(!0),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e.meta.isEmailVerified?Object(w.jsx)(c.a,{to:"/dashboard"}):Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Verify Your Email"}),Object(w.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:r?"We just sent you a verification link. Check your email and click on the link to verify your account":"Please check your email to verify your account"})]}),Object(w.jsxs)(d.a,{m:"24px 0 0",wide:!0,children:[!r&&Object(w.jsxs)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,children:["Didn't get a verification email?",Object(w.jsx)(D.a,{font:"inherit",color:"primary",p:"0",m:"0 0 0 4px",bold:!0,underline:!0,onClick:function(){return k(!0)},children:"Click Here"})]}),y&&Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"12px 0 12px",full:!0,bold:!0,disabled:r,onClick:C,children:b?Object(w.jsx)(h.a,{}):r?"Please check your email":"Request Verification"})]})]})},I=n(8),P=n(38),N=n.n(P),V={loading:!0,valid:!1},F=function(e,t){switch(t.type){case"load":return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case"success":return{loading:!1,valid:!0};case"error":return{loading:!1,valid:!1}}},R=function(){var e=Object(c.i)().token,t=Object(c.g)(),n=Object(O.a)().mutate,i=Object(a.useReducer)(F,V),l=Object(S.a)(i,2),p=l[0],b=p.loading,j=p.valid,h=l[1];Object(a.useEffect)((function(){e||h({type:"error"}),function(){var t=Object(s.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/auth/verify-email",{emailToken:e});case 3:n=t.sent,a=n.data,h({type:"success",payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),h({type:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var f=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t.push("/dashboard");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?Object(w.jsx)(r.a,{}):j?Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(w.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your email has been verified"})]}),Object(w.jsx)(d.a,{wide:!0,children:Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"2px",m:"24px 0 12px",full:!0,bold:!0,onClick:f,children:"Log In"})})]}):Object(w.jsx)(m.a,{children:Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Email Verification"}),Object(w.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Sorry this link is broken"})]})})},U=function(){var e=Object(O.a)(),t=e.profile,n=e.logout;return t.meta.isActive?Object(w.jsx)(c.a,{to:"/dashboard"}):Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{p:"0",m:"0 0 012px 0",align:"center",bold:!0,children:"Account Disabled"}),Object(w.jsx)(u.a,{font:"12px",p:"0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Your account has been deactivated"})]}),Object(w.jsxs)(d.a,{wide:!0,children:[Object(w.jsx)(u.a,{font:"12px",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"If you think this is a mistake kindly send us a message"}),Object(w.jsx)(x.a,{type:"submit",bg:"secondary",color:"black",radius:"2px",m:"12px 0",full:!0,bold:!0,onClick:n,children:"Log Out"})]})]})},z=function(e){var t=e.title,n=e.desc;return Object(w.jsxs)(d.a,{p:"12px 16px",m:"0 0 12px 0",bg:"bg",radius:"8px",wide:!0,children:[Object(w.jsx)(u.a,{p:"0",m:"0 0 8px 0",opacity:"0.8",font:"12px",weight:"500",children:t}),Object(w.jsx)(u.a,{p:"0",weight:"400",opacity:"0.9",font:"10px",multiline:!0,children:n})]})},E=function(){return Object(O.a)().profile.isDocumentVerified?Object(w.jsx)(c.a,{to:"/dashboard"}):Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Submit Documents"}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"We need to verify your information. Please submit the following documents"})]}),Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(z,{title:"1.) Photo of ID (front side)",desc:"International Passport, Driver's License or National ID"}),Object(w.jsx)(z,{title:"2.) Photo of ID (back side)",desc:"Same document as above"}),Object(w.jsx)(z,{title:"3.) Take a selfie holding your ID",desc:"A photo clearly showing your face and your ID"})]}),Object(w.jsx)(d.a,{wide:!0,children:Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:"true",bold:"true",to:"/confirmation/documents/1",children:"Start Verification"})})]})},L=n(139),Y=n(111),T=n(140),A=function(){var e=Object(c.g)(),t=Object(O.a)().profile,n=Object(Y.a)(),r=n.processing,i=n.response,l=n.start,p=n.complete,b=n.fail,j=Object(a.useState)(),f=Object(S.a)(j,2),g=f[0],y=f[1],k=Object(a.useState)(!1),D=Object(S.a)(k,2),C=D[0],I=D[1],P=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),I(!1),a=Object(T.a)(g),t.prev=3,l(),t.next=7,v.a.post("/profile/document/1",{document:a});case 7:p({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/2"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),I(!0),b(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return t.isDocumentVerified?Object(w.jsx)(c.a,{to:"/dashboard"}):Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 1"}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of your ID Document (International Passport, Driver's License or National ID)"})]}),Object(w.jsxs)(d.a,{as:"form",wide:!0,onSubmit:P,children:[Object(w.jsx)(L.a,{image:g,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return y(n.result)}},hint:"Select Document"}),C&&r&&Object(w.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:i}),Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!g,children:r?Object(w.jsx)(h.a,{}):g?"Upload Photo":"Choose an image"})]})]})},q=function(){var e=Object(c.g)(),t=Object(Y.a)(),n=t.processing,r=t.response,i=t.start,l=t.complete,p=t.fail,b=Object(a.useState)(),j=Object(S.a)(b,2),f=j[0],O=j[1],g=Object(a.useState)(!1),y=Object(S.a)(g,2),k=y[0],D=y[1],C=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),D(!1),a=Object(T.a)(f),t.prev=3,i(),t.next=7,v.a.post("/profile/document/2",{document:a});case 7:l({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/3"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),D(!0),p(t.t0.response.message);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 2"}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Kindly submit a photo of the back of your ID document"})]}),Object(w.jsxs)(d.a,{as:"form",wide:!0,onSubmit:C,children:[Object(w.jsx)(L.a,{image:f,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return O(n.result)}},hint:"Select Document"}),k&&Object(w.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:r}),Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!f,children:n?Object(w.jsx)(h.a,{}):f?"Upload Photo":"Choose an image"})]})]})},_=function(){var e=Object(c.g)(),t=Object(Y.a)(),n=t.processing,r=t.response,i=t.start,l=t.complete,p=t.fail,b=Object(a.useState)(),j=Object(S.a)(b,2),f=j[0],O=j[1],g=Object(a.useState)(!1),y=Object(S.a)(g,2),k=y[0],D=y[1],C=function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),D(!1),a=Object(T.a)(f),t.prev=3,i(),t.next=7,v.a.post("/profile/document/3",{document:a});case 7:l({mssg:"Document Submitted Successfully"}),e.push("/confirmation/documents/completed"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(3),D(!0),p(t.t0.response.message),console.log(t.t0,t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:"Step 3"}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:"Take a photo of you holding the ID you just submitted. Ensure the front of the ID is visible"})]}),Object(w.jsxs)(d.a,{as:"form",wide:!0,onSubmit:C,children:[Object(w.jsx)(L.a,{image:f,action:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){return O(n.result)}},hint:"Select Document"}),k&&Object(w.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:r}),Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:n||!f,children:n?Object(w.jsx)(h.a,{}):f?"Upload Photo":"Choose an image"})]})]})},K=function(){var e=Object(c.g)(),t=Object(O.a)().profile,n=Object(Y.a)(),r=n.processing,i=n.start,l=n.complete,p=Object(a.useRef)(),b=Object(a.useState)(),j=Object(S.a)(b,2),f=j[0],g=j[1],y=Object(a.useState)(null),k=Object(S.a)(y,2),D=k[0],C=k[1],I=function(){var t=Object(s.a)(o.a.mark((function t(){var n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",f),n.append("upload_preset","flashtradefx_public"),t.prev=3,i(),t.next=7,N.a.post("https://api.cloudinary.com/v1_1/flashtradefx/image/upload",n);case 7:return a=t.sent,c=a.data,t.next=11,v.a.post("/profile/document/upload",{url:c.secure_url,cloudId:c.public_id});case 11:l({mssg:"Document Submitted Successfully"}),e.push({pathname:"/confirmation/documents/completed",state:{title:"Upload Successful",message:"Thank you. Your documents has been received and is currently being processed."}}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),C("Something went wrong!"),l();case 19:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}}();return t.requestedDocument?Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsxs)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:["Upload ",t.requestedDocument]}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:t.requestedDocumentDescription})]}),Object(w.jsxs)(d.a,{wide:!0,children:[Object(w.jsx)("input",{ref:p,type:"file",onChange:function(e){var t=e.target.files[0];if(C(null),g(null),t){if(t.size/Math.pow(1024,2)>10)return C("File too large, max file size is 10 MB");g(t)}},hidden:!0}),Object(w.jsxs)(d.a,{p:"48px 0",flex:"space-between",wide:!0,children:[Object(w.jsx)(u.a,{children:(null===f||void 0===f?void 0:f.name)||"No file chosen"}),Object(w.jsx)(x.a,{p:"6px",bg:"primary",onClick:function(){return p.current.click()},children:f?"Choose another file":"Choose file"})]}),D&&Object(w.jsx)(u.a,{p:"0",m:"4px 0 0 0",align:"center",color:"danger",bold:!0,children:D}),Object(w.jsx)(x.a,{bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",font:"13px",full:!0,bold:!0,disabled:r||!f,onClick:I,children:r?Object(w.jsx)(h.a,{}):f?"Upload Document":"Choose a document"})]})]}):Object(w.jsx)(c.a,{to:"/dashboard"})},B=function(){var e=Object(c.h)().state,t=Object(O.a)().mutate;return Object(a.useEffect)((function(){t()}),[t]),Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(d.a,{p:"12px 0",wide:!0,children:[Object(w.jsx)(u.a,{font:"16px",p:"0",align:"center",bold:!0,children:(null===e||void 0===e?void 0:e.title)||"Verification Completed"}),Object(w.jsx)(u.a,{font:"11px",p:"0",m:"12px 0 0 0",align:"center",opacity:"0.6",bold:!0,multiline:!0,children:(null===e||void 0===e?void 0:e.message)||"Thank you. Your documents are being processed and you can already access your account"})]}),Object(w.jsx)(d.a,{wide:!0,children:Object(w.jsx)(x.a,{type:"submit",bg:"primary",radius:"6px",p:"12px 12px",m:"12px 0",full:"true",bold:"true",to:"/dashboard",children:"Go To Dashboard"})})]})},G=function(e){var t=e.children,n=Object(c.h)(),a=Object(O.a)(),i=a.profile;if(a.loading)return Object(w.jsx)(r.a,{});var o=n.pathname.split("/").slice(0,3).join("/"),s=["/confirmation/verify-email"].includes(o);return i||s?t:Object(w.jsx)(c.a,{to:"/account/login"})};function H(){var e=Object(c.j)().path;return Object(w.jsx)(G,{children:Object(w.jsxs)(c.d,{children:[Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/kyc"),children:Object(w.jsx)(k,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/verify-email/:token"),children:Object(w.jsx)(R,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/email-verification"),children:Object(w.jsx)(C,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/lock"),children:Object(w.jsx)(U,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/start"),children:Object(w.jsx)(E,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/1"),children:Object(w.jsx)(A,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/2"),children:Object(w.jsx)(q,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/3"),children:Object(w.jsx)(_,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/upload"),children:Object(w.jsx)(K,{})}),Object(w.jsx)(c.b,{exact:!0,path:"".concat(e,"/documents/completed"),children:Object(w.jsx)(B,{})}),Object(w.jsx)(c.b,{children:Object(w.jsx)(c.a,{to:"/"})})]})})}}}]);
//# sourceMappingURL=9.8e1cbd50.chunk.js.map