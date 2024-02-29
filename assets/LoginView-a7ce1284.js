import{_ as R,K as k,L as B,M as q,P as C,R as F,S as t,a1 as I,c as s,X as o,a5 as L,a6 as i,J as m,Z as p,a2 as M,a3 as N,a4 as P}from"./index-f2881c5d.js";import{c as U,a as g,u as A,d as _}from"./index.esm-39465ca1.js";import{V as E}from"./VContainer-fa2d8934.js";import{a as f,V as T}from"./VRow-a5494304.js";import{V as $}from"./VForm-e0638041.js";const J=l=>(M("data-v-5f79525a"),l=l(),N(),l),K=J(()=>P("h2",null,"登入。",-1)),X={__name:"LoginView",setup(l){const{api:V}=I(),h=k(),d=B(),b=q(),w=U({account:g().required("帳號必填").min(4,"帳號長度不足 4 碼").max(20,"帳號最多 20 碼"),password:g().required("密碼必填").min(4,"密碼長度不足 4 碼").max(20,"密碼最多 20 碼")}),{handleSubmit:v,isSubmitting:x}=A({validationSchema:w}),n=_("account"),u=_("password"),S=v(async c=>{var a,r;try{const{data:e}=await V.post("/users/login",{account:c.account,password:c.password});b.login(e.result),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"primary",location:"bottom"}}),h.push("/")}catch(e){console.log("AxiosError:",e),e.response?(console.log("Response data:",e.response.data),console.log("Response status:",e.response.status),console.log("Response headers:",e.response.headers)):e.request?console.log("Request:",e.request):console.log("Error message:",e.message);const y=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";d({text:y,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(c,a)=>(C(),F(E,null,{default:t(()=>[s(T,null,{default:t(()=>[s(f,{cols:"12"},{default:t(()=>[K]),_:1}),s(f,{cols:"6"},{default:t(()=>[s($,{disabled:o(x),onSubmit:L(o(S),["prevent"])},{default:t(()=>[s(i,{label:"帳號",maxlength:"20",minlength:"4",counter:"",modelValue:o(n).value.value,"onUpdate:modelValue":a[0]||(a[0]=r=>o(n).value.value=r),"error-messages":o(n).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:o(u).value.value,"onUpdate:modelValue":a[1]||(a[1]=r=>o(u).value.value=r),"error-messages":o(u).errorMessage.value},null,8,["modelValue","error-messages"]),s(m,{type:"reset",color:"grey-lighten-3",class:"text-color-black ml-3 float-end"},{default:t(()=>[p("清除")]),_:1}),s(m,{type:"submit",color:"primary",class:"float-end"},{default:t(()=>[p("登入")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}},H=R(X,[["__scopeId","data-v-5f79525a"]]);export{H as default};
