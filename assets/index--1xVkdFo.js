(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function td(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l0={exports:{}},pu={},u0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),fI=Symbol.for("react.portal"),hI=Symbol.for("react.fragment"),dI=Symbol.for("react.strict_mode"),pI=Symbol.for("react.profiler"),mI=Symbol.for("react.provider"),gI=Symbol.for("react.context"),vI=Symbol.for("react.forward_ref"),yI=Symbol.for("react.suspense"),_I=Symbol.for("react.memo"),wI=Symbol.for("react.lazy"),sg=Symbol.iterator;function EI(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f0=Object.assign,h0={};function so(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||c0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d0(){}d0.prototype=so.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||c0}var rd=nd.prototype=new d0;rd.constructor=nd;f0(rd,so.prototype);rd.isPureReactComponent=!0;var ag=Array.isArray,p0=Object.prototype.hasOwnProperty,id={current:null},m0={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)p0.call(e,r)&&!m0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ks,type:t,key:o,ref:s,props:i,_owner:id.current}}function TI(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function II(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lg=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?II(""+t.key):e.toString(36)}function il(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ks:case fI:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+bc(s,0):r,ag(i)?(n="",t!=null&&(n=t.replace(lg,"$&/")+"/"),il(i,e,n,"",function(c){return c})):i!=null&&(od(i)&&(i=TI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ag(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+bc(o,l);s+=il(o,e,n,u,i)}else if(u=EI(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+bc(o,l++),s+=il(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Sa(t,e,n){if(t==null)return t;var r=[],i=0;return il(t,r,"","",function(o){return e.call(n,o,i++)}),r}function AI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},ol={transition:null},SI={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:ol,ReactCurrentOwner:id};function v0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=so;ie.Fragment=hI;ie.Profiler=pI;ie.PureComponent=nd;ie.StrictMode=dI;ie.Suspense=yI;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI;ie.act=v0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)p0.call(e,u)&&!m0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ks,type:t.type,key:i,ref:o,props:r,_owner:s}};ie.createContext=function(t){return t={$$typeof:gI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mI,_context:t},t.Consumer=t};ie.createElement=g0;ie.createFactory=function(t){var e=g0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:vI,render:t}};ie.isValidElement=od;ie.lazy=function(t){return{$$typeof:wI,_payload:{_status:-1,_result:t},_init:AI}};ie.memo=function(t,e){return{$$typeof:_I,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};ie.unstable_act=v0;ie.useCallback=function(t,e){return Et.current.useCallback(t,e)};ie.useContext=function(t){return Et.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Et.current.useEffect(t,e)};ie.useId=function(){return Et.current.useId()};ie.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Et.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ie.useRef=function(t){return Et.current.useRef(t)};ie.useState=function(t){return Et.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Et.current.useTransition()};ie.version="18.3.1";u0.exports=ie;var sd=u0.exports;const ne=td(sd);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kI=sd,PI=Symbol.for("react.element"),RI=Symbol.for("react.fragment"),CI=Object.prototype.hasOwnProperty,bI=kI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xI={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)CI.call(e,r)&&!xI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PI,type:t,key:o,ref:s,props:i,_owner:bI.current}}pu.Fragment=RI;pu.jsx=y0;pu.jsxs=y0;l0.exports=pu;var K=l0.exports,Sf={},_0={exports:{}},Ut={},w0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,j){var F=$.length;$.push(j);e:for(;0<F;){var Q=F-1>>>1,H=$[Q];if(0<i(H,j))$[Q]=j,$[F]=H,F=Q;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var j=$[0],F=$.pop();if(F!==j){$[0]=F;e:for(var Q=0,H=$.length,J=H>>>1;Q<J;){var me=2*(Q+1)-1,ke=$[me],Me=me+1,xe=$[Me];if(0>i(ke,F))Me<H&&0>i(xe,ke)?($[Q]=xe,$[Me]=F,Q=Me):($[Q]=ke,$[me]=F,Q=me);else if(Me<H&&0>i(xe,F))$[Q]=xe,$[Me]=F,Q=Me;else break e}}return j}function i($,j){var F=$.sortIndex-j.sortIndex;return F!==0?F:$.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,p=null,m=3,w=!1,P=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=$)r(c),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(c)}}function x($){if(C=!1,A($),!P)if(n(u)!==null)P=!0,Bt(O);else{var j=n(c);j!==null&&bt(x,j.startTime-$)}}function O($,j){P=!1,C&&(C=!1,T(g),g=-1),w=!0;var F=m;try{for(A(j),p=n(u);p!==null&&(!(p.expirationTime>j)||$&&!k());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,m=p.priorityLevel;var H=Q(p.expirationTime<=j);j=t.unstable_now(),typeof H=="function"?p.callback=H:p===n(u)&&r(u),A(j)}else r(u);p=n(u)}if(p!==null)var J=!0;else{var me=n(c);me!==null&&bt(x,me.startTime-j),J=!1}return J}finally{p=null,m=F,w=!1}}var V=!1,y=null,g=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function R(){if(y!==null){var $=t.unstable_now();I=$;var j=!0;try{j=y(!0,$)}finally{j?S():(V=!1,y=null)}}else V=!1}var S;if(typeof _=="function")S=function(){_(R)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Se=pe.port2;pe.port1.onmessage=R,S=function(){Se.postMessage(null)}}else S=function(){N(R,0)};function Bt($){y=$,V||(V=!0,S())}function bt($,j){g=N(function(){$(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||w||(P=!0,Bt(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var F=m;m=j;try{return $()}finally{m=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,j){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=m;m=$;try{return j()}finally{m=F}},t.unstable_scheduleCallback=function($,j,F){var Q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,$){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=F+H,$={id:h++,callback:j,priorityLevel:$,startTime:F,expirationTime:H,sortIndex:-1},F>Q?($.sortIndex=F,e(c,$),n(u)===null&&$===n(c)&&(C?(T(g),g=-1):C=!0,bt(x,F-Q))):($.sortIndex=H,e(u,$),P||w||(P=!0,Bt(O))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var j=m;return function(){var F=m;m=j;try{return $.apply(this,arguments)}finally{m=F}}}})(E0);w0.exports=E0;var NI=w0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DI=sd,Ft=NI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,vs={};function ai(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(vs[t]=e,t=0;t<e.length;t++)T0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=Object.prototype.hasOwnProperty,OI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},cg={};function VI(t){return kf.call(cg,t)?!0:kf.call(ug,t)?!1:OI.test(t)?cg[t]=!0:(ug[t]=!0,!1)}function LI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function MI(t,e,n,r){if(e===null||typeof e>"u"||LI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);rt[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);rt[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);rt[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MI(e,n,i,r)&&(n=null),r||i===null?VI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=DI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),Pf=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),Rf=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),S0=Symbol.for("react.offscreen"),fg=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,xc;function zo(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var Nc=!1;function Dc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function FI(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case Pf:return"Profiler";case cd:return"StrictMode";case Rf:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A0:return(t.displayName||"Context")+".Consumer";case I0:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function UI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jI(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=jI(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R0(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Nf(t,e){R0(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Bo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function C0(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,x0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$I=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){$I.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function D0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=N0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(zI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,Li=null,Mi=null;function gg(t){if(t=Ys(t)){if(typeof Uf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=_u(e),Uf(t.stateNode,t.type,e))}}function O0(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function V0(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,gg(t),e)for(t=0;t<e.length;t++)gg(e[t])}}function L0(t,e){return t(e)}function M0(){}var Oc=!1;function F0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return L0(t,e,n)}finally{Oc=!1,(Li!==null||Mi!==null)&&(M0(),V0())}}function _s(t,e){var n=t.stateNode;if(n===null)return null;var r=_u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var jf=!1;if(On)try{var No={};Object.defineProperty(No,"passive",{get:function(){jf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{jf=!1}function BI(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Jo=!1,Sl=null,kl=!1,$f=null,HI={onError:function(t){Jo=!0,Sl=t}};function qI(t,e,n,r,i,o,s,l,u){Jo=!1,Sl=null,BI.apply(HI,arguments)}function WI(t,e,n,r,i,o,s,l,u){if(qI.apply(this,arguments),Jo){if(Jo){var c=Sl;Jo=!1,Sl=null}else throw Error(U(198));kl||(kl=!0,$f=c)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vg(t){if(li(t)!==t)throw Error(U(188))}function KI(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vg(i),t;if(o===r)return vg(i),e;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function j0(t){return t=KI(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var z0=Ft.unstable_scheduleCallback,yg=Ft.unstable_cancelCallback,GI=Ft.unstable_shouldYield,QI=Ft.unstable_requestPaint,Fe=Ft.unstable_now,YI=Ft.unstable_getCurrentPriorityLevel,pd=Ft.unstable_ImmediatePriority,B0=Ft.unstable_UserBlockingPriority,Pl=Ft.unstable_NormalPriority,XI=Ft.unstable_LowPriority,H0=Ft.unstable_IdlePriority,mu=null,vn=null;function JI(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:tA,ZI=Math.log,eA=Math.LN2;function tA(t){return t>>>=0,t===0?32:31-(ZI(t)/eA|0)|0}var Ca=64,ba=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ho(l):(o&=s,o!==0&&(r=Ho(o)))}else s=n&~i,s!==0?r=Ho(s):o!==0&&(r=Ho(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function nA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ln(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=nA(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function iA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function W0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,gd,G0,Q0,Y0,Bf=!1,xa=[],sr=null,ar=null,lr=null,ws=new Map,Es=new Map,er=[],oA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _g(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Do(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sA(t,e,n,r,i){switch(e){case"focusin":return sr=Do(sr,t,e,n,r,i),!0;case"dragenter":return ar=Do(ar,t,e,n,r,i),!0;case"mouseover":return lr=Do(lr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ws.set(o,Do(ws.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Es.set(o,Do(Es.get(o)||null,t,e,n,r,i)),!0}return!1}function X0(t){var e=Vr(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,Y0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=Ys(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function wg(t,e,n){sl(t)&&n.delete(e)}function aA(){Bf=!1,sr!==null&&sl(sr)&&(sr=null),ar!==null&&sl(ar)&&(ar=null),lr!==null&&sl(lr)&&(lr=null),ws.forEach(wg),Es.forEach(wg)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,aA)))}function Ts(t){function e(i){return Oo(i,t)}if(0<xa.length){Oo(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Oo(sr,t),ar!==null&&Oo(ar,t),lr!==null&&Oo(lr,t),ws.forEach(e),Es.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&er.shift()}var Fi=Hn.ReactCurrentBatchConfig,Cl=!0;function lA(t,e,n,r){var i=fe,o=Fi.transition;Fi.transition=null;try{fe=1,vd(t,e,n,r)}finally{fe=i,Fi.transition=o}}function uA(t,e,n,r){var i=fe,o=Fi.transition;Fi.transition=null;try{fe=4,vd(t,e,n,r)}finally{fe=i,Fi.transition=o}}function vd(t,e,n,r){if(Cl){var i=Hf(t,e,n,r);if(i===null)qc(t,e,r,bl,n),_g(t,r);else if(sA(i,t,e,n,r))r.stopPropagation();else if(_g(t,r),e&4&&-1<oA.indexOf(t)){for(;i!==null;){var o=Ys(i);if(o!==null&&K0(o),o=Hf(t,e,n,r),o===null&&qc(t,e,r,bl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qc(t,e,r,null,n)}}var bl=null;function Hf(t,e,n,r){if(bl=null,t=dd(r),t=Vr(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function J0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YI()){case pd:return 1;case B0:return 4;case Pl:case XI:return 16;case H0:return 536870912;default:return 16}default:return 16}}var rr=null,yd=null,al=null;function Z0(){if(al)return al;var t,e=yd,n=e.length,r,i="value"in rr?rr.value:rr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return al=i.slice(t,1<r?1-r:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Eg(){return!1}function jt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Na:Eg,this.isPropagationStopped=Eg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=jt(ao),Qs=Ce({},ao,{view:0,detail:0}),cA=jt(Qs),Lc,Mc,Vo,gu=Ce({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Lc=t.screenX-Vo.screenX,Mc=t.screenY-Vo.screenY):Mc=Lc=0,Vo=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Tg=jt(gu),fA=Ce({},gu,{dataTransfer:0}),hA=jt(fA),dA=Ce({},Qs,{relatedTarget:0}),Fc=jt(dA),pA=Ce({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),mA=jt(pA),gA=Ce({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vA=jt(gA),yA=Ce({},ao,{data:0}),Ig=jt(yA),_A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=EA[t])?!!e[t]:!1}function wd(){return TA}var IA=Ce({},Qs,{key:function(t){if(t.key){var e=_A[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AA=jt(IA),SA=Ce({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=jt(SA),kA=Ce({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),PA=jt(kA),RA=Ce({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),CA=jt(RA),bA=Ce({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xA=jt(bA),NA=[9,13,27,32],Ed=On&&"CompositionEvent"in window,Zo=null;On&&"documentMode"in document&&(Zo=document.documentMode);var DA=On&&"TextEvent"in window&&!Zo,e_=On&&(!Ed||Zo&&8<Zo&&11>=Zo),Sg=" ",kg=!1;function t_(t,e){switch(t){case"keyup":return NA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function OA(t,e){switch(t){case"compositionend":return n_(e);case"keypress":return e.which!==32?null:(kg=!0,Sg);case"textInput":return t=e.data,t===Sg&&kg?null:t;default:return null}}function VA(t,e){if(Ti)return t==="compositionend"||!Ed&&t_(t,e)?(t=Z0(),al=yd=rr=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e_&&e.locale!=="ko"?null:e.data;default:return null}}var LA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LA[t.type]:e==="textarea"}function r_(t,e,n,r){O0(r),e=xl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,Is=null;function MA(t){p_(t,0)}function vu(t){var e=Si(t);if(P0(e))return t}function FA(t,e){if(t==="change")return e}var i_=!1;if(On){var Uc;if(On){var jc="oninput"in document;if(!jc){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),jc=typeof Rg.oninput=="function"}Uc=jc}else Uc=!1;i_=Uc&&(!document.documentMode||9<document.documentMode)}function Cg(){es&&(es.detachEvent("onpropertychange",o_),Is=es=null)}function o_(t){if(t.propertyName==="value"&&vu(Is)){var e=[];r_(e,Is,t,dd(t)),F0(MA,e)}}function UA(t,e,n){t==="focusin"?(Cg(),es=e,Is=n,es.attachEvent("onpropertychange",o_)):t==="focusout"&&Cg()}function jA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(Is)}function $A(t,e){if(t==="click")return vu(e)}function zA(t,e){if(t==="input"||t==="change")return vu(e)}function BA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:BA;function As(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kf.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bg(n)}}function s_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?s_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HA(t){var e=a_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&s_(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=xg(n,o);var s=xg(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qA=On&&"documentMode"in document&&11>=document.documentMode,Ii=null,qf=null,ts=null,Wf=!1;function Ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Ii==null||Ii!==Al(r)||(r=Ii,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&As(ts,r)||(ts=r,r=xl(qf,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},$c={},l_={};On&&(l_=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function yu(t){if($c[t])return $c[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l_)return $c[t]=e[n];return t}var u_=yu("animationend"),c_=yu("animationiteration"),f_=yu("animationstart"),h_=yu("transitionend"),d_=new Map,Dg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){d_.set(t,e),ai(e,[t])}for(var zc=0;zc<Dg.length;zc++){var Bc=Dg[zc],WA=Bc.toLowerCase(),KA=Bc[0].toUpperCase()+Bc.slice(1);Sr(WA,"on"+KA)}Sr(u_,"onAnimationEnd");Sr(c_,"onAnimationIteration");Sr(f_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(h_,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GA=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WI(r,e,void 0,t),t.currentTarget=null}function p_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Og(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Og(i,l,c),o=u}}}if(kl)throw t=$f,kl=!1,$f=null,t}function _e(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var r=t+"__bubble";n.has(r)||(m_(e,t,2,!1),n.add(r))}function Hc(t,e,n){var r=0;e&&(r|=4),m_(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Ss(t){if(!t[Oa]){t[Oa]=!0,T0.forEach(function(n){n!=="selectionchange"&&(GA.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Hc("selectionchange",!1,e))}}function m_(t,e,n,r){switch(J0(e)){case 1:var i=lA;break;case 4:i=uA;break;default:i=vd}n=i.bind(null,e,n,t),i=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qc(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Vr(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}F0(function(){var c=o,h=dd(n),p=[];e:{var m=d_.get(t);if(m!==void 0){var w=_d,P=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":w=AA;break;case"focusin":P="focus",w=Fc;break;case"focusout":P="blur",w=Fc;break;case"beforeblur":case"afterblur":w=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=hA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=PA;break;case u_:case c_:case f_:w=mA;break;case h_:w=CA;break;case"scroll":w=cA;break;case"wheel":w=xA;break;case"copy":case"cut":case"paste":w=vA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ag}var C=(e&4)!==0,N=!C&&t==="scroll",T=C?m!==null?m+"Capture":null:m;C=[];for(var _=c,A;_!==null;){A=_;var x=A.stateNode;if(A.tag===5&&x!==null&&(A=x,T!==null&&(x=_s(_,T),x!=null&&C.push(ks(_,x,A)))),N)break;_=_.return}0<C.length&&(m=new w(m,P,null,n,h),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Ff&&(P=n.relatedTarget||n.fromElement)&&(Vr(P)||P[Vn]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(P=n.relatedTarget||n.toElement,w=c,P=P?Vr(P):null,P!==null&&(N=li(P),P!==N||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=c),w!==P)){if(C=Tg,x="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=Ag,x="onPointerLeave",T="onPointerEnter",_="pointer"),N=w==null?m:Si(w),A=P==null?m:Si(P),m=new C(x,_+"leave",w,n,h),m.target=N,m.relatedTarget=A,x=null,Vr(h)===c&&(C=new C(T,_+"enter",P,n,h),C.target=A,C.relatedTarget=N,x=C),N=x,w&&P)t:{for(C=w,T=P,_=0,A=C;A;A=gi(A))_++;for(A=0,x=T;x;x=gi(x))A++;for(;0<_-A;)C=gi(C),_--;for(;0<A-_;)T=gi(T),A--;for(;_--;){if(C===T||T!==null&&C===T.alternate)break t;C=gi(C),T=gi(T)}C=null}else C=null;w!==null&&Vg(p,m,w,C,!1),P!==null&&N!==null&&Vg(p,N,P,C,!0)}}e:{if(m=c?Si(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var O=FA;else if(Pg(m))if(i_)O=zA;else{O=jA;var V=UA}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=$A);if(O&&(O=O(t,c))){r_(p,O,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Df(m,"number",m.value)}switch(V=c?Si(c):window,t){case"focusin":(Pg(V)||V.contentEditable==="true")&&(Ii=V,qf=c,ts=null);break;case"focusout":ts=qf=Ii=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Ng(p,n,h);break;case"selectionchange":if(qA)break;case"keydown":case"keyup":Ng(p,n,h)}var y;if(Ed)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ti?t_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(e_&&n.locale!=="ko"&&(Ti||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ti&&(y=Z0()):(rr=h,yd="value"in rr?rr.value:rr.textContent,Ti=!0)),V=xl(c,g),0<V.length&&(g=new Ig(g,t,null,n,h),p.push({event:g,listeners:V}),y?g.data=y:(y=n_(n),y!==null&&(g.data=y)))),(y=DA?OA(t,n):VA(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(h=new Ig("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=y))}p_(p,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_s(t,n),o!=null&&r.unshift(ks(t,o,i)),o=_s(t,e),o!=null&&r.push(ks(t,o,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vg(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=_s(n,o),u!=null&&s.unshift(ks(n,u,l))):i||(u=_s(n,o),u!=null&&s.push(ks(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var QA=/\r\n?/g,YA=/\u0000|\uFFFD/g;function Lg(t){return(typeof t=="string"?t:""+t).replace(QA,`
`).replace(YA,"")}function Va(t,e,n){if(e=Lg(e),Lg(t)!==e&&n)throw Error(U(425))}function Nl(){}var Kf=null,Gf=null;function Qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,XA=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,JA=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(ZA)}:Yf;function ZA(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ts(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ts(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),pn="__reactFiber$"+lo,Ps="__reactProps$"+lo,Vn="__reactContainer$"+lo,Xf="__reactEvents$"+lo,eS="__reactListeners$"+lo,tS="__reactHandles$"+lo;function Vr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[pn])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[pn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function _u(t){return t[Ps]||null}var Jf=[],ki=-1;function kr(t){return{current:t}}function Ee(t){0>ki||(t.current=Jf[ki],Jf[ki]=null,ki--)}function ge(t,e){ki++,Jf[ki]=t.current,t.current=e}var yr={},dt=kr(yr),kt=kr(!1),Kr=yr;function Hi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Dl(){Ee(kt),Ee(dt)}function Ug(t,e,n){if(dt.current!==yr)throw Error(U(168));ge(dt,e),ge(kt,n)}function g_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,UI(t)||"Unknown",i));return Ce({},n,r)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=dt.current,ge(dt,t),ge(kt,kt.current),!0}function jg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=g_(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,Ee(kt),Ee(dt),ge(dt,t)):Ee(kt),ge(kt,n)}var Cn=null,wu=!1,Kc=!1;function v_(t){Cn===null?Cn=[t]:Cn.push(t)}function nS(t){wu=!0,v_(t)}function Pr(){if(!Kc&&Cn!==null){Kc=!0;var t=0,e=fe;try{var n=Cn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,wu=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),z0(pd,Pr),i}finally{fe=e,Kc=!1}}return null}var Pi=[],Ri=0,Vl=null,Ll=0,Ht=[],qt=0,Gr=null,bn=1,xn="";function Nr(t,e){Pi[Ri++]=Ll,Pi[Ri++]=Vl,Vl=t,Ll=e}function y_(t,e,n){Ht[qt++]=bn,Ht[qt++]=xn,Ht[qt++]=Gr,Gr=t;var r=bn;t=xn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var o=32-ln(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,bn=1<<32-ln(e)+i|n<<i|r,xn=o+t}else bn=1<<o|n<<i|r,xn=t}function Id(t){t.return!==null&&(Nr(t,1),y_(t,1,0))}function Ad(t){for(;t===Vl;)Vl=Pi[--Ri],Pi[Ri]=null,Ll=Pi[--Ri],Pi[Ri]=null;for(;t===Gr;)Gr=Ht[--qt],Ht[qt]=null,xn=Ht[--qt],Ht[qt]=null,bn=Ht[--qt],Ht[qt]=null}var Lt=null,Dt=null,Ie=!1,on=null;function __(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:bn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Dt=null,!0):!1;default:return!1}}function Zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(Ie){var e=Dt;if(e){var n=e;if(!$g(t,e)){if(Zf(t))throw Error(U(418));e=ur(n.nextSibling);var r=Lt;e&&$g(t,e)?__(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Lt=t)}}else{if(Zf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ie=!1,Lt=t}}}function zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function La(t){if(t!==Lt)return!1;if(!Ie)return zg(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qf(t.type,t.memoizedProps)),e&&(e=Dt)){if(Zf(t))throw w_(),Error(U(418));for(;e;)__(t,e),e=ur(e.nextSibling)}if(zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Lt?ur(t.stateNode.nextSibling):null;return!0}function w_(){for(var t=Dt;t;)t=ur(t.nextSibling)}function qi(){Dt=Lt=null,Ie=!1}function Sd(t){on===null?on=[t]:on.push(t)}var rS=Hn.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bg(t){var e=t._init;return e(t._payload)}function E_(t){function e(T,_){if(t){var A=T.deletions;A===null?(T.deletions=[_],T.flags|=16):A.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=dr(T,_),T.index=0,T.sibling=null,T}function o(T,_,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<_?(T.flags|=2,_):A):(T.flags|=2,_)):(T.flags|=1048576,_)}function s(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,A,x){return _===null||_.tag!==6?(_=ef(A,T.mode,x),_.return=T,_):(_=i(_,A),_.return=T,_)}function u(T,_,A,x){var O=A.type;return O===Ei?h(T,_,A.props.children,x,A.key):_!==null&&(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jn&&Bg(O)===_.type)?(x=i(_,A.props),x.ref=Lo(T,_,A),x.return=T,x):(x=ml(A.type,A.key,A.props,null,T.mode,x),x.ref=Lo(T,_,A),x.return=T,x)}function c(T,_,A,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=tf(A,T.mode,x),_.return=T,_):(_=i(_,A.children||[]),_.return=T,_)}function h(T,_,A,x,O){return _===null||_.tag!==7?(_=Br(A,T.mode,x,O),_.return=T,_):(_=i(_,A),_.return=T,_)}function p(T,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ef(""+_,T.mode,A),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:return A=ml(_.type,_.key,_.props,null,T.mode,A),A.ref=Lo(T,null,_),A.return=T,A;case wi:return _=tf(_,T.mode,A),_.return=T,_;case Jn:var x=_._init;return p(T,x(_._payload),A)}if(Bo(_)||xo(_))return _=Br(_,T.mode,A,null),_.return=T,_;Ma(T,_)}return null}function m(T,_,A,x){var O=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return O!==null?null:l(T,_,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:return A.key===O?u(T,_,A,x):null;case wi:return A.key===O?c(T,_,A,x):null;case Jn:return O=A._init,m(T,_,O(A._payload),x)}if(Bo(A)||xo(A))return O!==null?null:h(T,_,A,x,null);Ma(T,A)}return null}function w(T,_,A,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return T=T.get(A)||null,l(_,T,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return T=T.get(x.key===null?A:x.key)||null,u(_,T,x,O);case wi:return T=T.get(x.key===null?A:x.key)||null,c(_,T,x,O);case Jn:var V=x._init;return w(T,_,A,V(x._payload),O)}if(Bo(x)||xo(x))return T=T.get(A)||null,h(_,T,x,O,null);Ma(_,x)}return null}function P(T,_,A,x){for(var O=null,V=null,y=_,g=_=0,E=null;y!==null&&g<A.length;g++){y.index>g?(E=y,y=null):E=y.sibling;var I=m(T,y,A[g],x);if(I===null){y===null&&(y=E);break}t&&y&&I.alternate===null&&e(T,y),_=o(I,_,g),V===null?O=I:V.sibling=I,V=I,y=E}if(g===A.length)return n(T,y),Ie&&Nr(T,g),O;if(y===null){for(;g<A.length;g++)y=p(T,A[g],x),y!==null&&(_=o(y,_,g),V===null?O=y:V.sibling=y,V=y);return Ie&&Nr(T,g),O}for(y=r(T,y);g<A.length;g++)E=w(y,T,g,A[g],x),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?g:E.key),_=o(E,_,g),V===null?O=E:V.sibling=E,V=E);return t&&y.forEach(function(k){return e(T,k)}),Ie&&Nr(T,g),O}function C(T,_,A,x){var O=xo(A);if(typeof O!="function")throw Error(U(150));if(A=O.call(A),A==null)throw Error(U(151));for(var V=O=null,y=_,g=_=0,E=null,I=A.next();y!==null&&!I.done;g++,I=A.next()){y.index>g?(E=y,y=null):E=y.sibling;var k=m(T,y,I.value,x);if(k===null){y===null&&(y=E);break}t&&y&&k.alternate===null&&e(T,y),_=o(k,_,g),V===null?O=k:V.sibling=k,V=k,y=E}if(I.done)return n(T,y),Ie&&Nr(T,g),O;if(y===null){for(;!I.done;g++,I=A.next())I=p(T,I.value,x),I!==null&&(_=o(I,_,g),V===null?O=I:V.sibling=I,V=I);return Ie&&Nr(T,g),O}for(y=r(T,y);!I.done;g++,I=A.next())I=w(y,T,g,I.value,x),I!==null&&(t&&I.alternate!==null&&y.delete(I.key===null?g:I.key),_=o(I,_,g),V===null?O=I:V.sibling=I,V=I);return t&&y.forEach(function(R){return e(T,R)}),Ie&&Nr(T,g),O}function N(T,_,A,x){if(typeof A=="object"&&A!==null&&A.type===Ei&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:e:{for(var O=A.key,V=_;V!==null;){if(V.key===O){if(O=A.type,O===Ei){if(V.tag===7){n(T,V.sibling),_=i(V,A.props.children),_.return=T,T=_;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Jn&&Bg(O)===V.type){n(T,V.sibling),_=i(V,A.props),_.ref=Lo(T,V,A),_.return=T,T=_;break e}n(T,V);break}else e(T,V);V=V.sibling}A.type===Ei?(_=Br(A.props.children,T.mode,x,A.key),_.return=T,T=_):(x=ml(A.type,A.key,A.props,null,T.mode,x),x.ref=Lo(T,_,A),x.return=T,T=x)}return s(T);case wi:e:{for(V=A.key;_!==null;){if(_.key===V)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(T,_.sibling),_=i(_,A.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=tf(A,T.mode,x),_.return=T,T=_}return s(T);case Jn:return V=A._init,N(T,_,V(A._payload),x)}if(Bo(A))return P(T,_,A,x);if(xo(A))return C(T,_,A,x);Ma(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,A),_.return=T,T=_):(n(T,_),_=ef(A,T.mode,x),_.return=T,T=_),s(T)):n(T,_)}return N}var Wi=E_(!0),T_=E_(!1),Ml=kr(null),Fl=null,Ci=null,kd=null;function Pd(){kd=Ci=Fl=null}function Rd(t){var e=Ml.current;Ee(Ml),t._currentValue=e}function th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){Fl=t,kd=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(Fl===null)throw Error(U(308));Ci=t,Fl.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Lr=null;function Cd(t){Lr===null?Lr=[t]:Lr.push(t)}function I_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;Zn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,h=c=u=null,l=o;do{var m=l.lane,w=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,C=l;switch(m=e,w=n,C.tag){case 1:if(P=C.payload,typeof P=="function"){p=P.call(w,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=C.payload,m=typeof P=="function"?P.call(w,p,m):P,m==null)break e;p=Ce({},p,m);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,u=p):h=h.next=w,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Yr|=s,t.lanes=s,t.memoizedState=p}}function qg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Xs={},yn=kr(Xs),Rs=kr(Xs),Cs=kr(Xs);function Mr(t){if(t===Xs)throw Error(U(174));return t}function xd(t,e){switch(ge(Cs,e),ge(Rs,t),ge(yn,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vf(e,t)}Ee(yn),ge(yn,e)}function Ki(){Ee(yn),Ee(Rs),Ee(Cs)}function S_(t){Mr(Cs.current);var e=Mr(yn.current),n=Vf(e,t.type);e!==n&&(ge(Rs,t),ge(yn,n))}function Nd(t){Rs.current===t&&(Ee(yn),Ee(Rs))}var Pe=kr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function Dd(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var cl=Hn.ReactCurrentDispatcher,Qc=Hn.ReactCurrentBatchConfig,Qr=0,Re=null,ze=null,Ge=null,$l=!1,ns=!1,bs=0,iS=0;function at(){throw Error(U(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,o){if(Qr=o,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?lS:uS,t=n(r,i),ns){o=0;do{if(ns=!1,bs=0,25<=o)throw Error(U(301));o+=1,Ge=ze=null,e.updateQueue=null,cl.current=cS,t=n(r,i)}while(ns)}if(cl.current=zl,e=ze!==null&&ze.next!==null,Qr=0,Ge=ze=Re=null,$l=!1,e)throw Error(U(300));return t}function Ld(){var t=bs!==0;return bs=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Re.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Jt(){if(ze===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Ge===null?Re.memoizedState:Ge.next;if(e!==null)Ge=e,ze=t;else{if(t===null)throw Error(U(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Re.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function xs(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if((Qr&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,Re.lanes|=h,Yr|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,cn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Re.lanes|=o,Yr|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);cn(o,e.memoizedState)||(St=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function k_(){}function P_(t,e){var n=Re,r=Jt(),i=e(),o=!cn(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,Md(b_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ns(9,C_.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(U(349));Qr&30||R_(n,e,i)}return i}function R_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,r){e.value=n,e.getSnapshot=r,x_(e)&&N_(t)}function b_(t,e,n){return n(function(){x_(e)&&N_(t)})}function x_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function N_(t){var e=Ln(t,1);e!==null&&un(e,t,1,-1)}function Wg(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},e.queue=t,t=t.dispatch=aS.bind(null,Re,t),[e.memoizedState,t]}function Ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function D_(){return Jt().memoizedState}function fl(t,e,n,r){var i=hn();Re.flags|=t,i.memoizedState=Ns(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=Jt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var s=ze.memoizedState;if(o=s.destroy,r!==null&&Od(r,s.deps)){i.memoizedState=Ns(e,n,o,r);return}}Re.flags|=t,i.memoizedState=Ns(1|e,n,o,r)}function Kg(t,e){return fl(8390656,8,t,e)}function Md(t,e){return Eu(2048,8,t,e)}function O_(t,e){return Eu(4,2,t,e)}function V_(t,e){return Eu(4,4,t,e)}function L_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M_(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,L_.bind(null,e,t),n)}function Fd(){}function F_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function U_(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j_(t,e,n){return Qr&21?(cn(n,e)||(n=q0(),Re.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function oS(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{fe=n,Qc.transition=r}}function $_(){return Jt().memoizedState}function sS(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z_(t))B_(e,n);else if(n=I_(t,e,n,r),n!==null){var i=_t();un(n,t,r,i),H_(n,e,r)}}function aS(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z_(t))B_(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,s)){var u=e.interleaved;u===null?(i.next=i,Cd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=I_(t,e,i,r),n!==null&&(i=_t(),un(n,t,r,i),H_(n,e,r))}}function z_(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function B_(t,e){ns=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}var zl={readContext:Xt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},lS={readContext:Xt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,L_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sS.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Wg,useDebugValue:Fd,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Wg(!1),e=t[0];return t=oS.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=hn();if(Ie){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Qe===null)throw Error(U(349));Qr&30||R_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Kg(b_.bind(null,r,o,t),[t]),r.flags|=2048,Ns(9,C_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=hn(),e=Qe.identifierPrefix;if(Ie){var n=xn,r=bn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:Xt,useCallback:F_,useContext:Xt,useEffect:Md,useImperativeHandle:M_,useInsertionEffect:O_,useLayoutEffect:V_,useMemo:U_,useReducer:Yc,useRef:D_,useState:function(){return Yc(xs)},useDebugValue:Fd,useDeferredValue:function(t){var e=Jt();return j_(e,ze.memoizedState,t)},useTransition:function(){var t=Yc(xs)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:k_,useSyncExternalStore:P_,useId:$_,unstable_isNewReconciler:!1},cS={readContext:Xt,useCallback:F_,useContext:Xt,useEffect:Md,useImperativeHandle:M_,useInsertionEffect:O_,useLayoutEffect:V_,useMemo:U_,useReducer:Xc,useRef:D_,useState:function(){return Xc(xs)},useDebugValue:Fd,useDeferredValue:function(t){var e=Jt();return ze===null?e.memoizedState=t:j_(e,ze.memoizedState,t)},useTransition:function(){var t=Xc(xs)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:k_,useSyncExternalStore:P_,useId:$_,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=hr(t),o=Nn(r,i);o.payload=e,n!=null&&(o.callback=n),e=cr(t,o,i),e!==null&&(un(e,t,i,r),ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=hr(t),o=Nn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=cr(t,o,i),e!==null&&(un(e,t,i,r),ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=hr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(un(e,t,r,n),ul(e,t,r))}};function Gg(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!As(n,r)||!As(i,o):!0}function q_(t,e,n){var r=!1,i=yr,o=e.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=Pt(e)?Kr:dt.current,r=e.contextTypes,o=(r=r!=null)?Hi(t,i):yr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bd(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=Pt(e)?Kr:dt.current,i.context=Hi(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e){try{var n="",r=e;do n+=FI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function W_(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hl||(Hl=!0,ph=r),ih(t,e)},n}function K_(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ih(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SS.bind(null,t,e,n),e.then(t,t))}function Xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var hS=Hn.ReactCurrentOwner,St=!1;function yt(t,e,n,r){e.child=t===null?T_(e,null,n,r):Wi(e,t.child,n,r)}function Zg(t,e,n,r,i){n=n.render;var o=e.ref;return Ui(e,i),r=Vd(t,e,n,r,o,i),n=Ld(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&n&&Id(e),e.flags|=1,yt(t,e,r,i),e.child)}function ev(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Wd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,G_(t,e,o,r,i)):(t=ml(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:As,n(s,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=dr(o,r),t.ref=e.ref,t.return=e,e.child=t}function G_(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(As(o,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return oh(t,e,n,r,i)}function Q_(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(xi,Nt),Nt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(xi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(xi,Nt),Nt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ge(xi,Nt),Nt|=r;return yt(t,e,i,n),e.child}function Y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,r,i){var o=Pt(n)?Kr:dt.current;return o=Hi(e,o),Ui(e,i),n=Vd(t,e,n,r,o,i),r=Ld(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&r&&Id(e),e.flags|=1,yt(t,e,n,i),e.child)}function tv(t,e,n,r,i){if(Pt(n)){var o=!0;Ol(e)}else o=!1;if(Ui(e,i),e.stateNode===null)hl(t,e),q_(e,n,r),rh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=Pt(n)?Kr:dt.current,c=Hi(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Qg(e,s,r,c),Zn=!1;var m=e.memoizedState;s.state=m,Ul(e,r,s,i),u=e.memoizedState,l!==r||m!==u||kt.current||Zn?(typeof h=="function"&&(nh(e,n,h,r),u=e.memoizedState),(l=Zn||Gg(e,n,l,r,m,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,A_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:nn(e.type,l),s.props=c,p=e.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Pt(n)?Kr:dt.current,u=Hi(e,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Qg(e,s,r,u),Zn=!1,m=e.memoizedState,s.state=m,Ul(e,r,s,i);var P=e.memoizedState;l!==p||m!==P||kt.current||Zn?(typeof w=="function"&&(nh(e,n,w,r),P=e.memoizedState),(c=Zn||Gg(e,n,c,r,m,P,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,P,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,P,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),s.props=r,s.state=P,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,o,i)}function sh(t,e,n,r,i,o){Y_(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&jg(e,n,!1),Mn(t,e,o);r=e.stateNode,hS.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Wi(e,t.child,null,o),e.child=Wi(e,null,l,o)):yt(t,e,l,o),e.memoizedState=r.state,i&&jg(e,n,!0),e.child}function X_(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),xd(t,e.containerInfo)}function nv(t,e,n,r,i){return qi(),Sd(i),e.flags|=256,yt(t,e,n,r),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var r=e.pendingProps,i=Pe.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Pe,i&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Su(s,r,0,null),t=Br(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=lh(n),e.memoizedState=ah,t):Ud(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dS(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=dr(l,o):(o=Br(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?lh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ah,r}return o=t.child,t=o.sibling,r=dr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ud(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&Sd(r),Wi(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dS(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(U(422))),Fa(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Su({mode:"visible",children:r.children},i,0,null),o=Br(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Wi(e,t.child,null,s),e.child.memoizedState=lh(s),e.memoizedState=ah,o);if(!(e.mode&1))return Fa(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=Jc(o,r,void 0),Fa(t,e,s,r)}if(l=(s&t.childLanes)!==0,St||l){if(r=Qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ln(t,i),un(r,t,i,-1))}return qd(),r=Jc(Error(U(421))),Fa(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Dt=ur(i.nextSibling),Lt=e,Ie=!0,on=null,t!==null&&(Ht[qt++]=bn,Ht[qt++]=xn,Ht[qt++]=Gr,bn=t.id,xn=t.overflow,Gr=e),e=Ud(e,r.children),e.flags|=4096,e)}function rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),th(t.return,e,n)}function Zc(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Z_(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(yt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rv(t,n,e);else if(t.tag===19)rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zc(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zc(e,!0,n,null,o);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pS(t,e,n){switch(e.tag){case 3:X_(e),qi();break;case 5:S_(e);break;case 1:Pt(e.type)&&Ol(e);break;case 4:xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(ge(Pe,Pe.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);ge(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Z_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Q_(t,e,n)}return Mn(t,e,n)}var e1,uh,t1,n1;e1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};t1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(yn.current);var o=null;switch(n){case"input":i=xf(t,i),r=xf(t,r),o=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),o=[];break;case"textarea":i=Of(t,i),r=Of(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nl)}Lf(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};n1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mS(t,e,n){var r=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Pt(e.type)&&Dl(),lt(e),null;case 3:return r=e.stateNode,Ki(),Ee(kt),Ee(dt),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(vh(on),on=null))),uh(t,e),lt(e),null;case 5:Nd(e);var i=Mr(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)t1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return lt(e),null}if(t=Mr(yn.current),La(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[pn]=e,r[Ps]=o,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)_e(qo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":hg(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":pg(r,o),_e("invalid",r)}Lf(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Va(r.textContent,l,t),i=["children",""+l]):vs.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":Pa(r),dg(r,o,!0);break;case"textarea":Pa(r),mg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[pn]=e,t[Ps]=r,e1(t,e,!1,!1),e.stateNode=t;e:{switch(s=Mf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)_e(qo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":hg(t,r),i=xf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),_e("invalid",t);break;case"textarea":pg(t,r),i=Of(t,r),_e("invalid",t);break;default:i=r}Lf(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?D0(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&x0(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ys(t,u):typeof u=="number"&&ys(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vs.hasOwnProperty(o)?u!=null&&o==="onScroll"&&_e("scroll",t):u!=null&&ud(t,o,u,s))}switch(n){case"input":Pa(t),dg(t,r,!1);break;case"textarea":Pa(t),mg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Vi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)n1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Mr(Cs.current),Mr(yn.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(o=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return lt(e),null;case 13:if(Ee(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Dt!==null&&e.mode&1&&!(e.flags&128))w_(),qi(),e.flags|=98560,o=!1;else if(o=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(U(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[pn]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),o=!1}else on!==null&&(vh(on),on=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?He===0&&(He=3):qd())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ki(),uh(t,e),t===null&&Ss(e.stateNode.containerInfo),lt(e),null;case 10:return Rd(e.type._context),lt(e),null;case 17:return Pt(e.type)&&Dl(),lt(e),null;case 19:if(Ee(Pe),o=e.memoizedState,o===null)return lt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Mo(o,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jl(t),s!==null){for(e.flags|=128,Mo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Pe,Pe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Fe()>Qi&&(e.flags|=128,r=!0,Mo(o,!1),e.lanes=4194304)}else{if(!r)if(t=jl(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return lt(e),null}else 2*Fe()-o.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Mo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,ge(Pe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function gS(t,e){switch(Ad(e),e.tag){case 1:return Pt(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),Ee(kt),Ee(dt),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(Ee(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Pe),null;case 4:return Ki(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var Ua=!1,ft=!1,vS=typeof WeakSet=="function"?WeakSet:Set,q=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){De(t,e,r)}}var iv=!1;function yS(t,e){if(Kf=Cl,t=a_(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=s),m===o&&++h===r&&(u=s),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},Cl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var C=P.memoizedProps,N=P.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:nn(e.type,C),N);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(x){De(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=iv,iv=!1,P}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ch(e,n,o)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r1(t){var e=t.alternate;e!==null&&(t.alternate=null,r1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Ps],delete e[Xf],delete e[eS],delete e[tS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i1(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(r!==4&&(t=t.child,t!==null))for(hh(t,e,n),t=t.sibling;t!==null;)hh(t,e,n),t=t.sibling}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var Je=null,rn=!1;function Yn(t,e,n){for(n=n.child;n!==null;)o1(t,e,n),n=n.sibling}function o1(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:ft||bi(n,e);case 6:var r=Je,i=rn;Je=null,Yn(t,e,n),Je=r,rn=i,Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Ts(t)):Wc(Je,n.stateNode));break;case 4:r=Je,i=rn,Je=n.stateNode.containerInfo,rn=!0,Yn(t,e,n),Je=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ch(n,e,s),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!ft&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,Yn(t,e,n),ft=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vS),e.forEach(function(r){var i=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,rn=!1;break e;case 3:Je=l.stateNode.containerInfo,rn=!0;break e;case 4:Je=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Je===null)throw Error(U(160));o1(o,s,i),Je=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s1(e,t),e=e.sibling}function s1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),fn(t),r&4){try{rs(3,t,t.return),Iu(3,t)}catch(C){De(t,t.return,C)}try{rs(5,t,t.return)}catch(C){De(t,t.return,C)}}break;case 1:tn(e,t),fn(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(tn(e,t),fn(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(C){De(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&R0(i,o),Mf(l,s);var c=Mf(l,o);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?D0(i,p):h==="dangerouslySetInnerHTML"?x0(i,p):h==="children"?ys(i,p):ud(i,h,p,c)}switch(l){case"input":Nf(i,o);break;case"textarea":C0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Vi(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Vi(i,!!o.multiple,o.defaultValue,!0):Vi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ps]=o}catch(C){De(t,t.return,C)}}break;case 6:if(tn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){De(t,t.return,C)}}break;case 3:if(tn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ts(e.containerInfo)}catch(C){De(t,t.return,C)}break;case 4:tn(e,t),fn(t);break;case 13:tn(e,t),fn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zd=Fe())),r&4&&sv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||h,tn(e,t),ft=c):tn(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(p=q=h;q!==null;){switch(m=q,w=m.child,m.tag){case 0:case 11:case 14:case 15:rs(4,m,m.return);break;case 1:bi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(C){De(r,n,C)}}break;case 5:bi(m,m.return);break;case 22:if(m.memoizedState!==null){lv(p);continue}}w!==null?(w.return=m,q=w):lv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=N0("display",s))}catch(C){De(t,t.return,C)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){De(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tn(e,t),fn(t),r&4&&sv(t);break;case 21:break;default:tn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i1(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var o=ov(t);dh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ov(t);hh(t,l,s);break;default:throw Error(U(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _S(t,e,n){q=t,a1(t)}function a1(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ua;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=Ua;var c=ft;if(Ua=s,(ft=u)&&!c)for(q=i;q!==null;)s=q,u=s.child,s.tag===22&&s.memoizedState!==null?uv(i):u!==null?(u.return=s,q=u):uv(i);for(;o!==null;)q=o,a1(o),o=o.sibling;q=i,Ua=l,ft=c}av(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):av(t)}}function av(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&qg(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qg(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ts(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ft||e.flags&512&&fh(e)}catch(m){De(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function lv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function uv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var o=e.return;try{fh(e)}catch(u){De(e,o,u)}break;case 5:var s=e.return;try{fh(e)}catch(u){De(e,s,u)}}}catch(u){De(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var wS=Math.ceil,Bl=Hn.ReactCurrentDispatcher,jd=Hn.ReactCurrentOwner,Gt=Hn.ReactCurrentBatchConfig,le=0,Qe=null,$e=null,tt=0,Nt=0,xi=kr(0),He=0,Ds=null,Yr=0,Au=0,$d=0,is=null,At=null,zd=0,Qi=1/0,Rn=null,Hl=!1,ph=null,fr=null,ja=!1,ir=null,ql=0,os=0,mh=null,dl=-1,pl=0;function _t(){return le&6?Fe():dl!==-1?dl:dl=Fe()}function hr(t){return t.mode&1?le&2&&tt!==0?tt&-tt:rS.transition!==null?(pl===0&&(pl=q0()),pl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:J0(t.type)),t):1}function un(t,e,n,r){if(50<os)throw os=0,mh=null,Error(U(185));Gs(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(Au|=n),He===4&&tr(t,tt)),Rt(t,r),n===1&&le===0&&!(e.mode&1)&&(Qi=Fe()+500,wu&&Pr()))}function Rt(t,e){var n=t.callbackNode;rA(t,e);var r=Rl(t,t===Qe?tt:0);if(r===0)n!==null&&yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yg(n),e===1)t.tag===0?nS(cv.bind(null,t)):v_(cv.bind(null,t)),JA(function(){!(le&6)&&Pr()}),n=null;else{switch(W0(r)){case 1:n=pd;break;case 4:n=B0;break;case 16:n=Pl;break;case 536870912:n=H0;break;default:n=Pl}n=m1(n,l1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l1(t,e){if(dl=-1,pl=0,le&6)throw Error(U(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=Rl(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wl(t,r);else{e=r;var i=le;le|=2;var o=c1();(Qe!==t||tt!==e)&&(Rn=null,Qi=Fe()+500,zr(t,e));do try{IS();break}catch(l){u1(t,l)}while(!0);Pd(),Bl.current=o,le=i,$e!==null?e=0:(Qe=null,tt=0,e=He)}if(e!==0){if(e===2&&(i=zf(t),i!==0&&(r=i,e=gh(t,i))),e===1)throw n=Ds,zr(t,0),tr(t,r),Rt(t,Fe()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ES(i)&&(e=Wl(t,r),e===2&&(o=zf(t),o!==0&&(r=o,e=gh(t,o))),e===1))throw n=Ds,zr(t,0),tr(t,r),Rt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Dr(t,At,Rn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=zd+500-Fe(),10<e)){if(Rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yf(Dr.bind(null,t,At,Rn),e);break}Dr(t,At,Rn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-ln(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wS(r/1960))-r,10<r){t.timeoutHandle=Yf(Dr.bind(null,t,At,Rn),r);break}Dr(t,At,Rn);break;case 5:Dr(t,At,Rn);break;default:throw Error(U(329))}}}return Rt(t,Fe()),t.callbackNode===n?l1.bind(null,t):null}function gh(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=At,At=n,e!==null&&vh(e)),t}function vh(t){At===null?At=t:At.push.apply(At,t)}function ES(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!cn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~$d,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function cv(t){if(le&6)throw Error(U(327));ji();var e=Rl(t,0);if(!(e&1))return Rt(t,Fe()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var r=zf(t);r!==0&&(e=r,n=gh(t,r))}if(n===1)throw n=Ds,zr(t,0),tr(t,e),Rt(t,Fe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,At,Rn),Rt(t,Fe()),null}function Bd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Qi=Fe()+500,wu&&Pr())}}function Xr(t){ir!==null&&ir.tag===0&&!(le&6)&&ji();var e=le;le|=1;var n=Gt.transition,r=fe;try{if(Gt.transition=null,fe=1,t)return t()}finally{fe=r,Gt.transition=n,le=e,!(le&6)&&Pr()}}function Hd(){Nt=xi.current,Ee(xi)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XA(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:Ki(),Ee(kt),Ee(dt),Dd();break;case 5:Nd(r);break;case 4:Ki();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Rd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Qe=t,$e=t=dr(t.current,null),tt=Nt=e,He=0,Ds=null,$d=Au=Yr=0,At=is=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Lr=null}return t}function u1(t,e){do{var n=$e;try{if(Pd(),cl.current=zl,$l){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$l=!1}if(Qr=0,Ge=ze=Re=null,ns=!1,bs=0,jd.current=null,n===null||n.return===null){He=1,Ds=e,$e=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Xg(s);if(w!==null){w.flags&=-257,Jg(w,s,l,o,e),w.mode&1&&Yg(o,c,e),e=w,u=c;var P=e.updateQueue;if(P===null){var C=new Set;C.add(u),e.updateQueue=C}else P.add(u);break e}else{if(!(e&1)){Yg(o,c,e),qd();break e}u=Error(U(426))}}else if(Ie&&l.mode&1){var N=Xg(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Jg(N,s,l,o,e),Sd(Gi(u,l));break e}}o=u=Gi(u,l),He!==4&&(He=2),is===null?is=[o]:is.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var T=W_(o,u,e);Hg(o,T);break e;case 1:l=u;var _=o.type,A=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(fr===null||!fr.has(A)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=K_(o,l,e);Hg(o,x);break e}}o=o.return}while(o!==null)}h1(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function c1(){var t=Bl.current;return Bl.current=zl,t===null?zl:t}function qd(){(He===0||He===3||He===2)&&(He=4),Qe===null||!(Yr&268435455)&&!(Au&268435455)||tr(Qe,tt)}function Wl(t,e){var n=le;le|=2;var r=c1();(Qe!==t||tt!==e)&&(Rn=null,zr(t,e));do try{TS();break}catch(i){u1(t,i)}while(!0);if(Pd(),le=n,Bl.current=r,$e!==null)throw Error(U(261));return Qe=null,tt=0,He}function TS(){for(;$e!==null;)f1($e)}function IS(){for(;$e!==null&&!GI();)f1($e)}function f1(t){var e=p1(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?h1(t):$e=e,jd.current=null}function h1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gS(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}else if(n=mS(n,e,Nt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Dr(t,e,n){var r=fe,i=Gt.transition;try{Gt.transition=null,fe=1,AS(t,e,n,r)}finally{Gt.transition=i,fe=r}return null}function AS(t,e,n,r){do ji();while(ir!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(iA(t,o),t===Qe&&($e=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,m1(Pl,function(){return ji(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var s=fe;fe=1;var l=le;le|=4,jd.current=null,yS(t,n),s1(n,t),HA(Gf),Cl=!!Kf,Gf=Kf=null,t.current=n,_S(n),QI(),le=l,fe=s,Gt.transition=o}else t.current=n;if(ja&&(ja=!1,ir=t,ql=i),o=t.pendingLanes,o===0&&(fr=null),JI(n.stateNode),Rt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,t=ph,ph=null,t;return ql&1&&t.tag!==0&&ji(),o=t.pendingLanes,o&1?t===mh?os++:(os=0,mh=t):os=0,Pr(),null}function ji(){if(ir!==null){var t=W0(ql),e=Gt.transition,n=fe;try{if(Gt.transition=null,fe=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,ql=0,le&6)throw Error(U(331));var i=le;for(le|=4,q=t.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:rs(8,h,o)}var p=h.child;if(p!==null)p.return=h,q=p;else for(;q!==null;){h=q;var m=h.sibling,w=h.return;if(r1(h),h===c){q=null;break}if(m!==null){m.return=w,q=m;break}q=w}}}var P=o.alternate;if(P!==null){var C=P.child;if(C!==null){P.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var T=o.sibling;if(T!==null){T.return=o.return,q=T;break e}q=o.return}}var _=t.current;for(q=_;q!==null;){s=q;var A=s.child;if(s.subtreeFlags&2064&&A!==null)A.return=s,q=A;else e:for(s=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(O){De(l,l.return,O)}if(l===s){q=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,q=x;break e}q=l.return}}if(le=i,Pr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{fe=n,Gt.transition=e}}return!1}function fv(t,e,n){e=Gi(n,e),e=W_(t,e,1),t=cr(t,e,1),e=_t(),t!==null&&(Gs(t,1,e),Rt(t,e))}function De(t,e,n){if(t.tag===3)fv(t,t,n);else for(;e!==null;){if(e.tag===3){fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Gi(n,t),t=K_(e,t,1),e=cr(e,t,1),t=_t(),e!==null&&(Gs(e,1,t),Rt(e,t));break}}e=e.return}}function SS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(He===4||He===3&&(tt&130023424)===tt&&500>Fe()-zd?zr(t,0):$d|=n),Rt(t,e)}function d1(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=_t();t=Ln(t,e),t!==null&&(Gs(t,e,n),Rt(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d1(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),d1(t,n)}var p1;p1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,pS(t,e,n);St=!!(t.flags&131072)}else St=!1,Ie&&e.flags&1048576&&y_(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=Hi(e,dt.current);Ui(e,n),i=Vd(null,e,r,t,i,n);var o=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(o=!0,Ol(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bd(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,rh(e,r,t,n),e=sh(null,e,r,!0,o,n)):(e.tag=0,Ie&&o&&Id(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CS(r),t=nn(r,t),i){case 0:e=oh(null,e,r,t,n);break e;case 1:e=tv(null,e,r,t,n);break e;case 11:e=Zg(null,e,r,t,n);break e;case 14:e=ev(null,e,r,nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),tv(t,e,r,i,n);case 3:e:{if(X_(e),t===null)throw Error(U(387));r=e.pendingProps,o=e.memoizedState,i=o.element,A_(t,e),Ul(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Gi(Error(U(423)),e),e=nv(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(U(424)),e),e=nv(t,e,r,n,i);break e}else for(Dt=ur(e.stateNode.containerInfo.firstChild),Lt=e,Ie=!0,on=null,n=T_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Mn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return S_(e),t===null&&eh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Qf(r,i)?s=null:o!==null&&Qf(r,o)&&(e.flags|=32),Y_(t,e),yt(t,e,s,n),e.child;case 6:return t===null&&eh(e),null;case 13:return J_(t,e,n);case 4:return xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Zg(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ge(Ml,r._currentValue),r._currentValue=s,o!==null)if(cn(o.value,s)){if(o.children===i.children&&!kt.current){e=Mn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),th(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),th(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=Xt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),ev(t,e,r,i,n);case 15:return G_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),hl(t,e),e.tag=1,Pt(r)?(t=!0,Ol(e)):t=!1,Ui(e,n),q_(e,r,i),rh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return Z_(t,e,n);case 22:return Q_(t,e,n)}throw Error(U(156,e.tag))};function m1(t,e){return z0(t,e)}function RS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new RS(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CS(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===hd)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Wd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ei:return Br(n.children,i,o,e);case cd:s=8,i|=8;break;case Pf:return t=Kt(12,n,e,i|2),t.elementType=Pf,t.lanes=o,t;case Rf:return t=Kt(13,n,e,i),t.elementType=Rf,t.lanes=o,t;case Cf:return t=Kt(19,n,e,i),t.elementType=Cf,t.lanes=o,t;case S0:return Su(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I0:s=10;break e;case A0:s=9;break e;case fd:s=11;break e;case hd:s=14;break e;case Jn:s=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Kt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Br(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=S0,t.lanes=n,t.stateNode={isHidden:!1},t}function ef(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function tf(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,o,s,l,u){return t=new bS(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Kt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(o),t}function xS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g1(t){if(!t)return yr;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Pt(n))return g_(t,n,e)}return e}function v1(t,e,n,r,i,o,s,l,u){return t=Kd(n,r,!0,t,i,o,s,l,u),t.context=g1(null),n=t.current,r=_t(),i=hr(n),o=Nn(r,i),o.callback=e??null,cr(n,o,i),t.current.lanes=i,Gs(t,i,r),Rt(t,r),t}function ku(t,e,n,r){var i=e.current,o=_t(),s=hr(i);return n=g1(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,s),t!==null&&(un(t,i,s,o),ul(t,i,s)),s}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){hv(t,e),(t=t.alternate)&&hv(t,e)}function NS(){return null}var y1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}Pu.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ku(t,e,null,null)};Pu.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){ku(null,t,null,null)}),e[Vn]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&X0(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function DS(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Kl(s);o.call(c)}}var s=v1(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=s,t[Vn]=s.current,Ss(t.nodeType===8?t.parentNode:t),Xr(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Kl(u);l.call(c)}}var u=Kd(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=u,t[Vn]=u.current,Ss(t.nodeType===8?t.parentNode:t),Xr(function(){ku(e,u,n,r)}),u}function Cu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Kl(s);l.call(u)}}ku(e,s,t,i)}else s=DS(n,e,t,i,r);return Kl(s)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(md(e,n|1),Rt(e,Fe()),!(le&6)&&(Qi=Fe()+500,Pr()))}break;case 13:Xr(function(){var r=Ln(t,1);if(r!==null){var i=_t();un(r,t,1,i)}}),Gd(t,1)}};gd=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=_t();un(e,t,134217728,n)}Gd(t,134217728)}};G0=function(t){if(t.tag===13){var e=hr(t),n=Ln(t,e);if(n!==null){var r=_t();un(n,t,e,r)}Gd(t,e)}};Q0=function(){return fe};Y0=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Uf=function(t,e,n){switch(e){case"input":if(Nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_u(r);if(!i)throw Error(U(90));P0(r),Nf(r,i)}}}break;case"textarea":C0(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};L0=Bd;M0=Xr;var OS={usingClientEntryPoint:!1,Events:[Ys,Si,_u,O0,V0,Bd]},Fo={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VS={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j0(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||NS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{mu=$a.inject(VS),vn=$a}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(U(200));return xS(t,e,null,n)};Ut.createRoot=function(t,e){if(!Yd(t))throw Error(U(299));var n=!1,r="",i=y1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,Ss(t.nodeType===8?t.parentNode:t),new Qd(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=j0(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return Xr(t)};Ut.hydrate=function(t,e,n){if(!Ru(e))throw Error(U(200));return Cu(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=y1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=v1(e,null,t,1,n??null,i,!1,o,s),t[Vn]=e.current,Ss(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};Ut.render=function(t,e,n){if(!Ru(e))throw Error(U(200));return Cu(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(U(40));return t._reactRootContainer?(Xr(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Bd;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ru(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Cu(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function _1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_1)}catch(t){console.error(t)}}_1(),_0.exports=Ut;var LS=_0.exports,pv=LS;Sf.createRoot=pv.createRoot,Sf.hydrateRoot=pv.hydrateRoot;const MS="/React-app-Airbnb/images/airbnb-logo.png";function yh(t,e){return yh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},yh(t,e)}function En(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,yh(t,e)}var w1={exports:{}},FS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",US=FS,jS=US;function E1(){}function T1(){}T1.resetWarningCache=E1;var $S=function(){function t(r,i,o,s,l,u){if(u!==jS){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:T1,resetWarningCache:E1};return n.PropTypes=n,n};w1.exports=$S();var zS=w1.exports;const re=td(zS);function wt(){return wt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wt.apply(null,arguments)}function za(t){return t.charAt(0)==="/"}function nf(t,e){for(var n=e,r=n+1,i=t.length;r<i;n+=1,r+=1)t[n]=t[r];t.pop()}function BS(t,e){e===void 0&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],i=t&&za(t),o=e&&za(e),s=i||o;if(t&&za(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var u=r[r.length-1];l=u==="."||u===".."||u===""}else l=!1;for(var c=0,h=r.length;h>=0;h--){var p=r[h];p==="."?nf(r,h):p===".."?(nf(r,h),c++):c&&(nf(r,h),c--)}if(!s)for(;c--;c)r.unshift("..");s&&r[0]!==""&&(!r[0]||!za(r[0]))&&r.unshift("");var m=r.join("/");return l&&m.substr(-1)!=="/"&&(m+="/"),m}var HS="Invariant failed";function ui(t,e){throw new Error(HS)}function ss(t){return t.charAt(0)==="/"?t:"/"+t}function mv(t){return t.charAt(0)==="/"?t.substr(1):t}function qS(t,e){return t.toLowerCase().indexOf(e.toLowerCase())===0&&"/?#".indexOf(t.charAt(e.length))!==-1}function I1(t,e){return qS(t,e)?t.substr(e.length):t}function A1(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t}function WS(t){var e=t||"/",n="",r="",i=e.indexOf("#");i!==-1&&(r=e.substr(i),e=e.substr(0,i));var o=e.indexOf("?");return o!==-1&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:n==="?"?"":n,hash:r==="#"?"":r}}function It(t){var e=t.pathname,n=t.search,r=t.hash,i=e||"/";return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function Ot(t,e,n,r){var i;typeof t=="string"?(i=WS(t),i.state=e):(i=wt({},t),i.pathname===void 0&&(i.pathname=""),i.search?i.search.charAt(0)!=="?"&&(i.search="?"+i.search):i.search="",i.hash?i.hash.charAt(0)!=="#"&&(i.hash="#"+i.hash):i.hash="",e!==void 0&&i.state===void 0&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!=="/"&&(i.pathname=BS(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function Xd(){var t=null;function e(s){return t=s,function(){t===s&&(t=null)}}function n(s,l,u,c){if(t!=null){var h=typeof t=="function"?t(s,l):t;typeof h=="string"?typeof u=="function"?u(h,c):c(!0):c(h!==!1)}else c(!0)}var r=[];function i(s){var l=!0;function u(){l&&s.apply(void 0,arguments)}return r.push(u),function(){l=!1,r=r.filter(function(c){return c!==u})}}function o(){for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];r.forEach(function(c){return c.apply(void 0,l)})}return{setPrompt:e,confirmTransitionTo:n,appendListener:i,notifyListeners:o}}var S1=!!(typeof window<"u"&&window.document&&window.document.createElement);function k1(t,e){e(window.confirm(t))}function KS(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function GS(){return window.navigator.userAgent.indexOf("Trident")===-1}function QS(){return window.navigator.userAgent.indexOf("Firefox")===-1}function YS(t){return t.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var gv="popstate",vv="hashchange";function yv(){try{return window.history.state||{}}catch{return{}}}function XS(t){t===void 0&&(t={}),S1||ui();var e=window.history,n=KS(),r=!GS(),i=t,o=i.forceRefresh,s=o===void 0?!1:o,l=i.getUserConfirmation,u=l===void 0?k1:l,c=i.keyLength,h=c===void 0?6:c,p=t.basename?A1(ss(t.basename)):"";function m(j){var F=j||{},Q=F.key,H=F.state,J=window.location,me=J.pathname,ke=J.search,Me=J.hash,xe=me+ke+Me;return p&&(xe=I1(xe,p)),Ot(xe,H,Q)}function w(){return Math.random().toString(36).substr(2,h)}var P=Xd();function C(j){wt($,j),$.length=e.length,P.notifyListeners($.location,$.action)}function N(j){YS(j)||A(m(j.state))}function T(){A(m(yv()))}var _=!1;function A(j){if(_)_=!1,C();else{var F="POP";P.confirmTransitionTo(j,F,u,function(Q){Q?C({action:F,location:j}):x(j)})}}function x(j){var F=$.location,Q=V.indexOf(F.key);Q===-1&&(Q=0);var H=V.indexOf(j.key);H===-1&&(H=0);var J=Q-H;J&&(_=!0,I(J))}var O=m(yv()),V=[O.key];function y(j){return p+It(j)}function g(j,F){var Q="PUSH",H=Ot(j,F,w(),$.location);P.confirmTransitionTo(H,Q,u,function(J){if(J){var me=y(H),ke=H.key,Me=H.state;if(n)if(e.pushState({key:ke,state:Me},null,me),s)window.location.href=me;else{var xe=V.indexOf($.location.key),Sn=V.slice(0,xe+1);Sn.push(H.key),V=Sn,C({action:Q,location:H})}else window.location.href=me}})}function E(j,F){var Q="REPLACE",H=Ot(j,F,w(),$.location);P.confirmTransitionTo(H,Q,u,function(J){if(J){var me=y(H),ke=H.key,Me=H.state;if(n)if(e.replaceState({key:ke,state:Me},null,me),s)window.location.replace(me);else{var xe=V.indexOf($.location.key);xe!==-1&&(V[xe]=H.key),C({action:Q,location:H})}else window.location.replace(me)}})}function I(j){e.go(j)}function k(){I(-1)}function R(){I(1)}var S=0;function pe(j){S+=j,S===1&&j===1?(window.addEventListener(gv,N),r&&window.addEventListener(vv,T)):S===0&&(window.removeEventListener(gv,N),r&&window.removeEventListener(vv,T))}var Se=!1;function Bt(j){j===void 0&&(j=!1);var F=P.setPrompt(j);return Se||(pe(1),Se=!0),function(){return Se&&(Se=!1,pe(-1)),F()}}function bt(j){var F=P.appendListener(j);return pe(1),function(){pe(-1),F()}}var $={length:e.length,action:"POP",location:O,createHref:y,push:g,replace:E,go:I,goBack:k,goForward:R,block:Bt,listen:bt};return $}var _v="hashchange",JS={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+mv(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:mv,decodePath:ss},slash:{encodePath:ss,decodePath:ss}};function P1(t){var e=t.indexOf("#");return e===-1?t:t.slice(0,e)}function Uo(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.substring(e+1)}function ZS(t){window.location.hash=t}function rf(t){window.location.replace(P1(window.location.href)+"#"+t)}function e2(t){t===void 0&&(t={}),S1||ui();var e=window.history;QS();var n=t,r=n.getUserConfirmation,i=r===void 0?k1:r,o=n.hashType,s=o===void 0?"slash":o,l=t.basename?A1(ss(t.basename)):"",u=JS[s],c=u.encodePath,h=u.decodePath;function p(){var F=h(Uo());return l&&(F=I1(F,l)),Ot(F)}var m=Xd();function w(F){wt(j,F),j.length=e.length,m.notifyListeners(j.location,j.action)}var P=!1,C=null;function N(F,Q){return F.pathname===Q.pathname&&F.search===Q.search&&F.hash===Q.hash}function T(){var F=Uo(),Q=c(F);if(F!==Q)rf(Q);else{var H=p(),J=j.location;if(!P&&N(J,H)||C===It(H))return;C=null,_(H)}}function _(F){if(P)P=!1,w();else{var Q="POP";m.confirmTransitionTo(F,Q,i,function(H){H?w({action:Q,location:F}):A(F)})}}function A(F){var Q=j.location,H=y.lastIndexOf(It(Q));H===-1&&(H=0);var J=y.lastIndexOf(It(F));J===-1&&(J=0);var me=H-J;me&&(P=!0,k(me))}var x=Uo(),O=c(x);x!==O&&rf(O);var V=p(),y=[It(V)];function g(F){var Q=document.querySelector("base"),H="";return Q&&Q.getAttribute("href")&&(H=P1(window.location.href)),H+"#"+c(l+It(F))}function E(F,Q){var H="PUSH",J=Ot(F,void 0,void 0,j.location);m.confirmTransitionTo(J,H,i,function(me){if(me){var ke=It(J),Me=c(l+ke),xe=Uo()!==Me;if(xe){C=ke,ZS(Me);var Sn=y.lastIndexOf(It(j.location)),aa=y.slice(0,Sn+1);aa.push(ke),y=aa,w({action:H,location:J})}else w()}})}function I(F,Q){var H="REPLACE",J=Ot(F,void 0,void 0,j.location);m.confirmTransitionTo(J,H,i,function(me){if(me){var ke=It(J),Me=c(l+ke),xe=Uo()!==Me;xe&&(C=ke,rf(Me));var Sn=y.indexOf(It(j.location));Sn!==-1&&(y[Sn]=ke),w({action:H,location:J})}})}function k(F){e.go(F)}function R(){k(-1)}function S(){k(1)}var pe=0;function Se(F){pe+=F,pe===1&&F===1?window.addEventListener(_v,T):pe===0&&window.removeEventListener(_v,T)}var Bt=!1;function bt(F){F===void 0&&(F=!1);var Q=m.setPrompt(F);return Bt||(Se(1),Bt=!0),function(){return Bt&&(Bt=!1,Se(-1)),Q()}}function $(F){var Q=m.appendListener(F);return Se(1),function(){Se(-1),Q()}}var j={length:e.length,action:"POP",location:V,createHref:g,push:E,replace:I,go:k,goBack:R,goForward:S,block:bt,listen:$};return j}function wv(t,e,n){return Math.min(Math.max(t,e),n)}function t2(t){t===void 0&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=r===void 0?["/"]:r,o=e.initialIndex,s=o===void 0?0:o,l=e.keyLength,u=l===void 0?6:l,c=Xd();function h(g){wt(y,g),y.length=y.entries.length,c.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,u)}var m=wv(s,0,i.length-1),w=i.map(function(g){return typeof g=="string"?Ot(g,void 0,p()):Ot(g,void 0,g.key||p())}),P=It;function C(g,E){var I="PUSH",k=Ot(g,E,p(),y.location);c.confirmTransitionTo(k,I,n,function(R){if(R){var S=y.index,pe=S+1,Se=y.entries.slice(0);Se.length>pe?Se.splice(pe,Se.length-pe,k):Se.push(k),h({action:I,location:k,index:pe,entries:Se})}})}function N(g,E){var I="REPLACE",k=Ot(g,E,p(),y.location);c.confirmTransitionTo(k,I,n,function(R){R&&(y.entries[y.index]=k,h({action:I,location:k}))})}function T(g){var E=wv(y.index+g,0,y.entries.length-1),I="POP",k=y.entries[E];c.confirmTransitionTo(k,I,n,function(R){R?h({action:I,location:k,index:E}):h()})}function _(){T(-1)}function A(){T(1)}function x(g){var E=y.index+g;return E>=0&&E<y.entries.length}function O(g){return g===void 0&&(g=!1),c.setPrompt(g)}function V(g){return c.appendListener(g)}var y={length:w.length,action:"POP",location:w[m],index:m,entries:w,createHref:P,push:C,replace:N,go:T,goBack:_,goForward:A,canGo:x,block:O,listen:V};return y}var uo={exports:{}},n2=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Gl=n2;uo.exports=b1;uo.exports.parse=Jd;uo.exports.compile=i2;uo.exports.tokensToFunction=R1;uo.exports.tokensToRegExp=C1;var r2=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Jd(t,e){for(var n=[],r=0,i=0,o="",s=e&&e.delimiter||"/",l;(l=r2.exec(t))!=null;){var u=l[0],c=l[1],h=l.index;if(o+=t.slice(i,h),i=h+u.length,c){o+=c[1];continue}var p=t[i],m=l[2],w=l[3],P=l[4],C=l[5],N=l[6],T=l[7];o&&(n.push(o),o="");var _=m!=null&&p!=null&&p!==m,A=N==="+"||N==="*",x=N==="?"||N==="*",O=l[2]||s,V=P||C;n.push({name:w||r++,prefix:m||"",delimiter:O,optional:x,repeat:A,partial:_,asterisk:!!T,pattern:V?a2(V):T?".*":"[^"+gl(O)+"]+?"})}return i<t.length&&(o+=t.substr(i)),o&&n.push(o),n}function i2(t,e){return R1(Jd(t,e),e)}function o2(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s2(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function R1(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",ep(e)));return function(i,o){for(var s="",l=i||{},u=o||{},c=u.pretty?o2:encodeURIComponent,h=0;h<t.length;h++){var p=t[h];if(typeof p=="string"){s+=p;continue}var m=l[p.name],w;if(m==null)if(p.optional){p.partial&&(s+=p.prefix);continue}else throw new TypeError('Expected "'+p.name+'" to be defined');if(Gl(m)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var P=0;P<m.length;P++){if(w=c(m[P]),!n[h].test(w))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+JSON.stringify(w)+"`");s+=(P===0?p.prefix:p.delimiter)+w}continue}if(w=p.asterisk?s2(m):c(m),!n[h].test(w))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+w+'"');s+=p.prefix+w}return s}}function gl(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a2(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Zd(t,e){return t.keys=e,t}function ep(t){return t&&t.sensitive?"":"i"}function l2(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Zd(t,e)}function u2(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(b1(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",ep(n));return Zd(o,e)}function c2(t,e,n){return C1(Jd(t,n),e,n)}function C1(t,e,n){Gl(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=n.end!==!1,o="",s=0;s<t.length;s++){var l=t[s];if(typeof l=="string")o+=gl(l);else{var u=gl(l.prefix),c="(?:"+l.pattern+")";e.push(l),l.repeat&&(c+="(?:"+u+c+")*"),l.optional?l.partial?c=u+"("+c+")?":c="(?:"+u+"("+c+"))?":c=u+"("+c+")",o+=c}}var h=gl(n.delimiter||"/"),p=o.slice(-h.length)===h;return r||(o=(p?o.slice(0,-h.length):o)+"(?:"+h+"(?=$))?"),i?o+="$":o+=r&&p?"":"(?="+h+"|$)",Zd(new RegExp("^"+o,ep(n)),e)}function b1(t,e,n){return Gl(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?l2(t,e):Gl(t)?u2(t,e,n):c2(t,e,n)}var f2=uo.exports;const h2=td(f2);var x1={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,tp=Ye?Symbol.for("react.element"):60103,np=Ye?Symbol.for("react.portal"):60106,bu=Ye?Symbol.for("react.fragment"):60107,xu=Ye?Symbol.for("react.strict_mode"):60108,Nu=Ye?Symbol.for("react.profiler"):60114,Du=Ye?Symbol.for("react.provider"):60109,Ou=Ye?Symbol.for("react.context"):60110,rp=Ye?Symbol.for("react.async_mode"):60111,Vu=Ye?Symbol.for("react.concurrent_mode"):60111,Lu=Ye?Symbol.for("react.forward_ref"):60112,Mu=Ye?Symbol.for("react.suspense"):60113,d2=Ye?Symbol.for("react.suspense_list"):60120,Fu=Ye?Symbol.for("react.memo"):60115,Uu=Ye?Symbol.for("react.lazy"):60116,p2=Ye?Symbol.for("react.block"):60121,m2=Ye?Symbol.for("react.fundamental"):60117,g2=Ye?Symbol.for("react.responder"):60118,v2=Ye?Symbol.for("react.scope"):60119;function $t(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case tp:switch(t=t.type,t){case rp:case Vu:case bu:case Nu:case xu:case Mu:return t;default:switch(t=t&&t.$$typeof,t){case Ou:case Lu:case Uu:case Fu:case Du:return t;default:return e}}case np:return e}}}function N1(t){return $t(t)===Vu}he.AsyncMode=rp;he.ConcurrentMode=Vu;he.ContextConsumer=Ou;he.ContextProvider=Du;he.Element=tp;he.ForwardRef=Lu;he.Fragment=bu;he.Lazy=Uu;he.Memo=Fu;he.Portal=np;he.Profiler=Nu;he.StrictMode=xu;he.Suspense=Mu;he.isAsyncMode=function(t){return N1(t)||$t(t)===rp};he.isConcurrentMode=N1;he.isContextConsumer=function(t){return $t(t)===Ou};he.isContextProvider=function(t){return $t(t)===Du};he.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===tp};he.isForwardRef=function(t){return $t(t)===Lu};he.isFragment=function(t){return $t(t)===bu};he.isLazy=function(t){return $t(t)===Uu};he.isMemo=function(t){return $t(t)===Fu};he.isPortal=function(t){return $t(t)===np};he.isProfiler=function(t){return $t(t)===Nu};he.isStrictMode=function(t){return $t(t)===xu};he.isSuspense=function(t){return $t(t)===Mu};he.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bu||t===Vu||t===Nu||t===xu||t===Mu||t===d2||typeof t=="object"&&t!==null&&(t.$$typeof===Uu||t.$$typeof===Fu||t.$$typeof===Du||t.$$typeof===Ou||t.$$typeof===Lu||t.$$typeof===m2||t.$$typeof===g2||t.$$typeof===v2||t.$$typeof===p2)};he.typeOf=$t;x1.exports=he;var y2=x1.exports;function ju(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}var D1=y2,_2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O1={};O1[D1.ForwardRef]=_2;O1[D1.Memo]=w2;var of=1073741823,Ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function E2(){var t="__global_unique_id__";return Ev[t]=(Ev[t]||0)+1}function T2(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function I2(t){var e=[];return{on:function(r){e.push(r)},off:function(r){e=e.filter(function(i){return i!==r})},get:function(){return t},set:function(r,i){t=r,e.forEach(function(o){return o(t,i)})}}}function A2(t){return Array.isArray(t)?t[0]:t}function S2(t,e){var n,r,i="__create-react-context-"+E2()+"__",o=function(l){En(u,l);function u(){for(var h,p=arguments.length,m=new Array(p),w=0;w<p;w++)m[w]=arguments[w];return h=l.call.apply(l,[this].concat(m))||this,h.emitter=I2(h.props.value),h}var c=u.prototype;return c.getChildContext=function(){var p;return p={},p[i]=this.emitter,p},c.componentWillReceiveProps=function(p){if(this.props.value!==p.value){var m=this.props.value,w=p.value,P;T2(m,w)?P=0:(P=typeof e=="function"?e(m,w):of,P|=0,P!==0&&this.emitter.set(p.value,P))}},c.render=function(){return this.props.children},u}(ne.Component);o.childContextTypes=(n={},n[i]=re.object.isRequired,n);var s=function(l){En(u,l);function u(){for(var h,p=arguments.length,m=new Array(p),w=0;w<p;w++)m[w]=arguments[w];return h=l.call.apply(l,[this].concat(m))||this,h.observedBits=void 0,h.state={value:h.getValue()},h.onUpdate=function(P,C){var N=h.observedBits|0;N&C&&h.setState({value:h.getValue()})},h}var c=u.prototype;return c.componentWillReceiveProps=function(p){var m=p.observedBits;this.observedBits=m??of},c.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var p=this.props.observedBits;this.observedBits=p??of},c.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},c.getValue=function(){return this.context[i]?this.context[i].get():t},c.render=function(){return A2(this.props.children)(this.state.value)},u}(ne.Component);return s.contextTypes=(r={},r[i]=re.object,r),{Provider:o,Consumer:s}}var k2=ne.createContext||S2,V1=function(e){var n=k2();return n.displayName=e,n},P2=V1("Router-History"),Yi=V1("Router"),$u=function(t){En(e,t),e.computeRootMatch=function(i){return{path:"/",url:"/",params:{},isExact:i==="/"}};function e(r){var i;return i=t.call(this,r)||this,i.state={location:r.history.location},i._isMounted=!1,i._pendingLocation=null,r.staticContext||(i.unlisten=r.history.listen(function(o){i._pendingLocation=o})),i}var n=e.prototype;return n.componentDidMount=function(){var i=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(o){i._isMounted&&i.setState({location:o})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return ne.createElement(Yi.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ne.createElement(P2.Provider,{children:this.props.children||null,value:this.props.history}))},e}(ne.Component);ne.Component;ne.Component;var Tv={},R2=1e4,Iv=0;function C2(t,e){var n=""+e.end+e.strict+e.sensitive,r=Tv[n]||(Tv[n]={});if(r[t])return r[t];var i=[],o=h2(t,i,e),s={regexp:o,keys:i};return Iv<R2&&(r[t]=s,Iv++),s}function ip(t,e){e===void 0&&(e={}),(typeof e=="string"||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,i=n.exact,o=i===void 0?!1:i,s=n.strict,l=s===void 0?!1:s,u=n.sensitive,c=u===void 0?!1:u,h=[].concat(r);return h.reduce(function(p,m){if(!m&&m!=="")return null;if(p)return p;var w=C2(m,{end:o,strict:l,sensitive:c}),P=w.regexp,C=w.keys,N=P.exec(t);if(!N)return null;var T=N[0],_=N.slice(1),A=t===T;return o&&!A?null:{path:m,url:m==="/"&&T===""?"/":T,isExact:A,params:C.reduce(function(x,O,V){return x[O.name]=_[V],x},{})}},null)}function b2(t){return ne.Children.count(t)===0}var Av=function(t){En(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return ne.createElement(Yi.Consumer,null,function(o){o||ui();var s=i.props.location||o.location,l=i.props.computedMatch?i.props.computedMatch:i.props.path?ip(s.pathname,i.props):o.match,u=wt({},o,{location:s,match:l}),c=i.props,h=c.children,p=c.component,m=c.render;return Array.isArray(h)&&b2(h)&&(h=null),ne.createElement(Yi.Provider,{value:u},u.match?h?typeof h=="function"?h(u):h:p?ne.createElement(p,u):m?m(u):null:typeof h=="function"?h(u):null)})},e}(ne.Component);function op(t){return t.charAt(0)==="/"?t:"/"+t}function x2(t,e){return t?wt({},e,{pathname:op(t)+e.pathname}):e}function N2(t,e){if(!t)return e;var n=op(t);return e.pathname.indexOf(n)!==0?e:wt({},e,{pathname:e.pathname.substr(n.length)})}function Sv(t){return typeof t=="string"?t:It(t)}function sf(t){return function(){ui()}}function kv(){}ne.Component;var D2=function(t){En(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.render=function(){var i=this;return ne.createElement(Yi.Consumer,null,function(o){o||ui();var s=i.props.location||o.location,l,u;return ne.Children.forEach(i.props.children,function(c){if(u==null&&ne.isValidElement(c)){l=c;var h=c.props.path||c.props.from;u=h?ip(s.pathname,wt({},c.props,{path:h})):o.match}}),u?ne.cloneElement(l,{location:s,computedMatch:u}):null})},e}(ne.Component);ne.useContext;var O2=function(t){En(e,t);function e(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o))||this,r.history=XS(r.props),r}var n=e.prototype;return n.render=function(){return ne.createElement($u,{history:this.history,children:this.props.children})},e}(ne.Component);ne.Component;var _h=function(e,n){return typeof e=="function"?e(n):e},wh=function(e,n){return typeof e=="string"?Ot(e,null,null,n):e},sp=function(e){return e},Xi=ne.forwardRef;typeof Xi>"u"&&(Xi=sp);function V2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var L2=Xi(function(t,e){var n=t.innerRef,r=t.navigate,i=t.onClick,o=ju(t,["innerRef","navigate","onClick"]),s=o.target,l=wt({},o,{onClick:function(c){try{i&&i(c)}catch(h){throw c.preventDefault(),h}!c.defaultPrevented&&c.button===0&&(!s||s==="_self")&&!V2(c)&&(c.preventDefault(),r())}});return sp!==Xi?l.ref=e||n:l.ref=n,ne.createElement("a",l)}),Os=Xi(function(t,e){var n=t.component,r=n===void 0?L2:n,i=t.replace,o=t.to,s=t.innerRef,l=ju(t,["component","replace","to","innerRef"]);return ne.createElement(Yi.Consumer,null,function(u){u||ui();var c=u.history,h=wh(_h(o,u.location),u.location),p=h?c.createHref(h):"",m=wt({},l,{href:p,navigate:function(){var P=_h(o,u.location),C=It(u.location)===It(wh(P)),N=i||C?c.replace:c.push;N(P)}});return sp!==Xi?m.ref=e||s:m.innerRef=s,ne.createElement(r,m)})}),L1=function(e){return e},Ql=ne.forwardRef;typeof Ql>"u"&&(Ql=L1);function M2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}Ql(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,i=t.activeClassName,o=i===void 0?"active":i,s=t.activeStyle,l=t.className,u=t.exact,c=t.isActive,h=t.location,p=t.sensitive,m=t.strict,w=t.style,P=t.to,C=t.innerRef,N=ju(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ne.createElement(Yi.Consumer,null,function(T){T||ui();var _=h||T.location,A=wh(_h(P,_),_),x=A.pathname,O=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),V=O?ip(_.pathname,{path:O,exact:u,sensitive:p,strict:m}):null,y=!!(c?c(V,_):V),g=typeof l=="function"?l(y):l,E=typeof w=="function"?w(y):w;y&&(g=M2(g,o),E=wt({},E,s));var I=wt({"aria-current":y&&r||null,className:g,style:E,to:A},N);return L1!==Ql?I.ref=e||C:I.innerRef=C,ne.createElement(Os,I)})});function F2(){return K.jsxs("nav",{className:"nav",children:[K.jsx("img",{className:"navbar-image",src:MS}),K.jsxs("div",{className:"navbar-links",children:[K.jsx(Os,{to:"/React-app-Airbnb/",children:"HOME"}),K.jsx(Os,{to:"/React-app-Airbnb/create",children:"NEW CARDS"})]})]})}function Pv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pv(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yl(t){"@babel/helpers - typeof";return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yl(t)}function U2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j2(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $2(t,e,n){return e&&j2(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ap(t,e){return B2(t)||q2(t,e)||M1(t,e)||K2()}function Js(t){return z2(t)||H2(t)||M1(t)||W2()}function z2(t){if(Array.isArray(t))return Eh(t)}function B2(t){if(Array.isArray(t))return t}function H2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function q2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function M1(t,e){if(t){if(typeof t=="string")return Eh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Eh(t,e)}}function Eh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function W2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rv=function(){},lp={},F1={},U1=null,j1={mark:Rv,measure:Rv};try{typeof window<"u"&&(lp=window),typeof document<"u"&&(F1=document),typeof MutationObserver<"u"&&(U1=MutationObserver),typeof performance<"u"&&(j1=performance)}catch{}var G2=lp.navigator||{},Cv=G2.userAgent,bv=Cv===void 0?"":Cv,_r=lp,Te=F1,xv=U1,Ba=j1;_r.document;var qn=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",$1=~bv.indexOf("MSIE")||~bv.indexOf("Trident/"),Ha,qa,Wa,Ka,Ga,Fn="___FONT_AWESOME___",Th=16,z1="fa",B1="svg-inline--fa",Jr="data-fa-i2svg",Ih="data-fa-pseudo-element",Q2="data-fa-pseudo-element-pending",up="data-prefix",cp="data-icon",Nv="fontawesome-i2svg",Y2="async",X2=["HTML","HEAD","STYLE","SCRIPT"],H1=function(){try{return!0}catch{return!1}}(),we="classic",Oe="sharp",fp=[we,Oe];function Zs(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var Vs=Zs((Ha={},We(Ha,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(Ha,Oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ha)),Ls=Zs((qa={},We(qa,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(qa,Oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qa)),Ms=Zs((Wa={},We(Wa,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(Wa,Oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Wa)),J2=Zs((Ka={},We(Ka,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(Ka,Oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ka)),Z2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,q1="fa-layers-text",ek=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tk=Zs((Ga={},We(Ga,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(Ga,Oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ga)),W1=[1,2,3,4,5,6,7,8,9,10],nk=W1.concat([11,12,13,14,15,16,17,18,19,20]),rk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fs=new Set;Object.keys(Ls[we]).map(Fs.add.bind(Fs));Object.keys(Ls[Oe]).map(Fs.add.bind(Fs));var ik=[].concat(fp,Js(Fs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fr.GROUP,Fr.SWAP_OPACITY,Fr.PRIMARY,Fr.SECONDARY]).concat(W1.map(function(t){return"".concat(t,"x")})).concat(nk.map(function(t){return"w-".concat(t)})),as=_r.FontAwesomeConfig||{};function ok(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var ak=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ak.forEach(function(t){var e=ap(t,2),n=e[0],r=e[1],i=sk(ok(n));i!=null&&(as[r]=i)})}var K1={styleDefault:"solid",familyDefault:"classic",cssPrefix:z1,replacementClass:B1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};as.familyPrefix&&(as.cssPrefix=as.familyPrefix);var Ji=B(B({},K1),as);Ji.autoReplaceSvg||(Ji.observeMutations=!1);var G={};Object.keys(K1).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Ji[t]=n,ls.forEach(function(r){return r(G)})},get:function(){return Ji[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Ji.cssPrefix=e,ls.forEach(function(n){return n(G)})},get:function(){return Ji.cssPrefix}});_r.FontAwesomeConfig=G;var ls=[];function lk(t){return ls.push(t),function(){ls.splice(ls.indexOf(t),1)}}var Xn=Th,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uk(t){if(!(!t||!qn)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Te.head.insertBefore(e,r),t}}var ck="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Us(){for(var t=12,e="";t-- >0;)e+=ck[Math.random()*62|0];return e}function co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function hp(t){return t.classList?co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function G1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fk(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(G1(t[n]),'" ')},"").trim()}function zu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function dp(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function hk(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function dk(t){var e=t.transform,n=t.width,r=n===void 0?Th:n,i=t.height,o=i===void 0?Th:i,s=t.startCentered,l=s===void 0?!1:s,u="";return l&&$1?u+="translate(".concat(e.x/Xn-r/2,"em, ").concat(e.y/Xn-o/2,"em) "):l?u+="translate(calc(-50% + ".concat(e.x/Xn,"em), calc(-50% + ").concat(e.y/Xn,"em)) "):u+="translate(".concat(e.x/Xn,"em, ").concat(e.y/Xn,"em) "),u+="scale(".concat(e.size/Xn*(e.flipX?-1:1),", ").concat(e.size/Xn*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var pk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Q1(){var t=z1,e=B1,n=G.cssPrefix,r=G.replacementClass,i=pk;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Dv=!1;function af(){G.autoAddCss&&!Dv&&(uk(Q1()),Dv=!0)}var mk={mixout:function(){return{dom:{css:Q1,insertCss:af}}},hooks:function(){return{beforeDOMElementCreation:function(){af()},beforeI2svg:function(){af()}}}},Un=_r||{};Un[Fn]||(Un[Fn]={});Un[Fn].styles||(Un[Fn].styles={});Un[Fn].hooks||(Un[Fn].hooks={});Un[Fn].shims||(Un[Fn].shims=[]);var sn=Un[Fn],Y1=[],gk=function t(){Te.removeEventListener("DOMContentLoaded",t),Xl=1,Y1.map(function(e){return e()})},Xl=!1;qn&&(Xl=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Xl||Te.addEventListener("DOMContentLoaded",gk));function vk(t){qn&&(Xl?setTimeout(t,0):Y1.push(t))}function ea(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?G1(t):"<".concat(e," ").concat(fk(r),">").concat(o.map(ea).join(""),"</").concat(e,">")}function Ov(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lf=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,u,c,h;for(r===void 0?(u=1,h=e[o[0]]):(u=0,h=r);u<s;u++)c=o[u],h=l(h,e[c],c,e);return h};function yk(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ah(t){var e=yk(t);return e.length===1?e[0].toString(16):null}function _k(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Sh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Vv(e);typeof sn.hooks.addPack=="function"&&!i?sn.hooks.addPack(t,Vv(e)):sn.styles[t]=B(B({},sn.styles[t]||{}),o),t==="fas"&&Sh("fa",e)}var Qa,Ya,Xa,Ni=sn.styles,wk=sn.shims,Ek=(Qa={},We(Qa,we,Object.values(Ms[we])),We(Qa,Oe,Object.values(Ms[Oe])),Qa),pp=null,X1={},J1={},Z1={},ew={},tw={},Tk=(Ya={},We(Ya,we,Object.keys(Vs[we])),We(Ya,Oe,Object.keys(Vs[Oe])),Ya);function Ik(t){return~ik.indexOf(t)}function Ak(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Ik(i)?i:null}var nw=function(){var e=function(o){return lf(Ni,function(s,l,u){return s[u]=lf(l,o,{}),s},{})};X1=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=s})}return i}),J1=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=s})}return i}),tw=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(u){i[u]=s}),i});var n="far"in Ni||G.autoFetchSvg,r=lf(wk,function(i,o){var s=o[0],l=o[1],u=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:u}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});Z1=r.names,ew=r.unicodes,pp=Bu(G.styleDefault,{family:G.familyDefault})};lk(function(t){pp=Bu(t.styleDefault,{family:G.familyDefault})});nw();function mp(t,e){return(X1[t]||{})[e]}function Sk(t,e){return(J1[t]||{})[e]}function Ur(t,e){return(tw[t]||{})[e]}function rw(t){return Z1[t]||{prefix:null,iconName:null}}function kk(t){var e=ew[t],n=mp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wr(){return pp}var gp=function(){return{prefix:null,iconName:null,rest:[]}};function Bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=Vs[r][t],o=Ls[r][t]||Ls[r][i],s=t in sn.styles?t:null;return o||s||null}var Lv=(Xa={},We(Xa,we,Object.keys(Ms[we])),We(Xa,Oe,Object.keys(Ms[Oe])),Xa);function Hu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},We(e,we,"".concat(G.cssPrefix,"-").concat(we)),We(e,Oe,"".concat(G.cssPrefix,"-").concat(Oe)),e),s=null,l=we;(t.includes(o[we])||t.some(function(c){return Lv[we].includes(c)}))&&(l=we),(t.includes(o[Oe])||t.some(function(c){return Lv[Oe].includes(c)}))&&(l=Oe);var u=t.reduce(function(c,h){var p=Ak(G.cssPrefix,h);if(Ni[h]?(h=Ek[l].includes(h)?J2[l][h]:h,s=h,c.prefix=h):Tk[l].indexOf(h)>-1?(s=h,c.prefix=Bu(h,{family:l})):p?c.iconName=p:h!==G.replacementClass&&h!==o[we]&&h!==o[Oe]&&c.rest.push(h),!i&&c.prefix&&c.iconName){var m=s==="fa"?rw(c.iconName):{},w=Ur(c.prefix,c.iconName);m.prefix&&(s=null),c.iconName=m.iconName||w||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!Ni.far&&Ni.fas&&!G.autoFetchSvg&&(c.prefix="fas")}return c},gp());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===Oe&&(Ni.fass||G.autoFetchSvg)&&(u.prefix="fass",u.iconName=Ur(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||s==="fa")&&(u.prefix=wr()||"fas"),u}var Pk=function(){function t(){U2(this,t),this.definitions={}}return $2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=B(B({},n.definitions[l]||{}),s[l]),Sh(l,s[l]);var u=Ms[we][l];u&&Sh(u,s[l]),nw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,u=s.iconName,c=s.icon,h=c[2];n[l]||(n[l]={}),h.length>0&&h.forEach(function(p){typeof p=="string"&&(n[l][p]=c)}),n[l][u]=c}),n}}]),t}(),Mv=[],Di={},$i={},Rk=Object.keys($i);function Ck(t,e){var n=e.mixoutsTo;return Mv=t,Di={},Object.keys($i).forEach(function(r){Rk.indexOf(r)===-1&&delete $i[r]}),Mv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Yl(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Di[s]||(Di[s]=[]),Di[s].push(o[s])})}r.provides&&r.provides($i)}),n}function kh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Di[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Zr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Di[t]||[];i.forEach(function(o){o.apply(null,n)})}function jn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $i[t]?$i[t].apply(null,e):void 0}function Ph(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||wr();if(e)return e=Ur(n,e)||e,Ov(iw.definitions,n,e)||Ov(sn.styles,n,e)}var iw=new Pk,bk=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,Zr("noAuto")},xk={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qn?(Zr("beforeI2svg",e),jn("pseudoElements2svg",e),jn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,vk(function(){Dk({autoReplaceSvgRoot:n}),Zr("watch",e)})}},Nk={icon:function(e){if(e===null)return null;if(Yl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Bu(e[0]);return{prefix:r,iconName:Ur(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(Z2))){var i=Hu(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||wr(),iconName:Ur(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=wr();return{prefix:o,iconName:Ur(o,e)||e}}}},zt={noAuto:bk,config:G,dom:xk,parse:Nk,library:iw,findIconDefinition:Ph,toHtml:ea},Dk=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Te:n;(Object.keys(sn.styles).length>0||G.autoFetchSvg)&&qn&&G.autoReplaceSvg&&zt.dom.i2svg({node:r})};function qu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ea(r)})}}),Object.defineProperty(t,"node",{get:function(){if(qn){var r=Te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ok(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(dp(s)&&n.found&&!r.found){var l=n.width,u=n.height,c={x:l/u/2,y:.5};i.style=zu(B(B({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Vk(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},i),{},{id:s}),children:r}]}]}function vp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,u=t.title,c=t.maskId,h=t.titleId,p=t.extra,m=t.watchable,w=m===void 0?!1:m,P=r.found?r:n,C=P.width,N=P.height,T=i==="fak",_=[G.replacementClass,o?"".concat(G.cssPrefix,"-").concat(o):""].filter(function(E){return p.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(p.classes).join(" "),A={children:[],attributes:B(B({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:_,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(N)})},x=T&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/N*16*.0625,"em")}:{};w&&(A.attributes[Jr]=""),u&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(h||Us())},children:[u]}),delete A.attributes.title);var O=B(B({},A),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:s,symbol:l,styles:B(B({},x),p.styles)}),V=r.found&&n.found?jn("generateAbstractMask",O)||{children:[],attributes:{}}:jn("generateAbstractIcon",O)||{children:[],attributes:{}},y=V.children,g=V.attributes;return O.children=y,O.attributes=g,l?Vk(O):Ok(O)}function Fv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,u=l===void 0?!1:l,c=B(B(B({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});u&&(c[Jr]="");var h=B({},s.styles);dp(i)&&(h.transform=dk({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);var p=zu(h);p.length>0&&(c.style=p);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Lk(t){var e=t.content,n=t.title,r=t.extra,i=B(B(B({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=zu(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var uf=sn.styles;function Rh(t){var e=t[0],n=t[1],r=t.slice(4),i=ap(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Fr.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Fr.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var Mk={found:!1,width:512,height:512};function Fk(t,e){!H1&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ch(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=wr()),new Promise(function(r,i){if(jn("missingIconAbstract"),n==="fa"){var o=rw(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&uf[e]&&uf[e][t]){var s=uf[e][t];return r(Rh(s))}Fk(t,e),r(B(B({},Mk),{},{icon:G.showMissingIcons&&t?jn("missingIconAbstract")||{}:{}}))})}var Uv=function(){},bh=G.measurePerformance&&Ba&&Ba.mark&&Ba.measure?Ba:{mark:Uv,measure:Uv},Wo='FA "6.5.2"',Uk=function(e){return bh.mark("".concat(Wo," ").concat(e," begins")),function(){return ow(e)}},ow=function(e){bh.mark("".concat(Wo," ").concat(e," ends")),bh.measure("".concat(Wo," ").concat(e),"".concat(Wo," ").concat(e," begins"),"".concat(Wo," ").concat(e," ends"))},yp={begin:Uk,end:ow},vl=function(){};function jv(t){var e=t.getAttribute?t.getAttribute(Jr):null;return typeof e=="string"}function jk(t){var e=t.getAttribute?t.getAttribute(up):null,n=t.getAttribute?t.getAttribute(cp):null;return e&&n}function $k(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function zk(){if(G.autoReplaceSvg===!0)return yl.replace;var t=yl[G.autoReplaceSvg];return t||yl.replace}function Bk(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function Hk(t){return Te.createElement(t)}function sw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Bk:Hk:n;if(typeof t=="string")return Te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(sw(s,{ceFn:r}))}),i}function qk(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var yl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(sw(i),n)}),n.getAttribute(Jr)===null&&G.keepOriginalSource){var r=Te.createComment(qk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~hp(n).indexOf(G.replacementClass))return yl.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,u){return u===G.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return ea(l)}).join(`
`);n.setAttribute(Jr,""),n.innerHTML=s}};function $v(t){t()}function aw(t,e){var n=typeof e=="function"?e:vl;if(t.length===0)n();else{var r=$v;G.mutateApproach===Y2&&(r=_r.requestAnimationFrame||$v),r(function(){var i=zk(),o=yp.begin("mutate");t.map(i),o(),n()})}}var _p=!1;function lw(){_p=!0}function xh(){_p=!1}var Jl=null;function zv(t){if(xv&&G.observeMutations){var e=t.treeCallback,n=e===void 0?vl:e,r=t.nodeCallback,i=r===void 0?vl:r,o=t.pseudoElementsCallback,s=o===void 0?vl:o,l=t.observeMutationsRoot,u=l===void 0?Te:l;Jl=new xv(function(c){if(!_p){var h=wr();co(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!jv(p.addedNodes[0])&&(G.searchPseudoElements&&s(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&G.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&jv(p.target)&&~rk.indexOf(p.attributeName))if(p.attributeName==="class"&&jk(p.target)){var m=Hu(hp(p.target)),w=m.prefix,P=m.iconName;p.target.setAttribute(up,w||h),P&&p.target.setAttribute(cp,P)}else $k(p.target)&&i(p.target)})}}),qn&&Jl.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wk(){Jl&&Jl.disconnect()}function Kk(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function Gk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Hu(hp(t));return i.prefix||(i.prefix=wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Sk(i.prefix,t.innerText)||mp(i.prefix,Ah(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Qk(t){var e=co(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Us()):(e["aria-hidden"]="true",e.focusable="false")),e}function Yk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gk(t),r=n.iconName,i=n.prefix,o=n.rest,s=Qk(t),l=kh("parseNodeAttributes",{},t),u=e.styleParser?Kk(t):[];return B({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:s}},l)}var Xk=sn.styles;function uw(t){var e=G.autoReplaceSvg==="nest"?Bv(t,{styleParser:!1}):Bv(t);return~e.extra.classes.indexOf(q1)?jn("generateLayersText",t,e):jn("generateSvgReplacementMutation",t,e)}var Er=new Set;fp.map(function(t){Er.add("fa-".concat(t))});Object.keys(Vs[we]).map(Er.add.bind(Er));Object.keys(Vs[Oe]).map(Er.add.bind(Er));Er=Js(Er);function Hv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qn)return Promise.resolve();var n=Te.documentElement.classList,r=function(p){return n.add("".concat(Nv,"-").concat(p))},i=function(p){return n.remove("".concat(Nv,"-").concat(p))},o=G.autoFetchSvg?Er:fp.map(function(h){return"fa-".concat(h)}).concat(Object.keys(Xk));o.includes("fa")||o.push("fa");var s=[".".concat(q1,":not([").concat(Jr,"])")].concat(o.map(function(h){return".".concat(h,":not([").concat(Jr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=co(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=yp.begin("onTree"),c=l.reduce(function(h,p){try{var m=uw(p);m&&h.push(m)}catch(w){H1||w.name==="MissingIcon"&&console.error(w)}return h},[]);return new Promise(function(h,p){Promise.all(c).then(function(m){aw(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(function(m){u(),p(m)})})}function Jk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uw(t).then(function(n){n&&aw([n],e)})}function Zk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ph(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ph(i||{})),t(r,B(B({},n),{},{mask:i}))}}var eP=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,u=l===void 0?null:l,c=n.maskId,h=c===void 0?null:c,p=n.title,m=p===void 0?null:p,w=n.titleId,P=w===void 0?null:w,C=n.classes,N=C===void 0?[]:C,T=n.attributes,_=T===void 0?{}:T,A=n.styles,x=A===void 0?{}:A;if(e){var O=e.prefix,V=e.iconName,y=e.icon;return qu(B({type:"icon"},e),function(){return Zr("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(m?_["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(P||Us()):(_["aria-hidden"]="true",_.focusable="false")),vp({icons:{main:Rh(y),mask:u?Rh(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:V,transform:B(B({},mn),i),symbol:s,title:m,maskId:h,titleId:P,extra:{attributes:_,styles:x,classes:N}})})}},tP={mixout:function(){return{icon:Zk(eP)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hv,n.nodeCallback=Jk,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Te:r,o=n.callback,s=o===void 0?function(){}:o;return Hv(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,l=r.prefix,u=r.transform,c=r.symbol,h=r.mask,p=r.maskId,m=r.extra;return new Promise(function(w,P){Promise.all([Ch(i,l),h.iconName?Ch(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var N=ap(C,2),T=N[0],_=N[1];w([n,vp({icons:{main:T,mask:_},prefix:l,iconName:i,transform:u,symbol:c,maskId:p,title:o,titleId:s,extra:m,watchable:!0})])}).catch(P)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,u=zu(l);u.length>0&&(i.style=u);var c;return dp(s)&&(c=jn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},nP={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return qu({type:"layer"},function(){Zr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(u){s=s.concat(u.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Js(o)).join(" ")},children:s}]})}}}},rP={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,u=r.attributes,c=u===void 0?{}:u,h=r.styles,p=h===void 0?{}:h;return qu({type:"counter",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),Lk({content:n.toString(),title:o,extra:{attributes:c,styles:p,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Js(l))}})})}}}},iP={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?mn:i,s=r.title,l=s===void 0?null:s,u=r.classes,c=u===void 0?[]:u,h=r.attributes,p=h===void 0?{}:h,m=r.styles,w=m===void 0?{}:m;return qu({type:"text",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),Fv({content:n,transform:B(B({},mn),o),title:l,extra:{attributes:p,styles:w,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Js(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,l=null,u=null;if($1){var c=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();l=h.width/c,u=h.height/c}return G.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Fv({content:n.innerHTML,width:l,height:u,transform:o,title:i,extra:s,watchable:!0})])}}},oP=new RegExp('"',"ug"),qv=[1105920,1112319];function sP(t){var e=t.replace(oP,""),n=_k(e,0),r=n>=qv[0]&&n<=qv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ah(i?e[0]:e),isSecondary:r||i}}function Wv(t,e){var n="".concat(Q2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=co(t.children),s=o.filter(function(y){return y.getAttribute(Ih)===e})[0],l=_r.getComputedStyle(t,e),u=l.getPropertyValue("font-family").match(ek),c=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&h!=="none"&&h!==""){var p=l.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?Oe:we,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Ls[m][u[2].toLowerCase()]:tk[m][c],P=sP(p),C=P.value,N=P.isSecondary,T=u[0].startsWith("FontAwesome"),_=mp(w,C),A=_;if(T){var x=kk(C);x.iconName&&x.prefix&&(_=x.iconName,w=x.prefix)}if(_&&!N&&(!s||s.getAttribute(up)!==w||s.getAttribute(cp)!==A)){t.setAttribute(n,A),s&&t.removeChild(s);var O=Yk(),V=O.extra;V.attributes[Ih]=e,Ch(_,w).then(function(y){var g=vp(B(B({},O),{},{icons:{main:y,mask:gp()},prefix:w,iconName:A,extra:V,watchable:!0})),E=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=g.map(function(I){return ea(I)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function aP(t){return Promise.all([Wv(t,"::before"),Wv(t,"::after")])}function lP(t){return t.parentNode!==document.head&&!~X2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ih)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Kv(t){if(qn)return new Promise(function(e,n){var r=co(t.querySelectorAll("*")).filter(lP).map(aP),i=yp.begin("searchPseudoElements");lw(),Promise.all(r).then(function(){i(),xh(),e()}).catch(function(){i(),xh(),n()})})}var uP={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Kv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Te:r;G.searchPseudoElements&&Kv(i)}}},Gv=!1,cP={mixout:function(){return{dom:{unwatch:function(){lw(),Gv=!0}}}},hooks:function(){return{bootstrap:function(){zv(kh("mutationObserverCallbacks",{}))},noAuto:function(){Wk()},watch:function(n){var r=n.observeMutationsRoot;Gv?xh():zv(kh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},fP={mixout:function(){return{parse:{transform:function(n){return Qv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Qv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(u," ").concat(c," ").concat(h)},m={transform:"translate(".concat(s/2*-1," -256)")},w={outer:l,inner:p,path:m};return{tag:"g",attributes:B({},w.outer),children:[{tag:"g",attributes:B({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:B(B({},r.icon.attributes),w.path)}]}]}}}},cf={x:0,y:0,width:"100%",height:"100%"};function Yv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hP(t){return t.tag==="g"?t.children:[t]}var dP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Hu(i.split(" ").map(function(s){return s.trim()})):gp();return o.prefix||(o.prefix=wr()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,u=n.transform,c=o.width,h=o.icon,p=s.width,m=s.icon,w=hk({transform:u,containerWidth:p,iconWidth:c}),P={tag:"rect",attributes:B(B({},cf),{},{fill:"white"})},C=h.children?{children:h.children.map(Yv)}:{},N={tag:"g",attributes:B({},w.inner),children:[Yv(B({tag:h.tag,attributes:B(B({},h.attributes),w.path)},C))]},T={tag:"g",attributes:B({},w.outer),children:[N]},_="mask-".concat(l||Us()),A="clip-".concat(l||Us()),x={tag:"mask",attributes:B(B({},cf),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,T]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:hP(m)},x]};return r.push(O,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(_,")")},cf)}),{children:r,attributes:i}}}},pP={provides:function(e){var n=!1;_r.matchMedia&&(n=_r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:B(B({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=B(B({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:B(B({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:B(B({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:B(B({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:B(B({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:B(B({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},mP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},gP=[mk,tP,nP,rP,iP,uP,cP,fP,dP,pP,mP];Ck(gP,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;var Nh=zt.parse;zt.findIconDefinition;zt.toHtml;var vP=zt.icon;zt.layer;zt.text;zt.counter;function Xv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xv(Object(n),!0).forEach(function(r){Oi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zl(t){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zl(t)}function Oi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _P(t,e){if(t==null)return{};var n=yP(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Dh(t){return wP(t)||EP(t)||TP(t)||IP()}function wP(t){if(Array.isArray(t))return Oh(t)}function EP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function TP(t,e){if(t){if(typeof t=="string")return Oh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oh(t,e)}}function Oh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function IP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AP(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,p=t.pulse,m=t.fixedWidth,w=t.inverse,P=t.border,C=t.listItem,N=t.flip,T=t.size,_=t.rotation,A=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":w,"fa-border":P,"fa-li":C,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Oi(e,"fa-".concat(T),typeof T<"u"&&T!==null),Oi(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Oi(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Oi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(O){return x[O]?O:null}).filter(function(O){return O})}function SP(t){return t=t-0,t===t}function cw(t){return SP(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var kP=["style"];function PP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function RP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=cw(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[PP(i)]=o:e[i]=o,e},{})}function fw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return fw(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=RP(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[cw(c)]=h}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=_P(n,kP);return i.attrs.style=dn(dn({},i.attrs.style),s),t.apply(void 0,[e.tag,dn(dn({},i.attrs),l)].concat(Dh(r)))}var hw=!1;try{hw=!0}catch{}function CP(){if(!hw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jv(t){if(t&&Zl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Nh.icon)return Nh.icon(t);if(t===null)return null;if(t&&Zl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ff(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Oi({},t,e):{}}var Zv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},us=ne.forwardRef(function(t,e){var n=dn(dn({},Zv),t),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,u=n.titleId,c=n.maskId,h=Jv(r),p=ff("classes",[].concat(Dh(AP(n)),Dh((s||"").split(" ")))),m=ff("transform",typeof n.transform=="string"?Nh.transform(n.transform):n.transform),w=ff("mask",Jv(i)),P=vP(h,dn(dn(dn(dn({},p),m),w),{},{symbol:o,title:l,titleId:u,maskId:c}));if(!P)return CP("Could not find icon",h),null;var C=P.abstract,N={ref:e};return Object.keys(n).forEach(function(T){Zv.hasOwnProperty(T)||(N[T]=n[T])}),bP(C[0],N)});us.displayName="FontAwesomeIcon";us.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var bP=fw.bind(null,ne.createElement),xP={prefix:"fab",iconName:"square-instagram",icon:[448,512,["instagram-square"],"e055","M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"]},NP=xP,DP={prefix:"fab",iconName:"square-twitter",icon:[448,512,["twitter-square"],"f081","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"]},OP=DP,VP={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},LP=VP;function MP(){return K.jsxs("footer",{className:"footer",children:[K.jsxs("div",{className:"footer-left-div",children:[K.jsx("p",{children:"© 2024 Airbnb, Inc"}),K.jsx(Os,{to:"/React-app-Airbnb/",children:"HOME"}),K.jsx(Os,{to:"/React-app-Airbnb/create",children:"NEW CARDS"})]}),K.jsxs("div",{className:"footer-right-div",children:[K.jsx("a",{href:"https://www.facebook.com/airbnb",target:"_blank",rel:"noopener noreferrer",className:"social-icon",children:K.jsx(us,{icon:LP,size:"2x"})}),K.jsx("a",{href:"https://www.twitter.com/airbnb",target:"_blank",rel:"noopener noreferrer",className:"social-icon",children:K.jsx(us,{icon:OP,size:"2x"})}),K.jsx("a",{href:"https://www.instagram.com/airbnb",target:"_blank",rel:"noopener noreferrer",className:"social-icon",children:K.jsx(us,{icon:NP,size:"2x"})})]})]})}const FP="/React-app-Airbnb/images/photogrid.png";function UP(){return K.jsxs("div",{className:"hero",children:[K.jsx("img",{src:FP,className:"hero-image"}),K.jsxs("div",{className:"hero-content",children:[K.jsx("h1",{className:"hero-header",children:"Online Experiences"}),K.jsx("p",{className:"hero-text",children:"Join unique interactive activities led by one-of-a-kind hosts—all without leaving home."})]})]})}const jP="/React-app-Airbnb/images/star.png";function $P(t){let e;return parseInt(t.item.openSpots)===0?e="SOLD OUT":t.item.location==="Online"&&(e="ONLINE"),console.log(typeof t.item.openSpots),K.jsxs("div",{className:"card",children:[e&&K.jsx("div",{className:"card-badge",children:e}),K.jsx("img",{src:`${t.item.coverImg}`,className:"card-image"}),K.jsxs("div",{className:"card-details",children:[K.jsx("img",{className:"card-star",src:jP}),K.jsx("span",{children:t.item.rating}),K.jsxs("span",{className:"gray",children:["(",t.item.reviewCount,") - "]}),K.jsx("span",{className:"gray",children:t.item.location})]}),K.jsx("h2",{className:"card-title",children:t.item.title}),K.jsxs("p",{className:"card-price",children:[K.jsxs("b",{children:["From $",t.item.price," "]}),"/ person"]})]})}const zP="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let BP=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=zP[n[t]&63];return e};var ey={};/**
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
 */const dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,s||(m=64)),r.push(n[h],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||p==null)throw new qP;const m=o<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WP=function(t){const e=dw(t);return pw.encodeByteArray(e,!0)},eu=function(t){return WP(t).replace(/\./g,"")},KP=function(t){try{return pw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QP=()=>GP().__FIREBASE_DEFAULTS__,YP=()=>{if(typeof process>"u"||typeof ey>"u")return;const t=ey.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&KP(t[1]);return e&&JSON.parse(e)},wp=()=>{try{return QP()||YP()||XP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JP=t=>{var e,n;return(n=(e=wp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mw=t=>{const e=JP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gw=()=>{var t;return(t=wp())===null||t===void 0?void 0:t.config};/**
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
 */class ZP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[eu(JSON.stringify(n)),eu(JSON.stringify(s)),""].join(".")}/**
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
 */function eR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tR(){var t;const e=(t=wp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rR(){return!tR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function iR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const oR="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oR,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wu.prototype.create)}}class Wu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?sR(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Wn(i,l,r)}}function sR(t,e){return t.replace(aR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aR=/\{\$([^}]+)}/g;function tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(ty(o)&&ty(s)){if(!tu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ty(t){return t!==null&&typeof t=="object"}/**
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
 */const lR=1e3,uR=2,cR=4*60*60*1e3,fR=.5;function ny(t,e=lR,n=uR){const r=e*Math.pow(n,t),i=Math.round(fR*r*(Math.random()-.5)*2);return Math.min(cR,r+i)}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class hR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pR(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dR(t){return t===Or?void 0:t}function pR(t){return t.instantiationMode==="EAGER"}/**
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
 */class mR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const gR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},vR=ae.INFO,yR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},_R=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ep{constructor(e){this.name=e,this._logLevel=vR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const wR=(t,e)=>e.some(n=>t instanceof n);let ry,iy;function ER(){return ry||(ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TR(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ww=new WeakMap,Vh=new WeakMap,Ew=new WeakMap,hf=new WeakMap,Tp=new WeakMap;function IR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(pr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&ww.set(n,t)}).catch(()=>{}),Tp.set(e,t),e}function AR(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Vh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ew.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SR(t){Lh=t(Lh)}function kR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(df(this),e,...n);return Ew.set(r,e.sort?e.sort():[e]),pr(r)}:TR().includes(t)?function(...e){return t.apply(df(this),e),pr(ww.get(this))}:function(...e){return pr(t.apply(df(this),e))}}function PR(t){return typeof t=="function"?kR(t):(t instanceof IDBTransaction&&AR(t),wR(t,ER())?new Proxy(t,Lh):t)}function pr(t){if(t instanceof IDBRequest)return IR(t);if(hf.has(t))return hf.get(t);const e=PR(t);return e!==t&&(hf.set(t,e),Tp.set(e,t)),e}const df=t=>Tp.get(t);function Tw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=pr(s);return r&&s.addEventListener("upgradeneeded",u=>{r(pr(s.result),u.oldVersion,u.newVersion,pr(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const RR=["get","getKey","getAll","getAllKeys","count"],CR=["put","add","delete","clear"],pf=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pf.get(e))return pf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RR.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return pf.set(e,o),o}SR(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
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
 */class bR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",sy="0.10.5";/**
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
 */const ei=new Ep("@firebase/app"),NR="@firebase/app-compat",DR="@firebase/analytics-compat",OR="@firebase/analytics",VR="@firebase/app-check-compat",LR="@firebase/app-check",MR="@firebase/auth",FR="@firebase/auth-compat",UR="@firebase/database",jR="@firebase/database-compat",$R="@firebase/functions",zR="@firebase/functions-compat",BR="@firebase/installations",HR="@firebase/installations-compat",qR="@firebase/messaging",WR="@firebase/messaging-compat",KR="@firebase/performance",GR="@firebase/performance-compat",QR="@firebase/remote-config",YR="@firebase/remote-config-compat",XR="@firebase/storage",JR="@firebase/storage-compat",ZR="@firebase/firestore",eC="@firebase/vertexai-preview",tC="@firebase/firestore-compat",nC="firebase",rC="10.12.2";/**
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
 */const Fh="[DEFAULT]",iC={[Mh]:"fire-core",[NR]:"fire-core-compat",[OR]:"fire-analytics",[DR]:"fire-analytics-compat",[LR]:"fire-app-check",[VR]:"fire-app-check-compat",[MR]:"fire-auth",[FR]:"fire-auth-compat",[UR]:"fire-rtdb",[jR]:"fire-rtdb-compat",[$R]:"fire-fn",[zR]:"fire-fn-compat",[BR]:"fire-iid",[HR]:"fire-iid-compat",[qR]:"fire-fcm",[WR]:"fire-fcm-compat",[KR]:"fire-perf",[GR]:"fire-perf-compat",[QR]:"fire-rc",[YR]:"fire-rc-compat",[XR]:"fire-gcs",[JR]:"fire-gcs-compat",[ZR]:"fire-fst",[tC]:"fire-fst-compat",[eC]:"fire-vertex","fire-js":"fire-js",[nC]:"fire-js-all"};/**
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
 */const nu=new Map,oC=new Map,Uh=new Map;function ay(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Uh.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Uh.set(e,t);for(const n of nu.values())ay(n,t);for(const n of oC.values())ay(n,t);return!0}function fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Wu("app","Firebase",sC);/**
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
 */class aC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Iw=rC;function Aw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=gw()),!n)throw mr.create("no-options");const o=nu.get(i);if(o){if(tu(n,o.options)&&tu(r,o.config))return o;throw mr.create("duplicate-app",{appName:i})}const s=new mR(i);for(const u of Uh.values())s.addComponent(u);const l=new aC(n,r,s);return nu.set(i,l),l}function Ip(t=Fh){const e=nu.get(t);if(!e&&t===Fh&&gw())return Aw();if(!e)throw mr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=iC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(l.join(" "));return}$n(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lC="firebase-heartbeat-database",uC=1,js="firebase-heartbeat-store";let mf=null;function Sw(){return mf||(mf=Tw(lC,uC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),mf}async function cC(t){try{const n=(await Sw()).transaction(js),r=await n.objectStore(js).get(kw(t));return await n.done,r}catch(e){if(e instanceof Wn)ei.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ei.warn(n.message)}}}async function ly(t,e){try{const r=(await Sw()).transaction(js,"readwrite");await r.objectStore(js).put(e,kw(t)),await r.done}catch(n){if(n instanceof Wn)ei.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ei.warn(r.message)}}}function kw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fC=1024,hC=30*24*60*60*1e3;class dC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=uy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=hC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uy(),{heartbeatsToSend:r,unsentEntries:i}=pC(this._heartbeatsCache.heartbeats),o=eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function uy(){return new Date().toISOString().substring(0,10)}function pC(t,e=fC){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),cy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cy(t){return eu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gC(t){$n(new Tn("platform-logger",e=>new bR(e),"PRIVATE")),$n(new Tn("heartbeat",e=>new dC(e),"PRIVATE")),Qt(Mh,sy,t),Qt(Mh,sy,"esm2017"),Qt("fire-js","")}gC("");var vC="firebase",yC="10.12.2";/**
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
 */Qt(vC,yC,"app");/**
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
 */const Pw="firebasestorage.googleapis.com",Rw="storageBucket",_C=2*60*1e3,wC=10*60*1e3;/**
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
 */class Le extends Wn{constructor(e,n,r=0){super(gf(e),`Firebase Storage: ${n} (${gf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function gf(t){return"storage/"+t}function Ap(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ve.UNKNOWN,t)}function EC(t){return new Le(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TC(t){return new Le(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ve.UNAUTHENTICATED,t)}function AC(){return new Le(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SC(t){return new Le(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kC(){return new Le(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PC(){return new Le(Ve.CANCELED,"User canceled the upload/download.")}function RC(t){return new Le(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function CC(t){return new Le(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bC(){return new Le(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Rw+"' property when initializing the app?")}function xC(){return new Le(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function NC(){return new Le(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function DC(t){return new Le(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jh(t){return new Le(Ve.INVALID_ARGUMENT,t)}function Cw(){return new Le(Ve.APP_DELETED,"The Firebase app was deleted.")}function OC(t){return new Le(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cs(t,e){return new Le(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function jo(t){throw new Le(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw CC(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",l=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},C=n===Pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",T=new RegExp(`^https?://${C}/${i}/${N}`,"i"),A=[{regex:l,indices:u,postModify:o},{regex:w,indices:P,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<A.length;x++){const O=A[x],V=O.regex.exec(e);if(V){const y=V[O.indices.bucket];let g=V[O.indices.path];g||(g=""),r=new Vt(y,g),O.postModify(r);break}}if(r==null)throw RC(e);return r}}class VC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LC(t,e,n){let r=1,i=null,o=null,s=!1,l=0;function u(){return l===2}let c=!1;function h(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(w,u())},N)}function m(){o&&clearTimeout(o)}function w(N,...T){if(c){m();return}if(N){m(),h.call(null,N,...T);return}if(u()||s){m(),h.call(null,N,...T);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let P=!1;function C(N){P||(P=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),o=setTimeout(()=>{s=!0,C(!0)},n),C}function MC(t){t(!1)}/**
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
 */function FC(t){return t!==void 0}function UC(t){return typeof t=="object"&&!Array.isArray(t)}function Sp(t){return typeof t=="string"||t instanceof String}function fy(t){return kp()&&t instanceof Blob}function kp(){return typeof Blob<"u"}function hy(t,e,n,r){if(r<e)throw jh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Pp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
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
 */function jC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class $C{constructor(e,n,r,i,o,s,l,u,c,h,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,P)=>{this.resolve_=w,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ja(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const l=o.getErrorCode()===Hr.NO_ERROR,u=o.getStatus();if(!l||jC(u,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===Hr.ABORT;r(!1,new Ja(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ja(c,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());FC(u)?o(u):o()}catch(u){s(u)}else if(l!==null){const u=Ap();u.serverResponse=l.getErrorText(),this.errorCallback_?s(this.errorCallback_(l,u)):s(u)}else if(i.canceled){const u=this.appDelete_?Cw():PC();s(u)}else{const u=kC();s(u)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=LC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function WC(t,e,n,r,i,o,s=!0){const l=bw(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return HC(c,e),zC(c,n),BC(c,o),qC(c,r),new $C(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
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
 */function KC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GC(...t){const e=KC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(kp())return new Blob(t);throw new Le(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function YC(t){if(typeof atob>"u")throw DC("base-64");return atob(t)}/**
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
 */const gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vf{constructor(e,n){this.data=e,this.contentType=n||null}}function XC(t,e){switch(t){case gn.RAW:return new vf(xw(e));case gn.BASE64:case gn.BASE64URL:return new vf(Nw(t,e));case gn.DATA_URL:return new vf(ZC(e),eb(e))}throw Ap()}function xw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function JC(t){let e;try{e=decodeURIComponent(t)}catch{throw cs(gn.DATA_URL,"Malformed data URL.")}return xw(e)}function Nw(t,e){switch(t){case gn.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw cs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case gn.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw cs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=YC(e)}catch(i){throw i.message.includes("polyfill")?i:cs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Dw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw cs(gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=tb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ZC(t){const e=new Dw(t);return e.base64?Nw(gn.BASE64,e.rest):JC(e.rest)}function eb(t){return new Dw(t).contentType}function tb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class nr{constructor(e,n){let r=0,i="";fy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fy(this.data_)){const r=this.data_,i=QC(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(kp()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(GC.apply(null,n))}else{const n=e.map(s=>Sp(s)?XC(gn.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let l=0;l<s.length;l++)i[o++]=s[l]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Ow(t){let e;try{e=JSON.parse(t)}catch{return null}return UC(e)?e:null}/**
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
 */function nb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Vw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ib(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ib}}let Za=null;function ob(t){return!Sp(t)||t.length<2?t:Vw(t)}function Lw(){if(Za)return Za;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(o,s){return ob(s)}const n=new vt("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Za=t,Za}function sb(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new Vt(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function ab(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return sb(r,t),r}function Mw(t,e,n){const r=Ow(e);return r===null?null:ab(t,r,n)}function lb(t,e,n,r){const i=Ow(e);if(i===null||!Sp(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(c=>{const h=t.bucket,p=t.fullPath,m="/b/"+s(h)+"/o/"+s(p),w=Pp(m,n,r),P=bw({alt:"media",token:c});return w+P})[0]}function ub(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Fw{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Uw(t){if(!t)throw Ap()}function cb(t,e){function n(r,i){const o=Mw(t,i,e);return Uw(o!==null),o}return n}function fb(t,e){function n(r,i){const o=Mw(t,i,e);return Uw(o!==null),lb(o,i,t.host,t._protocol)}return n}function jw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=AC():i=IC():n.getStatus()===402?i=TC(t.bucket):n.getStatus()===403?i=SC(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function hb(t){const e=jw(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=EC(t.path)),o.serverResponse=i.serverResponse,o}return n}function db(t,e,n){const r=e.fullServerUrl(),i=Pp(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,l=new Fw(i,o,fb(t,n),s);return l.errorHandler=hb(e),l}function pb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=pb(null,e)),r}function gb(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let x=0;x<2;x++)A=A+Math.random().toString().slice(2);return A}const u=l();s["Content-Type"]="multipart/related; boundary="+u;const c=mb(e,r,i),h=ub(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=nr.getBlob(p,r,m);if(w===null)throw xC();const P={name:c.fullPath},C=Pp(o,t.host,t._protocol),N="POST",T=t.maxUploadRetryTime,_=new Fw(C,N,cb(t,n),T);return _.urlParams=P,_.headers=s,_.body=w.uploadData(),_.errorHandler=jw(e),_}class vb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw jo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yb extends vb{initXhr(){this.xhr_.responseType="text"}}function $w(){return new yb}/**
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
 */class ti{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vw(this._location.path)}get storage(){return this._service}get parent(){const e=nb(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OC(e)}}function _b(t,e,n){t._throwIfRoot("uploadBytes");const r=gb(t.storage,t._location,Lw(),new nr(e,!0),n);return t.storage.makeRequestWithTokens(r,$w).then(i=>({metadata:i,ref:t}))}function wb(t){t._throwIfRoot("getDownloadURL");const e=db(t.storage,t._location,Lw());return t.storage.makeRequestWithTokens(e,$w).then(n=>{if(n===null)throw NC();return n})}function Eb(t,e){const n=rb(t._location.path,e),r=new Vt(t._location.bucket,n);return new ti(t.storage,r)}/**
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
 */function Tb(t){return/^[A-Za-z]+:\/\//.test(t)}function Ib(t,e){return new ti(t,e)}function zw(t,e){if(t instanceof Rp){const n=t;if(n._bucket==null)throw bC();const r=new ti(n,n._bucket);return e!=null?zw(r,e):r}else return e!==void 0?Eb(t,e):t}function Ab(t,e){if(e&&Tb(e)){if(t instanceof Rp)return Ib(t,e);throw jh("To use ref(service, url), the first argument must be a Storage instance.")}else return zw(t,e)}function dy(t,e){const n=e==null?void 0:e[Rw];return n==null?null:Vt.makeFromBucketSpec(n,t)}function Sb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:vw(i,t.app.options.projectId))}class Rp{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_C,this._maxUploadRetryTime=wC,this._requests=new Set,i!=null?this._bucket=Vt.makeFromBucketSpec(i,this._host):this._bucket=dy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=dy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new VC(Cw());{const s=WC(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const py="@firebase/storage",my="0.12.5";/**
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
 */const Bw="storage";function kb(t,e,n){return t=Zt(t),_b(t,e,n)}function Pb(t){return t=Zt(t),wb(t)}function Hw(t,e){return t=Zt(t),Ab(t,e)}function Rb(t=Ip(),e){t=Zt(t);const r=fo(t,Bw).getImmediate({identifier:e}),i=mw("storage");return i&&Cb(r,...i),r}function Cb(t,e,n,r={}){Sb(t,e,n,r)}function bb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Rp(n,r,i,e,Iw)}function xb(){$n(new Tn(Bw,bb,"PUBLIC").setMultipleInstances(!0)),Qt(py,my,""),Qt(py,my,"esm2017")}xb();var gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,qw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,g){function E(){}E.prototype=g.prototype,y.D=g.prototype,y.prototype=new E,y.prototype.constructor=y,y.C=function(I,k,R){for(var S=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)S[pe-2]=arguments[pe];return g.prototype[k].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,g,E){E||(E=0);var I=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)I[k]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(k=0;16>k;++k)I[k]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=y.g[0],E=y.g[1],k=y.g[2];var R=y.g[3],S=g+(R^E&(k^R))+I[0]+3614090360&4294967295;g=E+(S<<7&4294967295|S>>>25),S=R+(k^g&(E^k))+I[1]+3905402710&4294967295,R=g+(S<<12&4294967295|S>>>20),S=k+(E^R&(g^E))+I[2]+606105819&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(g^k&(R^g))+I[3]+3250441966&4294967295,E=k+(S<<22&4294967295|S>>>10),S=g+(R^E&(k^R))+I[4]+4118548399&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(k^g&(E^k))+I[5]+1200080426&4294967295,R=g+(S<<12&4294967295|S>>>20),S=k+(E^R&(g^E))+I[6]+2821735955&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(g^k&(R^g))+I[7]+4249261313&4294967295,E=k+(S<<22&4294967295|S>>>10),S=g+(R^E&(k^R))+I[8]+1770035416&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(k^g&(E^k))+I[9]+2336552879&4294967295,R=g+(S<<12&4294967295|S>>>20),S=k+(E^R&(g^E))+I[10]+4294925233&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(g^k&(R^g))+I[11]+2304563134&4294967295,E=k+(S<<22&4294967295|S>>>10),S=g+(R^E&(k^R))+I[12]+1804603682&4294967295,g=E+(S<<7&4294967295|S>>>25),S=R+(k^g&(E^k))+I[13]+4254626195&4294967295,R=g+(S<<12&4294967295|S>>>20),S=k+(E^R&(g^E))+I[14]+2792965006&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(g^k&(R^g))+I[15]+1236535329&4294967295,E=k+(S<<22&4294967295|S>>>10),S=g+(k^R&(E^k))+I[1]+4129170786&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(g^E))+I[6]+3225465664&4294967295,R=g+(S<<9&4294967295|S>>>23),S=k+(g^E&(R^g))+I[11]+643717713&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(k^R))+I[0]+3921069994&4294967295,E=k+(S<<20&4294967295|S>>>12),S=g+(k^R&(E^k))+I[5]+3593408605&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(g^E))+I[10]+38016083&4294967295,R=g+(S<<9&4294967295|S>>>23),S=k+(g^E&(R^g))+I[15]+3634488961&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(k^R))+I[4]+3889429448&4294967295,E=k+(S<<20&4294967295|S>>>12),S=g+(k^R&(E^k))+I[9]+568446438&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(g^E))+I[14]+3275163606&4294967295,R=g+(S<<9&4294967295|S>>>23),S=k+(g^E&(R^g))+I[3]+4107603335&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(k^R))+I[8]+1163531501&4294967295,E=k+(S<<20&4294967295|S>>>12),S=g+(k^R&(E^k))+I[13]+2850285829&4294967295,g=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(g^E))+I[2]+4243563512&4294967295,R=g+(S<<9&4294967295|S>>>23),S=k+(g^E&(R^g))+I[7]+1735328473&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^g&(k^R))+I[12]+2368359562&4294967295,E=k+(S<<20&4294967295|S>>>12),S=g+(E^k^R)+I[5]+4294588738&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^k)+I[8]+2272392833&4294967295,R=g+(S<<11&4294967295|S>>>21),S=k+(R^g^E)+I[11]+1839030562&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^g)+I[14]+4259657740&4294967295,E=k+(S<<23&4294967295|S>>>9),S=g+(E^k^R)+I[1]+2763975236&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^k)+I[4]+1272893353&4294967295,R=g+(S<<11&4294967295|S>>>21),S=k+(R^g^E)+I[7]+4139469664&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^g)+I[10]+3200236656&4294967295,E=k+(S<<23&4294967295|S>>>9),S=g+(E^k^R)+I[13]+681279174&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^k)+I[0]+3936430074&4294967295,R=g+(S<<11&4294967295|S>>>21),S=k+(R^g^E)+I[3]+3572445317&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^g)+I[6]+76029189&4294967295,E=k+(S<<23&4294967295|S>>>9),S=g+(E^k^R)+I[9]+3654602809&4294967295,g=E+(S<<4&4294967295|S>>>28),S=R+(g^E^k)+I[12]+3873151461&4294967295,R=g+(S<<11&4294967295|S>>>21),S=k+(R^g^E)+I[15]+530742520&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^g)+I[2]+3299628645&4294967295,E=k+(S<<23&4294967295|S>>>9),S=g+(k^(E|~R))+I[0]+4096336452&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~k))+I[7]+1126891415&4294967295,R=g+(S<<10&4294967295|S>>>22),S=k+(g^(R|~E))+I[14]+2878612391&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~g))+I[5]+4237533241&4294967295,E=k+(S<<21&4294967295|S>>>11),S=g+(k^(E|~R))+I[12]+1700485571&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~k))+I[3]+2399980690&4294967295,R=g+(S<<10&4294967295|S>>>22),S=k+(g^(R|~E))+I[10]+4293915773&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~g))+I[1]+2240044497&4294967295,E=k+(S<<21&4294967295|S>>>11),S=g+(k^(E|~R))+I[8]+1873313359&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~k))+I[15]+4264355552&4294967295,R=g+(S<<10&4294967295|S>>>22),S=k+(g^(R|~E))+I[6]+2734768916&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~g))+I[13]+1309151649&4294967295,E=k+(S<<21&4294967295|S>>>11),S=g+(k^(E|~R))+I[4]+4149444226&4294967295,g=E+(S<<6&4294967295|S>>>26),S=R+(E^(g|~k))+I[11]+3174756917&4294967295,R=g+(S<<10&4294967295|S>>>22),S=k+(g^(R|~E))+I[2]+718787259&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~g))+I[9]+3951481745&4294967295,y.g[0]=y.g[0]+g&4294967295,y.g[1]=y.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+R&4294967295}r.prototype.u=function(y,g){g===void 0&&(g=y.length);for(var E=g-this.blockSize,I=this.B,k=this.h,R=0;R<g;){if(k==0)for(;R<=E;)i(this,y,R),R+=this.blockSize;if(typeof y=="string"){for(;R<g;)if(I[k++]=y.charCodeAt(R++),k==this.blockSize){i(this,I),k=0;break}}else for(;R<g;)if(I[k++]=y[R++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var g=1;g<y.length-8;++g)y[g]=0;var E=8*this.o;for(g=y.length-8;g<y.length;++g)y[g]=E&255,E/=256;for(this.u(y),y=Array(16),g=E=0;4>g;++g)for(var I=0;32>I;I+=8)y[E++]=this.g[g]>>>I&255;return y};function o(y,g){var E=l;return Object.prototype.hasOwnProperty.call(E,y)?E[y]:E[y]=g(y)}function s(y,g){this.h=g;for(var E=[],I=!0,k=y.length-1;0<=k;k--){var R=y[k]|0;I&&R==g||(E[k]=R,I=!1)}this.g=E}var l={};function u(y){return-128<=y&&128>y?o(y,function(g){return new s([g|0],0>g?-1:0)}):new s([y|0],0>y?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return p;if(0>y)return N(c(-y));for(var g=[],E=1,I=0;y>=E;I++)g[I]=y/E|0,E*=4294967296;return new s(g,0)}function h(y,g){if(y.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(y.charAt(0)=="-")return N(h(y.substring(1),g));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),I=p,k=0;k<y.length;k+=8){var R=Math.min(8,y.length-k),S=parseInt(y.substring(k,k+R),g);8>R?(R=c(Math.pow(g,R)),I=I.j(R).add(c(S))):(I=I.j(E),I=I.add(c(S)))}return I}var p=u(0),m=u(1),w=u(16777216);t=s.prototype,t.m=function(){if(C(this))return-N(this).m();for(var y=0,g=1,E=0;E<this.g.length;E++){var I=this.i(E);y+=(0<=I?I:4294967296+I)*g,g*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(C(this))return"-"+N(this).toString(y);for(var g=c(Math.pow(y,6)),E=this,I="";;){var k=x(E,g).g;E=T(E,k.j(g));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(y);if(E=k,P(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var g=0;g<y.g.length;g++)if(y.g[g]!=0)return!1;return!0}function C(y){return y.h==-1}t.l=function(y){return y=T(this,y),C(y)?-1:P(y)?0:1};function N(y){for(var g=y.g.length,E=[],I=0;I<g;I++)E[I]=~y.g[I];return new s(E,~y.h).add(m)}t.abs=function(){return C(this)?N(this):this},t.add=function(y){for(var g=Math.max(this.g.length,y.g.length),E=[],I=0,k=0;k<=g;k++){var R=I+(this.i(k)&65535)+(y.i(k)&65535),S=(R>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);I=S>>>16,R&=65535,S&=65535,E[k]=S<<16|R}return new s(E,E[E.length-1]&-2147483648?-1:0)};function T(y,g){return y.add(N(g))}t.j=function(y){if(P(this)||P(y))return p;if(C(this))return C(y)?N(this).j(N(y)):N(N(this).j(y));if(C(y))return N(this.j(N(y)));if(0>this.l(w)&&0>y.l(w))return c(this.m()*y.m());for(var g=this.g.length+y.g.length,E=[],I=0;I<2*g;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<y.g.length;k++){var R=this.i(I)>>>16,S=this.i(I)&65535,pe=y.i(k)>>>16,Se=y.i(k)&65535;E[2*I+2*k]+=S*Se,_(E,2*I+2*k),E[2*I+2*k+1]+=R*Se,_(E,2*I+2*k+1),E[2*I+2*k+1]+=S*pe,_(E,2*I+2*k+1),E[2*I+2*k+2]+=R*pe,_(E,2*I+2*k+2)}for(I=0;I<g;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=g;I<2*g;I++)E[I]=0;return new s(E,0)};function _(y,g){for(;(y[g]&65535)!=y[g];)y[g+1]+=y[g]>>>16,y[g]&=65535,g++}function A(y,g){this.g=y,this.h=g}function x(y,g){if(P(g))throw Error("division by zero");if(P(y))return new A(p,p);if(C(y))return g=x(N(y),g),new A(N(g.g),N(g.h));if(C(g))return g=x(y,N(g)),new A(N(g.g),g.h);if(30<y.g.length){if(C(y)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=g;0>=I.l(y);)E=O(E),I=O(I);var k=V(E,1),R=V(I,1);for(I=V(I,2),E=V(E,2);!P(I);){var S=R.add(I);0>=S.l(y)&&(k=k.add(E),R=S),I=V(I,1),E=V(E,1)}return g=T(y,k.j(g)),new A(k,g)}for(k=p;0<=y.l(g);){for(E=Math.max(1,Math.floor(y.m()/g.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=c(E),S=R.j(g);C(S)||0<S.l(y);)E-=I,R=c(E),S=R.j(g);P(R)&&(R=m),k=k.add(R),y=T(y,S)}return new A(k,y)}t.A=function(y){return x(this,y).h},t.and=function(y){for(var g=Math.max(this.g.length,y.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)&y.i(I);return new s(E,this.h&y.h)},t.or=function(y){for(var g=Math.max(this.g.length,y.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)|y.i(I);return new s(E,this.h|y.h)},t.xor=function(y){for(var g=Math.max(this.g.length,y.g.length),E=[],I=0;I<g;I++)E[I]=this.i(I)^y.i(I);return new s(E,this.h^y.h)};function O(y){for(var g=y.g.length+1,E=[],I=0;I<g;I++)E[I]=y.i(I)<<1|y.i(I-1)>>>31;return new s(E,y.h)}function V(y,g){var E=g>>5;g%=32;for(var I=y.g.length-E,k=[],R=0;R<I;R++)k[R]=0<g?y.i(R+E)>>>g|y.i(R+E+1)<<32-g:y.i(R+E);return new s(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qw=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=h,qr=s}).apply(typeof gy<"u"?gy:typeof self<"u"?self:typeof window<"u"?window:{});var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ww,Kw,Ko,Gw,_l,$h,Qw,Yw,Xw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,d){return a==Array.prototype||a==Object.prototype||(a[f]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof el=="object"&&el];for(var f=0;f<a.length;++f){var d=a[f];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var d=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var b=a[v];if(!(b in d))break e;d=d[b]}a=a[a.length-1],v=d[a],f=f(v),f!=v&&f!=null&&e(d,a,{configurable:!0,writable:!0,value:f})}}function o(a,f){a instanceof String&&(a+="");var d=0,v=!1,b={next:function(){if(!v&&d<a.length){var D=d++;return{value:f(D,a[D]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return o(this,function(f,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,d){return a.call.apply(a.bind,arguments)}function p(a,f,d){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),a.apply(f,b)}}return function(){return a.apply(f,arguments)}}function m(a,f,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function w(a,f){var d=Array.prototype.slice.call(arguments,1);return function(){var v=d.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function P(a,f){function d(){}d.prototype=f.prototype,a.aa=f.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(v,b,D){for(var z=Array(arguments.length-2),de=2;de<arguments.length;de++)z[de-2]=arguments[de];return f.prototype[b].apply(v,z)}}function C(a){const f=a.length;if(0<f){const d=Array(f);for(let v=0;v<f;v++)d[v]=a[v];return d}return[]}function N(a,f){for(let d=1;d<arguments.length;d++){const v=arguments[d];if(u(v)){const b=a.length||0,D=v.length||0;a.length=b+D;for(let z=0;z<D;z++)a[b+z]=v[z]}else a.push(v)}}class T{constructor(f,d){this.i=f,this.j=d,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var O=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function V(a,f,d){for(const v in a)f.call(d,a[v],v,a)}function y(a,f){for(const d in a)f.call(void 0,a[d],d,a)}function g(a){const f={};for(const d in a)f[d]=a[d];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,f){let d,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(d in v)a[d]=v[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(v,d)&&(a[d]=v[d])}}function k(a){var f=1;a=a.split(":");const d=[];for(;0<f&&a.length;)d.push(a.shift()),f--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=j;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class pe{constructor(){this.h=this.g=null}add(f,d){const v=Se.get();v.set(f,d),this.h?this.h.next=v:this.g=v,this.h=v}}var Se=new T(()=>new Bt,a=>a.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(f,d){this.h=f,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,$=!1,j=new pe,F=()=>{const a=l.Promise.resolve(void 0);bt=()=>{a.then(Q)}};var Q=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){R(d)}var f=Se;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}$=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,f),l.removeEventListener("test",d,f)}catch{}return a}();function ke(a,f){if(J.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(O){e:{try{x(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else d=="mouseover"?f=a.fromElement:d=="mouseout"&&(f=a.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Me[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ke.aa.h.call(this)}}P(ke,J);var Me={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Sn=0;function aa(a,f,d,v,b){this.listener=a,this.proxy=null,this.src=f,this.type=d,this.capture=!!v,this.ha=b,this.key=++Sn,this.da=this.fa=!1}function la(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ua(a){this.src=a,this.g={},this.h=0}ua.prototype.add=function(a,f,d,v,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=lc(a,f,v,b);return-1<z?(f=a[z],d||(f.fa=!1)):(f=new aa(f,this.src,D,!!v,b),f.fa=d,a.push(f)),f};function ac(a,f){var d=f.type;if(d in a.g){var v=a.g[d],b=Array.prototype.indexOf.call(v,f,void 0),D;(D=0<=b)&&Array.prototype.splice.call(v,b,1),D&&(la(f),a.g[d].length==0&&(delete a.g[d],a.h--))}}function lc(a,f,d,v){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==f&&D.capture==!!d&&D.ha==v)return b}return-1}var uc="closure_lm_"+(1e6*Math.random()|0),cc={};function am(a,f,d,v,b){if(Array.isArray(f)){for(var D=0;D<f.length;D++)am(a,f[D],d,v,b);return null}return d=cm(d),a&&a[xe]?a.K(f,d,c(v)?!!v.capture:!!v,b):LT(a,f,d,!1,v,b)}function LT(a,f,d,v,b,D){if(!f)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,de=hc(a);if(de||(a[uc]=de=new ua(a)),d=de.add(f,d,v,z,D),d.proxy)return d;if(v=MT(),d.proxy=v,v.src=a,v.listener=d,a.addEventListener)me||(b=z),b===void 0&&(b=!1),a.addEventListener(f.toString(),v,b);else if(a.attachEvent)a.attachEvent(um(f.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return d}function MT(){function a(d){return f.call(a.src,a.listener,d)}const f=FT;return a}function lm(a,f,d,v,b){if(Array.isArray(f))for(var D=0;D<f.length;D++)lm(a,f[D],d,v,b);else v=c(v)?!!v.capture:!!v,d=cm(d),a&&a[xe]?(a=a.i,f=String(f).toString(),f in a.g&&(D=a.g[f],d=lc(D,d,v,b),-1<d&&(la(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[f],a.h--)))):a&&(a=hc(a))&&(f=a.g[f.toString()],a=-1,f&&(a=lc(f,d,v,b)),(d=-1<a?f[a]:null)&&fc(d))}function fc(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[xe])ac(f.i,a);else{var d=a.type,v=a.proxy;f.removeEventListener?f.removeEventListener(d,v,a.capture):f.detachEvent?f.detachEvent(um(d),v):f.addListener&&f.removeListener&&f.removeListener(v),(d=hc(f))?(ac(d,a),d.h==0&&(d.src=null,f[uc]=null)):la(a)}}}function um(a){return a in cc?cc[a]:cc[a]="on"+a}function FT(a,f){if(a.da)a=!0;else{f=new ke(f,this);var d=a.listener,v=a.ha||a.src;a.fa&&fc(a),a=d.call(v,f)}return a}function hc(a){return a=a[uc],a instanceof ua?a:null}var dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function cm(a){return typeof a=="function"?a:(a[dc]||(a[dc]=function(f){return a.handleEvent(f)}),a[dc])}function it(){H.call(this),this.i=new ua(this),this.M=this,this.F=null}P(it,H),it.prototype[xe]=!0,it.prototype.removeEventListener=function(a,f,d,v){lm(this,a,f,d,v)};function mt(a,f){var d,v=a.F;if(v)for(d=[];v;v=v.F)d.push(v);if(a=a.M,v=f.type||f,typeof f=="string")f=new J(f,a);else if(f instanceof J)f.target=f.target||a;else{var b=f;f=new J(v,a),I(f,b)}if(b=!0,d)for(var D=d.length-1;0<=D;D--){var z=f.g=d[D];b=ca(z,v,!0,f)&&b}if(z=f.g=a,b=ca(z,v,!0,f)&&b,b=ca(z,v,!1,f)&&b,d)for(D=0;D<d.length;D++)z=f.g=d[D],b=ca(z,v,!1,f)&&b}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var d=a.g[f],v=0;v<d.length;v++)la(d[v]);delete a.g[f],a.h--}}this.F=null},it.prototype.K=function(a,f,d,v){return this.i.add(String(a),f,!1,d,v)},it.prototype.L=function(a,f,d,v){return this.i.add(String(a),f,!0,d,v)};function ca(a,f,d,v){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,D=0;D<f.length;++D){var z=f[D];if(z&&!z.da&&z.capture==d){var de=z.listener,Xe=z.ha||z.src;z.fa&&ac(a.i,z),b=de.call(Xe,v)!==!1&&b}}return b&&!v.defaultPrevented}function fm(a,f,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function hm(a){a.g=fm(()=>{a.g=null,a.i&&(a.i=!1,hm(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class UT extends H{constructor(f,d){super(),this.m=f,this.l=d,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:hm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(a){H.call(this),this.h=a,this.g={}}P(vo,H);var dm=[];function pm(a){V(a.g,function(f,d){this.g.hasOwnProperty(d)&&fc(f)},a),a.g={}}vo.prototype.N=function(){vo.aa.N.call(this),pm(this)},vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pc=l.JSON.stringify,jT=l.JSON.parse,$T=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mc(){}mc.prototype.h=null;function mm(a){return a.h||(a.h=a.i())}function gm(){}var yo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gc(){J.call(this,"d")}P(gc,J);function vc(){J.call(this,"c")}P(vc,J);var Rr={},vm=null;function fa(){return vm=vm||new it}Rr.La="serverreachability";function ym(a){J.call(this,Rr.La,a)}P(ym,J);function _o(a){const f=fa();mt(f,new ym(f))}Rr.STAT_EVENT="statevent";function _m(a,f){J.call(this,Rr.STAT_EVENT,a),this.stat=f}P(_m,J);function gt(a){const f=fa();mt(f,new _m(f,a))}Rr.Ma="timingevent";function wm(a,f){J.call(this,Rr.Ma,a),this.size=f}P(wm,J);function wo(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Eo(){this.g=!0}Eo.prototype.xa=function(){this.g=!1};function zT(a,f,d,v,b,D){a.info(function(){if(a.g)if(D)for(var z="",de=D.split("&"),Xe=0;Xe<de.length;Xe++){var ue=de[Xe].split("=");if(1<ue.length){var ot=ue[0];ue=ue[1];var st=ot.split("_");z=2<=st.length&&st[1]=="type"?z+(ot+"="+ue+"&"):z+(ot+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+f+`
`+d+`
`+z})}function BT(a,f,d,v,b,D,z){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+f+`
`+d+`
`+D+" "+z})}function hi(a,f,d,v){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+qT(a,d)+(v?" "+v:"")})}function HT(a,f){a.info(function(){return"TIMEOUT: "+f})}Eo.prototype.info=function(){};function qT(a,f){if(!a.g)return f;if(!f)return null;try{var d=JSON.parse(f);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var v=d[a];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return pc(d)}catch{return f}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Em={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yc;function da(){}P(da,mc),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},yc=new da;function Kn(a,f,d,v){this.j=a,this.i=f,this.l=d,this.R=v||1,this.U=new vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tm}function Tm(){this.i=null,this.g="",this.h=!1}var Im={},_c={};function wc(a,f,d){a.L=1,a.v=va(kn(f)),a.m=d,a.P=!0,Am(a,null)}function Am(a,f){a.F=Date.now(),pa(a),a.A=kn(a.v);var d=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Fm(d.i,"t",v),a.C=0,d=a.j.J,a.h=new Tm,a.g=ng(a.j,d?f:null,!a.m),0<a.O&&(a.M=new UT(m(a.Y,a,a.g),a.O)),f=a.U,d=a.g,v=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(dm[0]=b.toString()),b=dm);for(var D=0;D<b.length;D++){var z=am(d,b[D],v||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),_o(),zT(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const f=this.M;f&&Pn(a)==3?f.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const st=Pn(this.g);var f=this.g.Ba();const mi=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||qm(this.g)))){this.J||st!=4||f==7||(f==8||0>=mi?_o(3):_o(2)),Ec(this);var d=this.g.Z();this.X=d;t:if(Sm(this)){var v=qm(this.g);a="";var b=v.length,D=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),To(this);var z="";break t}this.h.i=new l.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,a+=this.h.i.decode(v[f],{stream:!(D&&f==b-1)});v.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,BT(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Xe=this.g;if((de=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var ue=de;break t}}ue=null}if(d=ue)hi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tc(this,d);else{this.o=!1,this.s=3,gt(12),Cr(this),To(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<z.length;)if(en=WT(this,z),en==_c){st==4&&(this.s=4,gt(14),d=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Im){this.s=4,gt(15),hi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else hi(this.i,this.l,en,null),Tc(this,en);if(Sm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||z.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)hi(this.i,this.l,z,"[Invalid Chunked Response]"),Cr(this),To(this);else if(0<z.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Rc(ot),ot.M=!0,gt(11))}}else hi(this.i,this.l,z,null),Tc(this,z);st==4&&Cr(this),this.o&&!this.J&&(st==4?Jm(this.j,this):(this.o=!1,pa(this)))}else uI(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Cr(this),To(this)}}}catch{}finally{}};function Sm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function WT(a,f){var d=a.C,v=f.indexOf(`
`,d);return v==-1?_c:(d=Number(f.substring(d,v)),isNaN(d)?Im:(v+=1,v+d>f.length?_c:(f=f.slice(v,v+d),a.C=v+d,f)))}Kn.prototype.cancel=function(){this.J=!0,Cr(this)};function pa(a){a.S=Date.now()+a.I,km(a,a.I)}function km(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wo(m(a.ba,a),f)}function Ec(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(HT(this.i,this.A),this.L!=2&&(_o(),gt(17)),Cr(this),this.s=2,To(this)):km(this,this.S-a)};function To(a){a.j.G==0||a.J||Jm(a.j,a)}function Cr(a){Ec(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,pm(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Tc(a,f){try{var d=a.j;if(d.G!=0&&(d.g==a||Ic(d.h,a))){if(!a.K&&Ic(d.h,a)&&d.G==3){try{var v=d.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ta(d),wa(d);else break e;Pc(d),gt(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=wo(m(d.Za,d),6e3));if(1>=Cm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xr(d,11)}else if((a.K||d.g==a)&&Ta(d),!_(f))for(b=d.Da.g.parse(f),f=0;f<b.length;f++){let ue=b[f];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const ot=ue[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const st=ue[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const mi=ue[5];mi!=null&&typeof mi=="number"&&0<mi&&(v=1.5*mi,d.L=v,d.j.info("backChannelRequestTimeoutMs_="+v)),v=d;const en=a.g;if(en){const Aa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var D=v.h;D.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ac(D,D.h),D.h=null))}if(v.D){const Cc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Cc&&(v.ya=Cc,ye(v.I,v.D,Cc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),v=d;var z=a;if(v.qa=tg(v,v.J?v.ia:null,v.W),z.K){bm(v.h,z);var de=z,Xe=v.L;Xe&&(de.I=Xe),de.B&&(Ec(de),pa(de)),v.g=z}else Ym(v);0<d.i.length&&Ea(d)}else ue[0]!="stop"&&ue[0]!="close"||xr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?xr(d,7):kc(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}_o(4)}catch{}}var KT=class{constructor(a,f){this.g=a,this.map=f}};function Pm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cm(a){return a.h?1:a.g?a.g.size:0}function Ic(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ac(a,f){a.g?a.g.add(f):a.h=f}function bm(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Pm.prototype.cancel=function(){if(this.i=xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const d of a.g.values())f=f.concat(d.D);return f}return C(a.i)}function GT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],d=a.length,v=0;v<d;v++)f.push(a[v]);return f}f=[],d=0;for(v in a)f[d++]=a[v];return f}function QT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var d=0;d<a;d++)f.push(d);return f}f=[],d=0;for(const v in a)f[d++]=v;return f}}}function Nm(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var d=QT(a),v=GT(a),b=v.length,D=0;D<b;D++)f.call(void 0,v[D],d&&d[D],a)}var Dm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YT(a,f){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var v=a[d].indexOf("="),b=null;if(0<=v){var D=a[d].substring(0,v);b=a[d].substring(v+1)}else D=a[d];f(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var f=a.i,d=new So;d.i=f.i,f.g&&(d.g=new Map(f.g),d.h=f.h),Om(this,d),this.m=a.m}else a&&(f=String(a).match(Dm))?(this.h=!1,ma(this,f[1]||"",!0),this.o=Io(f[2]||""),this.g=Io(f[3]||"",!0),ga(this,f[4]),this.l=Io(f[5]||"",!0),Om(this,f[6]||"",!0),this.m=Io(f[7]||"")):(this.h=!1,this.i=new So(null,this.h))}br.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Ao(f,Vm,!0),":");var d=this.g;return(d||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Ao(f,Vm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ao(d,d.charAt(0)=="/"?ZT:JT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ao(d,tI)),a.join("")};function kn(a){return new br(a)}function ma(a,f,d){a.j=d?Io(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Om(a,f,d){f instanceof So?(a.i=f,nI(a.i,a.h)):(d||(f=Ao(f,eI)),a.i=new So(f,a.h))}function ye(a,f,d){a.i.set(f,d)}function va(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Io(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ao(a,f,d){return typeof a=="string"?(a=encodeURI(a).replace(f,XT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function XT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vm=/[#\/\?@]/g,JT=/[#\?:]/g,ZT=/[#\?]/g,eI=/[#\?@]/g,tI=/#/g;function So(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&YT(a.i,function(f,d){a.add(decodeURIComponent(f.replace(/\+/g," ")),d)}))}t=So.prototype,t.add=function(a,f){Gn(this),this.i=null,a=di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(f),this.h+=1,this};function Lm(a,f){Gn(a),f=di(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Mm(a,f){return Gn(a),f=di(a,f),a.g.has(f)}t.forEach=function(a,f){Gn(this),this.g.forEach(function(d,v){d.forEach(function(b){a.call(f,b,v,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),d=[];for(let v=0;v<f.length;v++){const b=a[v];for(let D=0;D<b.length;D++)d.push(f[v])}return d},t.V=function(a){Gn(this);let f=[];if(typeof a=="string")Mm(this,a)&&(f=f.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)f=f.concat(a[d])}return f},t.set=function(a,f){return Gn(this),this.i=null,a=di(this,a),Mm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Fm(a,f,d){Lm(a,f),0<d.length&&(a.i=null,a.g.set(di(a,f),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var d=0;d<f.length;d++){var v=f[d];const D=encodeURIComponent(String(v)),z=this.V(v);for(v=0;v<z.length;v++){var b=D;z[v]!==""&&(b+="="+encodeURIComponent(String(z[v]))),a.push(b)}}return this.i=a.join("&")};function di(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function nI(a,f){f&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,v){var b=v.toLowerCase();v!=b&&(Lm(this,v),Fm(this,b,d))},a)),a.j=f}function rI(a,f){const d=new Eo;if(l.Image){const v=new Image;v.onload=w(Qn,d,"TestLoadImage: loaded",!0,f,v),v.onerror=w(Qn,d,"TestLoadImage: error",!1,f,v),v.onabort=w(Qn,d,"TestLoadImage: abort",!1,f,v),v.ontimeout=w(Qn,d,"TestLoadImage: timeout",!1,f,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else f(!1)}function iI(a,f){const d=new Eo,v=new AbortController,b=setTimeout(()=>{v.abort(),Qn(d,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:v.signal}).then(D=>{clearTimeout(b),D.ok?Qn(d,"TestPingServer: ok",!0,f):Qn(d,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Qn(d,"TestPingServer: error",!1,f)})}function Qn(a,f,d,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(d)}catch{}}function oI(){this.g=new $T}function sI(a,f,d){const v=d||"";try{Nm(a,function(b,D){let z=b;c(b)&&(z=pc(b)),f.push(v+D+"="+encodeURIComponent(z))})}catch(b){throw f.push(v+"type="+encodeURIComponent("_badmap")),b}}function ko(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ko,mc),ko.prototype.g=function(){return new ya(this.l,this.j)},ko.prototype.i=function(a){return function(){return a}}({});function ya(a,f){it.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ya,it),t=ya.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ro(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Po(this):Ro(this),this.readyState==3&&Um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Po(this))},t.Qa=function(a){this.g&&(this.response=a,Po(this))},t.ga=function(){this.g&&Po(this)};function Po(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ro(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var d=f.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=f.next();return a.join(`\r
`)};function Ro(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jm(a){let f="";return V(a,function(d,v){f+=v,f+=":",f+=d,f+=`\r
`}),f}function Sc(a,f,d){e:{for(v in d){var v=!1;break e}v=!0}v||(d=jm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,f,d))}function Ne(a){it.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ne,it);var aI=/^https?$/i,lI=["POST","PUT"];t=Ne.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,d,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yc.g(),this.v=this.o?mm(this.o):mm(yc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){$m(this,D);return}if(a=d||"",d=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)d.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const D of v.keys())d.set(D,v.get(D));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lI,f,void 0))||v||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){$m(this,D)}};function $m(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,zm(a),_a(a)}function zm(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),_a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_a(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bm(this):this.bb())},t.bb=function(){Bm(this)};function Bm(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)fm(a.Ea,0,a);else if(mt(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var d;if(!(d=f)){var v;if(v=z===0){var b=String(a.D).match(Dm)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),v=!aI.test(b?b.toLowerCase():"")}d=v}if(d)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var D=2<Pn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",zm(a)}}finally{_a(a)}}}}function _a(a,f){if(a.g){Hm(a);const d=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||mt(a,"ready");try{d.onreadystatechange=v}catch{}}}function Hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),jT(f)}};function qm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uI(a){const f={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(_(a[v]))continue;var d=k(a[v]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=f[b]||[];f[b]=D,D.push(d)}y(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(a,f,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||f}function Wm(a){this.Aa=0,this.i=[],this.j=new Eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Co("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Co("baseRetryDelayMs",5e3,a),this.cb=Co("retryDelaySeedMs",1e4,a),this.Wa=Co("forwardChannelMaxRetries",2,a),this.wa=Co("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pm(a&&a.concurrentRequestLimit),this.Da=new oI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wm.prototype,t.la=8,t.G=1,t.connect=function(a,f,d,v){gt(0),this.W=a,this.H=f||{},d&&v!==void 0&&(this.H.OSID=d,this.H.OAID=v),this.F=this.X,this.I=tg(this,null,this.W),Ea(this)};function kc(a){if(Km(a),a.G==3){var f=a.U++,d=kn(a.I);if(ye(d,"SID",a.K),ye(d,"RID",f),ye(d,"TYPE","terminate"),bo(a,d),f=new Kn(a,a.j,f),f.L=2,f.v=va(kn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=f.v,d=!0),d||(f.g=ng(f.j,null),f.g.ea(f.v)),f.F=Date.now(),pa(f)}eg(a)}function wa(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function Km(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ea(a){if(!Rm(a.h)&&!a.s){a.s=!0;var f=a.Ga;bt||F(),$||(bt(),$=!0),j.add(f,a),a.B=0}}function cI(a,f){return Cm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wo(m(a.Ga,a,f),Zm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Kn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var f=0,d=0;d<this.i.length;d++){t:{var v=this.i[d];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=d;break e}if(f===4096||d===this.i.length-1){f=d+1;break e}}f=1e3}else f=1e3;f=Qm(this,b,f),d=kn(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),bo(this,d),D&&(this.O?f="headers="+encodeURIComponent(String(jm(D)))+"&"+f:this.m&&Sc(d,this.m,D)),Ac(this.h,b),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",f),ye(d,"SID","null"),b.T=!0,wc(b,d,null)):wc(b,d,f),this.G=2}}else this.G==3&&(a?Gm(this,a):this.i.length==0||Rm(this.h)||Gm(this))};function Gm(a,f){var d;f?d=f.l:d=a.U++;const v=kn(a.I);ye(v,"SID",a.K),ye(v,"RID",d),ye(v,"AID",a.T),bo(a,v),a.m&&a.o&&Sc(v,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Qm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ac(a.h,d),wc(d,v,f)}function bo(a,f){a.H&&V(a.H,function(d,v){ye(f,v,d)}),a.l&&Nm({},function(d,v){ye(f,v,d)})}function Qm(a,f,d){d=Math.min(a.i.length,d);var v=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=b[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let de=!0;for(let Xe=0;Xe<d;Xe++){let ue=b[Xe].g;const ot=b[Xe].map;if(ue-=D,0>ue)D=Math.max(0,b[Xe].g-100),de=!1;else try{sI(ot,z,"req"+ue+"_")}catch{v&&v(ot)}}if(de){v=z.join("&");break e}}}return a=a.i.splice(0,d),f.D=a,v}function Ym(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;bt||F(),$||(bt(),$=!0),j.add(f,a),a.v=0}}function Pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wo(m(a.Fa,a),Zm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wo(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),wa(this),Xm(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xm(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=kn(a.qa);ye(f,"RID","rpc"),ye(f,"SID",a.K),ye(f,"AID",a.T),ye(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(f,"TO",a.ja),ye(f,"TYPE","xmlhttp"),bo(a,f),a.m&&a.o&&Sc(f,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=va(kn(f)),d.m=null,d.P=!0,Am(d,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),Pc(this),gt(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jm(a,f){var d=null;if(a.g==f){Ta(a),Rc(a),a.g=null;var v=2}else if(Ic(a.h,f))d=f.D,bm(a.h,f),v=1;else return;if(a.G!=0){if(f.o)if(v==1){d=f.m?f.m.length:0,f=Date.now()-f.F;var b=a.B;v=fa(),mt(v,new wm(v,d)),Ea(a)}else Ym(a);else if(b=f.s,b==3||b==0&&0<f.X||!(v==1&&cI(a,f)||v==2&&Pc(a)))switch(d&&0<d.length&&(f=a.h,f.i=f.i.concat(d)),b){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function Zm(a,f){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*f}function xr(a,f){if(a.j.info("Error code "+f),f==2){var d=m(a.fb,a),v=a.Xa;const b=!v;v=new br(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ma(v,"https"),va(v),b?rI(v.toString(),d):iI(v.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(f),eg(a),Km(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function eg(a){if(a.G=0,a.ka=[],a.l){const f=xm(a.h);(f.length!=0||a.i.length!=0)&&(N(a.ka,f),N(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function tg(a,f,d){var v=d instanceof br?kn(d):new br(d);if(v.g!="")f&&(v.g=f+"."+v.g),ga(v,v.s);else{var b=l.location;v=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var D=new br(null);v&&ma(D,v),f&&(D.g=f),b&&ga(D,b),d&&(D.l=d),v=D}return d=a.D,f=a.ya,d&&f&&ye(v,d,f),ye(v,"VER",a.la),bo(a,v),v}function ng(a,f,d){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Ne(new ko({eb:d})):new Ne(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rg(){}t=rg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,f){return new xt(a,f)};function xt(a,f){it.call(this),this.g=new Wm(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!_(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new pi(this)}P(xt,it),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){kc(this.g)},xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=pc(a),a=d);f.i.push(new KT(f.Ya++,a)),f.G==3&&Ea(f)},xt.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,xt.aa.N.call(this)};function ig(a){gc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const d in f){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}P(ig,gc);function og(){vc.call(this),this.status=1}P(og,vc);function pi(a){this.g=a}P(pi,rg),pi.prototype.ua=function(){mt(this.g,"a")},pi.prototype.ta=function(a){mt(this.g,new ig(a))},pi.prototype.sa=function(a){mt(this.g,new og)},pi.prototype.ra=function(){mt(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Xw=function(){return new Ia},Yw=function(){return fa()},Qw=Rr,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,_l=ha,Em.COMPLETE="complete",Gw=Em,gm.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",it.prototype.listen=it.prototype.K,Ko=gm,Kw=ko,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Ww=Ne}).apply(typeof el<"u"?el:typeof self<"u"?self:typeof window<"u"?window:{});const vy="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let ho="10.12.1";/**
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
 */const ni=new Ep("@firebase/firestore");function $o(){return ni.logLevel}function W(t,...e){if(ni.logLevel<=ae.DEBUG){const n=e.map(Cp);ni.debug(`Firestore (${ho}): ${t}`,...n)}}function zn(t,...e){if(ni.logLevel<=ae.ERROR){const n=e.map(Cp);ni.error(`Firestore (${ho}): ${t}`,...n)}}function Zi(t,...e){if(ni.logLevel<=ae.WARN){const n=e.map(Cp);ni.warn(`Firestore (${ho}): ${t}`,...n)}}function Cp(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function ve(t,e){t||Z()}function te(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class Db{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new Jw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ct(e)}}class Vb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Lb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Vb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,W("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new Mb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ub(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new qe(0,0))}static max(){return new ee(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends $s{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends $s{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new Y(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ae.fromString(e))}static fromName(e){return new X(Ae.fromString(e).popFirst(5))}static empty(){return new X(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ae(e.slice()))}}function $b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Tr(i,X.empty(),e)}function zb(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(ee.min(),X.empty(),-1)}static max(){return new Tr(ee.max(),X.empty(),-1)}}function Bb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const Hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ta(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Hb)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(h=>{s[c]=h,++l,l===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new L((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function na(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bp.oe=-1;function Ku(t){return t==null}function ru(t){return t===0&&1/t==-1/0}function Kb(t){return typeof t=="number"&&Number.isInteger(t)&&!ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tl(this.root,e,this.comparator,!0)}}class tl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=o??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _y(this.data.getIterator())}getIteratorFrom(e){return new _y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class _y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class an{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new an([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new tE("Invalid base64 string: "+o):o}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(ve(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function xp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Np(t){const e=t.mapValue.fields.__previous_value__;return xp(e)?Np(e):e}function zs(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class Qb{constructor(e,n,r,i,o,s,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xp(t)?4:Yb(t)?9007199254740991:10:Z()}function In(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zs(t).isEqual(zs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ir(i.timestampValue),l=Ir(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ri(i.bytesValue).isEqual(ri(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return je(i.geoPointValue.latitude)===je(o.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return je(i.integerValue)===je(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=je(i.doubleValue),l=je(o.doubleValue);return s===l?ru(s)===ru(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(yy(s)!==yy(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!In(s[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function Hs(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=je(o.integerValue||o.doubleValue),u=je(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wy(t.timestampValue,e.timestampValue);case 4:return wy(zs(t),zs(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(o,s){const l=ri(o),u=ri(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let c=0;c<l.length&&c<u.length;c++){const h=ce(l[c],u[c]);if(h!==0)return h}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=ce(je(o.latitude),je(s.latitude));return l!==0?l:ce(je(o.longitude),je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const l=o.values||[],u=s.values||[];for(let c=0;c<l.length&&c<u.length;++c){const h=to(l[c],u[c]);if(h)return h}return ce(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===nl.mapValue&&s===nl.mapValue)return 0;if(o===nl.mapValue)return 1;if(s===nl.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),c=s.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=ce(u[p],h[p]);if(m!==0)return m;const w=to(l[u[p]],c[h[p]]);if(w!==0)return w}return ce(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ir(t),r=Ir(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function no(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=zh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${zh(n.fields[s])}`;return i+"}"}(t.mapValue):Z()}function Bh(t){return!!t&&"integerValue"in t}function Dp(t){return!!t&&"arrayValue"in t}function Ey(t){return!!t&&"nullValue"in t}function Ty(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=fs(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){po(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Wt(fs(this.value))}}function nE(t){const e=[];return po(t.fields,(n,r)=>{const i=new et([n]);if(wl(r)){const o=nE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new an(e)}/**
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
 */class ht{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,ee.min(),ee.min(),ee.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,ee.min(),ee.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ee.min(),ee.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class iu{constructor(e,n){this.position=e,this.inclusive=n}}function Iy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=X.comparator(X.fromName(s.referenceValue),n.key):r=to(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rE{}class Be extends rE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zb(e,n,r):n==="array-contains"?new nx(e,r):n==="in"?new rx(e,r):n==="not-in"?new ix(e,r):n==="array-contains-any"?new ox(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ex(e,r):new tx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends rE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new An(e,n)}matches(e){return iE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iE(t){return t.op==="and"}function oE(t){return Jb(t)&&iE(t)}function Jb(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Hh(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+no(t.value);if(oE(t))return t.filters.map(e=>Hh(e)).join(",");{const e=t.filters.map(n=>Hh(n)).join(",");return`${t.op}(${e})`}}function sE(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof An?function(r,i){return i instanceof An&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&sE(s,i.filters[l]),!0):!1}(t,e):void Z()}function aE(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(aE).join(" ,")+"}"}(t):"Filter"}class Zb extends Be{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class ex extends Be{constructor(e,n){super(e,"in",n),this.keys=lE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tx extends Be{constructor(e,n){super(e,"not-in",n),this.keys=lE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class nx extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dp(n)&&Hs(n.arrayValue,this.value)}}class rx extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class ix extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class ox extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}/**
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
 */class sx{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function Sy(t,e=null,n=[],r=[],i=null,o=null,s=null){return new sx(t,e,n,r,i,o,s)}function Op(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.ue=n}return e.ue}function Vp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ay(t.startAt,e.startAt)&&Ay(t.endAt,e.endAt)}function qh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gu{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ax(t,e,n,r,i,o,s,l){return new Gu(t,e,n,r,i,o,s,l)}function Lp(t){return new Gu(t)}function ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lx(t){return t.collectionGroup!==null}function hs(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new nt(et.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ou(o,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new ou(et.keyField(),r))}return e.ce}function _n(t){const e=te(t);return e.le||(e.le=ux(e,hs(t))),e.le}function ux(t,e){if(t.limitType==="F")return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ou(i.field,o)});const n=t.endAt?new iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new iu(t.startAt.position,t.startAt.inclusive):null;return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wh(t,e,n){return new Gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return Vp(_n(t),_n(e))&&t.limitType===e.limitType}function uE(t){return`${Op(_n(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aE(i)).join(", ")}]`),Ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):X.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of hs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const c=Iy(s,l,u);return s.inclusive?c<=0:c<0}(r.startAt,hs(r),i)||r.endAt&&!function(s,l,u){const c=Iy(s,l,u);return s.inclusive?c>=0:c>0}(r.endAt,hs(r),i))}(t,e)}function cx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cE(t){return(e,n)=>{let r=!1;for(const i of hs(t)){const o=fx(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function fx(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),c=l.data.field(o);return u!==null&&c!==null?to(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return eE(this.inner)}size(){return this.innerSize}}/**
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
 */const hx=new be(X.comparator);function Bn(){return hx}const fE=new be(X.comparator);function Go(...t){let e=fE;for(const n of t)e=e.insert(n.key,n);return e}function hE(t){let e=fE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return ds()}function dE(){return ds()}function ds(){return new mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const dx=new be(X.comparator),px=new nt(X.comparator);function oe(...t){let e=px;for(const n of t)e=e.add(n);return e}const mx=new nt(ce);function gx(){return mx}/**
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
 */function pE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function mE(t){return{integerValue:""+t}}function vx(t,e){return Kb(e)?mE(e):pE(t,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function yx(t,e,n){return t instanceof su?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&xp(o)&&(o=Np(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof qs?vE(t,e):t instanceof Ws?yE(t,e):function(i,o){const s=gE(i,o),l=Py(s)+Py(i.Pe);return Bh(s)&&Bh(i.Pe)?mE(l):pE(i.serializer,l)}(t,e)}function _x(t,e,n){return t instanceof qs?vE(t,e):t instanceof Ws?yE(t,e):n}function gE(t,e){return t instanceof au?function(r){return Bh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class su extends Xu{}class qs extends Xu{constructor(e){super(),this.elements=e}}function vE(t,e){const n=_E(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Xu{constructor(e){super(),this.elements=e}}function yE(t,e){let n=_E(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class au extends Xu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Py(t){return je(t.integerValue||t.doubleValue)}function _E(t){return Dp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qs&&i instanceof qs||r instanceof Ws&&i instanceof Ws?eo(r.elements,i.elements,In):r instanceof au&&i instanceof au?In(r.Pe,i.Pe):r instanceof su&&i instanceof su}(t.transform,e.transform)}class Ex{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function El(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ju{}function wE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new TE(t.key,Dn.none()):new ra(t.key,t.data,Dn.none());{const n=t.data,r=Wt.empty();let i=new nt(et.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ci(t.key,r,new an(i.toArray()),Dn.none())}}function Tx(t,e,n){t instanceof ra?function(i,o,s){const l=i.value.clone(),u=Cy(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ci?function(i,o,s){if(!El(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=Cy(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(EE(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,r){return t instanceof ra?function(o,s,l,u){if(!El(o.precondition,s))return l;const c=o.value.clone(),h=by(o.fieldTransforms,u,s);return c.setAll(h),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ci?function(o,s,l,u){if(!El(o.precondition,s))return l;const c=by(o.fieldTransforms,u,s),h=s.data;return h.setAll(EE(o)),h.setAll(c),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,s,l){return El(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function Ix(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=gE(r.transform,i||null);o!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,o))}return n||null}function Ry(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(o,s)=>wx(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Ju{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ci extends Ju{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function EE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,_x(s,l,n[i]))}return r}function by(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,yx(o,s,e))}return r}class TE extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ax extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Tx(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dE();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=wE(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>Ry(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>Ry(n,r))}}class Mp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return dx}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Mp(e,n,r,i)}}/**
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
 */class kx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Px{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,se;function Rx(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function IE(t){if(t===void 0)return zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ue.OK:return M.OK;case Ue.CANCELLED:return M.CANCELLED;case Ue.UNKNOWN:return M.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return M.INTERNAL;case Ue.UNAVAILABLE:return M.UNAVAILABLE;case Ue.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ue.NOT_FOUND:return M.NOT_FOUND;case Ue.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ue.ABORTED:return M.ABORTED;case Ue.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ue.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(se=Ue||(Ue={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cx(){return new TextEncoder}/**
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
 */const bx=new qr([4294967295,4294967295],0);function xy(t){const e=Cx().encode(t),n=new qw;return n.update(e),new Uint8Array(n.digest())}function Ny(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new qr([n,r],0),new qr([i,o],0)]}class Fp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qo(`Invalid padding: ${n}`);if(r<0)throw new Qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qr.fromNumber(r)));return i.compare(bx)===1&&(i=new qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=xy(e),[r,i]=Ny(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Fp(o,i,n);return r.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const n=xy(e),[r,i]=Ny(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zu{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(ee.min(),i,new be(ce),Bn(),oe())}}class ia{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,oe(),oe(),oe())}}/**
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
 */class Tl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class AE{constructor(e,n){this.targetId=e,this.me=n}}class SE{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dy{constructor(){this.fe=0,this.ge=Vy(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new ia(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Vy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Oy(),this.Qe=new be(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(qh(o))if(r===0){const s=new X(o.path);this.Ue(n,s,ht.newNoDocument(s,ee.min()))}else ve(r===1);else{const s=this.Ye(n);if(s!==r){const l=this.Ze(e),u=l?this.Xe(l,e,s):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,l;try{s=ri(r).toUint8Array()}catch(u){if(u instanceof tE)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Fp(s,i,o)}catch(u){return Zi(u instanceof Qo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&qh(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,ht.newNoDocument(u,e))}o.be&&(n.set(s,o.Ce()),o.ve())}});let r=oe();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Zu(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=Oy(),this.Qe=new be(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Oy(){return new be(X.comparator)}function Vy(){return new be(X.comparator)}const Nx={asc:"ASCENDING",desc:"DESCENDING"},Dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ox={and:"AND",or:"OR"};class Vx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kh(t,e){return t.useProto3Json||Ku(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Lx(t,e){return lu(t,e.toTimestamp())}function wn(t){return ve(!!t),ee.fromTimestamp(function(n){const r=Ir(n);return new qe(r.seconds,r.nanos)}(t))}function Up(t,e){return Gh(t,e).canonicalString()}function Gh(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PE(t){const e=Ae.fromString(t);return ve(NE(e)),e}function Qh(t,e){return Up(t.databaseId,e.path)}function yf(t,e){const n=PE(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(CE(n))}function RE(t,e){return Up(t.databaseId,e)}function Mx(t){const e=PE(t);return e.length===4?Ae.emptyPath():CE(e)}function Yh(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CE(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ly(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function Fx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,h){return c.useProto3Json?(ve(h===void 0||typeof h=="string"),pt.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),pt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(c){const h=c.code===void 0?M.UNKNOWN:IE(c.code);return new Y(h,c.message||"")}(s);n=new SE(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yf(t,r.document.name),o=wn(r.document.updateTime),s=r.document.createTime?wn(r.document.createTime):ee.min(),l=new Wt({mapValue:{fields:r.document.fields}}),u=ht.newFoundDocument(i,o,s,l),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Tl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yf(t,r.document),o=r.readTime?wn(r.readTime):ee.min(),s=ht.newNoDocument(i,o),l=r.removedTargetIds||[];n=new Tl([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yf(t,r.document),o=r.removedTargetIds||[];n=new Tl([],o,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new Px(i,o),l=r.targetId;n=new AE(l,s)}}return n}function Ux(t,e){let n;if(e instanceof ra)n={update:Ly(t,e.key,e.value)};else if(e instanceof TE)n={delete:Qh(t,e.key)};else if(e instanceof ci)n={update:Ly(t,e.key,e.data),updateMask:Gx(e.fieldMask)};else{if(!(e instanceof Ax))return Z();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof su)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ws)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof au)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Lx(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Z()}(t,e.precondition)),n}function jx(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?wn(i.updateTime):wn(o);return s.isEqual(ee.min())&&(s=wn(o)),new Ex(s,i.transformResults||[])}(n,e))):[]}function $x(t,e){return{documents:[RE(t,e.path)]}}function zx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RE(t,i);const o=function(c){if(c.length!==0)return xE(An.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:yi(m.field),direction:qx(m.dir)}}(h))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const l=Kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Bx(t){let e=Mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(p){const m=bE(p);return m instanceof An&&oE(m)?m.getFilters():[m]}(n.where));let s=[];n.orderBy&&(s=function(p){return p.map(m=>function(P){return new ou(_i(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ku(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new iu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new iu(w,m)}(n.endAt)),ax(e,i,s,o,l,"F",u,c)}function Hx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_i(n.unaryFilter.field);return Be.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_i(n.unaryFilter.field);return Be.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>bE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function qx(t){return Nx[t]}function Wx(t){return Dx[t]}function Kx(t){return Ox[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return et.fromServerFormat(t.fieldPath)}function xE(t){return t instanceof Be?function(n){if(n.op==="=="){if(Ty(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(Ey(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ty(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(Ey(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:Wx(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(i=>xE(i));return r.length===1?r[0]:{compositeFilter:{op:Kx(n.op),filters:r}}}(t):Z()}function Gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,i,o=ee.min(),s=ee.min(),l=pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Qx{constructor(e){this.ct=e}}function Yx(t){const e=Bx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wh(e,e.limit,"L"):e}/**
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
 */class Xx{constructor(){this._n=new Jx}addToCollectionParentIndex(e,n){return this._n.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Tr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Jx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Ae.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Ae.comparator)).toArray()}}/**
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
 */class ro{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ro(0)}static Ln(){return new ro(-1)}}/**
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
 */class Zx{constructor(){this.changes=new mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ps(r.mutation,i,an.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Go();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=Bn();const s=ds(),l=function(){return ds()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ci)?o=o.insert(c.key,c):h!==void 0?(s.set(c.key,h.mutation.getFieldMask()),ps(h.mutation,c,h.mutation.getFieldMask(),qe.now())):s.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,h)=>s.set(c,h)),n.forEach((c,h)=>{var p;return l.set(c,new eN(h,(p=s.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ds();let i=new be((s,l)=>s-l),o=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||an.empty();h=l.applyToLocalView(c,h),r.set(u,h);const p=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,h=u.value,p=dE();h.forEach(m=>{if(!o.has(m)){const w=wE(n.get(m),r.get(m));w!==null&&p.set(m,w),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):L.resolve(jr());let l=-1,u=o;return s.next(c=>L.forEach(c,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,oe())).next(h=>({batchId:l,changes:hE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Go();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Go();return this.indexManager.getCollectionParents(e,o).next(l=>L.forEach(l,u=>{const c=function(p,m){return new Gu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const h=c.getKey();s.get(h)===null&&(s=s.insert(h,ht.newInvalidDocument(h)))});let l=Go();return s.forEach((u,c)=>{const h=o.get(u);h!==void 0&&ps(h.mutation,c,an.empty(),qe.now()),Yu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class nN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Yx(i.bundledQuery),readTime:wn(i.readTime)}}(n)),L.resolve()}}/**
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
 */class rN{constructor(){this.overlays=new be(X.comparator),this.hr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return L.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),o=n.length+1,s=new X(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new be((c,h)=>c-h);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=o.get(c.largestBatchId);h===null&&(h=jr(),o=o.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const l=jr(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>l.set(c,h)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new kx(n,r));let o=this.hr.get(n);o===void 0&&(o=oe(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
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
 */class jp{constructor(){this.Pr=new nt(Ke.Ir),this.Tr=new nt(Ke.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ke(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new Ae([])),r=new Ke(n,e),i=new Ke(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new Ae([])),r=new Ke(n,e),i=new Ke(n,e+1);let o=oe();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Ke(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
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
 */class iN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new nt(Ke.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Sx(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.wr=this.wr.add(new Ke(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(s)}lookupMutationBatch(e,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const l=this.Sr(s.pr);o.push(l)}),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ce);return n.forEach(i=>{const o=new Ke(i,0),s=new Ke(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],l=>{r=r.add(l.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const s=new Ke(new X(o),0);let l=new nt(ce);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},s),L.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,i=>{const o=new Ke(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ke(n,0),i=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oN{constructor(e){this.vr=e,this.docs=function(){return new be(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ht.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Bn();const s=n.path,l=new X(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||Bb(zb(h),r)<=0||(i.has(h.key)||Yu(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Z()}Fr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sN(this)}getSize(e){return L.resolve(this.size)}}class sN extends Zx{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class aN{constructor(e){this.persistence=e,this.Mr=new mo(n=>Op(n),Vp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new jp,this.targetCount=0,this.Lr=ro.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.qn(n),L.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(o).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Nr.containsKey(n))}}/**
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
 */class lN{constructor(e,n){this.Br={},this.overlays={},this.kr=new bp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new aN(this),this.indexManager=new Xx,this.remoteDocumentCache=function(i){return new oN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Qx(n),this.$r=new nN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new iN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new uN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class uN extends qb{constructor(e){super(),this.currentSequenceNumber=e}}class $p{constructor(e){this.persistence=e,this.zr=new jp,this.jr=null}static Hr(e){return new $p(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class zp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new zp(e,n.fromCache,r,i)}}/**
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
 */class cN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return rR()?8:Wb(eR())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new cN;return this.Ji(e,n,s).next(l=>{if(o.result=l,this.Ui)return this.Yi(e,n,s,l.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?($o()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):($o()<=ae.DEBUG&&W("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?($o()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):L.resolve())}ji(e,n){if(ky(n))return L.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wh(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=oe(...o);return this.zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,s,u.readTime)?this.ji(e,Wh(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return ky(n)||i.isEqual(ee.min())?L.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?L.resolve(null):($o()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(n)),this.es(e,s,n,$b(i,-1)).next(l=>l))})}Zi(e,n){let r=new nt(cE(e));return n.forEach((i,o)=>{Yu(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return $o()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",vi(n)),this.zi.getDocumentsMatchingQuery(e,n,Tr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class hN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new be(ce),this.rs=new mo(o=>Op(o),Vp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function dN(t,e,n,r){return new hN(t,e,n,r)}async function DE(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=oe();for(const c of i){s.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of o){l.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:s,addedBatchIds:l}))})})}function pN(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,h){const p=c.batch,m=p.keys();let w=L.resolve();return m.forEach(P=>{w=w.next(()=>h.getEntry(u,P)).next(C=>{const N=c.docVersions.get(P);ve(N!==null),C.version.compareTo(N)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OE(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function mN(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(o,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(o,h.addedDocuments,p)));let w=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(pt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(p,w),function(C,N,T){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,w,h)&&l.push(n.Qr.updateTargetData(o,w))});let u=Bn(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(o,h))}),l.push(gN(o,s,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(ee.min())){const h=n.Qr.getLastRemoteSnapshotVersion(o).next(p=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(h)}return L.waitFor(l).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.ns=i,o))}function gN(t,e,n){let r=oe(),i=oe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Bn();return n.forEach((l,u)=>{const c=o.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),s=s.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:s,ls:i}})}function vN(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yN(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(o=>o?(i=o,L.resolve(i)):n.Qr.allocateTargetId(r).next(s=>(i=new or(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Xh(t,e,n){const r=te(t),i=r.ns.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!na(s))throw s;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function My(t,e,n){const r=te(t);let i=ee.min(),o=oe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,h){const p=te(u),m=p.rs.get(h);return m!==void 0?L.resolve(p.ns.get(m)):p.Qr.getTargetData(c,h)}(r,s,_n(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(s,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(s,e,n?i:ee.min(),n?o:oe())).next(l=>(_N(r,cx(e),l),{documents:l,hs:o})))}function _N(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ss.set(e,r)}class Fy{constructor(){this.activeTargetIds=gx()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wN{constructor(){this.no=new Fy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EN{io(e){}shutdown(){}}/**
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
 */class Uy{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rl=null;function _f(){return rl===null?rl=function(){return 268435456+Math.round(2147483648*Math.random())}():rl++,"0x"+rl.toString(16)}/**
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
 */const TN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const ut="WebChannelConnection";class AN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(n,r,i,o,s){const l=_f(),u=this.vo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,o,s),this.Mo(n,u,c,i).then(h=>(W("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Zi("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,o,s,l){return this.Co(n,r,i,o,s)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}vo(n,r){const i=TN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const o=_f();return new Promise((s,l)=>{const u=new Ww;u.setWithCredentials(!0),u.listenOnce(Gw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _l.NO_ERROR:const h=u.getResponseJson();W(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case _l.TIMEOUT:W(ut,`RPC '${e}' ${o} timed out`),l(new Y(M.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const p=u.getStatus();if(W(ut,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const P=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(w.status);l(new Y(P,w.message))}else l(new Y(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{W(ut,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);W(ut,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=_f(),o=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Xw(),l=Yw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Kw({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");W(ut,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=s.createWebChannel(h,u);let m=!1,w=!1;const P=new IN({lo:N=>{w?W(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(W(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(ut,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),C=(N,T,_)=>{N.listen(T,A=>{try{_(A)}catch(x){setTimeout(()=>{throw x},0)}})};return C(p,Ko.EventType.OPEN,()=>{w||(W(ut,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),C(p,Ko.EventType.CLOSE,()=>{w||(w=!0,W(ut,`RPC '${e}' stream ${i} transport closed`),P.po())}),C(p,Ko.EventType.ERROR,N=>{w||(w=!0,Zi(ut,`RPC '${e}' stream ${i} transport errored:`,N),P.po(new Y(M.UNAVAILABLE,"The operation could not be completed")))}),C(p,Ko.EventType.MESSAGE,N=>{var T;if(!w){const _=N.data[0];ve(!!_);const A=_,x=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(x){W(ut,`RPC '${e}' stream ${i} received error:`,x);const O=x.status;let V=function(E){const I=Ue[E];if(I!==void 0)return IE(I)}(O),y=x.message;V===void 0&&(V=M.INTERNAL,y="Unknown error status: "+O+" with message "+x.message),w=!0,P.po(new Y(V,y)),p.close()}else W(ut,`RPC '${e}' stream ${i} received:`,_),P.yo(_)}}),C(l,Qw.STAT_EVENT,N=>{N.stat===$h.PROXY?W(ut,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===$h.NOPROXY&&W(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function wf(){return typeof document<"u"?document:null}/**
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
 */function ec(t){return new Vx(t,!0)}/**
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
 */class VE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class LE{constructor(e,n,r,i,o,s,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new VE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Y(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SN extends LE{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Fx(this.serializer,e),r=function(o){if(!("targetChange"in o))return ee.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?wn(s.readTime):ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Yh(this.serializer),n.addTarget=function(o,s){let l;const u=s.target;if(l=qh(u)?{documents:$x(o,u)}:{query:zx(o,u)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=kE(o,s.resumeToken);const c=Kh(o,s.expectedCount);c!==null&&(l.expectedCount=c)}else if(s.snapshotVersion.compareTo(ee.min())>0){l.readTime=lu(o,s.snapshotVersion.toTimestamp());const c=Kh(o,s.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Hx(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Yh(this.serializer),n.removeTarget=e,this.i_(n)}}class kN extends LE{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=jx(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.A_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Yh(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ux(this.serializer,r))};this.i_(n)}}/**
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
 */class PN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Co(e,Gh(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(M.UNKNOWN,o.toString())})}xo(e,n,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.xo(e,Gh(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(M.UNKNOWN,s.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class RN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(zn(n),this.y_=!1):W("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class CN{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(s=>{r.enqueueAndForget(async()=>{fi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.M_.add(4),await oa(c),c.N_.set("Unknown"),c.M_.delete(4),await tc(c)}(this))})}),this.N_=new RN(r,i)}}async function tc(t){if(fi(t))for(const e of t.x_)await e(!0)}async function oa(t){for(const e of t.x_)await e(!1)}function ME(t,e){const n=te(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Wp(n)?qp(n):go(n).Xo()&&Hp(n,e))}function Bp(t,e){const n=te(t),r=go(n);n.F_.delete(e),r.Xo()&&FE(n,e),n.F_.size===0&&(r.Xo()?r.n_():fi(n)&&n.N_.set("Unknown"))}function Hp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).P_(e)}function FE(t,e){t.L_.xe(e),go(t).I_(e)}function qp(t){t.L_=new xx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),go(t).start(),t.N_.w_()}function Wp(t){return fi(t)&&!go(t).Zo()&&t.F_.size>0}function fi(t){return te(t).M_.size===0}function UE(t){t.L_=void 0}async function bN(t){t.N_.set("Online")}async function xN(t){t.F_.forEach((e,n)=>{Hp(t,e)})}async function NN(t,e){UE(t),Wp(t)?(t.N_.D_(e),qp(t)):t.N_.set("Unknown")}async function DN(t,e,n){if(t.N_.set("Online"),e instanceof SE&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(t,r)}else if(e instanceof Tl?t.L_.Ke(e):e instanceof AE?t.L_.He(e):t.L_.We(e),!n.isEqual(ee.min()))try{const r=await OE(t.localStore);n.compareTo(r)>=0&&await function(o,s){const l=o.L_.rt(s);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=o.F_.get(c);h&&o.F_.set(c,h.withResumeToken(u.resumeToken,s))}}),l.targetMismatches.forEach((u,c)=>{const h=o.F_.get(u);if(!h)return;o.F_.set(u,h.withResumeToken(pt.EMPTY_BYTE_STRING,h.snapshotVersion)),FE(o,u);const p=new or(h.target,u,c,h.sequenceNumber);Hp(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await uu(t,r)}}async function uu(t,e,n){if(!na(e))throw e;t.M_.add(1),await oa(t),t.N_.set("Offline"),n||(n=()=>OE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await tc(t)})}function jE(t,e){return e().catch(n=>uu(t,n,e))}async function nc(t){const e=te(t),n=Ar(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ON(e);)try{const i=await vN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,VN(e,i)}catch(i){await uu(e,i)}$E(e)&&zE(e)}function ON(t){return fi(t)&&t.v_.length<10}function VN(t,e){t.v_.push(e);const n=Ar(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function $E(t){return fi(t)&&!Ar(t).Zo()&&t.v_.length>0}function zE(t){Ar(t).start()}async function LN(t){Ar(t).V_()}async function MN(t){const e=Ar(t);for(const n of t.v_)e.d_(n.mutations)}async function FN(t,e,n){const r=t.v_.shift(),i=Mp.from(r,e,n);await jE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nc(t)}async function UN(t,e){e&&Ar(t).E_&&await async function(r,i){if(function(s){return Rx(s)&&s!==M.ABORTED}(i.code)){const o=r.v_.shift();Ar(r).t_(),await jE(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await nc(r)}}(t,e),$E(t)&&zE(t)}async function jy(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.M_.add(3),await oa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await tc(n)}async function jN(t,e){const n=te(t);e?(n.M_.delete(2),await tc(n)):e||(n.M_.add(2),await oa(n),n.N_.set("Unknown"))}function go(t){return t.B_||(t.B_=function(n,r,i){const o=te(n);return o.f_(),new SN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:bN.bind(null,t),To:xN.bind(null,t),Ao:NN.bind(null,t),h_:DN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Wp(t)?qp(t):t.N_.set("Unknown")):(await t.B_.stop(),UE(t))})),t.B_}function Ar(t){return t.k_||(t.k_=function(n,r,i){const o=te(n);return o.f_(),new kN(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:LN.bind(null,t),Ao:UN.bind(null,t),R_:MN.bind(null,t),A_:FN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await nc(t)):(await t.k_.stop(),t.v_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Kp{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Kp(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(zn("AsyncQueue",`${e}: ${t}`),na(t))return new Y(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Go(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class $y{constructor(){this.q_=new be(X.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Z():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,o,s,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(l=>{s.push({type:0,doc:l})}),new io(e,n,zi.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $N{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class zN{constructor(){this.queries=new mo(e=>uE(e),Qu),this.onlineState="Unknown",this.z_=new Set}}async function BN(t,e){const n=te(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.W_()&&e.G_()&&(r=2):(o=new $N,r=e.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(i,!0);break;case 1:o.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const l=Gp(s,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,o),o.U_.push(e),e.j_(n.onlineState),o.K_&&e.H_(o.K_)&&Qp(n)}async function HN(t,e){const n=te(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.U_.indexOf(e);s>=0&&(o.U_.splice(s,1),o.U_.length===0?i=e.G_()?0:1:!o.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qN(t,e){const n=te(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const l of s.U_)l.H_(i)&&(r=!0);s.K_=i}}r&&Qp(n)}function WN(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const o of i.U_)o.onError(n);r.queries.delete(e)}function Qp(t){t.z_.forEach(e=>{e.next()})}var Jh,zy;(zy=Jh||(Jh={})).J_="default",zy.Cache="cache";class KN{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Jh.Cache}}/**
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
 */class BE{constructor(e){this.key=e}}class HE{constructor(e){this.key=e}}class GN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=cE(e),this.Ta=new zi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new $y,i=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),w=Yu(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?P!==C&&(r.track({type:3,doc:w}),N=!0):this.Ra(m,w)||(r.track({type:2,doc:w}),N=!0,(u&&this.Ia(w,u)>0||c&&this.Ia(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),N=!0):m&&!w&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(w?(s=s.add(w),o=C?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{Ta:s,Aa:r,Xi:l,mutatedKeys:o}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort((h,p)=>function(w,P){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return C(w)-C(P)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,s.length!==0||c?{snapshot:new io(this.query,e.Ta,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new $y,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new HE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new BE(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return io.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class QN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YN{constructor(e){this.key=e,this.wa=!1}}class XN{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new mo(l=>uE(l),Qu),this.Da=new Map,this.Ca=new Set,this.va=new be(X.comparator),this.Fa=new Map,this.Ma=new jp,this.xa={},this.Oa=new Map,this.Na=ro.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function JN(t,e,n=!0){const r=YE(t);let i;const o=r.ba.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await qE(r,e,n,!0),i}async function ZN(t,e){const n=YE(t);await qE(n,e,!0,!1)}async function qE(t,e,n,r){const i=await yN(t.localStore,_n(e)),o=i.targetId,s=n?t.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await e4(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&ME(t.remoteStore,i),l}async function e4(t,e,n,r,i){t.Ba=(p,m,w)=>async function(C,N,T,_){let A=N.view.da(T);A.Xi&&(A=await My(C.localStore,N.query,!1).then(({documents:y})=>N.view.da(y,A)));const x=_&&_.targetChanges.get(N.targetId),O=_&&_.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(A,C.isPrimaryClient,x,O);return Hy(C,N.targetId,V.fa),V.snapshot}(t,p,m,w);const o=await My(t.localStore,e,!0),s=new GN(e,o.hs),l=s.da(o.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(l,t.isPrimaryClient,u);Hy(t,n,c.fa);const h=new QN(e,n,s);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function t4(t,e,n){const r=te(t),i=r.ba.get(e),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(s=>!Qu(s,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bp(r.remoteStore,i.targetId),Zh(r,i.targetId)}).catch(ta)):(Zh(r,i.targetId),await Xh(r.localStore,i.targetId,!0))}async function n4(t,e){const n=te(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bp(n.remoteStore,r.targetId))}async function r4(t,e,n){const r=c4(t);try{const i=await function(s,l){const u=te(s),c=qe.now(),h=l.reduce((w,P)=>w.add(P.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Bn(),C=oe();return u.os.getEntries(w,h).next(N=>{P=N,P.forEach((T,_)=>{_.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(N=>{p=N;const T=[];for(const _ of l){const A=Ix(_,p.get(_.key).overlayedDocument);A!=null&&T.push(new ci(_.key,A,nE(A.value.mapValue),Dn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,T,l)}).next(N=>{m=N;const T=N.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(w,N.batchId,T)})}).then(()=>({batchId:m.batchId,changes:hE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let c=s.xa[s.currentUser.toKey()];c||(c=new be(ce)),c=c.insert(l,u),s.xa[s.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await nc(r.remoteStore)}catch(i){const o=Gp(i,"Failed to persist write");n.reject(o)}}async function WE(t,e){const n=te(t);try{const r=await mN(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Fa.get(o);s&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.wa=!0:i.modifiedDocuments.size>0?ve(s.wa):i.removedDocuments.size>0&&(ve(s.wa),s.wa=!1))}),await sa(n,r,e)}catch(r){await ta(r)}}function By(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((o,s)=>{const l=s.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=te(s);u.onlineState=l;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&Qp(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function i4(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),o=i&&i.key;if(o){let s=new be(X.comparator);s=s.insert(o,ht.newNoDocument(o,ee.min()));const l=oe().add(o),u=new Zu(ee.min(),new Map,new be(ce),s,l);await WE(r,u),r.va=r.va.remove(o),r.Fa.delete(e),Yp(r)}else await Xh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(ta)}async function o4(t,e){const n=te(t),r=e.batch.batchId;try{const i=await pN(n.localStore,e);GE(n,r,null),KE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await ta(i)}}async function s4(t,e,n){const r=te(t);try{const i=await function(s,l){const u=te(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ve(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);GE(r,e,n),KE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await ta(i)}}function KE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function GE(t,e,n){const r=te(t);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||QE(t,r)})}function QE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Bp(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Yp(t))}function Hy(t,e,n){for(const r of n)r instanceof BE?(t.Ma.addReference(r.key,e),a4(t,r)):r instanceof HE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||QE(t,r.key)):Z()}function a4(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Yp(t))}function Yp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new X(Ae.fromString(e)),r=t.Na.next();t.Fa.set(r,new YN(n)),t.va=t.va.insert(n,r),ME(t.remoteStore,new or(_n(Lp(n.path)),r,"TargetPurposeLimboResolution",bp.oe))}}async function sa(t,e,n){const r=te(t),i=[],o=[],s=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{s.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=zp.Ki(u.targetId,c);o.push(h)}}))}),await Promise.all(s),r.Sa.h_(i),await async function(u,c){const h=te(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.qi,w=>h.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>L.forEach(m.Qi,w=>h.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!na(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=h.ns.get(m),P=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(P);h.ns=h.ns.insert(m,C)}}}(r.localStore,o))}async function l4(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await DE(n.localStore,e);n.currentUser=e,function(o,s){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new Y(M.CANCELLED,s))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.us)}}function u4(t,e){const n=te(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const o=n.Da.get(e);if(!o)return i;for(const s of o){const l=n.ba.get(s);i=i.unionWith(l.view.Ea)}return i}}function YE(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=u4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=i4.bind(null,e),e.Sa.h_=qN.bind(null,e.eventManager),e.Sa.ka=WN.bind(null,e.eventManager),e}function c4(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s4.bind(null,e),e}class qy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dN(this.persistence,new fN,e.initialUser,this.serializer)}createPersistence(e){return new lN($p.Hr,this.serializer)}createSharedClientState(e){return new wN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class f4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l4.bind(null,this.syncEngine),await jN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zN}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=function(o){return new AN(o)}(e.databaseInfo);return function(o,s,l,u){return new PN(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new CN(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Uy.D()?new Uy:new EN}())}createSyncEngine(e,n){return function(i,o,s,l,u,c,h){const p=new XN(i,o,s,l,u,c);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=te(r);W("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await oa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class h4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class d4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Zw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await m4(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jy(e.remoteStore,i)),t._onlineComponents=e}function p4(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function m4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!p4(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await Ef(t,new qy)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Ef(t,new qy);return t._offlineComponents}async function XE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Wy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Wy(t,new f4))),t._onlineComponents}function g4(t){return XE(t).then(e=>e.syncEngine)}async function Ky(t){const e=await XE(t),n=e.eventManager;return n.onListen=JN.bind(null,e.syncEngine),n.onUnlisten=t4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=n4.bind(null,e.syncEngine),n}/**
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
 */function JE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gy=new Map;/**
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
 */function ZE(t,e,n){if(!n)throw new Y(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function v4(t,e,n,r){if(e===!0&&r===!0)throw new Y(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qy(t){if(!X.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yy(t){if(X.isDocumentKey(t))throw new Y(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xp(t);throw new Y(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}v4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nb;switch(r.type){case"firstParty":return new Lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gy.get(n);r&&(W("ComponentProvider","Removing Datastore"),Gy.delete(n),r.terminate())}(this),Promise.resolve()}}function y4(t,e,n,r={}){var i;const o=(t=ms(t,rc))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ct.MOCK_USER;else{l=vw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(c)}t._authCredentials=new Db(new Jw(l,u))}}/**
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
 */class ic{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class gr extends ic{constructor(e,n,r){super(e,n,Lp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new X(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function _4(t,e,...n){if(t=Zt(t),ZE("collection","path",e),t instanceof rc){const r=Ae.fromString(e,...n);return Yy(r),new gr(t,null,r)}{if(!(t instanceof Yt||t instanceof gr))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Yy(r),new gr(t.firestore,null,r)}}function w4(t,e,...n){if(t=Zt(t),arguments.length===1&&(e=Zw.newId()),ZE("doc","path",e),t instanceof rc){const r=Ae.fromString(e,...n);return Qy(r),new Yt(t,null,new X(r))}{if(!(t instanceof Yt||t instanceof gr))throw new Y(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Qy(r),new Yt(t.firestore,t instanceof gr?t.converter:null,new X(r))}}/**
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
 */class E4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new VE(this,"async_queue_retry"),this.hu=()=>{const n=wf();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=wf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Wr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!na(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Kp.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&Z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Jy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class cu extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new E4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tT(this),this._firestoreClient.terminate()}}function T4(t,e){const n=typeof t=="object"?t:Ip(),r=typeof t=="string"?t:"(default)",i=fo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=mw("firestore");o&&y4(i,...o)}return i}function eT(t){return t._firestoreClient||tT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tT(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,c,h){return new Qb(l,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,JE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new d4(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oo(pt.fromBase64String(e))}catch(n){throw new Y(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oo(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Jp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nT{constructor(e){this._methodName=e}}/**
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
 */class Zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const I4=/^__.*__$/;class A4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}function rT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class em{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new em(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return fu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(rT(this.fu)&&I4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class S4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}Fu(e,n,r,i=!1){return new em({fu:e,methodName:n,vu:r,path:et.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function k4(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new S4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P4(t,e,n,r,i,o={}){const s=t.Fu(o.merge||o.mergeFields?2:0,e,n,i);aT("Data must be an object, but it was:",s,r);const l=oT(r,s);let u,c;if(o.merge)u=new an(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const p of o.mergeFields){const m=R4(e,p,n);if(!s.contains(m))throw new Y(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);b4(h,m)||h.push(m)}u=new an(h),c=s.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=s.fieldTransforms;return new A4(new Wt(l),u,c)}function iT(t,e){if(sT(t=Zt(t)))return aT("Unsupported field value:",e,t),oT(t,e);if(t instanceof nT)return function(r,i){if(!rT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=iT(l,i.bu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=qe.fromDate(r);return{timestampValue:lu(i.serializer,o)}}if(r instanceof qe){const o=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(i.serializer,o)}}if(r instanceof Zp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oo)return{bytesValue:kE(i.serializer,r._byteString)};if(r instanceof Yt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Du(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Up(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Xp(r)}`)}(t,e)}function oT(t,e){const n={};return eE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(t,(r,i)=>{const o=iT(i,e.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function sT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Zp||t instanceof oo||t instanceof Yt||t instanceof nT)}function aT(t,e,n){if(!sT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xp(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function R4(t,e,n){if((e=Zt(e))instanceof Jp)return e._internalPath;if(typeof e=="string")return lT(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const C4=new RegExp("[~\\*/\\[\\]]");function lT(t,e,n){if(e.search(C4)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jp(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y(M.INVALID_ARGUMENT,l+t+u)}function b4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class uT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x4 extends uT{data(){return super.data()}}function cT(t,e){return typeof e=="string"?lT(t,e):e instanceof Jp?e._internalPath:e._delegate._internalPath}/**
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
 */function N4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class D4{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return po(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new Zp(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Np(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ve(NE(r));const i=new Bs(r.get(1),r.get(3)),o=new X(r.popFirst(5));return i.isEqual(n)||zn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function O4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fT extends uT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Il extends fT{data(e={}){return super.data(e)}}class V4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new Yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return l.type!==0&&(c=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),h=s.indexOf(l.doc.key)),{type:L4(l.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function L4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class hT extends D4{constructor(e){super(),this.firestore=e}convertBytes(e){return new oo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function M4(t,e){const n=ms(t.firestore,cu),r=w4(t),i=O4(t.converter,e);return U4(n,[P4(k4(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dn.exists(!1))]).then(()=>r)}function F4(t,...e){var n,r,i;t=Zt(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Jy(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Jy(e[s])){const p=e[s];e[s]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[s+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof Yt)c=ms(t.firestore,cu),h=Lp(t._key.path),u={next:p=>{e[s]&&e[s](j4(c,t,p))},error:e[s+1],complete:e[s+2]};else{const p=ms(t,ic);c=ms(p.firestore,cu),h=p._query;const m=new hT(c);u={next:w=>{e[s]&&e[s](new V4(c,m,p,w))},error:e[s+1],complete:e[s+2]},N4(t._query)}return function(m,w,P,C){const N=new h4(C),T=new KN(w,N,P);return m.asyncQueue.enqueueAndForget(async()=>BN(await Ky(m),T)),()=>{N.$a(),m.asyncQueue.enqueueAndForget(async()=>HN(await Ky(m),T))}}(eT(c),h,l,u)}function U4(t,e){return function(r,i){const o=new Wr;return r.asyncQueue.enqueueAndForget(async()=>r4(await g4(r),i,o)),o.promise}(eT(t),e)}function j4(t,e,n){const r=n.docs.get(e._key),i=new hT(t);return new fT(t,i,e._key,r,new Yo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ho=i})(Iw),$n(new Tn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new cu(new Ob(r.getProvider("auth-internal")),new Fb(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(c.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Qt(vy,"4.6.3",e),Qt(vy,"4.6.3","esm2017")})();const dT="@firebase/installations",tm="0.6.7";/**
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
 */const pT=1e4,mT=`w:${tm}`,gT="FIS_v2",$4="https://firebaseinstallations.googleapis.com/v1",z4=60*60*1e3,B4="installations",H4="Installations";/**
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
 */const q4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oi=new Wu(B4,H4,q4);function vT(t){return t instanceof Wn&&t.code.includes("request-failed")}/**
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
 */function yT({projectId:t}){return`${$4}/projects/${t}/installations`}function _T(t){return{token:t.token,requestStatus:2,expiresIn:K4(t.expiresIn),creationTime:Date.now()}}async function wT(t,e){const r=(await e.json()).error;return oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ET({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function W4(t,{refreshToken:e}){const n=ET(t);return n.append("Authorization",G4(e)),n}async function TT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K4(t){return Number(t.replace("s","000"))}function G4(t){return`${gT} ${t}`}/**
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
 */async function Q4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yT(t),i=ET(t),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:n,authVersion:gT,appId:t.appId,sdkVersion:mT},l={method:"POST",headers:i,body:JSON.stringify(s)},u=await TT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:_T(c.authToken)}}else throw await wT("Create Installation",u)}/**
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
 */function IT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Y4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const X4=/^[cdef][\w-]{21}$/,ed="";function J4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Z4(t);return X4.test(n)?n:ed}catch{return ed}}function Z4(t){return Y4(t).substr(0,22)}/**
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
 */function oc(t){return`${t.appName}!${t.appId}`}/**
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
 */const AT=new Map;function ST(t,e){const n=oc(t);kT(n,e),eD(n,e)}function kT(t,e){const n=AT.get(t);if(n)for(const r of n)r(e)}function eD(t,e){const n=tD();n&&n.postMessage({key:t,fid:e}),nD()}let $r=null;function tD(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=t=>{kT(t.data.key,t.data.fid)}),$r}function nD(){AT.size===0&&$r&&($r.close(),$r=null)}/**
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
 */const rD="firebase-installations-database",iD=1,si="firebase-installations-store";let Tf=null;function nm(){return Tf||(Tf=Tw(rD,iD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(si)}}})),Tf}async function hu(t,e){const n=oc(t),i=(await nm()).transaction(si,"readwrite"),o=i.objectStore(si),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&ST(t,e.fid),e}async function PT(t){const e=oc(t),r=(await nm()).transaction(si,"readwrite");await r.objectStore(si).delete(e),await r.done}async function sc(t,e){const n=oc(t),i=(await nm()).transaction(si,"readwrite"),o=i.objectStore(si),s=await o.get(n),l=e(s);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!s||s.fid!==l.fid)&&ST(t,l.fid),l}/**
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
 */async function rm(t){let e;const n=await sc(t.appConfig,r=>{const i=oD(r),o=sD(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===ed?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oD(t){const e=t||{fid:J4(),registrationStatus:0};return RT(e)}function sD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=aD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lD(t)}:{installationEntry:e}}async function aD(t,e){try{const n=await Q4(t,e);return hu(t.appConfig,n)}catch(n){throw vT(n)&&n.customData.serverCode===409?await PT(t.appConfig):await hu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lD(t){let e=await Zy(t.appConfig);for(;e.registrationStatus===1;)await IT(100),e=await Zy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rm(t);return r||n}return e}function Zy(t){return sc(t,e=>{if(!e)throw oi.create("installation-not-found");return RT(e)})}function RT(t){return uD(t)?{fid:t.fid,registrationStatus:0}:t}function uD(t){return t.registrationStatus===1&&t.registrationTime+pT<Date.now()}/**
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
 */async function cD({appConfig:t,heartbeatServiceProvider:e},n){const r=fD(t,n),i=W4(t,n),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:mT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},u=await TT(()=>fetch(r,l));if(u.ok){const c=await u.json();return _T(c)}else throw await wT("Generate Auth Token",u)}function fD(t,{fid:e}){return`${yT(t)}/${e}/authTokens:generate`}/**
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
 */async function im(t,e=!1){let n;const r=await sc(t.appConfig,o=>{if(!CT(o))throw oi.create("not-registered");const s=o.authToken;if(!e&&pD(s))return o;if(s.requestStatus===1)return n=hD(t,e),o;{if(!navigator.onLine)throw oi.create("app-offline");const l=gD(o);return n=dD(t,l),l}});return n?await n:r.authToken}async function hD(t,e){let n=await e0(t.appConfig);for(;n.authToken.requestStatus===1;)await IT(100),n=await e0(t.appConfig);const r=n.authToken;return r.requestStatus===0?im(t,e):r}function e0(t){return sc(t,e=>{if(!CT(e))throw oi.create("not-registered");const n=e.authToken;return vD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dD(t,e){try{const n=await cD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hu(t.appConfig,r),n}catch(n){if(vT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await PT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hu(t.appConfig,r)}throw n}}function CT(t){return t!==void 0&&t.registrationStatus===2}function pD(t){return t.requestStatus===2&&!mD(t)}function mD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+z4}function gD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vD(t){return t.requestStatus===1&&t.requestTime+pT<Date.now()}/**
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
 */async function yD(t){const e=t,{installationEntry:n,registrationPromise:r}=await rm(e);return r?r.catch(console.error):im(e).catch(console.error),n.fid}/**
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
 */async function _D(t,e=!1){const n=t;return await wD(n),(await im(n,e)).token}async function wD(t){const{registrationPromise:e}=await rm(t);e&&await e}/**
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
 */function ED(t){if(!t||!t.options)throw If("App Configuration");if(!t.name)throw If("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw If(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function If(t){return oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const bT="installations",TD="installations-internal",ID=t=>{const e=t.getProvider("app").getImmediate(),n=ED(e),r=fo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AD=t=>{const e=t.getProvider("app").getImmediate(),n=fo(e,bT).getImmediate();return{getId:()=>yD(n),getToken:i=>_D(n,i)}};function SD(){$n(new Tn(bT,ID,"PUBLIC")),$n(new Tn(TD,AD,"PRIVATE"))}SD();Qt(dT,tm);Qt(dT,tm,"esm2017");/**
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
 */const du="analytics",kD="firebase_id",PD="origin",RD=60*1e3,CD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",om="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ct=new Ep("@firebase/analytics");/**
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
 */const bD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Wu("analytics","Analytics",bD);/**
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
 */function xD(t){if(!t.startsWith(om)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return Ct.warn(e.message),""}return t}function xT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ND(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function DD(t,e){const n=ND("firebase-js-sdk-policy",{createScriptURL:xD}),r=document.createElement("script"),i=`${om}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function OD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VD(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await xT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Ct.error(l)}t("config",i,o)}async function LD(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const l=await xT(n);for(const u of s){const c=l.find(p=>p.measurementId===u),h=c&&e[c.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Ct.error(o)}}function MD(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[l,u]=s;await LD(t,e,n,l,u)}else if(o==="config"){const[l,u]=s;await VD(t,e,n,r,l,u)}else if(o==="consent"){const[l,u]=s;t("consent",l,u)}else if(o==="get"){const[l,u,c]=s;t("get",l,u,c)}else if(o==="set"){const[l]=s;t("set",l)}else t(o,...s)}catch(l){Ct.error(l)}}return i}function FD(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=MD(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function UD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(om)&&n.src.includes(t))return n;return null}/**
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
 */const jD=30,$D=1e3;class zD{constructor(e={},n=$D){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const NT=new zD;function BD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:BD(r)},o=CD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function qD(t,e=NT,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Mt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Mt.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new GD;return setTimeout(async()=>{l.abort()},RD),DT({appId:r,apiKey:i,measurementId:o},s,l,e)}async function DT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=NT){var o;const{appId:s,measurementId:l}=t;try{await WD(r,e)}catch(u){if(l)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:l};throw u}try{const u=await HD(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!KD(c)){if(i.deleteThrottleMetadata(s),l)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?ny(n,i.intervalMillis,jD):ny(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ct.debug(`Calling attemptFetch again in ${h} millis`),DT(t,p,r,i)}}function WD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KD(t){if(!(t instanceof Wn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
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
 */async function YD(){if(yw())try{await _w()}catch(t){return Ct.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ct.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XD(t,e,n,r,i,o,s){var l;const u=qD(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ct.error(w)),e.push(u);const c=YD().then(w=>{if(w)return r.getId()}),[h,p]=await Promise.all([u,c]);UD(o)||DD(o,h.measurementId),i("js",new Date);const m=(l=s==null?void 0:s.config)!==null&&l!==void 0?l:{};return m[PD]="firebase",m.update=!0,p!=null&&(m[kD]=p),i("config",h.measurementId,m),h.measurementId}/**
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
 */class JD{constructor(e){this.app=e}_delete(){return delete gs[this.app.options.appId],Promise.resolve()}}let gs={},t0=[];const n0={};let Af="dataLayer",ZD="gtag",r0,OT,i0=!1;function eO(){const t=[];if(nR()&&t.push("This is a browser extension environment."),iR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});Ct.warn(n.message)}}function tO(t,e,n){eO();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(gs[r]!=null)throw Mt.create("already-exists",{id:r});if(!i0){OD(Af);const{wrappedGtag:o,gtagCore:s}=FD(gs,t0,n0,Af,ZD);OT=o,r0=s,i0=!0}return gs[r]=XD(t,t0,n0,e,r0,Af,n),new JD(t)}function nO(t=Ip()){t=Zt(t);const e=fo(t,du);return e.isInitialized()?e.getImmediate():rO(t)}function rO(t,e={}){const n=fo(t,du);if(n.isInitialized()){const i=n.getImmediate();if(tu(e,n.getOptions()))return i;throw Mt.create("already-initialized")}return n.initialize({options:e})}function iO(t,e,n,r){t=Zt(t),QD(OT,gs[t.app.options.appId],e,n,r).catch(i=>Ct.error(i))}const o0="@firebase/analytics",s0="0.10.4";function oO(){$n(new Tn(du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tO(r,i,n)},"PUBLIC")),$n(new Tn("analytics-internal",t,"PRIVATE")),Qt(o0,s0),Qt(o0,s0,"esm2017");function t(e){try{const n=e.getProvider(du).getImmediate();return{logEvent:(r,i,o)=>iO(n,r,i,o)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}oO();const sO={apiKey:"AIzaSyD2Cx1MoR-pNxrXFSziAUbIJ7gXG4cX_y4",authDomain:"react-airbnb-7128b.firebaseapp.com",projectId:"react-airbnb-7128b",storageBucket:"react-airbnb-7128b.appspot.com",messagingSenderId:"250116000673",appId:"1:250116000673:web:1134c09948145a43de59e0",measurementId:"G-XHNNTNV6FP"},sm=Aw(sO);nO(sm);const aO=T4(sm),a0=_4(aO,"cards"),VT=Rb(sm);Hw(VT);function lO(t){const e=t.formData,n=t.handleSubmit,r=t.handleChange,[i,o]=ne.useState(null);async function s(){if(i){const u=Hw(VT,`files/${BP()}`),c={contentType:i.type};return await kb(u,i,c),await Pb(u)}return""}async function l(u){u.preventDefault();const c=await s();n(u,{...e,coverImg:c})}return K.jsxs("div",{className:"form-container",children:[K.jsx("h1",{children:"Add More Cards"}),K.jsxs("form",{onSubmit:l,children:[K.jsx("input",{type:"text",placeholder:"Title",onChange:r,name:"title",value:e.title,required:!0}),K.jsx("textarea",{placeholder:"Description",onChange:r,name:"description",value:e.description,required:!0}),K.jsx("input",{type:"number",placeholder:"Price",name:"price",onChange:r,value:e.price,required:!0}),K.jsx("input",{type:"file",name:"coverImg",accept:"image/png, image/jpeg",onChange:u=>o(u.target.files[0]),required:!0}),K.jsx("input",{type:"number",placeholder:"Rating",onChange:r,name:"rating",value:e.rating,required:!0}),K.jsx("input",{type:"number",placeholder:"Review Count",onChange:r,name:"reviewCount",value:e.reviewCount,required:!0}),K.jsx("input",{type:"text",placeholder:"Location",name:"location",value:e.location,onChange:r,required:!0}),K.jsx("input",{type:"number",placeholder:"Open Spots",name:"openSpots",value:e.openSpots,onChange:r,required:!0}),K.jsx("button",{type:"submit",children:"Add Card"})]})]})}function uO(){const[t,e]=ne.useState([]),[n,r]=ne.useState({title:"",description:"",price:"",coverImg:"",rating:"",reviewCount:"",location:"",openSpots:""}),[i,o]=ne.useState("");ne.useEffect(()=>F4(a0,function(h){const p=h.docs.map(m=>({...m.data(),id:m.id}));e(p)}),[]);const s=async(c,h)=>{c.preventDefault();try{await M4(a0,h),o("Card added successfully!"),r({title:"",description:"",price:"",coverImg:"",rating:"",reviewCount:"",location:"",openSpots:""})}catch(p){console.error("Error adding document: ",p),o("Failed to add card. Please try again.")}};function l(c){const{name:h,value:p}=c.target;r(m=>({...m,[h]:p}))}const u=t.map(c=>K.jsx($P,{item:c},c.id));return K.jsx(O2,{children:K.jsxs(K.Fragment,{children:[K.jsx(F2,{}),K.jsxs(D2,{children:[K.jsxs(Av,{exact:!0,path:"/React-app-Airbnb/",children:[K.jsx(UP,{}),K.jsx("section",{className:"card-list",children:u})]}),K.jsxs(Av,{path:"/React-app-Airbnb/create",children:[K.jsx(lO,{formData:n,handleChange:l,handleSubmit:s}),i&&K.jsx("div",{className:"notification",children:i})]})]}),K.jsx(MP,{})]})})}Sf.createRoot(document.getElementById("root")).render(K.jsx(ne.StrictMode,{children:K.jsx(uO,{})}));
