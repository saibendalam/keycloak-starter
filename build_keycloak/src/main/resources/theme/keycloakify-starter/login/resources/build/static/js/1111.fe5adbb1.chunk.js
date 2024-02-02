"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[1111],{2889:(s,e,a)=>{a.d(e,{a:()=>t});var c=a(6055),l=a(969);function t(s){const{defaultClasses:e}=s;return{useGetClassName:function(s){const{classes:a}=s;return{getClassName:(0,l.O)((s=>(0,c.W)(s,e[s],null===a||void 0===a?void 0:a[s])))}}}}},7107:(s,e,a)=>{a.d(e,{v:()=>l});var c=a(2889);const{useGetClassName:l}=(0,c.a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},1111:(s,e,a)=>{a.r(e),a.d(e,{default:()=>o});var c=a(184),l=a(6055),t=a(7107);function o(s){const{kcContext:e,i18n:a,doUseDefaultCss:o,Template:r,classes:i}=s,{getClassName:n}=(0,t.v)({doUseDefaultCss:o,classes:i}),{msg:p,msgStr:u}=a,{url:d,messagesPerField:m,isAppInitiatedAction:k,username:f}=e;return(0,c.jsx)(r,Object.assign({},{kcContext:e,i18n:a,doUseDefaultCss:o,classes:i},{headerNode:p("updatePasswordTitle")},{children:(0,c.jsxs)("form",Object.assign({id:"kc-passwd-update-form",className:n("kcFormClass"),action:d.loginAction,method:"post"},{children:[(0,c.jsx)("input",{type:"text",id:"username",name:"username",value:f,readOnly:!0,autoComplete:"username",style:{display:"none"}}),(0,c.jsx)("input",{type:"password",id:"password",name:"password",autoComplete:"current-password",style:{display:"none"}}),(0,c.jsxs)("div",Object.assign({className:(0,l.W)(n("kcFormGroupClass"),m.printIfExists("password",n("kcFormGroupErrorClass")))},{children:[(0,c.jsx)("div",Object.assign({className:n("kcLabelWrapperClass")},{children:(0,c.jsx)("label",Object.assign({htmlFor:"password-new",className:n("kcLabelClass")},{children:p("passwordNew")}))})),(0,c.jsx)("div",Object.assign({className:n("kcInputWrapperClass")},{children:(0,c.jsx)("input",{type:"password",id:"password-new",name:"password-new",autoFocus:!0,autoComplete:"new-password",className:n("kcInputClass")})}))]})),(0,c.jsxs)("div",Object.assign({className:(0,l.W)(n("kcFormGroupClass"),m.printIfExists("password-confirm",n("kcFormGroupErrorClass")))},{children:[(0,c.jsx)("div",Object.assign({className:n("kcLabelWrapperClass")},{children:(0,c.jsx)("label",Object.assign({htmlFor:"password-confirm",className:n("kcLabelClass")},{children:p("passwordConfirm")}))})),(0,c.jsx)("div",Object.assign({className:n("kcInputWrapperClass")},{children:(0,c.jsx)("input",{type:"password",id:"password-confirm",name:"password-confirm",autoComplete:"new-password",className:n("kcInputClass")})}))]})),(0,c.jsxs)("div",Object.assign({className:n("kcFormGroupClass")},{children:[(0,c.jsx)("div",Object.assign({id:"kc-form-options",className:n("kcFormOptionsClass")},{children:(0,c.jsx)("div",Object.assign({className:n("kcFormOptionsWrapperClass")},{children:k&&(0,c.jsx)("div",Object.assign({className:"checkbox"},{children:(0,c.jsxs)("label",{children:[(0,c.jsx)("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",checked:!0}),u("logoutOtherSessions")]})}))}))})),(0,c.jsx)("div",Object.assign({id:"kc-form-buttons",className:n("kcFormButtonsClass")},{children:k?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:(0,l.W)(n("kcButtonClass"),n("kcButtonPrimaryClass"),n("kcButtonLargeClass")),type:"submit",defaultValue:u("doSubmit")}),(0,c.jsx)("button",Object.assign({className:(0,l.W)(n("kcButtonClass"),n("kcButtonDefaultClass"),n("kcButtonLargeClass")),type:"submit",name:"cancel-aia",value:"true"},{children:p("doCancel")}))]}):(0,c.jsx)("input",{className:(0,l.W)(n("kcButtonClass"),n("kcButtonPrimaryClass"),n("kcButtonBlockClass"),n("kcButtonLargeClass")),type:"submit",value:u("doSubmit")})}))]}))]}))}))}},6055:(s,e,a)=>{a.d(e,{W:()=>t});var c=a(5935),l=a(4112);const t=function(){const s=arguments.length;let e=0,a="";for(;e<s;e++){const s=e<0||arguments.length<=e?void 0:arguments[e];if(null==s)continue;let o;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=t(...s);else{(0,c.assert)(!(0,l.typeGuard)(s,!1)),o="";for(const e in s)s[e]&&e&&(o&&(o+=" "),o+=e)}break;default:o=s}o&&(a&&(a+=" "),a+=o)}return a}}}]);
//# sourceMappingURL=1111.fe5adbb1.chunk.js.map