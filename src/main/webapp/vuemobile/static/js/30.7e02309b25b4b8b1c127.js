webpackJsonp([30],{1202:function(e,t,n){"use strict";function a(e){n(1584)}Object.defineProperty(t,"__esModule",{value:!0});var i=(n(1469),n(1515)),s=n(1632),o=n(1),r=a,l=o(i.a,s.a,!1,r,"data-v-41ce95ca",null);t.default=l.exports},1469:function(e,t,n){"use strict";var a=n(6),i=n.n(a),s=n(197),o=n(83);s.j,s.c,s.k,s.l,s.i,s.d,s.m},1515:function(e,t,n){"use strict";var a=n(6),i=n.n(a),s=n(130),o=n(129),r=n(341),l=n(131),u=n(330),c=n(57),d=n(333),h=n(83);t.a={methods:{onChange:function(e){var t=this,n=_baseUrl+"/mobile/oa/getSignHistory.do";console.log("on-change",e);var a=new Date(Date.parse(e)).Format("yyyy-MM");if(null!==h.a.getSessionJSON(a)){for(var s=[],o=h.a.getSessionJSON(a),r=0;r<o.length;r++)e==o[r].date.split(" ")[0]&&s.push(o[r]);return void(this.hrdutyRegister=s)}this.$ajax({url:n,method:"post",params:{date:this.value}}).then(function(e){console.log(i()(e)),t.hrdutyRegister=e.data.data}).catch(function(e){console.log(e)})},onViewChange:function(e,t){0!=t&&(this.firstDate=e.firstCurrentMonthDate)},getMonthSignRecord:function(e){var t=this,n=new Date(Date.parse(e)).Format("yyyy-MM");if(console.info(n),null!==h.a.getSessionJSON(n))return console.info("缓存key:"+n),this.thisMonthSignData=h.a.getSessionJSON(n),void this.renderSignDate(this.thisMonthSignData);var a=_baseUrl+"/mobile/oa/getUserMonthSignRecord.do";this.$ajax({url:a,method:"POST",params:{date:e}}).then(function(e){e.data.success&&(t.thisMonthSignData=e.data.data,h.a.setSessionCache(n,i()(t.thisMonthSignData)),t.renderSignDate(t.thisMonthSignData))}).catch(function(e){console.log(e)})},getInOrOutFlag:function(e){return"1"==e?"签到":"签退"},getSignFlag:function(e){return"1"==e?"<正常>":"2"==e?"<迟到>":"<早退>"},renderSignDate:function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n].date.split(" ")[0];console.info("后台的数据:"+a),t.push(a)}console.info("签到的日期:"+t),this.buildSlotFn=function(e,n,a){return-1!=t.indexOf(a.formatedDate)?'<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>':'<div style="height:19px;"></div>'}}},data:function(){return{show:!0,value:"",listValue:"",range:!1,highlightWeekend:!1,return6Rows:!0,hideHeader:!1,hideWeekList:!1,replaceTextList:{},replace:!1,changeWeeksList:!1,weeksList:["日","一","二","三","四","五","六 "],useCustomFn:!1,buildSlotFn:function(){return""},disablePast:!1,disableFuture:!0,hrdutyRegister:[],showLastMonth:!0,showNextMonth:!0,thisMonthSignData:[],firstDate:"",renderOnChange:!0}},watch:{replace:function(e){this.replaceTextList=e?{TODAY:"今"}:{}},useCustomFn:function(e){this.buildSlotFn=e?function(e,t,n){return/9/.test(n.date)?'<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>':'<div style="height:19px;"></div>'}:function(){return""}},changeWeeksList:function(e){this.weeksList=e?["日","一","二","三","四","五","六 "]:["Su","Mo","Tu","We","Th","Fr","Sa"]},firstDate:function(e,t){this.getMonthSignRecord(e)}},components:{InlineCalendar:s.a,Group:o.a,XSwitch:r.a,Radio:l.a,XButton:u.a,Cell:c.a,Divider:d.a},created:function(){var e=new Date;this.firstDate=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDay()}}},1537:function(e,t,n){t=e.exports=n(327)(!0),t.push([e.i,".inline-calendar-demo[data-v-41ce95ca]{background:hsla(0,0%,100%,.9)}","",{version:3,sources:["E:/work/redxun/mobile/mobile/src/components/oa/SignHistory.vue"],names:[],mappings:"AACA,uCACE,6BAAqC,CACtC",file:"SignHistory.vue",sourcesContent:["\n.inline-calendar-demo[data-v-41ce95ca] {\n  background: rgba(255, 255, 255, 0.9);\n}\n"],sourceRoot:""}])},1584:function(e,t,n){var a=n(1537);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1169)("e22aae0a",a,!0)},1632:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("yd-layout",[n("yd-navbar",{attrs:{slot:"navbar",title:"签到记录"},slot:"navbar"},[n("a",{attrs:{slot:"left"},on:{click:e.goBack},slot:"left"},[n("yd-navbar-back-icon")],1)]),e._v(" "),n("div",[n("inline-calendar",{staticClass:"inline-calendar-demo",attrs:{"render-on-value-change":"",show:e.show,"start-date":"2016-04-01","end-date":"2018-05-30",range:e.range,"highlight-weekend":"true","return-six-rows":e.return6Rows,"hide-header":e.hideHeader,"hide-week-list":e.hideWeekList,"replace-text-list":e.replaceTextList,"weeks-list":e.weeksList,"render-function":e.buildSlotFn,"disable-past":e.disablePast,"disable-future":e.disableFuture,"show-last-month":e.showLastMonth,"show-next-month":e.showNextMonth},on:{"on-change":e.onChange,"on-view-change":e.onViewChange,"update:show":function(t){e.show=t}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("group",[n("cell",{attrs:{title:"当前日期",value:e.value}})],1),e._v(" "),n("yd-cell-group",e._l(e.hrdutyRegister,function(t){return n("yd-cell-item",{key:t.pkId},[n("span",{attrs:{slot:"left"},slot:"left"},[e._v(e._s(t.addresses)),n("br"),e._v(e._s(t.registerTime)+" "+e._s(e.getInOrOutFlag(t.inOffFlag))+" "+e._s(e.getSignFlag(t.regFlag)))]),e._v(" "),n("span",{attrs:{slot:"right"},slot:"right"},[e._v(e._s(t.userName))])])}))],1)],1)},i=[],s={render:a,staticRenderFns:i};t.a=s}});
//# sourceMappingURL=30.7e02309b25b4b8b1c127.js.map