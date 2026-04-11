import express from "express"
import { prisma } from "../lib/prisma"

const router = express.Router()

router.get("/", async (req, res) => {
  const data = await prisma.character.findMany()
  res.json(data)
})

router.post("/", async (req, res) => {
  const { name, tag, img, userId } = req.body

  const char = await prisma.character.create({
    data: {
      name,
      tag,
      img,
      userId: Number(userId)
    }
  })

  res.json(char)
})

export default router