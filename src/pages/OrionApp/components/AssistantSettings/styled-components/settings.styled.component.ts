import styled from "styled-components";

export const Header = styled.h1`
    color: #6821E3;
    font-family: 'Poppins', 'sans-serif';
    font-size: 69px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
`;

export const FormContainer = styled.form`
    max-width: 600px;
`;

export const Submit = styled.input`
    margin-top: 30px;
    color: #f8f8f8;
    cursor: pointer;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    background-color: #6821E3;
    font-family: 'Poppins', 'sans-serif';
    font-size:18px;
    font-weight: 500;
    border: 0;
    outline: none;
    &:hover{
        filter: brightness(1.3);
    }
`;

