"use strict";(self.webpackChunkstrong_nation_react=self.webpackChunkstrong_nation_react||[]).push([[472],{2472:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var i=n(2791),l=n(9434),r=n(6545),s=n(3967),a=n(1614),o=n(890),c=n(8796),x=n(8882),p=n(4942),d=n(6934),u=(0,d.ZP)("ul")((function(e){var t,n=e.theme;return t={display:"flex",flexDirection:"column",gap:"17px"},(0,p.Z)(t,n.breakpoints.up("tablet"),{flexDirection:"row",flexWrap:"wrap",gap:"25px"}),(0,p.Z)(t,n.breakpoints.up("desktop"),{gap:"36px",flexWrap:"wrap"}),t})),h=n(184);function y(){var e=(0,l.v9)(c.B),t=(0,l.v9)(c.X);if(0!==e.length){var n=e.filter((function(e){return e.region.includes(t)}));return(0,h.jsx)(u,{children:n.map((function(e){return(0,h.jsx)(x.Z,{post:e},e.id)}))})}}var m=n(9439),f=n(6298),j=n(6727),g=n(2658),b=n(283),k=n(7429),v=n(9337),C=n(9714);function Z(){var e=(0,i.useState)(!1),t=(0,m.Z)(e,2),n=t[0],s=t[1],a=(0,i.useState)(""),o=(0,m.Z)(a,2),c=o[0],x=o[1],p=(0,i.useState)(new Date),d=(0,m.Z)(p,2),u=d[0],y=d[1],Z=(0,i.useState)(k.files),D=(0,m.Z)(Z,2),A=D[0],B=D[1],F=(0,l.I0)(),w=j.Ry().shape({militaryDonations:j.Rx().typeError("must be any number!").required().integer(),civiliansDonations:j.Rx().typeError("must be any number!").required().integer(),description:j.Z_().max(150,"Too Long!").required(),link:j.Z_().typeError().required(),date:j.hT().default((function(){return new Date}))});return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(g.Z,{nameOfButton:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u043f\u043e\u0441\u0442",open:n,setOpen:s,children:(0,h.jsx)(f.J9,{initialValues:{militaryDonations:"",civiliansDonations:"",region:"",description:"",link:"",date:""},onSubmit:function(e,t){var n=t.resetForm,i=new FormData;i.append("file",A);var l={formData:i,region:c,description:e.description,link:e.link,date:u,categories:[{name:"militaryDonations",number:e.militaryDonations,units:null},{name:"civiliansDonations",number:e.civiliansDonations,units:"kg"}]};F((0,r.q2)(l)),s(!1),n()},validationSchema:w,children:(0,h.jsxs)(v.Gq,{children:[(0,h.jsxs)(v.ar,{children:[(0,h.jsx)(v.Fe,{children:"\u041d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0432\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0438\u0445"}),(0,h.jsx)(v.Fy,{type:"text",name:"militaryDonations"}),(0,h.jsx)(v.BD,{children:(0,h.jsx)(f.Bc,{name:"militaryDonations"})})]}),(0,h.jsxs)(v.ar,{children:[(0,h.jsx)(v.Fe,{children:"\u041d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d"}),(0,h.jsx)(v.Fy,{type:"text",name:"civiliansDonations"}),(0,h.jsx)(v.BD,{children:(0,h.jsx)(f.Bc,{name:"civiliansDonations"})})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c"}),(0,h.jsx)(b.Z,{handleChangeRegion:function(e){x(e.target.value)},region:c}),(0,h.jsx)(v.BD,{children:(0,h.jsx)(f.Bc,{name:"region"})})]}),(0,h.jsxs)(v.ar,{style:{marginTop:"14px"},children:[(0,h.jsx)(v.Fe,{children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043e\u043f\u0438\u0441"}),(0,h.jsx)(f.gN,{style:{paddingBottom:"5px",border:"none",outline:"transparent",borderBottom:"1px solid #000000"},rows:"1",as:"textarea",name:"description"}),(0,h.jsx)(v.BD,{children:(0,h.jsx)(f.Bc,{name:"description"})})]}),(0,h.jsxs)(v.ar,{children:[(0,h.jsx)("span",{children:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0434\u0436\u0435\u0440\u0435\u043b\u043e"}),(0,h.jsx)(v.Fy,{type:"url",name:"link"}),(0,h.jsx)(v.BD,{children:(0,h.jsx)(f.Bc,{name:"link"})})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457"}),(0,h.jsx)(C.Z,{handleChangeDate:function(e){y(e)},date:u})]}),(0,h.jsx)("label",{children:(0,h.jsx)(f.gN,{type:"file",name:"photo",onChange:function(e){B(e.target.files[0])}})}),(0,h.jsx)("button",{style:{marginTop:"20px"},type:"submit",children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})})})})}var D=n(1807),A=(0,d.ZP)("div")((function(e){e.theme;return{width:"80%",height:"2px",background:"#748E9A"}})),B=(0,d.ZP)("div")((function(e){e.theme;return{display:"flex",justifyContent:"space-between",marginTop:"6px",paddingTop:"15px"}})),F=(0,d.ZP)("button")((function(e){e.theme;return{background:"transparent",border:"none",textTransform:"uppercase",fontFamily:"Bebas",fontWeight:400,fontSize:"16px",lineHeight:"calc(19/16)",cursor:"pointer",color:"#1F2528","&:hover":{color:"#748E9A"}}}));function w(){var e=(0,i.useState)(!1),t=(0,m.Z)(e,2),n=t[0],r=t[1],s=(0,l.I0)(),a=function(e){s((0,D.z)(e.target.name)),r(!1)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(g.Z,{nameOfButton:"\u0412\u0441\u0456 \u043e\u0431\u043b\u0430\u0441\u0442\u0456",open:n,setOpen:r,children:[(0,h.jsx)(A,{}),(0,h.jsxs)(B,{children:[(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"",onClick:a,children:"\u0432\u0441i \u043e\u0431\u043b\u0430\u0441\u0442i"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Vinnytsia",onClick:a,children:"\u0412i\u043d\u043d\u0438\u0446\u044f"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Dnipro",onClick:a,children:"\u0414\u043di\u043f\u0440\u043e"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Donetsk",onClick:a,children:"\u0414\u043e\u043d\u0435\u0446\u044c\u043a"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Zhytomyr",onClick:a,children:"\u0416\u0438\u0442\u043e\u043c\u0438\u0440"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Zaporizhzhia",onClick:a,children:"\u0417\u0430\u043f\u043e\u0440i\u0436\u0436\u044f"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Ivano-Frankivsk",onClick:a,children:"\u0406\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043ai\u0432\u0441\u044c\u043a"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Kyiv",onClick:a,children:"\u041a\u0438\u0457\u0432"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Kropyvnytskyi",onClick:a,children:"\u041a\u0440\u043e\u043f\u0438\u0432\u043d\u0438\u0446\u044c\u043a\u0438\u0439"})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Crimea",onClick:a,children:"\u041a\u0440\u0438\u043c"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Luhansk",onClick:a,children:"\u041b\u0443\u0433\u0430\u043d\u0441\u044c\u043a"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Lviv",onClick:a,children:"\u041b\u044c\u0432i\u0432"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Lutsk",onClick:a,children:"\u041b\u0443\u0446\u044c\u043a"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Mykolaiv",onClick:a,children:"\u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Odesa",onClick:a,children:"\u041e\u0434\u0435\u0441\u0430"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Poltava",onClick:a,children:"\u041f\u043e\u043b\u0442\u0430\u0432\u0430"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Rivne",onClick:a,children:"\u0420i\u0432\u043d\u0435"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Sumy",onClick:a,children:"\u0421\u0443\u043c\u0438"})]}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Ternopil",onClick:a,children:"\u0422\u0435\u0440\u043d\u043e\u043fi\u043b\u044c"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Uzhhorod",onClick:a,children:"\u0423\u0436\u0433\u043e\u0440\u043e\u0434"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Kharkiv",onClick:a,children:"\u0425\u0430\u0440\u043ai\u0432"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Kherson",onClick:a,children:"\u0425\u0435\u0440\u0441\u043e\u043d"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Khmelnytskyi",onClick:a,children:"\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0438\u0439"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Cherkasy",onClick:a,children:"\u0427\u0435\u0440\u043a\u0430\u0441\u0438"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Chernivtsi",onClick:a,children:"\u0427\u0435\u0440\u043di\u0432\u0446i"}),(0,h.jsx)(F,{style:{textAlign:"left"},type:"button",name:"Chernihiv",onClick:a,children:"\u0427\u0435\u0440\u043di\u0433i\u0432"})]})]})]})})}var S=(0,d.ZP)("section")((function(e){var t,n=e.theme;return t={padding:"25px 0"},(0,p.Z)(t,n.breakpoints.up("tablet"),{padding:"44px 0"}),(0,p.Z)(t,n.breakpoints.up("desktop"),{padding:"54px 0"}),t})),P=(0,d.ZP)("div")((function(e){var t,n=e.theme;return t={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"17px"},(0,p.Z)(t,n.breakpoints.up("tablet"),{marginBottom:"32px"}),(0,p.Z)(t,n.breakpoints.up("desktop"),{marginBottom:"37px"}),t})),T=(0,d.ZP)("div")((function(e){var t,n=e.theme;return t={display:"flex",gap:"18px"},(0,p.Z)(t,n.breakpoints.up("tablet"),{gap:"24px"}),(0,p.Z)(t,n.breakpoints.up("desktop"),{gap:"41px"}),t})),q=function(){var e=(0,l.I0)(),t=(0,s.Z)();return(0,i.useEffect)((function(){e((0,r.OX)())}),[e]),(0,h.jsx)(S,{children:(0,h.jsxs)(a.Z,{children:[(0,h.jsxs)(P,{children:[(0,h.jsx)(o.Z,{variant:"h3",component:"h2",color:[t.palette.text.header],children:"\u041d\u043e\u0432\u0438\u043d\u0438"}),(0,h.jsxs)(T,{children:[(0,h.jsx)(Z,{}),(0,h.jsx)(w,{})]})]}),(0,h.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=472.09b4dd66.chunk.js.map