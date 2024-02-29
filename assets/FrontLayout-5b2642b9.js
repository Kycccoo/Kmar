import{p as I,m as j,a as G,g as P,u as L,c as l,b as X,d as Z,e as ee,f as te,h as ae,t as F,i as le,j as oe,k as ne,l as se,n as re,s as x,o as d,q as ue,V as ie,r as D,v as A,w as ce,x as U,y as de,z as R,A as ve,B as me,C as ge,D as fe,E as he,F as be,G as M,H as pe,I as ye,J as H,_ as Ve,K as xe,L as _e,M as ke,N as Se,O as Te,P as f,Q as k,R as S,S as c,T as C,U as T,W as $,X as z,Y as q,Z as E,$ as Be,a0 as we,a1 as Ce}from"./index-f2881c5d.js";import{V as Ie,a as Pe}from"./VNavigationDrawer-5aecbebc.js";import{u as Le,V as K,a as O,b as Ne}from"./VList-67f02c40.js";import{V as Ae}from"./VContainer-fa2d8934.js";import"./VDivider-7b793010.js";const J=I({text:String,...j(),...G()},"VToolbarTitle"),Q=P()({name:"VToolbarTitle",props:J(),setup(e,v){let{slots:t}=v;return L(()=>{const m=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[m&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Re=[null,"prominent","default","comfortable","compact"],W=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Re.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...X(),...j(),...Z(),...ee(),...G({tag:"header"}),...te()},"VToolbar"),Y=P()({name:"VToolbar",props:W(),setup(e,v){var a;let{slots:t}=v;const{backgroundColorClasses:m,backgroundColorStyles:o}=ae(F(e,"color")),{borderClasses:n}=le(e),{elevationClasses:h}=oe(e),{roundedClasses:g}=ne(e),{themeClasses:b}=se(e),{rtlClasses:p}=re(),r=x(!!(e.extended||(a=t.extension)!=null&&a.call(t))),i=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=d(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ue({VBtn:{variant:"text"}}),L(()=>{var s;const y=!!(e.title||t.title),_=!!(t.image||e.image),N=(s=t.extension)==null?void 0:s.call(t);return r.value=!!(e.extended||N),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},m.value,n.value,h.value,g.value,b.value,p.value,e.class],style:[o.value,e.style]},{default:()=>[_&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ie,{key:"image-img",cover:!0,src:e.image},null)]),l(D,{defaults:{VTabs:{height:A(i.value)}}},{default:()=>{var V,B,w;return[l("div",{class:"v-toolbar__content",style:{height:A(i.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),y&&l(Q,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(w=t.append)==null?void 0:w.call(t)])])]}}),l(D,{defaults:{VTabs:{height:A(u.value)}}},{default:()=>[l(ce,null,{default:()=>[r.value&&l("div",{class:"v-toolbar__extension",style:{height:A(u.value)}},[N])]})]})]})}),{contentHeight:i,extensionHeight:u}}}),Ee=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function He(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=v;let m=0;const o=U(null),n=x(0),h=x(0),g=x(0),b=x(!1),p=x(!1),r=d(()=>Number(e.scrollThreshold)),i=d(()=>de((r.value-n.value)/r.value||0)),u=()=>{const a=o.value;!a||t&&!t.value||(m=n.value,n.value="window"in a?a.pageYOffset:a.scrollTop,p.value=n.value<m,g.value=Math.abs(n.value-r.value))};return R(p,()=>{h.value=h.value||n.value}),R(b,()=>{h.value=0}),ve(()=>{R(()=>e.scrollTarget,a=>{var _;const y=a?document.querySelector(a):window;y&&y!==o.value&&((_=o.value)==null||_.removeEventListener("scroll",u),o.value=y,o.value.addEventListener("scroll",u,{passive:!0}))},{immediate:!0})}),me(()=>{var a;(a=o.value)==null||a.removeEventListener("scroll",u)}),t&&R(t,u,{immediate:!0}),{scrollThreshold:r,currentScroll:n,currentThreshold:g,isScrollActive:b,scrollRatio:i,isScrollingUp:p,savedScroll:h}}const De=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...W(),...ge(),...Ee(),height:{type:[Number,String],default:64}},"VAppBar"),Fe=P()({name:"VAppBar",props:De(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const m=U(),o=fe(e,"modelValue"),n=d(()=>{var V;const s=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:s.has("hide"),inverted:s.has("inverted"),collapse:s.has("collapse"),elevate:s.has("elevate"),fadeImage:s.has("fade-image")}}),h=d(()=>{const s=n.value;return s.hide||s.inverted||s.collapse||s.elevate||s.fadeImage||!o.value}),{currentScroll:g,scrollThreshold:b,isScrollingUp:p,scrollRatio:r}=He(e,{canScroll:h}),i=d(()=>e.collapse||n.value.collapse&&(n.value.inverted?r.value>0:r.value===0)),u=d(()=>e.flat||n.value.elevate&&(n.value.inverted?g.value>0:g.value===0)),a=d(()=>n.value.fadeImage?n.value.inverted?1-r.value:r.value:void 0),y=d(()=>{var B,w;if(n.value.hide&&n.value.inverted)return 0;const s=((B=m.value)==null?void 0:B.contentHeight)??0,V=((w=m.value)==null?void 0:w.extensionHeight)??0;return s+V});he(d(()=>!!e.scrollBehavior),()=>{pe(()=>{n.value.hide?n.value.inverted?o.value=g.value>b.value:o.value=p.value||g.value<b.value:o.value=!0})});const{ssrBootStyles:_}=Le(),{layoutItemStyles:N}=be({id:e.name,order:d(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:y,elementSize:x(void 0),active:o,absolute:F(e,"absolute")});return L(()=>{const s=Y.filterProps(e);return l(Y,M({ref:m,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...N.value,"--v-toolbar-image-opacity":a.value,height:void 0,..._.value},e.style]},s,{collapse:i.value,flat:u.value}),t)}),{}}}),Ue=I({...ye({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Me=P()({name:"VAppBarNavIcon",props:Ue(),setup(e,v){let{slots:t}=v;return L(()=>l(H,M(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),$e=P()({name:"VAppBarTitle",props:J(),setup(e,v){let{slots:t}=v;return L(()=>l(Q,M(e,{class:"v-app-bar-title"}),t)),{}}});const ze={__name:"FrontLayout",setup(e){const{apiAuth:v}=Ce(),t=xe(),m=_e(),o=ke(),{mobile:n}=Se(),h=d(()=>n.value),g=U(!1),b=d(()=>[{to:"/im",text:"關於我們",icon:"mdi-information",show:!0},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!o.isLogin},{to:"/login",text:"登入",icon:"mdi-login",show:!o.isLogin},{to:"/admin",text:"書籤",icon:"mdi-bookmark-multiple",show:o.isLogin}]),p=async()=>{var r,i;try{await v.delete("/users/logout"),o.logout(),m({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),t.push("/")}catch(u){console.log(u);const a=((i=(r=u==null?void 0:u.response)==null?void 0:r.data)==null?void 0:i.message)||"發生錯誤，請稍後再試";m({text:a,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(r,i)=>{const u=Te("RouterView");return f(),k(T,null,[h.value?(f(),S(Ie,{key:0,class:"my-text-color",modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=a=>g.value=a),temporary:"",location:"left"},{default:c(()=>[l(Ne,{nav:""},{default:c(()=>[(f(!0),k(T,null,$(b.value,a=>(f(),k(T,{key:a.to},[a.show?(f(),S(K,{key:0,to:a.to},{prepend:c(()=>[l(q,{icon:a.icon},null,8,["icon"])]),default:c(()=>[l(O,null,{default:c(()=>[E(we(a.text),1)]),_:2},1024)]),_:2},1032,["to"])):C("",!0)],64))),128)),z(o).isLogin?(f(),S(K,{key:0,onClick:p},{prepend:c(()=>[l(q,{icon:"mdi-logout"})]),default:c(()=>[l(O,null,{default:c(()=>[E("登出")]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1},8,["modelValue"])):C("",!0),l(Fe,{color:"#f5f5f7",class:"box",elevation:0},{default:c(()=>[l(Ae,{class:"d-flex align-center my-text-color"},{default:c(()=>[l(H,{to:"/",active:!1},{default:c(()=>[l($e,null,{default:c(()=>[E("Kmar")]),_:1})]),_:1}),l(Be),h.value?(f(),S(Me,{key:0,onClick:i[1]||(i[1]=a=>g.value=!0)})):(f(),k(T,{key:1},[(f(!0),k(T,null,$(b.value,a=>(f(),k(T,{key:a.to},[a.show?(f(),S(H,{key:0,to:a.to,"prepend-icon":a.icon},null,8,["to","prepend-icon"])):C("",!0)],64))),128)),z(o).isLogin?(f(),S(H,{key:0,"prepend-icon":"mdi-logout",onClick:p},{default:c(()=>[E("登出")]),_:1})):C("",!0)],64))]),_:1})]),_:1}),l(Pe,null,{default:c(()=>[l(u)]),_:1})],64)}}},Ge=Ve(ze,[["__scopeId","data-v-48f29212"]]);export{Ge as default};
