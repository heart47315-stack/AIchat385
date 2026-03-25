import "dotenv/config"

import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import authRoutes from "./routes/authRoutes"
import characterRoutes from "./routes/characterRoutes"
import chatRoutes from "./routes/chatRoutes"

import { initChatSocket } from "./socket/chatSocket"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/characters", characterRoutes)
app.use("/api/chat", chatRoutes)

app.get("/", (req, res) => {
  res.send("AI Chat Backend Running")
})

const server = http.createServer(app)

const io = new Server(server, {
  cors: { origin: "*" }
})

initChatSocket(io)

server.listen(3000, () => {
  console.log("Server running on port 3000")
})