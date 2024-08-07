var hr=r=>{throw TypeError(r)};var $e=(r,t,e)=>t.has(r)||hr("Cannot "+e);var c=(r,t,e)=>($e(r,t,"read from private field"),e?e.call(r):t.get(r)),M=(r,t,e)=>t.has(r)?hr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),d=(r,t,e,n)=>($e(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e),Ce=(r,t,e)=>($e(r,t,"access private method"),e);var _e=(r,t,e,n)=>({set _(o){d(r,t,o,e)},get _(){return c(r,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=globalThis,er=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rr=Symbol(),pr=new WeakMap;let Dr=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(er&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=pr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&pr.set(e,t))}return t}toString(){return this.cssText}};const fn=r=>new Dr(typeof r=="string"?r:r+"",void 0,rr),mt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new Dr(e,r,rr)},mn=(r,t)=>{if(er)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),o=Kt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},fr=er?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return fn(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dn,defineProperty:yn,getOwnPropertyDescriptor:gn,getOwnPropertyNames:vn,getOwnPropertySymbols:Mn,getPrototypeOf:bn}=Object,G=globalThis,mr=G.trustedTypes,wn=mr?mr.emptyScript:"",ke=G.reactiveElementPolyfillSupport,It=(r,t)=>r,se={toAttribute(r,t){switch(t){case Boolean:r=r?wn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nr=(r,t)=>!dn(r,t),dr={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:nr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),G.litPropertyMetadata??(G.litPropertyMetadata=new WeakMap);class dt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&yn(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){const{get:o,set:i}=gn(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dr}static _$Ei(){if(this.hasOwnProperty(It("elementProperties")))return;const t=bn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(It("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(It("properties"))){const e=this.properties,n=[...vn(e),...Mn(e)];for(const o of n)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)e.unshift(fr(o))}else t!==void 0&&e.push(fr(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:se).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:se;this._$Em=o,this[o]=a.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??nr)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(e)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},dt[It("elementProperties")]=new Map,dt[It("finalized")]=new Map,ke==null||ke({ReactiveElement:dt}),(G.reactiveElementVersions??(G.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,ae=Ot.trustedTypes,yr=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,or="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,ir="?"+B,$n=`<${ir}>`,ct=document,Lt=()=>ct.createComment(""),Dt=r=>r===null||typeof r!="object"&&typeof r!="function",Ur=Array.isArray,qr=r=>Ur(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,vr=/>/g,J=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,br=/"/g,Rr=/^(?:script|style|textarea|title)$/i,Cn=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),S=Cn(1),X=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),wr=new WeakMap,rt=ct.createTreeWalker(ct,129);function Br(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yr!==void 0?yr.createHTML(t):t}const jr=(r,t)=>{const e=r.length-1,n=[];let o,i=t===2?"<svg>":"",s=At;for(let a=0;a<e;a++){const l=r[a];let h,f,p=-1,y=0;for(;y<l.length&&(s.lastIndex=y,f=s.exec(l),f!==null);)y=s.lastIndex,s===At?f[1]==="!--"?s=gr:f[1]!==void 0?s=vr:f[2]!==void 0?(Rr.test(f[2])&&(o=RegExp("</"+f[2],"g")),s=J):f[3]!==void 0&&(s=J):s===J?f[0]===">"?(s=o??At,p=-1):f[1]===void 0?p=-2:(p=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?J:f[3]==='"'?br:Mr):s===br||s===Mr?s=J:s===gr||s===vr?s=At:(s=J,o=void 0);const g=s===J&&r[a+1].startsWith("/>")?" ":"";i+=s===At?l+$n:p>=0?(n.push(h),l.slice(0,p)+or+l.slice(p)+B+g):l+B+(p===-2?a:g)}return[Br(r,i+(r[e]||"<?>")+(t===2?"</svg>":"")),n]};class Ut{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[h,f]=jr(t,e);if(this.el=Ut.createElement(h,n),rt.currentNode=this.el.content,e===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=rt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(or)){const y=f[s++],g=o.getAttribute(p).split(B),v=/([.?@])?(.*)/.exec(y);l.push({type:1,index:i,name:v[2],strings:g,ctor:v[1]==="."?Vr:v[1]==="?"?Hr:v[1]==="@"?Zr:Vt}),o.removeAttribute(p)}else p.startsWith(B)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(Rr.test(o.tagName)){const p=o.textContent.split(B),y=p.length-1;if(y>0){o.textContent=ae?ae.emptyScript:"";for(let g=0;g<y;g++)o.append(p[g],Lt()),rt.nextNode(),l.push({type:2,index:++i});o.append(p[y],Lt())}}}else if(o.nodeType===8)if(o.data===ir)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(B,p+1))!==-1;)l.push({type:7,index:i}),p+=B.length-1}i++}}static createElement(t,e){const n=ct.createElement("template");return n.innerHTML=t,n}}function ht(r,t,e=r,n){var s,a;if(t===X)return t;let o=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl;const i=Dt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=o:e._$Cl=o),o!==void 0&&(t=ht(r,o._$AS(r,t.values),o,n)),t}class Fr{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??ct).importNode(e,!0);rt.currentNode=o;let i=rt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Ct(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new Wr(i,this,t)),this._$AV.push(h),l=n[++a]}s!==(l==null?void 0:l.index)&&(i=rt.nextNode(),s++)}return rt.currentNode=ct,o}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Ct{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ht(this,t,e),Dt(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==X&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qr(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&Dt(this._$AH)?this._$AA.nextSibling.data=t:this.T(ct.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ut.createElement(Br(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{const s=new Fr(o,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=wr.get(t.strings);return e===void 0&&wr.set(t.strings,e=new Ut(t)),e}k(t){Ur(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const i of t)o===e.length?e.push(n=new Ct(this.S(Lt()),this.S(Lt()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=ht(this,t,e,0),s=!Dt(t)||t!==this._$AH&&t!==X,s&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=ht(this,a[n+l],e,l),h===X&&(h=this._$AH[l]),s||(s=!Dt(h)||h!==this._$AH[l]),h===$?t=$:t!==$&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}s&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vr extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class Hr extends Vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Zr extends Vt{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=ht(this,t,e,0)??$)===X)return;const n=this._$AH,o=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Wr{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ht(this,t)}}const _n={P:or,A:B,C:ir,M:1,L:jr,R:Fr,D:qr,V:ht,I:Ct,H:Vt,N:Hr,U:Zr,B:Vr,F:Wr},Ne=Ot.litHtmlPolyfillSupport;Ne==null||Ne(Ut,Ct),(Ot.litHtmlVersions??(Ot.litHtmlVersions=[])).push("3.1.4");const kn=(r,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(e==null?void 0:e.renderBefore)??null;n._$litPart$=o=new Ct(t.insertBefore(Lt(),i),i,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return X}};var Lr;P._$litElement$=!0,P.finalized=!0,(Lr=globalThis.litElementHydrateSupport)==null||Lr.call(globalThis,{LitElement:P});const Ee=globalThis.litElementPolyfillSupport;Ee==null||Ee({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:nr},Nn=(r=An,t,e)=>{const{kind:n,metadata:o}=e;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(e.name,r),n==="accessor"){const{name:s}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,r)},init(a){return a!==void 0&&this.P(s,void 0,r),a}}}if(n==="setter"){const{name:s}=e;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,r)}}throw Error("Unsupported decorator location: "+n)};function C(r){return(t,e)=>typeof e=="object"?Nn(r,t,e):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(r,t){return(e,n,o)=>{const i=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(r))??null};return zr(e,n,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let En;function Sn(r){return(t,e)=>zr(t,e,{get(){return(this.renderRoot??En??(En=document.createDocumentFragment())).querySelectorAll(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xr=r=>(...t)=>({_$litDirective$:r,values:t});let Kr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:xn}=_n,$r=()=>document.createComment(""),Nt=(r,t,e)=>{var i;const n=r._$AA.parentNode,o=t===void 0?r._$AB:t._$AA;if(e===void 0){const s=n.insertBefore($r(),o),a=n.insertBefore($r(),o);e=new xn(s,a,r,r.options)}else{const s=e._$AB.nextSibling,a=e._$AM,l=a!==r;if(l){let h;(i=e._$AQ)==null||i.call(e,r),e._$AM=r,e._$AP!==void 0&&(h=r._$AU)!==a._$AU&&e._$AP(h)}if(s!==o||l){let h=e._$AA;for(;h!==s;){const f=h.nextSibling;n.insertBefore(h,o),h=f}}}return e},tt=(r,t,e=r)=>(r._$AI(t,e),r),Pn={},In=(r,t=Pn)=>r._$AH=t,On=r=>r._$AH,Se=r=>{var n;(n=r._$AP)==null||n.call(r,!1,!0);let t=r._$AA;const e=r._$AB.nextSibling;for(;t!==e;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cr=(r,t,e)=>{const n=new Map;for(let o=t;o<=e;o++)n.set(r[o],o);return n},Yr=Xr(class extends Kr{constructor(r){if(super(r),r.type!==Gr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);const o=[],i=[];let s=0;for(const a of r)o[s]=n?n(a,s):s,i[s]=e(a,s),s++;return{values:i,keys:o}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,n]){const o=On(r),{values:i,keys:s}=this.dt(t,e,n);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??(this.ut=[]),l=[];let h,f,p=0,y=o.length-1,g=0,v=i.length-1;for(;p<=y&&g<=v;)if(o[p]===null)p++;else if(o[y]===null)y--;else if(a[p]===s[g])l[g]=tt(o[p],i[g]),p++,g++;else if(a[y]===s[v])l[v]=tt(o[y],i[v]),y--,v--;else if(a[p]===s[v])l[v]=tt(o[p],i[v]),Nt(r,l[v+1],o[p]),p++,v--;else if(a[y]===s[g])l[g]=tt(o[y],i[g]),Nt(r,o[p],o[y]),y--,g++;else if(h===void 0&&(h=Cr(s,g,v),f=Cr(a,p,y)),h.has(a[p]))if(h.has(a[y])){const A=f.get(s[g]),Q=A!==void 0?o[A]:null;if(Q===null){const kt=Nt(r,o[p]);tt(kt,i[g]),l[g]=kt}else l[g]=tt(Q,i[g]),Nt(r,o[p],Q),o[A]=null;g++}else Se(o[y]),y--;else Se(o[p]),p++;for(;g<=v;){const A=Nt(r,l[v+1]);tt(A,i[g]),l[g++]=A}for(;p<=y;){const A=o[p++];A!==null&&Se(A)}return this.ut=s,In(r,l),X}});function Tn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ln=function(r,t,e){if(r==null||t==null)return r;var n=String(r),o=typeof t=="number"?t:parseInt(t,10);if(isNaN(o)||!isFinite(o))return n;var i=n.length;if(i>=o)return n;var s=e==null?"":String(e);s===""&&(s=" ");for(var a=o-i;s.length<a;)s+=s;var l=s.length>a?s.substr(0,a):s;return n+l};const xe=Tn(Ln);var D=9e15,Gt=function(){for(var r=[],t=-323;t<=308;t++)r.push(+("1e"+t));return function(e){return r[e+323]}}(),u=function(r){return r instanceof m?r:new m(r)},N=function(r,t){return new m().fromMantissaExponent(r,t)},et=function(r,t){return new m().fromMantissaExponent_noNormalize(r,t)};function Dn(r,t,e,n){var o=t.mul(e.pow(n));return m.floor(r.div(o).mul(e.sub(1)).add(1).log10()/e.log10())}function Un(r,t,e,n){return t.mul(e.pow(n)).mul(m.sub(1,e.pow(r))).div(m.sub(1,e))}var m=function(){function r(t){this.mantissa=NaN,this.exponent=NaN,t===void 0?(this.m=0,this.e=0):t instanceof r?this.fromDecimal(t):typeof t=="number"?this.fromNumber(t):this.fromString(t)}return Object.defineProperty(r.prototype,"m",{get:function(){return this.mantissa},set:function(t){this.mantissa=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"e",{get:function(){return this.exponent},set:function(t){this.exponent=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"s",{get:function(){return this.sign()},set:function(t){if(t===0)return this.e=0,void(this.m=0);this.sgn()!==t&&(this.m=-this.m)},enumerable:!1,configurable:!0}),r.fromMantissaExponent=function(t,e){return new r().fromMantissaExponent(t,e)},r.fromMantissaExponent_noNormalize=function(t,e){return new r().fromMantissaExponent_noNormalize(t,e)},r.fromDecimal=function(t){return new r().fromDecimal(t)},r.fromNumber=function(t){return new r().fromNumber(t)},r.fromString=function(t){return new r().fromString(t)},r.fromValue=function(t){return new r().fromValue(t)},r.fromValue_noAlloc=function(t){return t instanceof r?t:new r(t)},r.abs=function(t){return u(t).abs()},r.neg=function(t){return u(t).neg()},r.negate=function(t){return u(t).neg()},r.negated=function(t){return u(t).neg()},r.sign=function(t){return u(t).sign()},r.sgn=function(t){return u(t).sign()},r.round=function(t){return u(t).round()},r.floor=function(t){return u(t).floor()},r.ceil=function(t){return u(t).ceil()},r.trunc=function(t){return u(t).trunc()},r.add=function(t,e){return u(t).add(e)},r.plus=function(t,e){return u(t).add(e)},r.sub=function(t,e){return u(t).sub(e)},r.subtract=function(t,e){return u(t).sub(e)},r.minus=function(t,e){return u(t).sub(e)},r.mul=function(t,e){return u(t).mul(e)},r.multiply=function(t,e){return u(t).mul(e)},r.times=function(t,e){return u(t).mul(e)},r.div=function(t,e){return u(t).div(e)},r.divide=function(t,e){return u(t).div(e)},r.recip=function(t){return u(t).recip()},r.reciprocal=function(t){return u(t).recip()},r.reciprocate=function(t){return u(t).reciprocate()},r.cmp=function(t,e){return u(t).cmp(e)},r.compare=function(t,e){return u(t).cmp(e)},r.eq=function(t,e){return u(t).eq(e)},r.equals=function(t,e){return u(t).eq(e)},r.neq=function(t,e){return u(t).neq(e)},r.notEquals=function(t,e){return u(t).notEquals(e)},r.lt=function(t,e){return u(t).lt(e)},r.lte=function(t,e){return u(t).lte(e)},r.gt=function(t,e){return u(t).gt(e)},r.gte=function(t,e){return u(t).gte(e)},r.max=function(t,e){return u(t).max(e)},r.min=function(t,e){return u(t).min(e)},r.clamp=function(t,e,n){return u(t).clamp(e,n)},r.clampMin=function(t,e){return u(t).clampMin(e)},r.clampMax=function(t,e){return u(t).clampMax(e)},r.cmp_tolerance=function(t,e,n){return u(t).cmp_tolerance(e,n)},r.compare_tolerance=function(t,e,n){return u(t).cmp_tolerance(e,n)},r.eq_tolerance=function(t,e,n){return u(t).eq_tolerance(e,n)},r.equals_tolerance=function(t,e,n){return u(t).eq_tolerance(e,n)},r.neq_tolerance=function(t,e,n){return u(t).neq_tolerance(e,n)},r.notEquals_tolerance=function(t,e,n){return u(t).notEquals_tolerance(e,n)},r.lt_tolerance=function(t,e,n){return u(t).lt_tolerance(e,n)},r.lte_tolerance=function(t,e,n){return u(t).lte_tolerance(e,n)},r.gt_tolerance=function(t,e,n){return u(t).gt_tolerance(e,n)},r.gte_tolerance=function(t,e,n){return u(t).gte_tolerance(e,n)},r.log10=function(t){return u(t).log10()},r.absLog10=function(t){return u(t).absLog10()},r.pLog10=function(t){return u(t).pLog10()},r.log=function(t,e){return u(t).log(e)},r.log2=function(t){return u(t).log2()},r.ln=function(t){return u(t).ln()},r.logarithm=function(t,e){return u(t).logarithm(e)},r.pow10=function(t){return Number.isInteger(t)?et(1,t):N(Math.pow(10,t%1),Math.trunc(t))},r.pow=function(t,e){return typeof t=="number"&&t===10&&typeof e=="number"&&Number.isInteger(e)?et(1,e):u(t).pow(e)},r.exp=function(t){return u(t).exp()},r.sqr=function(t){return u(t).sqr()},r.sqrt=function(t){return u(t).sqrt()},r.cube=function(t){return u(t).cube()},r.cbrt=function(t){return u(t).cbrt()},r.dp=function(t){return u(t).dp()},r.decimalPlaces=function(t){return u(t).dp()},r.affordGeometricSeries=function(t,e,n,o){return Dn(u(t),u(e),u(n),o)},r.sumGeometricSeries=function(t,e,n,o){return Un(t,u(e),u(n),o)},r.affordArithmeticSeries=function(t,e,n,o){return function(i,s,a,l){var h=s.add(l.mul(a)).sub(a.div(2)),f=h.pow(2);return h.neg().add(f.add(a.mul(i).mul(2)).sqrt()).div(a).floor()}(u(t),u(e),u(n),u(o))},r.sumArithmeticSeries=function(t,e,n,o){return function(i,s,a,l){var h=s.add(l.mul(a));return i.div(2).mul(h.mul(2).plus(i.sub(1).mul(a)))}(u(t),u(e),u(n),u(o))},r.efficiencyOfPurchase=function(t,e,n){return function(o,i,s){return o.div(i).add(o.div(s))}(u(t),u(e),u(n))},r.randomDecimalForTesting=function(t){if(20*Math.random()<1)return et(0,0);var e=10*Math.random();10*Math.random()<1&&(e=Math.round(e)),e*=Math.sign(2*Math.random()-1);var n=Math.floor(Math.random()*t*2)-t;return N(e,n)},r.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(this.m===0)return this.m=0,this.e=0,this;var t=Math.floor(Math.log10(Math.abs(this.m)));return this.m=t===-324?10*this.m/1e-323:this.m/Gt(t),this.e+=t,this},r.prototype.fromMantissaExponent=function(t,e){return isFinite(t)&&isFinite(e)?(this.m=t,this.e=e,this.normalize(),this):(t=Number.NaN,e=Number.NaN,this)},r.prototype.fromMantissaExponent_noNormalize=function(t,e){return this.m=t,this.e=e,this},r.prototype.fromDecimal=function(t){return this.m=t.m,this.e=t.e,this},r.prototype.fromNumber=function(t){return isNaN(t)?(this.m=Number.NaN,this.e=Number.NaN):t===Number.POSITIVE_INFINITY?(this.m=1,this.e=D):t===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=D):t===0?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(t))),this.m=this.e===-324?10*t/1e-323:t/Gt(this.e),this.normalize()),this},r.prototype.fromString=function(t){if(t.indexOf("e")!==-1){var e=t.split("e");this.m=parseFloat(e[0]),this.e=parseFloat(e[1]),this.normalize()}else if(t==="NaN")this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(t)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+t);return this},r.prototype.fromValue=function(t){return t instanceof r?this.fromDecimal(t):typeof t=="number"?this.fromNumber(t):typeof t=="string"?this.fromString(t):(this.m=0,this.e=0,this)},r.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(this.e===-324)return this.m>0?5e-324:-5e-324;var t=this.m*Gt(this.e);if(!isFinite(t)||this.e<0)return t;var e=Math.round(t);return Math.abs(e-t)<1e-10?e:t},r.prototype.mantissaWithDecimalPlaces=function(t){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(this.m===0)return 0;var e=t+1,n=Math.ceil(Math.log10(Math.abs(this.m))),o=Math.round(this.m*Math.pow(10,e-n))*Math.pow(10,n-e);return parseFloat(o.toFixed(Math.max(e-n,0)))},r.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=D?this.m>0?"Infinity":"-Infinity":this.e<=-D||this.m===0?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},r.prototype.toExponential=function(t){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=D)return this.m>0?"Infinity":"-Infinity";if(this.e<=-D||this.m===0)return"0"+(t>0?xe(".",t+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(t);isFinite(t)||(t=17);var e=t+1,n=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,e-n))*Math.pow(10,n-e)).toFixed(Math.max(e-n,0))+"e"+(this.e>=0?"+":"")+this.e},r.prototype.toFixed=function(t){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=D?this.m>0?"Infinity":"-Infinity":this.e<=-D||this.m===0?"0"+(t>0?xe(".",t+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(t>0?xe(".",t+1,"0"):""):this.toNumber().toFixed(t)},r.prototype.toPrecision=function(t){return this.e<=-7?this.toExponential(t-1):t>this.e?this.toFixed(t-this.e-1):this.toExponential(t-1)},r.prototype.valueOf=function(){return this.toString()},r.prototype.toJSON=function(){return this.toString()},r.prototype.toStringWithDecimalPlaces=function(t){return this.toExponential(t)},r.prototype.abs=function(){return et(Math.abs(this.m),this.e)},r.prototype.neg=function(){return et(-this.m,this.e)},r.prototype.negate=function(){return this.neg()},r.prototype.negated=function(){return this.neg()},r.prototype.sign=function(){return Math.sign(this.m)},r.prototype.sgn=function(){return this.sign()},r.prototype.round=function(){return this.e<-1?new r(0):this.e<17?new r(Math.round(this.toNumber())):this},r.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new r(0):new r(-1):this.e<17?new r(Math.floor(this.toNumber())):this},r.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new r(1):new r(0):this.e<17?new r(Math.ceil(this.toNumber())):this},r.prototype.trunc=function(){return this.e<0?new r(0):this.e<17?new r(Math.trunc(this.toNumber())):this},r.prototype.add=function(t){var e,n,o=u(t);if(this.m===0)return o;if(o.m===0)return this;if(this.e>=o.e?(e=this,n=o):(e=o,n=this),e.e-n.e>17)return e;var i=Math.round(1e14*e.m+1e14*n.m*Gt(n.e-e.e));return N(i,e.e-14)},r.prototype.plus=function(t){return this.add(t)},r.prototype.sub=function(t){return this.add(u(t).neg())},r.prototype.subtract=function(t){return this.sub(t)},r.prototype.minus=function(t){return this.sub(t)},r.prototype.mul=function(t){if(typeof t=="number")return t<1e307&&t>-1e307?N(this.m*t,this.e):N(1e-307*this.m*t,this.e+307);var e=typeof t=="string"?new r(t):t;return N(this.m*e.m,this.e+e.e)},r.prototype.multiply=function(t){return this.mul(t)},r.prototype.times=function(t){return this.mul(t)},r.prototype.div=function(t){return this.mul(u(t).recip())},r.prototype.divide=function(t){return this.div(t)},r.prototype.divideBy=function(t){return this.div(t)},r.prototype.dividedBy=function(t){return this.div(t)},r.prototype.recip=function(){return N(1/this.m,-this.e)},r.prototype.reciprocal=function(){return this.recip()},r.prototype.reciprocate=function(){return this.recip()},r.prototype.cmp=function(t){var e=u(t);if(this.m===0){if(e.m===0)return 0;if(e.m<0)return 1;if(e.m>0)return-1}if(e.m===0){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return e.m<0||this.e>e.e?1:this.e<e.e?-1:this.m>e.m?1:this.m<e.m?-1:0;if(this.m<0)return e.m>0||this.e>e.e?-1:this.e<e.e||this.m>e.m?1:this.m<e.m?-1:0;throw Error("Unreachable code")},r.prototype.compare=function(t){return this.cmp(t)},r.prototype.eq=function(t){var e=u(t);return this.e===e.e&&this.m===e.m},r.prototype.equals=function(t){return this.eq(t)},r.prototype.neq=function(t){return!this.eq(t)},r.prototype.notEquals=function(t){return this.neq(t)},r.prototype.lt=function(t){var e=u(t);return this.m===0?e.m>0:e.m===0?this.m<=0:this.e===e.e?this.m<e.m:this.m>0?e.m>0&&this.e<e.e:e.m>0||this.e>e.e},r.prototype.lte=function(t){return!this.gt(t)},r.prototype.gt=function(t){var e=u(t);return this.m===0?e.m<0:e.m===0?this.m>0:this.e===e.e?this.m>e.m:this.m>0?e.m<0||this.e>e.e:e.m<0&&this.e<e.e},r.prototype.gte=function(t){return!this.lt(t)},r.prototype.max=function(t){var e=u(t);return this.lt(e)?e:this},r.prototype.min=function(t){var e=u(t);return this.gt(e)?e:this},r.prototype.clamp=function(t,e){return this.max(t).min(e)},r.prototype.clampMin=function(t){return this.max(t)},r.prototype.clampMax=function(t){return this.min(t)},r.prototype.cmp_tolerance=function(t,e){var n=u(t);return this.eq_tolerance(n,e)?0:this.cmp(n)},r.prototype.compare_tolerance=function(t,e){return this.cmp_tolerance(t,e)},r.prototype.eq_tolerance=function(t,e){var n=u(t);return r.lte(this.sub(n).abs(),r.max(this.abs(),n.abs()).mul(e))},r.prototype.equals_tolerance=function(t,e){return this.eq_tolerance(t,e)},r.prototype.neq_tolerance=function(t,e){return!this.eq_tolerance(t,e)},r.prototype.notEquals_tolerance=function(t,e){return this.neq_tolerance(t,e)},r.prototype.lt_tolerance=function(t,e){var n=u(t);return!this.eq_tolerance(n,e)&&this.lt(n)},r.prototype.lte_tolerance=function(t,e){var n=u(t);return this.eq_tolerance(n,e)||this.lt(n)},r.prototype.gt_tolerance=function(t,e){var n=u(t);return!this.eq_tolerance(n,e)&&this.gt(n)},r.prototype.gte_tolerance=function(t,e){var n=u(t);return this.eq_tolerance(n,e)||this.gt(n)},r.prototype.log10=function(){return this.e+Math.log10(this.m)},r.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},r.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},r.prototype.log=function(t){return Math.LN10/Math.log(t)*this.log10()},r.prototype.log2=function(){return 3.321928094887362*this.log10()},r.prototype.ln=function(){return 2.302585092994045*this.log10()},r.prototype.logarithm=function(t){return this.log(t)},r.prototype.pow=function(t){var e,n=t instanceof r?t.toNumber():t,o=this.e*n;if(Number.isSafeInteger(o)&&(e=Math.pow(this.m,n),isFinite(e)&&e!==0))return N(e,o);var i=Math.trunc(o),s=o-i;if(e=Math.pow(10,n*Math.log10(this.m)+s),isFinite(e)&&e!==0)return N(e,i);var a=r.pow10(n*this.absLog10());return this.sign()===-1?Math.abs(n%2)===1?a.neg():Math.abs(n%2)===0?a:new r(Number.NaN):a},r.prototype.pow_base=function(t){return u(t).pow(this)},r.prototype.factorial=function(){var t=this.toNumber()+1;return r.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))},r.prototype.exp=function(){var t=this.toNumber();return-706<t&&t<709?r.fromNumber(Math.exp(t)):r.pow(Math.E,t)},r.prototype.sqr=function(){return N(Math.pow(this.m,2),2*this.e)},r.prototype.sqrt=function(){return this.m<0?new r(Number.NaN):this.e%2!=0?N(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):N(Math.sqrt(this.m),Math.floor(this.e/2))},r.prototype.cube=function(){return N(Math.pow(this.m,3),3*this.e)},r.prototype.cbrt=function(){var t=1,e=this.m;e<0&&(t=-1,e=-e);var n=t*Math.pow(e,1/3),o=this.e%3;return N(o===1||o===-1?2.154434690031883*n:o!==0?4.641588833612778*n:n,Math.floor(this.e/3))},r.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},r.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},r.prototype.tanh=function(){return this.sinh().div(this.cosh())},r.prototype.asinh=function(){return r.ln(this.add(this.sqr().add(1).sqrt()))},r.prototype.acosh=function(){return r.ln(this.add(this.sqr().sub(1).sqrt()))},r.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:r.ln(this.add(1).div(new r(1).sub(this)))/2},r.prototype.ascensionPenalty=function(t){return t===0?this:this.pow(Math.pow(10,-t))},r.prototype.egg=function(){return this.add(9)},r.prototype.lessThanOrEqualTo=function(t){return this.cmp(t)<1},r.prototype.lessThan=function(t){return this.cmp(t)<0},r.prototype.greaterThanOrEqualTo=function(t){return this.cmp(t)>-1},r.prototype.greaterThan=function(t){return this.cmp(t)>0},r.prototype.decimalPlaces=function(){return this.dp()},r.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var t=this.mantissa,e=-this.exponent,n=1;Math.abs(Math.round(t*n)/n-t)>1e-10;)n*=10,e++;return e>0?e:0},Object.defineProperty(r,"MAX_VALUE",{get:function(){return qn},enumerable:!1,configurable:!0}),Object.defineProperty(r,"MIN_VALUE",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(r,"NUMBER_MAX_VALUE",{get:function(){return Bn},enumerable:!1,configurable:!0}),Object.defineProperty(r,"NUMBER_MIN_VALUE",{get:function(){return jn},enumerable:!1,configurable:!0}),r}(),qn=et(1,D),Rn=et(1,-D),Bn=u(Number.MAX_VALUE),jn=u(Number.MIN_VALUE),Ve=function(r,t){return Ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},Ve(r,t)};function b(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ve(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var le={isInfinite:function(t){return t.gte(m.MAX_VALUE)},exponentCommas:{show:!0,min:1e5,max:1e9},exponentDefaultPlaces:3};function Fn(r,t){return t===0?r.slice(-3):r.slice(-3*(t+1),-3*t)}function Vn(r){return Array.from(Array(Math.ceil(r.length/3))).map(function(t,e){return Fn(r,e)}).reverse().join(",")}function ar(r){var t=r.toString().split(".");return t[0]=t[0].replace(/\w+$/g,Vn),t.join(".")}function Hn(r){var t=r.exponent%3;return m.fromMantissaExponent_noNormalize(r.mantissa*Math.pow(10,t),r.exponent-t)}var _r=["K","M","B","T","Qa","Qt","Sx","Sp","Oc","No"],Zn=[["","U","D","T","Qa","Qt","Sx","Sp","O","N"],["","Dc","Vg","Tg","Qd","Qi","Se","St","Og","Nn"],["","Ce","Dn","Tc","Qe","Qu","Sc","Si","Oe","Ne"]],Wn=["","MI-","MC-","NA-","PC-","FM-","AT-","ZP-"];function zn(r){var t=r-1;if(t===-1)return"";if(t<_r.length)return _r[t];for(var e=[],n=t;n>0;)e.push(Zn[e.length%3][n%10]),n=Math.floor(n/10);for(;e.length%3!==0;)e.push("");for(var o="",i=e.length/3-1;i>=0;i--)o+=e.slice(i*3,i*3+3).join("")+Wn[i];return o.replace(/-[A-Z]{2}-/g,"-").replace(/U([A-Z]{2}-)/g,"$1").replace(/-$/,"")}function Gn(r){return r<le.exponentCommas.min}function Xn(r){return r<le.exponentCommas.max}function Ht(r,t,e,n,o,i,s){return i===void 0&&(i="e"),s===void 0&&(s=!1),function(a,l,h){var f=Math.pow(e,n),p=Math.floor(a.log(f))*n;s&&(p=Math.max(p,0));var y=a.div(m.pow(e,p)).toNumber();if(!(1<=y&&y<f)){var g=Math.floor(Math.log(y)/Math.log(f));y/=Math.pow(f,g),p+=n*g}var v=r(y,l);if(v===r(f,l)&&(v=r(1,l),p+=n),p===0)return v;var A=t(p,h);return"".concat(v).concat(i).concat(A)}}function Zt(r,t){return r.toFixed(Math.max(0,t))}var w=function(){function r(){}return r.prototype.format=function(t,e,n,o){if(e===void 0&&(e=0),n===void 0&&(n=0),o===void 0&&(o=e),typeof t=="number"&&!Number.isFinite(t))return this.infinite;var i=m.fromValue_noAlloc(t);if(i.exponent<-300)return i.sign()<0?this.formatVerySmallNegativeDecimal(i.abs(),n):this.formatVerySmallDecimal(i,n);if(i.exponent<3){var s=i.toNumber();return s<0?this.formatNegativeUnder1000(Math.abs(s),n):this.formatUnder1000(s,n)}return le.isInfinite(i.abs())?i.sign()<0?this.negativeInfinite:this.infinite:i.sign()<0?this.formatNegativeDecimal(i.abs(),e,o):this.formatDecimal(i,e,o)},Object.defineProperty(r.prototype,"negativeInfinite",{get:function(){return"-".concat(this.infinite)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"infinite",{get:function(){return"Infinite"},enumerable:!1,configurable:!0}),r.prototype.formatVerySmallNegativeDecimal=function(t,e){return"-".concat(this.formatVerySmallDecimal(t,e))},r.prototype.formatVerySmallDecimal=function(t,e){return this.formatUnder1000(t.toNumber(),e)},r.prototype.formatNegativeUnder1000=function(t,e){return"-".concat(this.formatUnder1000(t,e))},r.prototype.formatUnder1000=function(t,e){return t.toFixed(e)},r.prototype.formatNegativeDecimal=function(t,e,n){return"-".concat(this.formatDecimal(t,e,n))},r.prototype.formatExponent=function(t,e,n,o){return e===void 0&&(e=le.exponentDefaultPlaces),n===void 0&&(n=function(s,a){return s.toString()}),o===void 0&&(o=Math.max(2,e)),Gn(t)?n(t,Math.max(e,1)):Xn(t)?ar(n(t,0)):this.formatDecimal(new m(t),o,o)},r}(),lr=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Scientific"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){return Ht(Zt,this.formatExponent.bind(this),10,1)(e,n,o)},t}(w),Kn=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Engineering"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){return Ht(Zt,this.formatExponent.bind(this),10,3)(e,n,o)},t}(w),Qr=function(r){b(t,r);function t(e,n,o){n===void 0&&(n=""),o===void 0&&(o="");var i=this;if(e.length<2)throw new Error("The supplied letter sequence must contain at least 2 letters");return i=r.call(this)||this,i.letters=e,i.mantissaExponentSeparator=n,i.separator=o,i}return Object.defineProperty(t.prototype,"name",{get:function(){return"Custom"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n){var o=Hn(e),i=o.mantissa.toFixed(n);return i+this.mantissaExponentSeparator+this.transcribe(o.exponent).join(this.separator)},t.prototype.transcribe=function(e){var n=e/3,o=this.letters.length;if(n<=o)return[this.letters[n-1]];for(var i=[];n>o;){var s=n%o,a=(s===0?o:s)-1;i.push(this.letters[a]),n=(n-s)/o,s===0&&n--}return i.push(this.letters[n-1]),i.reverse()},t}(Kn),Yn="abcdefghijklmnopqrstuvwxyz",Qn=function(r){b(t,r);function t(){return r.call(this,Yn)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Letters"},enumerable:!1,configurable:!0}),t}(Qr),Jn=["😠","🎂","🎄","💀","🍆","👪","🌈","💯","🍦","🎃","💋","😂","🌙","⛔","🐙","💩","❓","☢","🙈","👍","☂","✌","⚠","❌","😋","⚡"];(function(r){b(t,r);function t(){return r.call(this,Jn)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Emoji"},enumerable:!1,configurable:!0}),t})(Qr);var Me=function(r){b(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.name="Standard",e}return t.prototype.formatDecimal=function(e,n,o){return Ht(Zt,zn,1e3,1,!1," ",!0)(e,n,o)},t}(w),to=new Me;(function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Mixed scientific"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){return e.exponent<33?to.formatDecimal(e,n,o):Ht(Zt,this.formatExponent.bind(this),10,1)(e,n,o)},t})(w);var eo=new Me;(function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Mixed engineering"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){return e.exponent<33?eo.formatDecimal(e,n,o):Ht(Zt,this.formatExponent.bind(this),10,3)(e,n,o)},t})(w);var ro=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Logarithm"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){var i=e.log10();return"e".concat(this.formatExponent(i,n,function(s,a){return s.toFixed(a)},o))},t}(w),no=new lr;(function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Mixed Logarithm (Sci)"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n,o){if(e.exponent<33)return no.formatDecimal(e,n,o);var i=e.log10();return"e".concat(this.formatExponent(i,n,function(s,a){return s.toFixed(a)},o))},t})(w);var oo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Brackets"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e){for(var n=[")","[","{","]","(","}"],o=Math.LN10/Math.log(6)*e.log10(),i=Math.floor(o),s=o-i,a=Math.floor(s*36),l="";i>=6;){var h=i%6;i-=h,i/=6,l=n[h]+l}return l="e".concat(n[i]).concat(l,"."),l+=n[Math.floor(a/6)],l+=n[a%6],l},t}(w),io=Math.log10(Number.MAX_VALUE),so=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Infinity"},enumerable:!1,configurable:!0}),t.prototype.formatDecimal=function(e,n){var o=e.log10(),i=o/io,s=i<1e3?4:3,a=i.toFixed(Math.max(s,n));return"".concat(ar(a),"∞")},t}(w),ao=[[1e6,"M̄"],[9e5,"C̄M̄"],[5e5,"D̄"],[4e5,"C̄D̄"],[1e5,"C̄"],[9e4,"X̄C̄"],[5e4,"L̄"],[4e4,"X̄L̄"],[1e4,"X̄"],[9e3,"ⅯX̄"],[5e3,"V̄"],[4e3,"ⅯV̄"],[1e3,"Ⅿ"],[900,"ⅭⅯ"],[500,"Ⅾ"],[400,"ⅭⅮ"],[100,"Ⅽ"],[90,"ⅩⅭ"],[50,"Ⅼ"],[40,"ⅩⅬ"],[10,"Ⅹ"],[9,"ⅠⅩ"],[5,"Ⅴ"],[4,"ⅠⅤ"],[1,"Ⅰ"]],lo=["","·",":","∴","∷","⁙"],He=4e6,uo=Math.log10(He),co=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Roman"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"Infinitus"},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.romanize(e)},t.prototype.formatDecimal=function(e){if(e.lt(He))return this.romanize(e.toNumber());var n=e.log10(),o=n/uo,i=Math.pow(He,o-Math.floor(o));return"".concat(this.romanize(i),"↑").concat(this.formatDecimal(new m(o)))},t.prototype.romanize=function(e){for(var n="",o=0,i=ao;o<i.length;o++)for(var s=i[o],a=s[0],l=s[1];a<=e;)n+=l,e-=a;var h=Math.round(Math.floor(e*10)*1.2);return h===0?n===""?"nulla":n:(h>5&&(h-=6,n+="Ｓ"),n+=lo[h],n)},t}(w),Pe="⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿",ho=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Dots"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"⣿⠀⣿"},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.dotify(e*254)},t.prototype.formatDecimal=function(e){if(e.lt(163870639980315e-7))return this.dotify(e.toNumber()*254);var n=e.log(254),o=Math.floor(n-2),i=Math.pow(254,n-o);return"".concat(this.dotify(o),"⣿").concat(this.dotify(i*254))},t.prototype.dotify=function(e,n){n===void 0&&(n=!1);var o=Math.round(e);return!n&&o<254?Pe[o+1]:o<64516?Pe[Math.floor(o/254)+1]+Pe[o%254+1]:this.dotify(Math.floor(o/64516))+this.dotify(o%64516,!0)},t}(w),kr=["̍","̶","͓","̿","҉","̰","̚","̸","͚","̷"],po=["H","E"," ","C","O","M","E","S"];function fo(r){return r[Math.floor(Math.random()*r.length)]}var mo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Zalgo"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return po.map(function(n){return n+fo(kr)}).join("")},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.heComes(new m(e))},t.prototype.formatDecimal=function(e){return this.heComes(e)},t.prototype.heComes=function(e){for(var n=e.plus(1).log10()/66666*1e3,o=Number(n.toFixed(2)),i=Math.floor(Math.abs(Math.pow(2,30)*(n-o))),s=Array.from(ar(o)),a=Array.from(i.toString()+n.toFixed(0)),l=0;l<a.length;l++){var h=parseInt(a[l],10),f=37*l%s.length;s[f]+=kr[h]}return s.join("")},t}(w),Ie={positive:0,negative:1},yo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Hex"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"negativeInfinite",{get:function(){return"00000000"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"FFFFFFFF"},enumerable:!1,configurable:!0}),t.prototype.formatVerySmallNegativeDecimal=function(e){return this.formatDecimal(e.negate())},t.prototype.formatVerySmallDecimal=function(e){return this.formatDecimal(e)},t.prototype.formatNegativeUnder1000=function(e){return this.formatDecimal(new m(-e))},t.prototype.formatUnder1000=function(e){return this.formatDecimal(new m(e))},t.prototype.formatNegativeDecimal=function(e){return this.formatDecimal(e.negate())},t.prototype.formatDecimal=function(e){return this.rawValue(e,32).toString(16).toUpperCase().padStart(8,"0")},t.prototype.modifiedLogarithm=function(e){var n=Math.floor(m.log2(e)),o=m.pow(2,n),i=m.div(e,o).toNumber()-1;return n+i},t.prototype.isFinite=function(e){return typeof e=="number"?isFinite(e):isFinite(e.e)&&isFinite(e.mantissa)},t.prototype.rawValue=function(e,n){for(var o=e,i=[],s=0;s<n&&this.isFinite(o);s++)m.lt(o,0)?(i.push(Ie.negative),o=-this.modifiedLogarithm(m.times(o,-1))):(i.push(Ie.positive),o=this.modifiedLogarithm(o));var a=parseInt(i.map(function(l){return l===Ie.positive?1:0}).join("").padEnd(n,"0"),2);return a!==Math.pow(2,n)-1&&(o>0||o===0&&a%2===1)&&(a+=1),a},t}(w),_=[[0,"pL",0],[61611520,"minim",0],[61611520*60,"dram",1],[61611520*60*8,"ounce",2],[61611520*60*8*4,"gill",2],[61611520*60*8*4*2,"cup",3],[61611520*60*8*4*2*2,"pint",4],[61611520*60*8*4*2*2*2,"quart",4],[61611520*60*8*4*2*2*2*4,"gallon",4],[61611520*60*8*4*2*2*2*4*4.5,"pin",3],[61611520*60*8*4*2*2*2*4*9,"firkin",3],[61611520*60*8*4*2*2*2*4*18,"kilderkin",4],[61611520*60*8*4*2*2*2*4*36,"barrel",4],[61611520*60*8*4*2*2*2*4*54,"hogshead",5],[61611520*60*8*4*2*2*2*4*72,"puncheon",6],[61611520*60*8*4*2*2*2*4*108,"butt",7],[61611520*60*8*4*2*2*2*4*216,"tun",7]],j=_[1],Ar=["minute ","tiny ","petite ","small ","modest ","medium ","generous ","large ","great ","grand ","huge ","gigantic ","immense ","colossal ","vast ","galactic ","cosmic ","infinite ","eternal "],go=new Set("aeiouAEIOU"),ur=10*_[_.length-1][0],vo=Math.log10(ur),Nr=Math.log10(ur/j[0]),Mo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Imperial"},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.formatDecimal(new m(e))},t.prototype.formatDecimal=function(e){if(e.lt(ur))return this.convertToVolume(e.toNumber(),Ar[0]);for(var n=e.log10()-vo,o=1;n>Nr;)o++,n/=Nr;return this.convertToVolume(Math.pow(10,n)*j[0],Ar[o])},t.prototype.convertToVolume=function(e,n){var o=this.findVolumeUnit(e);if(o===0)return this.formatMetric(e);var i=this.checkSmallUnits(n,e,o);if(i!==void 0)return i;var s=_[o],a=Math.floor(e/s[0]),l=e-a*s[0];if(o<_.length-1){var h=this.checkAlmost(n,e,0,o+1);if(h!==void 0)return h}var f=this.checkAlmost(n,l,a,o);if(f!==void 0)return f;if(l<_[o-s[2]][0])return this.pluralOrArticle(a,n+s[1]);for(var p=Math.floor(l/_[o-1][0]),y=o-1,g=l-p*_[o-1][0],v=o-2;v>0&&v>o-s[2];--v){var A=_[v],Q=Math.floor(l/A[0]);if(Q>9&&v!==1)break;var kt=l-Q*A[0];kt<.99*g&&(p=Q,y=v,g=kt)}return this.bigAndSmall(n,a,s,p,_[y])},t.prototype.formatMetric=function(e){return e<1e3?"".concat(e<10||e===Math.round(e)?e.toFixed(2):e.toFixed(0),"pL"):e<1e6?"".concat((e/1e3).toPrecision(4),"nL"):"".concat((e/1e6).toPrecision(4),"μL")},t.prototype.checkSmallUnits=function(e,n,o){var i=_[o];if(o<=3&&n+9.5*j[0]>_[o+1][0])return this.almostOrShortOf(n,e,1,_[o+1],j);if(o===1){var s=Math.round(n*10/i[0]);if(s===10)return this.addArticle(e+i[1]);var a=s<100?1:0;return"".concat((s/10).toFixed(a)," ").concat(e).concat(i[1],"s")}if(o===2){var l=Math.floor(n/i[0]),h=n-l*i[0];if(h>50.5*j[0])return this.almostOrShortOf(n,e,l+1,i,j);var f=Math.round(h/j[0]);return this.bigAndSmall(e,l,i,f,j)}},t.prototype.findVolumeUnit=function(e){for(var n=0,o=_.length,i=0;o-n>1;)i=Math.floor((n+o)/2),_[i][0]>e?o=i:n=i;return n},t.prototype.checkAlmost=function(e,n,o,i){var s=_[i];if(n+_[i-s[2]][0]>=s[0])return this.almost(e,o+1,s);var a=_[i+1-s[2]];if(n+a[0]>=s[0])return this.shortOf(e,o+1,s,1,a)},t.prototype.bigAndSmall=function(e,n,o,i,s){var a=this.pluralOrArticle(n,e+o[1]);return i===0?a:"".concat(a," and ").concat(this.pluralOrArticle(i,s[1]))},t.prototype.almost=function(e,n,o){return"almost ".concat(this.pluralOrArticle(n,e+o[1]))},t.prototype.almostOrShortOf=function(e,n,o,i,s){var a=Math.round((o*i[0]-e)/s[0]);return a===0?this.almost(n,o,i):this.shortOf(n,o,i,a,s)},t.prototype.shortOf=function(e,n,o,i,s){return"".concat(this.pluralOrArticle(i,s[1])," short of ").concat(this.pluralOrArticle(n,e+o[1]))},t.prototype.pluralOrArticle=function(e,n){return e===1?this.addArticle(n):"".concat(e," ").concat(n,"s")},t.prototype.addArticle=function(e){return(go.has(e[0])?"an ":"a ")+e},t}(w),bo=["🕛","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚"],wo=Math.log10(12),$o=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Clock"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"🕛🕡"},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.clockwise(new m(e))},t.prototype.formatDecimal=function(e){return this.clockwise(e)},t.prototype.clockwise=function(e){if(e.lt(12))return this.hour(e.toNumber());var n=e.log10()/wo,o=Math.floor(n);if(n<301){var i=(Math.pow(12,n-o+1)-12)/11;if(o<13)return this.hour(o-1)+this.hour(i);o-=13;var s="";return o>=144&&(s=this.hour(0),o-=144),s+this.hour(o/12)+this.hour(o%12)+this.hour(i)}o-=301;for(var a=1;o>=1728;)o=(o-1728)/12,++a;return this.hour(a)+this.hour(o/144)+this.hour(o%144/12)+this.hour(o%12)},t.prototype.hour=function(e){return bo[Math.max(Math.min(Math.floor(e),11),0)]},t}(w),L=10006,Co=new m(L),_o=Math.log10(L),ut=[],Ze=new Array(L).fill(!1),Jr=Math.ceil(Math.sqrt(L));for(var T=2;T<Jr;T++)if(!Ze[T]){ut.push(T);for(var Oe=T;Oe<=L;Oe+=T)Ze[Oe]=!0}for(var T=Jr;T<L;T++)Ze[T]||ut.push(T);var We=ut.length-1,ko=ut[We],Te=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","¹⁰","¹¹","¹²","¹³"],Ao=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Prime"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"Primefinity?"},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.primify(new m(e))},t.prototype.formatDecimal=function(e){return this.primify(e)},t.prototype.primify=function(e){if(e.lte(Co)){var n=Math.floor(e.toNumber());return n===0?"0":n===1?"1":this.formatFromList(this.primesFromInt(n))}var o=e.log10()/_o,i=Math.pow(L,o/Math.ceil(o));if(o<=L)return this.formatBaseExp(i,o);var s=Math.log10(o)/Math.log10(L),a=Math.ceil(s);o=Math.pow(L,s/a),i=Math.pow(L,o/Math.ceil(o));var l=this.primesFromInt(a),h=l.length===1?Te[l[0]]:"^(".concat(this.formatFromList(l),")");return this.formatBaseExp(i,o)+h},t.prototype.formatBaseExp=function(e,n){var o=this.formatFromList(this.primesFromInt(Math.floor(e))),i=this.formatFromList(this.primesFromInt(Math.ceil(n)));return"(".concat(o,")^(").concat(i,")")},t.prototype.formatFromList=function(e){for(var n=[],o=0,i=0,s=0;s<e.length;s++)e[s]===o?i++:(o>0&&(i>1?n.push("".concat(o).concat(Te[i])):n.push(o)),o=e[s],i=1),s===e.length-1&&(i>1?n.push("".concat(e[s]).concat(Te[i])):n.push(e[s]));return n.join("×")},t.prototype.findGreatestLtePrimeIndex=function(e){if(e>=ko)return We;for(var n=0,o=We;o!==n+1;){var i=Math.floor((o+n)/2),s=ut[i];if(s===e)return i;e<s?o=i:n=i}return n},t.prototype.primesFromInt=function(e){for(var n=[],o=e;o!==1;){var i=this.findGreatestLtePrimeIndex(o),s=ut[i];if(s===o){n.push(o);break}for(var a=o/2,l=this.findGreatestLtePrimeIndex(a),h=void 0;h===void 0;){var f=ut[l--];o%f===0&&(h=f)}o/=h,n.push(h)}return n.reverse()},t}(w),Et=["","","","","","","",""],No=["","","","","","","",""],Eo=Math.log(8),So=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Bar"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"negativeInfinite",{get:function(){return""},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return""},enumerable:!1,configurable:!0}),t.prototype.formatVerySmallNegativeDecimal=function(e){return this.flipBars(this.formatDecimal(e))},t.prototype.formatVerySmallDecimal=function(e){return this.formatDecimal(e)},t.prototype.formatNegativeUnder1000=function(e){return this.flipBars(this.formatDecimal(new m(e)))},t.prototype.formatUnder1000=function(e){return this.formatDecimal(new m(e))},t.prototype.formatNegativeDecimal=function(e){return this.flipBars(this.formatDecimal(e))},t.prototype.formatDecimal=function(e){if(e.eq(0))return"0";if(e.lessThan(1)&&e.greaterThan(0))return"/".concat(this.formatDecimal(m.div(1,e)));for(var n=Math.LN10/Eo*e.log10(),o=Math.floor(n),i=n-o,s=Math.floor(i*64),a=[Et[s%8],Et[Math.floor(s/8)]];o>=8;){var l=o%8;o=(o-l)/8,a.push(Et[l])}return a.push(Et[o]),a.join("")},t.prototype.flipBars=function(e){for(var n=[],o=0,i=e;o<i.length;o++){var s=i[o];n.push(No[Et.indexOf(s)])}return n.join("")},t}(w),Le="世使侍勢十史嗜士始室實屍市恃拭拾施是時氏濕獅矢石視試詩誓識逝適釋食",xo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Shi"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return this.shi(m.NUMBER_MAX_VALUE)},enumerable:!1,configurable:!0}),t.prototype.formatUnder1000=function(e){return this.shi(new m(e))},t.prototype.formatDecimal=function(e){return this.shi(e)},t.prototype.getShiCharacter=function(e){return Le[Math.floor(e)%Le.length]},t.prototype.shi=function(e){for(var n=Math.pow(e.plus(1).log10()*1e3,.08),o="",i=0;i<3;i++)o+=this.getShiCharacter(n*Math.pow(Le.length,i));return o},t}(w),De,F=23,Po="",Io=(De=Po.codePointAt(0))!==null&&De!==void 0?De:65,Er="",Ue="",xt=[];for(var qe=0;qe<F;qe++){var Oo=String.fromCharCode(Io+qe);xt.push(Oo)}var To=Math.log10(3),Lo=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Blobs"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return"".concat(Er)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"negativeInfinite",{get:function(){return"".concat(Ue).concat(Er)},enumerable:!1,configurable:!0}),t.prototype.formatNegativeUnder1000=function(e){return"".concat(Ue).concat(this.blobify(new m(e-1)))},t.prototype.formatNegativeDecimal=function(e){return"".concat(Ue).concat(this.blobify(e.minus(1)))},t.prototype.formatUnder1000=function(e){return this.blobify(new m(e))},t.prototype.formatDecimal=function(e){return this.blobify(e)},t.prototype.blobify=function(e){var n=this.reduceNumber(e.abs());return n<F?xt[Math.floor(n)]:Math.floor(n/F)<F+1?xt[Math.floor(n/F)-1]+xt[Math.floor(n%F)]:this.blobify(m.floor(n/F-1))+xt[Math.floor(n%F)]},t.prototype.reduceNumber=function(e){return e.lte(1e3)?e.toNumber():(Math.log10(e.log10())-To)/Math.log10(1.0002)+1e3},t}(w),Do=function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"Blind"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"negativeInfinite",{get:function(){return" "},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"infinite",{get:function(){return" "},enumerable:!1,configurable:!0}),t.prototype.formatVerySmallNegativeDecimal=function(){return" "},t.prototype.formatVerySmallDecimal=function(){return" "},t.prototype.formatNegativeUnder1000=function(){return" "},t.prototype.formatUnder1000=function(){return" "},t.prototype.formatNegativeDecimal=function(){return" "},t.prototype.formatDecimal=function(){return" "},t}(w),Sr=[new lr,new Qn,new Me,new ro,new oo,new so,new co,new ho,new mo,new yo,new Mo,new $o,new Ao,new So,new xo,new Lo,new Do];(function(r){b(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"name",{get:function(){return"ALL"},enumerable:!1,configurable:!0}),t.prototype.formatNegativeUnder1000=function(e,n){return this.formatDecimal(new m(-e),n)},t.prototype.formatUnder1000=function(e,n){return this.formatDecimal(new m(e),n)},t.prototype.formatNegativeDecimal=function(e,n){return this.formatDecimal(new m(-e),n)},t.prototype.formatDecimal=function(e,n){var o=Math.floor(Math.log2(e.abs().plus(2).log2())),i=Sr[o%Sr.length];return i.format(e,n,n)},t})(w);const Uo=new Me,qo=new lr,Tt=class Tt{constructor(t,e){this.value=t,this.options=e,this.displaysByNotation={natural:()=>this.displayNatural,scientific:()=>this.displayExponential,percentage:()=>this.displayPercentage}}get display(){return this.displaysByNotation[this.notation]()}get raw(){return this.value}get isPositive(){return this.raw>0}get isNegative(){return this.raw<0}get isZero(){return this.raw===0}get notation(){var t;return((t=this.options)==null?void 0:t.notation)??Tt.DEFAULT_TYPE}get precision(){var t;return((t=this.options)==null?void 0:t.precision)??1}get displayExponential(){return qo.format(this.value,2,0)}get displayNatural(){return Uo.format(this.value,2,0)}get displayPercentage(){return`${this.value.toFixed(this.precision)}%`}add(t){return new Tt(this.raw+(typeof t=="number"?t:t.raw),this.options)}isLowerThan(t){return this.raw<(typeof t=="number"?t:t.raw)}};Tt.DEFAULT_TYPE="natural";let k=Tt;var V,q,pe,fe,me;class Ro{constructor(){M(this,V,0);M(this,q,0);M(this,pe,1e-4);M(this,fe,0);M(this,me,.01)}get sold(){return c(this,q)}get interestRatio(){return c(this,V)}createMoney(t){return new k(Math.log(d(this,fe,c(this,fe)+(c(this,me)*t+1)))+1)}cashIn(t){d(this,q,c(this,q)+t)}cashInInterest(){const t=c(this,q)*c(this,V);return d(this,q,c(this,q)+t),t}cashOut(t){const e=c(this,q)-t;e<0||d(this,q,e)}incrementInterest(){d(this,V,Math.min(2,c(this,V)+c(this,pe)))}resetInterest(){d(this,V,0)}}V=new WeakMap,q=new WeakMap,pe=new WeakMap,fe=new WeakMap,me=new WeakMap;var U,H,O;const de=class de{constructor(t,e){M(this,U);M(this,H,{});M(this,O,new Ro);this.statisticsController=e,d(this,U,t),t.addController(this)}get sold(){return new k(c(this,O).sold)}get interest(){return new k(c(this,O).interestRatio*100,{notation:"percentage",precision:2})}get moneyPopUpList(){return Object.entries(c(this,H)).map(([t,e])=>({id:t,moneyCreated:e}))}incrementInterest(){c(this,O).incrementInterest(),c(this,U).requestUpdate()}resetInterest(){c(this,O).resetInterest(),c(this,U).requestUpdate()}createMoney(t,e,n){d(this,H,{...c(this,H),[de.COUNTER++]:{value:c(this,O).createMoney(Math.max(1,n)),displayTimeInMs:Math.round(500+Math.random()*1e3),startPosition:{x:t,y:e}}}),c(this,U).requestUpdate()}cashInInterest(){const t=c(this,O).cashInInterest();return this.statisticsController.addInterestCash(t),c(this,U).requestUpdate(),new k(t)}cashIn(t){const{[t]:e,...n}=c(this,H),o=e.value.raw;d(this,H,{...n}),c(this,O).cashIn(o),this.statisticsController.addCashIn(o),c(this,U).requestUpdate()}cashOut(t){c(this,O).cashOut(t),c(this,U).requestUpdate()}};U=new WeakMap,H=new WeakMap,O=new WeakMap,de.COUNTER=0;let ze=de;var qt,R;class Bo{constructor(t){M(this,qt);M(this,R,[]);d(this,qt,t),t.addController(this)}get autoCursorList(){return c(this,R)}addNewAutoCursor(){d(this,R,[...c(this,R),{level:1}]),c(this,qt).requestUpdate()}upgradeAutoCursor(){const t=[...c(this,R)],e=t.shift();if(!e)return;const n=t.reduce((i,s,a)=>i.autoCursor.level>s.level?{index:a+1,autoCursor:s}:i,{autoCursor:e,index:0}),o={...n.autoCursor,level:n.autoCursor.level+1};d(this,R,c(this,R).toSpliced(n.index,1,o))}}qt=new WeakMap,R=new WeakMap;class vt{static delay(t,e){const n=setTimeout(()=>{t(),clearTimeout(n)},e);return n}static delayAndCleanIfExist(t,e){let n;return()=>{n&&(clearTimeout(n),n=void 0),n=this.delay(t,e)}}static debounce(t,e){let n;return(...o)=>{n||(n=setTimeout(()=>{t.apply(this,o),clearTimeout(n),n=void 0},e))}}}var x,nt,ot,it,st,Z;class jo{constructor(t){M(this,x);M(this,nt);M(this,ot);M(this,it);M(this,st);M(this,Z);d(this,nt,!1),d(this,ot,!1),d(this,it,!1),d(this,st,!1),d(this,Z,300),this.stopMovement=vt.delayAndCleanIfExist(()=>{d(this,nt,!1),c(this,x).requestUpdate()},c(this,Z)),this.stopScroll=vt.delayAndCleanIfExist(()=>{d(this,ot,!1),c(this,x).requestUpdate()},c(this,Z)),this.stopLeftClick=vt.delayAndCleanIfExist(()=>{d(this,it,!1),c(this,x).requestUpdate()},c(this,Z)),this.stopRightClick=vt.delayAndCleanIfExist(()=>{d(this,st,!1),c(this,x).requestUpdate()},c(this,Z)),d(this,x,t),t.addController(this)}get isMoving(){return c(this,nt)}get isScroll(){return c(this,ot)}get isLeftClick(){return c(this,it)}get isRightClick(){return c(this,st)}move(){d(this,nt,!0),c(this,x).requestUpdate(),this.stopMovement()}scroll(){d(this,ot,!0),c(this,x).requestUpdate(),this.stopScroll()}leftClick(){d(this,it,!0),c(this,x).requestUpdate(),this.stopLeftClick()}rightClick(){d(this,st,!0),c(this,x).requestUpdate(),this.stopRightClick()}}x=new WeakMap,nt=new WeakMap,ot=new WeakMap,it=new WeakMap,st=new WeakMap,Z=new WeakMap;var at,lt,W,Mt,Rt,Bt,$t,tn,en;class Fo{constructor(t,e){M(this,$t);M(this,at);M(this,lt);M(this,W,!1);M(this,Mt,10);M(this,Rt,t=>Ce(this,$t,tn).call(this,t));M(this,Bt,t=>Ce(this,$t,en).call(this,t));d(this,lt,t),d(this,at,e),t.addController(this)}get itemList(){return Object.entries(c(this,at)).map(([t,e])=>({name:t,costToFirstDisplay:e.firstCost(),cost:c(this,W)?e.xNextCost(c(this,Mt)):e.nextCost}))}hostConnected(){window.addEventListener("keydown",c(this,Rt)),window.addEventListener("keyup",c(this,Bt))}hostDisconnected(){window.removeEventListener("keydown",c(this,Rt)),window.removeEventListener("keyup",c(this,Bt))}buy(t){const e=c(this,at)[t],n=Math.min(c(this,W)?c(this,Mt):1,e.nbUpgradeAvaible),o=Array.from({length:n}).reduce(i=>i+=e.buy(),0);return c(this,lt).requestUpdate(),{nbItemToBuy:n,upgradeCost:o}}nextCostOf(t){const e=c(this,at)[t];return c(this,W)?e.xNextCost(c(this,Mt)):e.nextCost}}at=new WeakMap,lt=new WeakMap,W=new WeakMap,Mt=new WeakMap,Rt=new WeakMap,Bt=new WeakMap,$t=new WeakSet,tn=function(t){t.shiftKey&&(d(this,W,!0),c(this,lt).requestUpdate())},en=function(t){t.shiftKey||(d(this,W,!1),c(this,lt).requestUpdate())};var z,jt,Ft,ye,ge,ve;class Vo{constructor(t){M(this,z);M(this,jt,0);M(this,Ft,0);M(this,ye,0);M(this,ge,0);M(this,ve,new Date);d(this,z,t),t.addController(this)}get totalMoneyGain(){return new k(c(this,jt))}get totalInterestGain(){return new k(c(this,Ft))}get playTime(){const t=new Date;return this.timerFormat(+t-+c(this,ve))}addCashIn(t){d(this,jt,c(this,jt)+t),c(this,z).requestUpdate()}addInterestCash(t){d(this,Ft,c(this,Ft)+t),c(this,z).requestUpdate()}addMouseClick(){_e(this,ge)._++,c(this,z).requestUpdate()}addMouseMovement(){_e(this,ye)._++,c(this,z).requestUpdate()}timerFormat(t){const e=Math.floor(t/1e3),n=Math.floor(e/3600),o=Math.floor(e%3600/60),i=e%60,s=n.toString().padStart(2,"0"),a=o.toString().padStart(2,"0"),l=i.toString().padStart(2,"0");return`${s}:${a}:${l}`}}z=new WeakMap,jt=new WeakMap,Ft=new WeakMap,ye=new WeakMap,ge=new WeakMap,ve=new WeakMap;class xr{static create(t,e){let n=new k(0);return{buy(){return this.nextCost?(n=this.nextCost,this.currentUpgrade++,n.raw):0},xNextCost(o){if(this.currentUpgrade>=this.maxUpgrade)return;const i=Math.min(o,this.nbUpgradeAvaible),s=Array.from({length:i}).reduce(a=>a+=t,this.cost.raw);return new k(s)},firstCost(){return new k(0+t)},currentUpgrade:0,maxUpgrade:e,get nbUpgradeAvaible(){return this.maxUpgrade-this.currentUpgrade},get cost(){return n},get nextCost(){return this.currentUpgrade<this.maxUpgrade?new k(this.cost.raw+t):void 0}}}}var Ho=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,rn=r=>{throw TypeError(r)},be=(r,t,e,n)=>{for(var o=n>1?void 0:n?Zo(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&Ho(t,e,o),o},nn=(r,t,e)=>t.has(r)||rn("Cannot "+e),Pr=(r,t,e)=>(nn(r,t,"read from private field"),t.get(r)),Ir=(r,t,e)=>t.has(r)?rn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),Wo=(r,t,e,n)=>(nn(r,t,"write to private field"),t.set(r,e),e),Ge,Yt;let bt=class extends P{constructor(){super(),Ir(this,Ge,500),Ir(this,Yt),Wo(this,Yt,setInterval(()=>{const{top:r,left:t,width:e,height:n}=this.cursor.getBoundingClientRect();this.dispatchEvent(new CustomEvent("add-score",{detail:{x:Math.round(t+e/2),y:Math.round(r+n/2),level:this.level},bubbles:!0,composed:!0}))},Pr(this,Ge)))}get animationList(){var r;return[this.getAnimations(),(r=this.cursor)==null?void 0:r.getAnimations()].flat().filter(t=>t!==void 0)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(Pr(this,Yt))}render(){return S`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="163"
        height="226"
        fill="none"
        viewBox="0 0 163 226"
        class="cursor"
        style="--level: ${(10-this.level)*10}%"
      >
        <path
          fill="#fff"
          d="M47.5 209.717c-18.222-8.33-24-80-38.5-113.5 4.5-12 11.5-15.5 23-6 8.725 7.208 13.751 24.465 15.384 35.207C46.6 114.841 42.447 25.337 54 11.217 62 5.217 69.5 9 76 16c-12.5 49 0 105.717-3.5 76.217.4-29.6-.282-30.28 3.5-37.5 5.5-10.5 13-9.5 23.5 2.597 5.5-11.597 21.5-5.597 29 7.624 4-10.221 23.5 0 25.5 19.279 3.956 38.139 0 100.5-18.5 125.5-36 14-70.5 8-88 0Z"
        />
        <path
          stroke="#000"
          stroke-linecap="round"
          stroke-width="15"
          d="M99.5 57.314C89 45.217 81.5 44.217 76 54.717c-3.782 7.22-3.1 7.9-3.5 37.5C76 121.717 63.5 65 76 16c-6.5-7-14-10.783-22-4.783-12.62 15.423-6.5 120.783-6.5 115-1.5-10.667-6.557-28.612-15.5-36-11.5-9.5-18.5-6-23 6 14.5 33.5 20.278 105.17 38.5 113.5 17.5 8 52 14 88 0 18.5-25 22.456-87.361 18.5-125.5-2-19.28-21.5-29.5-25.5-19.28m-29-7.623v38.903m0-38.903c5.5-11.597 21.5-5.597 29 7.624m0 0v39.279"
        />
      </svg>
    `}};Ge=new WeakMap;Yt=new WeakMap;bt.styles=mt`
    @keyframes rotate-around-mouse {
      0% {
        rotate: 0deg;
      }
      100% {
        rotate: -360deg;
      }
    }

    :host {
      --radius: 200px;
      position: absolute;
      top: 50%;
      left: calc(50% - var(--radius));

      transform-origin: var(--radius);
      animation: rotate-around-mouse var(--rotation-time) linear infinite;
      will-change: transform;
    }

    .cursor {
      width: 100%;
      height: 100%;
      animation: rotate-around-mouse var(--rotation-time) linear infinite
        reverse;
      will-change: transform;
    }

    path {
      fill: hsl(33, 99%, var(--level));
    }
  `;be([sr(".cursor")],bt.prototype,"cursor",2);be([C({type:Number})],bt.prototype,"index",2);be([C({type:Number})],bt.prototype,"level",2);bt=be([Y("auto-cursor")],bt);var zo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,on=r=>{throw TypeError(r)},we=(r,t,e,n)=>{for(var o=n>1?void 0:n?Go(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&zo(t,e,o),o},Xo=(r,t,e)=>t.has(r)||on("Cannot "+e),Or=(r,t,e)=>(Xo(r,t,"read from private field"),e?e.call(r):t.get(r)),Ko=(r,t,e)=>t.has(r)?on("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),Qt;let wt=class extends P{constructor(){super(...arguments),Ko(this,Qt,5e3)}render(){return S`${Yr(this.autoCursorList,(r,t)=>t,({level:r},t)=>S`<auto-cursor
          .index=${t}
          .level=${r}
          style=${`--rotation-time: ${Or(this,Qt)}ms`}
        ></auto-cursor>`)}`}async updated(r){var i,s;super.updated(r);const t=[...this.autoCursorElementList].sort((a,l)=>a.index-l.index);await Promise.all(t.map(a=>a.updateComplete));const e=t.map(a=>a.animationList),n=((s=(i=e.shift())==null?void 0:i[0])==null?void 0:s.currentTime)??0,o=Or(this,Qt)/this.nbMaxAutoCursor;e.forEach((a,l)=>a.forEach(h=>h.currentTime=n+(l+1)*o))}};Qt=new WeakMap;wt.styles=mt`
    auto-cursor {
      width: var(--size);
      height: var(--size);
    }
  `;we([Sn("auto-cursor")],wt.prototype,"autoCursorElementList",2);we([C({type:Array})],wt.prototype,"autoCursorList",2);we([C({type:Number})],wt.prototype,"nbMaxAutoCursor",2);wt=we([Y("auto-cursor-manager")],wt);var Yo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,sn=r=>{throw TypeError(r)},Wt=(r,t,e,n)=>{for(var o=n>1?void 0:n?Qo(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&Yo(t,e,o),o},an=(r,t,e)=>t.has(r)||sn("Cannot "+e),Re=(r,t,e)=>(an(r,t,"read from private field"),e?e.call(r):t.get(r)),Be=(r,t,e)=>t.has(r)?sn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),je=(r,t,e,n)=>(an(r,t,"write to private field"),t.set(r,e),e),Jt,te,ee;let pt=class extends P{constructor(){super(),Be(this,Jt),Be(this,te),Be(this,ee),this.addEventListener("animationend",this.onPointReachTartgetPosition)}set displayTimeInMs(r){je(this,Jt,r),this.style.setProperty("--display-time",`${r}ms`)}set fromPosition(r){je(this,te,r),this.style.setProperty("--from-top",`${r.y}px`),this.style.setProperty("--from-left",`${r.x}px`)}set toPosition(r){je(this,ee,r),this.style.setProperty("--to-top",`${r.y}%`),this.style.setProperty("--to-left",`${r.x}%`)}get displayTimeInMs(){return Re(this,Jt)}get fromPosition(){return Re(this,te)}get toPosition(){return Re(this,ee)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("animationend",this.onPointReachTartgetPosition)}render(){return S`<div><p>$${this.value}</p></div>`}onPointReachTartgetPosition(){this.dispatchEvent(new CustomEvent("is-old"))}};Jt=new WeakMap;te=new WeakMap;ee=new WeakMap;pt.styles=mt`
    :host {
      position: absolute;
      animation: move-to-target var(--display-time) ease-in;
      pointer-events: none;
      will-change: transform;
    }

    @keyframes move-to-target {
      0% {
        top: var(--from-top);
        left: var(--from-left);
        opacity: 1;
        scale: 1;
      }

      15% {
        scale: 1.3;
      }

      50% {
        scale: 1;
      }

      85% {
        opacity: 1;
      }

      100% {
        top: var(--to-top);
        left: var(--to-left);
        opacity: 0;
        scale: 0;
      }
    }

    div {
      position: relative;
      translate: -50% -50%;

      background-color: green;
      border: 1px solid lightgreen;

      &::before {
        content: "";
        position: absolute;

        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: lightgreen;

        left: 50%;
        translate: -50% 0;
      }
    }

    p {
      position: relative;
      margin: 0;
      font-size: 10px;
      margin: 10px 20px;
      color: black;
    }
  `;Wt([C({type:String})],pt.prototype,"value",2);Wt([C({type:Number})],pt.prototype,"displayTimeInMs",1);Wt([C({type:Object})],pt.prototype,"fromPosition",1);Wt([C({type:Object})],pt.prototype,"toPosition",1);pt=Wt([Y("money-created")],pt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr=Xr(class extends Kr{constructor(r){var t;if(super(r),r.type!==Gr.ATTRIBUTE||r.name!=="class"||((t=r.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var n,o;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return X}});var Jo=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ln=(r,t,e,n)=>{for(var o=n>1?void 0:n?ti(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&Jo(t,e,o),o};let ue=class extends P{constructor(){super(...arguments),this.isEating=!1}render(){return S`
      <svg
        class="mouse-eater ${Tr({grow:this.isEating})}"
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="591"
        fill="white"
        stroke="var(--border)"
        viewBox="0 0 512 591"
      >
        <mask id="a">
          <path
            fill-rule="evenodd"
            d="M175.618 82.197c0 4.6-.37 9.113-1.082 13.508 26.232-5.857 54.272-8.556 83.28-8.556 26.64 0 52.334 2.312 76.479 7.272a84.619 84.619 0 0 1-.884-12.224C333.411 36.801 369.473 0 413.957 0c44.485 0 80.547 36.801 80.547 82.197 0 31.354-17.202 58.607-42.5 72.468C489.422 192.995 512 249.381 512 328.129c0 151.85-113.985 262.767-254.184 262.767C117.616 590.896 0 473.251 0 328.129c0-77.943 22.57-133.842 59.721-172.053-26.764-13.362-45.196-41.424-45.196-73.879C14.525 36.801 50.587 0 95.072 0c44.484 0 80.546 36.801 80.546 82.197Z"
            clip-rule="evenodd"
          />
        </mask>
        <path
          fill-rule="evenodd"
          d="M175.618 82.197c0 4.6-.37 9.113-1.082 13.508 26.232-5.857 54.272-8.556 83.28-8.556 26.64 0 52.334 2.312 76.479 7.272a84.619 84.619 0 0 1-.884-12.224C333.411 36.801 369.473 0 413.957 0c44.485 0 80.547 36.801 80.547 82.197 0 31.354-17.202 58.607-42.5 72.468C489.422 192.995 512 249.381 512 328.129c0 151.85-113.985 262.767-254.184 262.767C117.616 590.896 0 473.251 0 328.129c0-77.943 22.57-133.842 59.721-172.053-26.764-13.362-45.196-41.424-45.196-73.879C14.525 36.801 50.587 0 95.072 0c44.484 0 80.546 36.801 80.546 82.197Z"
          clip-rule="evenodd"
        />
        <path
          fill="var(--border)"
          d="m174.536 95.705-14.807-2.399-3.542 21.865 21.618-4.826-3.269-14.64Zm159.759-1.284-3.018 14.693 20.953 4.304-3.092-21.165-14.843 2.168Zm117.709 60.244-7.207-13.155-17.329 9.494 13.803 14.139 10.733-10.478Zm-392.283 1.411 10.755 10.456 14.304-14.711-18.359-9.166-6.7 13.421Zm129.622-57.972a99.429 99.429 0 0 0 1.275-15.907h-30a69.43 69.43 0 0 1-.889 11.11l29.614 4.797Zm68.473-25.955c-29.917 0-59.073 2.782-86.549 8.916l6.538 29.28c24.988-5.58 51.913-8.196 80.011-8.196v-30Zm79.498 7.579c-25.286-5.194-52.006-7.58-79.498-7.58v30.001c25.788 0 50.456 2.24 73.461 6.965l6.037-29.386Zm11.824 12.525a69.534 69.534 0 0 1-.727-10.056h-30c0 4.882.355 9.688 1.042 14.393l29.685-4.337Zm-.727-10.056c0-37.4 29.631-67.197 65.546-67.197v-30c-53.054 0-95.546 43.805-95.546 97.197h30ZM413.957 15c35.916 0 65.547 29.797 65.547 67.197h30c0-53.392-42.492-97.197-95.547-97.197v30Zm65.547 67.197c0 25.766-14.119 48.032-34.707 59.313l14.415 26.31c30.007-16.441 50.292-48.682 50.292-85.623h-30ZM527 328.13c0-81.715-23.511-142.198-64.262-183.942l-21.467 20.956C475.356 200.059 497 252.348 497 328.129h30ZM257.816 605.896C406.509 605.896 527 488.053 527 328.129h-30c0 143.777-107.478 247.767-239.184 247.767v30ZM-15 328.129c0 153.22 124.146 277.767 272.816 277.767v-30C126.086 575.896 15 465.154 15 328.129h-30ZM48.967 145.62C8.53 187.208-15 247.168-15 328.129h30c0-74.926 21.608-126.763 55.476-161.597l-21.51-20.912ZM-.475 82.197c0 38.237 21.733 71.442 53.496 87.299l13.4-26.841c-21.765-10.866-36.896-33.784-36.896-60.458h-30ZM95.072-15C42.017-15-.475 28.805-.475 82.197h30C29.525 44.797 59.157 15 95.072 15v-30Zm95.546 97.197C190.618 28.805 148.126-15 95.072-15v30c35.915 0 65.546 29.797 65.546 67.197h30Z"
          mask="url(#a)"
        />
        <path
          stroke-width="15"
          d="M461.916 364.441c0 72.019-23.462 119.674-60.355 149.528-37.174 30.082-89.121 43.018-147.707 43.018-58.235 0-110.244-15.988-147.566-47.729-37.148-31.594-60.495-79.419-60.495-144.817 0-62.826 9.754-92.657 37.548-108.668 14.495-8.35 34.646-13.424 62.812-16.312 28.092-2.881 63.373-3.525 107.701-3.525 41.779 0 75.767.005 103.443 2.103 27.744 2.104 48.259 6.268 63.422 14.067 14.774 7.599 24.868 18.858 31.437 36.345 6.708 17.853 9.76 42.276 9.76 75.99Z"
        />
        <path
          stroke-linecap="round"
          stroke-miterlimit="16"
          stroke-width="15"
          d="m102.004 323.177-31.03-53.808c4.49-11.619 28.72-18.706 40.273-20.796l-9.243 74.604Zm299.409-3.631 31.031-53.808c-4.49-11.62-28.72-18.706-40.274-20.797l9.243 74.605Zm-216.882-33.642-16.175-47.206h30.04l-13.865 47.206Zm156.802 1.641 16.176-47.206h-30.04l13.864 47.206ZM165.055 491.844l-24.428 38.293 24.428 10.563v-48.856Zm180.24 1 24.428 38.293-24.428 10.563v-48.856Z"
        />
        <path
          stroke-linecap="round"
          stroke-miterlimit="16"
          stroke-width="15"
          d="m186.5 543 6-30.5 19.76 36.405m115.209-5.583-7.923-29.05-14.525 34.331"
        />
        <path
          d="M350.246 192.124c21.656-12.676 19.807-38.159 16.176-49.316-17.813 3.817-45.09 13.265-75.763 33.14 6.435 7.593 32.518 32.021 59.587 16.176Z"
        />
        <path
          stroke-linecap="round"
          stroke-miterlimit="16"
          stroke-width="15"
          d="M382.597 140.627c-3.708.059-9.22.69-16.175 2.181m-94.412 25.548 12.215 11.884a292.338 292.338 0 0 1 6.434-4.292m75.763-33.14c3.631 11.157 5.48 36.64-16.176 49.316-27.069 15.845-53.152-8.583-59.587-16.176m75.763-33.14c-17.813 3.817-45.09 13.265-75.763 33.14"
        />
        <ellipse
          cx="12.874"
          cy="12.544"
          fill="#000"
          rx="12.874"
          ry="12.544"
          transform="matrix(-1 0 0 1 335.721 162.744)"
        />
        <circle
          cx="3.301"
          cy="3.301"
          r="3.301"
          transform="matrix(-1 0 0 1 319.876 171.987)"
        />
        <path
          d="M157.792 191.133c-21.655-12.676-19.806-38.159-16.175-49.316 17.813 3.817 45.09 13.266 75.763 33.141-6.435 7.593-32.519 32.021-59.588 16.175Z"
        />
        <path
          stroke-linecap="round"
          stroke-miterlimit="16"
          stroke-width="15"
          d="M125.442 139.636c3.708.059 9.22.691 16.175 2.181m94.411 25.549-12.214 11.884a294.735 294.735 0 0 0-6.434-4.292m-75.763-33.141c-3.631 11.157-5.48 36.64 16.175 49.316 27.069 15.846 53.153-8.582 59.588-16.175m-75.763-33.141c17.813 3.817 45.09 13.266 75.763 33.141"
        />
        <ellipse
          cx="185.191"
          cy="174.298"
          fill="#000"
          rx="12.874"
          ry="12.544"
        />
        <circle cx="191.464" cy="174.298" r="3.301" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="499"
        height="499"
        fill="none"
        viewBox="0 0 499 499"
        class="aspiration ${Tr({hide:!this.isEating})}"
      >
        <defs>
          <radialGradient id="gradient">
            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="60%" stop-color="white" stop-opacity="0.2" />
            <stop offset="80%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <mask id="mask">
            <circle cx="50%" cy="50%" r="50%" fill="url(#gradient)" />
          </mask>
        </defs>

        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248 249.469c38.5-8.666 124.6 16.9 161 188.5"
          style="--animation-delay: 0.95"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.973 247.724c23.108-31.991 104.552-69.854 245.469 34.617"
          style="--animation-delay: 0.62"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.129 248.743c17.949-35.146 92.651-85.009 247.876-3.297"
          style="--animation-delay: 0.53"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.278 247.747c11.465-37.761 76.198-100.023 243.405-46.981"
          style="--animation-delay: 0.46"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.682 248.115c30.064-25.565 118.184-42.935 230.155 92.099"
          style="--animation-delay: 0.84"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.33 248.643c35.564-17.104 125.209-11.557 199.271 147.459"
          style="--animation-delay: 0.21"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.199 250.311c.483-39.46 45.289-117.301 220.654-112.982"
          style="--animation-delay: 0.78"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.987 249.865c26.324 29.4 45.943 117.047-86.184 232.434"
          style="--animation-delay: 0.13"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.526 252.525c18.008 35.116 14.756 124.872-142.315 202.978"
          style="--animation-delay: 0.43"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.779 249.438c39.46-.527 118.421 42.274 118.588 217.692"
          style="--animation-delay: 0.19"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.957 247.987c-25.771-29.886-43.748-117.884 90.51-230.784"
          style="--animation-delay: 0.33"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.985 248.071c-30.035-25.598-61.248-109.816 54.183-241.904"
          style="--animation-delay: 0.61"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.122 252.24c-39.409-2.065-115.391-49.955-104.046-225.006"
          style="--animation-delay: 0.54"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.561 250.037C209.963 238.046 148.611 172.45 203.982 6"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.982 250.975C223.531 279.327 137.504 305.137 13 181.564"
          style="--animation-delay: 0.43"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.289 253.517c-1.793 39.423-49.158 115.733-224.283 105.596"
          style="--animation-delay: 0.82"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.599 252.75c4.253 39.234-30.897 121.886-205.514 138.626"
          style="--animation-delay: 0.21"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.453 255.155c12.671 37.373-3.69 125.686-170.505 179.947"
          style="--animation-delay: 0.22"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.819 248.669C213.738 228.772 168.156 151.383 258.47 1"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.271 248.36c-17.909-35.165-14.405-124.913 142.884-202.577"
          style="--animation-delay: 0.76"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.398 245.907c-8.405-38.558 17.746-124.482 189.589-159.716"
          style="--animation-delay: 0.48"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.731 254.673C226.02 287.628 146.28 328.96 1.001 230.647"
          style="--animation-delay: 0.67"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.302 256.323C238.376 294.518 176.218 359.351 7 313.126"
          style="--animation-delay: 0.27"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.617 247.823c-23.415 31.766-105.221 68.843-245.124-36.98"
          style="--animation-delay: 0.64"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.889 251.922c-17.111 35.561-90.611 87.18-247.728 9.168"
          style="--animation-delay: 0.09"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.447 254.205c-36.082 15.982-125.509 7.631-194.555-153.627"
          style="--animation-delay: 0"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M240.855 253.982C208.017 275.869 118.473 282.853 23 135.692"
          style="--animation-delay: 0.26"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M245.058 252.947C206.102 259.255 121.717 228.497 95.826 55"
          style="--animation-delay: 0.39"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.115 248.21c36.614 14.724 92.975 84.655 25.51 246.581"
          style="--animation-delay: 0.84"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.551 253.091c38.585 8.281 106.021 67.604 67.087 238.647"
          style="--animation-delay: 0.79"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.879 250.799c31.682 23.529 68.464 105.468-37.861 244.99"
          style="--animation-delay: 0.40"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.118 249.619c37.398-12.6 125.68 3.93 179.622 170.848"
          style="--animation-delay: 0.23"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.901 247.679c19.677-34.208 96.772-80.287 247.732 9.058"
          style="--animation-delay: 0.54"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.162 248.676c14.219-36.812 83.367-94.13 246.207-28.901"
          style="--animation-delay: 0.59"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.212 247.773c7.501-38.744 65.451-107.363 237.245-71.888"
          style="--animation-delay: 0.41"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.652 248.098c27.26-28.535 113.113-54.921 238.441 67.815"
          style="--animation-delay: 0.81"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.34 248.35c33.606-20.689 123.343-24.438 213.446 126.071"
          style="--animation-delay: 0.28"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.398 250.332c-3.598-39.299 32.922-121.354 207.794-135.185"
          style="--animation-delay: 0.88"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M253.12 249.497c29.223 26.521 57.795 111.671-61.696 240.098"
          style="--animation-delay: 0.48"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.937 252.191c21.541 33.065 27.584 122.678-120.572 216.6"
          style="--animation-delay: 0.13"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.879 249.3c39.195-4.602 122.157 29.808 140.455 204.269"
          style="--animation-delay: 0.06"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.923 248.149c-28.722-27.063-55.7-112.731 66.169-238.903"
          style="--animation-delay: 0.98"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.954 248.126c-32.52-22.356-72.271-102.896 28.888-246.209"
          style="--animation-delay: 0.35"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.521 252.258c-39.411 2.021-119.937-37.76-126.746-213.046"
          style="--animation-delay: 0.42"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.74 250.229c-38.635-8.041-106.439-66.943-68.57-238.225"
          style="--animation-delay: 0.25"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M251.24 250.808c-24.373 31.038-107.271 65.602-243.881-44.44"
          style="--animation-delay: 0.76"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.813 253.408c2.293 39.397-36.931 120.195-212.166 128.213"
          style="--animation-delay: 0.09"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.048 252.717c8.286 38.584-18.132 124.427-190.084 159.127"
          style="--animation-delay: 0.26"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M251.146 255.02c16.467 35.864 9.322 125.395-150.991 196.608"
          style="--animation-delay: 0.37"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M247.856 248.841c-35.955-16.267-89.293-88.53-15.007-247.443"
          style="--animation-delay: 0.38"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.273 248.488c-21.448-33.126-27.239-122.755 121.179-216.261"
          style="--animation-delay: 0.61"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.141 245.931c-12.346-37.483 4.783-125.65 172.064-178.457"
          style="--animation-delay: 0.83"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.389 254.823c-18.188 35.022-93.229 84.375-247.893 1.606"
          style="--animation-delay: 0.30"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.128 256.405c-5.925 39.016-61.048 109.926-234.138 81.44"
          style="--animation-delay: 0.78"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M252.541 247.504C232.535 281.521 155 326.855 4.908 236.06"
          style="--animation-delay: 0.55"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M250.251 251.864c-13.343 37.139-81.115 96.078-245.453 34.724"
          style="--animation-delay: 0.95"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.058 254.387C213.821 274.012 124.01 274.95 38.665 121.692"
          style="--animation-delay: 0.63"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M241.479 254.846c-30.4 25.164-118.742 41.366-228.915-95.138"
          style="--animation-delay: 0.24"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M245.552 253.382c-38.095 10.301-125.207-11.57-168.893-181.461"
          style="--animation-delay: 0.73"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M248.103 248.354c37.94 10.861 101.227 74.591 50.862 242.624"
          style="--animation-delay: 0.10"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M253.02 252.75c39.234 4.249 112.441 56.284 91.395 230.435"
          style="--animation-delay: 0.65"
        />
        <path
          stroke="currentColor"
          mask="url(#mask)"
          d="M249.131 250.851c33.944 20.128 78.999 97.825-12.335 247.59"
          style="--animation-delay: 0.98"
        />
      </svg>
    `}};ue.styles=mt`
    :host {
      display: grid;
      align-items: center;
      justify-items: center;

      --apparition-timing: cubic-bezier(0.74, -0.83, 0.51, 1.34);
    }

    :host > * {
      grid-area: 1 / 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }

    .mouse-eater {
      scale: 0.5;
      transition: scale 0.4s var(--apparition-timing);
    }

    .aspiration {
      stroke-width: 0.65px;
      translate: 0 10%;
      opacity: 1;
      transition: opacity 0.3s var(--apparition-timing);
      path {
        stroke-dasharray: 286;
        stroke-dashoffset: 0;
        --animation-duration: 3.5s;
        --animation-start: calc(
          var(--animation-duration) * var(--animation-delay)
        );
        animation: stroked var(--animation-duration) linear
            var(--animation-start, 0s) infinite,
          rotation 1s linear infinite;
        transform-origin: center;
      }
    }

    @keyframes stroked {
      to {
        stroke-dashoffset: 286;
      }
    }

    @keyframes rotation {
      30% {
        rotate: -150deg;
      }
      70% {
        rotate: -240deg;
      }
      to {
        rotate: -360deg;
      }
    }

    .hide {
      opacity: 0;
    }

    .grow {
      scale: 0.75;
    }
  `;ln([C({type:Boolean})],ue.prototype,"isEating",2);ue=ln([Y("mouse-eater")],ue);var ei=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,_t=(r,t,e,n)=>{for(var o=n>1?void 0:n?ri(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&ei(t,e,o),o};let K=class extends P{set isOpen(r){this._isOpen=r,(this._isOpen?()=>{var e;return(e=this.menuDialog)==null?void 0:e.showModal()}:()=>{var e;return(e=this.menuDialog)==null?void 0:e.close()})()}get isOpen(){return this._isOpen}render(){return S`<dialog class="menu-dialog" @close=${this.closeMenu}>
      <div class="menu-header">
        <p class="title">Menu</p>
        <button @click=${this.closeMenu}>Close</button>
      </div>
      <label>
        Theme dark
        <input
          type="checkbox"
          .checked=${localStorage.getItem("theme")==="dark"}
          @change=${this.changeTheme}
      /></label>
      <label>
        Scientific notation
        <input
          type="checkbox"
          .checked=${localStorage.getItem("notation")==="scientific"}
          @change=${this.changeNotation}
      /></label>
      <p class="title">Statistics</p>
      <p>Time play: ${this.playTime}</p>
      <p>Money earned: ${this.cashGain.display}</p>
      <p>Interest earned: ${this.interestGain.display}</p>
      <p class="title">What's this game ?</p>
      <p>Just a copy of clicker game with mouvement.</p>
      <p>
        The idea is from
        <a href="https://creativetechguy.com/mousepoint"
          >https://creativetechguy.com/mousepoint</a
        >
      </p>
    </dialog>`}changeTheme(r){const t=r.currentTarget;this.dispatchEvent(new CustomEvent("theme",{detail:{theme:t.checked?"dark":"light"}}))}changeNotation(r){const t=r.currentTarget;this.dispatchEvent(new CustomEvent("notation",{detail:{notation:t.checked?"scientific":"natural"}}))}closeMenu(){this.dispatchEvent(new CustomEvent("close"))}};K.styles=mt`
    dialog::backdrop {
      background-color: var(--backdrop);
    }

    .menu-dialog[open] {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      color: var(--text);
    }

    .menu-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .menu-header > :first-child {
      margin-right: auto;
    }

    label,
    label > * {
      cursor: pointer;
    }

    .title {
      font-weight: 700;
    }

    p + p:not([class]) {
      margin-block: 0;
    }

    dialog {
      background-color: var(--background);
      opacity: 0.9;
    }
  `;_t([sr(".menu-dialog")],K.prototype,"menuDialog",2);_t([C({type:String})],K.prototype,"playTime",2);_t([C({type:Object})],K.prototype,"cashGain",2);_t([C({type:Object})],K.prototype,"interestGain",2);_t([C({type:Boolean})],K.prototype,"isOpen",1);K=_t([Y("mouse-menu")],K);const ni=["auto-cursor","auto-cursor-level"];var oi=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,un=r=>{throw TypeError(r)},cr=(r,t,e,n)=>{for(var o=n>1?void 0:n?ii(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&oi(t,e,o),o},si=(r,t,e)=>t.has(r)||un("Cannot "+e),Xt=(r,t,e)=>(si(r,t,"read from private field"),e?e.call(r):t.get(r)),ai=(r,t,e)=>t.has(r)?un("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),yt,Pt;let ce=class extends P{constructor(){super(...arguments),ai(this,yt),this.itemList=[]}get displayItemList(){const r=e=>((e==null?void 0:e.raw)??0)<this.currentMoney.raw*1.25,t=this.itemList.findIndex(({costToFirstDisplay:e})=>!r(e));return t<0?this.itemList:this.itemList.slice(0,t)}render(){return this.displayItemList.length<=0?S``:S`
      <table>
        <caption>
          Shop
        </caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          ${this.displayItemList.map(({name:r,cost:t})=>S`<tr>
              <th scope="row">${r}</th>
              <td>
                <button
                  class="btn-shop"
                  .disabled="${t===void 0||this.currentMoney.isLowerThan(t)}"
                  @click=${e=>{e.stopPropagation(),this.buyItem(r)}}
                >
                  ${t?`$${t.display}`:"No more upgrade"}
                </button>
              </td>
            </tr>`)}
        </tbody>
        <tfoot>
          ${this.displayItemList.length>1?S`<tr>
                <th scope="row">All</th>
                <td>
                  <button
                    class="btn-shop"
                    .disabled="${Xt(this,yt,Pt).isZero||this.currentMoney.isLowerThan(Xt(this,yt,Pt))}"
                    this.#allNextCost
                    @click=${r=>{r.stopPropagation(),this.buyAllItem()}}
                  >
                    ${Xt(this,yt,Pt).isZero?"No more upgrade":`$${Xt(this,yt,Pt).display}`}
                  </button>
                </td>
              </tr>`:$}
        </tfoot>
      </table>
    `}buyItem(r){this.dispatchEvent(new CustomEvent("buy",{detail:{name:r}}))}buyAllItem(){ni.forEach(r=>this.buyItem(r))}};yt=new WeakSet;Pt=function(){return this.itemList.reduce((r,{cost:t})=>r.add(t??0),new k(0))};cr([C({type:Object})],ce.prototype,"currentMoney",2);cr([C({type:Array})],ce.prototype,"itemList",2);ce=cr([Y("mouse-shop")],ce);var li=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,zt=(r,t,e,n)=>{for(var o=n>1?void 0:n?ui(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&li(t,e,o),o};let ft=class extends P{constructor(){super(...arguments),this.isMoving=!1,this.isScroll=!1,this.isLeftClick=!1,this.isRightClick=!1}render(){return S`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="var(--border)"
        viewBox="0 0 528 439"
      >
        <g class="Mouse With Indicators">
          <g class="Mouse" fill="white">
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M89.55 163.698c30.917-31.807 76.505-66.505 112.047-86.746 28.554-19.276 82.408-44.818 110.239-47.348 42.913-3.901 82.77 11.927 101.203 23.855 45.804 29.638 74.457 58.256 81.324 68.312 10.12 14.819 25.301 38.168 25.301 78.071 2.53 13.373-9.398 70.842-29.638 86.745-16.28 12.791-47.71 36.867-76.264 48.795-10.864 4.538-61.806 28.915-111.323 50.24-46.534 17.506-71.844 32.197-105.902 27.831-14.096-1.808-69.758-23.614-99.035-37.229l-32.168-15.542c-23.132-13.011-48.794-27.469-54.939-48.071-13.012-34.698 28.915-97.227 79.156-148.913Z"
              class="Outer Border"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M27.383 242.853c-9.639 11.446-24.144 44.602 5.06 65.421 36.505 26.023 127.865 67.379 147.829 71.565 22.409 4.698 62.167.913 91.444-12.289 26.014-11.731 61.299-25.673 93.974-40.843 47.532-22.067 76.626-36.144 93.613-48.071 14.016-9.841 57.469-44.819 59.638-77.348"
              class="Inner Border"
            />
            <g class="Split">
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M92.803 338.273c-5.06-26.746 24.578-59.637 31.084-64.336"
                class="Start split"
              />
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M147.016 274.66c-6.867 6.144-31.512-3.976-31.075-22.357.723-30.361 37.946-50.293 42.283-51.377 4.337-1.084 31.451 10.535 33.62 17.041m-44.828 56.693c14.816-16.145 46.844-53.802 44.828-56.693m-44.828 56.693c-2.653-6.524-5.783-17.711 6.868-34.337 9.471-12.449 30.017-26.641 37.96-22.356"
                class="Scroll"
              />
              <path
                stroke-linecap="round"
                stroke-width="15"
                d="M175.935 206.709c25.903-23.855 83.854-73.155 96.865-72.288"
                class="End Split"
              />
              <path
                fill="var(--border)"
                d="M285.451 135.144c-2.357 10.843-8.356 13.012-15.542 13.012s-13.012-5.826-13.012-13.012c0-9.036 9.44-13.735 16.626-13.735 4.699 0 14.001 4.199 11.928 13.735Z"
                class="Circle End Split"
              />
            </g>
          </g>
          <path
            stroke=${this.isLeftClick?"red":"var(--border)"}
            stroke-linecap="round"
            stroke-width="15"
            d="M134.5 333.5c21 11 67.1 35.2 143.5 0"
            class="Left Click"
          />
          <path
            stroke=${this.isRightClick?"red":"var(--border)"}
            stroke-linecap="round"
            stroke-width="15"
            d="M75.5 302c-13-7.5-52.5-18-25.5-58.5"
            class="Right Click"
          />
          <g
            class="Mouse Move"
            stroke=${this.isMoving?"red":"var(--border)"}
          >
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M501.871 325.938C457.773 430.117 385.885 320.468 367 427.57"
              class="Mouse Move R1"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M519.729 357.678c-37.236 78.729-102.763 9.804-117.729 71.644"
              class="Mouse Move R2"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M60.663 131.754C86 21.5 175.837 117 175.837 8.246"
              class="Mouse Move R1"
            />
            <path
              stroke-linecap="round"
              stroke-width="15"
              d="M43.501 100C66.5 16 143 72.5 147 9"
              class="Mouse Move R2"
            />
          </g>
          <path
            stroke=${this.isScroll?"red":"var(--border)"}
            stroke-linecap="round"
            stroke-width="2"
            d="M129 240.5c.681 3.088 6.387 6.202 9.423 6.018m-6.422-12.036c0 3.518 6.422 7.018 9.422 6.018M137 228.464c-.577 3.536 5 7.036 9.423 6.018M159.5 210.5c.681 3.088 5.464 5.184 8.5 5m-26 8c-.577 3.5 5 7.5 8.5 6M147 219c.681 3.088 5.464 5.684 8.5 5.5m-3-9.5c.681 3.088 4.964 5.684 8 5.5M127 257.518c.681 3.088 5.165 5.701 8.201 5.518M126.3 251.5c.681 3.088 6.386 6.202 9.422 6.018M127 246c.681 3.088 6.387 6.202 9.423 6.018"
            class="Scroll Grip"
          />
        </g>
      </svg>
    `}};ft.styles=mt`
    :host {
      display: block;
    }

    * {
      transition: stroke 0.3s, fill 0.3s;
    }
  `;zt([C({type:Boolean})],ft.prototype,"isMoving",2);zt([C({type:Boolean})],ft.prototype,"isScroll",2);zt([C({type:Boolean})],ft.prototype,"isLeftClick",2);zt([C({type:Boolean})],ft.prototype,"isRightClick",2);ft=zt([Y("mouse-usage")],ft);var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,cn=r=>{throw TypeError(r)},hn=(r,t,e,n)=>{for(var o=n>1?void 0:n?hi(t,e):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(n?s(t,e,o):s(o))||o);return n&&o&&ci(t,e,o),o},pn=(r,t,e)=>t.has(r)||cn("Cannot "+e),E=(r,t,e)=>(pn(r,t,"read from private field"),e?e.call(r):t.get(r)),I=(r,t,e)=>t.has(r)?cn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),St=(r,t,e,n)=>(pn(r,t,"write to private field"),t.set(r,e),e),re,ne,Xe,Ke,Ye,Qe,gt,oe,ie,Je,tr;let Fe,he=class extends P{constructor(){super(),I(this,re,10),I(this,ne,new k(0)),I(this,Xe,2e3),I(this,Ke,100),I(this,Ye,30),I(this,Qe,1/E(this,Ye)*1e3),I(this,gt,!1),I(this,oe),I(this,ie),I(this,Je,{"auto-cursor":xr.create(1e3,E(this,re)),"auto-cursor-level":xr.create(100,100)}),I(this,tr,{"auto-cursor":()=>this.bonusController.addNewAutoCursor(),"auto-cursor-level":()=>this.bonusController.upgradeAutoCursor()}),this.statisticsController=new Vo(this),this.mouseEventController=new jo(this),this.bankController=new ze(this,this.statisticsController),this.shopController=new Fo(this,E(this,Je)),this.bonusController=new Bo(this),this.isInterestIndicatorDisplay=!1,this.resetMultiplicatorWhenDelayPassedAndNoMoreClick=vt.delayAndCleanIfExist(()=>{this.bankController.resetInterest(),this.requestUpdate()},E(this,Xe)),this.onMouseMove=vt.debounce(n=>{this.bankController.createMoney(n.clientX,n.clientY,1),this.mouseEventController.move()},E(this,Ke)),Fe=this,this.addEventListener("wheel",this.onMouseScroll),this.addEventListener("click",this.onMouseClick),this.addEventListener("contextmenu",this.onMouseContextMenu),this.addEventListener("mousemove",this.onMouseMove),St(this,oe,setInterval(()=>this.requestUpdate(),E(this,Qe))),St(this,ie,setInterval(()=>{const n=this.bankController.cashInInterest(),i=n.raw-this.bankController.sold.raw*.01>=0;n.isLowerThan(.1)||!i||(St(this,ne,n),this.displayInterestIndicator(),this.requestUpdate())},1e3));const r=window.matchMedia("(prefers-color-scheme: dark)"),e=localStorage.getItem("theme")??(r.matches?"dark":"light");this.onChangeTheme(e),this.onChangeNotation(localStorage.getItem("notation")??"natural")}get hasMoneyCreated(){return this.bankController.moneyPopUpList.length>0}firstUpdated(){this.interestSpan.addEventListener("transitionend",this.removeInterestIndicator)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("wheel",this.onMouseScroll),this.removeEventListener("click",this.onMouseClick),this.removeEventListener("contextmenu",this.onMouseContextMenu),this.removeEventListener("mousemove",this.onMouseMove),this.interestSpan.removeEventListener("transitionend",this.removeInterestIndicator),clearInterval(E(this,oe)),clearInterval(E(this,ie))}render(){return S`
      <header>
        <h1 class="logo">Mouse Power</h1>
        <button @click=${()=>St(this,gt,!E(this,gt))}>
          Menu
        </button>
      </header>
      <main>
        <div class="status">
          <p
            class="money"
            @click=${()=>{this.isInterestIndicatorDisplay=!0,this.requestUpdate()}}
          >
            Money:$${this.bankController.sold.display}
            <span
              class="interest ${this.isInterestIndicatorDisplay===!0?"reveal":""}"
            >
              Interest $${E(this,ne).display}
            </span>
          </p>
          <p>Timer:${this.statisticsController.playTime}</p>
          <p>Interest:${this.bankController.interest.display}</p>
        </div>

        <mouse-menu
          .isOpen=${E(this,gt)}
          .cashGain=${this.statisticsController.totalMoneyGain}
          .interestGain=${this.statisticsController.totalInterestGain}
          .playTime=${this.statisticsController.playTime}
          @notation=${({detail:r})=>this.onChangeNotation(r.notation)}
          @theme=${({detail:r})=>this.onChangeTheme(r.theme)}
          @close=${()=>St(this,gt,!1)}
        ></mouse-menu>

        <mouse-usage
          .isScroll=${this.mouseEventController.isScroll}
          .isMoving=${this.mouseEventController.isMoving}
          .isLeftClick=${this.mouseEventController.isLeftClick}
          .isRightClick=${this.mouseEventController.isRightClick}
        >
        </mouse-usage>

        <mouse-eater .isEating=${this.hasMoneyCreated}></mouse-eater>
        <mouse-shop
          .currentMoney=${this.bankController.sold}
          .itemList=${this.shopController.itemList}
          @buy=${({detail:r})=>this.onBuy(r.name)}
        >
        </mouse-shop>

        <div class="score-increment-container">
          ${Yr(this.bankController.moneyPopUpList,({id:r})=>r,({id:r,moneyCreated:t})=>S`<money-created
                value=${t.value.display}
                .fromPosition=${t.startPosition}
                .toPosition=${{x:47.5,y:52.5}}
                .displayTimeInMs=${t.displayTimeInMs}
                @is-old=${()=>this.bankController.cashIn(r)}
              />`)}
        </div>
        <auto-cursor-manager
          .autoCursorList=${this.bonusController.autoCursorList}
          .nbMaxAutoCursor=${E(this,re)}
          @add-score=${({detail:r})=>{const{x:t,y:e,level:n}=r;this.bankController.createMoney(t,e,n),this.requestUpdate()}}
        ></auto-cursor-manager>
      </main>
    `}onChangeNotation(r){k.DEFAULT_TYPE=r,localStorage.setItem("notation",r),this.requestUpdate()}onChangeTheme(r){document.documentElement.setAttribute("theme",r),localStorage.setItem("theme",r),this.requestUpdate()}onBuy(r){const{nbItemToBuy:t,upgradeCost:e}=this.shopController.buy(r),n=E(this,tr)[r];Array.from({length:t}).forEach(n),this.bankController.cashOut(e),this.requestUpdate()}onMouseScroll(){this.mouseEventController.scroll()}onMouseClick(){this.bankController.incrementInterest(),this.resetMultiplicatorWhenDelayPassedAndNoMoreClick(),this.mouseEventController.leftClick()}onMouseContextMenu(r){r.preventDefault(),this.bankController.incrementInterest(),this.resetMultiplicatorWhenDelayPassedAndNoMoreClick(),this.mouseEventController.rightClick()}displayInterestIndicator(){this.isInterestIndicatorDisplay=!0,this.requestUpdate()}removeInterestIndicator(){Fe.isInterestIndicatorDisplay=!1,Fe.requestUpdate()}};re=new WeakMap;ne=new WeakMap;Xe=new WeakMap;Ke=new WeakMap;Ye=new WeakMap;Qe=new WeakMap;gt=new WeakMap;oe=new WeakMap;ie=new WeakMap;Je=new WeakMap;tr=new WeakMap;he.styles=mt`
    :host {
      --padding: 20px;

      display: flex;
      flex-direction: column;
      height: calc(100% - var(--padding) * 2);

      padding: var(--padding);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      --padding-inline: 80px;
      padding-inline: var(--padding-inline);
      @media (width < 500px) {
        --padding-inline: 20px;
      }
    }

    main {
      flex-grow: 2;
      font-variant-numeric: tabular-nums;
    }

    .logo {
      display: flex;
    }

    .status {
      display: flex;
      justify-content: space-evenly;
    }

    .money {
      position: relative;
    }

    .money > .interest {
      position: absolute;
      top: 150%;
      left: 40%;
      opacity: 0;
      transition: top 1s ease-in-out;
      font-size: 0.8rem;
      font-weight: 800;
      color: green;
      text-shadow: 1px 1px white, -1px -1px white;
    }

    .money > .reveal {
      opacity: 1;
      top: 0;
    }

    mouse-eater {
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;

      --width: 400px;
      width: var(--width);
      aspect-ratio: 1;

      @media (height < 500px) {
        --width: 200px;
      }
    }

    mouse-usage {
      width: 150px;

      position: absolute;
      right: 0;
      bottom: 0;
      translate: -15% -15%;

      @media (width < 500px) {
        translate: -5% -5%;
      }
    }

    mouse-shop {
      position: absolute;
      left: 0;
      bottom: 0;
      translate: 15% -15%;

      @media (width < 500px) {
        translate: 5% -5%;
      }
    }

    auto-cursor-manager {
      --size: 40px;
    }
  `;hn([sr(".interest")],he.prototype,"interestSpan",2);he=hn([Y("mouse-power")],he);
