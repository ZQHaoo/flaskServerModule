(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd48a77a"],{"060b":function(t,s,a){"use strict";a("dbb4")},3683:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",[s("a-modal",{attrs:{confirmLoading:t.loading,maskClosable:!1,width:800},on:{cancel:t.cancel,ok:t.confirm},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("小组信息")]),s("div",{staticClass:"modal-body"},[s("h3",[t._v("基本信息")]),"modify"==t.type?s("div",{staticClass:"row"},[s("div",{staticClass:"columns"},[s("span",{staticClass:"label",staticStyle:{width:"71px"}},[t._v("小组ID:")]),s("span",{staticClass:"value",staticStyle:{width:"630px"}},[t._v(" "+t._s(t.form.id)+" ")])])]):t._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"columns"},[s("span",{staticClass:"label",staticStyle:{width:"71px"}},[t._v("小组名称:")]),s("a-input",{staticStyle:{width:"630px"},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}})],1)]),"modify"==t.type?s("div",{staticClass:"row"},[s("div",{staticClass:"columns"},[s("span",{staticClass:"label",staticStyle:{width:"71px"}},[t._v("创建时间:")]),s("span",{staticClass:"value"},[t._v(t._s(t.form.create_time))])])]):t._e(),"modify"==t.type?s("div",{staticClass:"row"},[s("div",{staticClass:"columns"},[s("span",{staticClass:"label",staticStyle:{width:"71px"}},[t._v("修改时间:")]),s("span",{staticClass:"value",staticStyle:{width:"630px"}},[t._v(t._s(t.form.modify_time))])])]):t._e()])])],1)},e=[],l=a("8593"),c=a("f64c"),o={name:"FormModal",props:["visible","form","type"],model:{prop:"visible",event:"cancel"},data(){return{loading:!1}},computed:{},methods:{confirm(){"add"==this.type?Object(l["e"])(this.form).then(t=>{c["a"].success(t.msg),this.$emit("update",!1)}):"modify"==this.type&&Object(l["t"])(this.form).then(t=>{c["a"].success(t.msg),this.$emit("update",!1)})},cancel(){this.$emit("cancel",!1)}}},n=o,d=(a("060b"),a("2877")),m=Object(d["a"])(n,i,e,!1,null,"1702ec26",null);s["default"]=m.exports},dbb4:function(t,s,a){}}]);
//# sourceMappingURL=chunk-dd48a77a.0d83c20e.js.map