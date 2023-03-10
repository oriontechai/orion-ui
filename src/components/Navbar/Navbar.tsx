import { PUBLIC_ROUTES } from '../../utilities';
import black_logo from '../../assets/orion_black.png';
import white_logo from '../../assets/logo_o.png';
import { FlexCenter } from '../../styled-components';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { 
    Img, 
    Label, 
    MobileItem, 
    MobileItems, 
    MobileItemsContainer, 
    MobileItemsContent, 
    Nav, 
    WebItem, 
    WebItems 
} from './styled-components';
import { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';

const NAV_ITEMS = [
    {
        path: '/',
        label: "home"
    },
    {
        path: '/' + PUBLIC_ROUTES.FAQS,
        label: "preguntas frecuentes"
    },
    {
        path: '/' + PUBLIC_ROUTES.LOGIN,
        label: "chatea con orion"
    },
    {
        path: '/' + PUBLIC_ROUTES.REGISTER,
        label: "comienza ya"
    }
];

interface NavbarProps{
    darkMode: boolean;
}

const Navbar = ({darkMode} : NavbarProps) => {

    const [toggle, setToggle] = useState(false);

    const FA_TIMES_STYLE: IconContext = useMemo( () => ({
        color: darkMode ? "#000000" : "#f0f0f0",
        size: "28px",
        style: {
            zIndex: 20, 
            position: "absolute", 
            top : "35px", 
            right:"40px"
        }
    }), []); 

    const FI_MENU_STYLE: IconContext = useMemo( () => ({
        color: darkMode ? "#ffffff" : "#000000",
        size: "28px"
    }), []); 

    return(
        <Nav>
            <FlexCenter>
                <Img src={darkMode ? white_logo : black_logo}></Img>
                <Label darkMode={darkMode}>ORION</Label>
            </FlexCenter>
            <WebItems>
                {NAV_ITEMS.map((item, idx) => {
                    return(
                        <WebItem key={item.label + idx.toString()} darkMode={darkMode} isLastItem={NAV_ITEMS.length - 1 == idx}>
                            <a href={item.path}>{item.label}</a>
                        </WebItem>   
                    );
                })}
            </WebItems>

            <MobileItemsContainer>

                {toggle ? 
                    <IconContext.Provider value={ FA_TIMES_STYLE }>
                        <div>
                        <FaTimes onClick={() => setToggle((prevState) => !prevState)}/>
                        </div>
                    </IconContext.Provider>:
                    <IconContext.Provider value={ FI_MENU_STYLE }>
                        <div>
                        <FiMenu onClick={() => setToggle((prevState) => !prevState)}/>
                        </div>
                    </IconContext.Provider>
                }
                <MobileItemsContent toggle={toggle} darkMode={darkMode}>
                    <MobileItems>
                        {NAV_ITEMS.map((item, idx) => {
                            return(
                                <MobileItem key={item.label + idx.toString()} darkMode={darkMode}>
                                    <a href={item.path}>{item.label}</a>
                                </MobileItem>   
                            );
                        })}
                    </MobileItems>
                </MobileItemsContent>
            </MobileItemsContainer>
        </Nav>
    );
}

export default Navbar;