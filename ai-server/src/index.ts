import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import chatRoute from "./routes/chat"
import charRoute from "./routes/character"
import authRoute from "./routes/auth"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/chat", chatRoute)
app.use("/api/character", charRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})