(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-846bf214"],{"7ec7":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-golden-layout",{attrs:{config:t.config,synced:t.synced}},[n("test-table")],1)],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"test"}},[n("table",{ref:"table"},[t._m(0),t._m(1),t._m(2)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(" ")]),n("td",[t._v(" ")]),n("td",[t._v(" ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(" ")]),n("td",[t._v(" ")]),n("td",[t._v(" ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(" ")]),n("td",[t._v(" ")]),n("td",[t._v(" ")])])}],i={name:"TestTable",props:{},data:function(){return{tds:"",container:[],flag:[]}},mounted:function(){this.highLight()},methods:{highLight:function(){var t=this;this.$bus.$on("transmit",(function(e,n){if(t.$refs.table&&"test-table"===n.text){t.container=e;for(var o=t.$refs.table,c=o.cloneNode(!0),a=c.children,s=function(t){for(var e=a[t].children,n=function(t){e[t].onclick=function(){e[t].classList.add("active")}},o=0;o<e.length;o++)n(o)},i=0;i<a.length;i++)s(i);e.getElement().append(c)}}))},_hight:function(t){t.target.classList.toggle("active"),this._serialize()},_serialize:function(){for(var t="",e=0;e<this.tds.length;e++)t+=this.tds[e].classList.contains("active")?"1":"0";this.container.extendState({tiles:t})},_applyState:function(t){for(var e=0;e<this.tds.length;e++)"1"===t[e]&&this.tds[e].classList.add("active")}}},l=i,r=(n("c64b"),n("2877")),u=Object(r["a"])(l,a,s,!1,null,"beeecffa",null),p=u.exports,f={name:"SyncedLayouts",components:{TestTable:p},data:function(){return{synced:!0,wrapp:"",config:{content:[{type:"row",content:[{type:"stack",width:50,content:[{type:"component",componentName:"example1",componentState:{text:"test-table"},title:"Component 1"},{type:"component",componentName:"example2",componentState:{text:"test-table"},title:"Component 2"}]},{type:"column",content:[{type:"component",componentName:"testComponent1",componentState:{text:"test-table"}},{type:"component",componentName:"testComponent2",componentState:{text:"test-table"}}]}]}]}}}},d=f,m=Object(r["a"])(d,o,c,!1,null,null,null);e["default"]=m.exports},c64b:function(t,e,n){"use strict";n("e247")},e247:function(t,e,n){}}]);