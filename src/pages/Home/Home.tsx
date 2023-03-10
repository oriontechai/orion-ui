import { Navbar } from "../../components/Navbar";
import brain from '../../assets/BRAIN.png';
import blackAI from '../../assets/black_ai_bg.jpg';
// STYLES
import { WebWrapper } from "../../styled-components";
import { 
    AspectContainer, Body, BrainBackground, BrainLeftSection, BrainSection, Column, LeftColumn, LeftSectionButton, LeftSectionP1, LeftSectionP2, LeftSectionTitle, RightColumn, RowContent, RowTitle, SecondSection, SecondSectionBodyContainer, SecondSectionList, SecondSectionListItem, SecondSectionListItemText, SecondSectionTitle, SecondSectionTitleContainer, Video, VideoContainer, VideoSection, VideoSectionInfoContainer, VideoSectionShadow, VideoSectionTitle, VideoSectionTitle2, VideoWrapper 
} from "./styled-components";

import { BsCheckLg } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { useMemo } from "react";

const ADVANTAGES = [
    "Comprende y responde a las preguntas de los clientes con precisión y rapidez, incluso en tiempos de alta demanda.",
    "Aprende de cada interacción para mejorar continuamente su rendimiento.",
    "Ofrece respuestas personalizadas que aumentan la satisfacción del cliente y la fidelización.",
    "Se integra fácilmente con tu sistema existente para una transición sin problemas.",
    "Proporciona estadísticas y análisis en tiempo real para medir el rendimiento y hacer mejoras continuas."
];

const Home = () => {

    const CHECK_STYLE: IconContext = useMemo( () => ({
        color: "#1E3A8A"
    }), []); 
    
    return(
        <WebWrapper>
            <Navbar darkMode={false}/>

            <Body>
                <BrainSection>
                    <BrainBackground src={brain}/>

                    <BrainLeftSection>
                        <LeftSectionTitle>
                            Transforma tu Atención al Cliente con Chatbots Inteligentes de IA
                        </LeftSectionTitle>
                        <LeftSectionP1>
                            ¡Sorprende a tus clientes con un servicio excepcional gracias a nuestros chatbots de última generación!  
                        </LeftSectionP1>
                        <LeftSectionP2>
                            EXPERIMENTA LA REVOLUCIÓN DE LA ATENCIÓN AL CLIENTE CON UNA DEMO GRATIS
                        </LeftSectionP2>
                        <LeftSectionButton>
                            PRUÉBALO AHORA
                        </LeftSectionButton>
                    </BrainLeftSection>

                    <SecondSection>
                        <SecondSectionTitleContainer>
                            <SecondSectionTitle>
                            "Transforma tu atención al cliente con nuestras IA de última generación"
                            </SecondSectionTitle>
                        </SecondSectionTitleContainer>

                        <SecondSectionBodyContainer>
                            <SecondSectionList>
                                {ADVANTAGES.map( (ele, idx) => {
                                    return(
                                        <SecondSectionListItem key={ele + idx.toString()}>
                                            <IconContext.Provider value={ CHECK_STYLE }>
                                                <div>
                                                <BsCheckLg/>
                                                </div>
                                            </IconContext.Provider>
                                            <SecondSectionListItemText>
                                                {ele}
                                            </SecondSectionListItemText>
                                        </SecondSectionListItem>
                                    );
                                })}
                            </SecondSectionList>
                        </SecondSectionBodyContainer>
                    </SecondSection>
                </BrainSection>

                <VideoSection style={{backgroundImage: `url(${blackAI})`}}>
                    
                    <VideoSectionShadow />
                    
                    <VideoSectionTitle>
                        "Transforma tu atención al cliente con nuestras IA de última generación"
                    </VideoSectionTitle>

                    <VideoContainer>
                        <VideoWrapper>
                            <AspectContainer>
                                <Video
                                    src="https://www.youtube.com/embed/gv0aI9p0t4k"
                                    allow="autoplay"
                                />
                            </AspectContainer>
                        </VideoWrapper>
                    </VideoContainer>

                    <VideoSectionTitle2>
                        Lleva a tu empresa al siguiente nivel con Orion
                    </VideoSectionTitle2>

                    <VideoSectionInfoContainer>
                        <Column>
                            <LeftColumn>
                                
                                {/** ROW 1 **/}
                                <RowTitle>
                                    Respuestas instantáneas y precisas las 24/7
                                </RowTitle>
                                <RowContent>
                                    Nuestros chatbots de IA están disponibles las 24 horas del día, los 7 días de la semana, para brindar
                                    respuestas rápidas y precisas a las preguntas de tus clientes, incluso en tiempos de alta demanda.
                                </RowContent>

                                {/** ROW 2 **/}
                                <RowTitle>
                                    Integración fácil con sistemas existentes
                                </RowTitle>
                                <RowContent>
                                    Nuestros chatbots se integran fácilmente con tus sistemas existentes, como CRM, plataformas de
                                    comercio electrónico y sistemas de ticketing, para una transición sin problemas.
                                </RowContent>

                                {/** ROW 3 **/}
                                <RowTitle>
                                    Satisfacción del cliente garantizada
                                </RowTitle>
                                <RowContent>
                                    Al ofrecer respuestas personalizadas y un servicio excepcional, nuestros chatbots garantizan una mayor
                                    satisfacción del cliente y fidelización.
                                </RowContent>
                            </LeftColumn>
                        </Column>

                        <Column>
                                <RightColumn>
                                    {/** ROW 4 **/}
                                    <RowTitle>
                                        Aprendizaje continuo para un servicio personalizado
                                    </RowTitle>
                                    <RowContent>
                                        Nuestros chatbots aprenden de cada interacción para mejorar continuamente su rendimiento y ofrecer respuestas
                                        personalizadas que mejoran la experiencia del cliente.
                                    </RowContent>

                                    {/** ROW 5 **/}
                                    <RowTitle>
                                        Análisis y estadísticas en tiempo real
                                    </RowTitle>
                                    <RowContent>
                                        Nuestros chatbots proporcionan estadísticas y análisis en tiempo real para que puedas medir el rendimiento y
                                        hacer mejoras continuas en la atención al cliente.
                                    </RowContent>

                                    {/** ROW 6 **/}
                                    <RowTitle>
                                        Ahorro en costos laborales
                                    </RowTitle>
                                    <RowContent>
                                        Al automatizar la atención al cliente, nuestros chatbots ayudan a reducir los costos laborales y mejorar
                                        la eficiencia al mismo tiempo.
                                    </RowContent>
                                </RightColumn>
                        </Column>
                    </VideoSectionInfoContainer>
                </VideoSection>
            </Body>
        </WebWrapper>
    );
}

export default Home;