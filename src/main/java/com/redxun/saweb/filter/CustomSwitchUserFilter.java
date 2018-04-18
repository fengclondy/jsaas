/* Copyright 2004, 2005, 2006 Acegi Technology Pty Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.redxun.saweb.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationDetailsSource;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsChecker;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.switchuser.AuthenticationSwitchUserEvent;
import org.springframework.security.web.authentication.switchuser.SwitchUserAuthorityChanger;
import org.springframework.security.web.authentication.switchuser.SwitchUserFilter;
import org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority;
import org.springframework.security.web.util.UrlUtils;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import com.redxun.core.util.CookieUitl;
import com.redxun.sys.core.entity.SysAccount;
import com.redxun.sys.core.manager.SysAccountManager;


/**
 * Switch User processing filter responsible for user context switching.
 * <p>
 * This filter is similar to Unix 'su' however for Spring Security-managed web applications.
 * A common use-case for this feature is the ability to allow higher-authority users (e.g. ROLE_ADMIN) to switch to a
 * regular user (e.g. ROLE_USER).
 * <p>
 * This filter assumes that the user performing the switch will be required to be logged in as normal (i.e.
 * as a ROLE_ADMIN user). The user will then access a page/controller that enables the administrator to specify who they
 * wish to become (see <code>switchUserUrl</code>).
 * <p>
 * <b>Note: This URL will be required to have appropriate security constraints configured so that only users of that
 * role can access it (e.g. ROLE_ADMIN).</b>
 * <p>
 * On a successful switch, the user's  <code>SecurityContext</code> will be updated to reflect the
 * specified user and will also contain an additional
 * {@link org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority} which contains the original user.
 * Before switching, a check will be made on whether the user is already currently switched, and any current switch will
 * be exited to prevent "nested" switches.
 * <p>
 * To 'exit' from a user context, the user needs to access a URL (see <code>exitUserUrl</code>)  that
 * will switch back to the original user as identified by the <code>ROLE_PREVIOUS_ADMINISTRATOR</code>.
 * <p>
 * To configure the Switch User Processing Filter, create a bean definition for the Switch User processing
 * filter and add to the filterChainProxy. Note that the filter must come <b>after</b> the
 * <tt>FilterSecurityInteceptor</tt> in the chain, in order to apply the correct constraints to the <tt>switchUserUrl</tt>.
 * Example:
 * <pre>
 * &lt;bean id="switchUserProcessingFilter" class="org.springframework.security.web.authentication.switchuser.SwitchUserFilter">
 *    &lt;property name="userDetailsService" ref="userDetailsService" />
 *    &lt;property name="switchUserUrl" value="/j_spring_security_switch_user" />
 *    &lt;property name="exitUserUrl" value="/j_spring_security_exit_user" />
 *    &lt;property name="targetUrl" value="/index.jsp" />
 * &lt;/bean>
 * </pre>
 *
 * @author Mark St.Godard
 *
 * @see org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority
 */
