import { ImageBackground, LighterShadow, ScreenWrapper } from "../../styled-components";
import backgroundImage from '../../assets/black_ai_bg.jpg';
import control from '../../assets/control.png';
import orionLogo from '../../assets/logo_o.png';
import {
    FlexCenter,
    AppWrapper,
    Body, Sidebar,
    SidebarControl,
    SidebarLogo,
    SidebarLogoContainer,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuItemText,
    SidebarTitle,
    LogoutButtonContainer,
    LogoutLabel
} from "./app.styled.component.ts";
import { BsChatDots } from 'react-icons/bs';
import { BiCustomize, BiLogOut } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../utilities";
import { closeFirebaseSession } from "../../services";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../redux/state";

const OrionApp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Menu = [
        { title: "Test AI", icon: <BsChatDots />, url: PRIVATE_ROUTES.TEST_ORION },
        { title: "Integrations", icon: <BiCustomize />, url: PRIVATE_ROUTES.INTEGRATIONS },
        { title: "Custom Chat Assistant", icon: <AiOutlineSetting />, url: PRIVATE_ROUTES.ORION_SETTINGS },
    ];

    const [open, setOpen] = useState(true);
    const [currentItem, setCurrentItem] = useState(0);

    const sidebarItemOnClick = (index: number) => {
        setCurrentItem(index);
        navigate('/app/' + Menu[index].url)
    }

    const logout = async () => {
        await closeFirebaseSession();
        dispatch(deleteSession());
    }

    return (
        <ScreenWrapper>
            <ImageBackground url={backgroundImage} />

            <FlexCenter>


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
                                    <SidebarMenuItem key={item.title + index.toString()} selected={currentItem == index} onClick={() => sidebarItemOnClick(index)}>
                                        {item.icon}
                                        <SidebarMenuItemText open={open}>
                                            {item.title}
                                        </SidebarMenuItemText>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>

                        <LogoutButtonContainer onClick={logout}>
                            <BiLogOut />
                            <LogoutLabel open={open}>
                                Logout
                            </LogoutLabel>
                        </LogoutButtonContainer>

                    </Sidebar>
                    <Body>
                        <Outlet />
                    </Body>
                </AppWrapper>
            </FlexCenter>
        </ScreenWrapper>
    );
}

export default OrionApp;