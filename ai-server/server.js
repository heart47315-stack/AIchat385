import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// 🧠 เก็บประวัติแชท
const chatHistory = {}

app.post("/chat", async (req, res) => {
  try {
    const { message, sessionId = "default", characterId } = req.body

    if (!chatHistory[sessionId]) {
      chatHistory[sessionId] = []
    }

    // เพิ่มข้อความ user
    chatHistory[sessionId].push({
      role: "user",
      content: message
    })

    // 🎭 personality
    let systemPrompt = "You are a helpful AI."

    if (characterId == 1) {
      systemPrompt = "You are a scary ghost. Talk in creepy style."
    } else if (characterId == 2) {
      systemPrompt = "You are a cute anime girl."
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...chatHistory[sessionId]
      ],
    })

    const reply = response.choices[0].message.content

    // เพิ่ม AI reply
    chatHistory[sessionId].push({
      role: "assistant",
      content: reply
    })

    res.json({ reply })

  } catch (err) {
    console.error(err)
    res.status(500).json({ reply: "❌ AI error" })
  }
})

app.listen(3000, () => {
  console.log("🔥 AI Server running at http://localhost:3000")
})