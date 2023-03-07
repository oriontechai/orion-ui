import{s,a as r,r as i,j as f}from"./index-03ec8f04.js";import{G as x}from"./iconBase-36601275.js";const h=s.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    margin-bottom: 1rem/* 112px */;
`,y=s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem/* 6px */;
    width: fit-content;
    margin-top: 0.25rem/* 4px */;
    margin-bottom: 0.25rem/* 4px */;
    background-color: ${e=>e.isFromUser?"#dfdfdf":"#2C2D31"}; //#081A51 - #2C2D31
    margin-left: ${e=>e.isFromUser?"auto":"0"};
    margin-right: ${e=>e.isFromUser?"0":"auto"};
`,b=s.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 410px;
    padding: 0.5rem/* 8px */;
    word-break: break-word;
`,w=s.p`
    font-family: 'Poppins', 'sans-serif';
    font-size: 0.875rem/* 14px */;
    line-height: 1.25rem/* 20px */;
    margin-right: 0.5rem/* 8px */;
    color: ${e=>e.isFromUser?"#000000":"#ffffff"};
`,v=({text:e,isFromUser:t})=>r(y,{isFromUser:t,children:r(b,{children:r(w,{isFromUser:t,children:e})})}),j=({messages:e})=>r(h,{id:"messageDisplay",className:"scroll",children:e.map((t,n)=>r(v,{text:t.text,isFromUser:t.fromUser},t.text+n.toString()))}),I=s.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,M=s.input`
    flex: 1 1 0%;
    border-color: rgb(209 213 219);
    border-width: 0px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    caret-color: #4b5563;
    color: rgb(75 85 99);
    
`,C=s.button`
    background-image: linear-gradient(to right, #B401FF, #2AA3FF);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    margin-left: 0.75rem/* 12px */;
    padding: 0.5rem/* 8px */;
    border: 0;
`;function E(e){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(e)}const S=({submitMessage:e,allowSubmit:t})=>(i.useEffect(()=>{const n=a=>{if(a.code==="Enter"&&t){const o=document.getElementById("msgInput");o.value.length>0&&(t=!1,e(o.value),o.value="")}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),f(I,{children:[r(M,{id:"msgInput",type:"text",placeholder:"Send Message..."}),r(C,{children:r(E,{color:"white",size:25})})]})),k=s.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,B=()=>{const e="http://127.0.0.1:8080/api/v1/chat/get-completion",[t,n]=i.useState(Array),[a,o]=i.useState(!0);i.useEffect(()=>{n([])},[]);const l=async(c,d)=>{const p={text:c,fromUser:d};n(g=>[...g,p]);const m=document.getElementById("messageDisplay");if(m.scrollTop=m.scrollHeight,d){const u=await(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify([...t.slice(-10),p])})).json();l(u.text,!1),o(!0)}};return f(k,{children:[r(j,{messages:t}),r(S,{submitMessage:c=>l(c,!0),allowSubmit:a})]})};export{B as default};
