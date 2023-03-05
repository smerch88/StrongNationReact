"use strict";(self.webpackChunkstrong_nation_react=self.webpackChunkstrong_nation_react||[]).push([[421],{1421:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(2791),s=t(9434),o=t(6545),l=t(3967),r=t(9164),a=t(4567),p=t(8796),d=t(782),x=t(4942),c=t(6934),u=(0,c.ZP)("ul")((function(e){var n,t=e.theme;return n={display:"flex",flexDirection:"column",gap:"17px"},(0,x.Z)(n,t.breakpoints.up("tablet"),{flexDirection:"row",flexWrap:"wrap",gap:"25px"}),(0,x.Z)(n,t.breakpoints.up("desktop"),{gap:"36px",flexWrap:"wrap"}),n})),m=t(4554),h=t(184);function y(){var e=(0,s.v9)(p.B),n=(0,s.v9)(p.X);if(0!==e.length){var t=e.filter((function(e){return e.region.includes(n)}));return 0===t.length?(0,h.jsx)(m.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"},children:(0,h.jsx)(a.Z,{sx:{fontSize:"20px",margin:"auto"},children:"\u041c\u0438 \u0449\u0435 \u043f\u0440\u0430\u0446\u044e\u0454\u043c\u043e \u043d\u0430\u0434 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0434\u043b\u044f \u0446\u0456\u0454\u0457 \u043e\u0431\u043b\u0430\u0441\u0442\u0456"})}):(0,h.jsx)(u,{children:t.sort((function(e,n){return e.date>n.date?-1:e.date<n.date?1:0})).map((function(e){return(0,h.jsx)(d.Z,{post:e},e.id)}))})}}var v=t(9439),j=t(1413),f=t(3366);var g=t(5705),k=t(6727),b=t(2658),C=t(283),Z=t(7429),D=t(9337),A=t(9714),B=t(3006),w=t(5849),S=["field","form","maxChars"];function T(){var e=(0,i.useState)(!1),n=(0,v.Z)(e,2),t=n[0],l=n[1],r=(0,i.useState)(""),a=(0,v.Z)(r,2),p=a[0],d=a[1],x=(0,i.useState)(new Date),c=(0,v.Z)(x,2),u=c[0],y=c[1],T=(0,i.useState)(Z.files),F=(0,v.Z)(T,2),K=F[0],O=F[1],z=(0,s.I0)(),P=k.Ry().shape({militaryDonations:k.Rx().typeError("must be any number!").required().integer(),civiliansDonations:k.Rx().typeError("must be any number!").required().integer(),description:k.Z_().max(150,"Too Long!").required(),link:k.Z_().typeError().required(),date:k.hT().default((function(){return new Date}))});return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(b.Z,{nameOfButton:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u043e\u0441\u0442",open:t,setOpen:l,children:(0,h.jsx)(g.J9,{initialValues:{militaryDonations:"",civiliansDonations:"",region:"",description:"",link:"",date:""},onSubmit:function(e,n){var t=n.resetForm,i=new FormData;i.append("file",K);var s={formData:i,region:p,description:e.description,link:e.link,date:u.toISOString(),categories:[{name:"militaryDonations",number:e.militaryDonations,units:null},{name:"civiliansDonations",number:e.civiliansDonations,units:null}]};z((0,o.q2)(s)),l(!1),t()},validationSchema:P,children:(0,h.jsxs)(D.Gq,{children:[(0,h.jsxs)(D.ar,{children:[(0,h.jsx)(D.Fe,{children:"\u041d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0432\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0438\u0445"}),(0,h.jsx)(D.Fy,{type:"text",name:"militaryDonations"}),(0,h.jsx)(D.BD,{children:(0,h.jsx)(g.Bc,{name:"militaryDonations"})})]}),(0,h.jsxs)(D.ar,{children:[(0,h.jsx)(D.Fe,{children:"\u041d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d"}),(0,h.jsx)(D.Fy,{type:"text",name:"civiliansDonations"}),(0,h.jsx)(D.BD,{children:(0,h.jsx)(g.Bc,{name:"civiliansDonations"})})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c"}),(0,h.jsx)(C.Z,{handleChangeRegion:function(e){d(e.target.value)},region:p}),(0,h.jsx)(D.BD,{children:(0,h.jsx)(g.Bc,{name:"region"})})]}),(0,h.jsxs)(D.ar,{style:{marginTop:"14px"},children:[(0,h.jsx)(D.Fe,{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043e\u043f\u0438\u0441"}),(0,h.jsx)(g.gN,{component:function(e){var n=e.field,t=(e.form,e.maxChars),i=function(e,n){if(null==e)return{};var t,i,s=(0,f.Z)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,S),s=t-n.value.length;return(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},children:[(0,h.jsx)("input",(0,j.Z)((0,j.Z)((0,j.Z)({},n),i),{},{style:{width:"100%",paddingBottom:"5px",border:"none",outline:"transparent",borderBottom:"1px solid #000000"},rows:"1",type:"textarea",name:"description"})),(0,h.jsxs)("p",{style:{margin:"0",fontSize:"12px",minWidth:"52px",marginLeft:"10px"},children:[s," / ",t]})]})},maxChars:150,style:{paddingBottom:"5px",border:"none",outline:"transparent",borderBottom:"1px solid #000000"},rows:"1",as:"textarea",name:"description"}),(0,h.jsx)(D.BD,{children:(0,h.jsx)(g.Bc,{name:"description"})})]}),(0,h.jsxs)(D.ar,{children:[(0,h.jsx)("span",{children:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0434\u0436\u0435\u0440\u0435\u043b\u043e"}),(0,h.jsx)(D.Fy,{type:"url",name:"link"}),(0,h.jsx)(D.BD,{children:(0,h.jsx)(g.Bc,{name:"link"})})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457"}),(0,h.jsx)(A.Z,{handleChangeDate:function(e){y(e)},date:u})]}),(0,h.jsxs)("label",{style:{border:"1px dashed black",borderRadius:"10px",textAlign:"center",height:"100px",marginTop:"17px"},children:[null!==K&&void 0!==K&&K.name?(0,h.jsx)(m.Z,{component:"p",sx:{marginTop:"38px"},children:"\u0424\u043e\u0442\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e"}):(0,h.jsx)(m.Z,{component:"p",sx:{marginTop:"38px"},children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0444\u043e\u0442\u043e"}),(0,h.jsx)(B.Z,{type:"file",name:"photo",onChange:function(e){O(e.target.files[0])},sx:{opacity:0}})]}),(0,h.jsx)(w.Z,{sx:{marginTop:"20px"},type:"submit",children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})})})})}var F=t(1807),K=(0,c.ZP)("div")((function(e){e.theme;return{width:"80%",height:"2px",background:"#748E9A"}})),O=(0,c.ZP)("div")((function(e){e.theme;return{display:"flex",justifyContent:"space-between",marginTop:"6px",paddingTop:"15px"}})),z=(0,c.ZP)("button")((function(e){e.theme;return{display:"flex",alignItems:"center",background:"transparent",border:"none",textTransform:"uppercase",fontFamily:"Bebas",fontWeight:400,fontSize:"16px",lineHeight:"calc(19/16)",cursor:"pointer",color:"#1F2528","&:hover":{color:"#748E9A"}}})),P=(0,c.ZP)("span")((function(e){e.theme;return{display:"block",marginRight:"3px",width:"4px",height:"4px",background:"#748E9A",borderRadius:"50px"}})),I=t(1239);function L(){var e,n,t,o,l,r,a,d,x,c,u,m,y,j,f,g,k,C,Z,D,A,B,w,S,T,L,R=(0,i.useState)(!1),E=(0,v.Z)(R,2),q=E[0],_=E[1],V=(0,i.useState)(""),W=(0,v.Z)(V,2),M=W[0],U=W[1],X=(0,s.v9)(p.X),G=(0,s.I0)();(0,i.useEffect)((function(){X&&U((0,h.jsx)(I.A,{name:X}))}),[]);var H=function(e){G((0,F.z)(e.target.name)),_(!1),U((0,h.jsx)(I.A,{name:e.target.name||e.target.dataset.name}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(b.Z,{nameOfButton:M||"\u0412\u0441\u0456 \u043e\u0431\u043b\u0430\u0441\u0442\u0456",open:q,setOpen:_,children:[(0,h.jsx)(K,{}),(0,h.jsxs)(O,{children:[(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"","data-name":"\u0412\u0441\u0456 \u043e\u0431\u043b\u0430\u0441\u0442\u0456",onClick:H,children:["\u0412\u0441\u0456 \u043e\u0431\u043b\u0430\u0441\u0442\u0456"===(null===(e=M.props)||void 0===e?void 0:e.name)&&(0,h.jsx)(P,{}),"\u0432\u0441i \u043e\u0431\u043b\u0430\u0441\u0442i"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Vinnytsia",onClick:H,children:[("Vinnytsia"===(null===(n=M.props)||void 0===n?void 0:n.name)||"Vinnytsia"===X)&&(0,h.jsx)(P,{}),"\u0412i\u043d\u043d\u0438\u0446\u044f"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Dnipro",onClick:H,children:[("Dnipro"===(null===(t=M.props)||void 0===t?void 0:t.name)||"Dnipro"===X)&&(0,h.jsx)(P,{}),"\u0414\u043di\u043f\u0440\u043e"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Donetsk",onClick:H,children:[("Donetsk"===(null===(o=M.props)||void 0===o?void 0:o.name)||"Donetsk"===X)&&(0,h.jsx)(P,{}),"\u0414\u043e\u043d\u0435\u0446\u044c\u043a"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Zhytomyr",onClick:H,children:[("Zhytomyr"===(null===(l=M.props)||void 0===l?void 0:l.name)||"Zhytomyr"===X)&&(0,h.jsx)(P,{}),"\u0416\u0438\u0442\u043e\u043c\u0438\u0440"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Zaporizhzhia",onClick:H,children:[("Zaporizhzhia"===(null===(r=M.props)||void 0===r?void 0:r.name)||"Zaporizhzhia"===X)&&(0,h.jsx)(P,{}),"\u0417\u0430\u043f\u043e\u0440i\u0436\u0436\u044f"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Ivano-Frankivsk",onClick:H,children:[("Ivano-Frankivsk"===(null===(a=M.props)||void 0===a?void 0:a.name)||"Ivano-Frankivsk"===X)&&(0,h.jsx)(P,{}),"\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043ai\u0432\u0441\u044c\u043a"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Kyiv",onClick:H,children:[("Kyiv"===(null===(d=M.props)||void 0===d?void 0:d.name)||"Kyiv"===X)&&(0,h.jsx)(P,{}),"\u041a\u0438\u0457\u0432"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Kropyvnytskyi",onClick:H,children:[("Kropyvnytskyi"===(null===(x=M.props)||void 0===x?void 0:x.name)||"Kropyvnytskyi"===X)&&(0,h.jsx)(P,{}),"\u041a\u0440\u043e\u043f\u0438\u0432\u043d\u0438\u0446\u044c\u043a\u0438\u0439"]})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Crimea",onClick:H,children:[("Crimea"===(null===(c=M.props)||void 0===c?void 0:c.name)||"Crimea"===X)&&(0,h.jsx)(P,{}),"\u041a\u0440\u0438\u043c"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Luhansk",onClick:H,children:[("Luhansk"===(null===(u=M.props)||void 0===u?void 0:u.name)||"Luhansk"===X)&&(0,h.jsx)(P,{}),"\u041b\u0443\u0433\u0430\u043d\u0441\u044c\u043a"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Lviv",onClick:H,children:[("Lviv"===(null===(m=M.props)||void 0===m?void 0:m.name)||"Lviv"===X)&&(0,h.jsx)(P,{}),"\u041b\u044c\u0432i\u0432"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Lutsk",onClick:H,children:[("Lutsk"===(null===(y=M.props)||void 0===y?void 0:y.name)||"Lutsk"===X)&&(0,h.jsx)(P,{}),"\u041b\u0443\u0446\u044c\u043a"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Mykolaiv",onClick:H,children:[("Mykolaiv"===(null===(j=M.props)||void 0===j?void 0:j.name)||"Mykolaiv"===X)&&(0,h.jsx)(P,{}),"\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Odesa",onClick:H,children:[("Odesa"===(null===(f=M.props)||void 0===f?void 0:f.name)||"Odesa"===X)&&(0,h.jsx)(P,{}),"\u041e\u0434\u0435\u0441\u0430"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Poltava",onClick:H,children:[("Poltava"===(null===(g=M.props)||void 0===g?void 0:g.name)||"Poltava"===X)&&(0,h.jsx)(P,{}),"\u041f\u043e\u043b\u0442\u0430\u0432\u0430"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Rivne",onClick:H,children:[("Rivne"===(null===(k=M.props)||void 0===k?void 0:k.name)||"Rivne"===X)&&(0,h.jsx)(P,{}),"\u0420i\u0432\u043d\u0435"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Sumy",onClick:H,children:[("Sumy"===(null===(C=M.props)||void 0===C?void 0:C.name)||"Sumy"===X)&&(0,h.jsx)(P,{}),"\u0421\u0443\u043c\u0438"]})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Ternopil",onClick:H,children:[("Ternopil"===(null===(Z=M.props)||void 0===Z?void 0:Z.name)||"Ternopil"===X)&&(0,h.jsx)(P,{}),"\u0422\u0435\u0440\u043d\u043e\u043fi\u043b\u044c"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Uzhhorod",onClick:H,children:[("Uzhhorod"===(null===(D=M.props)||void 0===D?void 0:D.name)||"Uzhhorod"===X)&&(0,h.jsx)(P,{}),"\u0423\u0436\u0433\u043e\u0440\u043e\u0434"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Kharkiv",onClick:H,children:[("Kharkiv"===(null===(A=M.props)||void 0===A?void 0:A.name)||"Kharkiv"===X)&&(0,h.jsx)(P,{}),"\u0425\u0430\u0440\u043ai\u0432"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Kherson",onClick:H,children:[("Kherson"===(null===(B=M.props)||void 0===B?void 0:B.name)||"Kherson"===X)&&(0,h.jsx)(P,{}),"\u0425\u0435\u0440\u0441\u043e\u043d"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Khmelnytskyi",onClick:H,children:[("Khmelnytskyi"===(null===(w=M.props)||void 0===w?void 0:w.name)||"Khmelnytskyi"===X)&&(0,h.jsx)(P,{}),"\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0438\u0439"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Cherkasy",onClick:H,children:[("Cherkasy"===(null===(S=M.props)||void 0===S?void 0:S.name)||"Cherkasy"===X)&&(0,h.jsx)(P,{}),"\u0427\u0435\u0440\u043a\u0430\u0441\u0438"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Chernivtsi",onClick:H,children:[("Chernivtsi"===(null===(T=M.props)||void 0===T?void 0:T.name)||"Chernivtsi"===X)&&(0,h.jsx)(P,{}),"\u0427\u0435\u0440\u043di\u0432\u0446i"]}),(0,h.jsxs)(z,{style:{textAlign:"left"},type:"button",name:"Chernihiv",onClick:H,children:[("Chernihiv"===(null===(L=M.props)||void 0===L?void 0:L.name)||"Chernihiv"===X)&&(0,h.jsx)(P,{}),"\u0427\u0435\u0440\u043di\u0433i\u0432"]})]})]})]})})}var R=(0,c.ZP)("section")((function(e){var n,t=e.theme;return n={padding:"25px 0",paddingTop:"81px"},(0,x.Z)(n,t.breakpoints.up("tablet"),{padding:"44px 0",paddingTop:"122px"}),(0,x.Z)(n,t.breakpoints.up("desktop"),{padding:"54px 0",paddingTop:"146px"}),n})),E=(0,c.ZP)("div")((function(e){var n,t=e.theme;return n={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"17px"},(0,x.Z)(n,t.breakpoints.up("tablet"),{marginBottom:"32px"}),(0,x.Z)(n,t.breakpoints.up("desktop"),{marginBottom:"37px"}),n})),q=(0,c.ZP)("div")((function(e){var n,t=e.theme;return n={display:"flex",gap:"18px"},(0,x.Z)(n,t.breakpoints.up("tablet"),{gap:"24px"}),(0,x.Z)(n,t.breakpoints.up("desktop"),{gap:"41px"}),n})),_=t(955),V=function(){var e=(0,s.I0)(),n=(0,l.Z)(),t=(0,s.v9)(_.d);return(0,i.useEffect)((function(){e((0,o.OX)())}),[e]),(0,h.jsx)(R,{children:(0,h.jsxs)(r.Z,{children:[(0,h.jsxs)(E,{children:[(0,h.jsx)(a.Z,{variant:"h3",component:"h2",color:[n.palette.text.header],children:"\u041d\u043e\u0432\u0438\u043d\u0438"}),(0,h.jsxs)(q,{children:[t&&(0,h.jsx)(T,{}),(0,h.jsx)(L,{})]})]}),(0,h.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=421.6fca83bd.chunk.js.map