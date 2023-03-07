import { ChatCompletionMessage } from "./chat-completion-message.model";

export interface Choice{
    index: number;
    message: ChatCompletionMessage;
    finishReason: string;
}