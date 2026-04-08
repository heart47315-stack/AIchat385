import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import OpenAI from "openai"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()
app.use(cors())
app.use(bodyParser.json())

// 📌 อ่านค่า .env
const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret"
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// 📌 API: Chat กับ AI
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

// 📌 API: Register
app.post("/api/register", async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = await prisma.user.create({ data: { username, password } })
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" })
  res.json({ user, token })
})

// 📌 API: Login
app.post("/api/login", async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user = await prisma.user.findUnique({ where: { username } })
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" })
  }
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" })
  res.json({ user, token })
})

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
