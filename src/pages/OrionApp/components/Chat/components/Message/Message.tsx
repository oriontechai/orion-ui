import { MessageContainer, MessageWrapper, Text } from "./styled-components";

interface MessageProps{
    text : string;
    isFromUser : boolean;
}

const Message = ({text, isFromUser} : MessageProps) => {
    return(
        <MessageContainer isFromUser={isFromUser}>
            <MessageWrapper>
                <Text isFromUser={isFromUser}>
                    {text}
                </Text>
            </MessageWrapper>
        </MessageContainer>
    );
}

export default Message;