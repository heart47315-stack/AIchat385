import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import OpenAI from "openai"

const app = express()
app.use(cors())
app.use(bodyParser.json())

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post("/api/chat", async (req: Request, res: Response) => {
  const { message } = req.body

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "คุณคือ AI ที่ตอบกลับเหมือนมนุษย์ เป็นกันเอง และเข้าใจบริบท" },
        { role: "user", content: message },
      ],
    })

    res.json({ reply: response.choices[0].message?.content })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "เกิดข้อผิดพลาด" })
  }
})

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"))
