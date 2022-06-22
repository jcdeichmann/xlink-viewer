(this["webpackJsonpxlink-viewer"]=this["webpackJsonpxlink-viewer"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),i=n.n(r),s=(n(86),n(74)),o=n(136),j=n(137),l=n(72),d=n(10),b=n(49),h=n(139),u=n(128),x=n(129),O=n(130),p=n(126),f=n(127),m=n(2),v=function(e){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(h.a,{className:"testing",style:{position:"fixed",width:"100%",height:"300px",top:"-250px",zIndex:"10",backgroundColor:"#c30a13"}}),Object(m.jsx)(p.a,{position:"sticky",style:{clipPath:"inset(0px -10px -10px -10px)"},children:Object(m.jsxs)(f.a,{children:[e.button,Object(m.jsx)(b.a,{variant:"h6",children:"Xlink Mobile"})]})})]})},g=function(){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(h.a,{bgcolor:"white",width:"100vw",height:"100vh",style:{position:"fixed",zIndex:"-1"}}),Object(m.jsx)(v,{}),Object(m.jsx)(h.a,{p:2,children:Object(m.jsx)(b.a,{variant:"h4",children:"Report Lists"})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(x.a,{divider:!0,button:!0,component:"a",href:"#/collect-cows",children:Object(m.jsx)(O.a,{primary:"Collect Cows"})}),Object(m.jsx)(x.a,{divider:!0,button:!0,component:"a",href:"#/cows-due",children:Object(m.jsx)(O.a,{primary:"Cows Due"})})]})]})},y=n(55),w=n(63),k=n(17),C=n(64),N=n.n(C),D=n(111),F=n(135),L=n(65),P=n(29),S=n(66),T=n(75),A=n(67),I=n.n(A),z=n(140),E=n(131),R=n(132),B=n(141),J=n(133),M=function(e){Object(S.a)(n,e);var t=Object(T.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{variant:"caption",color:"textSecondary",children:this.props.label}),Object(m.jsx)(b.a,{style:{fontSize:16},variant:"body1",children:this.props.data})]})}}]),n}(a.Component),W=function(e){var t=Object.keys(e.data),n=t[0],a=t.slice(1,4),c=t.slice(4);return Object(m.jsxs)(z.a,{children:[Object(m.jsx)(E.a,{expandIcon:Object(m.jsx)(I.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(m.jsxs)(R.a,{container:!0,justify:"space-around",spacing:1,children:[Object(m.jsx)(R.a,{item:!0,xs:2,children:Object(m.jsx)(B.a,{color:"primary",label:e.data[n]})}),a.map((function(t){return Object(m.jsx)(R.a,{item:!0,children:Object(m.jsx)(M,{label:t,data:e.data[t]})})}))]})}),Object(m.jsx)(J.a,{children:Object(m.jsx)(R.a,{container:!0,spacing:1,children:c.map((function(t){return Object(m.jsx)(R.a,{item:!0,xs:4,xm:3,children:Object(m.jsx)(M,{label:t,data:e.data[t]})})}))})})]})},X=n(68),Y=n(134),q=function(){return Object(m.jsx)(z.a,{children:Object(m.jsx)(E.a,{"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(m.jsxs)(R.a,{container:!0,justify:"space-around",spacing:1,children:[Object(m.jsx)(R.a,{item:!0,xs:2,children:Object(m.jsx)(Y.a,{variant:"circle",width:40,height:40})}),Object(m.jsxs)(R.a,{item:!0,xs:10,children:[Object(m.jsx)(Y.a,{variant:"text",animation:"wave"}),Object(m.jsx)(Y.a,{variant:"text",animation:"wave"})]})]})})})},G=function(e){var t=Object(m.jsx)(D.a,{style:{color:"white"},edge:"start",href:"#",children:Object(m.jsx)(F.a,{})});return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(h.a,{bgcolor:"white",width:"100vw",height:"100vh",style:{position:"fixed",zIndex:"-1"}}),Object(m.jsx)(v,{button:t}),Object(m.jsx)(X.a,{onRefresh:e.refreshReport,children:Object(m.jsxs)(h.a,{bgcolor:"white",children:[Object(m.jsx)(h.a,{p:2,children:Object(m.jsx)(b.a,{variant:"h4",children:e.reportName+(e.isLoading?"":" - "+e.data.length)})}),e.data.map((function(t){return e.isLoading?Object(m.jsx)(q,{}):Object(m.jsx)(W,{data:t})})),Object(m.jsx)(h.a,{p:2,children:Object(m.jsxs)(b.a,{variant:"body2",style:{fontSize:13},color:"textSecondary",align:"center",children:["Data last fetched: ",e.refreshTime]})})]})})]})};function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("datas: "+e);var n=function(e,n){var a=t.indexOf(e),c=t.indexOf(n);return(a=-1==a?1e3:a)<(c=-1==c?1e3:c)?-1:0},a=e.map((function(e){return Object.keys(e).sort(n).reduce((function(t,n){return t[n]=e[n],t}),{})}));return console.log("ordered: "+a),a}var K=function(){return U("collect-cows")},Q=function(){return U("cows-due")},U=function(e){return fetch("https://xlink-worker.jcdeichmann.workers.dev/"+e).then((function(e){return e.json()}))},V=function(e){return Object(m.jsx)($,{reportName:"Collect Cows",fetchData:K,priorityFields:["Animal Number","Away","Day Production","Lactation days"]})},Z=function(e){return Object(m.jsx)($,{reportName:"Cows Due",fetchData:Q,priorityFields:["Animal Number","Animal Name","Expected Calving Date"],dataToPrepend:[{"Animal Number":"12","Animal Name":"Brittany L","Expected Calving Date":"2/24/23",Age:"30","Animal Life No.":"","Lactation No.":"3","What?":"Yes, you're pregnant!"}]})},$=function(e){var t=Object(a.useState)([null,null,null,null,null,null,null]),n=Object(k.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!0),s=Object(k.a)(i,2),o=s[0],j=s[1],l=Object(a.useState)("never"),d=Object(k.a)(l,2),b=d[0],h=d[1],u=function(){j(!0),e.fetchData().then(function(){var t=Object(w.a)(Object(y.a)().mark((function t(n){var a;return Object(y.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){return setTimeout(e,300)}));case 2:a=H(n,e.priorityFields),console.log("here"),e.dataToPrepend&&(console.log(e.dataToPrepend),a=e.dataToPrepend.concat(a)),r(a),j(!1),h(N()().format("h:mm a"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(e){console.log("error happened....")}))};return Object(a.useEffect)((function(){u()}),[]),Object(m.jsx)(G,{reportName:e.reportName,data:c,refreshTime:b,refreshReport:u,isLoading:o})},_=Object(s.a)({palette:{primary:{main:"#c30a13"},background:{default:"#c30a13",body:"#c30a13"},secondary:{main:"#0ac3ba"}}});function ee(){return Object(m.jsxs)(o.a,{theme:_,children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(l.a,{basename:"xlink-viewer",children:Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/collect-cows/",children:Object(m.jsx)(V,{})}),Object(m.jsx)(d.a,{path:"/cows-due/",children:Object(m.jsx)(Z,{})}),Object(m.jsx)(d.a,{path:"/",children:Object(m.jsx)(g,{})})]})})]})}var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()},86:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.c66b4b10.chunk.js.map