import { ImageBackground, LighterShadow, ScreenWrapper } from "../../styled-components";
import backgroundImage from '../../assets/black_ai_bg.jpg';
import control from '../../assets/control.png';
import orionLogo from '../../assets/logo_o.png';
import {
    AppWrapper,
    Body, Sidebar, 
    SidebarControl, 
    SidebarLogo, 
    SidebarLogoContainer, 
    SidebarMenu, 
    SidebarMenuItem, 
    SidebarMenuItemText, 
    SidebarTitle
} from "./app.styled.component.ts";
import { BsChatDots } from 'react-icons/bs';
import { BiCustomize } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { useState } from "react";
import { Outlet } from "react-router-dom";

const OrionApp = () => {

    const Menu = [
        { title: "Test AI", icon: <BsChatDots /> },
        { title: "Integrations", icon: <BiCustomize /> },
        { title: "Custom Chat Assistant", icon: <AiOutlineSetting /> },
    ];

    const [open, setOpen] = useState(true);
    const [currentItem, setCurrentItem] = useState(0);

    return (
        <ScreenWrapper>
            <ImageBackground url={backgroundImage} />

            <AppWrapper>
                <LighterShadow />

                <Sidebar open={open}>
                    <SidebarControl src={control} open={open} onClick={() => setOpen(!open)} />

                    <SidebarLogoContainer>
                        <SidebarLogo open={open} src={orionLogo} />
                        <SidebarTitle open={open}>ORION</SidebarTitle>
                    </SidebarLogoContainer>

                    <SidebarMenu>
                        {Menu.map((item, index) => {
                            return (
                                <SidebarMenuItem key={item.title + index.toString()} selected={currentItem == index}>
                                    {item.icon}
                                    <SidebarMenuItemText open={open}>
                                        {item.title}
                                    </SidebarMenuItemText>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </Sidebar>

                <Body>
                    <Outlet />
                </Body>
            </AppWrapper>
        </ScreenWrapper>
    );
}

export default OrionApp;