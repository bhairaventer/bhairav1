"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[284],{6284:(e,r,l)=>{l.r(r),l.d(r,{default:()=>d});var s=l(6213),t=l(5043),a=l(5475),o=l(2684),i=l(5369),c=l(579);function d(e){var r,l,d;const{setexceldata:n,setsingleorderid:x,userrole:p}=(0,t.useContext)(o.A),[h,u]=(0,t.useState)(!0),[m,b]=(0,t.useState)([]),[w,v]=(0,t.useState)(null),[N,f]=(0,t.useState)(1),[j,g]=(0,t.useState)(""),[y,k]=(0,t.useState)(!0);(0,t.useEffect)((()=>{_(N)}),[]);const S=()=>{N>1&&f((e=>{const r=e-1;return _(r),r}))},C=()=>{Math.ceil(j/10),y&&f((e=>{const r=e+1;return _(r),r}))},_=async e=>{let r=localStorage.getItem("token");try{const t=await s.A.get(`https://backend-mqr6.onrender.com/api/order/fetchallordersforadmin/Cancel/${e}`,{method:"GET",headers:{authtoken:r}});var l;if(g(t.data.totalOrder),0===t.data.orders.length)k(!1),b(t.data);else await n(null===t||void 0===t||null===(l=t.data)||void 0===l?void 0:l.orders),b(t.data),k(!0);u(!1)}catch(w){v(w),u(!1)}},P=Math.ceil(j/10),A=(0,t.useRef)(null),[I,L]=(0,t.useState)(0);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:" ",children:[(0,c.jsxs)("div",{className:"  mt-3 w-[1300px] h-[510px]",children:[(0,c.jsxs)("div",{className:"bg-[#464646] flex sticky top-3 z-20  text-white mb-2  px-2 items-center lg: ",children:[(0,c.jsx)("div",{className:"  w-[100px]  px-3 py-1 ",children:"Bill No"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Bill Date"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[110px]  px-3 py-1 ",children:"Order Id"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Product"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Quntity"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Amount"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"State"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Platform"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[150px]  px-3 py-1 ",children:"Courier"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[140px]  px-3 py-1 ",children:"Tracking ID"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"LR NO."})]}),null===m||void 0===m||null===(r=m.orders)||void 0===r?void 0:r.map((e=>{let r=new Date(e.Billdate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return r=r.split("/").join("-"),(0,c.jsxs)("div",{className:"bg-[#f2f2f2] flex   text-black   px-2 items-center ",children:[(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Billno}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:r}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[110px] overflow-x-auto px-3 py-1 ",children:e.OrderId}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Product}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Quntity}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Salesamount}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.State}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Platform.name}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[150px] overflow-x-auto px-3 py-1 ",children:e.courier}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[140px] overflow-x-auto px-3 py-1 ",children:e.trackingnumber}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>x(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Lrno})]},e._id)}))]}),(0,c.jsxs)("div",{className:"    absolute md:w-[80%]  lg:w-[85%]   w-[90%] mt-10    ",children:[(0,c.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==N?(0,c.jsxs)("button",{onClick:()=>{S()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(i.vpL,{})," Previous"]})]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{S()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(i.vpL,{})," Previous"]})]}),(0,c.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:N}),N!==Math.ceil(j/10)?(0,c.jsxs)("button",{onClick:()=>{C()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(i.QyA,{})]})," "]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{C()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(i.QyA,{})]})," "]})]}),(0,c.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("button",{onClick:()=>{if(A.current){const e=I-50;L(e),A.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:I<=0,children:"<"}),(0,c.jsx)("div",{ref:A,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,c.jsx)("div",{className:"flex gap-2",children:function(e,r){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const s=[];for(let t=e;t<r;t+=l)s.push(t);return s}(1,P+1).map((e=>(0,c.jsx)("div",{onClick:()=>{(e=>{y&&f((r=>{const l=e;return _(l),l}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,c.jsx)("button",{onClick:()=>{if(A.current){const e=I+50;L(e),A.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:I>=(null===(l=A.current)||void 0===l?void 0:l.scrollWidth)-(null===(d=A.current)||void 0===d?void 0:d.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=284.c8d053d6.chunk.js.map