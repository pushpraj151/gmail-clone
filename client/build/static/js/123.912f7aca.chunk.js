"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[123],{9469:(n,e,t)=>{t.d(e,{A:()=>i});var a=t(5043),o=t(7154);const s=async function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const{params:a,urlParams:s,...i}=e;return await(0,o.A)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(t),data:e})},i=n=>{const[e,t]=(0,a.useState)(null),[o,i]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t(null),l(!0),i("");try{let o=await s(n,e,a);t(o.data)}catch(o){i(o.message)}finally{l(!1)}},response:e,error:o,isLoading:r}}},2123:(n,e,t)=>{t.r(e),t.d(e,{default:()=>un});var a,o,s,i=t(7528),r=t(5043),l=t(5658),d=t(2314),c=t(6446),p=t(5263),x=t(9570),m=t(3287),h=t(9484),A=t(746),u=t(4279),g=t(7871),j=t(8490),f=t(703),y=t(7444),b=t(579);const w=(0,l.Ay)(d.A)(a||(a=(0,i.A)(["\n    background: #f5F5F5;\n    box-shadow: none;\n"]))),v=(0,l.Ay)(c.A)(o||(o=(0,i.A)(["\n    background: #EAF1FB;\n    margin-left: 80px;\n    border-radius: 8px;\n    min-width: 690px;\n    max-width: 720px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    & > div {\n        width: 100%\n    }\n"]))),S=(0,l.Ay)(c.A)(s||(s=(0,i.A)(["\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    & > svg {\n        margin-left: 20px;\n    }\n"]))),D=n=>{let{toggleDrawer:e}=n;return(0,b.jsx)(w,{position:"static",children:(0,b.jsxs)(p.A,{children:[(0,b.jsx)(m.A,{color:"action",onClick:e}),(0,b.jsx)("img",{src:y._3,alt:"logo",style:{width:110,marginLeft:15}}),(0,b.jsxs)(v,{children:[(0,b.jsx)(h.A,{color:"action"}),(0,b.jsx)(x.Ay,{}),(0,b.jsx)(A.A,{color:"action"})]}),(0,b.jsxs)(S,{children:[(0,b.jsx)(u.A,{color:"action"}),(0,b.jsx)(g.A,{color:"action"}),(0,b.jsx)(j.A,{color:"action"}),(0,b.jsx)(f.A,{color:"action"})]})]})})};var E,C,k,P,T=t(4109),F=t(1906),_=t(5721),O=t(1322),R=t(1485),B=t(5865),M=t(3184),J=t(3438),L=t(349),z=t(9469),H=t(3697);const I={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},N=(0,l.Ay)(c.A)(E||(E=(0,i.A)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    background: #f2f6fc;\n    & > p {\n        font-size: 14px;\n        font-weight: 500;\n    }\n"]))),U=(0,l.Ay)(c.A)(C||(C=(0,i.A)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n    & > div {\n        font-size: 14px;\n        border-bottom: 1px solid #F5F5F5;\n        margin-top: 10px;\n    }\n"]))),W=(0,l.Ay)(c.A)(k||(k=(0,i.A)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    align-items: center;\n"]))),K=(0,l.Ay)(F.A)(P||(P=(0,i.A)(["\n    background: #0B57D0;\n    color: #fff;\n    font-weight: 500;\n    text-transform: none;\n    border-radius: 18px;\n    width: 100px;\n"]))),G=n=>{let{open:e,setOpenDrawer:t}=n;const[a,o]=(0,r.useState)({}),s=(0,z.A)(H.y.saveSentEmails),i=(0,z.A)(H.y.saveDraftEmails),l={Username:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PASSWORD:"8C739D4ED21267411C134D7C0B61D783F388",React_APP_USERNAME:"demotest12345@yopmail.com"}.REACT_APP_USERNAME,Password:"8C739D4ED21267411C134D7C0B61D783F388",Host:"smtp.elasticemail.com",Port:2525},d=n=>{o({...a,[n.target.name]:n.target.value})};return(0,b.jsxs)(R.A,{open:e,PaperProps:{sx:I},children:[(0,b.jsxs)(N,{children:[(0,b.jsx)(B.A,{children:"New Message"}),(0,b.jsx)(J.A,{fontSize:"small",onClick:n=>(n=>{n.preventDefault();const e={to:a.to,from:"pushprajlocal@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"drafts"};i.call(e),i.error||(t(!1),o({}))})(n)})]}),(0,b.jsxs)(U,{children:[(0,b.jsx)(x.Ay,{placeholder:"Recipients",name:"to",onChange:n=>d(n),value:a.to}),(0,b.jsx)(x.Ay,{placeholder:"Subject",name:"subject",onChange:n=>d(n),value:a.subject})]}),(0,b.jsx)(M.A,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:n=>d(n),value:a.body}),(0,b.jsxs)(W,{children:[(0,b.jsx)(K,{onClick:n=>(async n=>{n.preventDefault(),window.Email&&window.Email.send({...l,To:a.to,From:"pushprajlocal@gmail.com",Subject:a.subject,Body:a.body}).then((n=>alert(n)));const e={to:a.to,from:"pushprajlocal@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"sent"};s.call(e),s.error||(t(!1),o({}))})(n),children:"Send"}),(0,b.jsx)(L.A,{onClick:()=>t(!1)})]})]})};var V=t(9297),q=t(1418),Q=t(4252),X=t(1084),Y=t(5837),Z=t(5069),$=t(7289);const nn=[{name:"inbox",title:"Inbox",icon:q.A,path:V.J.emails.path},{name:"starred",title:"Starred",icon:Q.A,path:V.J.emails.path},{name:"sent",title:"Sent",icon:X.A,path:V.J.emails.path},{name:"drafts",title:"Drafts",icon:Y.A,path:V.J.emails.path},{name:"bin",title:"Bin",icon:Z.A,path:V.J.emails.path},{name:"allmail",title:"All Mail",icon:$.A,path:V.J.emails.path}];var en,tn,an=t(286),on=t(3216),sn=t(5475);const rn=(0,l.Ay)(c.A)(en||(en=(0,i.A)(["\n    padding: 8px;\n    & > ul {\n        padding: 10px 0 0 5px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        & > a {\n            text-decoration: none;\n            color: inherit;\n        }\n        & > a > li > svg {\n            margin-right: 20px;\n        }\n    }\n"]))),ln=(0,l.Ay)(F.A)(tn||(tn=(0,i.A)(["\n    background: #c2e7ff;\n    color: #001d35;\n    border-radius: 16px;\n    padding: 15px;\n    min-width: 140px;\n    text-transform: none;\n"]))),dn=()=>{const[n,e]=(0,r.useState)(!1),{type:t}=(0,on.g)();return(0,b.jsxs)(rn,{children:[(0,b.jsxs)(ln,{onClick:()=>{e(!0)},children:[(0,b.jsx)(an.A,{style:{marginRight:10}}),"Compose"]}),(0,b.jsx)(_.A,{children:nn.map((n=>(0,b.jsx)(sn.k2,{to:"".concat(V.J.emails.path,"/").concat(n.name),children:(0,b.jsxs)(O.Ay,{style:t===n.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,b.jsx)(n.icon,{fontSize:"small"}),n.title]})},n.name)))}),(0,b.jsx)(G,{open:n,setOpenDrawer:e})]})};var cn;const pn=(0,l.Ay)(T.Ay)(cn||(cn=(0,i.A)(["\n    margin-top: 54px;\n"]))),xn=n=>{let{toggleDrawer:e,openDrawer:t}=n;return(0,b.jsx)(pn,{anchor:"left",open:t,onClose:e,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,b.jsx)(dn,{})})};var mn,hn=t(2912);const An=(0,l.Ay)(c.A)(mn||(mn=(0,i.A)(["\n    display: flex;\n"]))),un=()=>{const[n,e]=(0,r.useState)(!0),t=()=>{e((n=>!n))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(D,{toggleDrawer:t}),(0,b.jsxs)(An,{children:[(0,b.jsx)(xn,{toggleDrawer:t,openDrawer:n}),(0,b.jsx)(r.Suspense,{fallback:(0,b.jsx)(hn.A,{}),children:(0,b.jsx)(on.sv,{context:{openDrawer:n}})})]})]})}},3697:(n,e,t)=>{t.d(e,{y:()=>a});const a={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=123.912f7aca.chunk.js.map