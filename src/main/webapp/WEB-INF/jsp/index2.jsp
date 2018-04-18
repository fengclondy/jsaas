<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>JSaaS企业云协同管理平台</title>
<%@include file="/commons/dynamic.jspf"%>
<link rel="shortcut icon" href="${ctxPath}/styles/images/index/icon.ico">
<link rel="stylesheet" type="text/css" href="${ctxPath}/styles/icons.css"> 
<script src="${ctxPath}/scripts/mini/boot.js" type="text/javascript"></script>
<script src="${ctxPath}/scripts/jquery/jquery.cookie.js" type="text/javascript"></script>
<script src="${ctxPath}/scripts/share.js" type="text/javascript"></script>
<script type="text/javascript" src="${ctxPath}/scripts/common/baiduTemplate.js"></script>
<script type="text/javascript" src="${ctxPath}/scripts/indexPublic.js"></script>
<link type="text/css" rel="stylesheet" href="${ctxPath}/styles/css/manage.css" />
</head>
<body>
 	<ul 
 		id="tabsMenu" 
 		class="mini-contextmenu" 
 		onbeforeopen="onBeforeOpen" 
 		style="display:none"
	>
   		<li onclick="closeTab">关闭当前</li>
		<li onclick="closeAllBut">保留当前</li>
<!-- 		<li onclick="closeAll">关闭所有标签页</li> -->
		<li onclick="closeAllButFirst">保留首页</li>
    </ul>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<fmt:setBundle basename="message.i18n"/>
<fmt:setLocale value="zh_CN" />

<div id="mainLayout" class="mini-layout top_one" style="width:100%;height:100%;">
	<div title="" region="north" height="85" showHeader="false" style="border: 0px" >
		<div class="search">
			<div>
				<input type="text" placeholder="搜索菜单" class="searchVal" />
			</div>
	<!-- 			<span>搜</span> -->
			<ul class="listBox"></ul>	
		</div>
		<div id="top" class="top maincolor" style="display:''">
			<div class="fl logo">
				<div>
					<i class="icon-index_icon"></i>
					<h1>红迅JSAAS敏捷开发平台</h1>
				</div>
			</div>
			<div class="fr" id="fr">
				<div class="nav fl">
					<ul class="top_icon">
						<li>
							<a  class="iconfont icon-Personal p_top" title="个人信息"></a>
							<dl style="display:none;">
								<dt></dt>
								<dd class="p_top">
									<p onclick="editInfo()">修改个人信息</p>
								</dd>
								<c:if test="${not empty cookie.switchUser }" >
								<dd class="p_top">
									<p onclick="exitSwitchUser()">退出切换</p>
								</dd>
								</c:if>
								<dd class="p_top theme" data-src="index">
									<p>炫黑高雅主题</p>
								</dd>
								<dd class="p_top theme" data-src="index1">
									<p>简约时尚主题</p>
								</dd>
								<dd class="p_top theme" data-src="index2">
									<p>浅蓝经典主题</p>
								</dd>
								<dd class="p_top theme" data-src="index3">
									<p>深蓝经典主题</p>
								</dd>
							</dl>
						</li>
						<li onclick="innerMsgInfo()">
							<a class="iconfont icon-News p_top" title="我的消息"></a>
						</li>
						<li onclick="onEmail()">
							<a class="iconfont icon-Mailbox p_top" title="内部邮件"></a>
						</li>
						<li onclick="fullCommScreen()" id="Screen">
							<a id="fullscreen" class=" p_top iconfont icon-Maximization" title="全屏显示"></a>
						</li>

						<li onclick="javascript:location.href='${ctxPath}/logout'">
							<a class="iconfont icon-SignOut p_top"  title="注销"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="tabsbox" id="tabsbox">
			<div class="tabwrap fl">
				<div class="movewrap" id="divRootMenu"></div>
			</div>
				<div class="fr">
				  <i class="icon-prev"></i>
				  <i class="icon-next"></i>
			</div>
		</div>
	</div>
	<div  
		showHeader="false" 
		title="JSAAS平台" 
		region="west" 
		width="200" 
		showSplitIcon="true" 
		showCollapseButton="false"
    	showProxy="false"
		style="border-top:0px"
	>
		<ul class="sidemenu" id="sidemenu"></ul>
	</div>
	<div  title="center" region="center"  showSplitIcon="false" showCollapseButton="false" showTreeIcon="true">
		<div 
			id="mainTab" 
			class="mini-tabs" 
			activeIndex="0" 
			style="width:100%; height:100%; border: 0px;" 
			plain="false" 
			contextMenu="#tabsMenu" 
			onactivechanged="onTabsActiveChanged" 
			bodyStyle="padding:0;margin:0"
		>
			<div title="首 页" iconCls='icon-home' url="${ctxPath}/scripts/layoutit/layoutitIndexShow.jsp"></div>
		</div>
	</div>

</div>

<script id="rootTemplate"  type="text/html">
  <#for(var i=0;i<list.length;i++){
    var menu=list[i];
  #>
        <div id="<#=menu.menuId#>" class="tab fl base iconfont <#=menu.iconCls#> <#if(idx==i){#>active<#}#>"  onclick="changeSystem(this)"><span><#=menu.name#></span></div>
  <#}#>
</script>
   
