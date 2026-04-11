import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// 🔥 OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// 📦 mock database (ชั่วคราว)
let characters = [
  { id: 1, name: "AI Girl", tag: "Fantasy", img: "https://picsum.photos/300?1" },
  { id: 2, name: "AI Boy", tag: "Romance", img: "https://picsum.photos/300?2" }
]

// ================= API =================

// ✅ chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "คุณคือ AI เพื่อนคุย" },
        { role: "user", content: message }
      ]
    })

    res.json({
      reply: completion.choices[0].message.content
    })
  } catch (err) {
    res.status(500).json({ error: "AI error" })
  }
})

// ✅ get characters
app.get("/api/characters", (req, res) => {
  res.json(characters)
})

// ✅ create character
app.post("/api/character", (req, res) => {
  const { name, tag, img } = req.body

  const newChar = {
    id: Date.now(),
    name,
    tag,
    img
  }

  characters.push(newChar)

  res.json(newChar)
})

// ================= RUN =================
app.listen(process.env.PORT || 5000, () => {
  console.log("✅ Server running http://localhost:5000")
})