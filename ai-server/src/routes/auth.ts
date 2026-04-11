import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma"

const router = express.Router()

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashed
    }
  })

  res.json(user)
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    return res.status(400).json({ error: "User not found" })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return res.status(400).json({ error: "Wrong password" })
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  )

  res.json({
    token,
    user
  })
})

export default router