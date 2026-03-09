import express from "express"
import {
  getCharacters,
  createCharacter
} from "../controllers/characterController"

const router = express.Router()

router.get("/", getCharacters)
router.post("/", createCharacter)

export default router