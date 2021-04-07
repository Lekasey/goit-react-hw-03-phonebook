(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=(n(16),n(11)),i=n(3),u=n(4),l=n(6),b=n(5),d=(n(17),n(0)),h=function(t){var e=t.name,n=t.number,a=t.children;return Object(d.jsxs)("li",{className:"ContactListItem",children:[Object(d.jsxs)("p",{children:[e,": ",Object(d.jsx)("span",{children:n})]}),a]})},j=(n(19),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsx)(h,{name:a,number:c,children:Object(d.jsx)("button",{className:"button",type:"button",onClick:function(){return n(e)},children:"Delete"})},e)}))})}),m=(n(20),function(t){var e=t.value,n=t.onChange;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{className:"filterInput",type:"text",name:"filter",value:e,onChange:n})]})})}),f=n(9),p=n(10),O=n.n(p),v=(n(29),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.submitHandler=function(e){e.preventDefault();var n={id:O.a.generate(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsxs)("form",{className:"form",onSubmit:this.submitHandler,children:[Object(d.jsxs)("label",{className:"label",children:["Name",Object(d.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),Object(d.jsxs)("label",{className:"label",children:["Number",Object(d.jsx)("input",{className:"input",type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",value:n,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component)),C=(n(30),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.isContactPresent=function(e){var n=e.name.toLowerCase();0===t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n)})).length?t.addContact(e):alert("".concat(e.name," is already in contacts"))},t.addContact=function(e){t.setState((function(t){return{contacts:[e].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(v,{onSubmit:this.isContactPresent}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(m,{value:n,onChange:this.changeFilter}),e.length>0?Object(d.jsx)(j,{contacts:c,onDeleteContact:this.deleteContact}):"No contacts added yet"]})]})}}]),n}(a.Component));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cfa0c543.chunk.js.map