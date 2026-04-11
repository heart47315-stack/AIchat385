import express from "express"
import OpenAI from "openai"
import { prisma } from "../lib/prisma"

const router = express.Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

router.post("/", async (req, res) => {
  try {
    const { message, userId } = req.body

    await prisma.message.create({
      data: {
        text: message,
        sender: "user",
        userId: Number(userId)
      }
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "คุณคือ AI เพื่อนคุย" },
        { role: "user", content: message }
      ]
    })

    const reply = completion.choices[0].message.content || ""

    await prisma.message.create({
      data: {
        text: reply,
        sender: "ai",
        userId: Number(userId)
      }
    })

    res.json({ reply })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "AI error" })
  }
})

export default router