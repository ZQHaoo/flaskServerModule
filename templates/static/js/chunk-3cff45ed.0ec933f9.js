(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cff45ed"],{4640:function(t,e,a){"use strict";a("a482")},a482:function(t,e,a){},ad27:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("a-card",{attrs:{title:"采购订单管理"}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{staticStyle:{"max-width":"200px","margin-bottom":"12px"},attrs:{span:24}},[e("a-input",{attrs:{placeholder:"关键字查询..",allowClear:""},on:{pressEnter:t.search},model:{value:t.searchForm.keyWord,callback:function(e){t.$set(t.searchForm,"keyWord",e)},expression:"searchForm.keyWord"}})],1),e("a-col",{staticStyle:{width:"100px","margin-bottom":"12px"},attrs:{span:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),e("a-col",{staticStyle:{"max-width":"200px","margin-bottom":"12px","margin-right":"10px"},attrs:{span:24}},[e("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},t._l(t.options_status,(function(a){return e("a-select-option",{key:a,attrs:{value:a}},[t._v(t._s(a))])})),1)],1),e("a-col",{staticStyle:{"max-width":"200px","margin-bottom":"12px","margin-right":"10px"},attrs:{span:24}},[e("a-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:t.searchForm.purchase_platform,callback:function(e){t.$set(t.searchForm,"purchase_platform",e)},expression:"searchForm.purchase_platform"}},t._l(t.options_platform,(function(a){return e("a-select-option",{key:a,attrs:{value:a}},[t._v(t._s(a))])})),1)],1)],1),e("a-row",{staticStyle:{"margin-top":"12px"}},[e("a-table",{attrs:{size:"small",columns:t.columns,dataSource:t.items,rowKey:"id",loading:t.loading,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"posting_numbers",fn:function(a,r){return e("div",{},t._l(JSON.parse(r.posting_numbers),(function(a,r){return e("div",{key:r+100},[e("span",{staticStyle:{"font-weight":"700"}},[t._v(t._s(r+1)+".")]),e("span",{staticStyle:{color:"green"}},[t._v(" "+t._s(a.value)+" ")]),e("span",{staticStyle:{"margin-left":"20px","font-weight":"700"}},[t._v("状态：")]),e("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(a.signed)+" ")]),e("hr",{staticStyle:{"margin-top":"0"}})])})),0)}},{key:"system_product",fn:function(a,r){return e("div",{},[r.system_product?e("div",[e("span",[t._v(" SKU: ")]),t._v(" "),e("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(r.system_product.system_sku)+" ")]),e("span",[t._v(" 库存量: ")]),t._v(" "),e("span",{staticStyle:{color:"green"}},[t._v(t._s(r.system_product.stock_quantity))]),e("span",[t._v(" 缺货量: ")]),t._v(" "),e("span",{staticStyle:{color:"green"}},[t._v(t._s(r.system_product.omitted_quantity))]),e("span",[t._v(" 在途量: ")]),t._v(" "),e("span",{staticStyle:{color:"green"}},[t._v(t._s(r.system_product.in_transit_quantity))]),e("span",[t._v(" 供应商: ")]),t._v(" "),e("span",{staticStyle:{color:"green"}},[t._v(t._s(r.system_product.supplier_name))])]):t._e()])}},{key:"system_product.purchase_link",fn:function(a,r){return e("div",{},[e("div",t._l(JSON.parse(r.system_product.purchase_link),(function(a,r){return e("div",{key:r+100},[e("span",[t._v(" "+t._s(r+1)+". ")]),e("a",{attrs:{href:a,target:"_blank"}},[t._v(" "+t._s(a)+" ")]),e("hr")])})),0)])}},{key:"action",fn:function(a,r){return e("div",{},[e("a-button-group",[e("a-button",{attrs:{icon:"edit",size:"small"},on:{click:function(e){return t.openFormModal(r)}}},[t._v("查看")])],1)],1)}}])})],1)],1),e("form-modal",{attrs:{form:t.targetItem},on:{update:t.update},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)},n=[],s=a("f87e"),o={name:"Warehouse",components:{FormModal:()=>a.e("chunk-51905bf3").then(a.bind(null,"7792"))},data(){return{columns:[{title:"采购单ID",dataIndex:"id"},{title:"采购单号",dataIndex:"purchase_id"},{title:"国内运单号",dataIndex:"posting_numbers",scopedSlots:{customRender:"posting_numbers"},width:200},{title:"商品数量",dataIndex:"quantity"},{title:"已签收数量",dataIndex:"quantity_stock_in"},{title:"采购价格",dataIndex:"price"},{title:"物流状态",dataIndex:"logistics_status"},{title:"采购平台",dataIndex:"purchase_platform"},{title:"采购状态",dataIndex:"status"},{title:"系统内商品",dataIndex:"system_product",scopedSlots:{customRender:"system_product"},width:200},{title:"采购链接",dataIndex:"system_product.purchase_link",scopedSlots:{customRender:"system_product.purchase_link"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"156px"}],searchForm:{start:0,limit:15,keyWord:"",status:"全部",purchase_platform:"1688",supplier_name:""},pagination:{current:1,total:0,pageSize:15},loading:!1,items:[],visible:!1,targetItem:{},form:{},importLoading:!1,options_status:["全部","待采购","运输中","已完成","有异常","已作废"],options_platform:["1688","pdd","线下"]}},watch:{"searchForm.purchase_platform"(t,e){this.loading=!0,this.pagination={current:1,total:0,pageSize:15,position:"bottom"},this.list()},"searchForm.status"(t,e){this.loading=!0,this.pagination={current:1,total:0,pageSize:15,position:"bottom"},this.list()}},computed:{},methods:{initialize(){this.list()},list(){this.loading=!0,Object(s["g"])(this.searchForm).then(t=>{this.pagination.total=t.data.count,this.items=t.data.data}).finally(()=>{this.loading=!1})},update(){this.visible=!1,this.list()},search(){this.searchForm.start=0,this.pagination.current=1,this.list()},openFormModal(t){this.targetItem={...t},this.visible=!0},tableChange(t,e,a){this.searchForm.start=(t.current-1)*this.pagination.pageSize,this.pagination.current=t.current,this.list()},getDataWithSupplier(t){this.searchForm.supplier_name=t,this.list()}},mounted(){this.initialize()}},i=o,c=(a("4640"),a("2877")),u=Object(c["a"])(i,r,n,!1,null,"06f43c5c",null);e["default"]=u.exports},f87e:function(t,e,a){"use strict";a.d(e,"g",(function(){return n})),a.d(e,"i",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"l",(function(){return i})),a.d(e,"j",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return l})),a.d(e,"c",(function(){return p})),a.d(e,"m",(function(){return h})),a.d(e,"b",(function(){return m})),a.d(e,"n",(function(){return _})),a.d(e,"h",(function(){return f})),a.d(e,"a",(function(){return g}));var r=a("b775");function n(t){return Object(r["a"])({url:"/purchase_order/getData",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/purchase_order/getWaitForPurchaseOrderSupplier",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/purchase_order/getDataInPurchaseMode",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/purchase_order/updateData",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/purchase_order/modifyData",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/purchase_order/operationModifyData",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/purchase_order/fillThePurchaseIdForPurchaseOrders",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/purchase_order/fillThePurchaseIdForPurchaseOrder",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/purchase_order/cancleThePurchaseOrder",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/purchase_order/updatePurchaseOrdersIn1688WithAPI",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/purchase_order/buyPurchaseProductIn1688WithAPI",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/pic/upload",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}})}function f(t){return Object(r["a"])({url:"/purchase_product/getData",method:"get",params:t})}function g(t){return Object(r["a"])({url:"/purchase_product/addData",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-3cff45ed.0ec933f9.js.map