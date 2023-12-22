(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();function $e(){}function sr(t){return t()}function oo(){return Object.create(null)}function Te(t){t.forEach(sr)}function Kr(t){return typeof t=="function"}function je(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Wr(t){return Object.keys(t).length===0}function O(t,e){t.appendChild(e)}function nt(t,e,i){t.insertBefore(e,i||null)}function ot(t){t.parentNode.removeChild(t)}function es(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function V(t){return document.createElement(t)}function Ve(t){return document.createTextNode(t)}function J(){return Ve(" ")}function Ke(){return Ve("")}function Wt(t,e,i,s){return t.addEventListener(e,i,s),()=>t.removeEventListener(e,i,s)}function _t(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function P(t,e,i){e in t?t[e]=typeof t[e]=="boolean"&&i===""?!0:i:_t(t,e,i)}function Xr(t){return Array.from(t.childNodes)}function Yr(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pe(t,e){t.value=e==null?"":e}function oe(t,e,i,s){i===null?t.style.removeProperty(e):t.style.setProperty(e,i,s?"important":"")}function Gr(t,e,{bubbles:i=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,i,s,e),o}let _i;function di(t){_i=t}function or(){if(!_i)throw new Error("Function called outside component initialization");return _i}function qs(t){or().$$.on_mount.push(t)}function Qr(){const t=or();return(e,i,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const r=Gr(e,i,{cancelable:s});return o.slice().forEach(n=>{n.call(t,r)}),!r.defaultPrevented}return!0}}function rr(t,e){const i=t.$$.callbacks[e.type];i&&i.slice().forEach(s=>s.call(this,e))}const ci=[],Se=[],Hi=[],Ss=[],Zr=Promise.resolve();let zs=!1;function Jr(){zs||(zs=!0,Zr.then(ar))}function As(t){Hi.push(t)}function Es(t){Ss.push(t)}const ds=new Set;let Mi=0;function ar(){const t=_i;do{for(;Mi<ci.length;){const e=ci[Mi];Mi++,di(e),ta(e.$$)}for(di(null),ci.length=0,Mi=0;Se.length;)Se.pop()();for(let e=0;e<Hi.length;e+=1){const i=Hi[e];ds.has(i)||(ds.add(i),i())}Hi.length=0}while(ci.length);for(;Ss.length;)Ss.pop()();zs=!1,ds.clear(),di(t)}function ta(t){if(t.fragment!==null){t.update(),Te(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(As)}}const qi=new Set;let _e;function We(){_e={r:0,c:[],p:_e}}function Xe(){_e.r||Te(_e.c),_e=_e.p}function Z(t,e){t&&t.i&&(qi.delete(t),t.i(e))}function pt(t,e,i,s){if(t&&t.o){if(qi.has(t))return;qi.add(t),_e.c.push(()=>{qi.delete(t),s&&(i&&t.d(1),s())}),t.o(e)}else s&&s()}const ea=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ts(t,e,i){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=i,i(t.$$.ctx[s]))}function Be(t){t&&t.c()}function ke(t,e,i,s){const{fragment:o,on_mount:r,on_destroy:n,after_update:d}=t.$$;o&&o.m(e,i),s||As(()=>{const l=r.map(sr).filter(Kr);n?n.push(...l):Te(l),t.$$.on_mount=[]}),d.forEach(As)}function Ce(t,e){const i=t.$$;i.fragment!==null&&(Te(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function ia(t,e){t.$$.dirty[0]===-1&&(ci.push(t),Jr(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ye(t,e,i,s,o,r,n,d=[-1]){const l=_i;di(t);const u=t.$$={fragment:null,ctx:null,props:r,update:$e,not_equal:o,bound:oo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:oo(),dirty:d,skip_bound:!1,root:e.target||l.$$.root};n&&n(u.root);let g=!1;if(u.ctx=i?i(t,e.props||{},(h,p,...m)=>{const f=m.length?m[0]:p;return u.ctx&&o(u.ctx[h],u.ctx[h]=f)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](f),g&&ia(t,h)),p}):[],u.update(),g=!0,Te(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const h=Xr(e.target);u.fragment&&u.fragment.l(h),h.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&Z(t.$$.fragment),ke(t,e.target,e.anchor,e.customElement),ar()}di(l)}class Ge{$destroy(){Ce(this,1),this.$destroy=$e}$on(e,i){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(i),()=>{const o=s.indexOf(i);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Wr(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function sa(t){let e,i,s,o,r,n,d,l,u;return{c(){e=V("div"),i=V("sl-input"),o=J(),r=V("sl-input"),d=J(),l=V("sl-input"),P(i,"class","label-on-left svelte-sflwu8"),P(i,"label","\u7AEF\u53E3"),P(i,"value",s=t[0].port),P(i,"id","port"),P(r,"class","label-on-left svelte-sflwu8"),P(r,"label","\u9759\u6001\u8DEF\u5F84"),P(r,"type","text"),P(r,"value",n=t[0].staticPath),P(r,"id","staticPath"),P(l,"class","label-on-left svelte-sflwu8"),P(l,"label","\u9996\u9875\u6587\u4EF6\u540D"),P(l,"type","text"),P(l,"value",u=t[0].startFileName),P(l,"id","startFileName"),oe(e,"padding","50px")},m(g,h){nt(g,e,h),O(e,i),O(e,o),O(e,r),O(e,d),O(e,l)},p(g,[h]){h&1&&s!==(s=g[0].port)&&P(i,"value",s),h&1&&n!==(n=g[0].staticPath)&&P(r,"value",n),h&1&&u!==(u=g[0].startFileName)&&P(l,"value",u)},i:$e,o:$e,d(g){g&&ot(e)}}}function hs(t){return document.getElementById(t).value}function oa(t,e,i){let{config:s}=e,{collect:o}=e;return qs(()=>{i(1,o=()=>({port:hs("port"),staticPath:hs("staticPath"),startFileName:hs("startFileName")}))}),t.$$set=r=>{"config"in r&&i(0,s=r.config),"collect"in r&&i(1,o=r.collect)},[s,o]}class ra extends Ge{constructor(e){super(),Ye(this,e,oa,sa,je,{config:0,collect:1})}}const{Boolean:aa}=ea;function ro(t,e,i){const s=t.slice();return s[11]=e[i],s}function ao(t){let e,i,s,o,r,n,d,l,u,g,h,p,m,f,b,x,y,_,$,v,w,E,F,B,z=t[0].children&&no(t);return{c(){e=V("tr"),i=V("td"),s=V("span"),o=J(),r=V("input"),n=J(),d=V("td"),l=V("input"),u=J(),g=V("td"),h=V("input"),p=J(),m=V("td"),f=V("sl-button"),f.textContent="\u67E5\u770B",b=J(),x=V("td"),y=V("sl-icon-button"),_=J(),$=V("sl-icon-button"),v=J(),z&&z.c(),w=Ke(),oe(s,"margin-left",t[1]*2+"rem",!1),_t(r,"type","text"),oe(r,"width","calc(100% - "+(t[1]*2+"rem")+" - 20px)"),_t(r,"class","svelte-7regfu"),_t(i,"class","svelte-7regfu"),_t(l,"type","text"),_t(l,"class","svelte-7regfu"),_t(d,"class","svelte-7regfu"),_t(h,"type","text"),_t(h,"class","svelte-7regfu"),_t(g,"class","svelte-7regfu"),P(f,"variant","text"),_t(m,"class","svelte-7regfu"),P(y,"name","plus-lg"),P(y,"label","\u65B0\u589E"),P($,"name","dash"),P($,"label","\u51CF\u53BB"),_t(x,"class","svelte-7regfu"),_t(e,"class","svelte-7regfu")},m(C,N){nt(C,e,N),O(e,i),O(i,s),O(i,o),O(i,r),Pe(r,t[0].name),O(e,n),O(e,d),O(d,l),Pe(l,t[0].path),O(e,u),O(e,g),O(g,h),Pe(h,t[0].file),O(e,p),O(e,m),O(m,f),O(e,b),O(e,x),O(x,y),O(x,_),O(x,$),nt(C,v,N),z&&z.m(C,N),nt(C,w,N),E=!0,F||(B=[Wt(r,"input",t[6]),Wt(l,"input",t[7]),Wt(h,"input",t[8]),Wt(f,"click",t[2]),Wt(y,"click",t[3]),Wt($,"click",t[4])],F=!0)},p(C,N){N&2&&oe(s,"margin-left",C[1]*2+"rem",!1),(!E||N&2)&&oe(r,"width","calc(100% - "+(C[1]*2+"rem")+" - 20px)"),N&1&&r.value!==C[0].name&&Pe(r,C[0].name),N&1&&l.value!==C[0].path&&Pe(l,C[0].path),N&1&&h.value!==C[0].file&&Pe(h,C[0].file),C[0].children?z?(z.p(C,N),N&1&&Z(z,1)):(z=no(C),z.c(),Z(z,1),z.m(w.parentNode,w)):z&&(We(),pt(z,1,1,()=>{z=null}),Xe())},i(C){E||(Z(z),E=!0)},o(C){pt(z),E=!1},d(C){C&&ot(e),C&&ot(v),z&&z.d(C),C&&ot(w),F=!1,Te(B)}}}function no(t){let e,i,s=t[0].children,o=[];for(let n=0;n<s.length;n+=1)o[n]=lo(ro(t,s,n));const r=n=>pt(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();e=Ke()},m(n,d){for(let l=0;l<o.length;l+=1)o[l].m(n,d);nt(n,e,d),i=!0},p(n,d){if(d&3){s=n[0].children;let l;for(l=0;l<s.length;l+=1){const u=ro(n,s,l);o[l]?(o[l].p(u,d),Z(o[l],1)):(o[l]=lo(u),o[l].c(),Z(o[l],1),o[l].m(e.parentNode,e))}for(We(),l=s.length;l<o.length;l+=1)r(l);Xe()}},i(n){if(!i){for(let d=0;d<s.length;d+=1)Z(o[d]);i=!0}},o(n){o=o.filter(aa);for(let d=0;d<o.length;d+=1)pt(o[d]);i=!1},d(n){es(o,n),n&&ot(e)}}}function lo(t){let e,i;return e=new nr({props:{parent:t[0],node:t[11],z:++t[1]}}),e.$on("click",t[9]),{c(){Be(e.$$.fragment)},m(s,o){ke(e,s,o),i=!0},p(s,o){const r={};o&1&&(r.parent=s[0]),o&1&&(r.node=s[11]),o&2&&(r.z=++s[1]),e.$set(r)},i(s){i||(Z(e.$$.fragment,s),i=!0)},o(s){pt(e.$$.fragment,s),i=!1},d(s){Ce(e,s)}}}function na(t){let e,i,s=t[0]&&ao(t);return{c(){s&&s.c(),e=Ke()},m(o,r){s&&s.m(o,r),nt(o,e,r),i=!0},p(o,[r]){o[0]?s?(s.p(o,r),r&1&&Z(s,1)):(s=ao(o),s.c(),Z(s,1),s.m(e.parentNode,e)):s&&(We(),pt(s,1,1,()=>{s=null}),Xe())},i(o){i||(Z(s),i=!0)},o(o){pt(s),i=!1},d(o){s&&s.d(o),o&&ot(e)}}}function la(t,e,i){let{node:s}=e,{parent:o}=e,{z:r=0}=e;const n=Qr(),d=()=>n("click",s);s._sync=()=>i(0,s),s._parent=()=>o;function l(){i(0,s.children=[].concat(s.children,{}).filter(Boolean),s)}function u(){Array.isArray(s.children)&&s.children.length>0?alert("\u8BF7\u5148\u79FB\u9664\u5B50\u9879"):(i(5,o.children=o.children.filter(f=>f!==s),o),s.file&&ipc("file.rm",s.file)),o._sync()}function g(){s.name=this.value,i(0,s)}function h(){s.path=this.value,i(0,s)}function p(){s.file=this.value,i(0,s)}function m(f){rr.call(this,t,f)}return t.$$set=f=>{"node"in f&&i(0,s=f.node),"parent"in f&&i(5,o=f.parent),"z"in f&&i(1,r=f.z)},[s,r,d,l,u,o,g,h,p,m]}class nr extends Ge{constructor(e){super(),Ye(this,e,la,na,je,{node:0,parent:5,z:1})}}function co(t,e,i){const s=t.slice();return s[4]=e[i],s}function ho(t){let e,i,s=t[0].children,o=[];for(let n=0;n<s.length;n+=1)o[n]=uo(co(t,s,n));const r=n=>pt(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();e=Ke()},m(n,d){for(let l=0;l<o.length;l+=1)o[l].m(n,d);nt(n,e,d),i=!0},p(n,d){if(d&1){s=n[0].children;let l;for(l=0;l<s.length;l+=1){const u=co(n,s,l);o[l]?(o[l].p(u,d),Z(o[l],1)):(o[l]=uo(u),o[l].c(),Z(o[l],1),o[l].m(e.parentNode,e))}for(We(),l=s.length;l<o.length;l+=1)r(l);Xe()}},i(n){if(!i){for(let d=0;d<s.length;d+=1)Z(o[d]);i=!0}},o(n){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)pt(o[d]);i=!1},d(n){es(o,n),n&&ot(e)}}}function uo(t){let e,i;return e=new nr({props:{node:t[4],parent:t[0]}}),e.$on("click",t[2]),{c(){Be(e.$$.fragment)},m(s,o){ke(e,s,o),i=!0},p(s,o){const r={};o&1&&(r.node=s[4]),o&1&&(r.parent=s[0]),e.$set(r)},i(s){i||(Z(e.$$.fragment,s),i=!0)},o(s){pt(e.$$.fragment,s),i=!1},d(s){Ce(e,s)}}}function ca(t){let e,i,s=t[0]&&ho(t);return{c(){s&&s.c(),e=Ke()},m(o,r){s&&s.m(o,r),nt(o,e,r),i=!0},p(o,[r]){o[0]?s?(s.p(o,r),r&1&&Z(s,1)):(s=ho(o),s.c(),Z(s,1),s.m(e.parentNode,e)):s&&(We(),pt(s,1,1,()=>{s=null}),Xe())},i(o){i||(Z(s),i=!0)},o(o){pt(s),i=!1},d(o){s&&s.d(o),o&&ot(e)}}}function da(t,e,i){let{data:s}=e,o;function r(){i(0,o={children:s,_sync:()=>{i(1,s=o.children)}})}function n(d){rr.call(this,t,d)}return t.$$set=d=>{"data"in d&&i(1,s=d.data)},t.$$.update=()=>{t.$$.dirty&2&&s&&r()},[o,s,n]}class ha extends Ge{constructor(e){super(),Ye(this,e,da,ca,je,{data:1})}}function po(t){let e,i,s,o,r,n,d,l,u,g;return{c(){e=V("sl-drawer"),i=V("sl-textarea"),o=J(),r=V("sl-divider"),n=J(),d=V("sl-button"),d.innerHTML=`<sl-icon slot="prefix" name="save"></sl-icon>
			\u4FDD\u5B58`,P(i,"resize","auto"),P(i,"value",s=t[3].fileData),P(d,"slot","footer"),P(d,"variant","success"),P(e,"label",l=t[3].name)},m(h,p){nt(h,e,p),O(e,i),t[10](i),O(e,o),O(e,r),O(e,n),O(e,d),t[11](e),u||(g=[Wt(d,"click",t[6]),Wt(e,"sl-hide",t[12])],u=!0)},p(h,p){p&8&&s!==(s=h[3].fileData)&&P(i,"value",s),p&8&&l!==(l=h[3].name)&&P(e,"label",l)},d(h){h&&ot(e),t[10](null),t[11](null),u=!1,Te(g)}}}function ua(t){let e,i,s,o,r,n,d,l,u,g,h,p,m,f,b,x,y,_,$,v,w,E;function F(C){t[9](C)}let B={};t[0]!==void 0&&(B.data=t[0]),x=new ha({props:B}),Se.push(()=>Ts(x,"data",F)),x.$on("click",t[4]);let z=t[3]&&po(t);return{c(){e=V("table"),i=V("thead"),s=V("tr"),o=V("th"),o.textContent="\u540D\u79F0",r=J(),n=V("th"),n.textContent="\u8DEF\u5F84",d=J(),l=V("th"),l.textContent="\u6587\u4EF6\u540D",u=J(),g=V("th"),h=J(),p=V("th"),m=V("sl-icon-button"),f=J(),b=V("tbody"),Be(x.$$.fragment),_=J(),z&&z.c(),$=Ke(),P(m,"name","plus-lg"),P(m,"label","\u65B0\u589E"),_t(i,"class","svelte-1ffv5rb"),_t(e,"class","svelte-1ffv5rb")},m(C,N){nt(C,e,N),O(e,i),O(i,s),O(s,o),O(s,r),O(s,n),O(s,d),O(s,l),O(s,u),O(s,g),O(s,h),O(s,p),O(p,m),O(e,f),O(e,b),ke(x,b,null),nt(C,_,N),z&&z.m(C,N),nt(C,$,N),v=!0,w||(E=Wt(m,"click",t[5]),w=!0)},p(C,[N]){const Q={};!y&&N&1&&(y=!0,Q.data=C[0],Es(()=>y=!1)),x.$set(Q),C[3]?z?z.p(C,N):(z=po(C),z.c(),z.m($.parentNode,$)):z&&(z.d(1),z=null)},i(C){v||(Z(x.$$.fragment,C),v=!0)},o(C){pt(x.$$.fragment,C),v=!1},d(C){C&&ot(e),Ce(x),C&&ot(_),z&&z.d(C),C&&ot($),w=!1,E()}}}function pa(t,e,i){let{config:s}=e,{collect:o}=e,r=[],n,d,l;qs(()=>{i(0,r=s),i(7,o=()=>r)});async function u(x){const{file:y,name:_}=x.detail;if(!y)return;const $=await ipc("file.has",y),v=await ipc("file.data",y);i(3,l={hasFile:$,fileData:v,file:y,name:_}),setTimeout(()=>{n.show()},0)}function g(){i(0,r=r.concat({}))}function h(){ipc("file.save",l.file,d.value),n.hide()}function p(x){r=x,i(0,r)}function m(x){Se[x?"unshift":"push"](()=>{d=x,i(2,d)})}function f(x){Se[x?"unshift":"push"](()=>{n=x,i(1,n)})}const b=()=>{i(3,l=null)};return t.$$set=x=>{"config"in x&&i(8,s=x.config),"collect"in x&&i(7,o=x.collect)},[r,n,d,l,u,g,h,o,s,p,m,f,b]}class fa extends Ge{constructor(e){super(),Ye(this,e,pa,ua,je,{config:8,collect:7})}}const fo={"@shoelace-style/shoelace":"^2.8.0",axios:"^1.5.1",busboy:"^1.6.0",dayjs:"^1.11.10",express:"^4.18.2","fs-extra":"^11.1.1",glob:"^10.3.10",lodash:"^4.17.21",mitt:"^3.0.1",mockjs:"^1.1.0",qs:"^6.11.2",rxjs:"^7.8.1",shelljs:"^0.8.5","socket.io":"^4.7.2",uuid:"^9.0.1",validator:"^13.11.0",ini:"^4.1.1"};function mo(t,e,i){const s=t.slice();return s[0]=e[i][0],s[1]=e[i][1],s}function go(t){let e,i=t[0]+"",s,o,r=t[1]+"",n;return{c(){e=V("sl-tag"),s=Ve(i),o=Ve("@"),n=Ve(r),P(e,"variant","primary"),oe(e,"margin-right","10px")},m(d,l){nt(d,e,l),O(e,s),O(e,o),O(e,n)},p:$e,d(d){d&&ot(e)}}}function ma(t){let e,i=Object.entries(fo),s=[];for(let o=0;o<i.length;o+=1)s[o]=go(mo(t,i,o));return{c(){e=V("div");for(let o=0;o<s.length;o+=1)s[o].c();_t(e,"class","svelte-ejzsro")},m(o,r){nt(o,e,r);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(o,[r]){if(r&0){i=Object.entries(fo);let n;for(n=0;n<i.length;n+=1){const d=mo(o,i,n);s[n]?s[n].p(d,r):(s[n]=go(d),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},i:$e,o:$e,d(o){o&&ot(e),es(s,o)}}}class ga extends Ge{constructor(e){super(),Ye(this,e,null,ma,je,{})}}function bo(t,e,i){const s=t.slice();return s[8]=e[i],s}function vo(t){let e,i=t[8].label+"",s,o,r,n,d,l,u;function g(){return t[4](t[8])}return{c(){e=V("sl-button"),s=Ve(i),o=J(),oe(e,"margin-right","10px"),P(e,"variant",r=t[8].variant),P(e,"loading",n=t[8].loading),P(e,"disabled",d=t[8].disabled)},m(h,p){nt(h,e,p),O(e,s),O(e,o),l||(u=Wt(e,"click",g),l=!0)},p(h,p){t=h,p&8&&i!==(i=t[8].label+"")&&Yr(s,i),p&8&&r!==(r=t[8].variant)&&P(e,"variant",r),p&8&&n!==(n=t[8].loading)&&P(e,"loading",n),p&8&&d!==(d=t[8].disabled)&&P(e,"disabled",d)},d(h){h&&ot(e),l=!1,u()}}}function yo(t){let e,i,s,o,r,n,d,l,u,g,h,p;function m(y){t[5](y)}let f={config:t[0][0]};t[2][0]!==void 0&&(f.collect=t[2][0]),i=new ra({props:f}),Se.push(()=>Ts(i,"collect",m));function b(y){t[6](y)}let x={config:t[0][1]};return t[2][1]!==void 0&&(x.collect=t[2][1]),d=new fa({props:x}),Se.push(()=>Ts(d,"collect",b)),h=new ga({}),{c(){e=V("sl-tab-panel"),Be(i.$$.fragment),o=J(),r=V("sl-tab-panel"),n=V("div"),Be(d.$$.fragment),u=J(),g=V("sl-tab-panel"),Be(h.$$.fragment),P(e,"name","0"),oe(n,"overflow","auto"),oe(n,"max-height","calc(100vh - 100px)"),P(r,"name","1"),P(g,"name","2")},m(y,_){nt(y,e,_),ke(i,e,null),nt(y,o,_),nt(y,r,_),O(r,n),ke(d,n,null),nt(y,u,_),nt(y,g,_),ke(h,g,null),p=!0},p(y,_){const $={};_&1&&($.config=y[0][0]),!s&&_&4&&(s=!0,$.collect=y[2][0],Es(()=>s=!1)),i.$set($);const v={};_&1&&(v.config=y[0][1]),!l&&_&4&&(l=!0,v.collect=y[2][1],Es(()=>l=!1)),d.$set(v)},i(y){p||(Z(i.$$.fragment,y),Z(d.$$.fragment,y),Z(h.$$.fragment,y),p=!0)},o(y){pt(i.$$.fragment,y),pt(d.$$.fragment,y),pt(h.$$.fragment,y),p=!1},d(y){y&&ot(e),Ce(i),y&&ot(o),y&&ot(r),Ce(d),y&&ot(u),y&&ot(g),Ce(h)}}}function ba(t){let e,i,s,o,r,n,d,l,u,g,h,p=t[3],m=[];for(let b=0;b<p.length;b+=1)m[b]=vo(bo(t,p,b));let f=t[0]&&yo(t);return{c(){e=V("main"),i=V("sl-tab-group"),s=V("sl-tab"),s.textContent="\u57FA\u7840\u8BBE\u7F6E",o=J(),r=V("sl-tab"),r.textContent="\u8DEF\u7531",n=J(),d=V("sl-tab"),d.textContent="\u5DE5\u5177\u5305",l=J(),u=V("sl-tab");for(let b=0;b<m.length;b+=1)m[b].c();g=J(),f&&f.c(),P(s,"slot","nav"),P(s,"panel","0"),P(s,"active",""),P(r,"slot","nav"),P(r,"panel","1"),P(d,"slot","nav"),P(d,"panel","2"),P(u,"slot","nav"),P(u,"class","tab-other svelte-1g5hwu"),P(u,"disabled",""),P(i,"class","sl-tab-group svelte-1g5hwu")},m(b,x){nt(b,e,x),O(e,i),O(i,s),O(i,o),O(i,r),O(i,n),O(i,d),O(i,l),O(i,u);for(let y=0;y<m.length;y+=1)m[y].m(u,null);O(i,g),f&&f.m(i,null),h=!0},p(b,[x]){if(x&10){p=b[3];let y;for(y=0;y<p.length;y+=1){const _=bo(b,p,y);m[y]?m[y].p(_,x):(m[y]=vo(_),m[y].c(),m[y].m(u,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=p.length}b[0]?f?(f.p(b,x),x&1&&Z(f,1)):(f=yo(b),f.c(),Z(f,1),f.m(i,null)):f&&(We(),pt(f,1,1,()=>{f=null}),Xe())},i(b){h||(Z(f),h=!0)},o(b){pt(f),h=!1},d(b){b&&ot(e),es(m,b),f&&f.d()}}}function va(t,e,i){let s,o=!1,r=[],n=[{loading:!1,disabled:!1,label:"\u4FDD\u5B58",time:1e3,variant:"primary",fn(){d(0,this.time),ipc("file.save","config.json",JSON.stringify(r.map(h=>h()),null,"	"))}},{loading:!1,disabled:!1,label:"\u542F\u52A8",time:1e3,variant:"success",fn(){d(1,this.time),ipc("server.start")}},{loading:!1,disabled:!1,label:"\u5173\u95ED",time:1e3,variant:"danger",fn(){d(2,this.time),ipc("server.exit")}}];qs(async()=>{const h=await ipc("file.data","config.json");console.log(h),h&&i(0,s=JSON.parse(h))});function d(h,p){i(1,o=!0),typeof h=="number"&&(i(3,n[h].loading=!0,n),i(3,n[h].disabled=!0,n)),Array(n.length).fill(0).map((f,b)=>b).filter(f=>f!=h).forEach(f=>{i(3,n[f].loading=!1,n),i(3,n[f].disabled=!0,n)}),p&&setTimeout(()=>{for(let f=0;f<n.length;f++)i(3,n[f].loading=!1,n),i(3,n[f].disabled=!1,n);i(1,o=!1)},p)}const l=h=>!o&&h.fn();function u(h){t.$$.not_equal(r[0],h)&&(r[0]=h,i(2,r))}function g(h){t.$$.not_equal(r[1],h)&&(r[1]=h,i(2,r))}return[s,o,r,n,l,u,g]}class ya extends Ge{constructor(e){super(),Ye(this,e,va,ba,je,{})}}var lr=Object.defineProperty,_a=Object.defineProperties,wa=Object.getOwnPropertyDescriptor,xa=Object.getOwnPropertyDescriptors,_o=Object.getOwnPropertySymbols,ka=Object.prototype.hasOwnProperty,Ca=Object.prototype.propertyIsEnumerable,us=(t,e)=>{if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")},wo=(t,e,i)=>e in t?lr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ae=(t,e)=>{for(var i in e||(e={}))ka.call(e,i)&&wo(t,i,e[i]);if(_o)for(var i of _o(e))Ca.call(e,i)&&wo(t,i,e[i]);return t},$i=(t,e)=>_a(t,xa(e)),a=(t,e,i,s)=>{for(var o=s>1?void 0:s?wa(e,i):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&lr(e,i,o),o},$a=function(t,e){this[0]=t,this[1]=e},Sa=t=>{var e=t[us("asyncIterator")],i=!1,s,o={};return e==null?(e=t[us("iterator")](),s=r=>o[r]=n=>e[r](n)):(e=e.call(t),s=r=>o[r]=n=>{if(i){if(i=!1,r==="throw")throw n;return n}return i=!0,{done:!1,value:new $a(new Promise(d=>{var l=e[r](n);if(!(l instanceof Object))throw TypeError("Object expected");d(l)}),1)}}),o[us("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=r=>{throw r},"return"in e&&s("return"),o},ii=new WeakMap,si=new WeakMap,oi=new WeakMap,ps=new WeakSet,Ri=new WeakMap,ne=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!s&&!n&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(d=>{i.formData.append(o,d.toString())}):i.formData.append(o,r.toString()))},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=ii.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ri.set(this.host,[])},this.handleInteraction=i=>{const s=Ri.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ae({form:i=>{const s=i.form;if(s){const r=i.getRootNode().getElementById(s);if(r)return r}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ri.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ri.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ii.has(this.form)?ii.get(this.form).add(this.host):ii.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),si.has(this.form)||(si.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),oi.has(this.form)||(oi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=ii.get(this.form);!t||(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),si.has(this.form)&&(this.form.reportValidity=si.get(this.form),si.delete(this.form)),oi.has(this.form)&&(this.form.checkValidity=oi.get(this.form),oi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ps.add(t):ps.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(ps.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},is=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),za=Object.freeze($i(ae({},is),{valid:!1,valueMissing:!0})),Aa=Object.freeze($i(ae({},is),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis,js=ji.ShadowRoot&&(ji.ShadyCSS===void 0||ji.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ks=Symbol(),xo=new WeakMap;class cr{constructor(e,i,s){if(this._$cssResult$=!0,s!==Ks)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(js&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=xo.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&xo.set(i,e))}return e}toString(){return this.cssText}}const Ea=t=>new cr(typeof t=="string"?t:t+"",void 0,Ks),I=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new cr(i,t,Ks)},Ta=(t,e)=>{if(js)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=ji.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},ko=js?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Ea(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:La,defineProperty:Oa,getOwnPropertyDescriptor:Ia,getOwnPropertyNames:Da,getOwnPropertySymbols:Pa,getPrototypeOf:Ma}=Object,he=globalThis,Co=he.trustedTypes,Ra=Co?Co.emptyScript:"",fs=he.reactiveElementPolyfillSupport,hi=(t,e)=>t,Ne={toAttribute(t,e){switch(e){case Boolean:t=t?Ra:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ws=(t,e)=>!La(t,e),$o={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:Ws};var Qo,Zo;(Qo=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Zo=he.litPropertyMetadata)!=null||(he.litPropertyMetadata=new WeakMap);class Re extends HTMLElement{static addInitializer(e){var i;this._$Ei(),((i=this.l)!=null?i:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=$o){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&Oa(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){var n;const{get:o,set:r}=(n=Ia(this.prototype,e))!=null?n:{get(){return this[i]},set(d){this[i]=d}};return{get(){return o==null?void 0:o.call(this)},set(d){const l=o==null?void 0:o.call(this);r.call(this,d),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var i;return(i=this.elementProperties.get(e))!=null?i:$o}static _$Ei(){if(this.hasOwnProperty(hi("elementProperties")))return;const e=Ma(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hi("properties"))){const i=this.properties,s=[...Da(i),...Pa(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(ko(o))}else e!==void 0&&i.push(ko(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i,s;((i=this._$E_)!=null?i:this._$E_=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var i;(i=this._$E_)==null||i.delete(e)}_$ES(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var i;const e=(i=this.shadowRoot)!=null?i:this.attachShadow(this.constructor.shadowRootOptions);return Ta(e,this.constructor.elementStyles),e}connectedCallback(){var e,i;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$E_)==null||i.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(i=>{var s;return(s=i.hostDisconnected)==null?void 0:s.call(i)})}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$EO(e,i){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:Ne).toAttribute(i,s.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,i){var r;const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:Ne;this._$Em=o,this[o]=d.fromAttribute(i,n.type),this._$Em=null}}requestUpdate(e,i,s,o=!1,r){var n;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((n=s.hasChanged)!=null?n:Ws)(o?r:this[e],i))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,i,s){var o;this._$AL.has(e)||this._$AL.set(e,i),s.reflect===!0&&this._$Em!==e&&((o=this._$Ej)!=null?o:this._$Ej=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,d]of this._$Ep)this[n]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,d]of r)d.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],d)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$E_)==null||o.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(i)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$E_)==null||i.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EO(i,this[i]))),this._$ET()}updated(e){}firstUpdated(e){}}var Jo;Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[hi("elementProperties")]=new Map,Re[hi("finalized")]=new Map,fs==null||fs({ReactiveElement:Re}),((Jo=he.reactiveElementVersions)!=null?Jo:he.reactiveElementVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=globalThis,Xi=ui.trustedTypes,So=Xi?Xi.createPolicy("lit-html",{createHTML:t=>t}):void 0,dr="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,hr="?"+ce,Fa=`<${hr}>`,ze=document,wi=()=>ze.createComment(""),xi=t=>t===null||typeof t!="object"&&typeof t!="function",ur=Array.isArray,Va=t=>ur(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ms=`[ 	
\f\r]`,ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zo=/-->/g,Ao=/>/g,ve=RegExp(`>|${ms}(?:([^\\s"'>=/]+)(${ms}*=${ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Eo=/'/g,To=/"/g,pr=/^(?:script|style|textarea|title)$/i,Ba=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),k=Ba(1),Tt=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),Lo=new WeakMap,we=ze.createTreeWalker(ze,129);function fr(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return So!==void 0?So.createHTML(e):e}const Ua=(t,e)=>{const i=t.length-1,s=[];let o,r=e===2?"<svg>":"",n=ri;for(let d=0;d<i;d++){const l=t[d];let u,g,h=-1,p=0;for(;p<l.length&&(n.lastIndex=p,g=n.exec(l),g!==null);)p=n.lastIndex,n===ri?g[1]==="!--"?n=zo:g[1]!==void 0?n=Ao:g[2]!==void 0?(pr.test(g[2])&&(o=RegExp("</"+g[2],"g")),n=ve):g[3]!==void 0&&(n=ve):n===ve?g[0]===">"?(n=o!=null?o:ri,h=-1):g[1]===void 0?h=-2:(h=n.lastIndex-g[2].length,u=g[1],n=g[3]===void 0?ve:g[3]==='"'?To:Eo):n===To||n===Eo?n=ve:n===zo||n===Ao?n=ri:(n=ve,o=void 0);const m=n===ve&&t[d+1].startsWith("/>")?" ":"";r+=n===ri?l+Fa:h>=0?(s.push(u),l.slice(0,h)+dr+l.slice(h)+ce+m):l+ce+(h===-2?d:m)}return[fr(t,r+(t[i]||"<?>")+(e===2?"</svg>":"")),s]};class ki{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let r=0,n=0;const d=e.length-1,l=this.parts,[u,g]=Ua(e,i);if(this.el=ki.createElement(u,s),we.currentNode=this.el.content,i===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=we.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(dr)){const p=g[n++],m=o.getAttribute(h).split(ce),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?Ha:f[1]==="?"?qa:f[1]==="@"?ja:ss}),o.removeAttribute(h)}else h.startsWith(ce)&&(l.push({type:6,index:r}),o.removeAttribute(h));if(pr.test(o.tagName)){const h=o.textContent.split(ce),p=h.length-1;if(p>0){o.textContent=Xi?Xi.emptyScript:"";for(let m=0;m<p;m++)o.append(h[m],wi()),we.nextNode(),l.push({type:2,index:++r});o.append(h[p],wi())}}}else if(o.nodeType===8)if(o.data===hr)l.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(ce,h+1))!==-1;)l.push({type:7,index:r}),h+=ce.length-1}r++}}static createElement(e,i){const s=ze.createElement("template");return s.innerHTML=e,s}}function He(t,e,i=t,s){var n,d,l;if(e===Tt)return e;let o=s!==void 0?(n=i._$Co)==null?void 0:n[s]:i._$Cl;const r=xi(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((d=o==null?void 0:o._$AO)==null||d.call(o,!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,i,s)),s!==void 0?((l=i._$Co)!=null?l:i._$Co=[])[s]=o:i._$Cl=o),o!==void 0&&(e=He(t,o._$AS(t,e.values),o,s)),e}class Na{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var u;const{el:{content:i},parts:s}=this._$AD,o=((u=e==null?void 0:e.creationScope)!=null?u:ze).importNode(i,!0);we.currentNode=o;let r=we.nextNode(),n=0,d=0,l=s[0];for(;l!==void 0;){if(n===l.index){let g;l.type===2?g=new Si(r,r.nextSibling,this,e):l.type===1?g=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(g=new Ka(r,this,e)),this._$AV.push(g),l=s[++d]}n!==(l==null?void 0:l.index)&&(r=we.nextNode(),n++)}return we.currentNode=ze,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class Si{get _$AU(){var e,i;return(i=(e=this._$AM)==null?void 0:e._$AU)!=null?i:this._$Cv}constructor(e,i,s,o){var r;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=(r=o==null?void 0:o.isConnected)!=null?r:!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=He(this,e,i),xi(e)?e===tt||e==null||e===""?(this._$AH!==tt&&this._$AR(),this._$AH=tt):e!==this._$AH&&e!==Tt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Va(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==tt&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.$(ze.createTextNode(e)),this._$AH=e}g(e){var r;const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ki.createElement(fr(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(i);else{const n=new Na(o,this),d=n.u(this.options);n.p(i),this.$(d),this._$AH=n}}_$AC(e){let i=Lo.get(e.strings);return i===void 0&&Lo.set(e.strings,i=new ki(e)),i}T(e){ur(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const r of e)o===i.length?i.push(s=new Si(this.k(wi()),this.k(wi()),this,this.options)):s=i[o],s._$AI(r),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class ss{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,r){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=tt}_$AI(e,i=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=He(this,e,i,0),n=!xi(e)||e!==this._$AH&&e!==Tt,n&&(this._$AH=e);else{const d=e;let l,u;for(e=r[0],l=0;l<r.length-1;l++)u=He(this,d[s+l],i,l),u===Tt&&(u=this._$AH[l]),n||(n=!xi(u)||u!==this._$AH[l]),u===tt?e=tt:e!==tt&&(e+=(u!=null?u:"")+r[l+1]),this._$AH[l]=u}n&&!o&&this.O(e)}O(e){e===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Ha extends ss{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===tt?void 0:e}}class qa extends ss{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==tt)}}class ja extends ss{constructor(e,i,s,o,r){super(e,i,s,o,r),this.type=5}_$AI(e,i=this){var n;if((e=(n=He(this,e,i,0))!=null?n:tt)===Tt)return;const s=this._$AH,o=e===tt&&s!==tt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==tt&&(s===tt||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)==null?void 0:i.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class Ka{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){He(this,e)}}const gs=ui.litHtmlPolyfillSupport;var tr;gs==null||gs(ki,Si),((tr=ui.litHtmlVersions)!=null?tr:ui.litHtmlVersions=[]).push("3.1.0");const Wa=(t,e,i)=>{var r,n;const s=(r=i==null?void 0:i.renderBefore)!=null?r:e;let o=s._$litPart$;if(o===void 0){const d=(n=i==null?void 0:i.renderBefore)!=null?n:null;s._$litPart$=o=new Si(e.insertBefore(wi(),d),d,void 0,i!=null?i:{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pi extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,s;const e=super.createRenderRoot();return(s=(i=this.renderOptions).renderBefore)!=null||(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wa(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Tt}}var er;pi._$litElement$=!0,pi.finalized=!0,(er=globalThis.litElementHydrateSupport)==null||er.call(globalThis,{LitElement:pi});const bs=globalThis.litElementPolyfillSupport;bs==null||bs({LitElement:pi});var ir;((ir=globalThis.litElementVersions)!=null?ir:globalThis.litElementVersions=[]).push("4.0.2");var D=I`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Xa=I`
  ${D}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ya={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:Ws},Ga=(t=Ya,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),s==="accessor"){const{name:n}=i;return{set(d){const l=e.get.call(this);e.set.call(this,d),this.requestUpdate(n,l,t)},init(d){return d!==void 0&&this.C(n,void 0,t),d}}}if(s==="setter"){const{name:n}=i;return function(d){const l=this[n];e.call(this,d),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+s)};function c(t){return(e,i)=>typeof i=="object"?Ga(t,e,i):((s,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t){return c({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mr(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t,e){return(i,s,o)=>{const r=n=>{var d,l;return(l=(d=n.renderRoot)==null?void 0:d.querySelector(t))!=null?l:null};if(e){const{get:n,set:d}=typeof s=="object"?i:o!=null?o:(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return Ls(i,s,{get(){let l=n.call(this);return l===void 0&&(l=r(this),(l!==null||this.hasUpdated)&&d.call(this,l)),l}})}return Ls(i,s,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qa(t){return(e,i)=>Ls(e,i,{async get(){var s,o;return await this.updateComplete,(o=(s=this.renderRoot)==null?void 0:s.querySelector(t))!=null?o:null}})}var T=class extends pi{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,ae({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){customElements.define(t,class extends e{},i);return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(r=" v"+s.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}};T.version="2.12.0";T.dependencies={};a([c()],T.prototype,"dir",2);a([c()],T.prototype,"lang",2);var Xs=class extends T{render(){return k` <slot></slot> `}};Xs.styles=Xa;Xs.define("sl-visually-hidden");var Za=I`
  ${D}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ja=I`
  ${D}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const ue=Math.min,Et=Math.max,Yi=Math.round,Fi=Math.floor,pe=t=>({x:t,y:t}),tn={left:"right",right:"left",bottom:"top",top:"bottom"},en={start:"end",end:"start"};function Os(t,e,i){return Et(t,ue(e,i))}function Qe(t,e){return typeof t=="function"?t(e):t}function fe(t){return t.split("-")[0]}function Ze(t){return t.split("-")[1]}function gr(t){return t==="x"?"y":"x"}function Ys(t){return t==="y"?"height":"width"}function zi(t){return["top","bottom"].includes(fe(t))?"y":"x"}function Gs(t){return gr(zi(t))}function sn(t,e,i){i===void 0&&(i=!1);const s=Ze(t),o=Gs(t),r=Ys(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=Gi(n)),[n,Gi(n)]}function on(t){const e=Gi(t);return[Is(t),e,Is(e)]}function Is(t){return t.replace(/start|end/g,e=>en[e])}function rn(t,e,i){const s=["left","right"],o=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?o:s:e?s:o;case"left":case"right":return e?r:n;default:return[]}}function an(t,e,i,s){const o=Ze(t);let r=rn(fe(t),i==="start",s);return o&&(r=r.map(n=>n+"-"+o),e&&(r=r.concat(r.map(Is)))),r}function Gi(t){return t.replace(/left|right|bottom|top/g,e=>tn[e])}function nn(t){return{top:0,right:0,bottom:0,left:0,...t}}function br(t){return typeof t!="number"?nn(t):{top:t,right:t,bottom:t,left:t}}function Qi(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Oo(t,e,i){let{reference:s,floating:o}=t;const r=zi(e),n=Gs(e),d=Ys(n),l=fe(e),u=r==="y",g=s.x+s.width/2-o.width/2,h=s.y+s.height/2-o.height/2,p=s[d]/2-o[d]/2;let m;switch(l){case"top":m={x:g,y:s.y-o.height};break;case"bottom":m={x:g,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:h};break;case"left":m={x:s.x-o.width,y:h};break;default:m={x:s.x,y:s.y}}switch(Ze(e)){case"start":m[n]-=p*(i&&u?-1:1);break;case"end":m[n]+=p*(i&&u?-1:1);break}return m}const ln=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:r=[],platform:n}=i,d=r.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:g,y:h}=Oo(u,s,l),p=s,m={},f=0;for(let b=0;b<d.length;b++){const{name:x,fn:y}=d[b],{x:_,y:$,data:v,reset:w}=await y({x:g,y:h,initialPlacement:s,placement:p,strategy:o,middlewareData:m,rects:u,platform:n,elements:{reference:t,floating:e}});if(g=_!=null?_:g,h=$!=null?$:h,m={...m,[x]:{...m[x],...v}},w&&f<=50){f++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(u=w.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):w.rects),{x:g,y:h}=Oo(u,p,l)),b=-1;continue}}return{x:g,y:h,placement:p,strategy:o,middlewareData:m}};async function Qs(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:r,rects:n,elements:d,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:g="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Qe(e,t),f=br(m),x=d[p?h==="floating"?"reference":"floating":h],y=Qi(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(x)))==null||i?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(d.floating)),boundary:u,rootBoundary:g,strategy:l})),_=h==="floating"?{...n.floating,x:s,y:o}:n.reference,$=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d.floating)),v=await(r.isElement==null?void 0:r.isElement($))?await(r.getScale==null?void 0:r.getScale($))||{x:1,y:1}:{x:1,y:1},w=Qi(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:$,strategy:l}):_);return{top:(y.top-w.top+f.top)/v.y,bottom:(w.bottom-y.bottom+f.bottom)/v.y,left:(y.left-w.left+f.left)/v.x,right:(w.right-y.right+f.right)/v.x}}const cn=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:r,platform:n,elements:d,middlewareData:l}=e,{element:u,padding:g=0}=Qe(t,e)||{};if(u==null)return{};const h=br(g),p={x:i,y:s},m=Gs(o),f=Ys(m),b=await n.getDimensions(u),x=m==="y",y=x?"top":"left",_=x?"bottom":"right",$=x?"clientHeight":"clientWidth",v=r.reference[f]+r.reference[m]-p[m]-r.floating[f],w=p[m]-r.reference[m],E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let F=E?E[$]:0;(!F||!await(n.isElement==null?void 0:n.isElement(E)))&&(F=d.floating[$]||r.floating[f]);const B=v/2-w/2,z=F/2-b[f]/2-1,C=ue(h[y],z),N=ue(h[_],z),Q=C,zt=F-b[f]-N,ut=F/2-b[f]/2+B,kt=Os(Q,ut,zt),Bt=!l.arrow&&Ze(o)!=null&&ut!=kt&&r.reference[f]/2-(ut<Q?C:N)-b[f]/2<0,ie=Bt?ut<Q?ut-Q:ut-zt:0;return{[m]:p[m]+ie,data:{[m]:kt,centerOffset:ut-kt-ie,...Bt&&{alignmentOffset:ie}},reset:Bt}}}),dn=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:r,rects:n,initialPlacement:d,platform:l,elements:u}=e,{mainAxis:g=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:b=!0,...x}=Qe(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const y=fe(o),_=fe(d)===d,$=await(l.isRTL==null?void 0:l.isRTL(u.floating)),v=p||(_||!b?[Gi(d)]:on(d));!p&&f!=="none"&&v.push(...an(d,b,f,$));const w=[d,...v],E=await Qs(e,x),F=[];let B=((s=r.flip)==null?void 0:s.overflows)||[];if(g&&F.push(E[y]),h){const Q=sn(o,n,$);F.push(E[Q[0]],E[Q[1]])}if(B=[...B,{placement:o,overflows:F}],!F.every(Q=>Q<=0)){var z,C;const Q=(((z=r.flip)==null?void 0:z.index)||0)+1,zt=w[Q];if(zt)return{data:{index:Q,overflows:B},reset:{placement:zt}};let ut=(C=B.filter(kt=>kt.overflows[0]<=0).sort((kt,Bt)=>kt.overflows[1]-Bt.overflows[1])[0])==null?void 0:C.placement;if(!ut)switch(m){case"bestFit":{var N;const kt=(N=B.map(Bt=>[Bt.placement,Bt.overflows.filter(ie=>ie>0).reduce((ie,jr)=>ie+jr,0)]).sort((Bt,ie)=>Bt[1]-ie[1])[0])==null?void 0:N[0];kt&&(ut=kt);break}case"initialPlacement":ut=d;break}if(o!==ut)return{reset:{placement:ut}}}return{}}}};async function hn(t,e){const{placement:i,platform:s,elements:o}=t,r=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=fe(i),d=Ze(i),l=zi(i)==="y",u=["left","top"].includes(n)?-1:1,g=r&&l?-1:1,h=Qe(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:f}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return d&&typeof f=="number"&&(m=d==="end"?f*-1:f),l?{x:m*g,y:p*u}:{x:p*u,y:m*g}}const un=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:r,placement:n,middlewareData:d}=e,l=await hn(e,t);return n===((i=d.offset)==null?void 0:i.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:n}}}}},pn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:d={fn:x=>{let{x:y,y:_}=x;return{x:y,y:_}}},...l}=Qe(t,e),u={x:i,y:s},g=await Qs(e,l),h=zi(fe(o)),p=gr(h);let m=u[p],f=u[h];if(r){const x=p==="y"?"top":"left",y=p==="y"?"bottom":"right",_=m+g[x],$=m-g[y];m=Os(_,m,$)}if(n){const x=h==="y"?"top":"left",y=h==="y"?"bottom":"right",_=f+g[x],$=f-g[y];f=Os(_,f,$)}const b=d.fn({...e,[p]:m,[h]:f});return{...b,data:{x:b.x-i,y:b.y-s}}}}},Io=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:s,platform:o,elements:r}=e,{apply:n=()=>{},...d}=Qe(t,e),l=await Qs(e,d),u=fe(i),g=Ze(i),h=zi(i)==="y",{width:p,height:m}=s.floating;let f,b;u==="top"||u==="bottom"?(f=u,b=g===(await(o.isRTL==null?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(b=u,f=g==="end"?"top":"bottom");const x=m-l[f],y=p-l[b],_=!e.middlewareData.shift;let $=x,v=y;if(h){const E=p-l.left-l.right;v=g||_?ue(y,E):E}else{const E=m-l.top-l.bottom;$=g||_?ue(x,E):E}if(_&&!g){const E=Et(l.left,0),F=Et(l.right,0),B=Et(l.top,0),z=Et(l.bottom,0);h?v=p-2*(E!==0||F!==0?E+F:Et(l.left,l.right)):$=m-2*(B!==0||z!==0?B+z:Et(l.top,l.bottom))}await n({...e,availableWidth:v,availableHeight:$});const w=await o.getDimensions(r.floating);return p!==w.width||m!==w.height?{reset:{rects:!0}}:{}}}};function me(t){return vr(t)?(t.nodeName||"").toLowerCase():"#document"}function Lt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function le(t){var e;return(e=(vr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vr(t){return t instanceof Node||t instanceof Lt(t).Node}function re(t){return t instanceof Element||t instanceof Lt(t).Element}function Yt(t){return t instanceof HTMLElement||t instanceof Lt(t).HTMLElement}function Do(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Lt(t).ShadowRoot}function Ai(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=Rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(o)}function fn(t){return["table","td","th"].includes(me(t))}function Zs(t){const e=Js(),i=Rt(t);return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function mn(t){let e=qe(t);for(;Yt(e)&&!os(e);){if(Zs(e))return e;e=qe(e)}return null}function Js(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function os(t){return["html","body","#document"].includes(me(t))}function Rt(t){return Lt(t).getComputedStyle(t)}function rs(t){return re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function qe(t){if(me(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Do(t)&&t.host||le(t);return Do(e)?e.host:e}function yr(t){const e=qe(t);return os(e)?t.ownerDocument?t.ownerDocument.body:t.body:Yt(e)&&Ai(e)?e:yr(e)}function Ci(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=yr(t),r=o===((s=t.ownerDocument)==null?void 0:s.body),n=Lt(o);return r?e.concat(n,n.visualViewport||[],Ai(o)?o:[],n.frameElement&&i?Ci(n.frameElement):[]):e.concat(o,Ci(o,[],i))}function _r(t){const e=Rt(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Yt(t),r=o?t.offsetWidth:i,n=o?t.offsetHeight:s,d=Yi(i)!==r||Yi(s)!==n;return d&&(i=r,s=n),{width:i,height:s,$:d}}function to(t){return re(t)?t:t.contextElement}function Ue(t){const e=to(t);if(!Yt(e))return pe(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:r}=_r(e);let n=(r?Yi(i.width):i.width)/s,d=(r?Yi(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!d||!Number.isFinite(d))&&(d=1),{x:n,y:d}}const gn=pe(0);function wr(t){const e=Lt(t);return!Js()||!e.visualViewport?gn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function bn(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==Lt(t)?!1:e}function Ae(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=to(t);let n=pe(1);e&&(s?re(s)&&(n=Ue(s)):n=Ue(t));const d=bn(r,i,s)?wr(r):pe(0);let l=(o.left+d.x)/n.x,u=(o.top+d.y)/n.y,g=o.width/n.x,h=o.height/n.y;if(r){const p=Lt(r),m=s&&re(s)?Lt(s):s;let f=p.frameElement;for(;f&&s&&m!==p;){const b=Ue(f),x=f.getBoundingClientRect(),y=Rt(f),_=x.left+(f.clientLeft+parseFloat(y.paddingLeft))*b.x,$=x.top+(f.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,u*=b.y,g*=b.x,h*=b.y,l+=_,u+=$,f=Lt(f).frameElement}}return Qi({width:g,height:h,x:l,y:u})}function vn(t){let{rect:e,offsetParent:i,strategy:s}=t;const o=Yt(i),r=le(i);if(i===r)return e;let n={scrollLeft:0,scrollTop:0},d=pe(1);const l=pe(0);if((o||!o&&s!=="fixed")&&((me(i)!=="body"||Ai(r))&&(n=rs(i)),Yt(i))){const u=Ae(i);d=Ue(i),l.x=u.x+i.clientLeft,l.y=u.y+i.clientTop}return{width:e.width*d.x,height:e.height*d.y,x:e.x*d.x-n.scrollLeft*d.x+l.x,y:e.y*d.y-n.scrollTop*d.y+l.y}}function yn(t){return Array.from(t.getClientRects())}function xr(t){return Ae(le(t)).left+rs(t).scrollLeft}function _n(t){const e=le(t),i=rs(t),s=t.ownerDocument.body,o=Et(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=Et(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+xr(t);const d=-i.scrollTop;return Rt(s).direction==="rtl"&&(n+=Et(e.clientWidth,s.clientWidth)-o),{width:o,height:r,x:n,y:d}}function wn(t,e){const i=Lt(t),s=le(t),o=i.visualViewport;let r=s.clientWidth,n=s.clientHeight,d=0,l=0;if(o){r=o.width,n=o.height;const u=Js();(!u||u&&e==="fixed")&&(d=o.offsetLeft,l=o.offsetTop)}return{width:r,height:n,x:d,y:l}}function xn(t,e){const i=Ae(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,r=Yt(t)?Ue(t):pe(1),n=t.clientWidth*r.x,d=t.clientHeight*r.y,l=o*r.x,u=s*r.y;return{width:n,height:d,x:l,y:u}}function Po(t,e,i){let s;if(e==="viewport")s=wn(t,i);else if(e==="document")s=_n(le(t));else if(re(e))s=xn(e,i);else{const o=wr(t);s={...e,x:e.x-o.x,y:e.y-o.y}}return Qi(s)}function kr(t,e){const i=qe(t);return i===e||!re(i)||os(i)?!1:Rt(i).position==="fixed"||kr(i,e)}function kn(t,e){const i=e.get(t);if(i)return i;let s=Ci(t,[],!1).filter(d=>re(d)&&me(d)!=="body"),o=null;const r=Rt(t).position==="fixed";let n=r?qe(t):t;for(;re(n)&&!os(n);){const d=Rt(n),l=Zs(n);!l&&d.position==="fixed"&&(o=null),(r?!l&&!o:!l&&d.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ai(n)&&!l&&kr(t,n))?s=s.filter(g=>g!==n):o=d,n=qe(n)}return e.set(t,s),s}function Cn(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[...i==="clippingAncestors"?kn(e,this._c):[].concat(i),s],d=n[0],l=n.reduce((u,g)=>{const h=Po(e,g,o);return u.top=Et(h.top,u.top),u.right=ue(h.right,u.right),u.bottom=ue(h.bottom,u.bottom),u.left=Et(h.left,u.left),u},Po(e,d,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function $n(t){return _r(t)}function Sn(t,e,i){const s=Yt(e),o=le(e),r=i==="fixed",n=Ae(t,!0,r,e);let d={scrollLeft:0,scrollTop:0};const l=pe(0);if(s||!s&&!r)if((me(e)!=="body"||Ai(o))&&(d=rs(e)),s){const u=Ae(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else o&&(l.x=xr(o));return{x:n.left+d.scrollLeft-l.x,y:n.top+d.scrollTop-l.y,width:n.width,height:n.height}}function Mo(t,e){return!Yt(t)||Rt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Cr(t,e){const i=Lt(t);if(!Yt(t))return i;let s=Mo(t,e);for(;s&&fn(s)&&Rt(s).position==="static";)s=Mo(s,e);return s&&(me(s)==="html"||me(s)==="body"&&Rt(s).position==="static"&&!Zs(s))?i:s||mn(t)||i}const zn=async function(t){let{reference:e,floating:i,strategy:s}=t;const o=this.getOffsetParent||Cr,r=this.getDimensions;return{reference:Sn(e,await o(i),s),floating:{x:0,y:0,...await r(i)}}};function An(t){return Rt(t).direction==="rtl"}const Ki={convertOffsetParentRelativeRectToViewportRelativeRect:vn,getDocumentElement:le,getClippingRect:Cn,getOffsetParent:Cr,getElementRects:zn,getClientRects:yn,getDimensions:$n,getScale:Ue,isElement:re,isRTL:An};function En(t,e){let i=null,s;const o=le(t);function r(){clearTimeout(s),i&&i.disconnect(),i=null}function n(d,l){d===void 0&&(d=!1),l===void 0&&(l=1),r();const{left:u,top:g,width:h,height:p}=t.getBoundingClientRect();if(d||e(),!h||!p)return;const m=Fi(g),f=Fi(o.clientWidth-(u+h)),b=Fi(o.clientHeight-(g+p)),x=Fi(u),_={rootMargin:-m+"px "+-f+"px "+-b+"px "+-x+"px",threshold:Et(0,ue(1,l))||1};let $=!0;function v(w){const E=w[0].intersectionRatio;if(E!==l){if(!$)return n();E?n(!1,E):s=setTimeout(()=>{n(!1,1e-7)},100)}$=!1}try{i=new IntersectionObserver(v,{..._,root:o.ownerDocument})}catch{i=new IntersectionObserver(v,_)}i.observe(t)}return n(!0),r}function Tn(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,u=to(t),g=o||r?[...u?Ci(u):[],...Ci(e)]:[];g.forEach(y=>{o&&y.addEventListener("scroll",i,{passive:!0}),r&&y.addEventListener("resize",i)});const h=u&&d?En(u,i):null;let p=-1,m=null;n&&(m=new ResizeObserver(y=>{let[_]=y;_&&_.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{m&&m.observe(e)})),i()}),u&&!l&&m.observe(u),m.observe(e));let f,b=l?Ae(t):null;l&&x();function x(){const y=Ae(t);b&&(y.x!==b.x||y.y!==b.y||y.width!==b.width||y.height!==b.height)&&i(),b=y,f=requestAnimationFrame(x)}return i(),()=>{g.forEach(y=>{o&&y.removeEventListener("scroll",i),r&&y.removeEventListener("resize",i)}),h&&h(),m&&m.disconnect(),m=null,l&&cancelAnimationFrame(f)}}const Ln=(t,e,i)=>{const s=new Map,o={platform:Ki,...i},r={...o.platform,_c:s};return ln(t,e,{...o,platform:r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ei=t=>(...e)=>({_$litDirective$:t,values:e});class Ti{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=Ei(class extends Ti{constructor(t){var e;if(super(t),t.type!==Xt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,o;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((s=this.st)!=null&&s.has(r))&&this.it.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.it)r in e||(i.remove(r),this.it.delete(r));for(const r in e){const n=!!e[r];n===this.it.has(r)||((o=this.st)==null?void 0:o.has(r))||(n?(i.add(r),this.it.add(r)):(i.remove(r),this.it.delete(r)))}return Tt}});function On(t){return In(t)}function vs(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function In(t){for(let e=t;e;e=vs(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=vs(t);e;e=vs(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||e.tagName==="BODY"))return e}return null}function Dn(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var Y=class extends T{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Dn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||(this.cleanup=Tn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[un({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Io({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(dn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(pn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Io({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(cn({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>Ki.getOffsetParent(i,On):Ki.getOffsetParent;Ln(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:$i(ae({},Ki),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const l=o.arrow.x,u=o.arrow.y;let g="",h="",p="",m="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=n?f:"",m=n?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=n?"":f,m=n?f:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",g=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof l=="number"?`${l}px`:"",g=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:g,right:h,bottom:p,left:m,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return k`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${M({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?k`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Y.styles=Ja;a([A(".popup")],Y.prototype,"popup",2);a([A(".popup__arrow")],Y.prototype,"arrowEl",2);a([c()],Y.prototype,"anchor",2);a([c({type:Boolean,reflect:!0})],Y.prototype,"active",2);a([c({reflect:!0})],Y.prototype,"placement",2);a([c({reflect:!0})],Y.prototype,"strategy",2);a([c({type:Number})],Y.prototype,"distance",2);a([c({type:Number})],Y.prototype,"skidding",2);a([c({type:Boolean})],Y.prototype,"arrow",2);a([c({attribute:"arrow-placement"})],Y.prototype,"arrowPlacement",2);a([c({attribute:"arrow-padding",type:Number})],Y.prototype,"arrowPadding",2);a([c({type:Boolean})],Y.prototype,"flip",2);a([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],Y.prototype,"flipFallbackPlacements",2);a([c({attribute:"flip-fallback-strategy"})],Y.prototype,"flipFallbackStrategy",2);a([c({type:Object})],Y.prototype,"flipBoundary",2);a([c({attribute:"flip-padding",type:Number})],Y.prototype,"flipPadding",2);a([c({type:Boolean})],Y.prototype,"shift",2);a([c({type:Object})],Y.prototype,"shiftBoundary",2);a([c({attribute:"shift-padding",type:Number})],Y.prototype,"shiftPadding",2);a([c({attribute:"auto-size"})],Y.prototype,"autoSize",2);a([c()],Y.prototype,"sync",2);a([c({type:Object})],Y.prototype,"autoSizeBoundary",2);a([c({attribute:"auto-size-padding",type:Number})],Y.prototype,"autoSizePadding",2);var $r=new Map,Pn=new WeakMap;function Mn(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function Ro(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function W(t,e){$r.set(t,Mn(e))}function et(t,e,i){const s=Pn.get(t);if(s!=null&&s[e])return Ro(s[e],i.dir);const o=$r.get(e);return o?Ro(o,i.dir):{keyframes:[],options:{duration:0}}}function Ct(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function rt(t,e,i){return new Promise(s=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,$i(ae({},i),{duration:eo()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function Fo(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function eo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ct(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{const s=requestAnimationFrame(i);e.addEventListener("cancel",()=>s,{once:!0}),e.addEventListener("finish",()=>s,{once:!0}),e.cancel()})))}function Zi(t,e){return t.map(i=>$i(ae({},i),{height:i.height==="auto"?`${e}px`:i.height}))}const Ds=new Set,Rn=new MutationObserver(Er),Fe=new Map;let Sr=document.documentElement.dir||"ltr",zr=document.documentElement.lang||navigator.language,ye;Rn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ar(...t){t.map(e=>{const i=e.$code.toLowerCase();Fe.has(i)?Fe.set(i,Object.assign(Object.assign({},Fe.get(i)),e)):Fe.set(i,e),ye||(ye=e)}),Er()}function Er(){Sr=document.documentElement.dir||"ltr",zr=document.documentElement.lang||navigator.language,[...Ds.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}class Fn{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ds.add(this.host)}hostDisconnected(){Ds.delete(this.host)}dir(){return`${this.host.dir||Sr}`.toLowerCase()}lang(){return`${this.host.lang||zr}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),r=o==null?void 0:o.language.toLowerCase(),n=(s=(i=o==null?void 0:o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",d=Fe.get(`${r}-${n}`),l=Fe.get(r);return{locale:o,language:r,region:n,primary:d,secondary:l}}exists(e,i){var s;const{primary:o,secondary:r}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||r&&r[e]||i.includeFallback&&ye&&ye[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let r;if(s&&s[e])r=s[e];else if(o&&o[e])r=o[e];else if(ye&&ye[e])r=ye[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...i):r}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}}var Tr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Ar(Tr);var Vn=Tr,j=class extends Fn{};Ar(Vn);function S(t,e){const i=ae({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:r}=s,n=Array.isArray(t)?t:[t];s.update=function(d){n.forEach(l=>{const u=l;if(d.has(u)){const g=d.get(u),h=this[u];g!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](g,h)}}),r.call(this,d)}}}var ft=class extends T{constructor(){super(),this.localize=new j(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&!this.disabled&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Fo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Fo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await ct(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=et(this,"tooltip.show",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await ct(this.body);const{keyframes:t,options:e}=et(this,"tooltip.hide",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ct(this,"sl-after-hide")}render(){return k`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${M({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};ft.styles=Za;ft.dependencies={"sl-popup":Y};a([A("slot:not([name])")],ft.prototype,"defaultSlot",2);a([A(".tooltip__body")],ft.prototype,"body",2);a([A("sl-popup")],ft.prototype,"popup",2);a([c()],ft.prototype,"content",2);a([c()],ft.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);a([c({type:Number})],ft.prototype,"distance",2);a([c({type:Boolean,reflect:!0})],ft.prototype,"open",2);a([c({type:Number})],ft.prototype,"skidding",2);a([c()],ft.prototype,"trigger",2);a([c({type:Boolean})],ft.prototype,"hoist",2);a([S("open",{waitUntilFirstUpdate:!0})],ft.prototype,"handleOpenChange",1);a([S(["content","distance","hoist","placement","skidding"])],ft.prototype,"handleOptionsChange",1);a([S("disabled")],ft.prototype,"handleDisabledChange",1);W("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});W("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});ft.define("sl-tooltip");var Bn=I`
  ${D}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Un=I`
  ${D}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Nn=I`
  ${D}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Le=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(r,n,d){var l;const u=s.getPropertyOptions(t),g=typeof u.attribute=="string"?u.attribute:t;if(r===g){const h=u.converter||Ne,m=(typeof h=="function"?h:(l=h==null?void 0:h.fromAttribute)!=null?l:Ne.fromAttribute)(d,u.type);this[t]!==m&&(this[i]=m)}o.call(this,r,n,d)}},Hn=I`
  ${D}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ps="";function Ms(t){Ps=t}function qn(t=""){if(!Ps){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)Ms(i.getAttribute("data-shoelace"));else{const s=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";s&&(o=s.getAttribute("src")),Ms(o.split("/").slice(0,-1).join("/"))}}return Ps.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var jn={name:"default",resolver:t=>qn(`assets/icons/${t}.svg`)},Kn=jn,Vo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Wn={name:"system",resolver:t=>t in Vo?`data:image/svg+xml,${encodeURIComponent(Vo[t])}`:""},Xn=Wn,Yn=[Kn,Xn],Rs=[];function Gn(t){Rs.push(t)}function Qn(t){Rs=Rs.filter(e=>e!==t)}function Bo(t){return Yn.find(e=>e.name===t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,Lr=t=>t.strings===void 0,Jn={},tl=(t,e=Jn)=>t._$AH=e;var ai=Symbol(),Vi=Symbol(),ys,_s=new Map,G=class extends T{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e!=null&&e.spriteSheet)return k`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?ai:Vi}catch{return Vi}try{const o=document.createElement("div");o.innerHTML=await s.text();const r=o.firstElementChild;if(((i=r==null?void 0:r.tagName)==null?void 0:i.toLowerCase())!=="svg")return ai;ys||(ys=new DOMParser);const d=ys.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):ai}catch{return ai}}connectedCallback(){super.connectedCallback(),Gn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qn(this)}getIconSource(){const t=Bo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Bo(this.library):void 0;if(!e){this.svg=null;return}let o=_s.get(e);if(o||(o=this.resolveIcon(e,s),_s.set(e,o)),!this.initialRender)return;const r=await o;if(r===Vi&&_s.delete(e),e===this.getIconSource().url){if(Zn(r)){this.svg=r;return}switch(r){case Vi:case ai:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=s==null?void 0:s.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};G.styles=Hn;a([R()],G.prototype,"svg",2);a([c({reflect:!0})],G.prototype,"name",2);a([c()],G.prototype,"src",2);a([c()],G.prototype,"label",2);a([c({reflect:!0})],G.prototype,"library",2);a([S("label")],G.prototype,"handleLabelChange",1);a([S(["name","src","library"])],G.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=t=>t!=null?t:tt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=Ei(class extends Ti{constructor(t){if(super(t),t.type!==Xt.PROPERTY&&t.type!==Xt.ATTRIBUTE&&t.type!==Xt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Lr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Tt||e===tt)return e;const i=t.element,s=t.name;if(t.type===Xt.PROPERTY){if(e===i[s])return Tt}else if(t.type===Xt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return Tt}else if(t.type===Xt.ATTRIBUTE&&i.getAttribute(s)===e+"")return Tt;return tl(t),e}});var mt=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return k`
      <label
        part="base"
        class=${M({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${L(this.value)}
          .indeterminate=${Ee(this.indeterminate)}
          .checked=${Ee(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?k`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?k`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};mt.styles=Nn;mt.dependencies={"sl-icon":G};a([A('input[type="checkbox"]')],mt.prototype,"input",2);a([R()],mt.prototype,"hasFocus",2);a([c()],mt.prototype,"title",2);a([c()],mt.prototype,"name",2);a([c()],mt.prototype,"value",2);a([c({reflect:!0})],mt.prototype,"size",2);a([c({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],mt.prototype,"checked",2);a([c({type:Boolean,reflect:!0})],mt.prototype,"indeterminate",2);a([Le("checked")],mt.prototype,"defaultChecked",2);a([c({reflect:!0})],mt.prototype,"form",2);a([c({type:Boolean,reflect:!0})],mt.prototype,"required",2);a([S("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);a([S(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],mt.prototype,"handleStateChange",1);var el=I`
  ${D}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,as=class extends T{constructor(){super(...arguments),this.localize=new j(this)}render(){return k`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};as.styles=el;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Uo(t,e,i){return t?e(t):i==null?void 0:i(t)}var at=class Fs extends T{constructor(){super(...arguments),this.localize=new j(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ct(this.childrenContainer);const{keyframes:e,options:i}=et(this,"tree-item.collapse",{dir:this.localize.dir()});await rt(this.childrenContainer,Zi(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&Fs.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ct(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=et(this,"tree-item.expand",{dir:this.localize.dir()});await rt(this.childrenContainer,Zi(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>Fs.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return k`
      <div
        part="base"
        class="${M({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${M({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${Uo(this.loading,()=>k` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Uo(this.selectable,()=>k`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Ee(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};at.styles=Un;at.dependencies={"sl-checkbox":mt,"sl-icon":G,"sl-spinner":as};a([R()],at.prototype,"indeterminate",2);a([R()],at.prototype,"isLeaf",2);a([R()],at.prototype,"loading",2);a([R()],at.prototype,"selectable",2);a([c({type:Boolean,reflect:!0})],at.prototype,"expanded",2);a([c({type:Boolean,reflect:!0})],at.prototype,"selected",2);a([c({type:Boolean,reflect:!0})],at.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],at.prototype,"lazy",2);a([A("slot:not([name])")],at.prototype,"defaultSlot",2);a([A("slot[name=children]")],at.prototype,"childrenSlot",2);a([A(".tree-item__item")],at.prototype,"itemElement",2);a([A(".tree-item__children")],at.prototype,"childrenContainer",2);a([A(".tree-item__expand-button slot")],at.prototype,"expandButtonSlot",2);a([S("loading",{waitUntilFirstUpdate:!0})],at.prototype,"handleLoadingChange",1);a([S("disabled")],at.prototype,"handleDisabledChange",1);a([S("selected")],at.prototype,"handleSelectedChange",1);a([S("expanded",{waitUntilFirstUpdate:!0})],at.prototype,"handleExpandedChange",1);a([S("expanded",{waitUntilFirstUpdate:!0})],at.prototype,"handleExpandAnimation",1);a([S("lazy",{waitUntilFirstUpdate:!0})],at.prototype,"handleLazyChange",1);var fi=at;W("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});W("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function lt(t,e,i){const s=o=>Object.is(o,-0)?0:o;return t<e?s(e):t>i?s(i):s(t)}function No(t,e=!1){function i(r){const n=r.getChildrenItems({includeDisabled:!1});if(n.length){const d=n.every(u=>u.selected),l=n.every(u=>!u.selected&&!u.indeterminate);r.selected=d,r.indeterminate=!d&&!l}}function s(r){const n=r.parentElement;fi.isTreeItem(n)&&(i(n),s(n))}function o(r){for(const n of r.getChildrenItems())n.selected=e?r.selected||n.selected:!n.disabled&&r.selected,o(n);e&&i(r)}o(t),s(t)}var Oe=class extends T{constructor(){super(),this.selection="single",this.localize=new j(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`);i===null?t.append(this.getExpandButtonIcon(e)):i.hasAttribute("data-default")&&i.replaceWith(this.getExpandButtonIcon(e))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(fi.isTreeItem),s=[...e.removedNodes].filter(fi.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),fi.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),No(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const o of s)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t==null||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(l=>l.matches(":focus")),r=e[o],n=l=>{const u=e[lt(l,0,e.length-1)];this.focusItem(u)},d=l=>{r.expanded=l};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):d(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):d(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(o=>{var r;return(r=o==null?void 0:o.classList)==null?void 0:r.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>No(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var s;if(i.disabled)return!1;const o=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return k`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Oe.styles=Bn;a([A("slot:not([name])")],Oe.prototype,"defaultSlot",2);a([A("slot[name=expand-icon]")],Oe.prototype,"expandedIconSlot",2);a([A("slot[name=collapse-icon]")],Oe.prototype,"collapsedIconSlot",2);a([c()],Oe.prototype,"selection",2);a([S("selection")],Oe.prototype,"handleSelectionChange",1);Oe.define("sl-tree");fi.define("sl-tree-item");var il=I`
  ${D}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,sl=0,Li=class extends T{constructor(){super(...arguments),this.attrId=++sl,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return k`
      <slot
        part="base"
        class=${M({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Li.styles=il;a([c({reflect:!0})],Li.prototype,"name",2);a([c({type:Boolean,reflect:!0})],Li.prototype,"active",2);a([S("active")],Li.prototype,"handleActiveChange",1);Li.define("sl-tab-panel");var ol=I`
  ${D}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,rl=I`
  ${D}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=Symbol.for(""),al=t=>{if((t==null?void 0:t.r)===Or)return t==null?void 0:t._$litStatic$},Ji=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:Or}),Ho=new Map,nl=t=>(e,...i)=>{const s=i.length;let o,r;const n=[],d=[];let l,u=0,g=!1;for(;u<s;){for(l=e[u];u<s&&(r=i[u],(o=al(r))!==void 0);)l+=o+e[++u],g=!0;u!==s&&d.push(r),n.push(l),u++}if(u===s&&n.push(e[s]),g){const h=n.join("$$lit$$");(e=Ho.get(h))===void 0&&(n.raw=n,Ho.set(h,e=n)),i=d}return t(e,...i)},mi=nl(k);var ht=class extends T{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Ji`a`:Ji`button`;return mi`
      <${e}
        part="base"
        class=${M({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${L(t?void 0:this.disabled)}
        type=${L(t?void 0:"button")}
        href=${L(t?this.href:void 0)}
        target=${L(t?this.target:void 0)}
        download=${L(t?this.download:void 0)}
        rel=${L(t&&this.target?"noreferrer noopener":void 0)}
        role=${L(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${L(this.name)}
          library=${L(this.library)}
          src=${L(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ht.styles=rl;ht.dependencies={"sl-icon":G};a([A(".icon-button")],ht.prototype,"button",2);a([R()],ht.prototype,"hasFocus",2);a([c()],ht.prototype,"name",2);a([c()],ht.prototype,"library",2);a([c()],ht.prototype,"src",2);a([c()],ht.prototype,"href",2);a([c()],ht.prototype,"target",2);a([c()],ht.prototype,"download",2);a([c()],ht.prototype,"label",2);a([c({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);var ge=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return k`
      <span
        part="base"
        class=${M({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?k`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ge.styles=ol;ge.dependencies={"sl-icon-button":ht};a([c({reflect:!0})],ge.prototype,"variant",2);a([c({reflect:!0})],ge.prototype,"size",2);a([c({type:Boolean,reflect:!0})],ge.prototype,"pill",2);a([c({type:Boolean})],ge.prototype,"removable",2);ge.define("sl-tag");var Oi=I`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ll=I`
  ${D}
  ${Oi}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Ot=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function cl(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var K=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s){this.input.setRangeText(t,e,i,s),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return k`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${M({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${L(this.name)}
              .value=${Ee(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              rows=${L(this.rows)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              autocapitalize=${L(this.autocapitalize)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${L(this.spellcheck)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};K.styles=ll;a([A(".textarea__control")],K.prototype,"input",2);a([R()],K.prototype,"hasFocus",2);a([c()],K.prototype,"title",2);a([c()],K.prototype,"name",2);a([c()],K.prototype,"value",2);a([c({reflect:!0})],K.prototype,"size",2);a([c({type:Boolean,reflect:!0})],K.prototype,"filled",2);a([c()],K.prototype,"label",2);a([c({attribute:"help-text"})],K.prototype,"helpText",2);a([c()],K.prototype,"placeholder",2);a([c({type:Number})],K.prototype,"rows",2);a([c()],K.prototype,"resize",2);a([c({type:Boolean,reflect:!0})],K.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],K.prototype,"readonly",2);a([c({reflect:!0})],K.prototype,"form",2);a([c({type:Boolean,reflect:!0})],K.prototype,"required",2);a([c({type:Number})],K.prototype,"minlength",2);a([c({type:Number})],K.prototype,"maxlength",2);a([c()],K.prototype,"autocapitalize",2);a([c()],K.prototype,"autocorrect",2);a([c()],K.prototype,"autocomplete",2);a([c({type:Boolean})],K.prototype,"autofocus",2);a([c()],K.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],K.prototype,"spellcheck",2);a([c()],K.prototype,"inputmode",2);a([Le()],K.prototype,"defaultValue",2);a([S("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);a([S("rows",{waitUntilFirstUpdate:!0})],K.prototype,"handleRowsChange",1);a([S("value",{waitUntilFirstUpdate:!0})],K.prototype,"handleValueChange",1);K.define("sl-textarea");var dl=I`
  ${D}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,$t=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return k`
      <label
        part="base"
        class=${M({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${L(this.value)}
          .checked=${Ee(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};$t.styles=dl;a([A('input[type="checkbox"]')],$t.prototype,"input",2);a([R()],$t.prototype,"hasFocus",2);a([c()],$t.prototype,"title",2);a([c()],$t.prototype,"name",2);a([c()],$t.prototype,"value",2);a([c({reflect:!0})],$t.prototype,"size",2);a([c({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],$t.prototype,"checked",2);a([Le("checked")],$t.prototype,"defaultChecked",2);a([c({reflect:!0})],$t.prototype,"form",2);a([c({type:Boolean,reflect:!0})],$t.prototype,"required",2);a([S("checked",{waitUntilFirstUpdate:!0})],$t.prototype,"handleCheckedChange",1);a([S("disabled",{waitUntilFirstUpdate:!0})],$t.prototype,"handleDisabledChange",1);$t.define("sl-switch");var hl=I`
  ${D}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ul=0,Gt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.attrId=++ul,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,k`
      <div
        part="base"
        class=${M({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Gt.styles=hl;Gt.dependencies={"sl-icon-button":ht};a([A(".tab")],Gt.prototype,"tab",2);a([c({reflect:!0})],Gt.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],Gt.prototype,"active",2);a([c({type:Boolean})],Gt.prototype,"closable",2);a([c({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2);a([S("active")],Gt.prototype,"handleActiveChange",1);a([S("disabled")],Gt.prototype,"handleDisabledChange",1);Gt.define("sl-tab");var pl=I`
  ${D}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function fl(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Vs=new Set;function ml(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function gi(t){if(Vs.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=ml();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function bi(t){Vs.delete(t),Vs.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function Bs(t,e,i="vertical",s="smooth"){const o=fl(t,e),r=o.top+e.scrollTop,n=o.left+e.scrollLeft,d=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,u=e.scrollTop,g=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<d?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(r<u?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>g&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var It=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(i=>i.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>t.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(n=>n.matches(":focus")),r=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(o);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&t.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Bs(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=ae({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>s.active=s===this.activeTab),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Bs(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((d,l)=>({left:d.left+l.clientWidth,top:d.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return k`
      <div
        part="base"
        class=${M({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?k`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};It.styles=pl;It.dependencies={"sl-icon-button":ht};a([A(".tab-group")],It.prototype,"tabGroup",2);a([A(".tab-group__body")],It.prototype,"body",2);a([A(".tab-group__nav")],It.prototype,"nav",2);a([A(".tab-group__indicator")],It.prototype,"indicator",2);a([R()],It.prototype,"hasScrollControls",2);a([c()],It.prototype,"placement",2);a([c()],It.prototype,"activation",2);a([c({attribute:"no-scroll-controls",type:Boolean})],It.prototype,"noScrollControls",2);a([S("noScrollControls",{waitUntilFirstUpdate:!0})],It.prototype,"updateScrollControls",1);a([S("placement",{waitUntilFirstUpdate:!0})],It.prototype,"syncIndicator",1);It.define("sl-tab-group");var gl=I`
  ${D}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,io=class extends T{constructor(){super(...arguments),this.effect="none"}render(){return k`
      <div
        part="base"
        class=${M({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};io.styles=gl;a([c()],io.prototype,"effect",2);io.define("sl-skeleton");var bl=I`
  ${D}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function vi(t,e){function i(o){const r=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,d=r.left+n.scrollX,l=r.top+n.scrollY,u=o.pageX-d,g=o.pageY-l;e!=null&&e.onMove&&e.onMove(u,g)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var Dt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),vi(this,{onMove:(i,s)=>{let o=this.vertical?s:i;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let d;n.endsWith("%")?d=this.size*(parseFloat(n)/100):d=parseFloat(n),e&&!this.vertical&&(d=this.size-d),o>=d-this.snapThreshold&&o<=d+this.snapThreshold&&(o=d)}),this.position=lt(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=lt(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",k`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${L(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Dt.styles=bl;a([A(".divider")],Dt.prototype,"divider",2);a([c({type:Number,reflect:!0})],Dt.prototype,"position",2);a([c({attribute:"position-in-pixels",type:Number})],Dt.prototype,"positionInPixels",2);a([c({type:Boolean,reflect:!0})],Dt.prototype,"vertical",2);a([c({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);a([c()],Dt.prototype,"primary",2);a([c()],Dt.prototype,"snap",2);a([c({type:Number,attribute:"snap-threshold"})],Dt.prototype,"snapThreshold",2);a([S("position")],Dt.prototype,"handlePositionChange",1);a([S("positionInPixels")],Dt.prototype,"handlePositionInPixelsChange",1);a([S("vertical")],Dt.prototype,"handleVerticalChange",1);Dt.define("sl-split-panel");var vl=I`
  ${D}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir="important",yl=" !"+Ir,St=Ei(class extends Ti{constructor(t){var e;if(super(t),t.type!==Xt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(e)),this.render(e);for(const s of this.ut)e[s]==null&&(this.ut.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ut.add(s);const r=typeof o=="string"&&o.endsWith(yl);s.includes("-")||r?i.setProperty(s,r?o.slice(0,-11):o,r?Ir:""):i[s]=o}}return Tt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us extends Ti{constructor(e){if(super(e),this.et=tt,e.type!==Xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tt||e==null)return this.vt=void 0,this.et=e;if(e===Tt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;const i=[e];return i.raw=i,this.vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Us.directiveName="unsafeHTML",Us.resultType=1;const Wi=Ei(Us);var wt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:o}=this.rating.getBoundingClientRect(),r=e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return lt(r,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,k`
      <div
        part="base"
        class=${M({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(s=>i>s&&i<s+1?k`
                <span
                  class=${M({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${St({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${Wi(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${St({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${Wi(this.getSymbol(s+1))}
                  </div>
                </span>
              `:k`
              <span
                class=${M({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Wi(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};wt.styles=vl;wt.dependencies={"sl-icon":G};a([A(".rating")],wt.prototype,"rating",2);a([R()],wt.prototype,"hoverValue",2);a([R()],wt.prototype,"isHovering",2);a([c()],wt.prototype,"label",2);a([c({type:Number})],wt.prototype,"value",2);a([c({type:Number})],wt.prototype,"max",2);a([c({type:Number})],wt.prototype,"precision",2);a([c({type:Boolean,reflect:!0})],wt.prototype,"readonly",2);a([c({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);a([c()],wt.prototype,"getSymbol",2);a([mr({passive:!0})],wt.prototype,"handleTouchMove",1);a([S("hoverValue")],wt.prototype,"handleHoverValueChange",1);a([S("isHovering")],wt.prototype,"handleIsHoveringChange",1);wt.define("sl-rating");var _l=I`
  ${D}
  ${Oi}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,H=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new j(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>k`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let n=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=r+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=r-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>e.includes(s.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i,s;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(s=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?s:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return k`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Wi(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return k`<sl-tag>+${this.selectedOptions.length-e}</sl-tag>`;return k``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ct(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=et(this,"select.show",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.currentOption&&Bs(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ct(this);const{keyframes:t,options:e}=et(this,"select.hide",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ct(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return k`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${M({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?k`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?k`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=_l;H.dependencies={"sl-icon":G,"sl-popup":Y,"sl-tag":ge};a([A(".select")],H.prototype,"popup",2);a([A(".select__combobox")],H.prototype,"combobox",2);a([A(".select__display-input")],H.prototype,"displayInput",2);a([A(".select__value-input")],H.prototype,"valueInput",2);a([A(".select__listbox")],H.prototype,"listbox",2);a([R()],H.prototype,"hasFocus",2);a([R()],H.prototype,"displayLabel",2);a([R()],H.prototype,"currentOption",2);a([R()],H.prototype,"selectedOptions",2);a([c()],H.prototype,"name",2);a([c({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],H.prototype,"value",2);a([Le()],H.prototype,"defaultValue",2);a([c({reflect:!0})],H.prototype,"size",2);a([c()],H.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],H.prototype,"multiple",2);a([c({attribute:"max-options-visible",type:Number})],H.prototype,"maxOptionsVisible",2);a([c({type:Boolean,reflect:!0})],H.prototype,"disabled",2);a([c({type:Boolean})],H.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],H.prototype,"open",2);a([c({type:Boolean})],H.prototype,"hoist",2);a([c({type:Boolean,reflect:!0})],H.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],H.prototype,"pill",2);a([c()],H.prototype,"label",2);a([c({reflect:!0})],H.prototype,"placement",2);a([c({attribute:"help-text"})],H.prototype,"helpText",2);a([c({reflect:!0})],H.prototype,"form",2);a([c({type:Boolean,reflect:!0})],H.prototype,"required",2);a([c()],H.prototype,"getTag",2);a([S("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);a([S("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);a([S("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);W("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});H.define("sl-select");as.define("sl-spinner");var wl=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],be=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=wl.find(r=>Math.abs(i)<r.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;s==="minute"?r=Bi("second"):s==="hour"?r=Bi("minute"):s==="day"?r=Bi("hour"):r=Bi("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return k` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};a([R()],be.prototype,"isoTime",2);a([R()],be.prototype,"relativeTime",2);a([R()],be.prototype,"titleTime",2);a([c()],be.prototype,"date",2);a([c()],be.prototype,"format",2);a([c()],be.prototype,"numeric",2);a([c({type:Boolean})],be.prototype,"sync",2);function Bi(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}be.define("sl-relative-time");var xl=I`
  ${D}
  ${Oi}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,it=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new j(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=e*t;if(o){const n=`${e-r}px + ${t} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${r}px - ${t} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return k`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${M({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${L(this.name)}
              ?disabled=${this.disabled}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Ee(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?k`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};it.styles=xl;a([A(".range__control")],it.prototype,"input",2);a([A(".range__tooltip")],it.prototype,"output",2);a([R()],it.prototype,"hasFocus",2);a([R()],it.prototype,"hasTooltip",2);a([c()],it.prototype,"title",2);a([c()],it.prototype,"name",2);a([c({type:Number})],it.prototype,"value",2);a([c()],it.prototype,"label",2);a([c({attribute:"help-text"})],it.prototype,"helpText",2);a([c({type:Boolean,reflect:!0})],it.prototype,"disabled",2);a([c({type:Number})],it.prototype,"min",2);a([c({type:Number})],it.prototype,"max",2);a([c({type:Number})],it.prototype,"step",2);a([c()],it.prototype,"tooltip",2);a([c({attribute:!1})],it.prototype,"tooltipFormatter",2);a([c({reflect:!0})],it.prototype,"form",2);a([Le()],it.prototype,"defaultValue",2);a([mr({passive:!0})],it.prototype,"handleThumbDragStart",1);a([S("value",{waitUntilFirstUpdate:!0})],it.prototype,"handleValueChange",1);a([S("disabled",{waitUntilFirstUpdate:!0})],it.prototype,"handleDisabledChange",1);a([S("hasTooltip",{waitUntilFirstUpdate:!0})],it.prototype,"syncRange",1);it.define("sl-range");var kl=I`
  ${D}

  :host {
    display: contents;
  }
`,ns=class extends T{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return k` <slot @slotchange=${this.handleSlotChange}></slot> `}};ns.styles=kl;a([c({type:Boolean,reflect:!0})],ns.prototype,"disabled",2);a([S("disabled",{waitUntilFirstUpdate:!0})],ns.prototype,"handleDisabledChange",1);ns.define("sl-resize-observer");var Cl=I`
  ${D}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Qt=class extends T{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return k`
      <span
        part="base"
        class=${M({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?k` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Qt.styles=Cl;Qt.dependencies={"sl-icon":G};a([R()],Qt.prototype,"checked",2);a([R()],Qt.prototype,"hasFocus",2);a([c()],Qt.prototype,"value",2);a([c({reflect:!0})],Qt.prototype,"size",2);a([c({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);a([S("checked")],Qt.prototype,"handleCheckedChange",1);a([S("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);Qt.define("sl-radio");var Dr=I`
  ${D}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,$l=I`
  ${Dr}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Nt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return mi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${M({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${L(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Nt.styles=$l;a([A(".button")],Nt.prototype,"input",2);a([A(".hidden-input")],Nt.prototype,"hiddenInput",2);a([R()],Nt.prototype,"hasFocus",2);a([c({type:Boolean,reflect:!0})],Nt.prototype,"checked",2);a([c()],Nt.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);a([c({reflect:!0})],Nt.prototype,"size",2);a([c({type:Boolean,reflect:!0})],Nt.prototype,"pill",2);a([S("disabled",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleDisabledChange",1);Nt.define("sl-radio-button");var Sl=I`
  ${D}
  ${Oi}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,zl=I`
  ${D}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ie=class extends T{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=ni(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=ni(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=ni(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=ni(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=ni(e);s&&(s.classList.add("sl-button-group__button"),s.classList.toggle("sl-button-group__button--first",i===0),s.classList.toggle("sl-button-group__button--inner",i>0&&i<t.length-1),s.classList.toggle("sl-button-group__button--last",i===t.length-1),s.classList.toggle("sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return k`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ie.styles=zl;a([A("slot")],Ie.prototype,"defaultSlot",2);a([R()],Ie.prototype,"disableRole",2);a([c()],Ie.prototype,"label",2);function ni(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var yt=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this),this.hasSlotController=new Ot(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Aa:t?za:is}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(d=>!d.disabled),s=(e=i.find(d=>d.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||(d.tabIndex=-1)}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].tabIndex=0,i[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(s=>s.checked)||t[0];i&&i.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&(s.tabIndex=0)}else i[0].tabIndex=0;if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=k`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return k`
      <fieldset
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?k`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};yt.styles=Sl;yt.dependencies={"sl-button-group":Ie};a([A("slot:not([name])")],yt.prototype,"defaultSlot",2);a([A(".radio-group__validation-input")],yt.prototype,"validationInput",2);a([R()],yt.prototype,"hasButtonGroup",2);a([R()],yt.prototype,"errorMessage",2);a([R()],yt.prototype,"defaultValue",2);a([c()],yt.prototype,"label",2);a([c({attribute:"help-text"})],yt.prototype,"helpText",2);a([c()],yt.prototype,"name",2);a([c({reflect:!0})],yt.prototype,"value",2);a([c({reflect:!0})],yt.prototype,"size",2);a([c({reflect:!0})],yt.prototype,"form",2);a([c({type:Boolean,reflect:!0})],yt.prototype,"required",2);a([S("size",{waitUntilFirstUpdate:!0})],yt.prototype,"handleSizeChange",1);a([S("value")],yt.prototype,"handleValueChange",1);yt.define("sl-radio-group");var Al=I`
  ${D}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ii=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return k`
      <div
        part="base"
        class=${M({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${L(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${St({width:`${this.value}%`})}>
          ${this.indeterminate?"":k` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ii.styles=Al;a([c({type:Number,reflect:!0})],Ii.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Ii.prototype,"indeterminate",2);a([c()],Ii.prototype,"label",2);Ii.define("sl-progress-bar");var El=I`
  ${D}

  :host {
    display: inline-block;
  }
`;let Pr=null;class Mr{}Mr.render=function(t,e){Pr(t,e)};self.QrCreator=Mr;(function(t){function e(d,l,u,g){var h={},p=t(u,l);p.u(d),p.J(),g=g||0;var m=p.h(),f=p.h()+2*g;return h.text=d,h.level=l,h.version=u,h.O=f,h.a=function(b,x){return b-=g,x-=g,0>b||b>=m||0>x||x>=m?!1:p.a(b,x)},h}function i(d,l,u,g,h,p,m,f,b,x){function y(_,$,v,w,E,F,B){_?(d.lineTo($+F,v+B),d.arcTo($,v,w,E,p)):d.lineTo($,v)}m?d.moveTo(l+p,u):d.moveTo(l,u),y(f,g,u,g,h,-p,0),y(b,g,h,l,h,0,-p),y(x,l,h,l,u,p,0),y(m,l,u,g,u,0,p)}function s(d,l,u,g,h,p,m,f,b,x){function y(_,$,v,w){d.moveTo(_+v,$),d.lineTo(_,$),d.lineTo(_,$+w),d.arcTo(_,$,_+v,$,p)}m&&y(l,u,p,p),f&&y(g,u,-p,p),b&&y(g,h,-p,-p),x&&y(l,h,p,-p)}function o(d,l){var u=l.fill;if(typeof u=="string")d.fillStyle=u;else{var g=u.type,h=u.colorStops;if(u=u.position.map(m=>Math.round(m*l.size)),g==="linear-gradient")var p=d.createLinearGradient.apply(d,u);else if(g==="radial-gradient")p=d.createRadialGradient.apply(d,u);else throw Error("Unsupported fill");h.forEach(([m,f])=>{p.addColorStop(m,f)}),d.fillStyle=p}}function r(d,l){t:{var u=l.text,g=l.v,h=l.N,p=l.K,m=l.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var f=e(u,g,h,m);break t}catch{}f=void 0}if(!f)return null;for(u=d.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),g=f.O,p=l.size/g,u.beginPath(),m=0;m<g;m+=1)for(h=0;h<g;h+=1){var b=u,x=l.left+h*p,y=l.top+m*p,_=m,$=h,v=f.a,w=x+p,E=y+p,F=_-1,B=_+1,z=$-1,C=$+1,N=Math.floor(Math.min(.5,Math.max(0,l.R))*p),Q=v(_,$),zt=v(F,z),ut=v(F,$);F=v(F,C);var kt=v(_,C);C=v(B,C),$=v(B,$),B=v(B,z),_=v(_,z),x=Math.round(x),y=Math.round(y),w=Math.round(w),E=Math.round(E),Q?i(b,x,y,w,E,N,!ut&&!_,!ut&&!kt,!$&&!kt,!$&&!_):s(b,x,y,w,E,N,ut&&_&&zt,ut&&kt&&F,$&&kt&&C,$&&_&&B)}return o(u,l),u.fill(),d}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Pr=function(d,l){var u={};Object.assign(u,n,d),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),r(l,u)):(d=document.createElement("canvas"),d.width=u.size,d.height=u.size,u=r(d,u),l.appendChild(u))}})(function(){function t(l){var u=i.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(g){for(var h=0;h<u.length;h+=1)g.put(u[h],8)}}}function e(){var l=[],u=0,g={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var m=0;m<p;m+=1)g.m((h>>>p-m-1&1)==1)},f:function(){return u},m:function(h){var p=Math.floor(u/8);l.length<=p&&l.push(0),h&&(l[p]|=128>>>u%8),u+=1}};return g}function i(l,u){function g(_,$){for(var v=-1;7>=v;v+=1)if(!(-1>=_+v||f<=_+v))for(var w=-1;7>=w;w+=1)-1>=$+w||f<=$+w||(m[_+v][$+w]=0<=v&&6>=v&&(w==0||w==6)||0<=w&&6>=w&&(v==0||v==6)||2<=v&&4>=v&&2<=w&&4>=w)}function h(_,$){for(var v=f=4*l+17,w=Array(v),E=0;E<v;E+=1){w[E]=Array(v);for(var F=0;F<v;F+=1)w[E][F]=null}for(m=w,g(0,0),g(f-7,0),g(0,f-7),v=r.G(l),w=0;w<v.length;w+=1)for(E=0;E<v.length;E+=1){F=v[w];var B=v[E];if(m[F][B]==null)for(var z=-2;2>=z;z+=1)for(var C=-2;2>=C;C+=1)m[F+z][B+C]=z==-2||z==2||C==-2||C==2||z==0&&C==0}for(v=8;v<f-8;v+=1)m[v][6]==null&&(m[v][6]=v%2==0);for(v=8;v<f-8;v+=1)m[6][v]==null&&(m[6][v]=v%2==0);for(v=r.w(p<<3|$),w=0;15>w;w+=1)E=!_&&(v>>w&1)==1,m[6>w?w:8>w?w+1:f-15+w][8]=E,m[8][8>w?f-w-1:9>w?15-w:14-w]=E;if(m[f-8][8]=!_,7<=l){for(v=r.A(l),w=0;18>w;w+=1)E=!_&&(v>>w&1)==1,m[Math.floor(w/3)][w%3+f-8-3]=E;for(w=0;18>w;w+=1)E=!_&&(v>>w&1)==1,m[w%3+f-8-3][Math.floor(w/3)]=E}if(b==null){for(_=d.I(l,p),v=e(),w=0;w<x.length;w+=1)E=x[w],v.put(4,4),v.put(E.b(),r.f(4,l)),E.write(v);for(w=E=0;w<_.length;w+=1)E+=_[w].j;if(v.f()>8*E)throw Error("code length overflow. ("+v.f()+">"+8*E+")");for(v.f()+4<=8*E&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*E)&&(v.put(236,8),!(v.f()>=8*E));)v.put(17,8);var N=0;for(E=w=0,F=Array(_.length),B=Array(_.length),z=0;z<_.length;z+=1){var Q=_[z].j,zt=_[z].o-Q;for(w=Math.max(w,Q),E=Math.max(E,zt),F[z]=Array(Q),C=0;C<F[z].length;C+=1)F[z][C]=255&v.B()[C+N];for(N+=Q,C=r.C(zt),Q=s(F[z],C.b()-1).l(C),B[z]=Array(C.b()-1),C=0;C<B[z].length;C+=1)zt=C+Q.b()-B[z].length,B[z][C]=0<=zt?Q.c(zt):0}for(C=v=0;C<_.length;C+=1)v+=_[C].o;for(v=Array(v),C=N=0;C<w;C+=1)for(z=0;z<_.length;z+=1)C<F[z].length&&(v[N]=F[z][C],N+=1);for(C=0;C<E;C+=1)for(z=0;z<_.length;z+=1)C<B[z].length&&(v[N]=B[z][C],N+=1);b=v}for(_=b,v=-1,w=f-1,E=7,F=0,$=r.F($),B=f-1;0<B;B-=2)for(B==6&&--B;;){for(z=0;2>z;z+=1)m[w][B-z]==null&&(C=!1,F<_.length&&(C=(_[F]>>>E&1)==1),$(w,B-z)&&(C=!C),m[w][B-z]=C,--E,E==-1&&(F+=1,E=7));if(w+=v,0>w||f<=w){w-=v,v=-v;break}}}var p=o[u],m=null,f=0,b=null,x=[],y={u:function(_){_=t(_),x.push(_),b=null},a:function(_,$){if(0>_||f<=_||0>$||f<=$)throw Error(_+","+$);return m[_][$]},h:function(){return f},J:function(){for(var _=0,$=0,v=0;8>v;v+=1){h(!0,v);var w=r.D(y);(v==0||_>w)&&(_=w,$=v)}h(!1,$)}};return y}function s(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var g=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var m=Array(l.length-p+u),f=0;f<l.length-p;f+=1)m[f]=l[f+p];return m}(),h={c:function(p){return g[p]},b:function(){return g.length},multiply:function(p){for(var m=Array(h.b()+p.b()-1),f=0;f<h.b();f+=1)for(var b=0;b<p.b();b+=1)m[f+b]^=n.i(n.g(h.c(f))+n.g(p.c(b)));return s(m,0)},l:function(p){if(0>h.b()-p.b())return h;for(var m=n.g(h.c(0))-n.g(p.c(0)),f=Array(h.b()),b=0;b<h.b();b+=1)f[b]=h.c(b);for(b=0;b<p.b();b+=1)f[b]^=n.i(n.g(p.c(b))+m);return s(f,0).l(p)}};return h}i.s=function(l){for(var u=[],g=0;g<l.length;g++){var h=l.charCodeAt(g);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(g++,h=65536+((h&1023)<<10|l.charCodeAt(g)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var o={L:1,M:0,Q:3,H:2},r=function(){function l(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],g={w:function(h){for(var p=h<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return h<<12|p},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(p,m){return(p+m)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,m){return m%3==0};case 3:return function(p,m){return(p+m)%3==0};case 4:return function(p,m){return(Math.floor(p/2)+Math.floor(m/3))%2==0};case 5:return function(p,m){return p*m%2+p*m%3==0};case 6:return function(p,m){return(p*m%2+p*m%3)%2==0};case 7:return function(p,m){return(p*m%3+(p+m)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=s([1],0),m=0;m<h;m+=1)p=p.multiply(s([1,n.i(m)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),m=0,f=0;f<p;f+=1)for(var b=0;b<p;b+=1){for(var x=0,y=h.a(f,b),_=-1;1>=_;_+=1)if(!(0>f+_||p<=f+_))for(var $=-1;1>=$;$+=1)0>b+$||p<=b+$||(_!=0||$!=0)&&y==h.a(f+_,b+$)&&(x+=1);5<x&&(m+=3+x-5)}for(f=0;f<p-1;f+=1)for(b=0;b<p-1;b+=1)x=0,h.a(f,b)&&(x+=1),h.a(f+1,b)&&(x+=1),h.a(f,b+1)&&(x+=1),h.a(f+1,b+1)&&(x+=1),(x==0||x==4)&&(m+=3);for(f=0;f<p;f+=1)for(b=0;b<p-6;b+=1)h.a(f,b)&&!h.a(f,b+1)&&h.a(f,b+2)&&h.a(f,b+3)&&h.a(f,b+4)&&!h.a(f,b+5)&&h.a(f,b+6)&&(m+=40);for(b=0;b<p;b+=1)for(f=0;f<p-6;f+=1)h.a(f,b)&&!h.a(f+1,b)&&h.a(f+2,b)&&h.a(f+3,b)&&h.a(f+4,b)&&!h.a(f+5,b)&&h.a(f+6,b)&&(m+=40);for(b=x=0;b<p;b+=1)for(f=0;f<p;f+=1)h.a(f,b)&&(x+=1);return m+=Math.abs(100*x/p/p-50)/5*10}};return g}(),n=function(){for(var l=Array(256),u=Array(256),g=0;8>g;g+=1)l[g]=1<<g;for(g=8;256>g;g+=1)l[g]=l[g-4]^l[g-5]^l[g-6]^l[g-8];for(g=0;255>g;g+=1)u[l[g]]=g;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),d=function(){function l(h,p){switch(p){case o.L:return u[4*(h-1)];case o.M:return u[4*(h-1)+1];case o.Q:return u[4*(h-1)+2];case o.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],g={I:function(h,p){var m=l(h,p);if(typeof m>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=m.length/3,p=[];for(var f=0;f<h;f+=1)for(var b=m[3*f],x=m[3*f+1],y=m[3*f+2],_=0;_<b;_+=1){var $=y,v={};v.o=x,v.j=$,p.push(v)}return p}};return g}();return i}());const Tl=QrCreator;var Ht=class extends T{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){!this.hasUpdated||Tl.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return k`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${St({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ht.styles=El;a([A("canvas")],Ht.prototype,"canvas",2);a([c()],Ht.prototype,"value",2);a([c()],Ht.prototype,"label",2);a([c({type:Number})],Ht.prototype,"size",2);a([c()],Ht.prototype,"fill",2);a([c()],Ht.prototype,"background",2);a([c({type:Number})],Ht.prototype,"radius",2);a([c({attribute:"error-correction"})],Ht.prototype,"errorCorrection",2);a([S(["background","errorCorrection","fill","radius","size","value"])],Ht.prototype,"generate",1);Ht.define("sl-qr-code");var Ll=I`
  ${D}

  :host {
    display: contents;
  }
`,Zt=class extends T{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return k` <slot></slot> `}};Zt.styles=Ll;a([c({reflect:!0})],Zt.prototype,"attr",2);a([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],Zt.prototype,"attrOldValue",2);a([c({attribute:"char-data",type:Boolean,reflect:!0})],Zt.prototype,"charData",2);a([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Zt.prototype,"charDataOldValue",2);a([c({attribute:"child-list",type:Boolean,reflect:!0})],Zt.prototype,"childList",2);a([c({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);a([S("disabled")],Zt.prototype,"handleDisabledChange",1);a([S("attr",{waitUntilFirstUpdate:!0}),S("attr-old-value",{waitUntilFirstUpdate:!0}),S("char-data",{waitUntilFirstUpdate:!0}),S("char-data-old-value",{waitUntilFirstUpdate:!0}),S("childList",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleChange",1);Zt.define("sl-mutation-observer");Y.define("sl-popup");var Ol=I`
  ${D}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Je=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return k`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Je.styles=Ol;a([A(".progress-ring__indicator")],Je.prototype,"indicator",2);a([R()],Je.prototype,"indicatorOffset",2);a([c({type:Number,reflect:!0})],Je.prototype,"value",2);a([c()],Je.prototype,"label",2);Je.define("sl-progress-ring");var Il=I`
  ${D}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Ft=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var t;return((t=this.textContent)!=null?t:"").trim()}render(){return k`
      <div
        part="base"
        class=${M({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ft.styles=Il;Ft.dependencies={"sl-icon":G};a([A(".option__label")],Ft.prototype,"defaultSlot",2);a([R()],Ft.prototype,"current",2);a([R()],Ft.prototype,"selected",2);a([R()],Ft.prototype,"hasHover",2);a([c({reflect:!0})],Ft.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Ft.prototype,"disabled",2);a([S("disabled")],Ft.prototype,"handleDisabledChange",1);a([S("selected")],Ft.prototype,"handleSelectedChange",1);a([S("value")],Ft.prototype,"handleValueChange",1);Ft.define("sl-option");var Dl=I`
  ${D}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=(t,e)=>{var s;const i=t._$AN;if(i===void 0)return!1;for(const o of i)(s=o._$AO)==null||s.call(o,e,!1),yi(o,e);return!0},ts=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},Rr=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Rl(e)}};function Pl(t){this._$AN!==void 0?(ts(this),this._$AM=t,Rr(this)):this._$AM=t}function Ml(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)yi(s[r],!1),ts(s[r]);else s!=null&&(yi(s,!1),ts(s));else yi(this,t)}const Rl=t=>{var e,i;t.type==Xt.CHILD&&((e=t._$AP)!=null||(t._$AP=Ml),(i=t._$AQ)!=null||(t._$AQ=Pl))};class Fl extends Ti{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Rr(this),this.isConnected=e._$AU}_$AO(e,i=!0){var s,o;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(o=this.disconnected)==null||o.call(this)),i&&(yi(this,e),ts(this))}setValue(e){if(Lr(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vl=()=>new Bl;class Bl{}const ws=new WeakMap,Ul=Ei(class extends Fl{render(t){return tt}update(t,[e]){var s;const i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=(s=t.options)==null?void 0:s.host,this.ot(this.lt=t.element)),tt}ot(t){var e;if(typeof this.G=="function"){const i=(e=this.ct)!=null?e:globalThis;let s=ws.get(i);s===void 0&&(s=new WeakMap,ws.set(i,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,i;return typeof this.G=="function"?(e=ws.get((t=this.ct)!=null?t:globalThis))==null?void 0:e.get(this.G):(i=this.G)==null?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Nl=class{constructor(t,e,i){this.popupRef=Vl(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var o;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||((o=s.target.role)==null?void 0:o.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),o=s==null?void 0:s.assignedElements({flatten:!0}).filter(g=>g.localName==="sl-menu")[0],r=this.localize.dir()==="rtl";if(!o)return;const{left:n,top:d,width:l,height:u}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+u}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var n;const d=(n=e.get(r))!=null?n:new CSSUnitValue(0,"px"),u=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?k`
      <sl-popup
        ${Ul(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:k` <slot name="submenu" hidden></slot> `}},Vt=class extends T{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new j(this),this.hasSlotController=new Ot(this,"submenu"),this.submenuController=new Nl(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return cl(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return k`
      <div
        id="anchor"
        part="base"
        class=${M({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};Vt.styles=Dl;Vt.dependencies={"sl-icon":G,"sl-popup":Y};a([A("slot:not([name])")],Vt.prototype,"defaultSlot",2);a([A(".menu-item")],Vt.prototype,"menuItem",2);a([c()],Vt.prototype,"type",2);a([c({type:Boolean,reflect:!0})],Vt.prototype,"checked",2);a([c()],Vt.prototype,"value",2);a([c({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);a([S("checked")],Vt.prototype,"handleCheckedChange",1);a([S("disabled")],Vt.prototype,"handleDisabledChange",1);a([S("type")],Vt.prototype,"handleTypeChange",1);Vt.define("sl-menu-item");var Hl=I`
  ${D}
  ${Oi}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,U=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ot(this,"help-text","label"),this.localize=new j(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s){this.input.setRangeText(t,e,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&!this.readonly,r=o&&(typeof this.value=="number"||this.value.length>0);return k`
      <div
        part="form-control"
        class=${M({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${M({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${L(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Ee(this.value)}
              autocapitalize=${L(this.autocapitalize)}
              autocomplete=${L(this.autocomplete)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${L(this.pattern)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?k`
                  <button
                    part="clear-button"
                    class=${M({input__clear:!0,"input__clear--visible":r})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};U.styles=Hl;U.dependencies={"sl-icon":G};a([A(".input__control")],U.prototype,"input",2);a([R()],U.prototype,"hasFocus",2);a([c()],U.prototype,"title",2);a([c({reflect:!0})],U.prototype,"type",2);a([c()],U.prototype,"name",2);a([c()],U.prototype,"value",2);a([Le()],U.prototype,"defaultValue",2);a([c({reflect:!0})],U.prototype,"size",2);a([c({type:Boolean,reflect:!0})],U.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],U.prototype,"pill",2);a([c()],U.prototype,"label",2);a([c({attribute:"help-text"})],U.prototype,"helpText",2);a([c({type:Boolean})],U.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([c()],U.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],U.prototype,"readonly",2);a([c({attribute:"password-toggle",type:Boolean})],U.prototype,"passwordToggle",2);a([c({attribute:"password-visible",type:Boolean})],U.prototype,"passwordVisible",2);a([c({attribute:"no-spin-buttons",type:Boolean})],U.prototype,"noSpinButtons",2);a([c({reflect:!0})],U.prototype,"form",2);a([c({type:Boolean,reflect:!0})],U.prototype,"required",2);a([c()],U.prototype,"pattern",2);a([c({type:Number})],U.prototype,"minlength",2);a([c({type:Number})],U.prototype,"maxlength",2);a([c()],U.prototype,"min",2);a([c()],U.prototype,"max",2);a([c()],U.prototype,"step",2);a([c()],U.prototype,"autocapitalize",2);a([c()],U.prototype,"autocorrect",2);a([c()],U.prototype,"autocomplete",2);a([c({type:Boolean})],U.prototype,"autofocus",2);a([c()],U.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],U.prototype,"spellcheck",2);a([c()],U.prototype,"inputmode",2);a([S("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);a([S("step",{waitUntilFirstUpdate:!0})],U.prototype,"handleStepChange",1);a([S("value",{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1);U.define("sl-input");var ql=I`
  ${D}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,so=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath().find(o=>{var r;return e.includes(((r=o==null?void 0:o.getAttribute)==null?void 0:r.call(o,"role"))||"")});if(!i)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return k`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};so.styles=ql;a([A("slot")],so.prototype,"defaultSlot",2);so.define("sl-menu");var jl=I`
  ${D}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Fr=class extends T{render(){return k` <slot part="base" class="menu-label"></slot> `}};Fr.styles=jl;Fr.define("sl-menu-label");var Kl=I`
  ${D}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,De=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),vi(this.base,{onMove:s=>{this.position=parseFloat(lt(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=s),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=lt(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return k`
      <div
        part="base"
        id="image-comparer"
        class=${M({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${St({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${St({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};De.styles=Kl;De.scopedElement={"sl-icon":G};a([A(".image-comparer")],De.prototype,"base",2);a([A(".image-comparer__handle")],De.prototype,"handle",2);a([c({type:Number,reflect:!0})],De.prototype,"position",2);a([S("position",{waitUntilFirstUpdate:!0})],De.prototype,"handlePositionChange",1);De.define("sl-image-comparer");var Wl=I`
  ${D}

  :host {
    display: block;
  }
`,xs=new Map;function Xl(t,e="cors"){const i=xs.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return xs.set(t,r),r});return xs.set(t,s),s}var ti=class extends T{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await Xl(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return k`<slot></slot>`}};ti.styles=Wl;a([c()],ti.prototype,"src",2);a([c()],ti.prototype,"mode",2);a([c({attribute:"allow-scripts",type:Boolean})],ti.prototype,"allowScripts",2);a([S("src")],ti.prototype,"handleSrcChange",1);ti.define("sl-include");G.define("sl-icon");ht.define("sl-icon-button");var Yl=I`
  ${D}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function Gl(t){return Boolean(t.offsetParent||t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function Ql(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!Gl(t)||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Zl(t){var e,i;const s=Ns(t),o=(e=s[0])!=null?e:null,r=(i=s[s.length-1])!=null?i:null;return{start:o,end:r}}function Ns(t){const e=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert"))return;!e.includes(s)&&Ql(s)&&e.push(s);const o=r=>{var n;return((n=r.getRootNode({composed:!0}))==null?void 0:n.host)!==t};s instanceof HTMLSlotElement&&o(s)&&s.assignedElements({flatten:!0}).forEach(r=>{i(r)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}[...s.children].forEach(o=>i(o))}return i(t),e.sort((s,o)=>{const r=Number(s.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-r})}var xt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,s,o;const r=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(o=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>Zl(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ct(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ct(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=et(this,"dropdown.show",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ct(this);const{keyframes:t,options:e}=et(this,"dropdown.hide",{dir:this.localize.dir()});await rt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return k`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${M({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};xt.styles=Yl;xt.dependencies={"sl-popup":Y};a([A(".dropdown")],xt.prototype,"popup",2);a([A(".dropdown__trigger")],xt.prototype,"trigger",2);a([A(".dropdown__panel")],xt.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],xt.prototype,"open",2);a([c({reflect:!0})],xt.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);a([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],xt.prototype,"stayOpenOnSelect",2);a([c({attribute:!1})],xt.prototype,"containingElement",2);a([c({type:Number})],xt.prototype,"distance",2);a([c({type:Number})],xt.prototype,"skidding",2);a([c({type:Boolean})],xt.prototype,"hoist",2);a([S("open",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpenChange",1);W("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});xt.define("sl-dropdown");var ls=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[s]+this.unit,r=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};a([c({type:Number})],ls.prototype,"value",2);a([c()],ls.prototype,"unit",2);a([c()],ls.prototype,"display",2);ls.define("sl-format-bytes");var Pt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return k`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};a([c()],Pt.prototype,"date",2);a([c()],Pt.prototype,"weekday",2);a([c()],Pt.prototype,"era",2);a([c()],Pt.prototype,"year",2);a([c()],Pt.prototype,"month",2);a([c()],Pt.prototype,"day",2);a([c()],Pt.prototype,"hour",2);a([c()],Pt.prototype,"minute",2);a([c()],Pt.prototype,"second",2);a([c({attribute:"time-zone-name"})],Pt.prototype,"timeZoneName",2);a([c({attribute:"time-zone"})],Pt.prototype,"timeZone",2);a([c({attribute:"hour-format"})],Pt.prototype,"hourFormat",2);Pt.define("sl-format-date");var qt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([c({type:Number})],qt.prototype,"value",2);a([c()],qt.prototype,"type",2);a([c({attribute:"no-grouping",type:Boolean})],qt.prototype,"noGrouping",2);a([c()],qt.prototype,"currency",2);a([c({attribute:"currency-display"})],qt.prototype,"currencyDisplay",2);a([c({attribute:"minimum-integer-digits",type:Number})],qt.prototype,"minimumIntegerDigits",2);a([c({attribute:"minimum-fraction-digits",type:Number})],qt.prototype,"minimumFractionDigits",2);a([c({attribute:"maximum-fraction-digits",type:Number})],qt.prototype,"maximumFractionDigits",2);a([c({attribute:"minimum-significant-digits",type:Number})],qt.prototype,"minimumSignificantDigits",2);a([c({attribute:"maximum-significant-digits",type:Number})],qt.prototype,"maximumSignificantDigits",2);qt.define("sl-format-number");var Jl=I`
  ${D}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,cs=class extends T{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};cs.styles=Jl;a([c({type:Boolean,reflect:!0})],cs.prototype,"vertical",2);a([S("vertical")],cs.prototype,"handleVerticalChange",1);cs.define("sl-divider");var tc=I`
  ${D}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Vr(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Sa(Vr(t.shadowRoot.activeElement))))}function ec(){return[...Vr()].pop()}var li=[],Br=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{!this.isActive()||this.checkFocus()},this.handleKeyDown=e=>{var i,s;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const o=Ns(this.element),r=ec();let n=o.findIndex(l=>l===r);if(n===-1){this.currentFocus=o[0],(i=this.currentFocus)==null||i.focus({preventScroll:!0});return}const d=this.tabDirection==="forward"?1:-1;n+d>=o.length?n=0:n+d<0?n=o.length-1:n+=d,this.currentFocus=o[n],(s=this.currentFocus)==null||s.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){li.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){li=li.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return li[li.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Ns(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof(s==null?void 0:s.focus)=="function"&&(this.currentFocus=s,s.focus({preventScroll:!0}))}}}};function qo(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Mt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer"),this.localize=new j(this),this.modal=new Br(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),gi(this)))}disconnectedCallback(){super.disconnectedCallback(),bi(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=et(this,"drawer.denyClose",{dir:this.localize.dir()});rt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),gi(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ct(this.drawer),ct(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=et(this,`drawer.show${qo(this.placement)}`,{dir:this.localize.dir()}),i=et(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([rt(this.panel,e.keyframes,e.options),rt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),bi(this)),await Promise.all([ct(this.drawer),ct(this.overlay)]);const t=et(this,`drawer.hide${qo(this.placement)}`,{dir:this.localize.dir()}),e=et(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([rt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),rt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),gi(this)),this.open&&this.contained&&(this.modal.deactivate(),bi(this))}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ct(this,"sl-after-hide")}render(){return k`
      <div
        part="base"
        class=${M({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${L(this.noHeader?this.label:void 0)}
          aria-labelledby=${L(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":k`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Mt.styles=tc;Mt.dependencies={"sl-icon-button":ht};a([A(".drawer")],Mt.prototype,"drawer",2);a([A(".drawer__panel")],Mt.prototype,"panel",2);a([A(".drawer__overlay")],Mt.prototype,"overlay",2);a([c({type:Boolean,reflect:!0})],Mt.prototype,"open",2);a([c({reflect:!0})],Mt.prototype,"label",2);a([c({reflect:!0})],Mt.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],Mt.prototype,"contained",2);a([c({attribute:"no-header",type:Boolean,reflect:!0})],Mt.prototype,"noHeader",2);a([S("open",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleOpenChange",1);a([S("contained",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleNoModalChange",1);W("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});W("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});W("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});W("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});W("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});W("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Mt.define("sl-drawer");var ic=I`
  ${D}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,gt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";i?[o,r]=this.from.trim().split("."):s&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?s?t=n.getAttribute(r)||"":i?t=n[r]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,r=et(this,"copy.in",{dir:"ltr"}),n=et(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return k`
      <sl-tooltip
        class=${M({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};gt.styles=ic;gt.dependencies={"sl-icon":G,"sl-tooltip":ft};a([A('slot[name="copy-icon"]')],gt.prototype,"copyIcon",2);a([A('slot[name="success-icon"]')],gt.prototype,"successIcon",2);a([A('slot[name="error-icon"]')],gt.prototype,"errorIcon",2);a([A("sl-tooltip")],gt.prototype,"tooltip",2);a([R()],gt.prototype,"isCopying",2);a([R()],gt.prototype,"status",2);a([c()],gt.prototype,"value",2);a([c()],gt.prototype,"from",2);a([c({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);a([c({attribute:"copy-label"})],gt.prototype,"copyLabel",2);a([c({attribute:"success-label"})],gt.prototype,"successLabel",2);a([c({attribute:"error-label"})],gt.prototype,"errorLabel",2);a([c({attribute:"feedback-duration",type:Number})],gt.prototype,"feedbackDuration",2);a([c({attribute:"tooltip-placement"})],gt.prototype,"tooltipPlacement",2);a([c({type:Boolean})],gt.prototype,"hoist",2);W("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});W("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});gt.define("sl-copy-button");var sc=I`
  ${D}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,jt=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ct(this.body);const{keyframes:e,options:i}=et(this,"details.show",{dir:this.localize.dir()});await rt(this.body,Zi(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ct(this.body);const{keyframes:e,options:i}=et(this,"details.hide",{dir:this.localize.dir()});await rt(this.body,Zi(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ct(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return k`
      <details
        part="base"
        class=${M({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};jt.styles=sc;jt.dependencies={"sl-icon":G};a([A(".details")],jt.prototype,"details",2);a([A(".details__header")],jt.prototype,"header",2);a([A(".details__body")],jt.prototype,"body",2);a([A(".details__expand-icon-slot")],jt.prototype,"expandIconSlot",2);a([c({type:Boolean,reflect:!0})],jt.prototype,"open",2);a([c()],jt.prototype,"summary",2);a([c({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);a([S("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);W("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});W("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});jt.define("sl-details");var oc=I`
  ${D}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Jt=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer"),this.localize=new j(this),this.modal=new Br(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),gi(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),bi(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=et(this,"dialog.denyClose",{dir:this.localize.dir()});rt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),gi(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ct(this.dialog),ct(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=et(this,"dialog.show",{dir:this.localize.dir()}),i=et(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([rt(this.panel,e.keyframes,e.options),rt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ct(this.dialog),ct(this.overlay)]);const t=et(this,"dialog.hide",{dir:this.localize.dir()}),e=et(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([rt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),rt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,bi(this);const i=this.originalTrigger;typeof(i==null?void 0:i.focus)=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ct(this,"sl-after-hide")}render(){return k`
      <div
        part="base"
        class=${M({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${L(this.noHeader?this.label:void 0)}
          aria-labelledby=${L(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":k`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Jt.styles=oc;Jt.dependencies={"sl-icon-button":ht};a([A(".dialog")],Jt.prototype,"dialog",2);a([A(".dialog__panel")],Jt.prototype,"panel",2);a([A(".dialog__overlay")],Jt.prototype,"overlay",2);a([c({type:Boolean,reflect:!0})],Jt.prototype,"open",2);a([c({reflect:!0})],Jt.prototype,"label",2);a([c({attribute:"no-header",type:Boolean,reflect:!0})],Jt.prototype,"noHeader",2);a([S("open",{waitUntilFirstUpdate:!0})],Jt.prototype,"handleOpenChange",1);W("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});W("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Jt.define("sl-dialog");var rc=I`
  ${D}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Ur=class extends T{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return k` <slot></slot> `}};Ur.styles=rc;Ur.define("sl-carousel-item");mt.define("sl-checkbox");var ac=I`
  ${D}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,X=class extends T{constructor(){super(...arguments),this.formControlController=new ne(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ot(this,"[default]","prefix","suffix"),this.localize=new j(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:is}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Ji`a`:Ji`button`;return mi`
      <${e}
        part="base"
        class=${M({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${L(t?void 0:this.disabled)}
        type=${L(t?void 0:this.type)}
        title=${this.title}
        name=${L(t?void 0:this.name)}
        value=${L(t?void 0:this.value)}
        href=${L(t?this.href:void 0)}
        target=${L(t?this.target:void 0)}
        download=${L(t?this.download:void 0)}
        rel=${L(t?this.rel:void 0)}
        role=${L(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?mi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?mi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};X.styles=Dr;X.dependencies={"sl-icon":G,"sl-spinner":as};a([A(".button")],X.prototype,"button",2);a([R()],X.prototype,"hasFocus",2);a([R()],X.prototype,"invalid",2);a([c()],X.prototype,"title",2);a([c({reflect:!0})],X.prototype,"variant",2);a([c({reflect:!0})],X.prototype,"size",2);a([c({type:Boolean,reflect:!0})],X.prototype,"caret",2);a([c({type:Boolean,reflect:!0})],X.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],X.prototype,"loading",2);a([c({type:Boolean,reflect:!0})],X.prototype,"outline",2);a([c({type:Boolean,reflect:!0})],X.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],X.prototype,"circle",2);a([c()],X.prototype,"type",2);a([c()],X.prototype,"name",2);a([c()],X.prototype,"value",2);a([c()],X.prototype,"href",2);a([c()],X.prototype,"target",2);a([c()],X.prototype,"rel",2);a([c()],X.prototype,"download",2);a([c()],X.prototype,"form",2);a([c({attribute:"formaction"})],X.prototype,"formAction",2);a([c({attribute:"formenctype"})],X.prototype,"formEnctype",2);a([c({attribute:"formmethod"})],X.prototype,"formMethod",2);a([c({attribute:"formnovalidate",type:Boolean})],X.prototype,"formNoValidate",2);a([c({attribute:"formtarget"})],X.prototype,"formTarget",2);a([S("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);function vt(t,e){nc(t)&&(t="100%");const i=lc(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Ui(t){return Math.min(1,Math.max(0,t))}function nc(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function lc(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Nr(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ni(t){return Number(t)<=1?`${Number(t)*100}%`:t}function xe(t){return t.length===1?"0"+t:String(t)}function cc(t,e,i){return{r:vt(t,255)*255,g:vt(e,255)*255,b:vt(i,255)*255}}function jo(t,e,i){t=vt(t,255),e=vt(e,255),i=vt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0,n=0;const d=(s+o)/2;if(s===o)n=0,r=0;else{const l=s-o;switch(n=d>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4;break}r/=6}return{h:r,s:n,l:d}}function ks(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function dc(t,e,i){let s,o,r;if(t=vt(t,360),e=vt(e,100),i=vt(i,100),e===0)o=i,r=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,d=2*i-n;s=ks(d,n,t+1/3),o=ks(d,n,t),r=ks(d,n,t-1/3)}return{r:s*255,g:o*255,b:r*255}}function Ko(t,e,i){t=vt(t,255),e=vt(e,255),i=vt(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0;const n=s,d=s-o,l=s===0?0:d/s;if(s===o)r=0;else{switch(s){case t:r=(e-i)/d+(e<i?6:0);break;case e:r=(i-t)/d+2;break;case i:r=(t-e)/d+4;break}r/=6}return{h:r,s:l,v:n}}function hc(t,e,i){t=vt(t,360)*6,e=vt(e,100),i=vt(i,100);const s=Math.floor(t),o=t-s,r=i*(1-e),n=i*(1-o*e),d=i*(1-(1-o)*e),l=s%6,u=[i,n,r,r,d,i][l],g=[d,i,i,n,r,r][l],h=[r,r,d,i,i,n][l];return{r:u*255,g:g*255,b:h*255}}function Wo(t,e,i,s){const o=[xe(Math.round(t).toString(16)),xe(Math.round(e).toString(16)),xe(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function uc(t,e,i,s,o){const r=[xe(Math.round(t).toString(16)),xe(Math.round(e).toString(16)),xe(Math.round(i).toString(16)),xe(pc(s))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function pc(t){return Math.round(parseFloat(t)*255).toString(16)}function Xo(t){return At(t)/255}function At(t){return parseInt(t,16)}function fc(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const Hs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function mc(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,r=null,n=!1,d=!1;return typeof t=="string"&&(t=vc(t)),typeof t=="object"&&(se(t.r)&&se(t.g)&&se(t.b)?(e=cc(t.r,t.g,t.b),n=!0,d=String(t.r).substr(-1)==="%"?"prgb":"rgb"):se(t.h)&&se(t.s)&&se(t.v)?(s=Ni(t.s),o=Ni(t.v),e=hc(t.h,s,o),n=!0,d="hsv"):se(t.h)&&se(t.s)&&se(t.l)&&(s=Ni(t.s),r=Ni(t.l),e=dc(t.h,s,r),n=!0,d="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=Nr(i),{ok:n,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const gc="[-\\+]?\\d+%?",bc="[-\\+]?\\d*\\.\\d+%?",de=`(?:${bc})|(?:${gc})`,Cs=`[\\s|\\(]+(${de})[,|\\s]+(${de})[,|\\s]+(${de})\\s*\\)?`,$s=`[\\s|\\(]+(${de})[,|\\s]+(${de})[,|\\s]+(${de})[,|\\s]+(${de})\\s*\\)?`,Ut={CSS_UNIT:new RegExp(de),rgb:new RegExp("rgb"+Cs),rgba:new RegExp("rgba"+$s),hsl:new RegExp("hsl"+Cs),hsla:new RegExp("hsla"+$s),hsv:new RegExp("hsv"+Cs),hsva:new RegExp("hsva"+$s),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function vc(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(Hs[t])t=Hs[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Ut.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=Ut.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Ut.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=Ut.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Ut.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=Ut.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Ut.hex8.exec(t),i?{r:At(i[1]),g:At(i[2]),b:At(i[3]),a:Xo(i[4]),format:e?"name":"hex8"}:(i=Ut.hex6.exec(t),i?{r:At(i[1]),g:At(i[2]),b:At(i[3]),format:e?"name":"hex"}:(i=Ut.hex4.exec(t),i?{r:At(i[1]+i[1]),g:At(i[2]+i[2]),b:At(i[3]+i[3]),a:Xo(i[4]+i[4]),format:e?"name":"hex8"}:(i=Ut.hex3.exec(t),i?{r:At(i[1]+i[1]),g:At(i[2]+i[2]),b:At(i[3]+i[3]),format:e?"name":"hex"}:!1)))))))))}function se(t){return Boolean(Ut.CSS_UNIT.exec(String(t)))}class st{constructor(e="",i={}){var o;if(e instanceof st)return e;typeof e=="number"&&(e=fc(e)),this.originalInput=e;const s=mc(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=(o=i.format)!=null?o:s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,o;const r=e.r/255,n=e.g/255,d=e.b/255;return r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),d<=.03928?o=d/12.92:o=Math.pow((d+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=Nr(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Ko(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Ko(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${o}%)`:`hsva(${i}, ${s}%, ${o}%, ${this.roundA})`}toHsl(){const e=jo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=jo(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${o}%)`:`hsla(${i}, ${s}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Wo(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return uc(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(vt(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(vt(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Wo(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(Hs))if(e===s)return i;return!1}toString(e){const i=Boolean(e);e=e!=null?e:this.format;let s=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new st(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=Ui(i.l),new st(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new st(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=Ui(i.l),new st(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=Ui(i.s),new st(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=Ui(i.s),new st(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new st(i)}mix(e,i=50){const s=this.toRgb(),o=new st(e).toRgb(),r=i/100,n={r:(o.r-s.r)*r+s.r,g:(o.g-s.g)*r+s.g,b:(o.b-s.b)*r+s.b,a:(o.a-s.a)*r+s.a};return new st(n)}analogous(e=6,i=30){const s=this.toHsl(),o=360/i,r=[this];for(s.h=(s.h-(o*e>>1)+720)%360;--e;)s.h=(s.h+o)%360,r.push(new st(s));return r}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new st(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:o}=i;let{v:r}=i;const n=[],d=1/e;for(;e--;)n.push(new st({h:s,s:o,v:r})),r=(r+d)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new st({h:(i+72)%360,s:e.s,l:e.l}),new st({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new st(e).toRgb(),o=i.a+s.a*(1-i.a);return new st({r:(i.r*i.a+s.r*s.a*(1-i.a))/o,g:(i.g*i.a+s.g*s.a*(1-i.a))/o,b:(i.b*i.a+s.b*s.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,o=[this],r=360/e;for(let n=1;n<e;n++)o.push(new st({h:(s+n*r)%360,s:i.s,l:i.l}));return o}equals(e){return this.toRgbString()===new st(e).toRgbString()}}var Yo="EyeDropper"in window,q=class extends T{constructor(){super(),this.formControlController=new ne(this),this.isSafeValue=!1,this.localize=new j(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),vi(e,{onMove:n=>{this.alpha=lt(n/s*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),vi(e,{onMove:n=>{this.hue=lt(n/s*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let r=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,vi(e,{onMove:(d,l)=>{this.saturation=lt(d/s*100,0,100),this.brightness=lt(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=lt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=lt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=lt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=lt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=lt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=lt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=lt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=lt(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new st(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),r=e.toHexString(),n=e.toHex8String(),d=e.toHsv(),l={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Yo)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new st(`hsva(${t}, ${e}, ${i}, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t!=null?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),s=k`
      <div
        part="base"
        class=${M({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?k`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${St({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${M({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${St({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${L(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${St({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${L(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?k`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${St({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${St({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${L(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${St({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":k`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Yo?k`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?k`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const r=this.parseColor(o);return r?k`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${L(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${St({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:k`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${M({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${St({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};q.styles=ac;q.dependencies={"sl-button-group":Ie,"sl-button":X,"sl-dropdown":xt,"sl-icon":G,"sl-input":U,"sl-visually-hidden":Xs};a([A('[part~="base"]')],q.prototype,"base",2);a([A('[part~="input"]')],q.prototype,"input",2);a([A(".color-dropdown")],q.prototype,"dropdown",2);a([A('[part~="preview"]')],q.prototype,"previewButton",2);a([A('[part~="trigger"]')],q.prototype,"trigger",2);a([R()],q.prototype,"hasFocus",2);a([R()],q.prototype,"isDraggingGridHandle",2);a([R()],q.prototype,"isEmpty",2);a([R()],q.prototype,"inputValue",2);a([R()],q.prototype,"hue",2);a([R()],q.prototype,"saturation",2);a([R()],q.prototype,"brightness",2);a([R()],q.prototype,"alpha",2);a([c()],q.prototype,"value",2);a([Le()],q.prototype,"defaultValue",2);a([c()],q.prototype,"label",2);a([c()],q.prototype,"format",2);a([c({type:Boolean,reflect:!0})],q.prototype,"inline",2);a([c({reflect:!0})],q.prototype,"size",2);a([c({attribute:"no-format-toggle",type:Boolean})],q.prototype,"noFormatToggle",2);a([c()],q.prototype,"name",2);a([c({type:Boolean,reflect:!0})],q.prototype,"disabled",2);a([c({type:Boolean})],q.prototype,"hoist",2);a([c({type:Boolean})],q.prototype,"opacity",2);a([c({type:Boolean})],q.prototype,"uppercase",2);a([c()],q.prototype,"swatches",2);a([c({reflect:!0})],q.prototype,"form",2);a([c({type:Boolean,reflect:!0})],q.prototype,"required",2);a([S("format",{waitUntilFirstUpdate:!0})],q.prototype,"handleFormatChange",1);a([S("opacity",{waitUntilFirstUpdate:!0})],q.prototype,"handleOpacityChange",1);a([S("value")],q.prototype,"handleValueChange",1);q.define("sl-color-picker");var yc=I`
  ${D}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Hr=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"footer","header","image")}render(){return k`
      <div
        part="base"
        class=${M({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hr.styles=yc;Hr.define("sl-card");var _c=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},wc=I`
  ${D}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,xc=class{constructor(t){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=e=>{if(e.pointerType==="touch")return;this.mouseDragging&&e.button===0&&(e.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=e=>{const i=this.host.scrollContainer,s=!!e.movementX||!!e.movementY;!this.dragging&&s?(i.setPointerCapture(e.pointerId),this.handleDragStart()):i.hasPointerCapture(e.pointerId)&&this.handleDrag(e)},this.handlePointerUp=e=>{this.host.scrollContainer.releasePointerCapture(e.pointerId),this.handleDragEnd()},this.host=t,t.addController(this)}async hostConnected(){const t=this.host;await t.updateComplete;const e=t.scrollContainer;e.addEventListener("scroll",this.handleScroll,{passive:!0}),e.addEventListener("scrollend",this.handleScrollEnd,!0),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const e=this.host.scrollContainer;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("scrollend",this.handleScrollEnd,!0),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const t=this.host;this.dragging=!0,t.scrollContainer.style.setProperty("scroll-snap-type","unset"),t.requestUpdate()}handleDrag(t){this.host.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY})}handleDragEnd(){const t=this.host,e=t.scrollContainer;e.removeEventListener("pointermove",this.handlePointerMove);const i=e.scrollLeft,s=e.scrollTop;e.style.removeProperty("scroll-snap-type");const o=e.scrollLeft,r=e.scrollTop;e.style.setProperty("scroll-snap-type","unset"),e.scrollTo({left:i,top:s,behavior:"auto"}),e.scrollTo({left:o,top:r,behavior:eo()?"auto":"smooth"}),requestAnimationFrame(async()=>{(i!==o||s!==r)&&await Ct(e,"scrollend"),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,t.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*kc(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Cc(t,e,i=1){const s=e===void 0?0:t;e!=null||(e=t);for(let o=s;i>0?o<e:e<o;o+=i)yield o}var $c=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},Go=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}},Sc="onscrollend"in window;if(!Sc){const t=new Set,e=new WeakMap,i=o=>{t.add(o.pointerId)},s=o=>{t.delete(o.pointerId)};document.addEventListener("pointerdown",i),document.addEventListener("pointerup",s),Go(EventTarget.prototype,"addEventListener",function(o,r){if(r!=="scroll")return;const n=$c(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),Go(EventTarget.prototype,"removeEventListener",function(o,r){if(r!=="scroll")return;const n=e.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var dt=class extends T{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new _c(this,()=>this.next()),this.scrollController=new xc(this),this.intersectionObserverEntries=new Map,this.localize=new j(this),this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const t=new IntersectionObserver(e=>{e.forEach(i=>{this.intersectionObserverEntries.set(i.target,i);const s=i.target;s.toggleAttribute("inert",!i.isIntersecting),s.classList.toggle("--in-view",i.isIntersecting),s.setAttribute("aria-hidden",i.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=t,t.takeRecords().forEach(e=>{this.intersectionObserverEntries.set(e.target,e)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const d=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleScrollEnd(){const t=this.getSlides(),i=[...this.intersectionObserverEntries.values()].find(s=>s.isIntersecting);if(this.loop&&(i==null?void 0:i.target.hasAttribute("data-clone"))){const s=Number(i.target.getAttribute("data-clone"));this.goToSlide(s,"auto")}else if(i){const s=t.indexOf(i.target);this.activeSlide=Math.ceil(s/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const t=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((e,i)=>{t.unobserve(e),e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",i+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-r-1)),this.prepend(n)}),s.forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(r)),this.append(n)})}handelSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s,scrollContainer:o}=this,r=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!r.length)return;const d=s?(t+r.length)%r.length:lt(t,0,r.length-1);this.activeSlide=d;const l=lt(t+(s?i:0),0,n.length-1),u=n[l],g=o.getBoundingClientRect(),h=u.getBoundingClientRect();o.scrollTo({left:h.left-g.left+o.scrollLeft,top:h.top-g.top+o.scrollTop,behavior:eo()?"auto":e})}render(){const{scrollController:t,slidesPerMove:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),n=this.localize.dir()==="ltr";return k`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${M({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?k`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${M({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${M({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?k`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${kc(Cc(i),d=>{const l=d===s;return k`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${M({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",d+1,i)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(d*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};dt.styles=wc;dt.dependencies={"sl-icon":G};a([c({type:Boolean,reflect:!0})],dt.prototype,"loop",2);a([c({type:Boolean,reflect:!0})],dt.prototype,"navigation",2);a([c({type:Boolean,reflect:!0})],dt.prototype,"pagination",2);a([c({type:Boolean,reflect:!0})],dt.prototype,"autoplay",2);a([c({type:Number,attribute:"autoplay-interval"})],dt.prototype,"autoplayInterval",2);a([c({type:Number,attribute:"slides-per-page"})],dt.prototype,"slidesPerPage",2);a([c({type:Number,attribute:"slides-per-move"})],dt.prototype,"slidesPerMove",2);a([c()],dt.prototype,"orientation",2);a([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],dt.prototype,"mouseDragging",2);a([A(".carousel__slides")],dt.prototype,"scrollContainer",2);a([A(".carousel__pagination")],dt.prototype,"paginationContainer",2);a([R()],dt.prototype,"activeSlide",2);a([S("loop",{waitUntilFirstUpdate:!0}),S("slidesPerPage",{waitUntilFirstUpdate:!0})],dt.prototype,"initializeSlides",1);a([S("activeSlide")],dt.prototype,"handelSlideChange",1);a([S("slidesPerMove")],dt.prototype,"updateSlidesSnap",1);a([S("autoplay")],dt.prototype,"handleAutoplayChange",1);a([S("mouseDragging")],dt.prototype,"handleMouseDraggingChange",1);dt.define("sl-carousel");X.define("sl-button");Ie.define("sl-button-group");var zc=I`
  ${D}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Di=class extends T{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return k`
      <span
        part="base"
        class=${M({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Di.styles=zc;a([c({reflect:!0})],Di.prototype,"variant",2);a([c({type:Boolean,reflect:!0})],Di.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],Di.prototype,"pulse",2);Di.define("sl-badge");var Ac=I`
  ${D}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Pi=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const t=!!this.href;return k`
      <div
        part="base"
        class=${M({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?k`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${L(this.target?this.target:void 0)}"
                rel=${L(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:k`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Pi.styles=Ac;a([c()],Pi.prototype,"href",2);a([c()],Pi.prototype,"target",2);a([c()],Pi.prototype,"rel",2);Pi.define("sl-breadcrumb-item");var Ec=I`
  ${D}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ei=class extends T{constructor(){super(...arguments),this.localize=new j(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),k`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ei.styles=Ec;ei.dependencies={"sl-icon":G};a([A("slot")],ei.prototype,"defaultSlot",2);a([A('slot[name="separator"]')],ei.prototype,"separatorSlot",2);a([c()],ei.prototype,"label",2);ei.define("sl-breadcrumb");var Tc=I`
  ${D}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,te=class extends T{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=k`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=k``;return this.initials?e=k`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=k`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,k`
      <div
        part="base"
        class=${M({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};te.styles=Tc;te.dependencies={"sl-icon":G};a([R()],te.prototype,"hasError",2);a([c()],te.prototype,"image",2);a([c()],te.prototype,"label",2);a([c()],te.prototype,"initials",2);a([c()],te.prototype,"loading",2);a([c({reflect:!0})],te.prototype,"shape",2);a([S("image")],te.prototype,"handleImageChange",1);te.define("sl-avatar");var Lc=I`
  ${D}

  :host {
    display: contents;
  }
`;const Oc=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ic=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Dc=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Pc=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Mc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Uc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nc=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Hc=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],qc=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jc=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kc=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Wc=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xc=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Gc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Qc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Zc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Jc=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],td=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ed=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],id=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sd=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],od=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],rd=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],ad=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],nd=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],ld=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],cd=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],dd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hd=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ud=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pd=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],md=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gd=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bd=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vd=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yd=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_d=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wd=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xd=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],kd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Cd=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],$d=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Sd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],zd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Ad=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Ed=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Td=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ld=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Od=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Id=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Dd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Pd=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Md=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Rd=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Fd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Vd=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Bd=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ud=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nd=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Hd=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],qd=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jd=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Kd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wd=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xd=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Yd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Gd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Qd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Zd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Jd=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],th=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],eh=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ih=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sh=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],oh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],rh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],ah=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],nh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],lh=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ch=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],dh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],uh=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ph=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],mh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gh=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bh=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],vh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],_h=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],wh=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],qr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},xh=Object.freeze(Object.defineProperty({__proto__:null,easings:qr,bounce:Oc,flash:Ic,headShake:Dc,heartBeat:Pc,jello:Mc,pulse:Rc,rubberBand:Fc,shake:Vc,shakeX:Bc,shakeY:Uc,swing:Nc,tada:Hc,wobble:qc,backInDown:jc,backInLeft:Kc,backInRight:Wc,backInUp:Xc,backOutDown:Yc,backOutLeft:Gc,backOutRight:Qc,backOutUp:Zc,bounceIn:Jc,bounceInDown:td,bounceInLeft:ed,bounceInRight:id,bounceInUp:sd,bounceOut:od,bounceOutDown:rd,bounceOutLeft:ad,bounceOutRight:nd,bounceOutUp:ld,fadeIn:cd,fadeInBottomLeft:dd,fadeInBottomRight:hd,fadeInDown:ud,fadeInDownBig:pd,fadeInLeft:fd,fadeInLeftBig:md,fadeInRight:gd,fadeInRightBig:bd,fadeInTopLeft:vd,fadeInTopRight:yd,fadeInUp:_d,fadeInUpBig:wd,fadeOut:xd,fadeOutBottomLeft:kd,fadeOutBottomRight:Cd,fadeOutDown:$d,fadeOutDownBig:Sd,fadeOutLeft:zd,fadeOutLeftBig:Ad,fadeOutRight:Ed,fadeOutRightBig:Td,fadeOutTopLeft:Ld,fadeOutTopRight:Od,fadeOutUp:Id,fadeOutUpBig:Dd,flip:Pd,flipInX:Md,flipInY:Rd,flipOutX:Fd,flipOutY:Vd,lightSpeedInLeft:Bd,lightSpeedInRight:Ud,lightSpeedOutLeft:Nd,lightSpeedOutRight:Hd,rotateIn:qd,rotateInDownLeft:jd,rotateInDownRight:Kd,rotateInUpLeft:Wd,rotateInUpRight:Xd,rotateOut:Yd,rotateOutDownLeft:Gd,rotateOutDownRight:Qd,rotateOutUpLeft:Zd,rotateOutUpRight:Jd,slideInDown:th,slideInLeft:eh,slideInRight:ih,slideInUp:sh,slideOutDown:oh,slideOutLeft:rh,slideOutRight:ah,slideOutUp:nh,hinge:lh,jackInTheBox:ch,rollIn:dh,rollOut:hh,zoomIn:uh,zoomInDown:ph,zoomInLeft:fh,zoomInRight:mh,zoomInUp:gh,zoomOut:bh,zoomOutDown:vh,zoomOutLeft:yh,zoomOutRight:_h,zoomOutUp:wh},Symbol.toStringTag,{value:"Module"}));var bt=class extends T{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=qr[this.easing])!=null?t:this.easing,s=(e=this.keyframes)!=null?e:xh[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!s?!1:(this.destroyAnimation(),this.animation=r.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){!this.hasUpdated||this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return k` <slot @slotchange=${this.handleSlotChange}></slot> `}};bt.styles=Lc;a([Qa("slot")],bt.prototype,"defaultSlot",2);a([c()],bt.prototype,"name",2);a([c({type:Boolean,reflect:!0})],bt.prototype,"play",2);a([c({type:Number})],bt.prototype,"delay",2);a([c()],bt.prototype,"direction",2);a([c({type:Number})],bt.prototype,"duration",2);a([c()],bt.prototype,"easing",2);a([c({attribute:"end-delay",type:Number})],bt.prototype,"endDelay",2);a([c()],bt.prototype,"fill",2);a([c({type:Number})],bt.prototype,"iterations",2);a([c({attribute:"iteration-start",type:Number})],bt.prototype,"iterationStart",2);a([c({attribute:!1})],bt.prototype,"keyframes",2);a([c({attribute:"playback-rate",type:Number})],bt.prototype,"playbackRate",2);a([S(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],bt.prototype,"handleAnimationChange",1);a([S("play")],bt.prototype,"handlePlayChange",1);a([S("playbackRate")],bt.prototype,"handlePlaybackRateChange",1);bt.define("sl-animation");var kh=I`
  ${D}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Me=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),ee=class extends T{constructor(){super(...arguments),this.hasSlotController=new Ot(this,"icon","suffix"),this.localize=new j(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ct(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=et(this,"alert.show",{dir:this.localize.dir()});await rt(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ct(this.base);const{keyframes:t,options:e}=et(this,"alert.hide",{dir:this.localize.dir()});await rt(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ct(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Ct(this,"sl-after-hide")}async toast(){return new Promise(t=>{Me.parentElement===null&&document.body.append(Me),Me.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Me.removeChild(this),t(),Me.querySelector("sl-alert")===null&&Me.remove()},{once:!0})})}render(){return k`
      <div
        part="base"
        class=${M({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?k`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};ee.styles=kh;ee.dependencies={"sl-icon-button":ht};a([A('[part~="base"]')],ee.prototype,"base",2);a([c({type:Boolean,reflect:!0})],ee.prototype,"open",2);a([c({type:Boolean,reflect:!0})],ee.prototype,"closable",2);a([c({reflect:!0})],ee.prototype,"variant",2);a([c({type:Number})],ee.prototype,"duration",2);a([S("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1);a([S("duration")],ee.prototype,"handleDurationChange",1);W("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ee.define("sl-alert");var Ch=I`
  ${D}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Kt=class extends T{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return k`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?k`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Kt.styles=Ch;Kt.dependencies={"sl-icon":G};a([A(".animated-image__animated")],Kt.prototype,"animatedImage",2);a([R()],Kt.prototype,"frozenFrame",2);a([R()],Kt.prototype,"isLoaded",2);a([c()],Kt.prototype,"src",2);a([c()],Kt.prototype,"alt",2);a([c({type:Boolean,reflect:!0})],Kt.prototype,"play",2);a([S("play",{waitUntilFirstUpdate:!0})],Kt.prototype,"handlePlayChange",1);a([S("src")],Kt.prototype,"handleSrcChange",1);Kt.define("sl-animated-image");Ms("shoelace");ipc=ipc||function(){};new ya({target:document.body});
