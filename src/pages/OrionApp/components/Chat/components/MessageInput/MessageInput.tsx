import { Input, MessageInputWrapper, SendButton } from "./styled-components";
import { IoIosSend } from 'react-icons/io';
import { useEffect } from "react";

interface MessageInputProps {
    submitMessage: (msg: string) => void,
    allowSubmit: boolean
}

const MessageInput = ({ submitMessage, allowSubmit }: MessageInputProps) => {

    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === "Enter" && allowSubmit) {
                const inputEle = (document.getElementById("msgInput") as HTMLInputElement);
                if (inputEle.value.length > 0) {
                    allowSubmit = false;
                    submitMessage(inputEle.value);
                    inputEle.value = "";
                }
            };
        };

        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    });

    return(
        <MessageInputWrapper>
            <Input id="msgInput" type="text" placeholder="Send Message..." />
            
            <SendButton>
                <IoIosSend color="white" size={25}/>
            </SendButton>
        </MessageInputWrapper>
    );
}

export default MessageInput;