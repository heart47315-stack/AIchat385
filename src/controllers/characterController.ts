import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getCharacters = async (req: Request, res: Response) => {

  const characters = await prisma.character.findMany({
    include: { user: true }
  })

  res.json(characters)
}

export const createCharacter = async (req: Request, res: Response) => {

  const { name, tag, userId } = req.body;

  const character = await prisma.character.create({
    data: {
      name,
      tag,
      userId
    }
  });

  res.json(character);
}