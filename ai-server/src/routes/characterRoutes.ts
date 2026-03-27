import { Router } from "express";
import { getCharacters, createCharacter } from "../controllers/characterController";

const router = Router();

router.get("/", getCharacters);
router.post("/", createCharacter);

export default router;