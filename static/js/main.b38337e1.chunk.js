(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__2Ezxg",input:"Filter_input__1lu8c",title:"Filter_title__17zL4"}},11:function(e,t,n){e.exports={container:"App_container__6bn1J",title:"App_title__3PhAF"}},16:function(e,t,n){e.exports={container:"Section_container__3Weus"}},2:function(e,t,n){e.exports={form__container:"Form_form__container__1u4v_",label:"Form_label__tM7gI",input:"Form_input__pxQLz",add__btn:"Form_add__btn__1XQ7s",name__input:"Form_name__input__3e7NF"}},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(13),i=n.n(r),s=n(14),o=n(17),l=n(5),u=n(6),m=n(8),b=n(7),d=n(4),h=n(15),j=n.n(h),_=n(2),p=n.n(_),f=n(0),O=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(d.a)({id:j.a.generate()},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",id:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:p.a.form__container,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:p.a.label,children:[Object(f.jsx)("span",{className:p.a.name__input,children:"Name"}),Object(f.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{className:p.a.label,children:[Object(f.jsx)("span",{className:p.a.name__input,children:"Number"}),Object(f.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",className:p.a.add__btn,children:"Add contact"})]})}}]),n}(a.Component),x=O,v=n(16),C=n.n(v);function g(e){var t=e.title,n=e.children;return Object(f.jsxs)("div",{className:C.a.container,children:[t&&Object(f.jsx)("h2",{className:"title",children:t}),n]})}var N=n(9),F=n.n(N);function S(e){var t=e.contactsList,n=e.onDeleteContact;return Object(f.jsx)("ul",{className:F.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(f.jsxs)("li",{className:F.a.item,children:[a,": ",c,Object(f.jsx)("button",{className:F.a.deleteBtn,onClick:function(){return n(t)},children:"Delete"})]},t)}))})}var y=n(10),A=n.n(y),L=function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{className:A.a.label,children:[Object(f.jsx)("span",{className:A.a.title,children:"Find contacts by name"}),Object(f.jsx)("input",{className:A.a.input,type:"text",value:t,onChange:n})]})},w=n(11),k=n.n(w),z=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formOnSubmitHandler=function(t){e.state.contacts.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[Object(s.a)({},t)])}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContact=function(){var t=e.state.filter.toLowerCase();return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.getFilteredContact();return Object(f.jsxs)("div",{className:k.a.container,children:[Object(f.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(f.jsx)(g,{children:Object(f.jsx)(x,{onSubmit:this.formOnSubmitHandler})}),Object(f.jsx)("h2",{className:k.a.title_contacts,children:"Contacts"}),Object(f.jsxs)(g,{children:[Object(f.jsx)(L,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(S,{contactsList:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),J=z;n(31);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.querySelector("#root"))},9:function(e,t,n){e.exports={item:"ContactsList_item__1L0GQ",deleteBtn:"ContactsList_deleteBtn__13JoH"}}},[[32,1,2]]]);
//# sourceMappingURL=main.b38337e1.chunk.js.map