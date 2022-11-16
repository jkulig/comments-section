(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function R(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function He(t){return t()}function xe(){return Object.create(null)}function re(t){t.forEach(He)}function Te(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let me;function ge(t,e){return me||(me=document.createElement("a")),me.href=e,t===me.href}function Ze(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return R;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function we(t,e,n){t.$$.on_destroy.push(et(e,n))}function tt(t,e,n,r){if(t){const s=Ve(t,e,n,r);return t[0](s)}}function Ve(t,e,n,r){return t[1]&&r?Q(n.ctx.slice(),t[1](r(e))):n.ctx}function nt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],l=Math.max(e.dirty.length,s.length);for(let o=0;o<l;o+=1)i[o]=e.dirty[o]|s[o];return i}return e.dirty|s}return e.dirty}function rt(t,e,n,r,s,i){if(s){const l=Ve(e,n,r,i);t.p(l,s)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function g(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function We(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function De(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function j(){return q(" ")}function ze(){return q("")}function oe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function be(t,e){t.value=e==null?"":e}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}let Ue;function le(t){Ue=t}const se=[],Se=[],_e=[],Be=[],lt=Promise.resolve();let Ie=!1;function ot(){Ie||(Ie=!0,lt.then(Ge))}function Ce(t){_e.push(t)}const ke=new Set;let de=0;function Ge(){const t=Ue;do{for(;de<se.length;){const e=se[de];de++,le(e),at(e.$$)}for(le(null),se.length=0,de=0;Se.length;)Se.pop()();for(let e=0;e<_e.length;e+=1){const n=_e[e];ke.has(n)||(ke.add(n),n())}_e.length=0}while(se.length);for(;Be.length;)Be.pop()();Ie=!1,ke.clear(),le(t)}function at(t){if(t.fragment!==null){t.update(),re(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ce)}}const pe=new Set;let J;function te(){J={r:0,c:[],p:J}}function ne(){J.r||re(J.c),J=J.p}function w(t,e){t&&t.i&&(pe.delete(t),t.i(e))}function v(t,e,n,r){if(t&&t.o){if(pe.has(t))return;pe.add(t),J.c.push(()=>{pe.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function O(t){t&&t.c()}function S(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:o}=t.$$;s&&s.m(e,n),r||Ce(()=>{const a=i.map(He).filter(Te);l?l.push(...a):re(a),t.$$.on_mount=[]}),o.forEach(Ce)}function B(t,e){const n=t.$$;n.fragment!==null&&(re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(se.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,r,s,i,l,o=[-1]){const a=Ue;le(t);const u=t.$$={fragment:null,ctx:null,props:i,update:R,not_equal:s,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:xe(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(c,d,...$)=>{const h=$.length?$[0]:d;return u.ctx&&s(u.ctx[c],u.ctx[c]=h)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](h),f&&ut(t,c)),d}):[],u.update(),f=!0,re(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const c=it(e.target);u.fragment&&u.fragment.l(c),c.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&w(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),Ge()}le(a)}class W{$destroy(){B(this,1),this.$destroy=R}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Ze(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const je="/comments-section/assets/icons.fedf29ef.svg";function ct(t){let e,n,r,s;return{c(){e=De("svg"),n=De("use"),m(n,"href",r=`${je}#${t[0]}`),m(e,"class",s=t[2].class),m(e,"focusable",t[1])},m(i,l){D(i,e,l),g(e,n)},p(i,[l]){l&1&&r!==(r=`${je}#${i[0]}`)&&m(n,"href",r),l&4&&s!==(s=i[2].class)&&m(e,"class",s),l&2&&m(e,"focusable",i[1])},i:R,o:R,d(i){i&&A(e)}}}function ft(t,e,n){let{name:r}=e,{focusable:s=!1}=e;return t.$$set=i=>{n(2,e=Q(Q({},e),ee(i))),"name"in i&&n(0,r=i.name),"focusable"in i&&n(1,s=i.focusable)},e=ee(e),[r,s,e]}class ae extends W{constructor(e){super(),V(this,e,ft,ct,H,{name:0,focusable:1})}}const Z=[];function Ye(t,e=R){let n;const r=new Set;function s(o){if(H(t,o)&&(t=o,n)){const a=!Z.length;for(const u of r)u[1](),Z.push(u,t);if(a){for(let u=0;u<Z.length;u+=2)Z[u][0](Z[u+1]);Z.length=0}}}function i(o){s(o(t))}function l(o,a=R){const u=[o,a];return r.add(u),r.size===1&&(n=e(s)||R),o(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:l}}const mt={image:{png:"./avatars/image-juliusomo.png",webp:"./avatars/image-juliusomo.webp"},username:"juliusomo"},dt=[{id:"5IaIVt",content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,voted:!1,user:{image:{png:"./avatars/image-amyrobson.png",webp:"./avatars/image-amyrobson.webp"},username:"amyrobson"},type:"parent",parentId:null,rt:null},{id:"UVLW7U",content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,voted:!1,user:{image:{png:"./avatars/image-maxblagun.png",webp:"./avatars/image-maxblagun.webp"},username:"maxblagun"},type:"parent",parentId:null,rt:null},{id:"jOMRHe",content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,voted:!1,user:{image:{png:"./avatars/image-ramsesmiron.png",webp:"./avatars/image-ramsesmiron.webp"},username:"ramsesmiron"},type:"child",parentId:"UVLW7U",rt:"maxblagun"},{id:"04Ahlt",content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:4,voted:!0,user:{image:{png:"./avatars/image-juliusomo.png",webp:"./avatars/image-juliusomo.webp"},username:"juliusomo"},type:"child",parentId:"UVLW7U",rt:"ramsesmiron"}],Ke={currentUser:mt,comments:dt};let ht=Ke.comments;function _t(){const{subscribe:t,update:e,set:n}=Ye([]);let r;t(d=>r=d);function s(d,$,h,U){let I=l($),b=d.filter(y=>y.id!==$);return I[h]=U,[...b,I].sort((y,G)=>G.score-y.score)}function i(){return n(ht)}function l(d){return r.filter($=>$.id===d)[0]}function o(d){let $=[];return r.forEach(h=>{h.parentId&&h.parentId===d&&$.push(h.id)}),$}function a(d,$){return l(d)[this.props.first]}function u(d){return e($=>[...$,d])}function f(d){return e($=>$.filter(h=>h.id!==d))}function c(d,$,h){return e(U=>s(U,d,$,h))}return{subscribe:t,initComments:i,getComment:l,addComment:u,deleteComment:f,updateComment:c,getReplies:o,getCommentProp:a}}function pt(){const{subscribe:t,set:e}=Ye(null);function n(s,i){return e({type:s,commentId:i})}function r(){return e(null)}return{subscribe:t,setAction:n,reset:r}}const P=_t(),z=pt();function gt(t){let e,n,r,s,i,l,o=t[0].score+"",a,u,f,c,d,$,h,U,I;return s=new ae({props:{name:"plus",class:"w-3 h-3"}}),d=new ae({props:{name:"minus",class:"w-3 h-3"}}),{c(){e=k("div"),n=k("div"),r=k("button"),O(s.$$.fragment),i=j(),l=k("span"),a=q(o),f=j(),c=k("button"),O(d.$$.fragment),m(r,"class","text-blue-600 font-bold p-4"),m(l,"class",u=t[0].score<0?"text-center font-medium bg-gray-600 text-red-200":"text-center font-medium bg-gray-600 text-blue-300"),m(c,"class","text-blue-600 font-bold p-4"),m(n,"class","inline-flex sm:flex-col sm:w-12 items-center bg-gray-600 rounded-lg font-medium"),m(e,"class",$=t[3].class)},m(b,y){D(b,e,y),g(e,n),g(n,r),S(s,r,null),g(n,i),g(n,l),g(l,a),g(n,f),g(n,c),S(d,c,null),h=!0,U||(I=[oe(r,"click",t[1]),oe(c,"click",t[2])],U=!0)},p(b,[y]){(!h||y&1)&&o!==(o=b[0].score+"")&&ie(a,o),(!h||y&1&&u!==(u=b[0].score<0?"text-center font-medium bg-gray-600 text-red-200":"text-center font-medium bg-gray-600 text-blue-300"))&&m(l,"class",u),(!h||y&8&&$!==($=b[3].class))&&m(e,"class",$)},i(b){h||(w(s.$$.fragment,b),w(d.$$.fragment,b),h=!0)},o(b){v(s.$$.fragment,b),v(d.$$.fragment,b),h=!1},d(b){b&&A(e),B(s),B(d),U=!1,re(I)}}}function bt(t,e,n){let{comment:r}=e;function s(){r.voted||(n(0,r.score+=1,r),P.updateComment(r.id,"score",r.score),P.updateComment(r.id,"voted",!0))}function i(){r.voted||(n(0,r.score-=1,r),P.updateComment(r.id,"score",r.score),P.updateComment(r.id,"voted",!0))}return t.$$set=l=>{n(3,e=Q(Q({},e),ee(l))),"comment"in l&&n(0,r=l.comment)},e=ee(e),[r,s,i,e]}class wt extends W{constructor(e){super(),V(this,e,bt,gt,H,{comment:0})}}function yt(t){let e,n,r,s,i;const l=t[4].default,o=tt(l,t,t[3],null);return{c(){e=k("button"),o&&o.c(),m(e,"class",n=t[1]+" font-medium flex items-center transition-colors")},m(a,u){D(a,e,u),o&&o.m(e,null),r=!0,s||(i=oe(e,"click",function(){Te(t[0])&&t[0].apply(this,arguments)}),s=!0)},p(a,[u]){t=a,o&&o.p&&(!r||u&8)&&rt(o,l,t,t[3],r?nt(l,t[3],u,null):st(t[3]),null),(!r||u&2&&n!==(n=t[1]+" font-medium flex items-center transition-colors"))&&m(e,"class",n)},i(a){r||(w(o,a),r=!0)},o(a){v(o,a),r=!1},d(a){a&&A(e),o&&o.d(a),s=!1,i()}}}function vt(t,e,n){let{$$slots:r={},$$scope:s}=e,{type:i}=e,{clickHandler:l}=e,o;switch(i){case"primary":o="px-8 py-3 ml-auto bg-blue-300 hover:bg-blue-600 text-white uppercase rounded-md";break;case"link":o="text-blue-300 hover:text-blue-600";break;case"delete":o="px-8 py-3 text-white bg-red-200 hover:bg-red-600 uppercase rounded-md";case"link-delete":o="text-red-200 hover:text-red-600";break;default:o="px-8 py-3 ml-auto bg-blue-300 hover:bg-blue-600 text-white rounded-md";break}return t.$$set=a=>{"type"in a&&n(2,i=a.type),"clickHandler"in a&&n(0,l=a.clickHandler),"$$scope"in a&&n(3,s=a.$$scope)},[l,o,i,s,r]}class ue extends W{constructor(e){super(),V(this,e,vt,yt,H,{type:2,clickHandler:0})}}function $t(t){let e,n;return e=new ue({props:{type:"link",clickHandler:t[2],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const i={};s&64&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){v(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function kt(t){let e,n,r,s,i;return n=new ue({props:{type:"link-delete",clickHandler:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}),s=new ue({props:{type:"link",clickHandler:t[4],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){e=k("div"),O(n.$$.fragment),r=j(),O(s.$$.fragment),m(e,"class","flex space-x-4")},m(l,o){D(l,e,o),S(n,e,null),g(e,r),S(s,e,null),i=!0},p(l,o){const a={};o&64&&(a.$$scope={dirty:o,ctx:l}),n.$set(a);const u={};o&64&&(u.$$scope={dirty:o,ctx:l}),s.$set(u)},i(l){i||(w(n.$$.fragment,l),w(s.$$.fragment,l),i=!0)},o(l){v(n.$$.fragment,l),v(s.$$.fragment,l),i=!1},d(l){l&&A(e),B(n),B(s)}}}function It(t){let e,n,r;return e=new ae({props:{name:"reply",class:"w-3.5 h-3.5 inline-block mr-1.5"}}),{c(){O(e.$$.fragment),n=q("Reply")},m(s,i){S(e,s,i),D(s,n,i),r=!0},p:R,i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),r=!1},d(s){B(e,s),s&&A(n)}}}function Ct(t){let e,n,r;return e=new ae({props:{name:"delete",class:"w-3.5 h-3.5 inline-block mr-1.5"}}),{c(){O(e.$$.fragment),n=q("Delete")},m(s,i){S(e,s,i),D(s,n,i),r=!0},p:R,i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),r=!1},d(s){B(e,s),s&&A(n)}}}function Ut(t){let e,n,r;return e=new ae({props:{name:"edit",class:"w-3.5 h-3.5 inline-block mr-1.5"}}),{c(){O(e.$$.fragment),n=q("Edit")},m(s,i){S(e,s,i),D(s,n,i),r=!0},p:R,i(s){r||(w(e.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),r=!1},d(s){B(e,s),s&&A(n)}}}function Lt(t){let e,n,r,s,i;const l=[kt,$t],o=[];function a(u,f){return u[1].username===u[0].user.username?0:1}return n=a(t),r=o[n]=l[n](t),{c(){e=k("div"),r.c(),m(e,"class",s=t[5].class)},m(u,f){D(u,e,f),o[n].m(e,null),i=!0},p(u,[f]){let c=n;n=a(u),n===c?o[n].p(u,f):(te(),v(o[c],1,1,()=>{o[c]=null}),ne(),r=o[n],r?r.p(u,f):(r=o[n]=l[n](u),r.c()),w(r,1),r.m(e,null)),(!i||f&32&&s!==(s=u[5].class))&&m(e,"class",s)},i(u){i||(w(r),i=!0)},o(u){v(r),i=!1},d(u){u&&A(e),o[n].d()}}}function At(t,e,n){let{comment:r}=e,{user:s}=e;function i(){z.setAction("replying",r.id)}function l(){P.deleteComment(r.id)}function o(){z.setAction("editing",r.id)}return t.$$set=a=>{n(5,e=Q(Q({},e),ee(a))),"comment"in a&&n(0,r=a.comment),"user"in a&&n(1,s=a.user)},e=ee(e),[r,s,i,l,o,e]}class xt extends W{constructor(e){super(),V(this,e,At,Lt,H,{comment:0,user:1})}}function Dt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Je={exports:{}};(function(t){var e=(()=>{var n=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(I,b,y)=>b in I?n(I,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):I[b]=y,o=(I,b)=>{for(var y in b||(b={}))s.call(b,y)&&l(I,y,b[y]);if(r)for(var y of r(b))i.call(b,y)&&l(I,y,b[y]);return I},a=I=>n(I,"__esModule",{value:!0}),u=(I,b)=>{a(I);for(var y in b)n(I,y,{get:b[y],enumerable:!0})},f={};u(f,{DEFAULT_UUID_LENGTH:()=>d,default:()=>U});var c="4.4.4",d=6,$={dictionary:"alphanum",shuffle:!0,debug:!1,length:d},h=class extends Function{constructor(I={}){super(),this.dictIndex=0,this.dictRange=[],this.lowerBound=0,this.upperBound=0,this.dictLength=0,this._digit_first_ascii=48,this._digit_last_ascii=58,this._alpha_lower_first_ascii=97,this._alpha_lower_last_ascii=123,this._hex_last_ascii=103,this._alpha_upper_first_ascii=65,this._alpha_upper_last_ascii=91,this._number_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii]},this._alpha_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alpha_lower_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alpha_upper_dict_ranges={upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._alphanum_lower_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]},this._alphanum_upper_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]},this._hex_dict_ranges={decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]},this.log=(..._)=>{const C=[..._];if(C[0]=`[short-unique-id] ${_[0]}`,this.debug===!0&&typeof console<"u"&&console!==null)return console.log(...C)},this.setDictionary=(_,C)=>{let x;if(_&&Array.isArray(_)&&_.length>1)x=_;else{x=[];let L;this.dictIndex=L=0;const Y=`_${_}_dict_ranges`,F=this[Y];Object.keys(F).forEach(ce=>{const T=ce;for(this.dictRange=F[T],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=L=this.lowerBound;this.lowerBound<=this.upperBound?L<this.upperBound:L>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?L+=1:L-=1)x.push(String.fromCharCode(this.dictIndex))})}C&&(x=x.sort(()=>Math.random()-.5)),this.dict=x,this.dictLength=this.dict.length,this.counter=0},this.seq=()=>this.sequentialUUID(),this.sequentialUUID=()=>{let _,C,x="";_=this.counter;do C=_%this.dictLength,_=Math.trunc(_/this.dictLength),x+=this.dict[C];while(_!==0);return this.counter+=1,x},this.randomUUID=(_=this.uuidLength||d)=>{let C,x,L;if(_===null||typeof _>"u"||_<1)throw new Error("Invalid UUID Length Provided");for(C="",L=0;L<_;L+=1)x=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,C+=this.dict[x];return C},this.availableUUIDs=(_=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,_).toFixed(0)),this.approxMaxBeforeCollision=(_=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*_).toFixed(20)),this.collisionProbability=(_=this.availableUUIDs(this.uuidLength),C=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(_)/this.availableUUIDs(C)).toFixed(20)),this.uniqueness=(_=this.availableUUIDs(this.uuidLength))=>{const C=parseFloat((1-this.approxMaxBeforeCollision(_)/_).toFixed(20));return C>1?1:C<0?0:C},this.getVersion=()=>this.version,this.stamp=_=>{if(typeof _!="number"||_<10)throw new Error("Param finalLength must be number greater than 10");const C=Math.floor(+new Date/1e3).toString(16),x=_-9,L=Math.round(Math.random()*(x>15?15:x)),Y=this.randomUUID(x);return`${Y.substr(0,L)}${C}${Y.substr(L)}${L.toString(16)}`},this.parseStamp=_=>{if(_.length<10)throw new Error("Stamp length invalid");const C=parseInt(_.substr(_.length-1,1),16);return new Date(parseInt(_.substr(C,8),16)*1e3)};const b=o(o({},$),I);this.counter=0,this.debug=!1,this.dict=[],this.version=c;const{dictionary:y,shuffle:G,length:X}=b;return this.uuidLength=X,this.setDictionary(y,G),this.debug=b.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`),new Proxy(this,{apply:(_,C,x)=>this.randomUUID(...x)})}},U=h;return U.default=h,f})();t.exports=e.default,typeof window<"u"&&(e=e.default)})(Je);const Et=Dt(Je.exports);function St(t){let e;return{c(){e=q("Send")},m(n,r){D(n,e,r)},d(n){n&&A(e)}}}function Bt(t){let e,n,r,s,i,l,o,a,u,f,c,d,$;return u=new ue({props:{type:"primary",clickHandler:t[3],$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){e=k("div"),n=k("textarea"),r=j(),s=k("img"),o=j(),a=k("span"),O(u.$$.fragment),m(n,"class","w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none"),m(n,"placeholder","Add a comment..."),m(s,"class","block w-8 h-8 sm:w-10 sm:h-10 sm:order-1"),ge(s.src,i=t[1].image.webp)||m(s,"src",i),m(s,"alt",l=t[1].username),m(s,"width","50"),m(s,"height","50"),m(a,"class","sm:order-3"),m(e,"class",f=(t[0]||"hidden")+" flex flex-wrap sm:flex-nowrap justify-between items-center sm:items-start sm:gap-4 p-4 sm:p-6 bg-white rounded-lg")},m(h,U){D(h,e,U),g(e,n),be(n,t[2]),g(e,r),g(e,s),g(e,o),g(e,a),S(u,a,null),c=!0,d||($=oe(n,"input",t[4]),d=!0)},p(h,[U]){U&4&&be(n,h[2]),(!c||U&2&&!ge(s.src,i=h[1].image.webp))&&m(s,"src",i),(!c||U&2&&l!==(l=h[1].username))&&m(s,"alt",l);const I={};U&256&&(I.$$scope={dirty:U,ctx:h}),u.$set(I),(!c||U&1&&f!==(f=(h[0]||"hidden")+" flex flex-wrap sm:flex-nowrap justify-between items-center sm:items-start sm:gap-4 p-4 sm:p-6 bg-white rounded-lg"))&&m(e,"class",f)},i(h){c||(w(u.$$.fragment,h),c=!0)},o(h){v(u.$$.fragment,h),c=!1},d(h){h&&A(e),B(u),d=!1,$()}}}function jt(t,e,n){let r;we(t,z,c=>n(5,r=c));let{show:s}=e,{user:i}=e,l;function o(){return new Et()()}function a(){return r&&r.type==="replying"}function u(){if(!l){z.reset();return}let c=null;a()&&(c=P.getComment(r.commentId).user.username),P.addComment({id:o(),content:l,createdAt:"now",score:0,voted:!0,user:{image:{webp:i.image.webp},username:i.username},type:a()?"child":"parent",parentId:a()?r.commentId:null,rt:c||null}),n(2,l=""),z.reset()}function f(){l=this.value,n(2,l)}return t.$$set=c=>{"show"in c&&n(0,s=c.show),"user"in c&&n(1,i=c.user)},[s,i,l,u,f]}class Qe extends W{constructor(e){super(),V(this,e,jt,Bt,H,{show:0,user:1})}}function Ot(t){let e;return{c(){e=q("Update")},m(n,r){D(n,e,r)},d(n){n&&A(e)}}}function Pt(t){let e,n,r,s,i,l,o,a,u;return i=new ue({props:{type:"primary",clickHandler:t[3],$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){e=k("div"),n=k("textarea"),r=j(),s=k("span"),O(i.$$.fragment),m(n,"class","w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none"),m(s,"class","sm:order-3"),m(e,"class",l=(t[2]&&t[2].type==="editing"&&t[2].commentId===t[0].id?"":"hidden")+" flex flex-wrap")},m(f,c){D(f,e,c),g(e,n),be(n,t[1]),g(e,r),g(e,s),S(i,s,null),o=!0,a||(u=oe(n,"input",t[4]),a=!0)},p(f,[c]){c&2&&be(n,f[1]);const d={};c&64&&(d.$$scope={dirty:c,ctx:f}),i.$set(d),(!o||c&5&&l!==(l=(f[2]&&f[2].type==="editing"&&f[2].commentId===f[0].id?"":"hidden")+" flex flex-wrap"))&&m(e,"class",l)},i(f){o||(w(i.$$.fragment,f),o=!0)},o(f){v(i.$$.fragment,f),o=!1},d(f){f&&A(e),B(i),a=!1,u()}}}function Mt(t,e,n){let r,s;we(t,z,u=>n(2,s=u));let{comment:i}=e,l=i.content;function o(){P.updateComment(i.id,"content",r),z.reset()}function a(){r=this.value,n(1,r),n(5,l)}return t.$$set=u=>{"comment"in u&&n(0,i=u.comment)},n(1,r=l),[i,r,s,o,a]}class Rt extends W{constructor(e){super(),V(this,e,Mt,Pt,H,{comment:0})}}function Oe(t){let e,n,r=t[0].rt+"",s;return{c(){e=k("span"),n=q("@"),s=q(r),m(e,"class","font-medium text-blue-300")},m(i,l){D(i,e,l),g(e,n),g(e,s)},p(i,l){l&1&&r!==(r=i[0].rt+"")&&ie(s,r)},d(i){i&&A(e)}}}function qt(t){let e,n,r,s,i,l,o,a,u=t[0].user.username+"",f,c,d,$,h,U=t[0].createdAt+"",I,b,y,G,X=t[0].content+"",_,C,x,L,Y,F,ce,T,fe,ye,K,N,M=t[1]&&Oe(t);return L=new Rt({props:{comment:t[0]}}),F=new wt({props:{class:"inline-block order-2 sm:mr-6",comment:t[0]}}),T=new xt({props:{class:"flex justify-end order-3 sm:order-1 sm:absolute -mt-8 mb-2 sm:mt-0.5 sm:top-6 sm:right-6",comment:t[0],user:t[2]}}),K=new Qe({props:{show:t[3]&&t[3].type==="replying"&&t[3].commentId===t[0].id,user:t[2]}}),{c(){e=k("article"),n=k("div"),r=k("div"),s=k("img"),o=j(),a=k("strong"),f=q(u),c=j(),d=k("span"),d.textContent="you",$=j(),h=k("span"),I=q(U),b=j(),y=k("p"),M&&M.c(),G=j(),_=q(X),x=j(),O(L.$$.fragment),Y=j(),O(F.$$.fragment),ce=j(),O(T.$$.fragment),ye=j(),O(K.$$.fragment),m(s,"class","block mr-4"),ge(s.src,i=t[0].user.image.webp)||m(s,"src",i),m(s,"alt",l=t[0].user.username),m(s,"width","30"),m(s,"height","30"),m(a,"class","font-medium text-gray-100"),m(d,"class","inline-block px-1.5 leading-5 text-xs text-white bg-blue-300 ml-2"),Ee(d,"hidden",t[0].user.username!==t[2].username),m(h,"class","text-gray-200 mr-auto ml-4"),m(r,"class","flex items-center mb-4 justify-stretch"),m(y,"class",C="text-gray-200 mb-4 "+(t[3]&&t[3].type==="editing"&&t[3].commentId===t[0].id?"hidden":"")),m(n,"class","w-full order-1 sm:order-3"),m(e,"class",fe=t[1]?`${he} ml-4`:he)},m(p,E){D(p,e,E),g(e,n),g(n,r),g(r,s),g(r,o),g(r,a),g(a,f),g(r,c),g(r,d),g(r,$),g(r,h),g(h,I),g(n,b),g(n,y),M&&M.m(y,null),g(y,G),g(y,_),g(n,x),S(L,n,null),g(e,Y),S(F,e,null),g(e,ce),S(T,e,null),D(p,ye,E),S(K,p,E),N=!0},p(p,[E]){(!N||E&1&&!ge(s.src,i=p[0].user.image.webp))&&m(s,"src",i),(!N||E&1&&l!==(l=p[0].user.username))&&m(s,"alt",l),(!N||E&1)&&u!==(u=p[0].user.username+"")&&ie(f,u),E&5&&Ee(d,"hidden",p[0].user.username!==p[2].username),(!N||E&1)&&U!==(U=p[0].createdAt+"")&&ie(I,U),p[1]?M?M.p(p,E):(M=Oe(p),M.c(),M.m(y,G)):M&&(M.d(1),M=null),(!N||E&1)&&X!==(X=p[0].content+"")&&ie(_,X),(!N||E&9&&C!==(C="text-gray-200 mb-4 "+(p[3]&&p[3].type==="editing"&&p[3].commentId===p[0].id?"hidden":"")))&&m(y,"class",C);const Le={};E&1&&(Le.comment=p[0]),L.$set(Le);const Ae={};E&1&&(Ae.comment=p[0]),F.$set(Ae);const ve={};E&1&&(ve.comment=p[0]),E&4&&(ve.user=p[2]),T.$set(ve),(!N||E&2&&fe!==(fe=p[1]?`${he} ml-4`:he))&&m(e,"class",fe);const $e={};E&9&&($e.show=p[3]&&p[3].type==="replying"&&p[3].commentId===p[0].id),E&4&&($e.user=p[2]),K.$set($e)},i(p){N||(w(L.$$.fragment,p),w(F.$$.fragment,p),w(T.$$.fragment,p),w(K.$$.fragment,p),N=!0)},o(p){v(L.$$.fragment,p),v(F.$$.fragment,p),v(T.$$.fragment,p),v(K.$$.fragment,p),N=!1},d(p){p&&A(e),M&&M.d(),B(L),B(F),B(T),p&&A(ye),B(K,p)}}}const he="relative p-4 sm:p-6 bg-white rounded-lg flex flex-col sm:flex-row";function Nt(t,e,n){let r;we(t,z,o=>n(3,r=o));let{comment:s}=e,{reply:i}=e,{user:l}=e;return t.$$set=o=>{"comment"in o&&n(0,s=o.comment),"reply"in o&&n(1,i=o.reply),"user"in o&&n(2,l=o.user)},[s,i,l,r]}class Xe extends W{constructor(e){super(),V(this,e,Nt,qt,H,{comment:0,reply:1,user:2})}}function Pe(t,e,n){const r=t.slice();return r[2]=e[n],r}function Me(t){let e,n;return e=new Xe({props:{comment:t[0],user:t[1],reply:!1}}),{c(){O(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=r[0]),s&2&&(i.user=r[1]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){v(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function Re(t){let e,n,r,s,i,l=P.getReplies(t[0].id),o=[];for(let u=0;u<l.length;u+=1)o[u]=qe(Pe(t,l,u));const a=u=>v(o[u],1,1,()=>{o[u]=null});return{c(){e=k("div"),n=k("div"),n.innerHTML='<span class="block border-r-2 border-gray-500 h-auto"></span>',r=j(),s=k("div");for(let u=0;u<o.length;u+=1)o[u].c();m(n,"class","flex justify-center sm:pl-10 sm:pr-8"),m(s,"class","flex flex-col w-full space-y-4"),m(e,"class","flex")},m(u,f){D(u,e,f),g(e,n),g(e,r),g(e,s);for(let c=0;c<o.length;c+=1)o[c].m(s,null);i=!0},p(u,f){if(f&3){l=P.getReplies(u[0].id);let c;for(c=0;c<l.length;c+=1){const d=Pe(u,l,c);o[c]?(o[c].p(d,f),w(o[c],1)):(o[c]=qe(d),o[c].c(),w(o[c],1),o[c].m(s,null))}for(te(),c=l.length;c<o.length;c+=1)a(c);ne()}},i(u){if(!i){for(let f=0;f<l.length;f+=1)w(o[f]);i=!0}},o(u){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)v(o[f]);i=!1},d(u){u&&A(e),We(o,u)}}}function qe(t){let e,n;return e=new Xe({props:{comment:P.getComment(t[2]),user:t[1],reply:!0}}),{c(){O(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=P.getComment(r[2])),s&2&&(i.user=r[1]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){v(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function Ft(t){let e,n=P.getReplies(t[0].id).length,r,s,i=t[0].type==="parent"&&Me(t),l=n&&Re(t);return{c(){i&&i.c(),e=j(),l&&l.c(),r=ze()},m(o,a){i&&i.m(o,a),D(o,e,a),l&&l.m(o,a),D(o,r,a),s=!0},p(o,[a]){o[0].type==="parent"?i?(i.p(o,a),a&1&&w(i,1)):(i=Me(o),i.c(),w(i,1),i.m(e.parentNode,e)):i&&(te(),v(i,1,1,()=>{i=null}),ne()),a&1&&(n=P.getReplies(o[0].id).length),n?l?(l.p(o,a),a&1&&w(l,1)):(l=Re(o),l.c(),w(l,1),l.m(r.parentNode,r)):l&&(te(),v(l,1,1,()=>{l=null}),ne())},i(o){s||(w(i),w(l),s=!0)},o(o){v(i),v(l),s=!1},d(o){i&&i.d(o),o&&A(e),l&&l.d(o),o&&A(r)}}}function Ht(t,e,n){let{comment:r}=e,{user:s}=e;return t.$$set=i=>{"comment"in i&&n(0,r=i.comment),"user"in i&&n(1,s=i.user)},[r,s]}class Tt extends W{constructor(e){super(),V(this,e,Ht,Ft,H,{comment:0,user:1})}}function Ne(t,e,n){const r=t.slice();return r[2]=e[n],r}function Vt(t){let e,n,r=t[0],s=[];for(let l=0;l<r.length;l+=1)s[l]=Fe(Ne(t,r,l));const i=l=>v(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ze()},m(l,o){for(let a=0;a<s.length;a+=1)s[a].m(l,o);D(l,e,o),n=!0},p(l,o){if(o&3){r=l[0];let a;for(a=0;a<r.length;a+=1){const u=Ne(l,r,a);s[a]?(s[a].p(u,o),w(s[a],1)):(s[a]=Fe(u),s[a].c(),w(s[a],1),s[a].m(e.parentNode,e))}for(te(),a=r.length;a<s.length;a+=1)i(a);ne()}},i(l){if(!n){for(let o=0;o<r.length;o+=1)w(s[o]);n=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)v(s[o]);n=!1},d(l){We(s,l),l&&A(e)}}}function Wt(t){let e;return{c(){e=k("p"),e.textContent="No comments available"},m(n,r){D(n,e,r)},p:R,i:R,o:R,d(n){n&&A(e)}}}function Fe(t){let e,n;return e=new Tt({props:{comment:t[2],user:t[1]}}),{c(){O(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.comment=r[2]),e.$set(i)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){v(e.$$.fragment,r),n=!1},d(r){B(e,r)}}}function zt(t){let e,n,r,s,i,l;const o=[Wt,Vt],a=[];function u(f,c){return f[0].length?1:0}return n=u(t),r=a[n]=o[n](t),i=new Qe({props:{show:!0,user:t[1]}}),{c(){e=k("main"),r.c(),s=j(),O(i.$$.fragment),m(e,"class","py-6 sm:py-16 px-4 mx-auto max-w-3xl flex flex-col space-y-4")},m(f,c){D(f,e,c),a[n].m(e,null),g(e,s),S(i,e,null),l=!0},p(f,[c]){let d=n;n=u(f),n===d?a[n].p(f,c):(te(),v(a[d],1,1,()=>{a[d]=null}),ne(),r=a[n],r?r.p(f,c):(r=a[n]=o[n](f),r.c()),w(r,1),r.m(e,s))},i(f){l||(w(r),w(i.$$.fragment,f),l=!0)},o(f){v(r),v(i.$$.fragment,f),l=!1},d(f){f&&A(e),a[n].d(),B(i)}}}function Gt(t,e,n){let r;we(t,P,i=>n(0,r=i));let s=Ke.currentUser;return P.initComments(),[r,s]}class Yt extends W{constructor(e){super(),V(this,e,Gt,zt,H,{})}}new Yt({target:document.getElementById("app")});