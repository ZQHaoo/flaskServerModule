(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d79b24c"],{"1a62":function(s,t,a){"use strict";a("dc31")},"9aa9":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s._self._c;return t("div",[t("a-modal",{attrs:{confirmLoading:s.loading,maskClosable:!1,width:950},on:{cancel:s.cancel,ok:s.confirm},model:{value:s.visible,callback:function(t){s.visible=t},expression:"visible"}},[t("div",{attrs:{slot:"title"},slot:"title"},[s._v("系统内商品")]),t("div",{staticClass:"modal-body"},[t("h3",[s._v("基本信息")]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("产品主图:")]),t("a-input",{staticStyle:{width:"630px"},model:{value:s.form.primary_image,callback:function(t){s.$set(s.form,"primary_image",t)},expression:"form.primary_image"}})],1)]),"add"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("系统内sku:")]),t("div",{staticStyle:{display:"flex","flex-direction":"column"}},[t("div",[t("span",{staticClass:"label",staticStyle:{width:"40px"}},[s._v("sku前缀编号:")]),t("a-input",{staticStyle:{width:"200px","margin-right":"5px"},model:{value:s.sku_front_name,callback:function(t){s.sku_front_name=t},expression:"sku_front_name"}})],1),s._l(s.attrList,(function(a,i){return t("div",{key:i,staticStyle:{display:"flex","flex-direction":"row","align-items":"center","margin-bottom":"5px"}},[t("span",{staticClass:"label",staticStyle:{width:"40px"}},[s._v("属性"+s._s(i+1)+":")]),s._l(a,(function(i,l){return t("div",{key:l},[t("a-input",{staticStyle:{width:"50px","margin-right":"5px"},model:{value:a[l],callback:function(t){s.$set(a,l,t)},expression:"attr[index_attr]"}})],1)})),t("a-button",{attrs:{icon:"edit",size:"small"},on:{click:()=>s.addAttr(a)}},[s._v("添加属性")]),t("a-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:()=>s.delAttr(a)}},[s._v("删除属性")])],2)}))],2),t("a-button",{attrs:{icon:"edit",size:"small"},on:{click:s.addAttrList}},[s._v("添加属性集")]),t("a-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:s.delAttrList}},[s._v("删除属性集")])],1)]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("系统sku:")]),t("a-input",{staticStyle:{width:"630px"},model:{value:s.form.system_sku,callback:function(t){s.$set(s.form,"system_sku",t)},expression:"form.system_sku"}})],1)]):s._e(),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"90px"}},[s._v("参考重量:")]),t("a-input",{model:{value:s.form.reference_weight,callback:function(t){s.$set(s.form,"reference_weight",t)},expression:"form.reference_weight"}})],1),t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"90px"}},[s._v("参考价格:")]),t("a-input",{model:{value:s.form.reference_cost,callback:function(t){s.$set(s.form,"reference_cost",t)},expression:"form.reference_cost"}})],1)]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("采购链接:")]),t("div",s._l(s.purchase_links,(function(a,i){return t("div",{key:a+i},[t("span",[s._v("链接"+s._s(i+1)+"号. ")]),t("span",[s._v("链接:")]),t("a-input",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:s.purchase_links[i].link,callback:function(t){s.$set(s.purchase_links[i],"link",t)},expression:"purchase_links[index].link"}}),t("span",[s._v("备注:")]),t("a-input",{staticStyle:{width:"150px","margin-right":"10px"},model:{value:s.purchase_links[i].msg,callback:function(t){s.$set(s.purchase_links[i],"msg",t)},expression:"purchase_links[index].msg"}}),t("a-button",{staticStyle:{"margin-right":"10px",width:"95px"},attrs:{size:"small"},on:{click:function(t){return s.toTop(i)}}},[s._v("设为主供应商")]),t("a-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(t){return s.delpurchaseLink(i)}}},[s._v("删除")])],1)})),0)]),t("a-button",{attrs:{icon:"edit",size:"small"},on:{click:s.addPurchaseLink}},[s._v("新增采购链接")])],1),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("采购平台:")]),t("a-select",{staticStyle:{width:"215px"},attrs:{placeholder:"请选择"},model:{value:s.form.purchase_platform,callback:function(t){s.$set(s.form,"purchase_platform",t)},expression:"form.purchase_platform"}},s._l(s.options,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[s._v(s._s(a))])})),1)],1),"modify"==s.type?t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"115px"}},[s._v("供应商名称:")]),t("a-input",{model:{value:s.form.supplier_name,callback:function(t){s.$set(s.form,"supplier_name",t)},expression:"form.supplier_name"}})],1):s._e()]),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"71px"}},[s._v("是否同步:")]),t("a-radio-group",{model:{value:s.is_all,callback:function(t){s.is_all=t},expression:"is_all"}},[t("a-radio",{attrs:{value:!0}},[s._v("是")]),t("a-radio",{attrs:{value:!1}},[s._v("否")])],1),t("span",{staticStyle:{color:"red"}},[s._v(" *参考重量、参考价格、采购链接、供应商、采购平台 会同步同一批创建的所有产品*")])],1)]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label",staticStyle:{width:"100px"}},[s._v("是否同步主图:")]),t("a-radio-group",{model:{value:s.is_all_pic,callback:function(t){s.is_all_pic=t},expression:"is_all_pic"}},[t("a-radio",{attrs:{value:!0}},[s._v("是")]),t("a-radio",{attrs:{value:!1}},[s._v("否")])],1),t("span",{staticStyle:{color:"red"}},[s._v(" *主图 会同步同一批创建的所有产品*")])],1)]):s._e(),"modify"==s.type&"1688"==s.form.purchase_platform?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("同批标识id:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.father_id))])])]):s._e(),"modify"==s.type&"1688"==s.form.purchase_platform?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("1688产品id:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.productId_1688))])])]):s._e(),"modify"==s.type&"1688"==s.form.purchase_platform?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("1688样式id:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.specId_1688))])])]):s._e(),"modify"==s.type&"1688"==s.form.purchase_platform?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("1688 SKU:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.skuId_1688))])])]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("创建人员:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.creator?s.form.creator.name:"暂无"))])])]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("待采购量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.wait_for_purchase_quantity))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("在篮量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.in_basket_quantity))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("在途量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.in_transit_quantity))])])]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("库存量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.stock_quantity))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("出库量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.out_stock_quantity))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("丢失量:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.loss_quantity))])])]):s._e(),"modify"==s.type?t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("创建人员:")]),t("span",{staticClass:"value"},[s._v(s._s(s.form.creator?s.form.creator.name:"暂无"))])])]):s._e(),"modify"==s.type?t("div",[t("h3",{staticStyle:{"margin-top":"10px"}},[s._v("关联ozon商品信息")]),s._l(s.form.ozon_products,(function(a,i){return t("div",{key:i,staticStyle:{display:"flex"}},[t("span",{staticStyle:{"margin-right":"8px"}},[s._v(s._s(i+1)+".")]),t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("img",{staticStyle:{width:"80px"},attrs:{src:a.primary_image,alt:""}})])]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("id:")]),t("span",{staticClass:"value"},[s._v(s._s(a.id))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("名称:")]),t("span",{staticClass:"value"},[s._v(s._s(a.name))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("价格:")]),t("span",{staticClass:"value"},[s._v(s._s(a.price))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("货币信息:")]),t("span",{staticClass:"value"},[s._v(s._s(a.currency_code))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("offer_id:")]),t("span",{staticClass:"value"},[s._v(s._s(a.offer_id))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("product_id:")]),t("span",{staticClass:"value"},[s._v(s._s(a.product_id))])]),t("div",{staticClass:"columns"},[t("span",{staticClass:"label"},[s._v("sku:")]),t("span",{staticClass:"value"},[s._v(s._s(a.sku))])])])])])}))],2):s._e()])])],1)},l=[],e=(a("14d9"),a("0643"),a("2382"),a("c356")),c=a("f64c"),n={name:"FormModal",props:["visible","form","type"],model:{prop:"visible",event:"cancel"},data(){return{loading:!1,sku_front_name:"",options:["pdd","1688","线下"],attrList:[],purchase_links:this.form.purchase_link?JSON.parse(this.form.purchase_link):[],ori_data:"",is_all:!1,is_all_pic:!1}},computed:{},watch:{purchase_links:{handler(s){this.form.purchase_link=JSON.stringify(s)},deep:!0},visible(s){this.purchase_links=this.form.purchase_link?JSON.parse(this.form.purchase_link):[]}},methods:{confirm(){if("add"==this.type){function s(s){let t=[];function a(i,l){if(l!==s.length)for(let t=0;t<s[l].length;t++)a([...i,s[l][t]],l+1);else t.push(i.join("-"))}return a([],0),t}let t=s(this.attrList.filter(s=>s.length>0));Object(e["b"])({...this.form,system_skus:t,sku_front:this.sku_front_name}).then(s=>{c["a"].success(s.msg),this.$emit("update",!1)})}else"modify"==this.type&&Object(e["n"])({...this.form,is_all:this.is_all,is_all_pic:this.is_all_pic}).then(s=>{c["a"].success(s.msg),this.$emit("update",!1)})},cancel(){this.$emit("cancel",!1)},addAttrList(){this.attrList.push([])},delAttrList(){this.attrList.pop()},addAttr(s){s.push("")},delAttr(s){s.pop()},addPurchaseLink(){this.purchase_links.push({link:"",msg:""})},delpurchaseLink(s){this.purchase_links.splice(s,1)},toTop(s){const t=this.purchase_links.splice(s,1)[0];this.purchase_links.unshift(t)}}},o=n,r=(a("1a62"),a("2877")),p=Object(r["a"])(o,i,l,!1,null,"64d8c7b5",null);t["default"]=p.exports},dc31:function(s,t,a){}}]);
//# sourceMappingURL=chunk-3d79b24c.ac8b5323.js.map