"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[792],{1792:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,c,i,u,a,s,l,d,m,h=r(2791),f=r(3855),p=r(4270),x=r(5861),b=r(4687),g=r.n(b),w=r(168),v=r(5867),j=v.ZP.li(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Z=v.ZP.button(o||(o=(0,w.Z)(["\n  width: 100px;\n  margin-left: auto;\n  padding: ",";\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 4px;\n  color: ",";\n  &:hover,\n  &:focus {\n    color: ",";\n    background: ",";\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red})),k=v.ZP.span(c||(c=(0,w.Z)(["\n  background: ",";\n  padding: ",";\n  border-radius: 4px;\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.white})),y=r(184),C=function(n){var e=n.name,r=n.number,t=n.id,o=n.onClick;return(0,y.jsxs)(j,{children:[(0,y.jsxs)(k,{children:[e,": ",r]}),(0,y.jsx)(Z,{onClick:function(){return o({id:t,name:e,number:r})},children:"Delete"})]})},P=v.ZP.ul(i||(i=(0,w.Z)(["\n  width: 450px;\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: ",";\n  border: 2px solid ",";\n  border-radius: 4px;\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.blue})),A=r(8560),L=r(6916),q=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},S=function(n){return n.filter.filter},T=(0,L.P1)([q,S],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),_=r(6052),I=r(5218),N=function(){var n=(0,A.v9)(T),e=(0,f.I0)(),r=function(){var n=(0,x.Z)(g().mark((function n(r){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e((0,_.GK)(r.id)).unwrap();case 3:I.Am.success("".concat(r.name," has been deleted from your contacts")),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),I.Am.error("Ooops! Something went wrong. Try refreshing the page");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsx)(P,{children:n.map((function(n){return(0,y.jsx)(C,{id:n.id,name:n.name,number:n.number,onClick:r},n.id)}))})},O=v.ZP.input(u||(u=(0,w.Z)(["\n  width: 250px;\n  border: 2px solid ",";\n  border-radius: 4px;\n"])),(function(n){return n.theme.colors.blue})),R=r(4808),E=function(){var n=(0,f.I0)(),e=(0,f.v9)(S);return(0,y.jsx)(O,{type:"text",name:"name",value:e,onChange:function(e){return n((0,R.a)(e.target.value))},placeholder:"Find contacts by name",required:!0})},K=r(9825),W=r(5705),z=(0,v.ZP)(W.l0)(a||(a=(0,w.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3)})),B=(0,v.ZP)(W.Bc)(s||(s=(0,w.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.red})),D=(0,v.ZP)(W.gN)(l||(l=(0,w.Z)(["\n  width: 250px;\n  border: 2px solid ",";\n  border-radius: 4px;\n"])),(function(n){return n.theme.colors.blue})),G=v.ZP.label(d||(d=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  color: ",";\n  font-weight: 500;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),J=v.ZP.button(m||(m=(0,w.Z)(["\n  width: 150px;\n  padding: ",";\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 4px;\n  color: ",";\n  &:hover,\n  &:focus {\n    color: ",";\n    background: ",";\n  }\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white})),M=r(6727),V=M.Ry().shape({name:M.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:M.Z_().min(7,"Too Short!").max(9,"Too Long!").required("Required")}),Y=function(){var n=(0,f.I0)(),e=(0,f.v9)(q),r=function(){var r=(0,x.Z)(g().mark((function r(t){var o;return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.name,!e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))){r.next=5;break}return I.Am.error("Contact with the name ".concat(o," already exists.")),r.abrupt("return");case 5:return r.prev=5,r.next=8,n((0,_.uK)(t)).unwrap();case 8:I.Am.success("".concat(t.name," added to your contacts")),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(5),I.Am.error("Ooops! Something went wrong. Try refreshing the page");case 14:case"end":return r.stop()}}),r,null,[[5,11]])})));return function(n){return r.apply(this,arguments)}}();return(0,y.jsx)("div",{children:(0,y.jsx)(W.J9,{initialValues:{name:"",number:""},validationSchema:V,onSubmit:function(n,e){r(n),e.resetForm()},children:(0,y.jsxs)(z,{children:[(0,y.jsxs)(G,{htmlFor:"name",children:["NAME\xa0\xa0\xa0\xa0",(0,y.jsx)(D,{type:"text",id:"name",name:"name",placeholder:"Write name"}),(0,y.jsx)(B,{name:"name",component:"span"})]}),(0,y.jsxs)(G,{htmlFor:"number",children:["Number\xa0",(0,y.jsx)(D,{type:"tel",id:"number",name:"number",placeholder:"Write number"}),(0,y.jsx)(B,{name:"number",component:"span"})]}),(0,y.jsx)(J,{type:"submit",style:{margin:"0 auto"},children:"Add contact"})]})})})};function H(){var n=(0,f.I0)(),e=(0,f.v9)(F);return(0,h.useEffect)((function(){n((0,_.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsx)(Y,{}),(0,y.jsx)(E,{}),(0,y.jsx)("div",{children:e&&(0,y.jsx)(K.O,{})}),(0,y.jsx)(N,{})]})}}}]);
//# sourceMappingURL=792.8a4d00b6.chunk.js.map