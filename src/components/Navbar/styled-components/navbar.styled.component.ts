import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', 'sans-serif';
    z-index: 30;
`;

export const Img = styled.img`
    width: 2.5rem;
    @media (min-width: 1024px){
        width: 4rem;
    }
`;

interface LabelProps{
    darkMode : boolean;
}

export const Label = styled.label<LabelProps>`
    margin-left: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${ props => props.darkMode ? "#f8f8f8" : "#010101"};
`;

export const WebItems = styled.ul`
    list-style-type: none;
    display: none;
    flex: 1 1 0%;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 640px) {
        display: flex;
    }
`;

interface WebItemProps {
    readonly isLastItem: boolean;
    readonly darkMode: boolean;
}

export const WebItem = styled.li<WebItemProps>`
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 2.5rem;
    color: ${ props => props.darkMode ? "#f8f8f8" : "#010101"};
    ${({ isLastItem }) => isLastItem && `
        margin-right: 0px;
        background-image: linear-gradient(to bottom right, #a31e81, #1b32b4);
        padding: 0.75rem 1.25rem;
        border-radius: 9999px;
        color: white;
        &:hover{
            transform: scale(1.07);
        }
    `}
`;

export const MobileItemsContainer = styled.div`
    display: flex;
    flex: 1 1 0%;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 640px) {
        display: none;
    }
`;

interface MobileItemsContentProps{
    readonly toggle : boolean;
    readonly darkMode : boolean;
}

export const MobileItemsContent = styled.div<MobileItemsContentProps>`
    display: ${ props => !props.toggle ? 'none' : 'flex'};
    padding: 1.5rem;
    background-color: ${ props => props.darkMode ? "white" : "black" };
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
`;

export const MobileItems = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: end;
    align-items: center;
`;

interface MobileItemProps{
    readonly darkMode: boolean;
}

export const MobileItem = styled.li<MobileItemProps>`
    margin-top: 2.5rem;
    cursor: pointer;
    color: ${ props => props.darkMode ? "#010101" : "#f8f8f8" };
    text-transform: uppercase;
`;