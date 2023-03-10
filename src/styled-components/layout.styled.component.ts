import styled from 'styled-components';

export const AppWrapper = styled.div`
    margin: 0px;
    padding: 0px;
    width: 100vw;
    max-width: 100%;
    background-color: white;
    overflow: hidden;
`;

export const WebWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Times New Roman', Times, serif;
    padding: 1.5rem 3rem;
    
    @media (min-width: 768px) {
        padding: 2rem 5rem;
    }

    @media (min-width: 	1024px) {
        padding: 2.5rem 7rem;
    }

    @media (min-width: 	1280px) {
        padding: 2.7rem 12rem;
    }
`;

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScreenWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`; 