public class CustomSwitchUserFilter extends GenericFilterBean implements ApplicationEventPublisherAware,
        MessageSourceAware {
    //~ Static fields/initializers =====================================================================================

    public static final String SPRING_SECURITY_SWITCH_USERNAME_KEY = "j_username";
    public static final String ROLE_PREVIOUS_ADMINISTRATOR = "ROLE_PREVIOUS_ADMINISTRATOR";

    //~ Instance fields ================================================================================================

    private ApplicationEventPublisher eventPublisher;
    private AuthenticationDetailsSource<HttpServletRequest, ?> authenticationDetailsSource = new WebAuthenticationDetailsSource();
    protected MessageSourceAccessor messages = SpringSecurityMessageSource.getAccessor();
    private String exitUserUrl = "/j_spring_security_exit_user";
    private String switchUserUrl = "/j_spring_security_switch_user";
    private String targetUrl;
    private String switchFailureUrl;
    private String usernameParameter = SPRING_SECURITY_SWITCH_USERNAME_KEY;
    private SwitchUserAuthorityChanger switchUserAuthorityChanger;
    private UserDetailsService userDetailsService;
    private UserDetailsChecker userDetailsChecker = new AccountStatusUserDetailsChecker();
    private AuthenticationSuccessHandler successHandler;
    private AuthenticationFailureHandler failureHandler;
    
    private String SwitchUser="switchUser";
    
    @Resource 
    SysAccountManager sysAccountManager;

    //~ Methods ========================================================================================================

    @Override
    public void afterPropertiesSet() {
        Assert.notNull(userDetailsService, "userDetailsService must be specified");
        Assert.isTrue(successHandler != null || targetUrl != null, "You must set either a successHandler or the targetUrl");
        if (targetUrl != null) {
            Assert.isNull(successHandler, "You cannot set both successHandler and targetUrl");
            successHandler = new SimpleUrlAuthenticationSuccessHandler(targetUrl);
        }

        if (failureHandler == null) {
            failureHandler = switchFailureUrl == null ? new SimpleUrlAuthenticationFailureHandler() :
                new SimpleUrlAuthenticationFailureHandler(switchFailureUrl);
        } else {
            Assert.isNull(switchFailureUrl, "You cannot set both a switchFailureUrl and a failureHandler");
        }
    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        // check for switch or exit request
        if (requiresSwitchUser(request)) {
        	String userId = request.getParameter("userId");
        	setUser(userId, request, response);
            // if set, attempt switch and store original
            try {
                Authentication targetUser = attemptSwitchUser(request);

                // update the current context to the new target user
                SecurityContextHolder.getContext().setAuthentication(targetUser);

                // redirect to target url
                successHandler.onAuthenticationSuccess(request, response, targetUser);
            } catch (AuthenticationException e) {
                logger.debug("Switch User failed", e);
                failureHandler.onAuthenticationFailure(request, response, e);
            }

            return;
        } else if (requiresExitUser(request)) {
        	removeUser(request, response);
            // get the original authentication object (if exists)
            Authentication originalUser = attemptExitUser(request);

            // update the current context back to the original user
            SecurityContextHolder.getContext().setAuthentication(originalUser);

            // redirect to target url
            successHandler.onAuthenticationSuccess(request, response, originalUser);

            return;
        }

        chain.doFilter(request, response);
    }

    /**
     * Attempt to switch to another user. If the user does not exist or is not active, return null.
     *
     * @return The new <code>Authentication</code> request if successfully switched to another user, <code>null</code>
     *         otherwise.
     *
     * @throws UsernameNotFoundException If the target user is not found.
     * @throws LockedException if the account is locked.
     * @throws DisabledException If the target user is disabled.
     * @throws AccountExpiredException If the target user account is expired.
     * @throws CredentialsExpiredException If the target user credentials are expired.
     */
    protected Authentication attemptSwitchUser(HttpServletRequest request) throws AuthenticationException {
        UsernamePasswordAuthenticationToken targetUserRequest;

        String userId = request.getParameter("userId");

        if (userId == null) {
        	userId = "";
        }
        List<SysAccount> accounts= sysAccountManager.getByUserId(userId);
        SysAccount account=accounts.get(0);
        String userName=account.getName() +"@" + account.getDomain();
        

        if (logger.isDebugEnabled()) {
            logger.debug("Attempt to switch to user [" + userName + "]");
        }

        UserDetails targetUser = userDetailsService.loadUserByUsername(userName);
        userDetailsChecker.check(targetUser);

        // OK, create the switch user token
        targetUserRequest = createSwitchUserToken(request, targetUser);

        if (logger.isDebugEnabled()) {
            logger.debug("Switch User Token [" + targetUserRequest + "]");
        }

        // publish event
        if (this.eventPublisher != null) {
            eventPublisher.publishEvent(new AuthenticationSwitchUserEvent(
                    SecurityContextHolder.getContext().getAuthentication(), targetUser));
        }

        return targetUserRequest;
    }

    /**
     * Attempt to exit from an already switched user.
     *
     * @param request The http servlet request
     *
     * @return The original <code>Authentication</code> object or <code>null</code> otherwise.
     *
     * @throws AuthenticationCredentialsNotFoundException If no <code>Authentication</code> associated with this
     *         request.
     */
    protected Authentication attemptExitUser(HttpServletRequest request)
            throws AuthenticationCredentialsNotFoundException {
        // need to check to see if the current user has a SwitchUserGrantedAuthority
        Authentication current = SecurityContextHolder.getContext().getAuthentication();

        if (null == current) {
            throw new AuthenticationCredentialsNotFoundException(messages.getMessage(
                    "SwitchUserFilter.noCurrentUser", "No current user associated with this request"));
        }

        // check to see if the current user did actual switch to another user
        // if so, get the original source user so we can switch back
        Authentication original = getSourceAuthentication(current);

        if (original == null) {
            logger.debug("Could not find original user Authentication object!");
            throw new AuthenticationCredentialsNotFoundException(messages.getMessage(
                    "SwitchUserFilter.noOriginalAuthentication",
                    "Could not find original Authentication object"));
        }

        // get the source user details
        UserDetails originalUser = null;
        Object obj = original.getPrincipal();

        if ((obj != null) && obj instanceof UserDetails) {
            originalUser = (UserDetails) obj;
        }

        // publish event
        if (this.eventPublisher != null) {
            eventPublisher.publishEvent(new AuthenticationSwitchUserEvent(current, originalUser));
        }
       

        return original;
    }

    /**
     * Create a switch user token that contains an additional <tt>GrantedAuthority</tt> that contains the
     * original <code>Authentication</code> object.
     *
     * @param request The http servlet request.
     * @param targetUser The target user
     *
     * @return The authentication token
     *
     * @see SwitchUserGrantedAuthority
     */
    private UsernamePasswordAuthenticationToken createSwitchUserToken(HttpServletRequest request,
            UserDetails targetUser) {

        UsernamePasswordAuthenticationToken targetUserRequest;

        // grant an additional authority that contains the original Authentication object
        // which will be used to 'exit' from the current switched user.

        Authentication currentAuth;

        try {
            // SEC-1763. Check first if we are already switched.
            currentAuth = attemptExitUser(request);
        } catch (AuthenticationCredentialsNotFoundException e) {
            currentAuth = SecurityContextHolder.getContext().getAuthentication();
        }

        GrantedAuthority switchAuthority = new SwitchUserGrantedAuthority(ROLE_PREVIOUS_ADMINISTRATOR, currentAuth);

        // get the original authorities
        Collection<? extends GrantedAuthority> orig = targetUser.getAuthorities();

        // Allow subclasses to change the authorities to be granted
        if (switchUserAuthorityChanger != null) {
            orig = switchUserAuthorityChanger.modifyGrantedAuthorities(targetUser, currentAuth, orig);
        }

        // add the new switch user authority
        List<GrantedAuthority> newAuths = new ArrayList<GrantedAuthority>(orig);
        newAuths.add(switchAuthority);

        // create the new authentication token
        targetUserRequest = new UsernamePasswordAuthenticationToken(targetUser, targetUser.getPassword(), newAuths);

        // set details
        targetUserRequest.setDetails(authenticationDetailsSource.buildDetails(request));

        return targetUserRequest;
    }

    /**
     * Find the original <code>Authentication</code> object from the current user's granted authorities. A
     * successfully switched user should have a <code>SwitchUserGrantedAuthority</code> that contains the original
     * source user <code>Authentication</code> object.
     *
     * @param current The current  <code>Authentication</code> object
     *
     * @return The source user <code>Authentication</code> object or <code>null</code> otherwise.
     */
    private Authentication getSourceAuthentication(Authentication current) {
        Authentication original = null;

        // iterate over granted authorities and find the 'switch user' authority
        Collection<? extends GrantedAuthority> authorities = current.getAuthorities();

        for (GrantedAuthority auth : authorities) {
            // check for switch user type of authority
            if (auth instanceof SwitchUserGrantedAuthority) {
                original = ((SwitchUserGrantedAuthority) auth).getSource();
                logger.debug("Found original switch user granted authority [" + original + "]");
            }
        }

        return original;
    }

    /**
     * Checks the request URI for the presence of <tt>exitUserUrl</tt>.
     *
     * @param request The http servlet request
     *
     * @return <code>true</code> if the request requires a exit user, <code>false</code> otherwise.
     *
     * @see SwitchUserFilter#exitUserUrl
     */
    protected boolean requiresExitUser(HttpServletRequest request) {
        String uri = stripUri(request);

        return uri.endsWith(request.getContextPath() + exitUserUrl);
    }

    /**
     * Checks the request URI for the presence of <tt>switchUserUrl</tt>.
     *
     * @param request The http servlet request
     *
     * @return <code>true</code> if the request requires a switch, <code>false</code> otherwise.
     *
     * @see SwitchUserFilter#switchUserUrl
     */
    protected boolean requiresSwitchUser(HttpServletRequest request) {
        String uri = stripUri(request);

        return uri.endsWith(request.getContextPath() + switchUserUrl);
    }

    public void setApplicationEventPublisher(ApplicationEventPublisher eventPublisher)
            throws BeansException {
        this.eventPublisher = eventPublisher;
    }

    public void setAuthenticationDetailsSource(AuthenticationDetailsSource<HttpServletRequest,?> authenticationDetailsSource) {
        Assert.notNull(authenticationDetailsSource, "AuthenticationDetailsSource required");
        this.authenticationDetailsSource = authenticationDetailsSource;
    }

    public void setMessageSource(MessageSource messageSource) {
        Assert.notNull(messageSource, "messageSource cannot be null");
        this.messages = new MessageSourceAccessor(messageSource);
    }

    /**
     * Sets the authentication data access object.
     *
     * @param userDetailsService The <tt>UserDetailService</tt> which will be used to load information for the user
     *                           that is being switched to.
     */
    public void setUserDetailsService(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    /**
     * Set the URL to respond to exit user processing.
     *
     * @param exitUserUrl The exit user URL.
     */
    public void setExitUserUrl(String exitUserUrl) {
        Assert.isTrue(UrlUtils.isValidRedirectUrl(exitUserUrl),
                "exitUserUrl cannot be empty and must be a valid redirect URL");
        this.exitUserUrl = exitUserUrl;
    }

    /**
     * Set the URL to respond to switch user processing.
     *
     * @param switchUserUrl The switch user URL.
     */
    public void setSwitchUserUrl(String switchUserUrl) {
        Assert.isTrue(UrlUtils.isValidRedirectUrl(switchUserUrl),
                "switchUserUrl cannot be empty and must be a valid redirect URL");
        this.switchUserUrl = switchUserUrl;
    }

    /**
     * Sets the URL to go to after a successful switch / exit user request.
     * Use {@link #setSuccessHandler(AuthenticationSuccessHandler) setSuccessHandler} instead if you need more
     * customized behaviour.
     *
     * @param targetUrl The target url.
     */
    public void setTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
    }

    /**
     * Used to define custom behaviour on a successful switch or exit user.
     * <p>
     * Can be used instead of setting <tt>targetUrl</tt>.
     */
    public void setSuccessHandler(AuthenticationSuccessHandler successHandler) {
        Assert.notNull(successHandler, "successHandler cannot be null");
        this.successHandler = successHandler;
    }

    /**
     * Sets the URL to which a user should be redirected if the switch fails. For example, this might happen because
     * the account they are attempting to switch to is invalid (the user doesn't exist, account is locked etc).
     * <p>
     * If not set, an error message will be written to the response.
     * <p>
     * Use {@link #setFailureHandler(AuthenticationFailureHandler) failureHandler} instead if you need more
     * customized behaviour.
     *
     * @param switchFailureUrl the url to redirect to.
     */
    public void setSwitchFailureUrl(String switchFailureUrl) {
        Assert.isTrue(StringUtils.hasText(switchUserUrl) && UrlUtils.isValidRedirectUrl(switchFailureUrl),
                "switchFailureUrl cannot be empty and must be a valid redirect URL");
        this.switchFailureUrl = switchFailureUrl;
    }

    /**
     * Used to define custom behaviour when a switch fails.
     * <p>
     * Can be used instead of setting <tt>switchFailureUrl</tt>.
     */
    public void setFailureHandler(AuthenticationFailureHandler failureHandler) {
        Assert.notNull(failureHandler, "failureHandler cannot be null");
        this.failureHandler = failureHandler;
    }

    /**
     * @param switchUserAuthorityChanger to use to fine-tune the authorities granted to subclasses (may be null if
     * SwitchUserFilter should not fine-tune the authorities)
     */
    public void setSwitchUserAuthorityChanger(SwitchUserAuthorityChanger switchUserAuthorityChanger) {
        this.switchUserAuthorityChanger = switchUserAuthorityChanger;
    }

    public void setUserDetailsChecker(UserDetailsChecker userDetailsChecker) {
        this.userDetailsChecker = userDetailsChecker;
    }

    /**
     * Allows the parameter containing the username to be customized.
     *
     * @param usernameParameter the parameter name. Defaults to {@code j_username}
     */
    public void setUsernameParameter(String usernameParameter) {
        this.usernameParameter = usernameParameter;
    }

    /**
     * Strips any content after the ';' in the request URI
     *
     * @param request The http request
     *
     * @return The stripped uri
     */
    private String stripUri(HttpServletRequest request) {
        String uri = request.getRequestURI();
        int idx = uri.indexOf(';');

        if (idx > 0) {
            uri = uri.substring(0, idx);
        }

        return uri;
    }
    
    private void setUser(String account,HttpServletRequest req,HttpServletResponse res){
		CookieUitl.addCookie(SwitchUser, account, true, req, res);
	}
	
	private void removeUser(HttpServletRequest req,HttpServletResponse res){
		CookieUitl.delCookie(SwitchUser,  req, res);
	}
}
