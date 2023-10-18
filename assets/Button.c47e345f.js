import{_ as B,g as z,o as h,c as _,y as S,l as m,w as $,r as b,k,N as K,a as M,P as H,L as R,M as T,m as J,f as I,h as V,i as g,j as C,n as w,t as D}from"./entry.939d9ead.js";import{_ as U}from"./nuxt-link.a53eca01.js";import{d as E,u as Q,t as x}from"./Container.42ac9257.js";const A=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function N(e,l){l?l={...A,...l}:l=A;const a=j(l);return a.dispatch(e),a.toString()}const G=Object.freeze(["prototype","__proto__","constructor"]);function j(e){let l="",a=new Map;const n=t=>{l+=t};return{toString(){return l},getContext(){return a},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const r=Object.prototype.toString.call(t);let i="";const u=r.length;u<10?i="unknown:["+r+"]":i=r.slice(8,u-1),i=i.toLowerCase();let d=null;if((d=a.get(t))===void 0)a.set(t,a.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return n("buffer:"),n(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):e.ignoreUnknown||this.unkown(t,i);else{let o=Object.keys(t);e.unorderedObjects&&(o=o.sort());let c=[];e.respectType!==!1&&!O(t)&&(c=G),e.excludeKeys&&(o=o.filter(s=>!e.excludeKeys(s)),c=c.filter(s=>!e.excludeKeys(s))),n("object:"+(o.length+c.length)+":");const y=s=>{this.dispatch(s),n(":"),e.excludeValues||this.dispatch(t[s]),n(",")};for(const s of o)y(s);for(const s of c)y(s)}},array(t,r){if(r=r===void 0?e.unorderedArrays!==!1:r,n("array:"+t.length+":"),!r||t.length<=1){for(const d of t)this.dispatch(d);return}const i=new Map,u=t.map(d=>{const o=j(e);o.dispatch(d);for(const[c,y]of o.getContext())i.set(c,y);return o.toString()});return a=i,u.sort(),this.array(u,!1)},date(t){return n("date:"+t.toJSON())},symbol(t){return n("symbol:"+t.toString())},unkown(t,r){if(n(r),!!t&&(n(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return n("error:"+t.toString())},boolean(t){return n("bool:"+t)},string(t){n("string:"+t.length+":"),n(t)},function(t){n("fn:"),O(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return n("number:"+t)},xml(t){return n("xml:"+t.toString())},null(){return n("Null")},undefined(){return n("Undefined")},regexp(t){return n("regex:"+t.toString())},uint8array(t){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return n("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return n("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return n("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return n("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return n("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return n("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return n("url:"+t.toString())},map(t){n("map:");const r=[...t];return this.array(r,e.unorderedSets!==!1)},set(t){n("set:");const r=[...t];return this.array(r,e.unorderedSets!==!1)},file(t){return n("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return n("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return n("domwindow")},bigint(t){return n("bigint:"+t.toString())},process(){return n("process")},timer(){return n("timer")},pipe(){return n("pipe")},tcp(){return n("tcp")},udp(){return n("udp")},tty(){return n("tty")},statwatcher(){return n("statwatcher")},securecontext(){return n("securecontext")},connection(){return n("connection")},zlib(){return n("zlib")},context(){return n("context")},nodescript(){return n("nodescript")},httpparser(){return n("httpparser")},dataview(){return n("dataview")},signal(){return n("signal")},fsevent(){return n("fsevent")},tlswrap(){return n("tlswrap")}}}const L="[native code] }",W=L.length;function O(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-W)===L}function X(e,l,a={}){return e===l||N(e,a)===N(l,a)}const Y=z({props:{name:{type:String,required:!0}}});function Z(e,l,a,n,t,r){return h(),_("span",{class:S(e.name)},null,2)}const F=B(Y,[["render",Z]]),ee=z({inheritAttrs:!1,props:{...U.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function l(a,n,{isActive:t,isExactActive:r}){return e.active?e.activeClass:e.exactQuery&&!X(a.query,n.query)||e.exactHash&&a.hash!==n.hash?e.inactiveClass:e.exact&&r||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:l}}}),te=["href","aria-disabled","role","rel","target","onClick"];function ne(e,l,a,n,t,r){const i=U;return e.to?(h(),m(i,k({key:1},e.$props,{custom:""}),{default:$(({route:u,href:d,target:o,rel:c,navigate:y,isActive:s,isExactActive:p,isExternal:v})=>[M("a",k(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:c,target:o,class:e.resolveLinkClass(u,e._.provides[H]||e.$route,{isActive:s,isExactActive:p}),onClick:P=>!v&&y(P)}),[b(e.$slots,"default",R(T({isActive:e.exact?p:s})))],16,te)]),_:3},16)):(h(),m(K(e.as),k({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:$(()=>[b(e.$slots,"default")]),_:3},16,["disabled","class"]))}const q=B(ee,[["render",ne]]),f=J(I.ui.strategy,I.ui.button,E),ae=z({components:{UIcon:F,ULink:q},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},color:{type:String,default:()=>f.default.color,validator(e){return[...I.ui.colors,...Object.keys(f.color)].includes(e)}},variant:{type:String,default:()=>f.default.variant,validator(e){return[...Object.keys(f.variant),...Object.values(f.color).flatMap(l=>Object.keys(l))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>f.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:l}){const{ui:a,attrs:n}=Q("button",V(e,"ui"),f),t=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),r=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),i=g(()=>e.square||!l.default&&!e.label),u=g(()=>{var p,v;const s=((v=(p=a.value.color)==null?void 0:p[e.color])==null?void 0:v[e.variant])||a.value.variant[e.variant];return x(C(a.value.base,a.value.font,a.value.rounded,a.value.size[e.size],a.value.gap[e.size],e.padded&&a.value[i.value?"square":"padding"][e.size],s==null?void 0:s.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),d=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),o=g(()=>e.loading&&!t.value?e.loadingIcon:e.trailingIcon||e.icon),c=g(()=>C(a.value.icon.base,a.value.icon.size[e.size],e.loading&&"animate-spin")),y=g(()=>C(a.value.icon.base,a.value.icon.size[e.size],e.loading&&!t.value&&"animate-spin"));return{attrs:n,isLeading:t,isTrailing:r,isSquare:i,buttonClass:u,leadingIconName:d,trailingIconName:o,leadingIconClass:c,trailingIconClass:y}}});function re(e,l,a,n,t,r){const i=F,u=q;return h(),m(u,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:$(()=>[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(h(),m(i,{key:0,name:e.leadingIconName,class:S(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):w("",!0)]),b(e.$slots,"default",{},()=>[e.label?(h(),_("span",{key:0,class:S([e.truncate?"text-left break-all line-clamp-1":""])},D(e.label),3)):w("",!0)]),b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(h(),m(i,{key:0,name:e.trailingIconName,class:S(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):w("",!0)])]),_:3},16,["type","disabled","class"])}const oe=B(ae,[["render",re]]);export{F as _,oe as a,q as b};
