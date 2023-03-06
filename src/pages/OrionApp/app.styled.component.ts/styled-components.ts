import styled from 'styled-components';

export const AppWrapper = styled.div`
    position: relative;
    height: 90%;
    width: 95%;
    background-color: transparent;
    border-radius: 1.5rem/* 24px */;
    display: flex;
`;

interface SidebarProps{
    open : boolean;
}

export const Sidebar = styled.div<SidebarProps>`
    width: ${ props => props.open ? '18rem' : '5rem'};
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding: 1.25rem/* 20px */;
    padding-top: 2rem/* 32px */;
    z-index: 20;
    position: relative;
    transition-duration: 300ms;
    background-color: transparent;
    background-image: linear-gradient(180deg, #B401FF2B 0%, #2AA3FF80 100%);
`;

export const SidebarControl = styled.img<SidebarProps>`
    position: absolute;
    cursor: pointer;
    right: -0.75rem/* -12px */;
    top: 2.25rem/* 36px */;
    width: 1.75rem/* 28px */;
    border-color: #081A51;
    border-width: 2px;
    border-radius: 9999px;
    z-index: 20;
    transform: rotate(${ props => props.open ? '0' : '180deg' });
`;

export const SidebarLogoContainer = styled.div`
    display: flex;
    column-gap: 1rem/* 16px */;
    align-items: center;
`;

export const SidebarLogo = styled.img<SidebarProps>`
    cursor: pointer;
    transition-duration: 500ms;
    width: 2.5rem/* 40px */;
    transform: rotate(${ props => props.open ? '360deg' : '0deg' });
`;

export const SidebarTitle = styled.h1<SidebarProps>`
    color: #FBFBFB;
    transform-origin: center;
    font-weight: 500;
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    transition-duration: 200ms;
    font-family: "Poppins", Sans-serif;
    transform: scale(${ props => !props.open ? '0' : '1'});
`;

export const SidebarMenu = styled.ul`
    padding-top: 1.5rem/* 24px */;
    margin: 0;
    padding: 0;
`;

interface SidebarMenuItemPorps{
    selected : boolean;
}

export const SidebarMenuItem = styled.li<SidebarMenuItemPorps>`
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
    background-color: ${ props => props.selected ? 'rgba(255,255,255,0.17)' : 'transparent'};
`;

export const SidebarMenuItemText = styled.span<SidebarProps>`
    transform-origin: left;
    transition-duration: 200ms;
    font-family: "Poppins", Sans-serif;
    display: ${ props => !props.open ? 'none' : 'flex'};
`;

export const Body = styled.div`
    flex: 1 1 0%;
    padding: 1.75rem/* 28px */;
    background-color: #FFFFFFD1;
    border-top-right-radius: 1.5rem/* 24px */;
    border-bottom-right-radius: 1.5rem/* 24px */;
    z-index: 10;
`;