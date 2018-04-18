
<%-- 
    Document   : [Demo]明细页
    Created on : 2017-04-26 16:24:45
    Author     : mansan
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>[Demo]明细</title>
        <%@include file="/commons/get.jsp" %>
    </head>
    <body>
        <rx:toolbar toolbarId="toolbar1"/>
        <div id="form1" class="form-outer">
             <div style="padding:5px;">
                    <table style="width:100%" class="table-detail" cellpadding="0" cellspacing="1">
                    	<caption>[Demo]基本信息</caption>
						<tr>
							<th>名字：</th>
							<td>
								${demo.name}
							</td>
						</tr>
						<tr>
							<th>地址：</th>
							<td>
								${demo.address}
							</td>
						</tr>
					</table>
                 </div>
	            <div style="padding:5px">
					 <table class="table-detail" cellpadding="0" cellspacing="1">
					 	<caption>更新信息</caption>
						<tr>
							<th>创建人</th>
							<td><rxc:userLabel userId="${demo.createBy}"/></td>
							<th>创建时间</th>
							<td><fmt:formatDate value="${demo.createTime}" pattern="yyyy-MM-dd HH:mm" /></td>
						</tr>
						<tr>
							<th>更新人</th>
							<td><rxc:userLabel userId="${demo.updateBy}"/></td>
							<th>更新时间</th>
							<td><fmt:formatDate value="${demo.updateTime}" pattern="yyyy-MM-dd HH:mm" /></td>
						</tr>
					</table>
	        	</div>
        	</div>
        <rx:detailScript baseUrl="sys/demo/demo" 
        entityName="com.redxun.sys.demo.entity.Demo"
        formId="form1"/>
    </body>
</html>