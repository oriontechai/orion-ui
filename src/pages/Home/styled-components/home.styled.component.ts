import styled from "styled-components";

export const Body = styled.div`
    flex: 1 1 0%;
    font-family: 'Poppins', 'sans-serif';
`;

export const BrainSection = styled.div`
    position: relative;
    height: 1500px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const BrainBackground = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    aspect-ratio: auto;
    height: 0%;
    @media (min-width: 640px) {
        height: 60%;
    }
`;

export const BrainLeftSection = styled.div`
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
`;

export const LeftSectionTitle = styled.h1`
    font-weight: 600;
    font-size: 3rem;
    line-height: 1;
    margin-top: 5rem;
    color: #010C95;
`;

export const LeftSectionP1 = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 200;
    line-height: 1.625;
    letter-spacing: 0.3px;
    margin-top: 2.5rem;
`;

export const LeftSectionP2 = styled.p`
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
    font-weight: 700;
    line-height: 1.5rem/* 24px */;
    margin-top: 2.5rem/* 40px */;
    margin-bottom: 2.5rem/* 40px */;
`;

export const LeftSectionButton = styled.button`
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
`;

export const SecondSection = styled.div`
    flex: 1 1 0%;
    padding: 3rem 2.5rem;
    z-index: 10;
    @media (min-width: 768px) {
        padding: 3rem 5rem;
    }
`;

export const SecondSectionTitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SecondSectionTitle = styled.h1`
    font-weight: 600;
    font-size: 3rem/* 48px */;
    line-height: 1;
    color: #023B96;
    margin-top: 5rem;
    text-align: center;
    width: 100%;
`;

export const SecondSectionBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.5rem;
`;

export const SecondSectionList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
`;

export const SecondSectionListItem = styled.li`
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
`;

export const SecondSectionListItemText = styled.p`
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    margin-left: 1rem/* 16px */;
    font-weight: 300;
    font-weight: 300;
`;

export const VideoSection = styled.div`
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
`;

export const VideoSectionShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.63;
    z-index: 0;
    background-color: #010101;
`;

export const VideoSectionTitle = styled.h1`
    color: #f8f8f8;
    font-size: 46px;
    text-align: center;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 600;
    z-index: 10;
    margin-bottom: 3.5rem;
`;

export const VideoContainer = styled.div`
    width: 100%;
    display: flex;
    z-index: 10;
`;

export const VideoWrapper = styled.div`
    flex: 1 1 0%;
    background-color: white;
`;

export const AspectContainer = styled.div`
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;
`;

export const Video = styled.iframe`
    position: absolute;
    border: none;
    height: 100%;
    width: 100%;
`;

export const VideoSectionTitle2 = styled.h2`
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
`;

export const VideoSectionInfoContainer = styled.div`
    width: 100%;
    display: flex;
    z-index: 10;
    @media not all and (min-width: 640px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    flex: 1 1 0%;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 640px) {
        margin-left: 2rem/* 32px */;
    }
`;

export const RowTitle = styled.h3`
    margin-top: 1.25rem/* 20px */;
    margin-bottom: 1.25rem/* 20px */;
    font-weight: 800;
    color: #dbcbff;
    font-size: 1.125rem/* 18px */;
    line-height: 1.75rem/* 28px */;
`;

export const RowContent = styled.p`
    color: white;
    font-size: 1rem/* 16px */;
    line-height: 1.5rem/* 24px */;
`;