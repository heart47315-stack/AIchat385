"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const openai_1 = __importDefault(require("openai"));
const client = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
// เก็บ memory ชั่วคราว (ต่อ user)
const memory = new Map();
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = "user1";
        if (!memory.has(userId)) {
            memory.set(userId, []);
        }
        const history = memory.get(userId);
        history.push({
            role: "user",
            content: message,
        });
        // จำกัด memory
        if (history.length > 10) {
            history.shift();
        }
        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "คุณคือ AI ที่พูดเหมือนมนุษย์ เป็นกันเอง ฉลาด มีอารมณ์ และจำบทสนทนาได้",
                },
                ...history,
            ],
        });
        const reply = completion.choices[0].message.content;
        history.push({
            role: "assistant",
            content: reply,
        });
        res.json({ reply });
    }
    catch (error) {
        console.error("AI ERROR:", error.message);
        res.status(500).json({ error: error.message });
    }
};
exports.sendMessage = sendMessage;
