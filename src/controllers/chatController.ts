import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getMessages = async (req: Request, res: Response) => {
  const messages = await prisma.message.findMany({
    include: { user: true }
  })

  res.json(messages)
}

export const sendMessage = async (req: Request, res: Response) => {
  const { content, userId } = req.body

  const message = await prisma.message.create({
    data: {
      content,
      userId
    }
  })

  res.json(message)
}