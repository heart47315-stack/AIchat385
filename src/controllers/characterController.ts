import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET all characters
export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await prisma.character.findMany({
      include: { user: true }
    });

    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching characters" });
  }
};

// CREATE character
export const createCharacter = async (req: Request, res: Response) => {
  try {
    const { name, class: charClass, description, avatar, userId } = req.body;

    const character = await prisma.character.create({
      data: {
        name,
        class: charClass,
        description,
        avatar,
        userId
      }
    });

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating character" });
  }
};