import{s as i,r as d,j as n,F as x,a as e,P as c,W as b}from"./index-bdf22bd6.js";import{G as f,I as h}from"./iconBase-782dd2e9.js";import{b as y}from"./black_ai_bg-337a3391.js";import{B as w}from"./index.esm-57dd6956.js";const v="/orion-ui/assets/orion_black-095678d5.png";function S(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function z(t){return f({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const I=i.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    font-family: 'Poppins', 'sans-serif';
    @media (min-width: 768px) {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    z-index: 20;
`,A=i.img`
    width: 2.5rem;
`,L=i.label`
    margin-left: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
`,C=i.ul`
    list-style-type: none;
    display: none;
    flex: 1 1 0%;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 640px) {
        display: flex;
    }
`,T=i.li`
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 2.5rem;
    ${({isLastItem:t})=>t&&`
        margin-right: 0px;
        background-image: linear-gradient(to bottom right, #a31e81, #1b32b4);
        padding: 0.75rem 1.25rem;
        border-radius: 9999px;
        color: white;
        &:hover{
            transform: scale(1.07);
        }
    `}
`,E=i.div`
    display: flex;
    flex: 1 1 0%;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 640px) {
        display: none;
    }
`,k=i.div`
    display: ${t=>t.toggle?"flex":"none"};
    padding: 1.5rem;
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem 1rem;
    min-width: 140px;
    height: 100%;
    align-items: flex-start;
    border-radius: 0.75rem;
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`,N=i.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: end;
    align-items: center;
`,j=i.li`
    margin-top: 2.5rem;
    cursor: pointer;
    color: #f8f8f8;
    text-transform: uppercase;
`,p=[{path:"/"+c.HOME,label:"home"},{path:"/"+c.FAQS,label:"preguntas frecuentes"},{path:"/"+c.LOGIN,label:"chatea con orion"},{path:"/"+c.REGISTER,label:"comienza ya"}],M=()=>{const[t,s]=d.useState(!1),m=d.useMemo(()=>({color:"#f0f0f0",size:"28px",style:{zIndex:20,position:"absolute",top:"35px",right:"40px"}}),[]),u=d.useMemo(()=>({color:"#000000",size:"28px"}),[]);return n(I,{children:[n(x,{children:[e(A,{src:v}),e(L,{children:"ORION"})]}),e(C,{children:p.map((o,l)=>e(T,{isLastItem:p.length-1==l,children:e("a",{href:o.path,children:o.label})},o.label+l.toString()))}),n(E,{children:[t?e(h.Provider,{value:m,children:e("div",{children:e(z,{onClick:()=>s(o=>!o)})})}):e(h.Provider,{value:u,children:e("div",{children:e(S,{onClick:()=>s(o=>!o)})})}),e(k,{toggle:t,children:e(N,{children:p.map((o,l)=>e(j,{children:e("a",{href:o.path,children:o.label})},o.label+l.toString()))})})]})]})},B="/orion-ui/assets/BRAIN-0d81ce48.png",R=i.div`
    flex: 1 1 0%;
    font-family: 'Poppins', 'sans-serif';
`,P=i.div`
    position: relative;
    height: 1500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`,O=i.img`
    position: absolute;
    top: 0;
    right: 0;
    aspect-ratio: auto;
    height: 0%;
    @media (min-width: 640px) {
        height: 60%;
    }
`,V=i.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    @media (min-width: 640px) {
        width: 45%;
    }
    align-items: flex-start;
    padding: 0 2.5rem;
    @media (min-width: 768px) {
        padding: 0 5rem;
    }
    z-index: 10;
`,_=i.h1`
    font-weight: 600;
    font-size: 3rem;
    line-height: 1;
    margin-top: 5rem;
    color: #010C95;
`,F=i.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 200;
    line-height: 1.625;
    letter-spacing: 0.3px;
    margin-top: 2.5rem;
`,W=i.p`
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
    font-weight: 700;
    line-height: 1.5rem/* 24px */;
    margin-top: 2.5rem/* 40px */;
    margin-bottom: 2.5rem/* 40px */;
`,G=i.button`
    cursor: pointer;
    padding: 0.75rem 1.25rem;
    background-image: linear-gradient(to bottom right, #a31e81, #1b32b4);
    border-radius: 9999px;
    color: white;
    &:hover{
        filter: brightness(1.5);
        transform: scale(1.05);
    }
    outline: none;
    border: none;
`,U=i.div`
    flex: 1 1 0%;
    padding: 3rem 2.5rem;
    z-index: 10;
    @media (min-width: 768px) {
        padding: 3rem 5rem;
    }
`,H=i.div`
    display: flex;
    justify-content: center;
`,q=i.h1`
    font-weight: 600;
    font-size: 3rem/* 48px */;
    line-height: 1;
    color: #023B96;
    margin-top: 5rem;
    text-align: center;
    width: 100%;
`,D=i.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.5rem;
`,Y=i.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
`,$=i.li`
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
`,K=i.p`
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    margin-left: 1rem/* 16px */;
    font-weight: 300;
    font-weight: 300;
`,Q=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-size: cover;
    @media (min-width: 640px) {
        padding: 5rem 10rem;
    }

    @media (min-width: 768px) {
        padding: 5rem 13rem;
    }
`,X=i.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.63;
    z-index: 0;
    background-color: #010101;
`,J=i.h1`
    color: #f8f8f8;
    font-size: 46px;
    text-align: center;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 600;
    z-index: 10;
    margin-bottom: 3.5rem;
`,Z=i.div`
    width: 100%;
    display: flex;
    z-index: 10;
`,ee=i.div`
    flex: 1 1 0%;
    background-color: white;
`,ie=i.div`
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;
`,ne=i.iframe`
    position: absolute;
    border: none;
    height: 100%;
    width: 100%;
`,te=i.h2`
    color: white;
    font-size: 2.25rem/* 36px */;
    line-height: 2.5rem/* 40px */;
    text-align: center;
    font-weight: 800;
    margin-top: 3.5rem/* 56px */;
    margin-bottom: 3.5rem/* 56px */;
    z-index: 10;
    text-shadow: 13px 0px 62px #ff41f5;
    @media (min-width: 768px) {
        padding-left: 9rem/* 144px */;
        padding-right: 9rem/* 144px */;
    }
`,oe=i.div`
    width: 100%;
    display: flex;
    z-index: 10;
    @media not all and (min-width: 640px) {
        flex-direction: column;
    }
`,g=i.div`
    flex: 1 1 0%;
`,re=i.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
`,ae=i.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 640px) {
        margin-left: 2rem/* 32px */;
    }
`,r=i.h3`
    margin-top: 1.25rem/* 20px */;
    margin-bottom: 1.25rem/* 20px */;
    font-weight: 800;
    color: #dbcbff;
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
`,a=i.p`
    color: white;
    font-size: 1rem/* 16px */;
    line-height: 1.5rem/* 24px */;
`,se=["Comprende y responde a las preguntas de los clientes con precisión y rapidez, incluso en tiempos de alta demanda.","Aprende de cada interacción para mejorar continuamente su rendimiento.","Ofrece respuestas personalizadas que aumentan la satisfacción del cliente y la fidelización.","Se integra fácilmente con tu sistema existente para una transición sin problemas.","Proporciona estadísticas y análisis en tiempo real para medir el rendimiento y hacer mejoras continuas."],pe=()=>{const t=d.useMemo(()=>({color:"#1E3A8A"}),[]);return n(b,{children:[e(M,{}),n(R,{children:[n(P,{children:[e(O,{src:B}),n(V,{children:[e(_,{children:"Transforma tu Atención al Cliente con Chatbots Inteligentes de IA"}),e(F,{children:"¡Sorprende a tus clientes con un servicio excepcional gracias a nuestros chatbots de última generación!"}),e(W,{children:"EXPERIMENTA LA REVOLUCIÓN DE LA ATENCIÓN AL CLIENTE CON UNA DEMO GRATIS"}),e(G,{children:"PRUÉBALO AHORA"})]}),n(U,{children:[e(H,{children:e(q,{children:'"Transforma tu atención al cliente con nuestras IA de última generación"'})}),e(D,{children:e(Y,{children:se.map((s,m)=>n($,{children:[e(h.Provider,{value:t,children:e("div",{children:e(w,{})})}),e(K,{children:s})]},s+m.toString()))})})]})]}),n(Q,{style:{backgroundImage:`url(${y})`},children:[e(X,{}),e(J,{children:'"Transforma tu atención al cliente con nuestras IA de última generación"'}),e(Z,{children:e(ee,{children:e(ie,{children:e(ne,{src:"https://www.youtube.com/embed/gv0aI9p0t4k",allow:"autoplay"})})})}),e(te,{children:"Lleva a tu empresa al siguiente nivel con Orion"}),n(oe,{children:[e(g,{children:n(re,{children:[e(r,{children:"Respuestas instantáneas y precisas las 24/7"}),e(a,{children:"Nuestros chatbots de IA están disponibles las 24 horas del día, los 7 días de la semana, para brindar respuestas rápidas y precisas a las preguntas de tus clientes, incluso en tiempos de alta demanda."}),e(r,{children:"Integración fácil con sistemas existentes"}),e(a,{children:"Nuestros chatbots se integran fácilmente con tus sistemas existentes, como CRM, plataformas de comercio electrónico y sistemas de ticketing, para una transición sin problemas."}),e(r,{children:"Satisfacción del cliente garantizada"}),e(a,{children:"Al ofrecer respuestas personalizadas y un servicio excepcional, nuestros chatbots garantizan una mayor satisfacción del cliente y fidelización."})]})}),e(g,{children:n(ae,{children:[e(r,{children:"Aprendizaje continuo para un servicio personalizado"}),e(a,{children:"Nuestros chatbots aprenden de cada interacción para mejorar continuamente su rendimiento y ofrecer respuestas personalizadas que mejoran la experiencia del cliente."}),e(r,{children:"Análisis y estadísticas en tiempo real"}),e(a,{children:"Nuestros chatbots proporcionan estadísticas y análisis en tiempo real para que puedas medir el rendimiento y hacer mejoras continuas en la atención al cliente."}),e(r,{children:"Ahorro en costos laborales"}),e(a,{children:"Al automatizar la atención al cliente, nuestros chatbots ayudan a reducir los costos laborales y mejorar la eficiencia al mismo tiempo."})]})})]})]})]})]})};export{pe as default};
