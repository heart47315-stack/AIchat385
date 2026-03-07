const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { PrismaClient } = require("@prisma/client")
const http = require("http")
const { Server } = require("socket.io")

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: "*" }
})

/* ---------------- AUTH ---------------- */

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body

    const hash = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hash
      }
    })

    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) return res.status(404).json("User not found")

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) return res.status(401).json("Wrong password")

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET
  )

  res.json({ token, user })
})

/* ---------------- CHARACTER ---------------- */

app.post("/character/create", async (req, res) => {
  const { name, description, creatorId } = req.body

  const character = await prisma.character.create({
    data: {
      name,
      description,
      creatorId
    }
  })

  res.json(character)
})

app.get("/characters", async (req, res) => {
  const characters = await prisma.character.findMany()

  res.json(characters)
})

/* ---------------- CHAT ---------------- */

app.post("/chat/create", async (req, res) => {
  const { userId, characterId } = req.body

  const chat = await prisma.chat.create({
    data: {
      characterId,
      participants: {
        create: {
          userId
        }
      }
    }
  })

  res.json(chat)
})

app.get("/chat/:id", async (req, res) => {
  const chat = await prisma.chat.findUnique({
    where: {
      id: parseInt(req.params.id)
    },
    include: {
      messages: true
    }
  })

  res.json(chat)
})

/* ---------------- MESSAGE ---------------- */

app.post("/chat/message", async (req, res) => {
  const { chatId, userId, content } = req.body

  const message = await prisma.message.create({
    data: {
      chatId,
      userId,
      content
    }
  })

  io.to(`chat_${chatId}`).emit("new_message", message)

  res.json(message)
})

/* ---------------- SOCKET ---------------- */

io.on("connection", (socket) => {

  socket.on("join_chat", (chatId) => {
    socket.join(`chat_${chatId}`)
  })

  socket.on("send_message", async (data) => {

    const message = await prisma.message.create({
      data: {
        chatId: data.chatId,
        userId: data.userId,
        content: data.content
      }
    })

    io.to(`chat_${data.chatId}`).emit("new_message", message)
  })

})

/* ---------------- START SERVER ---------------- */

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running")
})