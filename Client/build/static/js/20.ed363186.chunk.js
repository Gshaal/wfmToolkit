(this.webpackJsonpclinet=this.webpackJsonpclinet||[]).push([[20],{179:function(e,t,n){},552:function(e,t,n){"use strict";n.r(t);var a=n(106),c=n(4),r=n(17),s=n(18),l=n(20),o=n(19),i=n(0),d=n(476),u=n.n(d),h=n(21),j=n(22),p=n(489),b=n.n(p),f=n(514),m=n(135),O=n(159),x=n(553),g=n(160),y=n(279),_=n(220),k=n(280),v=n(517),C=(n(179),n(110)),w=n.n(C),S=n(515),N=n.n(S),E=n(516),D=n.n(E),z=n(1),A=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,l=new Array(s),o=0;o<s;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0,calender:[],scheduler:[],shifts:[],edit:!1,selectedCell:null},e.setEdit=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{edit:!0,selectedCell:t})}))},e.handleUpdate=function(t){var n={shift_id:t.target.value,scheduler_id:e.state.selectedCell};"custom"===n.shift_id?alert():j.a.post("/schduler/update",n,{headers:{Authorization:"Bearer "+e.props.token}}).then((function(t){e.updateCell(t.data.results)})).catch((function(t){return e.setState({error:!0})}))},e.updateCell=function(t){var n=e.state.scheduler.findIndex((function(e){return e.scheduler_id===t[0].scheduler_id}));if(n>-1){var r=Object(a.a)(e.state.scheduler);r[n]=t[0],console.log("updating cell..."),e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{scheduler:r,edit:!1,selectedCell:null})}))}},e.populateEditMenu=function(t){return Object(z.jsxs)(m.a,{type:"select",className:"shift-menu",onKeyUp:function(e){return console.log(e)},onChange:function(t){return e.handleUpdate(t)},children:[Object(z.jsx)("option",{defaultValue:t,children:t}),e.state.shifts.map((function(e){return e.shift_name!==t&&Object(z.jsx)("option",{value:e.shift_id,children:e.shift_name},e.shift_id)}))]})},e.populateCalenderBody=function(){return e.state.scheduler.map((function(e){return e.fullname})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(t,n){var a=e.state.scheduler.filter((function(e){return e.fullname===t})).sort((function(e,t){return new Date(e.datestamp)-new Date(t.datestamp)}));return Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{className:"text-center",children:t}),a.map((function(t,n){return Object(z.jsx)("td",{"data-tip":"".concat(null!==t.start_time?w()(t.start_time).format("LT"):"No time Assigned").concat(null!==t.end_time?"-".concat(w()(t.end_time).format("LT")," ").concat(t.requestedPto?"Disabled":""):""),className:"text-center",style:{backgroundColor:t.shift_color,backgroundImage:t.requestedPto?"linear-gradient(to bottom right,  transparent calc(50% - 1px), black, transparent calc(50% + 1px))":""},onDoubleClick:function(){return e.setEdit(t.scheduler_id)},children:t.scheduler_id!==e.state.selectedCell||t.requestedPto?t.shift_code:e.populateEditMenu(t.shift_name)},n)}))]},n)}))},e.loading=function(){return Object(z.jsx)(O.a,{className:"text-center",style:{paddingTop:"20%"},children:Object(z.jsxs)("div",{children:[Object(z.jsx)(x.a,{type:"grow",color:"primary"}),Object(z.jsx)(x.a,{type:"grow",color:"secondary"}),Object(z.jsx)(x.a,{type:"grow",color:"success"}),Object(z.jsx)(x.a,{type:"grow",color:"danger"}),Object(z.jsx)(x.a,{type:"grow",color:"warning"}),Object(z.jsx)(x.a,{type:"grow",color:"info"}),Object(z.jsx)(x.a,{type:"grow",color:"light"}),Object(z.jsx)(x.a,{type:"grow",color:"dark"})]})})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=u.a.parse(this.props.location.search),n=Object(c.a)(Object(c.a)({},t),{},{team:t.team.split(",")});j.a.post("/schduler/search",n,{headers:{Authorization:"Bearer "+this.props.token}}).then((function(t){console.log(t.data),e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{calender:t.data.calender,scheduler:t.data.scheduler,shifts:t.data.shifts,loading:!1})}))})).catch((function(t){return e.setState({error:!0})})),b()("https://wfm-toolkit.herokuapp.com").on("update-cell",(function(t){console.log("live data in..."),e.updateCell(t)})),window.addEventListener("keyup",(function(t){console.log(t),"Escape"===t.code&&e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{edit:!1,selectedCell:null})}))}))}},{key:"render",value:function(){return this.state.loading?this.loading():Object(z.jsxs)(i.Fragment,{children:[Object(z.jsx)(f.a,{}),Object(z.jsx)("div",{style:{paddingTop:"1.5rem"},children:Object(z.jsx)(O.a,{children:Object(z.jsx)(g.a,{sm:12,children:Object(z.jsxs)(y.a,{children:[Object(z.jsxs)(_.a,{children:[Object(z.jsx)(N.a,{fontSize:"small","data-tip":"Double click on cell to edit, press ESC to exit edit mode",style:{cursor:"pointer"}})," ",Object(z.jsx)(D.a,{fontSize:"small",style:{cursor:"pointer"}})]}),Object(z.jsx)(k.a,{children:Object(z.jsxs)(v.a,{bordered:!0,responsive:!0,children:[Object(z.jsxs)("thead",{children:[Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{}),this.state.calender.map((function(e,t){return"Sat"===e.day_name||"Sun"===e.day_name?Object(z.jsx)("th",{className:"text-center",style:{backgroundColor:"#a6a6a6"},children:e.day_name},t):Object(z.jsx)("th",{className:"text-center",children:e.day_name},t)}))]}),Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{className:"text-center",children:"Employee Name"}),this.state.calender.map((function(e,t){return"Sat"===e.day_name||"Sun"===e.day_name?Object(z.jsx)("th",{className:"text-center",style:{backgroundColor:"#a6a6a6"},children:e.day_number},t):Object(z.jsx)("th",{className:"text-center",children:e.day_number},t)}))]})]}),Object(z.jsx)("tbody",{children:this.populateCalenderBody()})]})})]})})})})]})}}]),n}(i.Component);t.default=Object(h.b)((function(e){return{token:e.auth.token}}),null)(A)}}]);
//# sourceMappingURL=20.ed363186.chunk.js.map