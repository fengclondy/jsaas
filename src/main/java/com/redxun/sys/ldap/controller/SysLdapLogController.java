package com.redxun.sys.ldap.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.redxun.core.json.JsonResult;
import com.redxun.core.manager.BaseManager;
import com.redxun.core.query.QueryFilter;
import com.redxun.saweb.controller.BaseListController;
import com.redxun.saweb.util.QueryFilterBuilder;
import com.redxun.sys.ldap.entity.SysLdapLog;
import com.redxun.sys.ldap.manager.SysLdapLogManager;

/**
 * LDAP日志管理
 * @author csx
 */
@Controller
@RequestMapping("/sys/ldap/sysLdapLog/")
public class SysLdapLogController extends BaseListController{
    @Resource
    SysLdapLogManager sysLdapLogManager;
   

   
    @RequestMapping("del")
    @ResponseBody
    public JsonResult del(HttpServletRequest request,HttpServletResponse response) throws Exception{
        String uId=request.getParameter("ids");
        if(StringUtils.isNotEmpty(uId)){
            String[] ids=uId.split(",");
            for(String id:ids){
                sysLdapLogManager.delete(id);
            }
        }
        return new JsonResult(true,"成功删除！");
    }
    
    /**
     * 查看明细
     * @param request
     * @param response
     * @return
     * @throws Exception 
     */
    @RequestMapping("get")
    public ModelAndView get(HttpServletRequest request,HttpServletResponse response) throws Exception{
        String pkId=request.getParameter("pkId");
        SysLdapLog sysLdapLog=null;
        if(StringUtils.isNotEmpty(pkId)){
           sysLdapLog=sysLdapLogManager.get(pkId);
        }else{
        	sysLdapLog=new SysLdapLog();
        }
        return getPathView(request).addObject("sysLdapLog",sysLdapLog);
    }
    
    
    @RequestMapping("edit")
    public ModelAndView edit(HttpServletRequest request,HttpServletResponse response) throws Exception{
    	String pkId=request.getParameter("pkId");
    	//复制添加
    	String forCopy=request.getParameter("forCopy");
    	SysLdapLog sysLdapLog=null;
    	if(StringUtils.isNotEmpty(pkId)){
    		sysLdapLog=sysLdapLogManager.get(pkId);
    		if("true".equals(forCopy)){
    			sysLdapLog.setLogId(null);
    		}
    	}else{
    		sysLdapLog=new SysLdapLog();
    	}
    	return getPathView(request).addObject("sysLdapLog",sysLdapLog);
    }

	@SuppressWarnings("rawtypes")
	@Override
	public BaseManager getBaseManager() {
		return sysLdapLogManager;
	}

}
