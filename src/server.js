import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

import chatRoutes from "./routes/chatRoutes.js"
import characterRoutes from "./routes/characterRoutes.js"
import { initChatSocket } from "./socket/chatSocket.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/chat", chatRoutes)
app.use("/api/character", characterRoutes)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

initChatSocket(io)

server.listen(3000, () => {
  console.log("Server running on port 3000")
})