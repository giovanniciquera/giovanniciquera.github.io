webpackJsonp([1],{Lz5R:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},n={name:"app",components:{Navbar:i("VU/8")(null,o,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=i("VU/8")(n,s,!1,function(e){i("R4uL")},null,null).exports,r=i("/ocq"),p=i("Sazm"),c=i.n(p),d=(i("3VHS"),c.a.initializeApp({apiKey:"AIzaSyAq7oCup80D7mQmgT1u82Mol4fnSS_ayYs",authDomain:"traversy-employee.firebaseapp.com",databaseURL:"https://traversy-employee.firebaseio.com",projectId:"traversy-employee",storageBucket:"traversy-employee.appspot.com",messagingSenderId:"1043937440409"}),c.a.firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;d.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){console.log(t.data());var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,position:t.data().position,dept:t.data().dept};e.employees.push(i)})}).catch()}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n         "+e._s(t.employee_id)+": "+e._s(t.name)+"\n         "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},v=i("VU/8")(m,u,!1,function(e){i("Lz5R")},"data-v-eb62ab3c",null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,position:null,dept:null}},methods:{saveEmployee:function(){var e=this;d.collection("employees").add({employee_id:this.employee_id,name:this.name,position:this.position,dept:this.dept}).then(function(t){e.$router.push("/")}).catch(function(e){return console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("New Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee #")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Position")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v("Dept.")])])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},f=i("VU/8")(_,h,!1,function(e){i("vwBx")},"data-v-d1c5e5cc",null).exports,y={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.position=e.data().position,t.dept=e.data().dept})})}).catch()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.position=t.data().position,e.dept=t.data().dept})}).catch()},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})}).catch()}}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"view-employee"}},[t("ul",{staticClass:"collection with-header"},[t("li",{staticClass:"collection-header"},[t("h4",[this._v(this._s(this.name))])]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Employee #"+this._s(this.employee_id))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Position: "+this._s(this.position))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v("Dept.: "+this._s(this.dept))])]),this._v(" "),t("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[this._v("Back")]),this._v(" "),t("button",{staticClass:"btn red",attrs:{to:"/"},on:{click:this.deleteEmployee}},[this._v("Delete")]),this._v(" "),t("div",{staticClass:"fixed-action-btn"},[t("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:this.employee_id}}}},[t("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},g=i("VU/8")(y,C,!1,function(e){i("wIrc")},"data-v-6de430ef",null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,position:null,dept:null}},beforeRouteEnter:function(e,t,i){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.position=e.data().position,t.dept=e.data().dept})})}).catch()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.position=t.data().position,e.dept=t.data().dept})}).catch()},updateEmployee:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,position:e.position,dept:e.dept})})}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})}).catch()}}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},E=i("VU/8")(w,b,!1,function(e){i("lZmB")},"data-v-27945b22",null).exports;a.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:f},{path:"/edit/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,template:"<App/>",components:{App:l}})},R4uL:function(e,t){},lZmB:function(e,t){},vwBx:function(e,t){},wIrc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e2e7924d15b53362e422.js.map