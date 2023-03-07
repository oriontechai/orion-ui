import styled from "styled-components";

interface MessageContainerProps{
    isFromUser : boolean
}

export const MessageContainer = styled.div<MessageContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem/* 6px */;
    width: fit-content;
    margin-top: 0.25rem/* 4px */;
    margin-bottom: 0.25rem/* 4px */;
    background-color: ${ props => props.isFromUser ? '#dfdfdf' : '#2C2D31'}; //#081A51 - #2C2D31
    margin-left: ${ props => props.isFromUser ? 'auto' : '0'};
    margin-right: ${ props => props.isFromUser ? '0' : 'auto'};
`;

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 410px;
    padding: 0.5rem/* 8px */;
    word-break: break-word;
`;

interface TextProps{
    isFromUser : boolean;
    isDots: boolean;
} 

export const Text = styled.p<TextProps>`
    font-family: 'Poppins', 'sans-serif';
    min-width: 2.4rem;
    font-size: 0.875rem/* 14px */;
    line-height: 1.25rem/* 20px */;
    margin-right: ${ props => props.isDots ? '0' : '0.5rem'};
    color: ${ props => props.isFromUser ? '#000000' : '#ffffff'};
`;