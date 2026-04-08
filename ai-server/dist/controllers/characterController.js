"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = exports.getCharacters = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
// GET all characters
const getCharacters = async (req, res) => {
    try {
        const characters = await prisma_1.default.character.findMany({
            include: { user: true },
        });
        res.json(characters);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching characters" });
    }
};
exports.getCharacters = getCharacters;
// CREATE character
const createCharacter = async (req, res) => {
    try {
        const { name, class: charClass, description, avatar, userId } = req.body;
        const character = await prisma_1.default.character.create({
            data: {
                name,
                class: charClass,
                description,
                avatar,
                userId,
            },
        });
        res.json(character);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating character" });
    }
};
exports.createCharacter = createCharacter;
