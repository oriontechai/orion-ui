import styled from "styled-components";

export const LoginWrapper = styled.div`
    height: 100%;
    width: 100%;
    z-index: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        position: absolute;
        align-self: center;
        justify-self: center;
        height: 85%;
        width: 34%;
        background-color: white;
        border-radius: 20px;
    }
`;

export const Title = styled.div`
    color: #323232;
    font-family: "Poppins", Sans-serif;
    font-size: 45px;
    font-weight: 600;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormContainer = styled.div`
    width: 50%;
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
`;