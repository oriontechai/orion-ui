import { Navbar } from "../../components/Navbar";
import { WebWrapper } from "../../styled-components";
import { AskButton, Body, Card, QuestionAnswer, QuestionContainer, QuestionTitle, Title, Title2 } from "./styled-components";

const QUESTIONS = [
    {
        question : "¿Qué tipo de negocios pueden beneficiarse mejor con los servicios de Orion?",
        answer: `Cualquier negocio que desee mejorar la eficiencia y la efectividad de sus procesos de servicio al cliente puede descubrir valor en los servicios de Orion. Ya sea una pequeña empresa o una gran corporación, nuestros chatbots se adaptan a las necesidades específicas de cada cliente.`
    },
    {
        question : "¿Cuánto tiempo se tarda en implementar un chatbot con IA de Orion?",
        answer: `El tiempo de implementación de un chatbot con IA de Orion depende del tamaño y la complejidad del proyecto, pero en general, nuestro equipo trabaja con eficiencia para garantizar una implementación rápida y sin problemas. El proceso de instalación puede variar entre 1 y 6 semanas.`
    },
    {
        question : "¿Cuáles son las principales ventajas de usar un chatbot con IA en mi negocio?",
        answer: `Las principales ventajas de usar un chatbot con IA en su negocio son mejorar la efectividad en la atención al cliente, aumentar la satisfacción y fidelización de los clientes, y reducir costos de atención atención al cliente y de personal y tener la capacidad de manejar una gran cantidad de conversaciones simultáneas.. Con ua IA de Orion, su negocio puede estar disponible las 24 horas del día, los 7 días de la semana, para responder rápidamente a las preguntas y necesidades de sus clientes.`
    },
    {
        question : "¿Qué sucede si mi negocio requiere más capacidad de conversación de lo previsto?",
        answer: `En Orion, ofrecemos flexibilidad en cuanto a la capacidad de conversación de nuestros chatbots. Si necesitas más capacidad de conversación de lo previsto, puedes ajustar fácilmente tu plan a uno con una mayor capacidad o pagar un excedente al finalizar el periodo de facturación.`
    },
    {
        question : "¿Cómo se integra el chatbot de Orion con mi sitio web o aplicación?",
        answer: `La integración de su chatbot Orion con su sitio web o aplicación es fácil y rápida. Ofrecemos una amplia gama de opciones de integración, incluyendo widgets, código incorporado y la capacidad de integrar el chatbot con otros servicios empresariales a través de APIs.`
    },
    {
        question : "¿Qué tipos tanta versatilidad puedo esperar de mi inteligencia artificial Orion?",
        answer: `Su IA puede ayudarlo con tareas como el servicio al cliente, la captación de leads, la gestión de citas, la respuesta a preguntas frecuentes y mucho más. Dependiendo de sus necesidades específicas, podemos personalizar su chatbot para incluir características adicionales, como la integración con su sistema de pago o la recopilación de información sobre su cliente.`
    },
];

const Faqs = () => {
    return(
        <WebWrapper>
            <Navbar darkMode={false}/>

            <Body>
                <Card>
                    <Title>Preguntas Frecuentes</Title>

                    {QUESTIONS.map( (question, idx) => {
                        return(
                            <QuestionContainer key={idx.toString() + question.question}>
                                <QuestionTitle>{question.question}</QuestionTitle>
                                <QuestionAnswer>{question.answer}</QuestionAnswer>
                            </QuestionContainer>
                        );
                    })}

                    <Title2>¿Tienes más preguntas?</Title2>

                    <AskButton><a href="/login">Pregúntale a Orion</a></AskButton>
                </Card>
            </Body>
        </WebWrapper>
    );
}

export default Faqs;