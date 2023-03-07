import { MessageContainer, MessageWrapper, Text } from "./styled-components";
import "./styled.css";

interface MessageProps {
    text: string;
    isFromUser: boolean;
    isDots: boolean;
}

const Message = ({ text, isFromUser, isDots }: MessageProps) => {

    const content = !isDots ? text : <div className="dot-elastic"></div>;

    return (
        <MessageContainer isFromUser={isFromUser}>
            <MessageWrapper>
                <Text isFromUser={isFromUser} isDots={isDots}>
                    {content}             
                </Text>

                
            </MessageWrapper>
        </MessageContainer>
    );
}

export default Message;




