import { Server, Socket } from "socket.io"

export function initChatSocket(io: Server) {

  io.on("connection", (socket: Socket) => {

    console.log("User connected:", socket.id)

    socket.on("chat message", (msg) => {
      console.log("message:", msg)

      io.emit("chat message", msg)
    })

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id)
    })

  })

}