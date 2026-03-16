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

// routes
app.use("/api/auth", authRoutes)
app.use("/api/characters", characterRoutes)
app.use("/api/chat", chatRoutes)

// health check
app.get("/", (req, res) => {
  res.send("AI Chat Backend Running")
})

// create server
const server = http.createServer(app)

// socket
const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

initChatSocket(io)

const PORT = 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})