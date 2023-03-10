import styled from "styled-components";

export const Body = styled.div`
    flex-grow: 1;
    z-index: 20;
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto;
    @media (min-width: 640px) {
        width: 40%;
        max-width: 1000px;
        height: 90%;
        background-color: white;
        border-radius: 2rem;
    }
`;

export const FormLogoContainer = styled.div`
    grid-row: 1 / span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 4rem;
`;

export const ImgLabel = styled.h2`
    color: #f8f8f8;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 10px;
    font-family: 'Poppins', 'sans-serif';
    margin-right: -10px;
    @media (min-width: 640px) {
        color: #3c53eb;    
    }
`;

export const LogoTitle = styled.h2`
    margin: 0px;
    color: #f8f8f8;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: 'Poppins', 'sans-serif';
    @media (min-width: 640px) {
        color: #323232;
        font-size: 45px;    
    }
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Submit = styled.button`
    outline: none;
    border: 0;
    cursor: pointer;
    color: #f8f8f8;
    background-image: linear-gradient(180deg, #6821E3 0%, #2070CC 100%);
    width: 70%;
    font-size: 1rem;
    letter-spacing: 3px;
    border-radius: 9999px;
    padding: 0.75rem 1rem;
    font-family: 'Poppins', 'sans-serif';
    &:hover{
        transform: scale(1.03);
    }
`;

export const Error = styled.p`
    margin: 0;
    font-family: 'Poppins', 'sans-serif';
    color: #B33A3A;
    margin-top: 2px;
`;