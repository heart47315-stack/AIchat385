import { Request, Response } from "express";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// เก็บ memory ชั่วคราว (ต่อ user)
const memory = new Map<string, any[]>();

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const userId = "user1";

    if (!memory.has(userId)) {
      memory.set(userId, []);
    }

    const history = memory.get(userId)!;

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
          content:
            "คุณคือ AI ที่พูดเหมือนมนุษย์ เป็นกันเอง ฉลาด มีอารมณ์ และจำบทสนทนาได้",
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

  } catch (error: any) {
    console.error("AI ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
};