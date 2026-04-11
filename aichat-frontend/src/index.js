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

// ✅ test route
app.get("/", (req, res) => {
  res.send("API is running")
})

// ✅ chat API
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "คุณคือ AI เพื่อนคุย" },
        { role: "user", content: message },
      ],
    })

    res.json({
      reply: completion.choices[0].message.content,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "AI error" })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`)
})