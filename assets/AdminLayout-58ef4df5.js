import{_ as f,M as V,x as i,o as x,O as k,P as c,Q as u,c as e,S as t,am as C,U as d,X as y,J as b,a5 as g,Y as w,Z as L,W as A}from"./index-f2881c5d.js";import{a as D,V as E}from"./VNavigationDrawer-5aecbebc.js";import{V as m,b as F}from"./VList-67f02c40.js";import{V as h}from"./VDivider-7b793010.js";const B={__name:"AdminLayout",setup(I){const n=V(),r=i(!0),o=i(!0),p=[{to:"/admin",text:"書籤說明",icon:"mdi-bookmark"},{to:"/admin/url",text:"書籤管理",icon:"mdi-bookmark-box-multiple"},{to:"/admin/orders",text:"用戶搜尋",icon:"mdi-face-man"},{to:"/",text:"回首頁",icon:"mdi-home"}],s=()=>{o.value=!o.value},_=x(()=>`https://source.boringavatars.com/beam/120/${n.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(M,l)=>{const v=k("RouterView");return c(),u(d,null,[e(C,null,{default:t(()=>[e(E,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=a=>r.value=a),rail:o.value,permanent:"",onClick:s},{default:t(()=>[e(m,{"prepend-avatar":_.value,title:y(n).account,nav:""},{append:t(()=>[e(b,{variant:"text",icon:"",onClick:g(s,["stop"])},{default:t(()=>[e(w,null,{default:t(()=>[L("mdi-chevron-left")]),_:1})]),_:1})]),_:1},8,["prepend-avatar","title"]),e(h),e(F,{density:"compact",nav:""},{default:t(()=>[(c(),u(d,null,A(p,a=>e(m,{key:a.to,to:a.to,title:a.text,"prepend-icon":a.icon,active:!1},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1},8,["modelValue","rail"])]),_:1}),e(D,null,{default:t(()=>[e(v)]),_:1})],64)}}},J=f(B,[["__scopeId","data-v-6fec4ad1"]]);export{J as default};
