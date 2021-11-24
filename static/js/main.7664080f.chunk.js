(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(9),i=n.n(r),d=(n(15),n(4)),l=n(6),s=n(10),u=(n(18),n(0)),a=function(e){var t=e.addTodo,n=Object(c.useRef)();return Object(u.jsxs)("div",{className:"AddTodo",children:[Object(u.jsx)("input",{ref:n,type:"text",placeholder:"Type a new todo"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),t(n.current.value)},children:"Add"})]})},j=(n(20),function(e){var t=e.todos,n=e.renderItem;return Object(u.jsx)("div",{className:"TodoList",children:Object(u.jsx)("ul",{children:t.map((function(e){return n(e)}))})})}),f=function(e){return e=e.replace(/ /g,"_")},b=(n(21),function(e){var t=e.todo,n=e.removeTodo,c=e.updateCompletion;return Object(u.jsxs)("li",{className:"Todo",id:t.id,children:[Object(u.jsx)("input",{onChange:function(){return c(t)},type:"checkbox",id:f(t.name),checked:t.completed}),Object(u.jsx)("label",{className:t.completed?"isCompleted":"isNotCompleted",htmlFor:f(t.name),children:t.name}),Object(u.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Remove"})]})}),m=(n(22),"MyTodoApp"),p=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),f=i[0],p=i[1],O=function(e){!1===e.completed?o(n.filter((function(t){return t.id!==e.id}))):p(f.filter((function(t){return t.id!==e.id})))},h=function(e){!1===e.completed?(p([].concat(Object(d.a)(f),[e])),o((function(e){return n.filter((function(e){return!1===e.completed}))}))):(o([].concat(Object(d.a)(n),[e])),p((function(e){return f.filter((function(e){return!0===e.completed}))}))),e.completed=!e.completed};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(m+".todos_to_complete")),t=JSON.parse(localStorage.getItem(m+".todos_completed"));o(e),p(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(m+".todos_to_complete",JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){localStorage.setItem(m+".todos_completed",JSON.stringify(f))}),[f]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Todos"}),Object(u.jsx)(a,{addTodo:function(e){o([].concat(Object(d.a)(n),[{id:Object(s.v4)(),name:e,completed:!1}]))}})]}),Object(u.jsxs)("main",{children:[n.length>0?Object(u.jsx)("section",{children:Object(u.jsx)(j,{todos:n,renderItem:function(e){return Object(u.jsx)(b,{todo:e,removeTodo:O,updateCompletion:h},e.id)}})}):null,f.length>0?Object(u.jsxs)("section",{children:[Object(u.jsxs)("h2",{children:[f.length," ",f.length<2?"task":"tasks"," completed"]}),Object(u.jsx)(j,{todos:f,renderItem:function(e){return Object(u.jsx)(b,{todo:e,removeTodo:O,updateCompletion:h},e.id)}})]}):null,f.length>0?Object(u.jsx)("button",{onClick:function(){o([]),p([])},className:"clear-btn",children:"Clear"}):null]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.7664080f.chunk.js.map