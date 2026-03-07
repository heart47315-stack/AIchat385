const send = async ()=>{

  const res = await api.post("/chat/ai",{
    message:input
  })

  setMessages([...messages,
    {content:input},
    {content:res.data.reply}
  ])

}
import { io } from "socket.io-client"

const socket = io("http://localhost:3000")

socket.emit("join_chat", chatId)

socket.on("new_message",(msg)=>{
  setMessages(m=>[...m,msg])
})