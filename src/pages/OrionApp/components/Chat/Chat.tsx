import { useState, useEffect } from 'react';
import { Message as MessageModel } from "../../../../models";
import { MessageDisplay, MessageInput } from "./components";
import { ChatWrapper } from "./styled-components";

const Chat = () => {
    const back = "http://127.0.0.1:8080/api/v1/chat/get-completion";

    const [conversation, setConversation] = useState(Array<MessageModel>);

    const [allowSubmit, setAllowSubmit] = useState(true);

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
            const response = await fetch(
                back,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : '*'
                    },
                    body: JSON.stringify( [...conversation.slice(-10), msg] )
                }
            );

            const resBody = await response.json();
            submitMessage(resBody.text, false);
            setAllowSubmit(true);
        }
    }

    return(
        <ChatWrapper>
            <MessageDisplay messages={conversation}/>
            <MessageInput submitMessage={(msgTxt) => submitMessage(msgTxt, true)} allowSubmit={allowSubmit}/>
        </ChatWrapper>
    );
}

export default Chat;