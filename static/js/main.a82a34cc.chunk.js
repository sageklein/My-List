(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n.n(c),r=n(28),i=n.n(r),o=n(16),j=n(7),l=n(10),u=n(45),d=n(15),b=(n(36),Object(c.createContext)()),h=function(e){var t=sessionStorage.getItem("userProfile"),n=Object(c.useState)(null!=t),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),h=j[0],O=j[1],x=new d.a.auth.GoogleAuthProvider;Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){O(!0)}))}),[]);return Object(s.jsx)(b.Provider,{value:{isLoggedIn:r,login:function(e,t){return d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){sessionStorage.setItem("userProfile",JSON.stringify(e.user)),i(!0)}))},logout:function(){return d.a.auth().signOut().then((function(){sessionStorage.clear(),i(!1)}))},register:function(e,t){return d.a.auth().createUserWithEmailAndPassword(e.email,t).then((function(e){console.log("savedU",e),sessionStorage.setItem("userProfile",JSON.stringify(e.user)),i(!0)}))},signInWithGoogle:function(){return d.a.auth().signInWithPopup(x).then((function(e){console.log("savedU",e),sessionStorage.setItem("userProfile",JSON.stringify(e.user)),i(!0)}))}},children:h?e.children:Object(s.jsx)(u.a,{className:"app-spinner dark"})})},O=n(46),x=n(47);function m(){var e=Object(j.g)(),t=Object(c.useContext)(b).login,n=Object(c.useContext)(b).signInWithGoogle,a=Object(c.useState)(),r=Object(l.a)(a,2),i=r[0],u=r[1],d=Object(c.useState)(),h=Object(l.a)(d,2),m=h[0],g=h[1];return Object(s.jsx)(O.a,{className:"Form",onSubmit:function(n){n.preventDefault(),t(i,m).then((function(){return e.push("/")})).catch((function(){return alert("Invalid email or password")}))},children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)(O.a.Group,{controlId:"formPlaintextPassword",children:[Object(s.jsx)(O.a.Label,{children:"Email: "}),Object(s.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(s.jsxs)(O.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(s.jsx)(O.a.Label,{children:"Password: "}),Object(s.jsx)(O.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return g(e.target.value)}})]}),Object(s.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"}),Object(s.jsx)("div",{className:"or",children:"- or -"}),Object(s.jsx)(x.a,{onClick:function(){n().then((function(t){return e.push("/")}))},variant:"link",children:"Login with Google"}),Object(s.jsx)("em",{children:Object(s.jsxs)("div",{className:"register",children:["Not registered? ",Object(s.jsx)(o.b,{to:"register",children:"Register"})]})})]})})}function g(){var e=Object(j.g)(),t=Object(c.useContext)(b).register,n=Object(c.useState)(),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(),u=Object(l.a)(o,2),d=u[0],h=u[1],m=Object(c.useState)(),g=Object(l.a)(m,2),f=g[0],p=g[1],v=Object(c.useState)(),y=Object(l.a)(v,2),w=y[0],C=y[1];return Object(s.jsx)(O.a,{className:"Form",onSubmit:function(n){(n.preventDefault(),f&&f!==w)?alert("Passwords don't match. Do better."):t({name:r,email:d},f).then((function(){return e.push("/")}))},children:Object(s.jsxs)("fieldset",{children:[Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{children:"Name"}),Object(s.jsx)(O.a.Control,{id:"name",type:"text",onChange:function(e){return i(e.target.value)}})]}),Object(s.jsxs)(O.a.Group,{controlId:"email",children:[Object(s.jsx)(O.a.Label,{children:"Email"}),Object(s.jsx)(O.a.Control,{type:"text",onChange:function(e){return h(e.target.value)}})]}),Object(s.jsxs)(O.a.Group,{controlId:"password",children:[Object(s.jsx)(O.a.Label,{children:"Password"}),Object(s.jsx)(O.a.Control,{type:"password",onChange:function(e){return p(e.target.value)}})]}),Object(s.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(s.jsx)(O.a.Label,{children:"Confirm Password"}),Object(s.jsx)(O.a.Control,{type:"password",onChange:function(e){return C(e.target.value)}})]}),Object(s.jsx)(x.a,{variant:"primary",type:"submit",children:"Register"})]})})}var f=n(30),p="https://christmaslist-a8957-default-rtdb.firebaseio.com/",v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("".concat(p,"/christList.json")).then((function(e){return e.json()})).then((function(e){console.log("data",e);var t=Object.keys(e).map((function(t,n){return e[t].fbid=t,e[t].checked=!1,e[t]}));console.log("newArray",t),r(t)}))}),[]);var i=function(e){console.log("event.target.id",e.target.id);var t=Object(f.a)(n);t.map((function(t){return t.fbid===e.target.id&&(t.checked=!t.checked),t})),r(t)};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{id:"checklist",children:n.map((function(e){return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("input",{id:e.fbid,type:"checkbox",checked:e.checked,onChange:i}),Object(s.jsx)("label",{htmlFor:e.fbid,children:e.title})]},e.fbid)}))})})},y=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h4",{children:"Add An Item to the Christmas List"})})};function w(){var e=Object(c.useContext)(b).isLoggedIn;return Object(s.jsx)("main",{children:Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.b,{path:"/",exact:!0,children:e?Object(s.jsx)(v,{}):Object(s.jsx)(j.a,{to:"/login"})}),Object(s.jsx)(j.b,{path:"/add",children:e?Object(s.jsx)(y,{}):Object(s.jsx)(j.a,{to:"/login"})}),Object(s.jsx)(j.b,{path:"/login",children:Object(s.jsx)(m,{})}),Object(s.jsx)(j.b,{path:"/register",children:Object(s.jsx)(g,{})})]})})}var C=function(){var e=Object(c.useContext)(b),t=(e.isLoggedIn,e.logout);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h4",{className:"niceList",children:"Nice List"}),Object(s.jsx)("a",{"aria-current":"page",className:"nav-link",style:{cursor:"pointer"},onClick:t,children:"Logout"})]})};var I=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"snow layer1 a"}),Object(s.jsx)("div",{className:"snow layer1"}),Object(s.jsx)("div",{className:"snow layer2 a"}),Object(s.jsx)("div",{className:"snow layer2"}),Object(s.jsx)("div",{className:"snow layer3 a"}),Object(s.jsx)("div",{className:"snow layer3"}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h1",{children:"Merry Christmas"}),Object(s.jsx)(o.a,{children:Object(s.jsxs)(h,{children:[Object(s.jsx)(C,{}),Object(s.jsx)(w,{})]})})]})]})})};n(43);d.a.initializeApp({apiKey:"AIzaSyDhYIu6EQI0Be8BBJXNTd80H_tffLCLGJQ",authDomain:"christmaslist-a8957.firebaseapp.com",databaseURL:"https://christmaslist-a8957-default-rtdb.firebaseio.com",projectId:"christmaslist-a8957",storageBucket:"christmaslist-a8957.appspot.com",messagingSenderId:"146934597776",appId:"1:146934597776:web:a443d3c3db4540260e3015",measurementId:"G-BF1404LWNQ"}),i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a82a34cc.chunk.js.map