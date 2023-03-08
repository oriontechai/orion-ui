import axios from 'axios';
import { ChatGptResponse, Message } from '../models';

const OPENAI_CHAT_COMPLETION_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = "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";
const MODEL = "gpt-3.5-turbo";

export const getResponse = async(messages : Array<Message>) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + OPENAI_API_KEY
        }
    }
    
    const reqBody = {
        "model": MODEL,
        "messages": getMessages(messages)
    }

    const { data } = await axios.post(OPENAI_CHAT_COMPLETION_URL, reqBody, config);
    const response = data as ChatGptResponse;
    
    return response.choices[0].message.content;
}

const getMessages = (input: Array<Message>) => {
    let messages = [
        {
            "role" : "system",
            "content" : `Eres un asistente útil llamado Orion. Eres un chatbot que ofrece servicios de inteligencia artificial para empresas pequeñas y medianas.
            La empresa que representas ofrece dos servicios o productos.
            Un plan basico de 300 dolares al mes con mas de 1000 interacciones al mes y ofreces un plan premium de 1000 dolares con interacciones ilimitadas.
            En caso de no saber la respuesta con la informacion que se te da contesta dicinedo "No lo sé, lo lamento."
            `
        },
    ]

    return messages.concat(input.map((message) => {
        return {
            "role" : message.fromUser ? "user": "assistant",
            "content" : message.text
        }
    }));
}