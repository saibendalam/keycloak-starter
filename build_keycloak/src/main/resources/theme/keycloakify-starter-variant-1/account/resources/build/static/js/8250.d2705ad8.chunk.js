"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[8250],{2889:(s,e,l)=>{l.d(e,{a:()=>t});var c=l(6055),o=l(969);function t(s){const{defaultClasses:e}=s;return{useGetClassName:function(s){const{classes:l}=s;return{getClassName:(0,o.O)((s=>(0,c.W)(s,e[s],null===l||void 0===l?void 0:l[s])))}}}}},7107:(s,e,l)=>{l.d(e,{v:()=>o});var c=l(2889);const{useGetClassName:o}=(0,c.a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},8250:(s,e,l)=>{l.r(e),l.d(e,{default:()=>r});var c=l(184),o=l(2791),t=l(6055),a=l(969),i=l(7107);function r(s){var e;const{kcContext:l,i18n:r,doUseDefaultCss:n,Template:p,classes:f}=s,{getClassName:k}=(0,i.v)({doUseDefaultCss:n,classes:f}),{realm:d,url:u,login:m}=l,{msg:C,msgStr:g}=r,[b,h]=(0,o.useState)(!1),v=(0,a.O)((s=>{s.preventDefault(),h(!0);s.target.submit()}));return(0,c.jsx)(p,Object.assign({},{kcContext:l,i18n:r,doUseDefaultCss:n,classes:f},{headerNode:C("doLogIn")},{children:(0,c.jsx)("div",Object.assign({id:"kc-form"},{children:(0,c.jsx)("div",Object.assign({id:"kc-form-wrapper"},{children:(0,c.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:v,action:u.loginAction,method:"post"},{children:[(0,c.jsxs)("div",Object.assign({className:k("kcFormGroupClass")},{children:[(0,c.jsx)("hr",{}),(0,c.jsx)("label",Object.assign({htmlFor:"password",className:k("kcLabelClass")},{children:C("password")})),(0,c.jsx)("input",{tabIndex:2,id:"password",className:k("kcInputClass"),name:"password",type:"password",autoFocus:!0,autoComplete:"on",defaultValue:null!==(e=m.password)&&void 0!==e?e:""})]})),(0,c.jsxs)("div",Object.assign({className:(0,t.W)(k("kcFormGroupClass"),k("kcFormSettingClass"))},{children:[(0,c.jsx)("div",{id:"kc-form-options"}),(0,c.jsx)("div",Object.assign({className:k("kcFormOptionsWrapperClass")},{children:d.resetPasswordAllowed&&(0,c.jsx)("span",{children:(0,c.jsx)("a",Object.assign({tabIndex:5,href:u.loginResetCredentialsUrl},{children:C("doForgotPassword")}))})}))]})),(0,c.jsx)("div",Object.assign({id:"kc-form-buttons",className:k("kcFormGroupClass")},{children:(0,c.jsx)("input",{tabIndex:4,className:(0,t.W)(k("kcButtonClass"),k("kcButtonPrimaryClass"),k("kcButtonBlockClass"),k("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:g("doLogIn"),disabled:b})}))]}))}))}))}))}},6055:(s,e,l)=>{l.d(e,{W:()=>t});var c=l(5935),o=l(4112);const t=function(){const s=arguments.length;let e=0,l="";for(;e<s;e++){const s=e<0||arguments.length<=e?void 0:arguments[e];if(null==s)continue;let a;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=t(...s);else{(0,c.assert)(!(0,o.typeGuard)(s,!1)),a="";for(const e in s)s[e]&&e&&(a&&(a+=" "),a+=e)}break;default:a=s}a&&(l&&(l+=" "),l+=a)}return l}}}]);
//# sourceMappingURL=8250.d2705ad8.chunk.js.map