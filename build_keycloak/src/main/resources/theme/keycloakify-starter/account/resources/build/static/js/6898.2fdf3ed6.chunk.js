"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[6898],{2889:(e,t,s)=>{s.d(t,{a:()=>n});var a=s(6055),c=s(969);function n(e){const{defaultClasses:t}=e;return{useGetClassName:function(e){const{classes:s}=e;return{getClassName:(0,c.O)((e=>(0,a.W)(e,t[e],null===s||void 0===s?void 0:s[e])))}}}}},7107:(e,t,s)=>{s.d(t,{v:()=>c});var a=s(2889);const{useGetClassName:c}=(0,a.a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}})},6898:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var a=s(184),c=s(2791),n=s(6055),i=s(3062);i.YU,i.pJ,i.eV,i.US;const l=i.tH;i.Y2;var r=s(969),o=s(7107),u=s(5935),d=s(9386),p=s(4112);function f(e){const{kcContext:t,i18n:s,doUseDefaultCss:i,Template:f,classes:h}=e,{getClassName:k}=(0,o.v)({doUseDefaultCss:i,classes:h}),{url:m}=t,{msg:g,msgStr:C}=s,{authenticators:b,challenge:y,shouldDisplayAuthenticators:v,userVerification:A,rpId:x}=t,I=Number(t.createTimeout),w="true"==t.isUserIdentified,S=(0,c.useRef)(null),j=(0,r.O)((async()=>{if(!w)return;const e=async()=>{const t=S.current;if(null===t)return await new Promise((e=>setTimeout(e,100))),e();t.submit()},t=b.authenticators.map((e=>({id:l.parse(e.credentialId,{loose:!0}),type:"public-key"})));if(!window.PublicKeyCredential)return _(C("webauthn-unsupported-browser-text")),void e();const s={rpId:x,challenge:l.parse(y,{loose:!0})};0!==I&&(s.timeout=1e3*I),t.length&&(s.allowCredentials=t),"not specified"!==A&&(s.userVerification=A);try{const e=await navigator.credentials.get({publicKey:s});if(!e||"public-key"!=e.type)return;if((0,u.assert)((0,d.is)(e)),!("authenticatorData"in e.response))return;const t=e.response,a=t.clientDataJSON;(0,u.assert)((0,p.typeGuard)(t,"signature"in t&&t.authenticatorData instanceof ArrayBuffer),"response not an AuthenticatorAssertionResponse");const c=t.authenticatorData,n=t.signature;F(l.stringify(new Uint8Array(a),{pad:!1})),N(l.stringify(new Uint8Array(c),{pad:!1})),D(l.stringify(new Uint8Array(n),{pad:!1})),U(e.id),H(l.stringify(new Uint8Array(t.userHandle),{pad:!1}))}catch(a){_(String(a))}e()})),[L,F]=(0,c.useState)(""),[O,N]=(0,c.useState)(""),[B,D]=(0,c.useState)(""),[W,U]=(0,c.useState)(""),[P,H]=(0,c.useState)(""),[T,_]=(0,c.useState)("");return(0,a.jsx)(f,Object.assign({},{kcContext:t,i18n:s,doUseDefaultCss:i,classes:h},{headerNode:g("webauthn-login-title")},{children:(0,a.jsxs)("div",Object.assign({id:"kc-form-webauthn",className:k("kcFormClass")},{children:[(0,a.jsxs)("form",Object.assign({id:"webauth",action:m.loginAction,ref:S,method:"post"},{children:[(0,a.jsx)("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON",value:L}),(0,a.jsx)("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData",value:O}),(0,a.jsx)("input",{type:"hidden",id:"signature",name:"signature",value:B}),(0,a.jsx)("input",{type:"hidden",id:"credentialId",name:"credentialId",value:W}),(0,a.jsx)("input",{type:"hidden",id:"userHandle",name:"userHandle",value:P}),(0,a.jsx)("input",{type:"hidden",id:"error",name:"error",value:T})]})),(0,a.jsxs)("div",Object.assign({className:k("kcFormGroupClass")},{children:[b&&(0,a.jsx)("form",Object.assign({id:"authn_select",className:k("kcFormClass")},{children:b.authenticators.map((e=>(0,a.jsx)("input",{type:"hidden",name:"authn_use_chk",value:e.credentialId},e.credentialId)))})),b&&v&&(0,a.jsxs)(a.Fragment,{children:[b.authenticators.length>1&&(0,a.jsx)("p",Object.assign({className:k("kcSelectAuthListItemTitle")},{children:g("webauthn-available-authenticators")})),(0,a.jsx)("div",Object.assign({className:k("kcFormClass")},{children:b.authenticators.map((e=>(0,a.jsxs)("div",Object.assign({id:"kc-webauthn-authenticator",className:k("kcSelectAuthListItemClass")},{children:[(0,a.jsx)("div",Object.assign({className:k("kcSelectAuthListItemIconClass")},{children:(0,a.jsx)("i",{className:(0,n.W)((()=>{const t=k(e.transports.iconClass);return t.includes(" ")?t:[t,k("kcWebAuthnDefaultIcon")]})(),k("kcSelectAuthListItemIconPropertyClass"))})})),(0,a.jsxs)("div",Object.assign({className:k("kcSelectAuthListItemBodyClass")},{children:[(0,a.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-label",className:k("kcSelectAuthListItemHeadingClass")},{children:e.label})),e.transports&&e.transports.displayNameProperties.length&&(0,a.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-transport",className:k("kcSelectAuthListItemDescriptionClass")},{children:e.transports.displayNameProperties.map(((t,s)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:g(t)}),s<e.transports.displayNameProperties.length-1&&(0,a.jsx)("span",{children:", "})]})))})),(0,a.jsxs)("div",Object.assign({className:k("kcSelectAuthListItemDescriptionClass")},{children:[(0,a.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created-label"},{children:g("webauthn-createdAt-label")})),(0,a.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created"},{children:e.createdAt}))]}))]})),(0,a.jsx)("div",{className:k("kcSelectAuthListItemFillClass")})]}))))}))]}),(0,a.jsx)("div",Object.assign({id:"kc-form-buttons",className:k("kcFormButtonsClass")},{children:(0,a.jsx)("input",{id:"authenticateWebAuthnButton",type:"button",onClick:j,autoFocus:!0,value:C("webauthn-doAuthenticate"),className:(0,n.W)(k("kcButtonClass"),k("kcButtonPrimaryClass"),k("kcButtonBlockClass"),k("kcButtonLargeClass"))})}))]}))]}))}))}},6055:(e,t,s)=>{s.d(t,{W:()=>n});var a=s(5935),c=s(4112);const n=function(){const e=arguments.length;let t=0,s="";for(;t<e;t++){const e=t<0||arguments.length<=t?void 0:arguments[t];if(null==e)continue;let i;switch(typeof e){case"boolean":break;case"object":if(Array.isArray(e))i=n(...e);else{(0,a.assert)(!(0,c.typeGuard)(e,!1)),i="";for(const t in e)e[t]&&t&&(i&&(i+=" "),i+=t)}break;default:i=e}i&&(s&&(s+=" "),s+=i)}return s}},3062:(e,t)=>{function s(e,t,s){var a;if(void 0===s&&(s={}),!t.codes){t.codes={};for(var c=0;c<t.chars.length;++c)t.codes[t.chars[c]]=c}if(!s.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var n=e.length;"="===e[n-1];)if(--n,!s.loose&&!((e.length-n)*t.bits&7))throw new SyntaxError("Invalid padding");for(var i=new(null!=(a=s.out)?a:Uint8Array)(n*t.bits/8|0),l=0,r=0,o=0,u=0;u<n;++u){var d=t.codes[e[u]];if(void 0===d)throw new SyntaxError("Invalid character "+e[u]);r=r<<t.bits|d,(l+=t.bits)>=8&&(l-=8,i[o++]=255&r>>l)}if(l>=t.bits||255&r<<8-l)throw new SyntaxError("Unexpected end of data");return i}function a(e,t,s){void 0===s&&(s={});for(var a=s.pad,c=void 0===a||a,n=(1<<t.bits)-1,i="",l=0,r=0,o=0;o<e.length;++o)for(r=r<<8|255&e[o],l+=8;l>t.bits;)l-=t.bits,i+=t.chars[n&r>>l];if(l&&(i+=t.chars[n&r<<t.bits-l]),c)for(;i.length*t.bits&7;)i+="=";return i}var c={chars:"0123456789ABCDEF",bits:4},n={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},i={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},l={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},r={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},o={parse:function(e,t){return s(e.toUpperCase(),c,t)},stringify:function(e,t){return a(e,c,t)}},u={parse:function(e,t){return void 0===t&&(t={}),s(t.loose?e.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):e,n,t)},stringify:function(e,t){return a(e,n,t)}},d={parse:function(e,t){return s(e,i,t)},stringify:function(e,t){return a(e,i,t)}},p={parse:function(e,t){return s(e,l,t)},stringify:function(e,t){return a(e,l,t)}},f={parse:function(e,t){return s(e,r,t)},stringify:function(e,t){return a(e,r,t)}},h={parse:s,stringify:a};t.YU=o,t.pJ=u,t.eV=d,t.US=p,t.tH=f,t.Y2=h}}]);
//# sourceMappingURL=6898.2fdf3ed6.chunk.js.map