(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(3),o=r.n(a),i=(r(19),r(7)),d=r(8),s=r(14),l=r(11),u="Add_reminder",b="Remove_reminder",j="Clear_reminder",m=r(4),p=r(10),h=r.n(p),O=r(1),x=function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={text:"",date:new Date},e.render_reducer=function(){var t=e.props.reducer;new Date;return Object(O.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(O.jsxs)("li",{className:"list-group-item",children:[Object(O.jsx)("div",{children:t.text}),Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{from:new Date,children:new Date(t.date)})}),Object(O.jsx)("div",{className:"icon-remove  btn-danger",onClick:function(){return e.props.remove_reminder(t.id)},children:"X"})]},t.id)}))})},e}return Object(d.a)(r,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("img",{src:""}),Object(O.jsx)("div",{className:"reminder-title",children:Object(O.jsx)("h2",{children:"What Should you Do ?"})}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{value:this.state.text,className:"form-control",type:"text",placeholder:"Enter what you think ...?",onChange:function(t){return e.setState({text:t.target.value})}}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{className:"form-control",type:"datetime-local",placeholder:"September 15,2019 10:37 PM",value:this.state.date,onChange:function(t){return e.setState({date:t.target.value})}}),Object(O.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){e.props.add_reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},children:"Add Reminder"}),this.render_reducer(),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e.props.clear_reminder()},children:"Delete Reminder"})]})}}]),r}(n.Component),f=Object(m.b)((function(e){return{reducer:e}}),{add_reminder:function(e,t){var r={type:u,text:e,date:t};return console.log("Add",r),r},remove_reminder:function(e){var t={type:b,id:e};return console.log("remove",t),t},clear_reminder:function(){var e={type:j};return console.log("Clear",e),e}})(x),v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,31)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))},g=r(13),y=r(12),k=r(2),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=[];return e=Object(k.read_cookie)("reducer"),t.type===u?(r=[].concat(Object(y.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(k.bake_cookie)("reducer",r),console.log("from reducer",r),r):t.type===b?(r=e.filter((function(e){return e.id!==t.id})),Object(k.bake_cookie)("reducer",r),console.log("fromreducer",r),r):t.type===j?(r=[],Object(k.bake_cookie)("reducer",r),console.log("from reducer clear",r),r):e},C=(r(29),Object(g.a)(_));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(m.a,{store:C,children:Object(O.jsx)(f,{})})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.97cf0570.chunk.js.map