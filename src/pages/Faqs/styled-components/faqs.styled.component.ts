import styled from "styled-components";

export const Body = styled.div`
    flex: 1 1 0%;
    padding-top: 5rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5F5F5;
    box-shadow: 0px 0px 23px 6px rgb(1 1 1 / 9%);
    border-radius: 46px;
    padding: 5rem 7rem;
`;

export const Title = styled.h1`
    color: #232323;
    font-family: 'Poppins', 'sans-serif';
    font-size: 69px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
`;

export const QuestionContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const QuestionTitle = styled.h2`
    color: #3A20E3;
    font-family: 'Poppins', 'sans-serif';
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
    box-sizing: border-box;
`;

export const QuestionAnswer  = styled.h2`
    color: #010101;
    font-family: 'Poppins', Sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.2em;
    letter-spacing: 0px;
    padding: 0;
    margin: 0;
`;

export const Title2 = styled.h1`
    color: #232323;
    font-family: 'Poppins', 'sans-serif';
    font-size: 60px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.02em;
`;

export const AskButton = styled.button`
    border: 0px;
    cursor: pointer;
    background-image: linear-gradient(180deg, #6821E3 0%, #2070CC 100%);
    outline: none;
    border-radius: 24px;
    font-size: 35px;
    font-weight: 500;
    font-family: 'Poppins', Sans-serif;
    padding: 20px 40px;
    color: #f8f8f8;
    &:hover{
        transform: scale(1.1);
    }
`;