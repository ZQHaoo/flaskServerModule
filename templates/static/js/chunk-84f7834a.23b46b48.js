(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84f7834a"],{5455:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("a-card",{attrs:{title:"系统内商品管理"}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{staticStyle:{"max-width":"200px","margin-bottom":"12px"},attrs:{span:24}},[e("a-input",{attrs:{placeholder:"关键字查询...",allowClear:""},on:{pressEnter:t.search},model:{value:t.searchForm.keyWord,callback:function(e){t.$set(t.searchForm,"keyWord",e)},expression:"searchForm.keyWord"}})],1),e("a-col",{staticStyle:{width:"100px","margin-bottom":"12px"},attrs:{span:24}},[e("a-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("查询")])],1),e("a-col",{staticStyle:{width:"100px","margin-bottom":"12px"},attrs:{span:24}},[e("a-button",{attrs:{type:"primary",icon:"edit"},on:{click:t.add}},[t._v("新增")])],1),e("a-col",{staticStyle:{width:"100px","margin-bottom":"12px"},attrs:{span:24}},[e("a-button",{attrs:{type:"primary",icon:"edit"},on:{click:t.add1688}},[t._v("1688新增")])],1)],1),e("a-row",{staticStyle:{"margin-top":"12px"}},[e("a-table",{attrs:{size:"small",columns:t.columns,dataSource:t.items,rowKey:"id",loading:t.loading,pagination:t.pagination},on:{change:t.tableChange},scopedSlots:t._u([{key:"primary_image",fn:function(t,a){return e("div",{},[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:a.primary_image,alt:""}})])}},{key:"purchase_link",fn:function(a,r){return e("div",{},t._l(JSON.parse(r.purchase_link),(function(a,r){return e("div",{key:r+100},[e("span",[t._v(" "+t._s(r+1)+". ")]),e("a",{attrs:{href:a.link,target:"_blank"}},[t._v(" "+t._s(r+1+"号链接")+" ")]),e("span",[t._v("备注：")]),e("span",[t._v(" "+t._s(a.msg)+" ")]),e("hr")])})),0)}},{key:"action",fn:function(a,r){return e("div",{},[e("a-button-group",[e("a-button",{attrs:{icon:"edit",size:"small"},on:{click:function(e){return t.openFormModal(r)}}},[t._v("修改")]),e("a-popconfirm",{attrs:{title:"确定删除吗"},on:{confirm:function(e){return t.destroy(r.id)}}},[e("a-button",{attrs:{type:"danger",icon:"delete",size:"small"}},[t._v("删除")])],1)],1)],1)}}])})],1)],1),e("form-modal",{attrs:{visible:t.visible,form:t.targetItem,type:t.type},on:{update:t.update},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}}),e("form-add-with-data",{attrs:{visible:t.add_with_data_visible,form:t.targetItem},on:{update:t.update},model:{value:t.add_with_data_visible,callback:function(e){t.add_with_data_visible=e},expression:"add_with_data_visible"}})],1)},n=[],i=a("c356"),o={name:"SystemProduct",components:{FormModal:()=>a.e("chunk-3d79b24c").then(a.bind(null,"9aa9")),FormAddWithData:()=>a.e("chunk-7fe8e003").then(a.bind(null,"dee7"))},data(){return{columns:[{title:"商品ID",dataIndex:"id"},{title:"商品主图",dataIndex:"primary_image",key:"primary_image",scopedSlots:{customRender:"primary_image"},width:"80px"},{title:"system_sku",dataIndex:"system_sku"},{title:"同批标识id",dataIndex:"father_id"},{title:"参考重量",dataIndex:"reference_weight"},{title:"参考价格",dataIndex:"reference_cost"},{title:"采购链接",dataIndex:"purchase_link",scopedSlots:{customRender:"purchase_link"},width:"250px"},{title:"采购平台",dataIndex:"purchase_platform"},{title:"供应商名称",dataIndex:"supplier_name"},{title:"采购量",dataIndex:"wait_for_purchase_quantity",customRender:(t,e,a)=>"0"!=t?"-"+t:t},{title:"在篮量",dataIndex:"in_basket_quantity"},{title:"在途量",dataIndex:"in_transit_quantity"},{title:"库存量",dataIndex:"stock_quantity"},{title:"出库量",dataIndex:"out_stock_quantity"},{title:"创建人",dataIndex:"creator",customRender:(t,e,a)=>t?t.name:"未绑定"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"156px"}],searchForm:{start:0,limit:15,keyWord:""},pagination:{current:1,total:0,pageSize:15},loading:!1,items:[],visible:!1,add_with_data_visible:!1,targetItem:{},form:{},importLoading:!1,type:""}},computed:{},methods:{initialize(){this.list()},list(){this.loading=!0,Object(i["m"])(this.searchForm).then(t=>{this.pagination.total=t.data.count,this.items=t.data.data}).finally(()=>{this.loading=!1})},update(){this.visible=!1,this.add_with_data_visible=!1,this.list()},search(){this.searchForm.start=0,this.pagination.current=1,this.list()},add(){this.type="add",this.targetItem={},this.visible=!0},openFormModal(t){this.type="modify",this.targetItem={...t},this.visible=!0},add1688(){this.targetItem={},this.add_with_data_visible=!0},destroy(t){Object(i["f"])({system_product_id:t}).then(t=>{this.$message.success(t.msg),this.list()})},tableChange(t,e,a){this.searchForm.start=(t.current-1)*this.pagination.pageSize,this.pagination.current=t.current,this.list()}},mounted(){this.initialize()},activated(){this.initialize()}},d=o,s=a("2877"),u=Object(s["a"])(d,r,n,!1,null,null,null);e["default"]=u.exports},c356:function(t,e,a){"use strict";a.d(e,"k",(function(){return n})),a.d(e,"h",(function(){return i})),a.d(e,"j",(function(){return o})),a.d(e,"e",(function(){return d})),a.d(e,"c",(function(){return s})),a.d(e,"g",(function(){return u})),a.d(e,"o",(function(){return c})),a.d(e,"i",(function(){return l})),a.d(e,"l",(function(){return m})),a.d(e,"d",(function(){return p})),a.d(e,"m",(function(){return h})),a.d(e,"b",(function(){return _})),a.d(e,"a",(function(){return f})),a.d(e,"n",(function(){return b})),a.d(e,"f",(function(){return g}));var r=a("b775");function n(t){return Object(r["a"])({url:"/ozon_order/getData",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/ozon_order/getDataToExcel",method:"get",params:t,responseType:"blob"})}function o(t){return Object(r["a"])({url:"/ozon_order/getOverWeightOzonOrderData",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/ozon_order/delOzonOrderOfOverWeight",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/ozon_order/auditOrder",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/ozon_order/freezeOrder",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/ozon_order/unfreezeOrder",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/purchase_order/operationGetErrorData",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/ozon_product/getData",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/ozon_product/bindSystemProducts",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/system_product/getData",method:"get",params:t})}function _(t){return Object(r["a"])({url:"/system_product/addData",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/system_product/addDataWith1688Data",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/system_product/modifyData",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/system_product/deleteData",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-84f7834a.23b46b48.js.map