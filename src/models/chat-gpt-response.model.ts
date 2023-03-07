import { ChatCompletionUsage } from "./chat-completion-usage.model";
import { Choice } from "./choice-response.model";

export interface ChatGptResponse{
    id : string;
    object: string;
    created: number;
    choices: Array<Choice>;
    usage: ChatCompletionUsage;
}