<script type="text/html" id="leftMenuTemplate">
  <#for(var i=0;i<list.length;i++){
    var menu=list[i];
  #>
    <li class="firstmenu">
          <p menuId="<#=menu.menuId#>" name="<#=menu.name#>" url="<#=menu.url#>" showType="<#=menu.showType#>" iconCls="<#=menu.iconCls#>" class="menu base iconfont <#=menu.iconCls#>"><span><#=menu.name#></span>
		   		<#if(menu.children){#>
					<span class="spread">
						<span class="horizontal"></span><span class="vertical"></span>
					</span>
				<#}#>
		   </p>
        <#
        if(!menu.children) continue;
        for(var k=0;k<menu.children.length;k++){      
          var menu2=menu.children[k]; 
        #>
              <ul class="secondmenu">
                  <li >
                      <p class=" iconfont <#=menu2.iconCls#>" iconCls="<#=menu.iconCls#>" showType="<#=menu.showType#>"  menuId="<#=menu2.menuId#>" name="<#=menu2.name#>" url="<#=menu2.url#>" >
						<span><#=menu2.name#></span>
						<#if(menu2.children){#>
							<span class="spread">
								<span class="horizontal"></span><span class="vertical"></span>
							</span>
						<#}#>
					  </p>
            		  <#if(menu2.children){#>
                      	<ul class="threemenu">
              		  		<#for(var m=0;m<menu2.children.length;m++){     
              					var menu3=menu2.children[m]; 
              		  		#>
                            	<li menuId="<#=menu3.menuId#>" name="<#=menu3.name#>" url="<#=menu3.url#>" showType="<#=menu.showType#>">
									<p showType="<#=menu.showType#>"  menuId="<#=menu3.menuId#>" name="<#=menu3.name#>" url="<#=menu3.url#>" >
										<i class=" iconfont <#=menu3.iconCls#>"></i>
										<span><#=menu3.name#></span>
										<#if(menu3.children){#>
											<span class="spread">
											<span class="horizontal"></span><span class="vertical"></span>
										</span>
										<#}#>
									</p>
									
                      			<#if(menu3.children){
									var menusfour=menu3.children;
								#>
								
								<ul class="fourmenu">
              		  				<#for(var n=0;n<menusfour.length;n++){     
              							var menu4=menusfour[n]; 
              		  				#>
                            			<li menuId="<#=menu4.menuId#>" name="<#=menu4.name#>" iconCls="<#=menu.iconCls#>" iconCls="<#=menu4.iconCls#>" url="<#=menu4.url#>" showType="<#=menu.showType#>">
											<p class="iconfont <#=menu4.iconCls#>" iconCls="<#=menu.iconCls#>" showType="<#=menu.showType#>"  menuId="<#=menu4.menuId#>" name="<#=menu4.name#>" url="<#=menu4.url#>" >
												<span><#=menu4.name#></span>
											</p>
										</li>
                      				<#}#>
                      			</ul>
								
								<#}#>
								</li>
							<#}#>
                      	</ul>
            		  <#}#>
                  </li>
              </ul>
            <#}#>
      </li>
      <#}#>
</script>
  <script type="text/javascript" src="${ctxPath}/scripts/manage.js"></script>
  <script type="text/javascript">
  	if(self!=top) top.location=self.location;
    top['index']=window;
    var count ='${newMsgCount}';
        //消息的显示
        $(function(){
          newMsg(count);
        });

	var tabsbox_W = $('.tabsbox').innerWidth(),
		tabwrap_W = $('.movewrap').innerWidth() +20,
		menu_P,
		window_W,
		X = 0;
	if( tabsbox_W < tabwrap_W ){
		$('#tabsbox .fr').css('display','block');
	}else{
		$('#tabsbox .fr').css('display','none');
		$('.tabwrap').animate( {left:0} , 300 );
	}
	$(window).resize(function() {
    	tabsbox_W = $('.tabsbox').innerWidth();
    	tabwrap_W = $('.movewrap').innerWidth() +60;
    	if( tabsbox_W < tabwrap_W ){
    		$('#tabsbox .fr').css('display','block');
    	}else{
    		$('#tabsbox .fr').css('display','none');
    		$('.tabwrap').animate( {left:0} , 300 );
    	}
    	
    });
    $(document)
   			.on('click' , '.fr .icon-prev' , function(){
   				menu_P = $('.movewrap').offset().left;
   		    	tabwrap_W = $('.movewrap').innerWidth();
   		    	tabsbox_W = $('.tabsbox').innerWidth();
   		    	window_W = $(window).width();
   		    	if( tabwrap_W+menu_P >  window_W - 100 ){
   	    			X ++;
   	    			$('.tabwrap').animate( {left:-X*100} , 300 );
   		    	}else{
   		    		return false;
   		    	}
	   		})
				.on( 'click' , '.fr .icon-next' , function(){
    			if( X > 0){
	    			X --;
	    			$('.tabwrap').animate( {left:-X*100} , 300 );
    			}
    	});
    	
    	var fstate=0;
	   	function fullCommScreen(){
	   		if(fstate==0){
	   			requestFullScreen(document.documentElement);
	   			$("#fullscreen").removeClass("icon-Maximization");
	   			$("#fullscreen").addClass("icon-Minimize");
	   			fstate=1;
	   		}else{
	   			exitFull();
	   			$("#fullscreen").addClass("icon-Maximization");
	   			$("#fullscreen").removeClass("icon-Minimize");
	   			fstate=0;
	   		}
	   	} 
	   	
		function exitSwitchUser(){
	   		location.href=__rootPath +"/j_spring_security_exit_user";
	   	}
		
  </script>
</body>
</html>