(this.webpackJsonpquizwaproject=this.webpackJsonpquizwaproject||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(33),c=n.n(s),a=n(54),o=n.n(a),l=n(13),j=n(71),d=n(9);function u(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}function x(e){return e.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&#039;/g,"'").replace(/&aacute;/g,"\xe1").replace(/&eacute;/g,"\xe9")}var h=n(74),b=n.n(h).a.create({baseURL:"https://opentdb.com"}),m=n(75),O=n.n(m),g=n(1),p=Object(i.createContext)({}),f=[];function v(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),r=n[0],s=n[1],c=Object(i.useState)(0),a=Object(d.a)(c,2),h=a[0],m=a[1],v=Object(i.useState)([]),w=Object(d.a)(v,2),y=w[0],C=w[1],S=Object(i.useState)(0),N=Object(d.a)(S,2),T=N[0],q=N[1],R=Object(i.useState)(!1),I=Object(d.a)(R,2),k=I[0],B=I[1],D=Object(i.useState)(!1),F=Object(d.a)(D,2),z=F[0],Q=F[1],L=Object(i.useState)(0),A=Object(d.a)(L,2),H=A[0],J=A[1];return Object(i.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("api.php?amount=".concat(h));case 3:t=e.sent,n=t.data,f.push.apply(f,Object(l.a)(n.results)),i=[],f.forEach((function(e){var t=[];if("multiple"===e.type){var n=x(e.incorrect_answers[0]),r=x(e.incorrect_answers[1]),s=x(e.incorrect_answers[2]),c=x(e.correct_answer);t.push({answerText:n,isCorrect:!1,selected:!1},{answerText:r,isCorrect:!1,selected:!1},{answerText:s,isCorrect:!1,selected:!1},{answerText:c,isCorrect:!0,selected:!1})}if("boolean"===e.type){var a=x(e.incorrect_answers[0]),o=x(e.correct_answer);t.push({answerText:o,isCorrect:!0,selected:!1},{answerText:a,isCorrect:!1,selected:!1})}var l=u(t),j=x(e.question);i.push({questionText:j,answerOptions:l})})),C(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Ocorreu um erro ao buscar as quest\xf5es, tente novamente!");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(g.jsx)(p.Provider,{value:{onResume:k,setOnResume:B,setAmount:m,init:r,setInit:s,amount:h,questions:y,currentQuestion:T,setCurrentQuestion:q,showScore:z,setShowScore:Q,score:H,setScore:J,handleAnswerOptionClick:function(e){e.isCorrect&&(Object.assign(e,{selected:!0,color:"green"}),J(H+1)),e.isCorrect||(Object.assign(e,{selected:!0,color:"red"}),y[T].answerOptions.forEach((function(e){e.isCorrect&&(e.color="green")})));var t=T+1;if(t<y.length)q(t);else{var n=[],i=O()().format("LLL"),r=localStorage.getItem("@quizSavedQuestions"),s=JSON.parse(r);s&&(s.unshift({score:H,date:i,questions:y}),localStorage.removeItem("@quizSavedQuestions"),localStorage.setItem("@quizSavedQuestions",JSON.stringify(s))),s||(n.unshift({score:H,date:i,questions:y}),localStorage.setItem("@quizSavedQuestions",JSON.stringify(n))),Q(!0)}}},children:e.children})}var w=n(32),y=n(5),C=n(158),S=n(150),N=n(143),T=n(146);function q(){var e=Object(i.useContext)(p).setAmount;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(g.jsx)(T.a,{style:{marginRight:5,marginBottom:5},onClick:function(t){return e(Number(t.currentTarget.innerText))},color:"primary",variant:"contained",children:"05"}),Object(g.jsx)(T.a,{style:{marginRight:5,marginBottom:5},onClick:function(t){return e(Number(t.currentTarget.innerText))},variant:"contained",children:"10"}),Object(g.jsx)(T.a,{style:{marginRight:5,marginBottom:5},onClick:function(t){return e(Number(t.currentTarget.innerText))},variant:"contained",children:"15"}),Object(g.jsx)(T.a,{style:{marginRight:5,marginBottom:5},onClick:function(t){return e(Number(t.currentTarget.innerText))},variant:"contained",children:"25"}),Object(g.jsx)(T.a,{style:{marginRight:5,marginBottom:5},onClick:function(t){return e(Number(t.currentTarget.innerText))},variant:"contained",children:"30"})]})})}var R=n(145),I=Object(R.a)({root:{display:"flex",margin:"200px auto",alignItems:"center",justifyContent:"center",flexDirection:"column",minHeight:150,height:"min-content",borderRadius:15,padding:20,boxShadow:"10px 10px 42px 0px rgba(0, 0, 0, 0.75)",textAlign:"center"},contentButtons:{display:"flex",margin:"150px -150px 0 0",width:"100%",alignItems:"center",flexDirection:"column",justifyContent:"center",minHeight:200,height:"min-content",borderRadius:15,padding:20,boxShadow:"10px 10px 42px 0px rgba(0, 0, 0, 0.75)",textAlign:"center"},groupButtons:{display:"flex",alignItems:"center",justifyContent:"center"},stack:{display:"flex",height:"100%",alignItems:"center",justifyContent:"center"}});var k=function(){var e=I(),t=Object(i.useContext)(p),n=t.amount,r=t.setAmount;return Object(g.jsx)(S.a,{children:n>0?Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)("h2",{children:"Are you ready?"}),Object(g.jsxs)(N.a,{className:e.stack,spacing:2,direction:"row",flexWrap:"wrap",children:[Object(g.jsx)(T.a,{style:{width:"40%",marginBottom:10},color:"success",variant:"contained",children:Object(g.jsx)(w.b,{style:{textDecoration:"none",color:"#fff"},to:"/quiz",children:"Start"})}),Object(g.jsx)(T.a,{style:{width:"40%",marginBottom:10},onClick:function(){return r(0)},color:"error",variant:"contained",children:"Cancel"})]})]}):Object(g.jsxs)("div",{className:e.contentButtons,children:[Object(g.jsx)("h1",{children:"How many Questions you want to answer?"}),Object(g.jsx)("div",{className:e.groupButtons,children:Object(g.jsx)(q,{})})]})})},B=n(151),D=n(153),F=n.p+"static/media/logo.6bbe30b6.svg",z=Object(R.a)({grow:{flexGrow:1},logo:{position:"fixed",width:120,height:60,marginLeft:15}});function Q(){var e=window.location.origin,t=z();return Object(g.jsx)("div",{children:Object(g.jsxs)(B.a,{children:[Object(g.jsx)("img",{className:t.logo,src:F,alt:"logo"}),Object(g.jsxs)(D.a,{children:[Object(g.jsx)("div",{className:t.grow}),Object(g.jsxs)(N.a,{spacing:2,direction:"row",children:[Object(g.jsx)(T.a,{onClick:function(){window.location.href=e},color:"inherit",variant:"outlined",children:"Home"}),Object(g.jsx)(T.a,{color:"inherit",variant:"outlined",children:Object(g.jsx)(w.b,{style:{textDecoration:"none",color:"#fff"},to:"/history",children:"History"})})]})]})]})})}var L=Object(R.a)({root:{height:"100%",width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}});function A(){return Object(g.jsx)("footer",{style:{marginTop:50,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"},children:Object(g.jsxs)("p",{children:["Made with \ud83d\udc99, Created by ",Object(g.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"https://github.com/Lucas0liveir",children:"Lucas Oliveira"})]})})}function H(){var e=L();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,{}),Object(g.jsx)("main",{className:e.root,children:Object(g.jsx)(k,{})}),Object(g.jsx)(A,{})]})}var J=Object(R.a)({root:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"row"},cards:{width:"100%",minHeight:200,height:"min-content",borderRadius:15,padding:20,boxShadow:"10px 10px 25px 0px rgba(0, 0, 0, 0.55)"},resume:{width:"100%",height:"100%",borderRadius:15,padding:20,boxShadow:"10px 10px 25px 0px rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}),_=n(56),E=Object(R.a)({root:{width:"85%",minHeight:200,height:"min-content",borderRadius:15,padding:20,boxShadow:"10px 10px 42px 0px rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},score:{display:"flex",fontSize:24,alignItems:"center"},questions:{width:"100%",position:"relative"},divisor:{marginTop:15,width:"100%",border:"1px solid grey"},questionCount:{marginBottom:20},span:{fontSize:28},questionText:{marginBottom:12},answerSection:{width:"100%",display:"flex",marginTop:15,flexDirection:"column",justifyContent:"space-between"},spacing:{marginTop:15}}),M=n(147),P=n(78),W=n.n(P),Y=n(79),G=n.n(Y);function U(e){var t=e.questions,n=e.resume,s=e.setResume,c=E(),a=Object(i.useContext)(p),o=a.onResume,l=a.setOnResume,j=Object(g.jsxs)("div",{className:c.root,children:[Object(g.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:Object(g.jsx)(T.a,{onClick:function(){o?(l(!1),s(!1)):window.location.href="".concat(window.location.origin)},variant:"outlined",children:"X"})}),t.map((function(e,t){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:c.questions,children:[Object(g.jsx)("div",{className:c.questionCount,children:Object(g.jsxs)("span",{className:c.span,children:["Question ",t+1]})}),Object(g.jsx)("div",{className:c.questionText,children:e.questionText})]}),Object(g.jsx)("div",{className:c.answerSection,children:e.answerOptions.map((function(e,t){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)("div",{className:c.spacing}),Object(g.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[Object(g.jsx)(T.a,{style:{backgroundColor:e.color,width:"95%"},className:c.spacing,variant:"contained",children:e.answerText}),e.selected&&e.isCorrect&&Object(g.jsx)(W.a,{style:{marginRight:-2},color:"success"})||e.selected&&!e.isCorrect&&Object(g.jsx)(G.a,{style:{marginRight:-22},color:"error"})]})]})}))}),Object(g.jsx)("div",{className:c.divisor})]})}))]});return Object(g.jsx)(g.Fragment,{children:n&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(M.a,Object(_.a)(Object(_.a)({in:n,style:{transformOrigin:"0 0 0"}},n?{timeout:1e3}:{}),{},{children:j}))})})}var X=n(157),K=n(154),V=n(155),Z=n(156);function $(e){var t=e.savedQuestion,n=e.onResume,r=e.setOnResume,s=Object(i.useState)(!1),c=Object(d.a)(s,2),a=c[0],o=c[1],l=J();return Object(g.jsx)("div",{className:l.root,children:a?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:l.resume,children:Object(g.jsx)(U,{resume:a,questions:t.questions,setResume:o})})}):!n&&Object(g.jsx)("div",{className:l.cards,children:Object(g.jsxs)(K.a,{style:{width:200,paddingBottom:10},children:[Object(g.jsxs)(V.a,{children:[Object(g.jsxs)(Z.a,{variant:"subtitle1",children:["You scored ",t.score," points"]}),Object(g.jsx)("div",{style:{marginTop:10}}),Object(g.jsx)(Z.a,{variant:"subtitle2",children:t.date})]}),Object(g.jsx)(X.a,{children:Object(g.jsx)(T.a,{onClick:function(){o(!a),r(!0)},variant:"outlined",children:"Details"})})]})})})}var ee=n(149),te=n(80),ne=n.n(te);function ie(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(i.useContext)(p),c=s.setOnResume,a=s.onResume,o=Object(R.a)({root:{display:"flex",alignItems:"center",justifyContent:a?"center":"flex-start",width:"100%",margin:"100px 0 0 50px",flexDirection:"row",flexWrap:"wrap"}})();return Object(i.useEffect)((function(){var e=localStorage.getItem("@quizSavedQuestions");r(e?JSON.parse(e):null)}),[]),0===(null===n||void 0===n?void 0:n.length)?Object(g.jsx)(ne.a,{}):Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)(Q,{}),Object(g.jsx)("div",{className:o.root,children:n?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ee.a,{container:!0,spacing:2,children:n.map((function(e,t){return Object(g.jsx)(ee.a,{item:!0,children:Object(g.jsx)($,{setOnResume:c,onResume:a,savedQuestion:e})},t)}))})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Z.a,{variant:"h4",children:" Ops... You still haven't answered any quiz. "})})})]})}var re=Object(R.a)({root:{marginTop:100,height:"100%",width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"}}),se=Object(R.a)({root:{width:"100%",margin:"auto",height:"100%",borderRadius:15,padding:20,boxShadow:"10px 10px 42px 0px rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},container:{width:450,minHeight:200,height:"min-content",borderRadius:15,padding:20,boxShadow:"10px 10px 42px 0px rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"space-evenly"},score:{display:"flex",fontSize:24,alignItems:"center",marginBottom:15},questions:{width:"100%",position:"relative"},questionCount:{marginBottom:20},span:{fontSize:28},questionText:{marginBottom:12},answerSection:{width:"100%",display:"flex",marginTop:15,flexDirection:"column",justifyContent:"space-between"},spacing:{marginTop:15}});var ce=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],c=se(),a=Object(i.useContext)(p),o=a.score,l=a.showScore,j=a.questions,u=a.currentQuestion,x=a.handleAnswerOptionClick;if(0===j.length){var h=window.location.origin;window.location.href=h}var b=Object(g.jsx)(S.a,{className:c.container,children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:c.questions,children:[Object(g.jsxs)("div",{className:c.questionCount,children:[Object(g.jsxs)("span",{className:c.span,children:["Question ",u+1]}),"/",j.length]}),Object(g.jsx)("div",{className:c.questionText,children:j.length>1&&j[u].questionText})]}),Object(g.jsx)("div",{className:c.answerSection,children:j.length>1&&j[u].answerOptions.map((function(e){return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)("div",{className:c.spacing},e.answerText),Object(g.jsx)(T.a,{className:c.spacing,variant:"contained",onClick:function(){return x(e)},children:e.answerText})]},e.answerText)}))})]})});return Object(g.jsx)("div",{className:c.root,children:l?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:c.score,children:Object(g.jsxs)("h2",{style:{margin:0},children:["You scored ",o," points out of ",j.length]})}),n?Object(g.jsx)(U,{resume:n,questions:j,setResume:s}):Object(g.jsx)(T.a,{onClick:function(){return s(!0)},variant:"contained",children:"Resume"})]}):Object(g.jsx)(M.a,{in:!l,children:b})})};function ae(){var e=re();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,{}),Object(g.jsx)("main",{className:e.root,children:Object(g.jsx)(ce,{})})]})}n(114);var oe=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(w.a,{children:Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/",element:Object(g.jsx)(H,{})}),Object(g.jsx)(y.a,{path:"quiz",element:Object(g.jsx)(ae,{})}),Object(g.jsx)(y.a,{path:"history",element:Object(g.jsx)(ie,{})})]})})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),s(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(v,{children:Object(g.jsx)(oe,{})})}),document.getElementById("root")),le()}},[[115,1,2]]]);
//# sourceMappingURL=main.653c92b6.chunk.js.map