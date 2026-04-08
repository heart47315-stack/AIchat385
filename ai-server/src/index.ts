import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import OpenAI from "openai"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import bcrypt from "bcrypt"

dotenv.config()

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// ✅ Chat API
app.post("/api/chat", async (req: Request, res: Response) => {
  const { message } = req.body

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "คุณคือ AI ที่ตอบแบบเป็นกันเอง เข้าใจบริบท",
        },
        { role: "user", content: message },
      ],
    })

    res.json({
      reply: response.choices[0].message?.content,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "เกิดข้อผิดพลาด" })
  }
})

// ✅ Register
app.post("/api/register", async (req: Request, res: Response) => {
  const { username, password } = req.body

  try {
    // 🔒 hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    })

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    })

    res.json({ user, token })
  } catch (error) {
    res.status(400).json({ error: "สมัครสมาชิกไม่สำเร็จ" })
  }
})

// ✅ Login
app.post("/api/login", async (req: Request, res: Response) => {
  const { username, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    })

    if (!user) {
      return res.status(401).json({ error: "ไม่พบผู้ใช้" })
    }

    // 🔒 compare password
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ error: "รหัสผ่านไม่ถูกต้อง" })
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    })

    res.json({ user, token })
  } catch (error) {
    res.status(500).json({ error: "เกิดข้อผิดพลาด" })
  }
})

// ✅ test
app.get("/", (req, res) => {
  res.send("API ทำงานแล้ว 🚀")
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})