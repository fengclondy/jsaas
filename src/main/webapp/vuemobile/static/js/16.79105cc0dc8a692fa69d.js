webpackJsonp([16],{1181:function(t,e,i){"use strict";function n(t){i(1595)}Object.defineProperty(e,"__esModule",{value:!0});var a=(i(1441),i(1487)),o=i(1643),s=i(1),r=n,l=s(a.a,o.a,!1,r,"data-v-6d1ea99f",null);e.default=l.exports},1208:function(t,e,i){"use strict";function n(t){i(1234)}var a=(i(1222),i(1226)),o=i(1238),s=i(1),r=n,l=s(a.a,o.a,!1,r,"data-v-21e34c0c",null);e.a=l.exports},1222:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1__assets_util_js__=__webpack_require__(83),_unused_webpack_default_export={name:"rx-boxs",props:{value:String,textField:String,valField:String,containstyle:String,allowSelect:{type:Boolean,default:!0},single:{type:Boolean,default:!1}},data:function(){return{list:[]}},activated:function(){this.resetData()},mounted:function(){this.setValue(this.value)},methods:{resetData:function(){this.list=[],console.log(0xe052e5a98dd)},removeSelect:function(t){this.list.splice(t,1);var e=this.getValue();this.$emit("input",e)},selectItem:function(t){t.selected=!t.selected},setValue:function(t){if(t){this.render(t);var e=this.getValue();this.$emit("input",e)}},render:function render(value){this.single&&(this.list=[]);for(var json=eval("("+value+")"),i=0;i<json.length;i++){var obj=json[i],rtn=__WEBPACK_IMPORTED_MODULE_1__assets_util_js__.a.isInList(this.list,"id",obj[this.valField]);if(!rtn){var o={};o.id=obj[this.valField],o.name=obj[this.textField],o.selected=!1,this.list.push(o)}}},getIdVal:function(t){return this.getSingleVal(t,!0)},getTextVal:function(){return this.getSingleVal(isAry,!1)},getSingleVal:function(t,e){if(0==this.list.length)return t?[]:"";for(var i=[],n=0;n<this.list.length;n++){var a=this.list[n],o=e?a.id:a.name;i.push(o)}return t?i:i.join(",")},getValue:function(){if(0==this.list.length)return"[]";for(var t=[],e=0;e<this.list.length;e++){var i={},n=this.list[e];i[this.textField]=n.name,i[this.valField]=n.id,t.push(i)}return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t)},handSelect:function(){this.$emit("select",this)}},watch:{value:function(t,e){this.render(t)}}}},1226:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1__assets_util_js__=__webpack_require__(83);__webpack_exports__.a={name:"rx-boxs",props:{value:String,textField:String,valField:String,containstyle:String,allowSelect:{type:Boolean,default:!0},single:{type:Boolean,default:!1}},data:function(){return{list:[]}},activated:function(){this.resetData()},mounted:function(){this.setValue(this.value)},methods:{resetData:function(){this.list=[],console.log(0xe052e5a98dd)},removeSelect:function(t){this.list.splice(t,1);var e=this.getValue();this.$emit("input",e)},selectItem:function(t){t.selected=!t.selected},setValue:function(t){if(t){this.render(t);var e=this.getValue();this.$emit("input",e)}},render:function render(value){this.single&&(this.list=[]);for(var json=eval("("+value+")"),i=0;i<json.length;i++){var obj=json[i],rtn=__WEBPACK_IMPORTED_MODULE_1__assets_util_js__.a.isInList(this.list,"id",obj[this.valField]);if(!rtn){var o={};o.id=obj[this.valField],o.name=obj[this.textField],o.selected=!1,this.list.push(o)}}},getIdVal:function(t){return this.getSingleVal(t,!0)},getTextVal:function(){return this.getSingleVal(isAry,!1)},getSingleVal:function(t,e){if(0==this.list.length)return t?[]:"";for(var i=[],n=0;n<this.list.length;n++){var a=this.list[n],o=e?a.id:a.name;i.push(o)}return t?i:i.join(",")},getValue:function(){if(0==this.list.length)return"[]";for(var t=[],e=0;e<this.list.length;e++){var i={},n=this.list[e];i[this.textField]=n.name,i[this.valField]=n.id,t.push(i)}return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t)},handSelect:function(){this.$emit("select",this)}},watch:{value:function(t,e){this.render(t)}}}},1230:function(t,e,i){e=t.exports=i(327)(!0),e.push([t.i,".div-container[data-v-21e34c0c]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:6rem;height:.7rem;overflow-x:auto;overflow-y:hidden}.div-container>.item[data-v-21e34c0c],.div-container[data-v-21e34c0c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.div-container>.item[data-v-21e34c0c]{margin:0 .1rem;border-radius:.2rem;padding:.05rem .15rem;position:relative;-webkit-box-shadow:.02rem .02rem .05rem #888;box-shadow:.02rem .02rem .05rem #888;background-color:#dee7f8;height:.4rem;white-space:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto}.div-container>.item-selected[data-v-21e34c0c]{background-color:rgba(120,193,245,.4);color:#fff}.div-container>.item>.i-remove[data-v-21e34c0c]{position:absolute;top:0;right:0;cursor:hand}.btn-select[data-v-21e34c0c]{width:auto;margin-right:.12rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.yd-icon-remove[data-v-21e34c0c]:before{font-size:.3rem!important;color:#000;font-weight:700}.yd-icon-add-user[data-v-21e34c0c]:before{font-size:.5rem}","",{version:3,sources:["E:/work/redxun/mobile/mobile/src/components/common/rx-boxs.vue"],names:[],mappings:"AACA,gCACE,8BAA+B,AACvB,sBAAuB,AAC/B,WAAY,AACN,eAAgB,AACtB,aAAc,AAOR,gBAAgB,AAChB,iBAAkB,CACzB,AACD,sEATE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACR,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAwBnC,AApBD,sCACE,eAAiB,AAIjB,oBAAqB,AACrB,sBAAyB,AACzB,kBAAmB,AACnB,6CAAiD,AACzC,qCAAyC,AACjD,yBAA0B,AAC1B,aAAc,AACd,mBAAmB,AAIb,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,UAAW,CAClB,AACD,+CACE,sCAA2C,AAC3C,UAAY,CACb,AACD,gDACE,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,WAAa,CACd,AACD,6BACE,WAAY,AACZ,oBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACR,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACvC,AACD,wCACE,0BAA6B,AAC7B,WAAY,AACZ,eAAkB,CACnB,AACD,0CACE,eAAkB,CACnB",file:"rx-boxs.vue",sourcesContent:["\n.div-container[data-v-21e34c0c]{\n\t\t-webkit-box-sizing: border-box;\n\t\t        box-sizing: border-box;\n\t\twidth: 100%;\n        max-width: 6rem;\n\t\theight: .7rem;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        overflow-x:auto;\n        overflow-y:hidden;\n}\n.div-container > .item[data-v-21e34c0c]{\n\t\tmargin: 0 0.1rem;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\tborder-radius: .2rem;\n\t\tpadding: 0.05rem 0.15rem;\n\t\tposition: relative;\n\t\t-webkit-box-shadow: 0.02rem 0.02rem 0.05rem #888;\n\t\t        box-shadow: 0.02rem 0.02rem 0.05rem #888;\n\t\tbackground-color: #dee7f8;\n\t\theight: .4rem;\n\t\twhite-space:nowrap;  \n\t\t-webkit-box-align: center;  \n\t\t    -ms-flex-align: center;  \n\t\t        align-items: center; \n        -webkit-box-pack: center; \n            -ms-flex-pack: center; \n                justify-content: center; \n        width:auto;\n}\n.div-container > .item-selected[data-v-21e34c0c]{\n\t\tbackground-color: rgba(120, 193, 245, 0.4);\n\t\tcolor: #fff;\n}\n.div-container > .item > .i-remove[data-v-21e34c0c]{\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\tcursor: hand;\n}\n.btn-select[data-v-21e34c0c]{\n\t\twidth: auto;\n\t\tmargin-right:.12rem;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; /*定义body的元素垂直居中*/\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; /*定义body的里的元素水平居中*/\n}\n.yd-icon-remove[data-v-21e34c0c]:before { \n\t\tfont-size: 0.3rem !important;\n\t\tcolor: #000;\n\t\tfont-weight: bold;\n}\n.yd-icon-add-user[data-v-21e34c0c]:before{\n\t\tfont-size: 0.5rem;\n}\n"],sourceRoot:""}])},1234:function(t,e,i){var n=i(1230);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1169)("08cc9ab3",n,!0)},1238:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-flexbox",[i("yd-flexbox-item",[i("div",{staticClass:"div-container"},t._l(t.list,function(e,n){return i("div",{staticClass:"item",class:{"item-selected":e.selected},on:{click:function(i){t.selectItem(e)}}},[t._v("\n\t\t        \t\t"+t._s(e.name)+"\n\t\t\t        \t"),e.selected?i("i",{staticClass:"i-remove yd-icon-remove",on:{click:function(e){e.stopPropagation(),t.removeSelect(n)}}}):t._e()])}))]),t._v(" "),i("div",{staticClass:"btn-select"},[i("yd-icon",{directives:[{name:"show",rawName:"v-show",value:t.allowSelect,expression:"allowSelect"}],attrs:{slot:"icon",name:"add-user",color:"#177cb0"},nativeOn:{click:function(e){t.handSelect()}},slot:"icon"})],1)],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},1246:function(t,e,i){"use strict";function n(t){i(1252)}var a=(i(1249),i(1250)),o=i(1253),s=i(1),r=n,l=s(a.a,o.a,!1,r,"data-v-3f5650be",null);e.a=l.exports},1249:function(t,e,i){"use strict";var n=i(6),a=i.n(n),o=i(196),s=i(199),r=i.n(s);String,Object,String,Boolean},1250:function(t,e,i){"use strict";var n=i(6),a=i.n(n),o=i(196),s=i(199),r=i.n(s);e.a={name:"rx-attachment",data:function(){var t=this;return{files:[],showSelect:!1,operators:[{label:"拍照",method:function(){t.wxPhoto()}},{label:"从相册中选择",method:function(){t.wxSelectPhoto()}}]}},props:{value:String,permission:Object,permissionkey:String,readonly:{type:Boolean,default:!1}},computed:{right:function(){return i.i(o.f)(this)}},methods:{imageUrl:function(t){return _baseUrl+"/sys/core/file/download/"+t.fileId+".do"},parseUrl:function(t){if(t.fileName)return _baseUrl+"/sys/core/file/download/"+t.fileId+".do"},handFiles:function(t){if(!t.success)return[];console.info("handFiles-----------");for(var e=t.data,i=0;i<e.length;i++){var n=e[i];this.files.push({fileId:n.fileId,fileName:n.fileName,selected:!1})}},handFile:function(t){this.files.push({fileId:t.key,fileName:t.val,selected:!1})},removeSelect:function(t){this.files.splice(t,1)},checkFile:function(t){var e=this.files[t];e.selected=!e.selected},selectAttch:function(){var t=this;plus.gallery.pick(function(e){for(var i=[],n=0;n<e.files.length;n++){var a=e.files[n];i.push(a)}t.upload(i)},function(t){},{filter:"image",multiple:!0})},wxPhoto:function(){this.wxImage("camera")},wxSelectPhoto:function(){this.wxImage("album")},wxImage:function(t){var e=this;r.a.chooseImage({sizeType:["compressed"],sourceType:[t],success:function(t){for(var i=t.localIds,n=0;n<i.length;n++)r.a.uploadImage({localId:i[n],isShowProgressTips:1,success:function(t){var i=t.serverId,n=_baseUrl+"/wx/saveFile.do",a="mediaId="+i;e.$ajax.post(n,a).then(function(t){var i=t.data;e.handFile(i)})}})}})},takePhoto:function(){var t=this,e=plus.camera.getCamera(),i=e.supportedImageFormats[0];e.captureImage(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){var i=e.toLocalURL(),n=[];n.push(i),t.compressImg(n)})},function(t){},{format:i})},recordVideo:function(){var t=this,e=plus.camera.getCamera(),i=e.supportedVideoResolutions[0],n=e.supportedVideoFormats[0];e.startVideoCapture(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){var i=e.toLocalURL(),n=[];n.push(i),t.upload(n)})},function(t){},{resolution:i,format:n})},upload:function(t){var e=this;this.$dialog.loading.open("正在上传...");for(var i=_baseUrl+"/sys/core/file/upload.do",n=plus.uploader.createUpload(i,{},function(t,i){if(e.$dialog.loading.close(),200==i){var n=JSON.parse(t.responseText);if(n.success){e.handFiles(n);for(var o=[],s=0;s<e.files.length;s++){var r=e.files[s],l={fileId:r.fileId,fileName:r.fileName};o.push(l)}e.$emit("input",a()(o))}else e.$dialog.alert({mes:"上传出错!"})}else{var c="上传出错,状态码为:"+i;e.$dialog.alert({mes:c})}}),o=0;o<t.length;o++){var s=t[o],r=s.substring(s.lastIndexOf("/")+1);n.addFile(s,{key:r})}n.start()},compressImg:function(t){for(var e=this,i=0;i<t.length;i++)!function(i){(t[i].endsWith(".jpg")||t[i].endsWith(".png"))&&plus.zip.compressImage({src:t[i],dst:t[i].replace(".jpg","_zip.jpg")},function(n){t[i]=n.target;var a=[];a.push(t[i]),e.upload(a)},function(t){})}(i)}},mounted:function(){if(!this.value)return void(this.files=[]);for(var t=JSON.parse(this.value),e=0;e<t.length;e++){var i=t[e];i.selected=!1,this.files.push(i)}},watch:{files:function(t,e){var i=a()(t);this.$emit("input",i)}}}},1251:function(t,e,i){e=t.exports=i(327)(!0),e.push([t.i,'.attacment img[data-v-3f5650be]{width:1.2rem;height:1.2rem;display:inline-block;margin-left:2px}.attacment[data-v-3f5650be]{width:4rem;height:1.2rem;display:-webkit-box;display:-ms-flexbox;display:flex}.attacment>div[data-v-3f5650be]:first-of-type{height:1.2rem;width:auto;white-space:nowrap;max-width:4rem;overflow-x:auto}.attacment>div[data-v-3f5650be]:nth-of-type(2){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:1.2rem;width:1rem}div.file-container[data-v-3f5650be]{position:relative;height:1.2rem;margin-left:2px;display:inline-block}.file-remove[data-v-3f5650be]{position:absolute;top:0;right:0;display:block}.yd-icon-add[data-v-3f5650be]{margin-top:.16rem;display:block}.file-container>img[data-v-3f5650be]{display:block;width:auto;height:1.2rem}.yd-icon-removefile[data-v-3f5650be]:before{content:"\\E612";font-size:.6rem!important;color:#fff!important;font-weight:700}.file[data-v-3f5650be]{width:1.2rem;height:1.2rem;margin-left:2px}.yd-icon-video[data-v-3f5650be]:before{font-size:.8rem}',"",{version:3,sources:["E:/work/redxun/mobile/mobile/src/components/common/form/RxAttachment.vue"],names:[],mappings:"AACA,gCACE,aAAc,AACd,cAAe,AACf,qBAAsB,AACtB,eAAiB,CAClB,AACD,4BACE,WAAY,AACZ,cAAe,AACf,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,8CACK,cAAe,AACf,WAAY,AACZ,mBAAmB,AACnB,eAAgB,AAChB,eAAiB,CACrB,AACD,+CACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,cAAe,AACZ,UAAY,CAChB,AACD,oCACK,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,oBAAsB,CAC1B,AACD,8BACK,kBAAmB,AACnB,MAAS,AACT,QAAW,AACX,aAAe,CACnB,AACD,8BACK,kBAAmB,AACnB,aAAe,CACnB,AACD,qCACE,cAAe,AACf,WAAY,AACZ,aAAgB,CACjB,AACD,4CACE,gBAAiB,AACjB,0BAA6B,AAC1B,qBAAwB,AACxB,eAAkB,CACtB,AACD,uBACK,aAAc,AACd,cAAe,AACf,eAAiB,CACrB,AACD,uCACE,eAAkB,CACnB",file:"RxAttachment.vue",sourcesContent:['\n.attacment img[data-v-3f5650be]{\n\t\twidth: 1.2rem;\n\t\theight: 1.2rem;\n\t\tdisplay: inline-block;\n\t\tmargin-left: 2px;\n}\n.attacment[data-v-3f5650be]{\n\t\twidth: 4rem;\n\t\theight: 1.2rem;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n}\n.attacment > div[data-v-3f5650be]:nth-of-type(1){\n\t    height: 1.2rem;\n\t    width: auto;\n\t    white-space:nowrap;\n\t    max-width: 4rem;\n\t    overflow-x:auto ;\n}\n.attacment > div[data-v-3f5650be]:nth-of-type(2){\n\t\t-webkit-box-flex: 1;\n\t\t    -ms-flex-positive: 1;\n\t\t        flex-grow: 1;\n\t\theight: 1.2rem;\n    \twidth: 1rem;\n}\ndiv.file-container[data-v-3f5650be]{\n\t    position: relative;\n\t    height: 1.2rem;\n\t    margin-left: 2px;\n\t    display: inline-block;\n}\n.file-remove[data-v-3f5650be]{\n\t    position: absolute;\n\t    top:0rem;\n\t    right:0rem;\n\t    display: block;\n}\n.yd-icon-add[data-v-3f5650be]{\n\t    margin-top: .16rem;\n\t    display: block;\n}\n.file-container > img[data-v-3f5650be]{\n\t\tdisplay: block;\n\t\twidth: auto;\n\t\theight:  1.2rem;\n}\n.yd-icon-removefile[data-v-3f5650be]:before{\n\t\tcontent: "\\e612";\n\t\tfont-size: 0.6rem !important;\n\t    color: #fff !important ;\n\t    font-weight: bold;\n}\n.file[data-v-3f5650be]{\n\t    width: 1.2rem;\n\t    height: 1.2rem;\n\t    margin-left: 2px;\n}\n.yd-icon-video[data-v-3f5650be]:before{\n\t\tfont-size: 0.8rem;\n}\n\t\n'],sourceRoot:""}])},1252:function(t,e,i){var n=i(1251);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1169)("157f5eec",n,!0)},1253:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"r"==t.right?i("div",{staticClass:"attacment"},t._l(t.files,function(e,n){return i("div",{staticClass:"file-container"},[i("yd-lightbox",[i("yd-lightbox-img",{attrs:{src:t.imageUrl(e)}})],1)],1)})):"w"==t.right?i("div",{staticClass:"attacment"},[i("div",{staticClass:"div-left"},t._l(t.files,function(e,n){return i("div",{staticClass:"file-container"},[e.fileName.endsWith("mp4")?i("div",[e.selected?i("i",{staticClass:"file-remove yd-icon-removefile",on:{click:function(e){t.removeSelect(n)}}}):t._e(),t._v(" "),i("yd-icon",{attrs:{slot:"icon",name:"video",color:"#177cb0"},on:{click:function(e){t.checkFile(n)}},slot:"icon"})],1):i("div",[e.selected?i("i",{staticClass:"file-remove yd-icon-removefile",on:{click:function(e){t.removeSelect(n)}}}):t._e(),t._v(" "),i("img",{staticClass:"file",attrs:{src:t.imageUrl(e)},on:{click:function(e){t.checkFile(n)}}})])])})),t._v(" "),i("div",{staticClass:"div-right"},[i("i",{staticClass:"yd-icon-add",on:{click:function(e){t.showSelect=!0}}})]),t._v(" "),i("yd-actionsheet",{attrs:{items:t.operators,cancel:"取消"},model:{value:t.showSelect,callback:function(e){t.showSelect=e},expression:"showSelect"}})],1):t._e()},a=[],o={render:n,staticRenderFns:a};e.a=o},1441:function(t,e,i){"use strict";var n=i(6),a=(i.n(n),i(47)),o=(i(1208),i(1246));i(98),i(83),i(196);a.default.component(o.a.name,o.a)},1487:function(t,e,i){"use strict";var n=i(6),a=i.n(n),o=i(47),s=(i(1208),i(1246)),r=i(98),l=i(83),c=i(196);o.default.component(s.a.name,s.a),e.a={name:"rx-startflow",data:function(){return{opinion:"同意",files:"[]",bpmSolution:{},instId:"",isSinglePage:!0}},mounted:function(){this.isSinglePage=this.$route.params.isSinglePage;var t=this.$store.state.bpmModule.instData;console.info("startflow activated:"+t),console.info(t),this.bpmSolution=t.bpmSolution,t.instId||(this.instId=t.instId)},methods:{changeOpinion:function(t){var e=t.srcElement.value;this.opinion=e},getProcessCmd:function(){var t=this.bpmSolution,e={};e.solId=t.solId,e.opinion=this.opinion,e.isValid=!0,e.message="success",this.instId&&(e.bpmInstId=this.instId);var n=this.$store.state.bpmModule.instData.formModels,o=i.i(c.i)(n),s=a()(o);return s=s.replaceAll("&nbsp;",""),e.jsonData=s,e.opFiles=this.files,e},cancel:function(){r.a.push({name:"startForm",params:{solId:this.bpmSolution.solId,instId:this.instId?this.instId:"-1"}})},startFlow:function(){var t=this,e=this.getProcessCmd();if(!e.isValid)return void this.errorToast(e.message);delete e.isValid,delete e.message;var i=_baseUrl+"/bpm/core/bpmInst/startProcess.do",n=l.a.serialJsonToForm(e);this.$dialog.loading.open("正在启动流程,请稍候..."),this.$ajax.post(i,n).then(function(e){t.$dialog.loading.close(),e.data.success?(t.$store.commit("cleanInstData"),t.isSinglePage?t.successToast("提交成功！",1e3,"success"):t.successToast("提交成功！",1e3,"mySolutions")):t.errorToast("操作失败！")})}}}},1548:function(t,e,i){e=t.exports=i(327)(!0),e.push([t.i,".yd-flexbox-item-center[data-v-6d1ea99f]{text-align:center;margin-top:2px;padding:0 5px}.yd-radio-text[data-v-6d1ea99f]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:2.5rem;display:inline-block}.btn-select[data-v-6d1ea99f]{display:table-cell;height:44px;vertical-align:middle}.cell-left[data-v-6d1ea99f]{width:4rem;height:1.55rem;overflow-x:auto}","",{version:3,sources:["E:/work/redxun/mobile/mobile/src/components/bpm/StartFlow.vue"],names:[],mappings:"AACA,yCACE,kBAAmB,AACnB,eAAgB,AAChB,aAAwB,CACzB,AACD,gCACK,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,aAAc,AAEd,oBAAsB,CAC1B,AACD,6BACK,mBAAoB,YAAa,qBAAuB,CAC5D,AACD,4BACK,WAAY,AACZ,eAAgB,AAChB,eAAiB,CACrB",file:"StartFlow.vue",sourcesContent:["\n.yd-flexbox-item-center[data-v-6d1ea99f]{\n\t\ttext-align: center;\n\t\tmargin-top: 2px;\n\t\tpadding:0px 5px 0px 5px;\n}\n.yd-radio-text[data-v-6d1ea99f]{\n\t    overflow: hidden;\n\t    text-overflow: ellipsis;\n\t    white-space: nowrap;\n\t    width: 2.5rem;\n\t   \n\t    display: inline-block;\n}\n.btn-select[data-v-6d1ea99f]{\n    \tdisplay: table-cell;height: 44px;vertical-align: middle;\n}\n.cell-left[data-v-6d1ea99f]{\n\t    width: 4rem;\n\t    height: 1.55rem;\n\t    overflow-x: auto;\n}\n\t\n\t\n"],sourceRoot:""}])},1595:function(t,e,i){var n=i(1548);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1169)("620d4c6a",n,!0)},1643:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",[i("yd-navbar",{attrs:{slot:"navbar",title:"启动流程"},slot:"navbar"},[i("a",{attrs:{slot:"left",href:"javascript:;"},on:{click:t.goBack},slot:"left"},[i("yd-navbar-back-icon")],1)]),t._v(" "),i("yd-cell-group",[i("yd-cell-item",{attrs:{type:"label"}},[i("select",{attrs:{slot:"right"},on:{change:t.changeOpinion},slot:"right"},[i("option",{attrs:{value:""}},[t._v("选择")]),t._v(" "),i("option",{attrs:{value:"同意"}},[t._v("同意")]),t._v(" "),i("option",{attrs:{value:"不同意"}},[t._v("不同意")])])]),t._v(" "),i("yd-cell-item",[i("yd-textarea",{attrs:{slot:"right",placeholder:"请输入意见",maxlength:"200",value:t.opinion},slot:"right"})],1),t._v(" "),i("yd-cell-item",{attrs:{type:"label"}},[i("rx-attachment",{attrs:{slot:"right",readonly:!1},slot:"right",model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),t._v(" "),i("yd-tabbar",{attrs:{slot:"tabbar"},slot:"tabbar"},[i("tabbar-item",{attrs:{title:"确定",name:"approve",type:"a",icon:"yd-icon-approve",active:!0},on:{handclick:function(e){t.startFlow()}}}),t._v(" "),i("tabbar-item",{attrs:{title:"取消",name:"cancel",type:"a",icon:"yd-icon-cancel"},on:{handclick:function(e){t.cancel()}}})],1)],1)},a=[],o={render:n,staticRenderFns:a};e.a=o}});
//# sourceMappingURL=16.79105cc0dc8a692fa69d.js.map