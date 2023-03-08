import axios from "axios";
import { Message } from "../models";

const URL = "http://localhost:8080/api/v1/chat/get-completion"

export const getChatCompletion = async (messages: Array<Message>) => {
    const { data } = await axios.post(URL, messages);
    
    return data?.text as string;
}