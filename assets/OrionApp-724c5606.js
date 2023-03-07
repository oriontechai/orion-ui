import{s as e,r as s,j as a,S as p,a as t,I as m,L as A,O as g}from"./index-bdf22bd6.js";import{b as u}from"./black_ai_bg-337a3391.js";import{a as h}from"./index.esm-57dd6956.js";import{G as l}from"./iconBase-782dd2e9.js";const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOpSURBVHgBzVlJTuNAFP0xYUbIASEkxCJZsGAFnAD3EZp9N9wAbkA4AckNuuk19BFwnyBhxSiSRowSEANiHtzvWXaErEB7KBOeVCkPSdXTH+v/pCQitre3Ddu2xzAM3I6nUikds+6+tjCqeFfFvKZpmjkyMmJKBKTCfLlUKuk9PT2z2Hius7NT7+joEMzS3t4uIOEM4uXlRR4fH+Xp6Ulub2/l5uZG7u/vq3hlPj8/L4yOjlaD7hmIoEtsHlKay2Qy0tvbK+l0WsKAhM/Pzx2yIP4jLNE3sbW1NYtROzs7s7GoHRcPDw8218KalZ2dnWmJA9jZYqVSse/u7mzVINHd3V0SXXyPQ0MVU6Xd3d2/oUpjYGCgbluqQVs9Pj6W6+vrMsaXiYkJy/+dhjuD3CrJDQ4OJkbO2RxrDw0N0abHKZBAP6JaDw4O7I8GJPlfddMhZmhzKpwhLLgnbXJjY2PuNae6Da6vr2dbWlpWc7lcNmwIUQXEStnb27NgjznPHusGBnvI9/f3N40cwYDf19dHB533njkSpPSQFSrDw8PSTIIEPRtmJldXVxlK0ZEgpceU1WxyLhfRdV26urocW3QIIoVNQr2iCksrIr9WJDKYSsFpltdpnkra2tqU2Z6f3LcpCY3W1lYeQnSYnqFB5wbVmwS5OKDDQIrjULk2poKgn9z3qWjS8wAb5GRoiJGx1auaHAGzo8OM0UmyvPlM5AgkDU665nxEPBAkRY5wOenJHVUUgQQtRu8o8EtMpRe7nKxYBImkSLKGgQNXNcSaMo70EgdJkGRFCIJ/NZzD/rA0jAvVJFn9UXiMg2Wew1RApRdTaDA907lhWQmd26rwc9m2l5btyGDFt7m5WSE3J8zgWfHi4kJUIa4kWeBDvSavHYLIJAXLsiSON6sCvZf2x84D7x2CqEMYaoq1Wk2ajcvLS6c14rVF6pkEZ7A8RGupcpgooPTQFql60iPqBF0pLhwdHTVF1dxzf3+fl/l3m0rw6AKL6I8GmwWoiQsSBCC5+pEk3a5CqRGXhqcZ2ONXGGv58PAwUXVz7ZOTEzqGyeaRhAXVzVaIyiDugS09t9URTK1vAZXVDKP66empEqLswXAtZi9/H6YRArWA2XlgcY+APs0CizV02DqGpxNmKyYEXBeRa/ON+oGRCPqJ4nISrZIsKy+vI8Fa9nUTnYMxlUmfxznMFgRYRJYoBCEWiaCPrAFCHPwrIotHHPW/IfDMwrsyZnb21xDbTImAfxIaoixHXqBZAAAAAElFTkSuQmCC",b="/orion-ui/assets/logo_o-c1ba7c0c.png",S=e.div`
    position: relative;
    height: 90%;
    width: 95%;
    background-color: transparent;
    border-radius: 1.5rem/* 24px */;
    display: flex;
`,f=e.div`
    width: ${r=>r.open?"18rem":"5rem"};
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding: 1.25rem/* 20px */;
    padding-top: 2rem/* 32px */;
    z-index: 20;
    position: relative;
    transition-duration: 300ms;
    background-color: transparent;
    background-image: linear-gradient(180deg, #B401FF2B 0%, #2AA3FF80 100%);
`,v=e.img`
    position: absolute;
    cursor: pointer;
    right: -0.75rem/* -12px */;
    top: 2.25rem/* 36px */;
    width: 1.75rem/* 28px */;
    border-color: #081A51;
    border-width: 2px;
    border-radius: 9999px;
    z-index: 20;
    transform: rotate(${r=>r.open?"0":"180deg"});
`,I=e.div`
    display: flex;
    column-gap: 1rem/* 16px */;
    align-items: center;
`,z=e.img`
    cursor: pointer;
    transition-duration: 500ms;
    width: 2.5rem/* 40px */;
    transform: rotate(${r=>r.open?"360deg":"0deg"});
`,w=e.h1`
    color: #FBFBFB;
    transform-origin: center;
    font-weight: 500;
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    transition-duration: 200ms;
    font-family: "Poppins", Sans-serif;
    transform: scale(${r=>r.open?"1":"0"});
`,B=e.ul`
    padding-top: 1.5rem/* 24px */;
    margin: 0;
    padding: 0;
`,C=e.li`
    display: flex;
    border-radius: 0.375rem/* 6px */;
    padding: 0.5rem/* 8px */;
    cursor: pointer;
    &:hover{
        background-color: rgba(255,255,255,0.17);
    }
    color: #FBFBFB;
    font-size: 0.875rem/* 14px */;
    line-height: 1.25rem/* 20px */;
    align-items: center;
    column-gap: 1rem/* 16px */;
    margin-top: 0.5rem/* 8px */;
    background-color: ${r=>r.selected?"rgba(255,255,255,0.17)":"transparent"};
`,F=e.span`
    transform-origin: left;
    transition-duration: 200ms;
    font-family: "Poppins", Sans-serif;
    display: ${r=>r.open?"flex":"none"};
`,k=e.div`
    flex: 1 1 0%;
    padding: 1.75rem/* 28px */;
    background-color: #FFFFFFD1;
    border-top-right-radius: 1.5rem/* 24px */;
    border-bottom-right-radius: 1.5rem/* 24px */;
    z-index: 10;
`;function P(r){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4H5V5zm15-2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6zm-5-6h4v4H5v-4zm13-1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"}}]})(r)}function R(r){return l({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"}}]})(r)}const H=()=>{const r=[{title:"Test AI",icon:t(h,{})},{title:"Integrations",icon:t(P,{})},{title:"Custom Chat Assistant",icon:t(R,{})}],[o,c]=s.useState(!0),[d,E]=s.useState(0);return a(p,{children:[t(m,{url:u}),a(S,{children:[t(A,{}),a(f,{open:o,children:[t(v,{src:x,open:o,onClick:()=>c(!o)}),a(I,{children:[t(z,{open:o,src:b}),t(w,{open:o,children:"ORION"})]}),t(B,{children:r.map((n,i)=>a(C,{selected:d==i,children:[n.icon,t(F,{open:o,children:n.title})]},n.title+i.toString()))})]}),t(k,{children:t(g,{})})]})]})};export{H as default};
