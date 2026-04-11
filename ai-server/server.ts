import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/auth"
import chatRoutes from "./routes/chat"
import characterRoutes from "./routes/character"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/character", characterRoutes)

app.listen(5000, () => {
  console.log("🔥 Server running at http://localhost:5000")
})