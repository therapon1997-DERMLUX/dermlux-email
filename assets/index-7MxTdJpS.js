var YT=Object.defineProperty;var XT=(t,e,n)=>e in t?YT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Tm=(t,e,n)=>XT(t,typeof e!="symbol"?e+"":e,n);function JT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var NO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ZT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hy={exports:{}},ru={},dy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),eI=Symbol.for("react.portal"),tI=Symbol.for("react.fragment"),nI=Symbol.for("react.strict_mode"),rI=Symbol.for("react.profiler"),iI=Symbol.for("react.provider"),sI=Symbol.for("react.context"),oI=Symbol.for("react.forward_ref"),aI=Symbol.for("react.suspense"),lI=Symbol.for("react.memo"),uI=Symbol.for("react.lazy"),Im=Symbol.iterator;function cI(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},py=Object.assign,my={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gy(){}gy.prototype=Zi.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=my,this.updater=n||fy}var Sd=Id.prototype=new gy;Sd.constructor=Id;py(Sd,Zi.prototype);Sd.isPureReactComponent=!0;var Sm=Array.isArray,_y=Object.prototype.hasOwnProperty,Ad={current:null},yy={key:!0,ref:!0,__self:!0,__source:!0};function vy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_y.call(e,r)&&!yy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function hI(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function dI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dI(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case eI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,Sm(i)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),Ga(i,e,n,"",function(h){return h})):i!=null&&(Rd(i)&&(i=hI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+fc(s,l);o+=Ga(s,e,n,u,i)}else if(u=cI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+fc(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Qa={transition:null},pI={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Ad};function Ey(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Zi;Z.Fragment=tI;Z.Profiler=rI;Z.PureComponent=Id;Z.StrictMode=nI;Z.Suspense=aI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;Z.act=Ey;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_y.call(e,u)&&!yy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:sI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iI,_context:t},t.Consumer=t};Z.createElement=vy;Z.createFactory=function(t){var e=vy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:oI,render:t}};Z.isValidElement=Rd;Z.lazy=function(t){return{$$typeof:uI,_payload:{_status:-1,_result:t},_init:fI}};Z.memo=function(t,e){return{$$typeof:lI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};Z.unstable_act=Ey;Z.useCallback=function(t,e){return ft.current.useCallback(t,e)};Z.useContext=function(t){return ft.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ft.current.useEffect(t,e)};Z.useId=function(){return ft.current.useId()};Z.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ft.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};Z.useRef=function(t){return ft.current.useRef(t)};Z.useState=function(t){return ft.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ft.current.useTransition()};Z.version="18.3.1";dy.exports=Z;var j=dy.exports;const wy=ZT(j),mI=JT({__proto__:null,default:wy},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=j,_I=Symbol.for("react.element"),yI=Symbol.for("react.fragment"),vI=Object.prototype.hasOwnProperty,EI=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wI={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vI.call(e,r)&&!wI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_I,type:t,key:s,ref:o,props:i,_owner:EI.current}}ru.Fragment=yI;ru.jsx=Ty;ru.jsxs=Ty;hy.exports=ru;var q=hy.exports,nh={},Iy={exports:{}},Ct={},Sy={exports:{}},Ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var _e=J-1>>>1,le=B[_e];if(0<i(le,Q))B[_e]=Q,B[J]=le,J=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var _e=0,le=B.length,Re=le>>>1;_e<Re;){var un=2*(_e+1)-1,cn=B[un],hn=un+1,dn=B[hn];if(0>i(cn,J))hn<le&&0>i(dn,cn)?(B[_e]=dn,B[hn]=J,_e=hn):(B[_e]=cn,B[un]=J,_e=un);else if(hn<le&&0>i(dn,J))B[_e]=dn,B[hn]=J,_e=hn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,A=!1,R=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=B)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(B){if(k=!1,T(B),!R)if(n(u)!==null)R=!0,as(b);else{var Q=n(h);Q!==null&&ln(D,Q.startTime-B)}}function b(B,Q){R=!1,k&&(k=!1,v(_),_=-1),A=!0;var J=m;try{for(T(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var le=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),T(Q)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var un=n(h);un!==null&&ln(D,un.startTime-Q),Re=!1}return Re}finally{p=null,m=J,A=!1}}var U=!1,E=null,_=-1,w=5,I=-1;function P(){return!(t.unstable_now()-I<w)}function N(){if(E!==null){var B=t.unstable_now();I=B;var Q=!0;try{Q=E(!0,B)}finally{Q?S():(U=!1,E=null)}}else U=!1}var S;if(typeof y=="function")S=function(){y(N)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Ar=Me.port2;Me.port1.onmessage=N,S=function(){Ar.postMessage(null)}}else S=function(){C(N,0)};function as(B){E=B,U||(U=!0,S())}function ln(B,Q){_=C(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,as(b))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:Q,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>_e?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(k?(v(_),_=-1):k=!0,ln(D,J-_e))):(B.sortIndex=le,e(u,B),R||A||(R=!0,as(b))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(Ay);Sy.exports=Ay;var TI=Sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var II=j,Pt=TI;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ry=new Set,no={};function ei(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(no[t]=e,t=0;t<e.length;t++)Ry.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,SI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function AI(t){return rh.call(Pm,t)?!0:rh.call(Rm,t)?!1:SI.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function RI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PI(t,e,n,r){if(e===null||typeof e>"u"||RI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,Cd);He[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,Cd);He[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,Cd);He[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PI(e,n,i,r)&&(n=null),r||i===null?AI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=II.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),gi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),ky=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,pc;function xs(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function CI(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case gi:return"Portal";case ih:return"Profiler";case Nd:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cy:return(t.displayName||"Context")+".Consumer";case Py:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function kI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NI(t){var e=Ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=NI(t))}function xy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ny(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dy(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function uh(t,e){Dy(t,e);var n=cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ds(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function Oy(t,e){var n=cr(e.value),r=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,Ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xI=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){xI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function My(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function by(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=My(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(DI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,Ni=null,xi=null;function Om(t){if(t=bo(t)){if(typeof gh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=lu(e),gh(t.stateNode,t.type,e))}}function Uy(t){Ni?xi?xi.push(t):xi=[t]:Ni=t}function Fy(){if(Ni){var t=Ni,e=xi;if(xi=Ni=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function jy(t,e){return t(e)}function By(){}var _c=!1;function zy(t,e,n){if(_c)return t(e,n);_c=!0;try{return jy(t,e,n)}finally{_c=!1,(Ni!==null||xi!==null)&&(By(),Fy())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var _h=!1;if(An)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{_h=!1}function OI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var zs=!1,_l=null,yl=!1,yh=null,VI={onError:function(t){zs=!0,_l=t}};function LI(t,e,n,r,i,s,o,l,u){zs=!1,_l=null,OI.apply(VI,arguments)}function MI(t,e,n,r,i,s,o,l,u){if(LI.apply(this,arguments),zs){if(zs){var h=_l;zs=!1,_l=null}else throw Error(M(198));yl||(yl=!0,yh=h)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(ti(t)!==t)throw Error(M(188))}function bI(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vm(i),t;if(s===r)return Vm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Wy(t){return t=bI(t),t!==null?qy(t):null}function qy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qy(t);if(e!==null)return e;t=t.sibling}return null}var Hy=Pt.unstable_scheduleCallback,Lm=Pt.unstable_cancelCallback,UI=Pt.unstable_shouldYield,FI=Pt.unstable_requestPaint,Ce=Pt.unstable_now,jI=Pt.unstable_getCurrentPriorityLevel,Vd=Pt.unstable_ImmediatePriority,Ky=Pt.unstable_UserBlockingPriority,vl=Pt.unstable_NormalPriority,BI=Pt.unstable_LowPriority,Gy=Pt.unstable_IdlePriority,iu=null,Zt=null;function zI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:qI,$I=Math.log,WI=Math.LN2;function qI(t){return t>>>=0,t===0?32:31-($I(t)/WI|0)|0}var Ca=64,ka=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Os(l):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function HI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=HI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qy(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function GI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Yy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xy,Md,Jy,Zy,ev,Eh=!1,Na=[],Zn=null,er=null,tr=null,so=new Map,oo=new Map,zn=[],QI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bo(e),e!==null&&Md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YI(t,e,n,r,i){switch(e){case"focusin":return Zn=Is(Zn,t,e,n,r,i),!0;case"dragenter":return er=Is(er,t,e,n,r,i),!0;case"mouseover":return tr=Is(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,Is(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,Is(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function tv(t){var e=Or(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=$y(n),e!==null){t.blockedOn=e,ev(t.priority,function(){Jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=bo(n),e!==null&&Md(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){Ya(t)&&n.delete(e)}function XI(){Eh=!1,Zn!==null&&Ya(Zn)&&(Zn=null),er!==null&&Ya(er)&&(er=null),tr!==null&&Ya(tr)&&(tr=null),so.forEach(bm),oo.forEach(bm)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Eh||(Eh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,XI)))}function ao(t){function e(i){return Ss(i,t)}if(0<Na.length){Ss(Na[0],t);for(var n=1;n<Na.length;n++){var r=Na[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Ss(Zn,t),er!==null&&Ss(er,t),tr!==null&&Ss(tr,t),so.forEach(e),oo.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)tv(n),n.blockedOn===null&&zn.shift()}var Di=On.ReactCurrentBatchConfig,wl=!0;function JI(t,e,n,r){var i=oe,s=Di.transition;Di.transition=null;try{oe=1,bd(t,e,n,r)}finally{oe=i,Di.transition=s}}function ZI(t,e,n,r){var i=oe,s=Di.transition;Di.transition=null;try{oe=4,bd(t,e,n,r)}finally{oe=i,Di.transition=s}}function bd(t,e,n,r){if(wl){var i=wh(t,e,n,r);if(i===null)Cc(t,e,r,Tl,n),Mm(t,r);else if(YI(i,t,e,n,r))r.stopPropagation();else if(Mm(t,r),e&4&&-1<QI.indexOf(t)){for(;i!==null;){var s=bo(i);if(s!==null&&Xy(s),s=wh(t,e,n,r),s===null&&Cc(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cc(t,e,r,null,n)}}var Tl=null;function wh(t,e,n,r){if(Tl=null,t=Od(r),t=Or(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jI()){case Vd:return 1;case Ky:return 4;case vl:case BI:return 16;case Gy:return 536870912;default:return 16}default:return 16}}var Qn=null,Ud=null,Xa=null;function rv(){if(Xa)return Xa;var t,e=Ud,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Um(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:Um,this.isPropagationStopped=Um,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=kt(es),Mo=Ee({},es,{view:0,detail:0}),eS=kt(Mo),vc,Ec,As,su=Ee({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(vc=t.screenX-As.screenX,Ec=t.screenY-As.screenY):Ec=vc=0,As=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Fm=kt(su),tS=Ee({},su,{dataTransfer:0}),nS=kt(tS),rS=Ee({},Mo,{relatedTarget:0}),wc=kt(rS),iS=Ee({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=kt(iS),oS=Ee({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=kt(oS),lS=Ee({},es,{data:0}),jm=kt(lS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function jd(){return dS}var fS=Ee({},Mo,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=kt(fS),mS=Ee({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=kt(mS),gS=Ee({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),_S=kt(gS),yS=Ee({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=kt(yS),ES=Ee({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=kt(ES),TS=[9,13,27,32],Bd=An&&"CompositionEvent"in window,$s=null;An&&"documentMode"in document&&($s=document.documentMode);var IS=An&&"TextEvent"in window&&!$s,iv=An&&(!Bd||$s&&8<$s&&11>=$s),zm=" ",$m=!1;function sv(t,e){switch(t){case"keyup":return TS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function SS(t,e){switch(t){case"compositionend":return ov(e);case"keypress":return e.which!==32?null:($m=!0,zm);case"textInput":return t=e.data,t===zm&&$m?null:t;default:return null}}function AS(t,e){if(yi)return t==="compositionend"||!Bd&&sv(t,e)?(t=rv(),Xa=Ud=Qn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function av(t,e,n,r){Uy(r),e=Il(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ws=null,lo=null;function PS(t){yv(t,0)}function ou(t){var e=wi(t);if(xy(e))return t}function CS(t,e){if(t==="change")return e}var lv=!1;if(An){var Tc;if(An){var Ic="oninput"in document;if(!Ic){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),Ic=typeof qm.oninput=="function"}Tc=Ic}else Tc=!1;lv=Tc&&(!document.documentMode||9<document.documentMode)}function Hm(){Ws&&(Ws.detachEvent("onpropertychange",uv),lo=Ws=null)}function uv(t){if(t.propertyName==="value"&&ou(lo)){var e=[];av(e,lo,t,Od(t)),zy(PS,e)}}function kS(t,e,n){t==="focusin"?(Hm(),Ws=e,lo=n,Ws.attachEvent("onpropertychange",uv)):t==="focusout"&&Hm()}function NS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(lo)}function xS(t,e){if(t==="click")return ou(e)}function DS(t,e){if(t==="input"||t==="change")return ou(e)}function OS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:OS;function uo(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Km(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VS(t){var e=hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&zd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gm(n,s);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LS=An&&"documentMode"in document&&11>=document.documentMode,vi=null,Th=null,qs=null,Ih=!1;function Qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||vi==null||vi!==gl(r)||(r=vi,"selectionStart"in r&&zd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&uo(qs,r)||(qs=r,r=Il(Th,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Sc={},dv={};An&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function au(t){if(Sc[t])return Sc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dv)return Sc[t]=e[n];return t}var fv=au("animationend"),pv=au("animationiteration"),mv=au("animationstart"),gv=au("transitionend"),_v=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){_v.set(t,e),ei(e,[t])}for(var Ac=0;Ac<Ym.length;Ac++){var Rc=Ym[Ac],MS=Rc.toLowerCase(),bS=Rc[0].toUpperCase()+Rc.slice(1);_r(MS,"on"+bS)}_r(fv,"onAnimationEnd");_r(pv,"onAnimationIteration");_r(mv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(gv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),US=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MI(r,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Xm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Xm(i,l,h),s=u}}}if(yl)throw t=yh,yl=!1,yh=null,t}function de(t,e){var n=e[Ch];n===void 0&&(n=e[Ch]=new Set);var r=t+"__bubble";n.has(r)||(vv(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),vv(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Oa]){t[Oa]=!0,Ry.forEach(function(n){n!=="selectionchange"&&(US.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Pc("selectionchange",!1,e))}}function vv(t,e,n,r){switch(nv(e)){case 1:var i=JI;break;case 4:i=ZI;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Or(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zy(function(){var h=s,f=Od(n),p=[];e:{var m=_v.get(t);if(m!==void 0){var A=Fd,R=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":A=pS;break;case"focusin":R="focus",A=wc;break;case"focusout":R="blur",A=wc;break;case"beforeblur":case"afterblur":A=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=_S;break;case fv:case pv:case mv:A=sS;break;case gv:A=vS;break;case"scroll":A=eS;break;case"wheel":A=wS;break;case"copy":case"cut":case"paste":A=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Bm}var k=(e&4)!==0,C=!k&&t==="scroll",v=k?m!==null?m+"Capture":null:m;k=[];for(var y=h,T;y!==null;){T=y;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,v!==null&&(D=io(y,v),D!=null&&k.push(ho(y,D,T)))),C)break;y=y.return}0<k.length&&(m=new A(m,R,null,n,f),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==mh&&(R=n.relatedTarget||n.fromElement)&&(Or(R)||R[Rn]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=h,R=R?Or(R):null,R!==null&&(C=ti(R),R!==C||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=h),A!==R)){if(k=Fm,D="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Bm,D="onPointerLeave",v="onPointerEnter",y="pointer"),C=A==null?m:wi(A),T=R==null?m:wi(R),m=new k(D,y+"leave",A,n,f),m.target=C,m.relatedTarget=T,D=null,Or(f)===h&&(k=new k(v,y+"enter",R,n,f),k.target=T,k.relatedTarget=C,D=k),C=D,A&&R)t:{for(k=A,v=R,y=0,T=k;T;T=hi(T))y++;for(T=0,D=v;D;D=hi(D))T++;for(;0<y-T;)k=hi(k),y--;for(;0<T-y;)v=hi(v),T--;for(;y--;){if(k===v||v!==null&&k===v.alternate)break t;k=hi(k),v=hi(v)}k=null}else k=null;A!==null&&Jm(p,m,A,k,!1),R!==null&&C!==null&&Jm(p,C,R,k,!0)}}e:{if(m=h?wi(h):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var b=CS;else if(Wm(m))if(lv)b=DS;else{b=NS;var U=kS}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=xS);if(b&&(b=b(t,h))){av(p,b,n,f);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&ch(m,"number",m.value)}switch(U=h?wi(h):window,t){case"focusin":(Wm(U)||U.contentEditable==="true")&&(vi=U,Th=h,qs=null);break;case"focusout":qs=Th=vi=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,Qm(p,n,f);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":Qm(p,n,f)}var E;if(Bd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yi?sv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(iv&&n.locale!=="ko"&&(yi||_!=="onCompositionStart"?_==="onCompositionEnd"&&yi&&(E=rv()):(Qn=f,Ud="value"in Qn?Qn.value:Qn.textContent,yi=!0)),U=Il(h,_),0<U.length&&(_=new jm(_,t,null,n,f),p.push({event:_,listeners:U}),E?_.data=E:(E=ov(n),E!==null&&(_.data=E)))),(E=IS?SS(t,n):AS(t,n))&&(h=Il(h,"onBeforeInput"),0<h.length&&(f=new jm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}yv(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=io(t,n),s!=null&&r.unshift(ho(t,s,i)),s=io(t,e),s!=null&&r.push(ho(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=io(n,s),u!=null&&o.unshift(ho(n,u,l))):i||(u=io(n,s),u!=null&&o.push(ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Zm(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(jS,"")}function Va(t,e,n){if(e=Zm(e),Zm(t)!==e&&n)throw Error(M(425))}function Sl(){}var Sh=null,Ah=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch($S)}:Ph;function $S(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Xt="__reactFiber$"+ts,fo="__reactProps$"+ts,Rn="__reactContainer$"+ts,Ch="__reactEvents$"+ts,WS="__reactListeners$"+ts,qS="__reactHandles$"+ts;function Or(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tg(t);t!==null;){if(n=t[Xt])return n;t=tg(t)}return e}t=n,n=t.parentNode}return null}function bo(t){return t=t[Xt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function lu(t){return t[fo]||null}var kh=[],Ti=-1;function yr(t){return{current:t}}function pe(t){0>Ti||(t.current=kh[Ti],kh[Ti]=null,Ti--)}function ce(t,e){Ti++,kh[Ti]=t.current,t.current=e}var hr={},it=yr(hr),yt=yr(!1),zr=hr;function ji(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Al(){pe(yt),pe(it)}function ng(t,e,n){if(it.current!==hr)throw Error(M(168));ce(it,e),ce(yt,n)}function Ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,kI(t)||"Unknown",i));return Ee({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,zr=it.current,ce(it,t),ce(yt,yt.current),!0}function rg(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Ev(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,pe(yt),pe(it),ce(it,t)):pe(yt),ce(yt,n)}var gn=null,uu=!1,Nc=!1;function wv(t){gn===null?gn=[t]:gn.push(t)}function HS(t){uu=!0,wv(t)}function vr(){if(!Nc&&gn!==null){Nc=!0;var t=0,e=oe;try{var n=gn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,uu=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),Hy(Vd,vr),i}finally{oe=e,Nc=!1}}return null}var Ii=[],Si=0,Pl=null,Cl=0,Nt=[],xt=0,$r=null,_n=1,yn="";function Nr(t,e){Ii[Si++]=Cl,Ii[Si++]=Pl,Pl=t,Cl=e}function Tv(t,e,n){Nt[xt++]=_n,Nt[xt++]=yn,Nt[xt++]=$r,$r=t;var r=_n;t=yn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-zt(e)+i|n<<i|r,yn=s+t}else _n=1<<s|n<<i|r,yn=t}function $d(t){t.return!==null&&(Nr(t,1),Tv(t,1,0))}function Wd(t){for(;t===Pl;)Pl=Ii[--Si],Ii[Si]=null,Cl=Ii[--Si],Ii[Si]=null;for(;t===$r;)$r=Nt[--xt],Nt[xt]=null,yn=Nt[--xt],Nt[xt]=null,_n=Nt[--xt],Nt[xt]=null}var Rt=null,It=null,ge=!1,jt=null;function Iv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,It=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:_n,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,It=null,!0):!1;default:return!1}}function Nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xh(t){if(ge){var e=It;if(e){var n=e;if(!ig(t,e)){if(Nh(t))throw Error(M(418));e=nr(n.nextSibling);var r=Rt;e&&ig(t,e)?Iv(r,n):(t.flags=t.flags&-4097|2,ge=!1,Rt=t)}}else{if(Nh(t))throw Error(M(418));t.flags=t.flags&-4097|2,ge=!1,Rt=t}}}function sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function La(t){if(t!==Rt)return!1;if(!ge)return sg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=It)){if(Nh(t))throw Sv(),Error(M(418));for(;e;)Iv(t,e),e=nr(e.nextSibling)}if(sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Rt?nr(t.stateNode.nextSibling):null;return!0}function Sv(){for(var t=It;t;)t=nr(t.nextSibling)}function Bi(){It=Rt=null,ge=!1}function qd(t){jt===null?jt=[t]:jt.push(t)}var KS=On.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function og(t){var e=t._init;return e(t._payload)}function Av(t){function e(v,y){if(t){var T=v.deletions;T===null?(v.deletions=[y],v.flags|=16):T.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=or(v,y),v.index=0,v.sibling=null,v}function s(v,y,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<y?(v.flags|=2,y):T):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,y,T,D){return y===null||y.tag!==6?(y=bc(T,v.mode,D),y.return=v,y):(y=i(y,T),y.return=v,y)}function u(v,y,T,D){var b=T.type;return b===_i?f(v,y,T.props.children,D,T.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jn&&og(b)===y.type)?(D=i(y,T.props),D.ref=Rs(v,y,T),D.return=v,D):(D=sl(T.type,T.key,T.props,null,v.mode,D),D.ref=Rs(v,y,T),D.return=v,D)}function h(v,y,T,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=Uc(T,v.mode,D),y.return=v,y):(y=i(y,T.children||[]),y.return=v,y)}function f(v,y,T,D,b){return y===null||y.tag!==7?(y=Ur(T,v.mode,D,b),y.return=v,y):(y=i(y,T),y.return=v,y)}function p(v,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=bc(""+y,v.mode,T),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return T=sl(y.type,y.key,y.props,null,v.mode,T),T.ref=Rs(v,null,y),T.return=v,T;case gi:return y=Uc(y,v.mode,T),y.return=v,y;case jn:var D=y._init;return p(v,D(y._payload),T)}if(Ds(y)||ws(y))return y=Ur(y,v.mode,T,null),y.return=v,y;Ma(v,y)}return null}function m(v,y,T,D){var b=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return b!==null?null:l(v,y,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Aa:return T.key===b?u(v,y,T,D):null;case gi:return T.key===b?h(v,y,T,D):null;case jn:return b=T._init,m(v,y,b(T._payload),D)}if(Ds(T)||ws(T))return b!==null?null:f(v,y,T,D,null);Ma(v,T)}return null}function A(v,y,T,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(T)||null,l(y,v,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Aa:return v=v.get(D.key===null?T:D.key)||null,u(y,v,D,b);case gi:return v=v.get(D.key===null?T:D.key)||null,h(y,v,D,b);case jn:var U=D._init;return A(v,y,T,U(D._payload),b)}if(Ds(D)||ws(D))return v=v.get(T)||null,f(y,v,D,b,null);Ma(y,D)}return null}function R(v,y,T,D){for(var b=null,U=null,E=y,_=y=0,w=null;E!==null&&_<T.length;_++){E.index>_?(w=E,E=null):w=E.sibling;var I=m(v,E,T[_],D);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(v,E),y=s(I,y,_),U===null?b=I:U.sibling=I,U=I,E=w}if(_===T.length)return n(v,E),ge&&Nr(v,_),b;if(E===null){for(;_<T.length;_++)E=p(v,T[_],D),E!==null&&(y=s(E,y,_),U===null?b=E:U.sibling=E,U=E);return ge&&Nr(v,_),b}for(E=r(v,E);_<T.length;_++)w=A(E,v,_,T[_],D),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?_:w.key),y=s(w,y,_),U===null?b=w:U.sibling=w,U=w);return t&&E.forEach(function(P){return e(v,P)}),ge&&Nr(v,_),b}function k(v,y,T,D){var b=ws(T);if(typeof b!="function")throw Error(M(150));if(T=b.call(T),T==null)throw Error(M(151));for(var U=b=null,E=y,_=y=0,w=null,I=T.next();E!==null&&!I.done;_++,I=T.next()){E.index>_?(w=E,E=null):w=E.sibling;var P=m(v,E,I.value,D);if(P===null){E===null&&(E=w);break}t&&E&&P.alternate===null&&e(v,E),y=s(P,y,_),U===null?b=P:U.sibling=P,U=P,E=w}if(I.done)return n(v,E),ge&&Nr(v,_),b;if(E===null){for(;!I.done;_++,I=T.next())I=p(v,I.value,D),I!==null&&(y=s(I,y,_),U===null?b=I:U.sibling=I,U=I);return ge&&Nr(v,_),b}for(E=r(v,E);!I.done;_++,I=T.next())I=A(E,v,_,I.value,D),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?_:I.key),y=s(I,y,_),U===null?b=I:U.sibling=I,U=I);return t&&E.forEach(function(N){return e(v,N)}),ge&&Nr(v,_),b}function C(v,y,T,D){if(typeof T=="object"&&T!==null&&T.type===_i&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Aa:e:{for(var b=T.key,U=y;U!==null;){if(U.key===b){if(b=T.type,b===_i){if(U.tag===7){n(v,U.sibling),y=i(U,T.props.children),y.return=v,v=y;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jn&&og(b)===U.type){n(v,U.sibling),y=i(U,T.props),y.ref=Rs(v,U,T),y.return=v,v=y;break e}n(v,U);break}else e(v,U);U=U.sibling}T.type===_i?(y=Ur(T.props.children,v.mode,D,T.key),y.return=v,v=y):(D=sl(T.type,T.key,T.props,null,v.mode,D),D.ref=Rs(v,y,T),D.return=v,v=D)}return o(v);case gi:e:{for(U=T.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(v,y.sibling),y=i(y,T.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Uc(T,v.mode,D),y.return=v,v=y}return o(v);case jn:return U=T._init,C(v,y,U(T._payload),D)}if(Ds(T))return R(v,y,T,D);if(ws(T))return k(v,y,T,D);Ma(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,T),y.return=v,v=y):(n(v,y),y=bc(T,v.mode,D),y.return=v,v=y),o(v)):n(v,y)}return C}var zi=Av(!0),Rv=Av(!1),kl=yr(null),Nl=null,Ai=null,Hd=null;function Kd(){Hd=Ai=Nl=null}function Gd(t){var e=kl.current;pe(kl),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Nl=t,Hd=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Nl===null)throw Error(M(308));Ai=t,Nl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Vr=null;function Qd(t){Vr===null?Vr=[t]:Vr.push(t)}function Pv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,k=l;switch(m=e,A=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){p=R.call(A,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,m=typeof R=="function"?R.call(A,p,m):R,m==null)break e;p=Ee({},p,m);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Uo={},en=yr(Uo),po=yr(Uo),mo=yr(Uo);function Lr(t){if(t===Uo)throw Error(M(174));return t}function Xd(t,e){switch(ce(mo,e),ce(po,t),ce(en,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}pe(en),ce(en,e)}function $i(){pe(en),pe(po),pe(mo)}function kv(t){Lr(mo.current);var e=Lr(en.current),n=dh(e,t.type);e!==n&&(ce(po,t),ce(en,n))}function Jd(t){po.current===t&&(pe(en),pe(po))}var ye=yr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Zd(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var el=On.ReactCurrentDispatcher,Dc=On.ReactCurrentBatchConfig,Wr=0,ve=null,Oe=null,Ue=null,Ol=!1,Hs=!1,go=0,GS=0;function Xe(){throw Error(M(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(Wr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?JS:ZS,t=n(r,i),Hs){s=0;do{if(Hs=!1,go=0,25<=s)throw Error(M(301));s+=1,Ue=Oe=null,e.updateQueue=null,el.current=eA,t=n(r,i)}while(Hs)}if(el.current=Vl,e=Oe!==null&&Oe.next!==null,Wr=0,Ue=Oe=ve=null,Ol=!1,e)throw Error(M(300));return t}function nf(){var t=go!==0;return go=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Lt(){if(Oe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ue===null?ve.memoizedState:Ue.next;if(e!==null)Ue=e,Oe=t;else{if(t===null)throw Error(M(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function _o(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Wr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,qr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nv(){}function xv(t,e){var n=ve,r=Lt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,rf(Vv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,yo(9,Ov.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(M(349));Wr&30||Dv(n,e,i)}return i}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ov(t,e,n,r){e.value=n,e.getSnapshot=r,Lv(e)&&Mv(t)}function Vv(t,e,n){return n(function(){Lv(e)&&Mv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Mv(t){var e=Pn(t,1);e!==null&&$t(e,t,1,-1)}function ug(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=XS.bind(null,ve,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return Lt().memoizedState}function tl(t,e,n,r){var i=Yt();ve.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function cg(t,e){return tl(8390656,8,t,e)}function rf(t,e){return cu(2048,8,t,e)}function Uv(t,e){return cu(4,2,t,e)}function Fv(t,e){return cu(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bv(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,jv.bind(null,e,t),n)}function sf(){}function zv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Wv(t,e,n){return Wr&21?(qt(n,e)||(n=Qy(),ve.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function QS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{oe=n,Dc.transition=r}}function qv(){return Lt().memoizedState}function YS(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))Kv(e,n);else if(n=Pv(t,e,n,r),n!==null){var i=ct();$t(n,t,r,i),Gv(n,e,r)}}function XS(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))Kv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Pv(t,e,i,r),n!==null&&(i=ct(),$t(n,t,r,i),Gv(n,e,r))}}function Hv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function Kv(t,e){Hs=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var Vl={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},JS={readContext:Vt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:ug,useDebugValue:sf,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=ug(!1),e=t[0];return t=QS.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Yt();if(ge){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Fe===null)throw Error(M(349));Wr&30||Dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cg(Vv.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,Ov.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Fe.identifierPrefix;if(ge){var n=yn,r=_n;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZS={readContext:Vt,useCallback:zv,useContext:Vt,useEffect:rf,useImperativeHandle:Bv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:$v,useReducer:Oc,useRef:bv,useState:function(){return Oc(_o)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return Wv(e,Oe.memoizedState,t)},useTransition:function(){var t=Oc(_o)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:xv,useId:qv,unstable_isNewReconciler:!1},eA={readContext:Vt,useCallback:zv,useContext:Vt,useEffect:rf,useImperativeHandle:Bv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:$v,useReducer:Vc,useRef:bv,useState:function(){return Vc(_o)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return Oe===null?e.memoizedState=t:Wv(e,Oe.memoizedState,t)},useTransition:function(){var t=Vc(_o)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:xv,useId:qv,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=sr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&($t(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=sr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&($t(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=sr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&($t(e,t,r,n),Za(e,t,r))}};function hg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(i,s):!0}function Qv(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=vt(e)?zr:it.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=vt(e)?zr:it.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=CI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tA=typeof WeakMap=="function"?WeakMap:Map;function Yv(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ml||(Ml=!0,qh=r),Lh(t,e)},n}function Xv(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mA.bind(null,t,e,n),e.then(t,t))}function pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var nA=On.ReactCurrentOwner,_t=!1;function ut(t,e,n,r){e.child=t===null?Rv(e,null,n,r):zi(e,t.child,n,r)}function gg(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ge&&n&&$d(e),e.flags|=1,ut(t,e,r,i),e.child)}function _g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(uo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return Mh(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Pi,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Pi,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Pi,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Pi,Tt),Tt|=r;return ut(t,e,i,n),e.child}function eE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var s=vt(n)?zr:it.current;return s=ji(e,s),Oi(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ge&&r&&$d(e),e.flags|=1,ut(t,e,n,i),e.child)}function yg(t,e,n,r,i){if(vt(n)){var s=!0;Rl(e)}else s=!1;if(Oi(e,i),e.stateNode===null)nl(t,e),Qv(e,n,r),Vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Vt(h):(h=vt(n)?zr:it.current,h=ji(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&dg(e,o,r,h),Bn=!1;var m=e.memoizedState;o.state=m,xl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||yt.current||Bn?(typeof f=="function"&&(Oh(e,n,f,r),u=e.memoizedState),(l=Bn||hg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ut(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=vt(n)?zr:it.current,u=ji(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&dg(e,o,r,u),Bn=!1,m=e.memoizedState,o.state=m,xl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||yt.current||Bn?(typeof A=="function"&&(Oh(e,n,A,r),R=e.memoizedState),(h=Bn||hg(e,n,h,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return bh(t,e,n,r,s,i)}function bh(t,e,n,r,i,s){eE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rg(e,n,!1),Cn(t,e,s);r=e.stateNode,nA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&rg(e,n,!0),e.child}function tE(t){var e=t.stateNode;e.pendingContext?ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ng(t,e.context,!1),Xd(t,e.containerInfo)}function vg(t,e,n,r,i){return Bi(),qd(i),e.flags|=256,ut(t,e,n,r),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function nE(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=Uh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uh,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,r){return r!==null&&qd(r),zi(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(M(422))),ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=Uh,s);if(!(e.mode&1))return ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Lc(s,r,void 0),ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),$t(r,t,i,-1))}return df(),r=Lc(Error(M(421))),ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=nr(i.nextSibling),Rt=e,ge=!0,jt=null,t!==null&&(Nt[xt++]=_n,Nt[xt++]=yn,Nt[xt++]=$r,_n=t.id,yn=t.overflow,$r=e),e=of(e,r.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function Mc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mc(e,!0,n,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iA(t,e,n){switch(e.tag){case 3:tE(e),Bi();break;case 5:kv(e);break;case 1:vt(e.type)&&Rl(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?nE(t,e,n):(ce(ye,ye.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Cn(t,e,n)}var iE,jh,sE,oE;iE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jh=function(){};sE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(en.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=hh(t,i),r=hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}fh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(no.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(no.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};oE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sA(t,e,n){var r=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return vt(e.type)&&Al(),Je(e),null;case 3:return r=e.stateNode,$i(),pe(yt),pe(it),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Gh(jt),jt=null))),jh(t,e),Je(e),null;case 5:Jd(e);var i=Lr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)sE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Je(e),null}if(t=Lr(en.current),La(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[fo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)de(Vs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":km(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":xm(r,s),de("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",""+l]):no.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ra(r),Nm(r,s,!0);break;case"textarea":Ra(r),Dm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[fo]=r,iE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)de(Vs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":km(t,r),i=lh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":xm(t,r),i=hh(t,r),de("invalid",t);break;default:i=r}fh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?by(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ly(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(t,u):typeof u=="number"&&ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":Ra(t),Nm(t,r,!1);break;case"textarea":Ra(t),Dm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)oE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Lr(mo.current),Lr(en.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&It!==null&&e.mode&1&&!(e.flags&128))Sv(),Bi(),e.flags|=98560,s=!1;else if(s=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Xt]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else jt!==null&&(Gh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ve===0&&(Ve=3):df())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return $i(),jh(t,e),t===null&&co(e.stateNode.containerInfo),Je(e),null;case 10:return Gd(e.type._context),Je(e),null;case 17:return vt(e.type)&&Al(),Je(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>qi&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Ce()-s.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function oA(t,e){switch(Wd(e),e.tag){case 1:return vt(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),pe(yt),pe(it),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return $i(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ua=!1,tt=!1,aA=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var wg=!1;function lA(t,e){if(Sh=wl,t=hv(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ah={focusedElem:t,selectionRange:n},wl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,C=R.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ut(e.type,k),C);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Ie(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=wg,wg=!1,R}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aE(t){var e=t.alternate;e!==null&&(t.alternate=null,aE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[fo],delete e[Ch],delete e[WS],delete e[qS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lE(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Be=null,Ft=!1;function bn(t,e,n){for(n=n.child;n!==null;)uE(t,e,n),n=n.sibling}function uE(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:tt||Ri(n,e);case 6:var r=Be,i=Ft;Be=null,bn(t,e,n),Be=r,Ft=i,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),ao(t)):kc(Be,n.stateNode));break;case 4:r=Be,i=Ft,Be=n.stateNode.containerInfo,Ft=!0,bn(t,e,n),Be=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bh(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!tt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,bn(t,e,n),tt=r):bn(t,e,n);break;default:bn(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aA),e.forEach(function(r){var i=_A.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(M(160));uE(s,o,i),Be=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cE(e,t),e=e.sibling}function cE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Qt(t),r&4){try{Ks(3,t,t.return),du(3,t)}catch(k){Ie(t,t.return,k)}try{Ks(5,t,t.return)}catch(k){Ie(t,t.return,k)}}break;case 1:bt(e,t),Qt(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(bt(e,t),Qt(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{ro(i,"")}catch(k){Ie(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dy(i,s),ph(l,o);var h=ph(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?by(i,p):f==="dangerouslySetInnerHTML"?Ly(i,p):f==="children"?ro(i,p):kd(i,f,p,h)}switch(l){case"input":uh(i,s);break;case"textarea":Oy(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ki(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[fo]=s}catch(k){Ie(t,t.return,k)}}break;case 6:if(bt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ie(t,t.return,k)}}break;case 3:if(bt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(k){Ie(t,t.return,k)}break;case 4:bt(e,t),Qt(t);break;case 13:bt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=Ce())),r&4&&Ig(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||f,bt(e,t),tt=h):bt(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(m=$,A=m.child,m.tag){case 0:case 11:case 14:case 15:Ks(4,m,m.return);break;case 1:Ri(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Ie(r,n,k)}}break;case 5:Ri(m,m.return);break;case 22:if(m.memoizedState!==null){Ag(p);continue}}A!==null?(A.return=m,$=A):Ag(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=My("display",o))}catch(k){Ie(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(k){Ie(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Qt(t),r&4&&Ig(t);break;case 21:break;default:bt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lE(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var s=Tg(t);Wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Tg(t);$h(t,l,o);break;default:throw Error(M(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uA(t,e,n){$=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Ua;var h=tt;if(Ua=o,(tt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Rg(i):u!==null?(u.return=o,$=u):Rg(i);for(;s!==null;)$=s,hE(s),s=s.sibling;$=i,Ua=l,tt=h}Sg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Sg(t)}}function Sg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}tt||e.flags&512&&zh(e)}catch(m){Ie(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ag(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Rg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{zh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{zh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var cA=Math.ceil,Ll=On.ReactCurrentDispatcher,af=On.ReactCurrentOwner,Ot=On.ReactCurrentBatchConfig,re=0,Fe=null,Ne=null,We=0,Tt=0,Pi=yr(0),Ve=0,vo=null,qr=0,fu=0,lf=0,Gs=null,mt=null,uf=0,qi=1/0,mn=null,Ml=!1,qh=null,ir=null,Fa=!1,Yn=null,bl=0,Qs=0,Hh=null,rl=-1,il=0;function ct(){return re&6?Ce():rl!==-1?rl:rl=Ce()}function sr(t){return t.mode&1?re&2&&We!==0?We&-We:KS.transition!==null?(il===0&&(il=Qy()),il):(t=oe,t!==0||(t=window.event,t=t===void 0?16:nv(t.type)),t):1}function $t(t,e,n,r){if(50<Qs)throw Qs=0,Hh=null,Error(M(185));Lo(t,n,r),(!(re&2)||t!==Fe)&&(t===Fe&&(!(re&2)&&(fu|=n),Ve===4&&$n(t,We)),Et(t,r),n===1&&re===0&&!(e.mode&1)&&(qi=Ce()+500,uu&&vr()))}function Et(t,e){var n=t.callbackNode;KI(t,e);var r=El(t,t===Fe?We:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?HS(Pg.bind(null,t)):wv(Pg.bind(null,t)),zS(function(){!(re&6)&&vr()}),n=null;else{switch(Yy(r)){case 1:n=Vd;break;case 4:n=Ky;break;case 16:n=vl;break;case 536870912:n=Gy;break;default:n=vl}n=vE(n,dE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dE(t,e){if(rl=-1,il=0,re&6)throw Error(M(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=El(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ul(t,r);else{e=r;var i=re;re|=2;var s=pE();(Fe!==t||We!==e)&&(mn=null,qi=Ce()+500,br(t,e));do try{fA();break}catch(l){fE(t,l)}while(!0);Kd(),Ll.current=s,re=i,Ne!==null?e=0:(Fe=null,We=0,e=Ve)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=vo,br(t,0),$n(t,r),Et(t,Ce()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!hA(i)&&(e=Ul(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=vo,br(t,0),$n(t,r),Et(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:xr(t,mt,mn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=uf+500-Ce(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ph(xr.bind(null,t,mt,mn),e);break}xr(t,mt,mn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cA(r/1960))-r,10<r){t.timeoutHandle=Ph(xr.bind(null,t,mt,mn),r);break}xr(t,mt,mn);break;case 5:xr(t,mt,mn);break;default:throw Error(M(329))}}}return Et(t,Ce()),t.callbackNode===n?dE.bind(null,t):null}function Kh(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=mt,mt=n,e!==null&&Gh(e)),t}function Gh(t){mt===null?mt=t:mt.push.apply(mt,t)}function hA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~lf,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(re&6)throw Error(M(327));Vi();var e=El(t,0);if(!(e&1))return Et(t,Ce()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=vo,br(t,0),$n(t,e),Et(t,Ce()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,mt,mn),Et(t,Ce()),null}function cf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(qi=Ce()+500,uu&&vr())}}function Hr(t){Yn!==null&&Yn.tag===0&&!(re&6)&&Vi();var e=re;re|=1;var n=Ot.transition,r=oe;try{if(Ot.transition=null,oe=1,t)return t()}finally{oe=r,Ot.transition=n,re=e,!(re&6)&&vr()}}function hf(){Tt=Pi.current,pe(Pi)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:$i(),pe(yt),pe(it),Zd();break;case 5:Jd(r);break;case 4:$i();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(Fe=t,Ne=t=or(t.current,null),We=Tt=e,Ve=0,vo=null,lf=fu=qr=0,mt=Gs=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vr=null}return t}function fE(t,e){do{var n=Ne;try{if(Kd(),el.current=Vl,Ol){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(Wr=0,Ue=Oe=ve=null,Hs=!1,go=0,af.current=null,n===null||n.return===null){Ve=1,vo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=pg(o);if(A!==null){A.flags&=-257,mg(A,o,l,s,e),A.mode&1&&fg(s,h,e),e=A,u=h;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){fg(s,h,e),df();break e}u=Error(M(426))}}else if(ge&&l.mode&1){var C=pg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),mg(C,o,l,s,e),qd(Wi(u,l));break e}}s=u=Wi(u,l),Ve!==4&&(Ve=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Yv(s,u,e);ag(s,v);break e;case 1:l=u;var y=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(ir===null||!ir.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Xv(s,l,e);ag(s,D);break e}}s=s.return}while(s!==null)}gE(n)}catch(b){e=b,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function pE(){var t=Ll.current;return Ll.current=Vl,t===null?Vl:t}function df(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Fe===null||!(qr&268435455)&&!(fu&268435455)||$n(Fe,We)}function Ul(t,e){var n=re;re|=2;var r=pE();(Fe!==t||We!==e)&&(mn=null,br(t,e));do try{dA();break}catch(i){fE(t,i)}while(!0);if(Kd(),re=n,Ll.current=r,Ne!==null)throw Error(M(261));return Fe=null,We=0,Ve}function dA(){for(;Ne!==null;)mE(Ne)}function fA(){for(;Ne!==null&&!UI();)mE(Ne)}function mE(t){var e=yE(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?gE(t):Ne=e,af.current=null}function gE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oA(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=sA(n,e,Tt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function xr(t,e,n){var r=oe,i=Ot.transition;try{Ot.transition=null,oe=1,pA(t,e,n,r)}finally{Ot.transition=i,oe=r}return null}function pA(t,e,n,r){do Vi();while(Yn!==null);if(re&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GI(t,s),t===Fe&&(Ne=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,vE(vl,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=oe;oe=1;var l=re;re|=4,af.current=null,lA(t,n),cE(n,t),VS(Ah),wl=!!Sh,Ah=Sh=null,t.current=n,uA(n),FI(),re=l,oe=o,Ot.transition=s}else t.current=n;if(Fa&&(Fa=!1,Yn=t,bl=i),s=t.pendingLanes,s===0&&(ir=null),zI(n.stateNode),Et(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ml)throw Ml=!1,t=qh,qh=null,t;return bl&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===Hh?Qs++:(Qs=0,Hh=t):Qs=0,vr(),null}function Vi(){if(Yn!==null){var t=Yy(bl),e=Ot.transition,n=oe;try{if(Ot.transition=null,oe=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,bl=0,re&6)throw Error(M(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ks(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var m=f.sibling,A=f.return;if(aE(f),f===h){$=null;break}if(m!==null){m.return=A,$=m;break}$=A}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var y=t.current;for($=y;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=y;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(b){Ie(l,l.return,b)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(re=i,vr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{oe=n,Ot.transition=e}}return!1}function Cg(t,e,n){e=Wi(n,e),e=Yv(t,e,1),t=rr(t,e,1),e=ct(),t!==null&&(Lo(t,1,e),Et(t,e))}function Ie(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Wi(n,t),t=Xv(e,t,1),e=rr(e,t,1),t=ct(),e!==null&&(Lo(e,1,t),Et(e,t));break}}e=e.return}}function mA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(Ve===4||Ve===3&&(We&130023424)===We&&500>Ce()-uf?br(t,0):lf|=n),Et(t,e)}function _E(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=ct();t=Pn(t,e),t!==null&&(Lo(t,e,n),Et(t,n))}function gA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_E(t,n)}function _A(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),_E(t,n)}var yE;yE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,iA(t,e,n);_t=!!(t.flags&131072)}else _t=!1,ge&&e.flags&1048576&&Tv(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=ji(e,it.current);Oi(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,Rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Vh(e,r,t,n),e=bh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&$d(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vA(r),t=Ut(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=yg(null,e,r,t,n);break e;case 11:e=gg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,Ut(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),yg(t,e,r,i,n);case 3:e:{if(tE(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cv(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(M(423)),e),e=vg(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(M(424)),e),e=vg(t,e,r,n,i);break e}else for(It=nr(e.stateNode.containerInfo.firstChild),Rt=e,ge=!0,jt=null,n=Rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=Cn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&xh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),eE(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&xh(e),null;case 13:return nE(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),gg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(kl,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!yt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=Vt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),_g(t,e,r,i,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),nl(t,e),e.tag=1,vt(r)?(t=!0,Rl(e)):t=!1,Oi(e,n),Qv(e,r,i),Vh(e,r,i,n),bh(null,e,r,!0,t,n);case 19:return rE(t,e,n);case 22:return Zv(t,e,n)}throw Error(M(156,e.tag))};function vE(t,e){return Hy(t,e)}function yA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new yA(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vA(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Dd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return Ur(n.children,i,s,e);case Nd:o=8,i|=8;break;case ih:return t=Dt(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Dt(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Dt(19,n,e,i),t.elementType=oh,t.lanes=s,t;case ky:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Py:o=10;break e;case Cy:o=9;break e;case xd:o=11;break e;case Dd:o=14;break e;case jn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=ky,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new EA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function wA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return hr;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(vt(n))return Ev(t,n,e)}return e}function wE(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=EE(null),n=t.current,r=ct(),i=sr(n),s=Tn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,Lo(t,i,r),Et(t,r),t}function mu(t,e,n,r){var i=e.current,s=ct(),o=sr(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&($t(t,i,o,s),Za(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function TA(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}gu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));mu(t,e,null,null)};gu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){mu(null,t,null,null)}),e[Rn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&tv(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function IA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Fl(o);s.call(h)}}var o=wE(e,r,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=o,t[Rn]=o.current,co(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Fl(u);l.call(h)}}var u=pf(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=u,t[Rn]=u.current,co(t.nodeType===8?t.parentNode:t),Hr(function(){mu(e,u,n,r)}),u}function yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fl(o);l.call(u)}}mu(e,o,t,i)}else o=IA(n,e,t,i,r);return Fl(o)}Xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(Ld(e,n|1),Et(e,Ce()),!(re&6)&&(qi=Ce()+500,vr()))}break;case 13:Hr(function(){var r=Pn(t,1);if(r!==null){var i=ct();$t(r,t,1,i)}}),mf(t,1)}};Md=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ct();$t(e,t,134217728,n)}mf(t,134217728)}};Jy=function(t){if(t.tag===13){var e=sr(t),n=Pn(t,e);if(n!==null){var r=ct();$t(n,t,e,r)}mf(t,e)}};Zy=function(){return oe};ev=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(M(90));xy(r),uh(r,i)}}}break;case"textarea":Oy(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};jy=cf;By=Hr;var SA={usingClientEntryPoint:!1,Events:[bo,wi,lu,Uy,Fy,cf]},Cs={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AA={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wy(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||TA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{iu=ja.inject(AA),Zt=ja}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SA;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(M(200));return wA(t,e,null,n)};Ct.createRoot=function(t,e){if(!_f(t))throw Error(M(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,co(t.nodeType===8?t.parentNode:t),new gf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Wy(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Hr(t)};Ct.hydrate=function(t,e,n){if(!_u(e))throw Error(M(200));return yu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wE(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};Ct.render=function(t,e,n){if(!_u(e))throw Error(M(200));return yu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!_u(t))throw Error(M(40));return t._reactRootContainer?(Hr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Ct.unstable_batchedUpdates=cf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return yu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),Iy.exports=Ct;var RA=Iy.exports,xg=RA;nh.createRoot=xg.createRoot,nh.hydrateRoot=xg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(null,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Dg="popstate";function PA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=ni(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Qh("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,h=u.indexOf("#");l=h===-1?u:u.slice(0,h)}return l+"#"+(typeof s=="string"?s:SE(s))}function r(i,s){vu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return kA(e,n,r,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CA(){return Math.random().toString(36).substr(2,8)}function Og(t,e){return{usr:t.state,key:t.key,idx:e}}function Qh(t,e,n,r){return n===void 0&&(n=null),Eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ni(e):e,{state:n,key:e&&e.key||r||CA()})}function SE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ni(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(Eo({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Xn.Pop;let C=f(),v=C==null?null:C-h;h=C,u&&u({action:l,location:k.location,delta:v})}function m(C,v){l=Xn.Push;let y=Qh(k.location,C,v);n&&n(y,C),h=f()+1;let T=Og(y,h),D=k.createHref(y);try{o.pushState(T,"",D)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function A(C,v){l=Xn.Replace;let y=Qh(k.location,C,v);n&&n(y,C),h=f();let T=Og(y,h),D=k.createHref(y);o.replaceState(T,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function R(C){let v=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof C=="string"?C:SE(C);return y=y.replace(/ $/,"%20"),De(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let k={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dg,p),u=C,()=>{i.removeEventListener(Dg,p),u=null}},createHref(C){return e(i,C)},createURL:R,encodeLocation(C){let v=R(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:A,go(C){return o.go(C)}};return k}var Vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vg||(Vg={}));function NA(t,e,n){return n===void 0&&(n="/"),xA(t,e,n)}function xA(t,e,n,r){let i=typeof e=="string"?ni(e):e,s=PE(i.pathname||"/",n);if(s==null)return null;let o=AE(t);DA(o);let l=null,u=WA(s);for(let h=0;l==null&&h<o.length;++h)l=BA(o[h],u);return l}function AE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(De(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Fr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),AE(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:FA(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of RE(s.path))i(s,o,u)}),e}function RE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function DA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const OA=/^:[\w-]+$/,VA=3,LA=2,MA=1,bA=10,UA=-2,Lg=t=>t==="*";function FA(t,e){let n=t.split("/"),r=n.length;return n.some(Lg)&&(r+=UA),e&&(r+=LA),n.filter(i=>!Lg(i)).reduce((i,s)=>i+(OA.test(s)?VA:s===""?MA:bA),r)}function jA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function BA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=zA({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Fr([s,p.pathname]),pathnameBase:QA(Fr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Fr([s,p.pathnameBase]))}return o}function zA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:m,isOptional:A}=f;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=l[p];return A&&!R?h[m]=void 0:h[m]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function $A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function PE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const qA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HA=t=>qA.test(t);function KA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ni(t):t,s;if(n)if(HA(n))s=n;else{if(n.includes("//")){let o=n;n=NE(n),vu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Mg(n.substring(1),"/"):s=Mg(n,e)}else s=e;return{pathname:s,search:YA(r),hash:XA(i)}}function Mg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function CE(t,e){let n=GA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ni(t):(i=Eo({},t),De(!i.pathname||!i.pathname.includes("?"),Fc("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),Fc("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),Fc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=KA(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const NE=t=>t.replace(/\/\/+/g,"/"),Fr=t=>NE(t.join("/")),QA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function JA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xE=["post","put","patch","delete"];new Set(xE);const ZA=["get",...xE];new Set(ZA);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(null,arguments)}const yf=j.createContext(null),eR=j.createContext(null),Fo=j.createContext(null),Eu=j.createContext(null),ri=j.createContext({outlet:null,matches:[],isDataRoute:!1}),DE=j.createContext(null);function jo(){return j.useContext(Eu)!=null}function wu(){return jo()||De(!1),j.useContext(Eu).location}function OE(t){j.useContext(Fo).static||j.useLayoutEffect(t)}function VE(){let{isDataRoute:t}=j.useContext(ri);return t?fR():tR()}function tR(){jo()||De(!1);let t=j.useContext(yf),{basename:e,future:n,navigator:r}=j.useContext(Fo),{matches:i}=j.useContext(ri),{pathname:s}=wu(),o=JSON.stringify(CE(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return OE(()=>{l.current=!0}),j.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=kE(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Fr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function nR(t,e){return rR(t,e)}function rR(t,e,n,r){jo()||De(!1);let{navigator:i}=j.useContext(Fo),{matches:s}=j.useContext(ri),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=wu(),f;if(e){var p;let C=typeof e=="string"?ni(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||De(!1),f=C}else f=h;let m=f.pathname||"/",A=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");A="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let R=NA(t,{pathname:A}),k=lR(R&&R.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Fr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Fr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?j.createElement(Eu.Provider,{value:{location:wo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Xn.Pop}},k):k}function iR(){let t=dR(),e=JA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const sR=j.createElement(iR,null);class oR extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(ri.Provider,{value:this.props.routeContext},j.createElement(DE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aR(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(yf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ri.Provider,{value:e},r)}function lR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||De(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:m,errors:A}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||R){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let A,R=!1,k=null,C=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||sR,u&&(h<0&&m===0?(pR("route-fallback"),R=!0,C=null):h===m&&(R=!0,C=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),y=()=>{let T;return A?T=k:R?T=C:p.route.Component?T=j.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=f,j.createElement(aR,{match:p,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement(oR,{location:n.location,revalidation:n.revalidation,component:k,error:A,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var LE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LE||{}),ME=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ME||{});function uR(t){let e=j.useContext(yf);return e||De(!1),e}function cR(t){let e=j.useContext(eR);return e||De(!1),e}function hR(t){let e=j.useContext(ri);return e||De(!1),e}function bE(t){let e=hR(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function dR(){var t;let e=j.useContext(DE),n=cR(),r=bE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fR(){let{router:t}=uR(LE.UseNavigateStable),e=bE(ME.UseNavigateStable),n=j.useRef(!1);return OE(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,wo({fromRouteId:e},s)))},[t,e])}const bg={};function pR(t,e,n){bg[t]||(bg[t]=!0)}function mR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yh(t){let{to:e,replace:n,state:r,relative:i}=t;jo()||De(!1);let{future:s,static:o}=j.useContext(Fo),{matches:l}=j.useContext(ri),{pathname:u}=wu(),h=VE(),f=kE(e,CE(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return j.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function di(t){De(!1)}function gR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:l}=t;jo()&&De(!1);let u=e.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:u,navigator:s,static:o,future:wo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ni(r));let{pathname:f="/",search:p="",hash:m="",state:A=null,key:R="default"}=r,k=j.useMemo(()=>{let C=PE(f,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:A,key:R},navigationType:i}},[u,f,p,m,A,R,i]);return k==null?null:j.createElement(Fo.Provider,{value:h},j.createElement(Eu.Provider,{children:n,value:k}))}function _R(t){let{children:e,location:n}=t;return nR(Xh(e),n)}new Promise(()=>{});function Xh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Xh(r.props.children,s));return}r.type!==di&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yR="6";try{window.__reactRouterVersion=yR}catch{}const vR="startTransition",Ug=mI[vR];function ER(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=PA({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=j.useCallback(p=>{h&&Ug?Ug(()=>u(p)):u(p)},[u,h]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>mR(r),[r]),j.createElement(gR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Fg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fg||(Fg={}));var jg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jg||(jg={}));const wR="modulepreload",TR=function(t){return"/dermlux-email/"+t},Bg={},vf=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=TR(u),u in Bg)return;Bg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":wR,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,A)=>{p.addEventListener("load",m),p.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},FE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(m=64)),r.push(n[f],n[p],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(UE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new SR;const m=s<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AR=function(t){const e=UE(t);return FE.encodeByteArray(e,!0)},jl=function(t){return AR(t).replace(/\./g,"")},jE=function(t){try{return FE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=()=>RR().__FIREBASE_DEFAULTS__,CR=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jE(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return PR()||CR()||kR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BE=t=>{var e,n;return(n=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zE=t=>{const e=BE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$E=()=>{var t;return(t=Tu())===null||t===void 0?void 0:t.config},WE=t=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function DR(){var t;const e=(t=Tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MR(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bR(){return!DR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UR(){try{return typeof indexedDB=="object"}catch{return!1}}function FR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jR,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,l,r)}}function BR(t,e){return t.replace(zR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zR=/\{\$([^}]+)}/g;function $R(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($g(s)&&$g(o)){if(!Bl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function WR(t,e){const n=new qR(t,e);return n.subscribe.bind(n)}class qR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jc),i.error===void 0&&(i.error=jc),i.complete===void 0&&(i.complete=jc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QR(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GR(t){return t===Dr?void 0:t}function QR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const XR={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},JR=te.INFO,ZR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},eP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=JR,this._logHandler=eP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const tP=(t,e)=>e.some(n=>t instanceof n);let Wg,qg;function nP(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rP(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HE=new WeakMap,Jh=new WeakMap,KE=new WeakMap,Bc=new WeakMap,wf=new WeakMap;function iP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HE.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function sP(t){if(Jh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jh.set(t,e)}let Zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oP(t){Zh=t(Zh)}function aP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zc(this),e,...n);return KE.set(r,e.sort?e.sort():[e]),ar(r)}:rP().includes(t)?function(...e){return t.apply(zc(this),e),ar(HE.get(this))}:function(...e){return ar(t.apply(zc(this),e))}}function lP(t){return typeof t=="function"?aP(t):(t instanceof IDBTransaction&&sP(t),tP(t,nP())?new Proxy(t,Zh):t)}function ar(t){if(t instanceof IDBRequest)return iP(t);if(Bc.has(t))return Bc.get(t);const e=lP(t);return e!==t&&(Bc.set(t,e),wf.set(e,t)),e}const zc=t=>wf.get(t);function uP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const cP=["get","getKey","getAll","getAllKeys","count"],hP=["put","add","delete","clear"],$c=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return $c.set(e,s),s}oP(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",Kg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Ef("@firebase/app"),pP="@firebase/app-compat",mP="@firebase/analytics-compat",gP="@firebase/analytics",_P="@firebase/app-check-compat",yP="@firebase/app-check",vP="@firebase/auth",EP="@firebase/auth-compat",wP="@firebase/database",TP="@firebase/data-connect",IP="@firebase/database-compat",SP="@firebase/functions",AP="@firebase/functions-compat",RP="@firebase/installations",PP="@firebase/installations-compat",CP="@firebase/messaging",kP="@firebase/messaging-compat",NP="@firebase/performance",xP="@firebase/performance-compat",DP="@firebase/remote-config",OP="@firebase/remote-config-compat",VP="@firebase/storage",LP="@firebase/storage-compat",MP="@firebase/firestore",bP="@firebase/vertexai-preview",UP="@firebase/firestore-compat",FP="firebase",jP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="[DEFAULT]",BP={[ed]:"fire-core",[pP]:"fire-core-compat",[gP]:"fire-analytics",[mP]:"fire-analytics-compat",[yP]:"fire-app-check",[_P]:"fire-app-check-compat",[vP]:"fire-auth",[EP]:"fire-auth-compat",[wP]:"fire-rtdb",[TP]:"fire-data-connect",[IP]:"fire-rtdb-compat",[SP]:"fire-fn",[AP]:"fire-fn-compat",[RP]:"fire-iid",[PP]:"fire-iid-compat",[CP]:"fire-fcm",[kP]:"fire-fcm-compat",[NP]:"fire-perf",[xP]:"fire-perf-compat",[DP]:"fire-rc",[OP]:"fire-rc-compat",[VP]:"fire-gcs",[LP]:"fire-gcs-compat",[MP]:"fire-fst",[UP]:"fire-fst-compat",[bP]:"fire-vertex","fire-js":"fire-js",[FP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,$l=new Map,Wl=new Map;function td(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fr(t){const e=t.name;if(Wl.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,t);for(const n of Kr.values())td(n,t);for(const n of $l.values())td(n,t);return!0}function $o(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new Bo("app","Firebase",zP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=jP;function Tf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=$E()),!n)throw lr.create("no-options");const s=Kr.get(i);if(s){if(Bl(n,s.options)&&Bl(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new YR(i);for(const u of Wl.values())o.addComponent(u);const l=new $P(n,r,o);return Kr.set(i,l),l}function Iu(t=zl){const e=Kr.get(t);if(!e&&t===zl&&$E())return Tf();if(!e)throw lr.create("no-app",{appName:t});return e}async function WP(t){let e=!1;const n=t.name;Kr.has(n)?(e=!0,Kr.delete(n)):$l.has(n)&&t.decRefCount()<=0&&($l.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Wt(t,e,n){var r;let i=(r=BP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}fr(new dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="firebase-heartbeat-database",HP=1,To="firebase-heartbeat-store";let Wc=null;function GE(){return Wc||(Wc=uP(qP,HP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function KP(t){try{const n=(await GE()).transaction(To),r=await n.objectStore(To).get(QE(t));return await n.done,r}catch(e){if(e instanceof Gt)kn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Gg(t,e){try{const r=(await GE()).transaction(To,"readwrite");await r.objectStore(To).put(e,QE(t)),await r.done}catch(n){if(n instanceof Gt)kn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=1024,QP=30*24*60*60*1e3;class YP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=QP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qg(),{heartbeatsToSend:r,unsentEntries:i}=XP(this._heartbeatsCache.heartbeats),s=jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function XP(t,e=GP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UR()?FR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t){fr(new dr("platform-logger",e=>new dP(e),"PRIVATE")),fr(new dr("heartbeat",e=>new YP(e),"PRIVATE")),Wt(ed,Kg,t),Wt(ed,Kg,"esm2017"),Wt("fire-js","")}ZP("");function If(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function YE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eC=YE,XE=new Bo("auth","Firebase",YE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Ef("@firebase/auth");function tC(t,...e){ql.logLevel<=te.WARN&&ql.warn(`Auth (${Er}): ${t}`,...e)}function ol(t,...e){ql.logLevel<=te.ERROR&&ql.error(`Auth (${Er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Sf(t,...e)}function tn(t,...e){return Sf(t,...e)}function JE(t,e,n){const r=Object.assign(Object.assign({},eC()),{[e]:n});return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return JE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XE.create(t,...e)}function K(t,e,...n){if(!t)throw Sf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function Nn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nC(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nC()||VR()||"connection"in navigator)?navigator.onLine:!0}function iC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=xR()||LR()}get(){return rC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new Wo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,i={}){return ew(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return OR()||(h.referrerPolicy="no-referrer"),ZE.fetch()(tw(t,t.config.apiHost,n,l),h)})}async function ew(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sC),e);try{const i=new lC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw JE(t,f,h);Ht(t,f)}}catch(i){if(i instanceof Gt)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await Tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Af(t.config,i):`${t.config.apiScheme}://${i}`}function aC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),oC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function Jg(t){return t!==void 0&&t.enterprise!==void 0}class uC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cC(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function nw(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dC(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=Rf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ys(qc(i.auth_time)),issuedAtTime:Ys(qc(i.iat)),expirationTime:Ys(qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=jE(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zg(t){const e=Rf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&fC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Io(t,nw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rw(s.providerUserInfo):[],l=gC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function mC(t){const e=me(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rw(t){return t.map(e=>{var{providerId:n}=e,r=If(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){const n=await ew(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ZE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yC(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _C(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Io(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dC(this,e)}reload(){return mC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Io(this,hC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:D,isAnonymous:b,providerData:U,stsTokenManager:E}=n;K(T&&E,e,"internal-error");const _=Li.fromJSON(this.name,E);K(typeof T=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof b=="boolean",e,"internal-error"),Un(A,e.name),Un(R,e.name),Un(k,e.name),Un(C,e.name),Un(v,e.name),Un(y,e.name);const w=new En({uid:T,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:b,photoURL:R,phoneNumber:A,tenantId:k,stsTokenManager:_,createdAt:v,lastLoginAt:y});return U&&Array.isArray(U)&&(w.providerData=U.map(I=>Object.assign({},I))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function wn(t){Nn(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iw.type="NONE";const t_=iw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=al(this.userKey,i.apiKey,s),this.fullPersistenceKey=al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(wn(t_),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(t_);const o=al(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=En._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Mi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(ow(e))return"Safari";if((e.includes("chrome/")||aw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sw(t=st()){return/firefox\//i.test(t)}function ow(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aw(t=st()){return/crios\//i.test(t)}function lw(t=st()){return/iemobile/i.test(t)}function uw(t=st()){return/android/i.test(t)}function cw(t=st()){return/blackberry/i.test(t)}function hw(t=st()){return/webos/i.test(t)}function Pf(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vC(t=st()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EC(){return MR()&&document.documentMode===10}function dw(t=st()){return Pf(t)||uw(t)||hw(t)||cw(t)||/windows phone/i.test(t)||lw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e=[]){let n;switch(t){case"Browser":n=n_(st());break;case"Worker":n=`${n_(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=6;class SC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r_(this),this.idTokenSubscription=new r_(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nw(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(In(this));const n=e?me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TC(this),n=new SC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ii(t){return me(t)}class r_{constructor(e){this.auth=e,this.observer=null,this.addObserver=WR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RC(t){Su=t}function pw(t){return Su.loadJS(t)}function PC(){return Su.recaptchaEnterpriseScript}function CC(){return Su.gapiScript}function kC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NC="recaptcha-enterprise",xC="NO_RECAPTCHA";class DC{constructor(e){this.type=NC,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{cC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new uC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(xC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Jg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=PC();u.length!==0&&(u+=l),pw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function i_(t,e,n,r=!1){const i=new DC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function id(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await i_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){const n=$o(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bl(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function VC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LC(t,e,n){const r=ii(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mw(e),{host:o,port:l}=MC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),bC()}function mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MC(t){const e=mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s_(o)}}}function s_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function UC(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function BC(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new So(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new So(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,n,"signInWithPassword",FC);case"emailLink":return jC(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,r,"signUpPassword",UC);case"emailLink":return BC(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class Gr extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=If(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bi(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WC(t){const e=Ls(Ms(t)).link,n=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(t)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||n||e||t}class kf{constructor(e){var n,r,i,s,o,l;const u=Ls(Ms(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=$C((i=u.mode)!==null&&i!==void 0?i:null);K(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=WC(e);try{return new kf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return So._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kf.parseLink(n);return K(r,"argument-error"),So._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ho{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ho{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return qo(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=o_(r);return new Qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o_(r);return new Qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function HC(t,e,n=!1){const r=await Io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Io(t,_w(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Rf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e,n=!1){if(Bt(t.app))return Promise.reject(In(t));const r="signIn",i=await _w(t,r,e),s=await Qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GC(t,e){return yw(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QC(t,e,n){if(Bt(t.app))return Promise.reject(In(t));const r=ii(t),o=await id(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vw(t),u}),l=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function YC(t,e,n){return Bt(t.app)?Promise.reject(In(t)):GC(me(t),ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vw(t),r})}function XC(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function JC(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function ZC(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function a_(t){return me(t).signOut()}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,tk=10;class ww extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ww.type="LOCAL";const nk=ww;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tw.type="SESSION";const Iw=Tw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await rk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Nf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function sk(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lk(){return Sw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="firebaseLocalStorageDb",uk=1,Ql="firebaseLocalStorage",Rw="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ru(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function ck(){const t=indexedDB.deleteDatabase(Aw);return new Ko(t).toPromise()}function sd(){const t=indexedDB.open(Aw,uk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:Rw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await ck(),e(await sd()))})})}async function l_(t,e,n){const r=Ru(t,!0).put({[Rw]:e,value:n});return new Ko(r).toPromise()}async function hk(t,e){const n=Ru(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function u_(t,e){const n=Ru(t,!0).delete(e);return new Ko(n).toPromise()}const dk=800,fk=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(lk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ok(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await l_(e,Gl,"1"),await u_(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ru(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const pk=Pw;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return e?wn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gk(t){return yw(t.auth,new xf(t),t.bypassAuthState)}function _k(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),KC(n,new xf(t),t.bypassAuthState)}async function yk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),HC(n,new xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return _k;default:Ht(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Wo(2e3,1e4);class Ci extends Cw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vk.get())};e()}}Ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="pendingRedirect",ll=new Map;class wk extends Cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await Tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tk(t,e){const n=Ak(e),r=Sk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ik(t,e){ll.set(t._key(),e)}function Sk(t){return wn(t._redirectPersistence)}function Ak(t){return al(Ek,t.config.apiKey,t.name)}async function Rk(t,e,n=!1){if(Bt(t.app))return Promise.reject(In(t));const r=ii(t),i=mk(r,e),o=await new wk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=10*60*1e3;class Ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dk=/^https?/;async function Ok(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nk(t);for(const n of e)try{if(Vk(n))return}catch{}Ht(t,"unauthorized-domain")}function Vk(t){const e=nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dk.test(n))return!1;if(xk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new Wo(3e4,6e4);function h_(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mk(t){return new Promise((e,n)=>{var r,i,s;function o(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(tn(t,"network-request-failed"))},timeout:Lk.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const l=kC("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},pw(`${CC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function bk(t){return ul=ul||Mk(t),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Wo(5e3,15e3),Fk="__/auth/iframe",jk="emulator/auth/iframe",Bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $k(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Af(e,jk):`https://${t.config.authDomain}/${Fk}`,r={apiKey:e.apiKey,appName:t.name,v:Er},i=zk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function Wk(t){const e=await bk(t),n=nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:$k(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},Uk.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hk=500,Kk=600,Gk="_blank",Qk="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yk(t,e,n,r=Hk,i=Kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},qk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=st().toLowerCase();n&&(l=aw(h)?Gk:n),sw(h)&&(e=e||Qk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,R])=>`${m}${A}=${R},`,"");if(vC(h)&&l!=="_self")return Xk(e||"",l),new d_(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new d_(p)}function Xk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="__/auth/handler",Zk="emulator/auth/handler",e1=encodeURIComponent("fac");async function f_(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:i};if(e instanceof gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$R(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ho){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${e1}=${encodeURIComponent(u)}`:"";return`${t1(t)}?${zo(l).slice(1)}${h}`}function t1({config:t}){return t.emulator?Af(t,Zk):`https://${t.authDomain}/${Jk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="webStorageSupport";class n1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=Rk,this._overrideRedirectResult=Ik}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await f_(e,n,r,nd(),i);return Yk(e,o,Nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await f_(e,n,r,nd(),i);return sk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Wk(e),r=new Ck(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ok(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dw()||ow()||Pf()}}const r1=n1;var p_="@firebase/auth",m_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o1(t){fr(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fw(t)},h=new AC(r,i,s,u);return VC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fr(new dr("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new i1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(p_,m_,s1(t)),Wt(p_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=5*60,l1=WE("authIdTokenMaxAge")||a1;let g_=null;const u1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>l1)return;const i=n==null?void 0:n.token;g_!==i&&(g_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nw(t=Iu()){const e=$o(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OC(t,{popupRedirectResolver:r1,persistence:[pk,nk,Iw]}),r=WE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=u1(s.toString());JC(n,o,()=>o(n.currentUser)),XC(n,l=>o(l))}}const i=BE("auth");return i&&LC(n,`http://${i}`),n}function c1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",c1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o1("Browser");var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function w(){}w.prototype=_.prototype,E.D=_.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,P,N){for(var S=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)S[Me-2]=arguments[Me];return _.prototype[P].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,w){w||(w=0);var I=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)I[P]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(P=0;16>P;++P)I[P]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=E.g[0],w=E.g[1],P=E.g[2];var N=E.g[3],S=_+(N^w&(P^N))+I[0]+3614090360&4294967295;_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+I[1]+3905402710&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+I[2]+606105819&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+I[3]+3250441966&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+I[4]+4118548399&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+I[5]+1200080426&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+I[6]+2821735955&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+I[7]+4249261313&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+I[8]+1770035416&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+I[9]+2336552879&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+I[10]+4294925233&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+I[11]+2304563134&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(N^w&(P^N))+I[12]+1804603682&4294967295,_=w+(S<<7&4294967295|S>>>25),S=N+(P^_&(w^P))+I[13]+4254626195&4294967295,N=_+(S<<12&4294967295|S>>>20),S=P+(w^N&(_^w))+I[14]+2792965006&4294967295,P=N+(S<<17&4294967295|S>>>15),S=w+(_^P&(N^_))+I[15]+1236535329&4294967295,w=P+(S<<22&4294967295|S>>>10),S=_+(P^N&(w^P))+I[1]+4129170786&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+I[6]+3225465664&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+I[11]+643717713&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+I[0]+3921069994&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+I[5]+3593408605&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+I[10]+38016083&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+I[15]+3634488961&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+I[4]+3889429448&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+I[9]+568446438&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+I[14]+3275163606&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+I[3]+4107603335&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+I[8]+1163531501&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(P^N&(w^P))+I[13]+2850285829&4294967295,_=w+(S<<5&4294967295|S>>>27),S=N+(w^P&(_^w))+I[2]+4243563512&4294967295,N=_+(S<<9&4294967295|S>>>23),S=P+(_^w&(N^_))+I[7]+1735328473&4294967295,P=N+(S<<14&4294967295|S>>>18),S=w+(N^_&(P^N))+I[12]+2368359562&4294967295,w=P+(S<<20&4294967295|S>>>12),S=_+(w^P^N)+I[5]+4294588738&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+I[8]+2272392833&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+I[11]+1839030562&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+I[14]+4259657740&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+I[1]+2763975236&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+I[4]+1272893353&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+I[7]+4139469664&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+I[10]+3200236656&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+I[13]+681279174&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+I[0]+3936430074&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+I[3]+3572445317&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+I[6]+76029189&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(w^P^N)+I[9]+3654602809&4294967295,_=w+(S<<4&4294967295|S>>>28),S=N+(_^w^P)+I[12]+3873151461&4294967295,N=_+(S<<11&4294967295|S>>>21),S=P+(N^_^w)+I[15]+530742520&4294967295,P=N+(S<<16&4294967295|S>>>16),S=w+(P^N^_)+I[2]+3299628645&4294967295,w=P+(S<<23&4294967295|S>>>9),S=_+(P^(w|~N))+I[0]+4096336452&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+I[7]+1126891415&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+I[14]+2878612391&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+I[5]+4237533241&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+I[12]+1700485571&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+I[3]+2399980690&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+I[10]+4293915773&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+I[1]+2240044497&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+I[8]+1873313359&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+I[15]+4264355552&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+I[6]+2734768916&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+I[13]+1309151649&4294967295,w=P+(S<<21&4294967295|S>>>11),S=_+(P^(w|~N))+I[4]+4149444226&4294967295,_=w+(S<<6&4294967295|S>>>26),S=N+(w^(_|~P))+I[11]+3174756917&4294967295,N=_+(S<<10&4294967295|S>>>22),S=P+(_^(N|~w))+I[2]+718787259&4294967295,P=N+(S<<15&4294967295|S>>>17),S=w+(N^(P|~_))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var w=_-this.blockSize,I=this.B,P=this.h,N=0;N<_;){if(P==0)for(;N<=w;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<_;)if(I[P++]=E.charCodeAt(N++),P==this.blockSize){i(this,I),P=0;break}}else for(;N<_;)if(I[P++]=E[N++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var w=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=w&255,w/=256;for(this.u(E),E=Array(16),_=w=0;4>_;++_)for(var I=0;32>I;I+=8)E[w++]=this.g[_]>>>I&255;return E};function s(E,_){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=_(E)}function o(E,_){this.h=_;for(var w=[],I=!0,P=E.length-1;0<=P;P--){var N=E[P]|0;I&&N==_||(w[P]=N,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return C(h(-E));for(var _=[],w=1,I=0;E>=w;I++)_[I]=E/w|0,w*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return C(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),I=p,P=0;P<E.length;P+=8){var N=Math.min(8,E.length-P),S=parseInt(E.substring(P,P+N),_);8>N?(N=h(Math.pow(_,N)),I=I.j(N).add(h(S))):(I=I.j(w),I=I.add(h(S)))}return I}var p=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var E=0,_=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+C(this).toString(E);for(var _=h(Math.pow(E,6)),w=this,I="";;){var P=D(w,_).g;w=v(w,P.j(_));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=P,R(w))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=v(this,E),k(E)?-1:R(E)?0:1};function C(E){for(var _=E.g.length,w=[],I=0;I<_;I++)w[I]=~E.g[I];return new o(w,~E.h).add(m)}t.abs=function(){return k(this)?C(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],I=0,P=0;P<=_;P++){var N=I+(this.i(P)&65535)+(E.i(P)&65535),S=(N>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);I=S>>>16,N&=65535,S&=65535,w[P]=S<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function v(E,_){return E.add(C(_))}t.j=function(E){if(R(this)||R(E))return p;if(k(this))return k(E)?C(this).j(C(E)):C(C(this).j(E));if(k(E))return C(this.j(C(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,w=[],I=0;I<2*_;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<E.g.length;P++){var N=this.i(I)>>>16,S=this.i(I)&65535,Me=E.i(P)>>>16,Ar=E.i(P)&65535;w[2*I+2*P]+=S*Ar,y(w,2*I+2*P),w[2*I+2*P+1]+=N*Ar,y(w,2*I+2*P+1),w[2*I+2*P+1]+=S*Me,y(w,2*I+2*P+1),w[2*I+2*P+2]+=N*Me,y(w,2*I+2*P+2)}for(I=0;I<_;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=_;I<2*_;I++)w[I]=0;return new o(w,0)};function y(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function T(E,_){this.g=E,this.h=_}function D(E,_){if(R(_))throw Error("division by zero");if(R(E))return new T(p,p);if(k(E))return _=D(C(E),_),new T(C(_.g),C(_.h));if(k(_))return _=D(E,C(_)),new T(C(_.g),_.h);if(30<E.g.length){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=_;0>=I.l(E);)w=b(w),I=b(I);var P=U(w,1),N=U(I,1);for(I=U(I,2),w=U(w,2);!R(I);){var S=N.add(I);0>=S.l(E)&&(P=P.add(w),N=S),I=U(I,1),w=U(w,1)}return _=v(E,P.j(_)),new T(P,_)}for(P=p;0<=E.l(_);){for(w=Math.max(1,Math.floor(E.m()/_.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=h(w),S=N.j(_);k(S)||0<S.l(E);)w-=I,N=h(w),S=N.j(_);R(N)&&(N=m),P=P.add(N),E=v(E,S)}return new T(P,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],I=0;I<_;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function b(E){for(var _=E.g.length+1,w=[],I=0;I<_;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function U(E,_){var w=_>>5;_%=32;for(var I=E.g.length-w,P=[],N=0;N<I;N++)P[N]=0<_?E.i(N+w)>>>_|E.i(N+w+1)<<32-_:E.i(N+w);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,jr=o}).apply(typeof __<"u"?__:typeof self<"u"?self:typeof window<"u"?window:{});var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,bs,Ow,cl,od,Vw,Lw,Mw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof za=="object"&&za];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,x={next:function(){if(!g&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,x,O){for(var F=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)F[ue-2]=arguments[ue];return c.prototype[x].apply(g,F)}}function k(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function C(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const x=a.length||0,O=g.length||0;a.length=x+O;for(let F=0;F<O;F++)a[x+F]=g[F]}else a.push(g)}}class v{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var b=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function U(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Me{constructor(){this.h=this.g=null}add(c,d){const g=Ar.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ar=new v(()=>new as,a=>a.reset());class as{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,B=!1,Q=new Me,J=()=>{const a=l.Promise.resolve(void 0);ln=()=>{a.then(_e)}};var _e=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){N(d)}var c=Ar;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function cn(a,c){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(b){e:{try{D(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}R(cn,Re);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),vT=0;function ET(a,c,d,g,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=x,this.key=++vT,this.da=this.fa=!1}function oa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function aa(a){this.src=a,this.g={},this.h=0}aa.prototype.add=function(a,c,d,g,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var F=qu(a,c,g,x);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new ET(c,this.src,O,!!g,x),c.fa=d,a.push(c)),c};function Wu(a,c){var d=c.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,c,void 0),O;(O=0<=x)&&Array.prototype.splice.call(g,x,1),O&&(oa(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function qu(a,c,d,g){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==g)return x}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),Ku={};function Ip(a,c,d,g,x){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Ip(a,c[O],d,g,x);return null}return d=Rp(d),a&&a[dn]?a.K(c,d,h(g)?!!g.capture:!1,x):wT(a,c,d,!1,g,x)}function wT(a,c,d,g,x,O){if(!c)throw Error("Invalid event type");var F=h(x)?!!x.capture:!!x,ue=Qu(a);if(ue||(a[Hu]=ue=new aa(a)),d=ue.add(c,d,g,F,O),d.proxy)return d;if(g=TT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)un||(x=F),x===void 0&&(x=!1),a.addEventListener(c.toString(),g,x);else if(a.attachEvent)a.attachEvent(Ap(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function TT(){function a(d){return c.call(a.src,a.listener,d)}const c=IT;return a}function Sp(a,c,d,g,x){if(Array.isArray(c))for(var O=0;O<c.length;O++)Sp(a,c[O],d,g,x);else g=h(g)?!!g.capture:!!g,d=Rp(d),a&&a[dn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=qu(O,d,g,x),-1<d&&(oa(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Qu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=qu(c,d,g,x)),(d=-1<a?c[a]:null)&&Gu(d))}function Gu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[dn])Wu(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Ap(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Qu(c))?(Wu(d,a),d.h==0&&(d.src=null,c[Hu]=null)):oa(a)}}}function Ap(a){return a in Ku?Ku[a]:Ku[a]="on"+a}function IT(a,c){if(a.da)a=!0;else{c=new cn(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Gu(a),a=d.call(g,c)}return a}function Qu(a){return a=a[Hu],a instanceof aa?a:null}var Yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rp(a){return typeof a=="function"?a:(a[Yu]||(a[Yu]=function(c){return a.handleEvent(c)}),a[Yu])}function Ge(){le.call(this),this.i=new aa(this),this.M=this,this.F=null}R(Ge,le),Ge.prototype[dn]=!0,Ge.prototype.removeEventListener=function(a,c,d,g){Sp(this,a,c,d,g)};function ot(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Re(c,a);else if(c instanceof Re)c.target=c.target||a;else{var x=c;c=new Re(g,a),I(c,x)}if(x=!0,d)for(var O=d.length-1;0<=O;O--){var F=c.g=d[O];x=la(F,g,!0,c)&&x}if(F=c.g=a,x=la(F,g,!0,c)&&x,x=la(F,g,!1,c)&&x,d)for(O=0;O<d.length;O++)F=c.g=d[O],x=la(F,g,!1,c)&&x}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)oa(d[g]);delete a.g[c],a.h--}}this.F=null},Ge.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ge.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function la(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,O=0;O<c.length;++O){var F=c[O];if(F&&!F.da&&F.capture==d){var ue=F.listener,je=F.ha||F.src;F.fa&&Wu(a.i,F),x=ue.call(je,g)!==!1&&x}}return x&&!g.defaultPrevented}function Pp(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Cp(a){a.g=Pp(()=>{a.g=null,a.i&&(a.i=!1,Cp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ST extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Cp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(a){le.call(this),this.h=a,this.g={}}R(ls,le);var kp=[];function Np(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Gu(c)},a),a.g={}}ls.prototype.N=function(){ls.aa.N.call(this),Np(this)},ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=l.JSON.stringify,AT=l.JSON.parse,RT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ju(){}Ju.prototype.h=null;function xp(a){return a.h||(a.h=a.i())}function Dp(){}var us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){Re.call(this,"d")}R(Zu,Re);function ec(){Re.call(this,"c")}R(ec,Re);var Rr={},Op=null;function ua(){return Op=Op||new Ge}Rr.La="serverreachability";function Vp(a){Re.call(this,Rr.La,a)}R(Vp,Re);function cs(a){const c=ua();ot(c,new Vp(c))}Rr.STAT_EVENT="statevent";function Lp(a,c){Re.call(this,Rr.STAT_EVENT,a),this.stat=c}R(Lp,Re);function at(a){const c=ua();ot(c,new Lp(c,a))}Rr.Ma="timingevent";function Mp(a,c){Re.call(this,Rr.Ma,a),this.size=c}R(Mp,Re);function hs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function PT(a,c,d,g,x,O){a.info(function(){if(a.g)if(O)for(var F="",ue=O.split("&"),je=0;je<ue.length;je++){var ie=ue[je].split("=");if(1<ie.length){var Qe=ie[0];ie=ie[1];var Ye=Qe.split("_");F=2<=Ye.length&&Ye[1]=="type"?F+(Qe+"="+ie+"&"):F+(Qe+"=redacted&")}}else F=null;else F=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+d+`
`+F})}function CT(a,c,d,g,x,O,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+d+`
`+O+" "+F})}function ai(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+NT(a,d)+(g?" "+g:"")})}function kT(a,c){a.info(function(){return"TIMEOUT: "+c})}ds.prototype.info=function(){};function NT(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var F=1;F<x.length;F++)x[F]=""}}}}return Xu(d)}catch{return c}}var ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function ha(){}R(ha,Ju),ha.prototype.g=function(){return new XMLHttpRequest},ha.prototype.i=function(){return{}},tc=new ha;function Vn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Up}function Up(){this.i=null,this.g="",this.h=!1}var Fp={},nc={};function rc(a,c,d){a.L=1,a.v=ma(fn(c)),a.m=d,a.P=!0,jp(a,null)}function jp(a,c){a.F=Date.now(),da(a),a.A=fn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),em(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Up,a.g=ym(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ST(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(kp[0]=x.toString()),x=kp);for(var O=0;O<x.length;O++){var F=Ip(d,x[O],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),cs(),PT(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const c=this.M;c&&pn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=pn(this.g);var c=this.g.Ba();const ci=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||am(this.g)))){this.J||Ye!=4||c==7||(c==8||0>=ci?cs(3):cs(2)),ic(this);var d=this.g.Z();this.X=d;t:if(Bp(this)){var g=am(this.g);a="";var x=g.length,O=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),fs(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(O&&c==x-1)});g.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,CT(this.i,this.u,this.A,this.l,this.R,Ye,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,je=this.g;if((ue=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ue)){var ie=ue;break t}}ie=null}if(d=ie)ai(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,d);else{this.o=!1,this.s=3,at(12),Pr(this),fs(this);break e}}if(this.P){d=!0;let Mt;for(;!this.J&&this.C<F.length;)if(Mt=xT(this,F),Mt==nc){Ye==4&&(this.s=4,at(14),d=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Fp){this.s=4,at(15),ai(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else ai(this.i,this.l,Mt,null),sc(this,Mt);if(Bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||F.length!=0||this.h.h||(this.s=1,at(16),d=!1),this.o=this.o&&d,!d)ai(this.i,this.l,F,"[Invalid Chunked Response]"),Pr(this),fs(this);else if(0<F.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),hc(Qe),Qe.M=!0,at(11))}}else ai(this.i,this.l,F,null),sc(this,F);Ye==4&&Pr(this),this.o&&!this.J&&(Ye==4?pm(this.j,this):(this.o=!1,da(this)))}else GT(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Pr(this),fs(this)}}}catch{}finally{}};function Bp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xT(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?nc:(d=Number(c.substring(d,g)),isNaN(d)?Fp:(g+=1,g+d>c.length?nc:(c=c.slice(g,g+d),a.C=g+d,c)))}Vn.prototype.cancel=function(){this.J=!0,Pr(this)};function da(a){a.S=Date.now()+a.I,zp(a,a.I)}function zp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=hs(m(a.ba,a),c)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kT(this.i,this.A),this.L!=2&&(cs(),at(17)),Pr(this),this.s=2,fs(this)):zp(this,this.S-a)};function fs(a){a.j.G==0||a.J||pm(a.j,a)}function Pr(a){ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Np(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function sc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||oc(d.h,a))){if(!a.K&&oc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)wa(d),va(d);else break e;cc(d),at(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(m(d.Za,d),6e3));if(1>=qp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else kr(d,11)}else if((a.K||d.g==a)&&wa(d),!y(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let ie=x[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Qe=ie[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Ye=ie[4];Ye!=null&&(d.Aa=Ye,d.j.info("SVER="+d.Aa));const ci=ie[5];ci!=null&&typeof ci=="number"&&0<ci&&(g=1.5*ci,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Mt=a.g;if(Mt){const Ia=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var O=g.h;O.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ac(O,O.h),O.h=null))}if(g.D){const dc=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,he(g.I,g.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var F=a;if(g.qa=_m(g,g.J?g.ia:null,g.W),F.K){Hp(g.h,F);var ue=F,je=g.L;je&&(ue.I=je),ue.B&&(ic(ue),da(ue)),g.g=F}else dm(g);0<d.i.length&&Ea(d)}else ie[0]!="stop"&&ie[0]!="close"||kr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?kr(d,7):uc(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}cs(4)}catch{}}var DT=class{constructor(a,c){this.g=a,this.map=c}};function $p(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qp(a){return a.h?1:a.g?a.g.size:0}function oc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ac(a,c){a.g?a.g.add(c):a.h=c}function Hp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}$p.prototype.cancel=function(){if(this.i=Kp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return k(a.i)}function OT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function VT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Gp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=VT(a),g=OT(a),x=g.length,O=0;O<x;O++)c.call(void 0,g[O],d&&d[O],a)}var Qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),x=null;if(0<=g){var O=a[d].substring(0,g);x=a[d].substring(g+1)}else O=a[d];c(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,fa(this,a.j),this.o=a.o,this.g=a.g,pa(this,a.s),this.l=a.l;var c=a.i,d=new gs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Yp(this,d),this.m=a.m}else a&&(c=String(a).match(Qp))?(this.h=!1,fa(this,c[1]||"",!0),this.o=ps(c[2]||""),this.g=ps(c[3]||"",!0),pa(this,c[4]),this.l=ps(c[5]||"",!0),Yp(this,c[6]||"",!0),this.m=ps(c[7]||"")):(this.h=!1,this.i=new gs(null,this.h))}Cr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ms(c,Xp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ms(c,Xp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ms(d,d.charAt(0)=="/"?UT:bT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ms(d,jT)),a.join("")};function fn(a){return new Cr(a)}function fa(a,c,d){a.j=d?ps(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function pa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Yp(a,c,d){c instanceof gs?(a.i=c,BT(a.i,a.h)):(d||(c=ms(c,FT)),a.i=new gs(c,a.h))}function he(a,c,d){a.i.set(c,d)}function ma(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ps(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ms(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,MT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function MT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xp=/[#\/\?@]/g,bT=/[#\?:]/g,UT=/[#\?]/g,FT=/[#\?@]/g,jT=/#/g;function gs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&LT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=gs.prototype,t.add=function(a,c){Ln(this),this.i=null,a=li(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Jp(a,c){Ln(a),c=li(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Zp(a,c){return Ln(a),c=li(a,c),a.g.has(c)}t.forEach=function(a,c){Ln(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(c,x,g,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const x=a[g];for(let O=0;O<x.length;O++)d.push(c[g])}return d},t.V=function(a){Ln(this);let c=[];if(typeof a=="string")Zp(this,a)&&(c=c.concat(this.g.get(li(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Ln(this),this.i=null,a=li(this,a),Zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function em(a,c,d){Jp(a,c),0<d.length&&(a.i=null,a.g.set(li(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const O=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var x=O;F[g]!==""&&(x+="="+encodeURIComponent(String(F[g]))),a.push(x)}}return this.i=a.join("&")};function li(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function BT(a,c){c&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(d,g){var x=g.toLowerCase();g!=x&&(Jp(this,g),em(this,x,d))},a)),a.j=c}function zT(a,c){const d=new ds;if(l.Image){const g=new Image;g.onload=A(Mn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=A(Mn,d,"TestLoadImage: error",!1,c,g),g.onabort=A(Mn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=A(Mn,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function $T(a,c){const d=new ds,g=new AbortController,x=setTimeout(()=>{g.abort(),Mn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?Mn(d,"TestPingServer: ok",!0,c):Mn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Mn(d,"TestPingServer: error",!1,c)})}function Mn(a,c,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function WT(){this.g=new RT}function qT(a,c,d){const g=d||"";try{Gp(a,function(x,O){let F=x;h(x)&&(F=Xu(x)),c.push(g+O+"="+encodeURIComponent(F))})}catch(x){throw c.push(g+"type="+encodeURIComponent("_badmap")),x}}function ga(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ga,Ju),ga.prototype.g=function(){return new _a(this.l,this.j)},ga.prototype.i=function(a){return function(){return a}}({});function _a(a,c){Ge.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_a,Ge),t=_a.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?_s(this):ys(this),this.readyState==3&&tm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_s(this))},t.Qa=function(a){this.g&&(this.response=a,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function nm(a){let c="";return U(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function lc(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=nm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Te(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,Ge);var HT=/^https?$/i,KT=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?xp(this.o):xp(tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){rm(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(KT,c,void 0))||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of d)this.g.setRequestHeader(O,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{om(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){rm(this,O)}};function rm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,im(a),ya(a)}function im(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sm(this):this.bb())},t.bb=function(){sm(this)};function sm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)Pp(a.Ea,0,a);else if(ot(a,"readystatechange"),pn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=F===0){var x=String(a.D).match(Qp)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!HT.test(x?x.toLowerCase():"")}d=g}if(d)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var O=2<pn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",im(a)}}finally{ya(a)}}}}function ya(a,c){if(a.g){om(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ot(a,"ready");try{d.onreadystatechange=g}catch{}}}function om(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),AT(c)}};function am(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function GT(a){const c={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=P(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[x]||[];c[x]=O,O.push(d)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function lm(a){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,a),this.cb=vs("retryDelaySeedMs",1e4,a),this.Wa=vs("forwardChannelMaxRetries",2,a),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $p(a&&a.concurrentRequestLimit),this.Da=new WT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){at(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=_m(this,null,this.W),Ea(this)};function uc(a){if(um(a),a.G==3){var c=a.U++,d=fn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),Es(a,d),c=new Vn(a,a.j,c),c.L=2,c.v=ma(fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=ym(c.j,null),c.g.ea(c.v)),c.F=Date.now(),da(c)}gm(a)}function va(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function um(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ea(a){if(!Wp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ln||J(),B||(ln(),B=!0),Q.add(c,a),a.B=0}}function QT(a,c){return qp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=hs(m(a.Ga,a,c),mm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Vn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hm(this,x,c),d=fn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Es(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(nm(O)))+"&"+c:this.m&&lc(d,this.m,O)),ac(this.h,x),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),x.T=!0,rc(x,d,null)):rc(x,d,c),this.G=2}}else this.G==3&&(a?cm(this,a):this.i.length==0||Wp(this.h)||cm(this))};function cm(a,c){var d;c?d=c.l:d=a.U++;const g=fn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),Es(a,g),a.m&&a.o&&lc(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=hm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,d),rc(d,g,c)}function Es(a,c){a.H&&U(a.H,function(d,g){he(c,g,d)}),a.l&&Gp({},function(d,g){he(c,g,d)})}function hm(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const F=["count="+d];O==-1?0<d?(O=x[0].g,F.push("ofs="+O)):O=0:F.push("ofs="+O);let ue=!0;for(let je=0;je<d;je++){let ie=x[je].g;const Qe=x[je].map;if(ie-=O,0>ie)O=Math.max(0,x[je].g-100),ue=!1;else try{qT(Qe,F,"req"+ie+"_")}catch{g&&g(Qe)}}if(ue){g=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function dm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ln||J(),B||(ln(),B=!0),Q.add(c,a),a.v=0}}function cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=hs(m(a.Fa,a),mm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=hs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),va(this),fm(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fm(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=fn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),Es(a,c),a.m&&a.o&&lc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ma(fn(c)),d.m=null,d.P=!0,jp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),cc(this),at(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pm(a,c){var d=null;if(a.g==c){wa(a),hc(a),a.g=null;var g=2}else if(oc(a.h,c))d=c.D,Hp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;g=ua(),ot(g,new Mp(g,d)),Ea(a)}else dm(a);else if(x=c.s,x==3||x==0&&0<c.X||!(g==1&&QT(a,c)||g==2&&cc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function mm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function kr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const x=!g;g=new Cr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fa(g,"https"),ma(g),x?zT(g.toString(),d):$T(g.toString(),d)}else at(2);a.G=0,a.l&&a.l.sa(c),gm(a),um(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function gm(a){if(a.G=0,a.ka=[],a.l){const c=Kp(a.h);(c.length!=0||a.i.length!=0)&&(C(a.ka,c),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function _m(a,c,d){var g=d instanceof Cr?fn(d):new Cr(d);if(g.g!="")c&&(g.g=c+"."+g.g),pa(g,g.s);else{var x=l.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var O=new Cr(null);g&&fa(O,g),c&&(O.g=c),x&&pa(O,x),d&&(O.l=d),g=O}return d=a.D,c=a.ya,d&&c&&he(g,d,c),he(g,"VER",a.la),Es(a,g),g}function ym(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new ga({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vm(){}t=vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ta(){}Ta.prototype.g=function(a,c){return new wt(a,c)};function wt(a,c){Ge.call(this),this.g=new lm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!y(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ui(this)}R(wt,Ge),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){uc(this.g)},wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xu(a),a=d);c.i.push(new DT(c.Ya++,a)),c.G==3&&Ea(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,wt.aa.N.call(this)};function Em(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Em,Zu);function wm(){ec.call(this),this.status=1}R(wm,ec);function ui(a){this.g=a}R(ui,vm),ui.prototype.ua=function(){ot(this.g,"a")},ui.prototype.ta=function(a){ot(this.g,new Em(a))},ui.prototype.sa=function(a){ot(this.g,new wm)},ui.prototype.ra=function(){ot(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Mw=function(){return new Ta},Lw=function(){return ua()},Vw=Rr,od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,cl=ca,bp.COMPLETE="complete",Ow=bp,Dp.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,bs=Dp,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,Dw=Te}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Ef("@firebase/firestore");function ks(){return Yr.logLevel}function W(t,...e){if(Yr.logLevel<=te.DEBUG){const n=e.map(Df);Yr.debug(`Firestore (${rs}): ${t}`,...n)}}function xn(t,...e){if(Yr.logLevel<=te.ERROR){const n=e.map(Df);Yr.error(`Firestore (${rs}): ${t}`,...n)}}function Hi(t,...e){if(Yr.logLevel<=te.WARN){const n=e.map(Df);Yr.warn(`Firestore (${rs}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class d1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class f1{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new et(e)}}class p1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class m1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new p1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new g1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=y1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Le(0,0))}static max(){return new Y(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Ao{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const v1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Ao{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return v1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function E1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new pr(i,H.empty(),e)}function w1(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Y.min(),H.empty(),-1)}static max(){return new pr(Y.max(),H.empty(),-1)}}function T1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==I1)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function A1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Of.oe=-1;function Pu(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function R1(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new St([])}unionWith(e){let n=new qe($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const P1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=P1.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lf(t){const e=t.mapValue.fields.__previous_value__;return Vf(e)?Lf(e):e}function Ro(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={mapValue:{}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vf(t)?4:N1(t)?9007199254740991:k1(t)?10:11:G()}function on(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Xr(i.bytesValue).isEqual(Xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(v_(o)!==v_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Co(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(Ro(t),Ro(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Xr(s),u=Xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Pe(s.latitude),Pe(o.latitude));return l!==0?l:se(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return T_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=se(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:T_(A,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wa.mapValue&&o===Wa.mapValue)return 0;if(s===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=se(u[p],f[p]);if(m!==0)return m;const A=Gi(l[u[p]],h[f[p]]);if(A!==0)return A}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=mr(t),r=mr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function T_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Gi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Qi(t){return ad(t)}function ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ad(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ad(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function I_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ld(t){return!!t&&"integerValue"in t}function Mf(t){return!!t&&"arrayValue"in t}function S_(t){return!!t&&"nullValue"in t}function A_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function k1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function N1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Xs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(Xs(this.value))}}function Bw(t){const e=[];return si(t.fields,(n,r)=>{const i=new $e([n]);if(hl(r)){const s=Bw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function R_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function P_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function x1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{}class xe extends zw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new O1(e,n,r):n==="array-contains"?new M1(e,r):n==="in"?new b1(e,r):n==="not-in"?new U1(e,r):n==="array-contains-any"?new F1(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new V1(e,r):new L1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends zw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return $w(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $w(t){return t.op==="and"}function Ww(t){return D1(t)&&$w(t)}function D1(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function ud(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(Ww(t))return t.filters.map(e=>ud(e)).join(",");{const e=t.filters.map(n=>ud(n)).join(",");return`${t.op}(${e})`}}function qw(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&qw(o,i.filters[l]),!0):!1}(t,e):void G()}function Hw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Hw).join(" ,")+"}"}(t):"Filter"}class O1 extends xe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class V1 extends xe{constructor(e,n){super(e,"in",n),this.keys=Kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L1 extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class M1 extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mf(n)&&Co(n.arrayValue,this.value)}}class b1 extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class U1 extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class F1 extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function C_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new j1(t,e,n,r,i,s,o)}function bf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e.ue=n}return e.ue}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!x1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!P_(t.startAt,e.startAt)&&P_(t.endAt,e.endAt)}function cd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function B1(t,e,n,r,i,s,o,l){return new is(t,e,n,r,i,s,o,l)}function Cu(t){return new is(t)}function k_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gw(t){return t.collectionGroup!==null}function Js(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ko(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new ko($e.keyField(),r))}return e.ce}function rn(t){const e=X(t);return e.le||(e.le=z1(e,Js(t))),e.le}function z1(t,e){if(t.limitType==="F")return C_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ko(i.field,s)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return C_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hd(t,e){const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dd(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Uf(rn(t),rn(e))&&t.limitType===e.limitType}function Qw(t){return`${bf(rn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Hw(i)).join(", ")}]`),Pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qi(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Nu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=R_(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,l,u){const h=R_(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Js(r),i))}(t,e)}function $1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yw(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=W1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function W1(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Gi(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new we(H.comparator);function Dn(){return q1}const Xw=new we(H.comparator);function Us(...t){let e=Xw;for(const n of t)e=e.insert(n.key,n);return e}function Jw(t){let e=Xw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return Zs()}function Zw(){return Zs()}function Zs(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const H1=new we(H.comparator),K1=new qe(H.comparator);function ee(...t){let e=K1;for(const n of t)e=e.add(n);return e}const G1=new qe(se);function Q1(){return G1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function e0(t){return{integerValue:""+t}}function t0(t,e){return R1(e)?e0(e):Ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this._=void 0}}function Y1(t,e,n){return t instanceof No?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vf(s)&&(s=Lf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xo?r0(t,e):t instanceof Do?i0(t,e):function(i,s){const o=n0(i,s),l=N_(o)+N_(i.Pe);return ld(o)&&ld(i.Pe)?e0(l):Ff(i.serializer,l)}(t,e)}function X1(t,e,n){return t instanceof xo?r0(t,e):t instanceof Do?i0(t,e):n}function n0(t,e){return t instanceof Oo?function(r){return ld(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class No extends xu{}class xo extends xu{constructor(e){super(),this.elements=e}}function r0(t,e){const n=s0(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Do extends xu{constructor(e){super(),this.elements=e}}function i0(t,e){let n=s0(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Oo extends xu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function N_(t){return Pe(t.integerValue||t.doubleValue)}function s0(t){return Mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.field=e,this.transform=n}}function J1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xo&&i instanceof xo||r instanceof Do&&i instanceof Do?Ki(r.elements,i.elements,on):r instanceof Oo&&i instanceof Oo?on(r.Pe,i.Pe):r instanceof No&&i instanceof No}(t.transform,e.transform)}class Z1{constructor(e,n){this.version=e,this.transformResults=n}}class ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Du{}function a0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ou(t.key,ht.none()):new Yo(t.key,t.data,ht.none());{const n=t.data,r=gt.empty();let i=new qe($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new St(i.toArray()),ht.none())}}function eN(t,e,n){t instanceof Yo?function(i,s,o){const l=i.value.clone(),u=D_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=D_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(l0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Yo?function(s,o,l,u){if(!dl(s.precondition,o))return l;const h=s.value.clone(),f=O_(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!dl(s.precondition,o))return l;const h=O_(s.fieldTransforms,u,o),f=o.data;return f.setAll(l0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=n0(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function x_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ki(r,i,(s,o)=>J1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function D_(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,X1(o,l,n[i]))}return r}function O_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Y1(s,o,e))}return r}class Ou extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nN extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=a0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>x_(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>x_(n,r))}}class jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return H1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ne;function oN(t){switch(t){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function u0(t){if(t===void 0)return xn("GRPC error has no .code"),V.UNKNOWN;switch(t){case ke.OK:return V.OK;case ke.CANCELLED:return V.CANCELLED;case ke.UNKNOWN:return V.UNKNOWN;case ke.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ke.INTERNAL:return V.INTERNAL;case ke.UNAVAILABLE:return V.UNAVAILABLE;case ke.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ke.NOT_FOUND:return V.NOT_FOUND;case ke.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ke.ABORTED:return V.ABORTED;case ke.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ke.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(ne=ke||(ke={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new jr([4294967295,4294967295],0);function V_(t){const e=aN().encode(t),n=new xw;return n.update(e),new Uint8Array(n.digest())}function L_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jr([n,r],0),new jr([i,s],0)]}class Bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(jr.fromNumber(r)));return i.compare(lN)===1&&(i=new jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=V_(e),[r,i]=L_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=V_(e),[r,i]=L_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(Y.min(),i,new we(se),Dn(),ee())}}class Xo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class c0{constructor(e,n){this.targetId=e,this.me=n}}class h0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class M_{constructor(){this.fe=0,this.ge=U_(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Xo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=U_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=b_(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(cd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,nt.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(u){if(u instanceof jw)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bf(o,i,s)}catch(u){return Hi(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&cd(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=b_(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new M_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new M_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function b_(){return new we(H.comparator)}function U_(){return new we(H.comparator)}const cN={asc:"ASCENDING",desc:"DESCENDING"},hN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dN={and:"AND",or:"OR"};class fN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fd(t,e){return t.useProto3Json||Pu(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pN(t,e){return Jl(t,e.toTimestamp())}function sn(t){return ae(!!t),Y.fromTimestamp(function(n){const r=mr(n);return new Le(r.seconds,r.nanos)}(t))}function zf(t,e){return pd(t,e).canonicalString()}function pd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f0(t){const e=fe.fromString(t);return ae(y0(e)),e}function md(t,e){return zf(t.databaseId,e.path)}function Kc(t,e){const n=f0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(m0(n))}function p0(t,e){return zf(t.databaseId,e)}function mN(t){const e=f0(t);return e.length===4?fe.emptyPath():m0(e)}function gd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F_(t,e,n){return{name:md(t,e),fields:n.value.mapValue.fields}}function gN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),Ke.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:u0(h.code);return new z(f,h.message||"")}(o);n=new h0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kc(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):Y.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new fl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kc(t,r.document),s=r.readTime?sn(r.readTime):Y.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kc(t,r.document),s=r.removedTargetIds||[];n=new fl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sN(i,s),l=r.targetId;n=new c0(l,o)}}return n}function _N(t,e){let n;if(e instanceof Yo)n={update:F_(t,e.key,e.value)};else if(e instanceof Ou)n={delete:md(t,e.key)};else if(e instanceof Ir)n={update:F_(t,e.key,e.data),updateMask:RN(e.fieldMask)};else{if(!(e instanceof nN))return G();n={verify:md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof No)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function yN(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(Y.min())&&(o=sn(s)),new Z1(o,i.transformResults||[])}(n,e))):[]}function vN(t,e){return{documents:[p0(t,e.path)]}}function EN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,i);const s=function(h){if(h.length!==0)return _0(Kt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:pi(m.field),direction:IN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function wN(t){let e=mN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=g0(p);return m instanceof Kt&&Ww(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new ko(mi(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Pu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,A=p.values||[];return new Xl(A,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,A=p.values||[];return new Xl(A,m)}(n.endAt)),B1(e,i,o,s,l,"F",u,h)}function TN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>g0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function IN(t){return cN[t]}function SN(t){return hN[t]}function AN(t){return dN[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return $e.fromServerFormat(t.fieldPath)}function _0(t){return t instanceof xe?function(n){if(n.op==="=="){if(A_(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(S_(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A_(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(S_(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:SN(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>_0(i));return r.length===1?r[0]:{compositeFilter:{op:AN(n.op),filters:r}}}(t):G()}function RN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function y0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.ct=e}}function CN(t){const e=wN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.un=new NN}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(pr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class NN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yi(0)}static kn(){return new Yi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&eo(r.mutation,i,St.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Us();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=Zs(),l=function(){return Zs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ir)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),eo(f.mutation,h,f.mutation.getFieldMask(),Le.now())):o.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new DN(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Zs();let i=new we((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||St.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Zw();f.forEach(m=>{if(!s.has(m)){const A=a0(n.get(m),r.get(m));A!==null&&p.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Mr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:l,changes:Jw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,m){return new is(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=Us();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&eo(f.mutation,h,St.empty(),Le.now()),Nu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:CN(i.bundledQuery),readTime:sn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.overlays=new we(H.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Mr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iN(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.Tr=new qe(be.Er),this.dr=new qe(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new be(n,e),i=new be(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(be.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(se);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new be(new H(s),0);let l=new qe(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new be(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.Mr=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||T1(w1(f),r)<=0||(i.has(f.key)||Nu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FN(this)}getSize(e){return L.resolve(this.size)}}class FN extends xN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.persistence=e,this.Nr=new ss(n=>bf(n),Uf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $f,this.targetCount=0,this.kr=Yi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Of(0),this.Kr=!1,this.Kr=!0,this.$r=new MN,this.referenceDelegate=e(this),this.Ur=new jN(this),this.indexManager=new kN,this.remoteDocumentCache=function(i){return new UN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new PN(n),this.Gr=new VN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new zN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class zN extends S1{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Jr=new $f,this.Yr=null}static Zr(e){return new Wf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bR()?8:A1(st())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $N;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ks()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(ks()<=te.DEBUG&&W("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ks()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):L.resolve())}Yi(e,n){if(k_(n))return L.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dd(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,dd(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return k_(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(ks()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.rs(e,o,n,E1(i,-1)).next(l=>l))})}ts(e,n){let r=new qe(Yw(e));return n.forEach((i,s)=>{Nu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ks()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",fi(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new ss(s=>bf(s),Uf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ON(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function HN(t,e,n,r){return new qN(t,e,n,r)}async function v0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function KN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let A=L.resolve();return m.forEach(R=>{A=A.next(()=>f.getEntry(u,R)).next(k=>{const C=h.docVersions.get(R);ae(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function E0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function GN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(k,C,v){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Dn(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(QN(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function QN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function YN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function _d(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function j_(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),m=p._s.get(f);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(JN(r,$1(e),l),{documents:l,Ts:s})))}function JN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class B_{constructor(){this.activeTargetIds=Q1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZN{constructor(){this.so=new B_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new B_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa=null;function Gc(){return qa===null?qa=function(){return 268435456+Math.round(2147483648*Math.random())}():qa++,"0x"+qa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class rx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Gc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Hi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=tx[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Gc();return new Promise((o,l)=>{const u=new Dw;u.setWithCredentials(!0),u.listenOnce(Ow.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cl.NO_ERROR:const f=u.getResponseJson();W(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case cl.TIMEOUT:W(Ze,`RPC '${e}' ${s} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const p=u.getStatus();if(W(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const R=function(C){const v=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(A.status);l(new z(R,A.message))}else l(new z(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{W(Ze,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Gc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mw(),l=Lw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,A=!1;const R=new nx({Io:C=>{A?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),k=(C,v,y)=>{C.listen(v,T=>{try{y(T)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,bs.EventType.OPEN,()=>{A||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(p,bs.EventType.CLOSE,()=>{A||(A=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(p,bs.EventType.ERROR,C=>{A||(A=!0,Hi(Ze,`RPC '${e}' stream ${i} transport errored:`,C),R.So(new z(V.UNAVAILABLE,"The operation could not be completed")))}),k(p,bs.EventType.MESSAGE,C=>{var v;if(!A){const y=C.data[0];ae(!!y);const T=y,D=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(D){W(Ze,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let U=function(w){const I=ke[w];if(I!==void 0)return u0(I)}(b),E=D.message;U===void 0&&(U=V.INTERNAL,E="Unknown error status: "+b+" with message "+D.message),A=!0,R.So(new z(U,E)),p.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,y),R.bo(y)}}),k(l,Vw.STAT_EVENT,C=>{C.stat===od.PROXY?W(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===od.NOPROXY&&W(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new fN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new w0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ix extends T0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?sn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=gd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cd(u)?{documents:vN(s,u)}:{query:EN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d0(s,o.resumeToken);const h=fd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Jl(s,o.snapshotVersion.toTimestamp());const h=fd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=TN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=gd(this.serializer),n.removeTarget=e,this.a_(n)}}class sx extends T0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=yN(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=gd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_N(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ax{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{oi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.L_.add(4),await Jo(h),h.q_.set("Unknown"),h.L_.delete(4),await Mu(h)}(this))})}),this.q_=new ax(r,i)}}async function Mu(t){if(oi(t))for(const e of t.B_)await e(!0)}async function Jo(t){for(const e of t.B_)await e(!1)}function I0(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Qf(n)?Gf(n):os(n).r_()&&Kf(n,e))}function Hf(t,e){const n=X(t),r=os(n);n.N_.delete(e),r.r_()&&S0(n,e),n.N_.size===0&&(r.r_()?r.o_():oi(n)&&n.q_.set("Unknown"))}function Kf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}os(t).A_(e)}function S0(t,e){t.Q_.xe(e),os(t).R_(e)}function Gf(t){t.Q_=new uN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),os(t).start(),t.q_.v_()}function Qf(t){return oi(t)&&!os(t).n_()&&t.N_.size>0}function oi(t){return X(t).L_.size===0}function A0(t){t.Q_=void 0}async function ux(t){t.q_.set("Online")}async function cx(t){t.N_.forEach((e,n)=>{Kf(t,e)})}async function hx(t,e){A0(t),Qf(t)?(t.q_.M_(e),Gf(t)):t.q_.set("Unknown")}async function dx(t,e,n){if(t.q_.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof fl?t.Q_.Ke(e):e instanceof c0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await E0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),S0(s,u);const p=new Jn(f.target,u,h,f.sequenceNumber);Kf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!Qo(e))throw e;t.L_.add(1),await Jo(t),t.q_.set("Offline"),n||(n=()=>E0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Mu(t)})}function R0(t,e){return e().catch(n=>Zl(t,n,e))}async function bu(t){const e=X(t),n=gr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fx(e);)try{const i=await YN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,px(e,i)}catch(i){await Zl(e,i)}P0(e)&&C0(e)}function fx(t){return oi(t)&&t.O_.length<10}function px(t,e){t.O_.push(e);const n=gr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function P0(t){return oi(t)&&!gr(t).n_()&&t.O_.length>0}function C0(t){gr(t).start()}async function mx(t){gr(t).p_()}async function gx(t){const e=gr(t);for(const n of t.O_)e.m_(n.mutations)}async function _x(t,e,n){const r=t.O_.shift(),i=jf.from(r,e,n);await R0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function yx(t,e){e&&gr(t).V_&&await async function(r,i){if(function(o){return oN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();gr(r).s_(),await R0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),P0(t)&&C0(t)}async function $_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Mu(n)}async function vx(t,e){const n=X(t);e?(n.L_.delete(2),await Mu(n)):e||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function os(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ux.bind(null,t),Ro:cx.bind(null,t),mo:hx.bind(null,t),d_:dx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Qf(t)?Gf(t):t.q_.set("Unknown")):(await t.K_.stop(),A0(t))})),t.K_}function gr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new sx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mx.bind(null,t),mo:yx.bind(null,t),f_:gx.bind(null,t),g_:_x.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Yf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Qo(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ui(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ui;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.W_=new we(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xi(e,n,Ui.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class wx{constructor(){this.queries=q_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=q_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function q_(){return new ss(t=>Qw(t),ku)}async function Jf(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Ex,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ep(n)}async function Zf(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Tx(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&ep(n)}function Ix(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ep(t){t.Y_.forEach(e=>{e.next()})}var yd,H_;(H_=yd||(yd={})).ea="default",H_.Cache="cache";class tp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.key=e}}class N0{constructor(e){this.key=e}}class Sx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Yw(e),this.Ra=new Ui(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new W_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),A=Nu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;m&&A?m.data.isEqual(A.data)?R!==k&&(r.track({type:3,doc:A}),C=!0):this.ga(m,A)||(r.track({type:2,doc:A}),C=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),C=!0):m&&!A&&(r.track({type:1,doc:m}),C=!0,(u||h)&&(l=!0)),C&&(A?(o=o.add(A),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,R){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(A)-k(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Xi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new W_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new N0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new k0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ax{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Rx{constructor(e){this.key=e,this.va=!1}}class Px{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ss(l=>Qw(l),ku),this.Ma=new Map,this.xa=new Set,this.Oa=new we(H.comparator),this.Na=new Map,this.La=new $f,this.Ba={},this.ka=new Map,this.qa=Yi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cx(t,e,n=!0){const r=M0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await x0(r,e,n,!0),i}async function kx(t,e){const n=M0(t);await x0(n,e,!0,!1)}async function x0(t,e,n,r){const i=await XN(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Nx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&I0(t.remoteStore,i),l}async function Nx(t,e,n,r,i){t.Ka=(p,m,A)=>async function(k,C,v,y){let T=C.view.ma(v);T.ns&&(T=await j_(k.localStore,C.query,!1).then(({documents:E})=>C.view.ma(E,T)));const D=y&&y.targetChanges.get(C.targetId),b=y&&y.targetMismatches.get(C.targetId)!=null,U=C.view.applyChanges(T,k.isPrimaryClient,D,b);return G_(k,C.targetId,U.wa),U.snapshot}(t,p,m,A);const s=await j_(t.localStore,e,!0),o=new Sx(e,s.Ts),l=o.ma(s.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);G_(t,n,h.wa);const f=new Ax(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function xx(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ku(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _d(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Hf(r.remoteStore,i.targetId),vd(r,i.targetId)}).catch(Go)):(vd(r,i.targetId),await _d(r.localStore,i.targetId,!0))}async function Dx(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hf(n.remoteStore,r.targetId))}async function Ox(t,e,n){const r=jx(t);try{const i=await function(o,l){const u=X(o),h=Le.now(),f=l.reduce((A,R)=>A.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=Dn(),k=ee();return u.cs.getEntries(A,f).next(C=>{R=C,R.forEach((v,y)=>{y.isValidDocument()||(k=k.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(C=>{p=C;const v=[];for(const y of l){const T=tN(y,p.get(y.key).overlayedDocument);T!=null&&v.push(new Ir(y.key,T,Bw(T.value.mapValue),ht.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,v,l)}).next(C=>{m=C;const v=C.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(A,C.batchId,v)})}).then(()=>({batchId:m.batchId,changes:Jw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(se)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Zo(r,i.changes),await bu(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function D0(t,e){const n=X(t);try{const r=await GN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Zo(n,r,e)}catch(r){await Go(r)}}function K_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&ep(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vx(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,nt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Vu(Y.min(),new Map,new we(se),o,l);await D0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),np(r)}else await _d(r.localStore,e,!1).then(()=>vd(r,e,n)).catch(Go)}async function Lx(t,e){const n=X(t),r=e.batch.batchId;try{const i=await KN(n.localStore,e);V0(n,r,null),O0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,i)}catch(i){await Go(i)}}async function Mx(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);V0(r,e,n),O0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,i)}catch(i){await Go(i)}}function O0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function V0(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||L0(t,r)})}function L0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),np(t))}function G_(t,e,n){for(const r of n)r instanceof k0?(t.La.addReference(r.key,e),bx(t,r)):r instanceof N0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||L0(t,r.key)):G()}function bx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),np(t))}function np(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new Rx(n)),t.Oa=t.Oa.insert(n,r),I0(t.remoteStore,new Jn(rn(Cu(n.path)),r,"TargetPurposeLimboResolution",Of.oe))}}async function Zo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=qf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.$i,A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>L.forEach(m.Ui,A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!Qo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const A=f.os.get(m),R=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,k)}}}(r.localStore,s))}async function Ux(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await v0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.hs)}}function Fx(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function M0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=D0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vx.bind(null,e),e.Ca.d_=Tx.bind(null,e.eventManager),e.Ca.$a=Ix.bind(null,e.eventManager),e}function jx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mx.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return HN(this.persistence,new WN,e.initialUser,this.serializer)}Ga(e){return new BN(Wf.Zr,this.serializer)}Wa(e){return new ZN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class Ed{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ux.bind(null,this.syncEngine),await vx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wx}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=function(s){return new rx(s)}(e.databaseInfo);return function(s,o,l,u){return new ox(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>K_(this.syncEngine,n,0),function(){return z_.D()?new z_:new ex}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new Px(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Jo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ed.provider={build:()=>new Ed};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await v0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zx(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$_(e.remoteStore,i)),t._onlineComponents=e}async function zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new eu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Yc(t,new eu);return t._offlineComponents}async function b0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Q_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Q_(t,new Ed))),t._onlineComponents}function $x(t){return b0(t).then(e=>e.syncEngine)}async function tu(t){const e=await b0(t),n=e.eventManager;return n.onListen=Cx.bind(null,e.syncEngine),n.onUnlisten=xx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Dx.bind(null,e.syncEngine),n}function Wx(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new rp({next:m=>{f.Za(),o.enqueueAndForget(()=>Zf(s,p));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new tp(Cu(l.path),f,{includeMetadataChanges:!0,_a:!0});return Jf(s,p)}(await tu(t),t.asyncQueue,e,n,r)),r.promise}function qx(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new rp({next:m=>{f.Za(),o.enqueueAndForget(()=>Zf(s,p)),m.fromCache&&u.source==="server"?h.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new tp(l,f,{includeMetadataChanges:!0,_a:!0});return Jf(s,p)}(await tu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hx(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X_(t){if(!H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function J_(t){if(H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new h1;switch(r.type){case"firstParty":return new m1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y_.get(n);r&&(W("ComponentProvider","Removing Datastore"),Y_.delete(n),r.terminate())}(this),Promise.resolve()}}function Kx(t,e,n,r={}){var i;const s=(t=dt(t,Fu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=qE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(h)}t._authCredentials=new d1(new bw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}}class ur extends Sr{constructor(e,n,r){super(e,n,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new H(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function VO(t,e,...n){if(t=me(t),F0("collection","path",e),t instanceof Fu){const r=fe.fromString(e,...n);return J_(r),new ur(t,null,r)}{if(!(t instanceof rt||t instanceof ur))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return J_(r),new ur(t.firestore,null,r)}}function pl(t,e,...n){if(t=me(t),arguments.length===1&&(e=Uw.newId()),F0("doc","path",e),t instanceof Fu){const r=fe.fromString(e,...n);return X_(r),new rt(t,null,new H(r))}{if(!(t instanceof rt||t instanceof ur))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return X_(r),new rt(t.firestore,t instanceof ur?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new w0(this,"async_queue_retry"),this.Vu=()=>{const r=Qc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Yf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ty(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class an extends Fu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ey,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ey(e),this._firestoreClient=void 0,await e}}}function Gx(t,e){const n=typeof t=="object"?t:Iu(),r=typeof t=="string"?t:"(default)",i=$o(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zE("firestore");s&&Kx(i,...s)}return i}function ea(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Qx(t),t._firestoreClient}function Qx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new C1(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,U0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Bx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(Ke.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ji(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=/^__.*__$/;class Xx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class j0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function B0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(B0(this.Cu)&&Yx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Jx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lu(e)}Qu(e,n,r,i=!1){return new op({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new Jx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ap(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const l=W0(r,o);let u,h;if(s.merge)u=new St(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=wd(e,p,n);if(!o.contains(m))throw new z(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);H0(f,m)||f.push(m)}u=new St(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Xx(new gt(l),u,h)}class ju extends na{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}class lp extends na{_toFieldTransform(e){return new o0(e.path,new No)}isEqual(e){return e instanceof lp}}class up extends na{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Oo(e.serializer,t0(e.serializer,this.$u));return new o0(e.path,n)}isEqual(e){return e instanceof up&&this.$u===e.$u}}function z0(t,e,n,r){const i=t.Qu(1,e,n);cp("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();si(r,(u,h)=>{const f=hp(e,u,n);h=me(h);const p=i.Nu(f);if(h instanceof ju)s.push(f);else{const m=ia(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new St(s);return new j0(o,l,i.fieldTransforms)}function $0(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[wd(e,r,n)],u=[i];if(s.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(wd(e,s[m])),u.push(s[m+1]);const h=[],f=gt.empty();for(let m=l.length-1;m>=0;--m)if(!H0(h,l[m])){const A=l[m];let R=u[m];R=me(R);const k=o.Nu(A);if(R instanceof ju)h.push(A);else{const C=ia(R,k);C!=null&&(h.push(A),f.set(A,C))}}const p=new St(h);return new j0(f,p,o.fieldTransforms)}function Zx(t,e,n,r=!1){return ia(n,t.Qu(r?4:3,e))}function ia(t,e){if(q0(t=me(t)))return cp("Unsupported field value:",e,t),W0(t,e);if(t instanceof na)return function(r,i){if(!B0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Jl(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(i.serializer,s)}}if(r instanceof ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ji)return{bytesValue:d0(i.serializer,r._byteString)};if(r instanceof rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ff(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Uu(r)}`)}(t,e)}function W0(t,e){const n={};return Fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function q0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof ip||t instanceof Ji||t instanceof rt||t instanceof na||t instanceof sp)}function cp(t,e,n){if(!q0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Uu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wd(t,e,n){if((e=me(e))instanceof ta)return e._internalPath;if(typeof e=="string")return hp(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const eD=new RegExp("[~\\*/\\[\\]]");function hp(t,e,n){if(e.search(eD)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ta(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(V.INVALID_ARGUMENT,l+t+u)}function H0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends K0{data(){return super.data()}}function Bu(t,e){return typeof e=="string"?hp(t,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dp{}class Q0 extends dp{}function LO(t,e,...n){let r=[];e instanceof dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof fp).length,l=s.filter(u=>u instanceof zu).length;if(o>1||o>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zu extends Q0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zu(e,n,r)}_apply(e){const n=this._parse(e);return Y0(e._query,n),new Sr(e.firestore,e.converter,hd(e._query,n))}_parse(e){const n=ra(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ry(p,f);const A=[];for(const R of p)A.push(ny(u,s,R));m={arrayValue:{values:A}}}else m=ny(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ry(p,f),m=Zx(l,o,p,f==="in"||f==="not-in");return xe.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function MO(t,e,n){const r=e,i=Bu("where",t);return zu._create(i,r,n)}class fp extends dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Y0(o,u),o=hd(o,u)}(e._query,n),new Sr(e.firestore,e.converter,hd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pp extends Q0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ko(s,o)}(e._query,this._field,this._direction);return new Sr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new is(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function bO(t,e="asc"){const n=e,r=Bu("orderBy",t);return pp._create(r,n)}function ny(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gw(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I_(t,new H(r))}if(n instanceof rt)return I_(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uu(n)}.`)}function ry(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Y0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nD{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new sp(s)}convertGeoPoint(e){return new ip(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=mr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(y0(r));const i=new Po(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class X0 extends K0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends X0{data(e={}){return super.data(e)}}class J0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:rD(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){t=dt(t,rt);const e=dt(t.firestore,an);return Wx(ea(e),t._key).then(n=>Z0(e,t,n))}class gp extends nD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function UO(t){t=dt(t,Sr);const e=dt(t.firestore,an),n=ea(e),r=new gp(e);return G0(t._query),qx(n,t._query).then(i=>new J0(e,r,t,i))}function iy(t,e,n){t=dt(t,rt);const r=dt(t.firestore,an),i=mp(t.converter,e,n);return sa(r,[ap(ra(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ht.none())])}function FO(t,e,n,...r){t=dt(t,rt);const i=dt(t.firestore,an),s=ra(i);let o;return o=typeof(e=me(e))=="string"||e instanceof ta?$0(s,"updateDoc",t._key,e,n,r):z0(s,"updateDoc",t._key,e),sa(i,[o.toMutation(t._key,ht.exists(!0))])}function jO(t){return sa(dt(t.firestore,an),[new Ou(t._key,ht.none())])}function BO(t,e){const n=dt(t.firestore,an),r=pl(t),i=mp(t.converter,e);return sa(n,[ap(ra(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ht.exists(!1))]).then(()=>r)}function zO(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ty(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ty(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof rt)h=dt(t.firestore,an),f=Cu(t._key.path),u={next:p=>{e[o]&&e[o](Z0(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=dt(t,Sr);h=dt(p.firestore,an),f=p._query;const m=new gp(h);u={next:A=>{e[o]&&e[o](new J0(h,m,p,A))},error:e[o+1],complete:e[o+2]},G0(t._query)}return function(m,A,R,k){const C=new rp(k),v=new tp(A,C,R);return m.asyncQueue.enqueueAndForget(async()=>Jf(await tu(m),v)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>Zf(await tu(m),v))}}(ea(h),f,l,u)}function sa(t,e){return function(r,i){const s=new Sn;return r.asyncQueue.enqueueAndForget(async()=>Ox(await $x(r),i,s)),s.promise}(ea(t),e)}function Z0(t,e,n){const r=n.docs.get(e._key),i=new gp(t);return new X0(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ra(e)}set(e,n,r){this._verifyNotCommitted();const i=Xc(e,this._firestore),s=mp(i.converter,n,r),o=ap(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ht.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Xc(e,this._firestore);let o;return o=typeof(n=me(n))=="string"||n instanceof ta?$0(this._dataReader,"WriteBatch.update",s._key,n,r,i):z0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ht.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Xc(e,this._firestore);return this._mutations=this._mutations.concat(new Ou(n._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xc(t,e){if((t=me(t)).firestore!==e)throw new z(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function sy(){return new lp("serverTimestamp")}function $O(t){return new up("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){return ea(t=dt(t,an)),new sD(t,e=>sa(t,e))}(function(e,n=!0){(function(i){rs=i})(Er),fr(new dr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new an(new f1(r.getProvider("auth-internal")),new _1(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt(y_,"4.7.3",e),Wt(y_,"4.7.3","esm2017")})();var oD="firebase",aD="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(oD,aD,"app");const lD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Gt,SDK_VERSION:Er,_DEFAULT_ENTRY_NAME:zl,_addComponent:td,_apps:Kr,_components:Wl,_getProvider:$o,_isFirebaseServerApp:Bt,_registerComponent:fr,_serverApps:$l,deleteApp:WP,getApp:Iu,initializeApp:Tf,registerVersion:Wt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="firebasestorage.googleapis.com",tT="storageBucket",uD=2*60*1e3,cD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Gt{constructor(e,n,r=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Jc(t){return"storage/"+t}function _p(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(Se.UNKNOWN,t)}function hD(t){return new Ae(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dD(t){return new Ae(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(Se.UNAUTHENTICATED,t)}function pD(){return new Ae(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mD(t){return new Ae(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gD(){return new Ae(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _D(){return new Ae(Se.CANCELED,"User canceled the upload/download.")}function yD(t){return new Ae(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function vD(t){return new Ae(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ED(){return new Ae(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tT+"' property when initializing the app?")}function wD(){return new Ae(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TD(){return new Ae(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ID(t){return new Ae(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Td(t){return new Ae(Se.INVALID_ARGUMENT,t)}function nT(){return new Ae(Se.APP_DELETED,"The Firebase app was deleted.")}function SD(t){return new Ae(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(t,e){return new Ae(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ns(t){throw new Ae(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw vD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},k=n===eT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",v=new RegExp(`^https?://${k}/${i}/${C}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:A,indices:R,postModify:h},{regex:v,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<T.length;D++){const b=T[D],U=b.regex.exec(e);if(U){const E=U[b.indices.bucket];let _=U[b.indices.path];_||(_=""),r=new At(E,_),b.postModify(r);break}}if(r==null)throw yD(e);return r}}class AD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...C){h||(h=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(A,u())},C)}function m(){s&&clearTimeout(s)}function A(C,...v){if(h){m();return}if(C){m(),f.call(null,C,...v);return}if(u()||o){m(),f.call(null,C,...v);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let R=!1;function k(C){R||(R=!0,m(),!h&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function PD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t){return t!==void 0}function kD(t){return typeof t=="object"&&!Array.isArray(t)}function yp(t){return typeof t=="string"||t instanceof String}function oy(t){return vp()&&t instanceof Blob}function vp(){return typeof Blob<"u"}function ay(t,e,n,r){if(r<e)throw Td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Td(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,r,i,s,o,l,u,h,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,R)=>{this.resolve_=A,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ha(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Br.NO_ERROR,u=s.getStatus();if(!l||ND(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Br.ABORT;r(!1,new Ha(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Ha(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());CD(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=_p();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?nT():_D();o(u)}else{const u=gD();o(u)}};this.canceled_?n(!1,new Ha(!1,null,!0)):this.backoffId_=RD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ha{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function DD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MD(t,e,n,r,i,s,o=!0){const l=rT(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return VD(h,e),DD(h,n),OD(h,s),LD(h,r),new xD(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UD(...t){const e=bD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vp())return new Blob(t);throw new Ae(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){if(typeof atob>"u")throw ID("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zc{constructor(e,n){this.data=e,this.contentType=n||null}}function BD(t,e){switch(t){case Jt.RAW:return new Zc(iT(e));case Jt.BASE64:case Jt.BASE64URL:return new Zc(sT(t,e));case Jt.DATA_URL:return new Zc($D(e),WD(e))}throw _p()}function iT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zD(t){let e;try{e=decodeURIComponent(t)}catch{throw to(Jt.DATA_URL,"Malformed data URL.")}return iT(e)}function sT(t,e){switch(t){case Jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw to(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw to(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jD(e)}catch(i){throw i.message.includes("polyfill")?i:to(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class oT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw to(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $D(t){const e=new oT(t);return e.base64?sT(Jt.BASE64,e.rest):zD(e.rest)}function WD(t){return new oT(t).contentType}function qD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){let r=0,i="";oy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(oy(this.data_)){const r=this.data_,i=FD(r,e,n);return i===null?null:new Gn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Gn(r,!0)}}static getBlob(...e){if(vp()){const n=e.map(r=>r instanceof Gn?r.data_:r);return new Gn(UD.apply(null,n))}else{const n=e.map(o=>yp(o)?BD(Jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Gn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){let e;try{e=JSON.parse(t)}catch{return null}return kD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function KD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function lT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||GD}}let Ka=null;function QD(t){return!yp(t)||t.length<2?t:lT(t)}function uT(){if(Ka)return Ka;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return QD(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),Ka=t,Ka}function YD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function XD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return YD(r,t),r}function cT(t,e,n){const r=aT(e);return r===null?null:XD(t,r,n)}function JD(t,e,n,r){const i=aT(e);if(i===null||!yp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),A=Ep(m,n,r),R=rT({alt:"media",token:h});return A+R})[0]}function ZD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class hT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){if(!t)throw _p()}function eO(t,e){function n(r,i){const s=cT(t,i,e);return dT(s!==null),s}return n}function tO(t,e){function n(r,i){const s=cT(t,i,e);return dT(s!==null),JD(s,i,t.host,t._protocol)}return n}function fT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=pD():i=fD():n.getStatus()===402?i=dD(t.bucket):n.getStatus()===403?i=mD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function nO(t){const e=fT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=hD(t.path)),s.serverResponse=i.serverResponse,s}return n}function rO(t,e,n){const r=e.fullServerUrl(),i=Ep(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new hT(i,s,tO(t,n),o);return l.errorHandler=nO(e),l}function iO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function sO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=iO(null,e)),r}function oO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let D=0;D<2;D++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=sO(e,r,i),f=ZD(h,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+u+"--",A=Gn.getBlob(p,r,m);if(A===null)throw wD();const R={name:h.fullPath},k=Ep(s,t.host,t._protocol),C="POST",v=t.maxUploadRetryTime,y=new hT(k,C,eO(t,n),v);return y.urlParams=R,y.headers=o,y.body=A.uploadData(),y.errorHandler=fT(e),y}class aO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lO extends aO{initXhr(){this.xhr_.responseType="text"}}function pT(){return new lO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lT(this._location.path)}get storage(){return this._service}get parent(){const e=HD(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SD(e)}}function uO(t,e,n){t._throwIfRoot("uploadBytes");const r=oO(t.storage,t._location,uT(),new Gn(e,!0),n);return t.storage.makeRequestWithTokens(r,pT).then(i=>({metadata:i,ref:t}))}function cO(t){t._throwIfRoot("getDownloadURL");const e=rO(t.storage,t._location,uT());return t.storage.makeRequestWithTokens(e,pT).then(n=>{if(n===null)throw TD();return n})}function hO(t,e){const n=KD(t._location.path,e),r=new At(t._location.bucket,n);return new Zr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){return/^[A-Za-z]+:\/\//.test(t)}function fO(t,e){return new Zr(t,e)}function mT(t,e){if(t instanceof wp){const n=t;if(n._bucket==null)throw ED();const r=new Zr(n,n._bucket);return e!=null?mT(r,e):r}else return e!==void 0?hO(t,e):t}function pO(t,e){if(e&&dO(e)){if(t instanceof wp)return fO(t,e);throw Td("To use ref(service, url), the first argument must be a Storage instance.")}else return mT(t,e)}function ly(t,e){const n=e==null?void 0:e[tT];return n==null?null:At.makeFromBucketSpec(n,t)}function mO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:qE(i,t.app.options.projectId))}class wp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=eT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uD,this._maxUploadRetryTime=cD,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=ly(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=ly(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ay("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ay("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new AD(nT());{const o=MD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const uy="@firebase/storage",cy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="storage";function qO(t,e,n){return t=me(t),uO(t,e,n)}function HO(t){return t=me(t),cO(t)}function KO(t,e){return t=me(t),pO(t,e)}function gO(t=Iu(),e){t=me(t);const r=$o(t,gT).getImmediate({identifier:e}),i=zE("storage");return i&&_O(r,...i),r}function _O(t,e,n,r={}){mO(t,e,n,r)}function yO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wp(n,r,i,e,Er)}function vO(){fr(new dr(gT,yO,"PUBLIC").setMultipleInstances(!0)),Wt(uy,cy,""),Wt(uy,cy,"esm2017")}vO();const _T={apiKey:"AIzaSyBbGPFl3jKJX8n8wKl5qPC_qESqVvJc5Hs",authDomain:"dermlux-waitlist.firebaseapp.com",projectId:"dermlux-waitlist",storageBucket:"dermlux-waitlist.firebasestorage.app",messagingSenderId:"131418143547",appId:"1:131418143547:web:c70a862a161aa28b89951e"},Tp=Tf(_T),Fn=Nw(Tp),eh=Gx(Tp),GO=gO(Tp),yT=j.createContext(null);function EO({children:t}){const[e,n]=j.useState(null),[r,i]=j.useState(null),[s,o]=j.useState(!0);async function l(k,C){return YC(Fn,k,C)}async function u(){return a_(Fn)}async function h(k,C,v,y="agent"){const{initializeApp:T,deleteApp:D}=await vf(async()=>{const{initializeApp:E,deleteApp:_}=await Promise.resolve().then(()=>lD);return{initializeApp:E,deleteApp:_}},void 0),b=T(_T,"Secondary-"+Date.now()),U=Nw(b);try{const E=await QC(U,k,C);return await iy(pl(eh,"users",E.user.uid),{email:k,displayName:v,role:y,password:C,active:!0,createdAt:sy()}),E.user}finally{await U.signOut(),await D(b)}}async function f(k){var C,v,y,T;try{const D=await iD(pl(eh,"users",k));D.exists()?i(D.data()):(await iy(pl(eh,"users",k),{email:(C=Fn.currentUser)==null?void 0:C.email,displayName:(v=Fn.currentUser)==null?void 0:v.email,role:"agent",active:!0,createdAt:sy()}),i({role:"agent",displayName:(y=Fn.currentUser)==null?void 0:y.email}))}catch(D){console.error("fetchUserProfile error:",D),i({role:"agent",displayName:(T=Fn.currentUser)==null?void 0:T.email})}}j.useEffect(()=>ZC(Fn,async C=>{n(C),C?await f(C.uid):i(null),o(!1)}),[]),j.useEffect(()=>{if(!e)return;const k=30*60*1e3;let C;const v=()=>{clearTimeout(C),C=setTimeout(()=>{a_(Fn)},k)},y=["mousedown","keydown","touchstart","scroll"];return y.forEach(T=>window.addEventListener(T,v,{passive:!0})),v(),()=>{clearTimeout(C),y.forEach(T=>window.removeEventListener(T,v))}},[e]);const m=(r==null?void 0:r.role)==="admin"||(e==null?void 0:e.uid)==="TMgFlpv8ZcNGcgk7XKIxjDktf802",A=(r==null?void 0:r.role)==="ekloges"||m,R=(r==null?void 0:r.role)==="marketer";return q.jsx(yT.Provider,{value:{currentUser:e,userProfile:r,isAdmin:m,isEkloges:A,isMarketer:R,login:l,logout:u,createUser:h,loading:s},children:s?q.jsx("div",{className:"min-h-screen flex items-center justify-center bg-blue-50",children:q.jsx("div",{className:"text-blue-600 text-lg font-medium",children:"Φόρτωση…"})}):t})}function $u(){return j.useContext(yT)}const th=["#9D835E","#B392A4","#C9B4C0","#EEECE0","#7E88BC"];function wO(){const{login:t}=$u(),e=VE(),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(""),[u,h]=j.useState(!1),f=j.useRef(null),p=j.useRef(null);j.useEffect(()=>{const R=f.current,k=p.current;if(!R||!k||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const C=k.offsetWidth||110;let v=Math.random()*(R.clientWidth-C),y=Math.random()*(R.clientHeight-C),T=95,D=80,b=0,U=0,E=performance.now();const _=()=>{k.style.backgroundColor=th[b%th.length]};_();const w=I=>{U=requestAnimationFrame(w);const P=Math.min((I-E)/1e3,.05);E=I;const N=R.clientWidth-C,S=R.clientHeight-C;v+=T*P,y+=D*P;let Me=!1;v<=0?(v=0,T=Math.abs(T),Me=!0):v>=N&&(v=N,T=-Math.abs(T),Me=!0),y<=0?(y=0,D=Math.abs(D),Me=!0):y>=S&&(y=S,D=-Math.abs(D),Me=!0),Me&&(b++,_()),k.style.transform=`translate(${v}px, ${y}px)`};return U=requestAnimationFrame(w),()=>cancelAnimationFrame(U)},[]);async function m(R){R.preventDefault(),l(""),h(!0);try{await t(n,i),e("/")}catch{l("Λάθος email ή κωδικός.")}finally{h(!1)}}const A="/dermlux-email/brand/emblem-motif.png";return q.jsxs("div",{ref:f,className:"relative min-h-screen overflow-hidden flex items-center justify-center px-4",style:{background:"radial-gradient(1200px 800px at 50% -10%, #221e18 0%, transparent 60%),radial-gradient(1000px 700px at 85% 110%, rgba(38,40,61,0.85) 0%, transparent 60%),#100f0d"},children:[q.jsx("div",{ref:p,"aria-hidden":"true",className:"absolute top-0 left-0 pointer-events-none will-change-transform",style:{width:110,height:110,WebkitMaskImage:`url(${A})`,maskImage:`url(${A})`,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"contain",maskSize:"contain",WebkitMaskPosition:"center",maskPosition:"center",backgroundColor:th[0],transition:"background-color 0.4s ease",filter:"drop-shadow(0 0 14px rgba(201,180,192,0.35))",opacity:.85}}),q.jsxs("div",{className:"relative z-10 w-full max-w-md rounded-2xl p-8 backdrop-blur-md",style:{background:"rgba(238,236,224,0.06)",border:"1px solid rgba(238,236,224,0.14)",boxShadow:"0 24px 60px rgba(0,0,0,0.45)"},children:[q.jsxs("div",{className:"text-center mb-8",children:[q.jsx("div",{style:{fontFamily:"'Prata', Georgia, serif",color:"#EEECE0"},className:"text-4xl tracking-wide",children:"DermLux"}),q.jsx("div",{className:"mt-2 text-[11px] font-bold uppercase tracking-[0.35em]",style:{color:"#9D835E"},children:"Medical Aesthetics"})]}),q.jsxs("form",{onSubmit:m,className:"space-y-4",children:[o&&q.jsx("div",{className:"rounded-lg px-4 py-3 text-sm",style:{background:"rgba(220,60,60,0.12)",border:"1px solid rgba(220,60,60,0.35)",color:"#f3b4b4"},children:o}),q.jsxs("div",{children:[q.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"#C9B4C0"},children:"Email"}),q.jsx("input",{type:"email",value:n,onChange:R=>r(R.target.value),required:!0,autoFocus:!0,className:"w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2",style:{background:"rgba(238,236,224,0.07)",border:"1px solid rgba(238,236,224,0.18)",color:"#EEECE0"}})]}),q.jsxs("div",{children:[q.jsx("label",{className:"block text-sm font-medium mb-1",style:{color:"#C9B4C0"},children:"Κωδικός"}),q.jsx("input",{type:"password",value:i,onChange:R=>s(R.target.value),required:!0,className:"w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2",style:{background:"rgba(238,236,224,0.07)",border:"1px solid rgba(238,236,224,0.18)",color:"#EEECE0"}})]}),q.jsx("button",{type:"submit",disabled:u,className:"w-full mt-2 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-60",style:{background:"linear-gradient(135deg, #9D835E, #B392A4)",color:"#100f0d"},children:u?"Σύνδεση…":"Σύνδεση"})]})]})]})}function TO(){const{currentUser:t,userProfile:e,logout:n}=$u();return q.jsx("nav",{className:"bg-gray-900 text-white",children:q.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-lg",children:"📧"}),q.jsx("span",{className:"font-semibold tracking-wide",children:"DermLux Email Marketing"})]}),q.jsxs("div",{className:"flex items-center gap-4",children:[q.jsx("span",{className:"text-sm text-gray-300 hidden sm:inline",children:(e==null?void 0:e.displayName)||(t==null?void 0:t.email)}),q.jsx("button",{onClick:n,className:"text-sm px-3 py-1.5 rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-colors",children:"Έξοδος"})]})]})})}class IO extends j.Component{constructor(){super(...arguments);Tm(this,"state",{error:null})}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("ErrorBoundary caught:",n,r)}render(){return this.state.error?q.jsx("div",{className:"min-h-screen flex items-center justify-center bg-blue-50 px-4",children:q.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 max-w-md text-center space-y-4",children:[q.jsx("div",{className:"text-4xl",children:"😵"}),q.jsx("h1",{className:"text-lg font-bold text-gray-800",children:"Κάτι πήγε στραβά"}),q.jsx("p",{className:"text-sm text-gray-500",children:"Παρουσιάστηκε απρόσμενο σφάλμα. Πάτησε το κουμπί για επαναφόρτωση — τα δεδομένα σου είναι ασφαλή."}),q.jsx("button",{onClick:()=>window.location.reload(),className:"px-5 py-2 rounded-lg bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors",children:"🔄 Επαναφόρτωση"})]})}):this.props.children}}const SO=j.lazy(()=>vf(()=>import("./EmailMarketing-BTE25q38.js"),[])),AO=j.lazy(()=>vf(()=>import("./UnsubscribePage-BgbzBjZd.js"),[]));function RO(){return q.jsx("div",{className:"flex items-center justify-center py-24",children:q.jsx("div",{className:"text-blue-600 text-sm font-medium animate-pulse",children:"Φόρτωση…"})})}function PO({children:t}){const{currentUser:e,isAdmin:n,isMarketer:r}=$u();return e?!n&&!r?q.jsxs("div",{className:"max-w-md mx-auto mt-24 text-center px-6",children:[q.jsx("p",{className:"text-lg font-semibold text-gray-900",children:"Δεν έχετε πρόσβαση"}),q.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Ο λογαριασμός σας δεν έχει δικαίωμα email marketing."})]}):t:q.jsx(Yh,{to:"/login",replace:!0})}function CO(){const{currentUser:t}=$u(),e=wu(),n=e.pathname==="/unsubscribe";return q.jsxs("div",{className:"min-h-screen flex flex-col",children:[t&&!n&&q.jsx(TO,{}),q.jsx("main",{className:"flex-1",children:q.jsx(IO,{children:q.jsx(j.Suspense,{fallback:q.jsx(RO,{}),children:q.jsx("div",{className:"route-fade",children:q.jsxs(_R,{children:[q.jsx(di,{path:"/login",element:q.jsx(wO,{})}),q.jsx(di,{path:"/email",element:q.jsx(PO,{children:q.jsx(SO,{})})}),q.jsx(di,{path:"/unsubscribe",element:q.jsx(AO,{})}),q.jsx(di,{path:"/",element:q.jsx(Yh,{to:"/email",replace:!0})}),q.jsx(di,{path:"*",element:q.jsx(Yh,{to:"/email",replace:!0})})]})},e.pathname)})})})]})}nh.createRoot(document.getElementById("root")).render(q.jsx(wy.StrictMode,{children:q.jsx(ER,{children:q.jsx(EO,{children:q.jsx(CO,{})})})}));export{mI as R,Le as T,vf as _,pl as a,MO as b,VO as c,eh as d,iD as e,$u as f,UO as g,BO as h,$O as i,q as j,bO as k,iy as l,jO as m,RA as n,zO as o,ZT as p,LO as q,j as r,sy as s,NO as t,FO as u,qO as v,WO as w,KO as x,GO as y,HO as z};
