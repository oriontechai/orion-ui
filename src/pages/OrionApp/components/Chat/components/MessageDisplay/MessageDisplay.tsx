import { DisplayWrapper } from "./styled-components";
import { Message as MessageModel } from '../../../../../../models';
import Message from "../Message/Message";

interface MessageDisplayProps {
    messages: Array<MessageModel>
}

const MessageDisplay = ({ messages }: MessageDisplayProps) => {
    return(
        <DisplayWrapper id="messageDisplay" className="scroll">
            {messages.map((msg: MessageModel, index: number) => (
                <Message
                    key={msg.text + index.toString()}
                    text={msg.text}
                    isFromUser={msg.fromUser}
                />
            ))}
        </DisplayWrapper>
    );
}

export default MessageDisplay;