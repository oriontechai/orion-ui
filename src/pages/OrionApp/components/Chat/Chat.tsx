import { useState, useEffect } from 'react';
import { Message as MessageModel } from "../../../../models";
import { MessageDisplay, MessageInput } from "./components";
import { ChatWrapper } from "./styled-components";

// SERVICES
import { getResponse } from '../../../../services';

const Chat = () => {
    const [conversation, setConversation] = useState(Array<MessageModel>);

    const [disableMsgInput, setDisableMsgInput] = useState(false);

    useEffect(() => {
        setConversation([]);
    }, []);

    const submitMessage = async (msgTxt: string, isFromUser: boolean) => {
        const msg:  MessageModel = {
            text: msgTxt, 
            fromUser: isFromUser
        };

        setConversation((prev) => [...prev, msg]);

        const msgsCotainer = (document.getElementById("messageDisplay") as HTMLInputElement);
        msgsCotainer.scrollTop = msgsCotainer.scrollHeight;

        if (isFromUser) {
            setDisableMsgInput(true);
            const response = await getResponse([...conversation.slice(-10), msg]);
            submitMessage(response, false);
            setDisableMsgInput(false);
        }
    }

    return(
        <ChatWrapper>
            <MessageDisplay messages={conversation} addDots={disableMsgInput}/>
            <MessageInput submitMessage={(msgTxt) => submitMessage(msgTxt, true)} disabled={disableMsgInput}/>
        </ChatWrapper>
    );
}

export default Chat;