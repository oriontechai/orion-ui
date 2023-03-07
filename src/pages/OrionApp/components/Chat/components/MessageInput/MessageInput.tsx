import { Input, MessageInputWrapper, SendButton } from "./styled-components";
import { IoIosSend } from 'react-icons/io';
import { useEffect } from "react";

interface MessageInputProps {
    submitMessage: (msg: string) => void,
    disabled: boolean
}

const MessageInput = ({ submitMessage, disabled }: MessageInputProps) => {

    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === "Enter") {
                const inputEle = (document.getElementById("msgInput") as HTMLInputElement);
                if (inputEle.value.length > 0) {
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
            <Input id="msgInput" type="text" placeholder="Send Message..." disabled={disabled}/>
            
            <SendButton disabled={disabled}>
                <IoIosSend color="white" size={25}/>
            </SendButton>
        </MessageInputWrapper>
    );
}

export default MessageInput;