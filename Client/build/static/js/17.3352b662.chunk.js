(this.webpackJsonpclinet=this.webpackJsonpclinet||[]).push([[17],{518:function(e,t,a){},519:function(e,t,a){"use strict";var c=a(88),n=a(89);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(90)).default)(s.createElement("path",{d:"M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"}),"Receipt");t.default=r},520:function(e,t,a){"use strict";var c=a(88),n=a(89);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(90)).default)(s.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"History");t.default=r},521:function(e,t,a){"use strict";var c=a(88),n=a(89);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),r=(0,c(a(90)).default)(s.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=r},558:function(e,t,a){"use strict";a.r(t);var c=a(137),n=a.n(c),s=a(138),r=a(4),o=a(17),i=a(18),l=a(20),d=a(19),u=a(0),j=a.n(u),b=a(82),h=a(159),O=a(296),m=a(297),f=a(298),p=a(554),x=a(555),g=a(21),v=a(22),y=a(32),N=a.n(y),_=a(519),T=a.n(_),k=a(520),M=a.n(k),C=a(521),S=a.n(C),Y=a(160),w=a(279),q=a(3),H=a(7),R=a(2),z=a.n(R),D=a(25),L={tag:D.j,className:z.a.string,cssModule:z.a.object},P=function(e){var t=e.className,a=e.cssModule,c=e.tag,n=Object(H.a)(e,["className","cssModule","tag"]),s=Object(D.g)(N()(t,"card-title"),a);return j.a.createElement(c,Object(q.a)({},n,{className:s}))};P.propTypes=L,P.defaultProps={tag:"div"};var A=P,F={tag:D.j,className:z.a.string,cssModule:z.a.object},B=function(e){var t=e.className,a=e.cssModule,c=e.tag,n=Object(H.a)(e,["className","cssModule","tag"]),s=Object(D.g)(N()(t,"card-text"),a);return j.a.createElement(c,Object(q.a)({},n,{className:s}))};B.propTypes=F,B.defaultProps={tag:"p"};var E=B,I=a(114),V=a(110),J=a.n(V),K=a(1);function U(e){return console.log(e),Object(K.jsx)(h.a,{children:e.data.length>0?e.data.map((function(t,a){return Object(K.jsx)(Y.a,{sm:"12",children:Object(K.jsxs)(w.a,{body:!0,className:"action-request",children:[Object(K.jsx)(A,{children:Object(K.jsx)("span",{className:"date-underline",children:"".concat(t.ref_number," /  ").concat(t.fullname," / From:  ").concat(J()(t.date_from).format("DD/MM/YYYY")," To:  ").concat(J()(t.date_to).format("DD/MM/YYYY"),"  ")})}),Object(K.jsx)("p",{children:J()(t.last_modified).add(1,"hours").fromNow()}),Object(K.jsxs)(E,{children:[Object(K.jsxs)("b",{children:[t.fullname.split(" ")[0]," says: ","  "]}),t.comment]}),Object(K.jsxs)(h.a,{className:"text-center",children:[Object(K.jsx)(Y.a,{xs:6,children:Object(K.jsx)(I.a,{color:"danger",block:!0,onClick:function(){return e.action(t.ref_number,!1,t.date_from,t.date_to,t.user_id)},children:"Decline"})}),Object(K.jsx)(Y.a,{xs:6,children:Object(K.jsx)(I.a,{color:"success",block:!0,onClick:function(){return e.action(t.ref_number,!0,t.date_from,t.date_to,t.user_id)},children:"Approve"})})]})]})},a)})):Object(K.jsx)("div",{className:"text-center",children:"No Pending Requests Found!"})})}function G(e){return Object(K.jsx)(h.a,{children:e.data.length>0?e.data.map((function(e,t){return Object(K.jsx)(Y.a,{sm:"12",style:{paddingTop:"1%"},children:Object(K.jsxs)(w.a,{body:!0,className:"action-request",children:[Object(K.jsx)(A,{children:"From:  ".concat(J()(e.date_from).format("DD/MM/YYYY")," To:  ").concat(J()(e.date_to).format("DD/MM/YYYY"))}),Object(K.jsx)(E,{children:"Status: ".concat(e.status," Updated: ").concat(J()(e.last_modified).add(1,"hours").fromNow())})]})},t)})):Object(K.jsx)("div",{className:"text-center",children:"No Pending Requests Found!"})})}var Q=a(87),W=a(280),X=a(161),Z=a(133),$=a(134),ee=a(100),te=a(135),ae=a(196);function ce(e){var t=Object(u.useState)(""),a=Object(Q.a)(t,2),c=a[0],n=a[1],s=Object(u.useState)(""),r=Object(Q.a)(s,2),o=r[0],i=r[1],l=Object(u.useState)(""),d=Object(Q.a)(l,2),j=d[0],b=d[1],O=Object(u.useState)(null),m=Object(Q.a)(O,2),f=m[0],p=m[1],x=Object(u.useState)(""),g=Object(Q.a)(x,2),v=g[0],y=g[1];return Object(K.jsx)(h.a,{children:Object(K.jsx)(Y.a,{sm:12,style:{paddingTop:"1%"},children:Object(K.jsx)(w.a,{className:"p-4",children:Object(K.jsxs)(W.a,{children:[Object(K.jsxs)(X.a,{style:{paddingTop:"12px"},children:[Object(K.jsx)(h.a,{children:Object(K.jsx)(Y.a,{sm:12,children:Object(K.jsxs)(Z.a,{className:"mb-3",children:[Object(K.jsx)($.a,{addonType:"prepend",children:Object(K.jsx)(ee.a,{children:"Email"})}),Object(K.jsx)(te.a,{type:"email",value:c,onChange:function(e){return n(e.target.value)}})]})})}),Object(K.jsxs)(h.a,{children:[Object(K.jsx)(Y.a,{sm:6,children:Object(K.jsxs)(Z.a,{className:"mb-3",children:[Object(K.jsx)($.a,{addonType:"prepend",children:Object(K.jsx)(ee.a,{children:"Date From"})}),Object(K.jsx)(te.a,{type:"date",value:o,onChange:function(e){return i(e.target.value)}})]})}),Object(K.jsx)(Y.a,{sm:6,children:Object(K.jsxs)(Z.a,{className:"mb-3",children:[Object(K.jsx)($.a,{addonType:"prepend",children:Object(K.jsx)(ee.a,{children:"Date To"})}),Object(K.jsx)(te.a,{type:"date",value:j,onChange:function(e){return b(e.target.value)}})]})})]}),Object(K.jsx)(h.a,{children:Object(K.jsx)(Y.a,{sm:12,children:Object(K.jsxs)(Z.a,{className:"mb-3",children:[Object(K.jsx)($.a,{addonType:"prepend",children:Object(K.jsx)(ee.a,{children:"Manager"})}),Object(K.jsx)(ae.a,{dataKey:"value",textField:"text",value:f,data:e.wfm_managers,onChange:function(e){return p(e)}})]})})}),Object(K.jsx)(h.a,{children:Object(K.jsx)(Y.a,{sm:12,children:Object(K.jsxs)(Z.a,{className:"mb-3",children:[Object(K.jsx)($.a,{addonType:"prepend",children:Object(K.jsx)(ee.a,{children:"Comment"})}),Object(K.jsx)(te.a,{type:"textarea",value:v,onChange:function(e){return y(e.target.value)}})]})})})]}),Object(K.jsx)(h.a,{children:Object(K.jsx)(Y.a,{sm:12,className:"text-center",children:Object(K.jsx)(I.a,{className:"btn-global",disabled:""===o||""===j,onClick:function(){return e.submit(o,j,f.key,v)},children:"Submit"})})})]})})})})}var ne=a(14),se=(a(518),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={activeTab:"1",wfm_managers:[],pending:[],history:[],email:null,date_from:null,date_to:null,manager:null,comment:null},e.getTeams=function(){v.a.post("/holiday/wfm-managers",null,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(t){e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{wfm_managers:t.data.results})}))})).catch((function(t){return e.setState({error:!0})}))},e.fetchPendingRequests=function(){v.a.post("/holiday/fetch-pending-pto",null,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(t){e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{pending:t.data.results})}))})).catch((function(t){return e.setState({error:!0})}))},e.fetchHistory=function(){v.a.post("/holiday/history",null,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(t){console.log(t),e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{history:t.data.results})}))})).catch((function(t){return e.setState({error:!0})}))},e.submitHolidayRequest=function(t,a,c,n){var s={dateFrom:t,dateTo:a,manager:c,comment:n};v.a.post("/holiday/submit-pto",s,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(e){ne.b.success("Request was submittted successfully ",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(t){return e.setState({error:!0})}))},e.handleRequests=function(t,a,c,n,s){var o={id:t,approved:a,dateFrom:c,dateTo:n,user_id:s};v.a.post("/holiday/action",o,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(t){ne.b.success("Request was actioned successfully ",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{pending:t.data.results})}))})).catch((function(t){return e.setState({error:!0})}))},e.toggle=function(t){e.state.activeTab!==t&&e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{activeTab:t})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getTeams();case 3:return e.next=5,this.fetchPendingRequests();case 5:return e.next=7,this.fetchHistory();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(K.jsx)(b.a,{style:{paddingTop:"2%"},children:Object(K.jsxs)(h.a,{children:[Object(K.jsxs)(O.a,{tabs:!0,className:"card-header text-center",children:[Object(K.jsx)(m.a,{children:Object(K.jsxs)(f.a,{className:N()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")},children:[Object(K.jsx)(T.a,{})," Action Requests"]})}),Object(K.jsx)(m.a,{children:Object(K.jsxs)(f.a,{className:N()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")},children:[Object(K.jsx)(M.a,{})," History"]})}),Object(K.jsx)(m.a,{children:Object(K.jsxs)(f.a,{className:N()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")},children:[Object(K.jsx)(S.a,{})," Request Time off"]})})]}),Object(K.jsxs)(p.a,{activeTab:this.state.activeTab,children:[Object(K.jsx)(x.a,{tabId:"1",children:Object(K.jsx)(U,{data:this.state.pending,action:function(t,a,c,n,s){return e.handleRequests(t,a,c,n,s)}})}),Object(K.jsx)(x.a,{tabId:"2",children:Object(K.jsx)(G,{data:this.state.history})}),Object(K.jsx)(x.a,{tabId:"3",children:Object(K.jsx)(ce,{wfm_managers:this.state.wfm_managers,submit:this.submitHolidayRequest})})]})]})})}}]),a}(u.Component));t.default=Object(g.b)((function(e){return{token:e.auth.token}}),null)(se)}}]);
//# sourceMappingURL=17.3352b662.chunk.js.map