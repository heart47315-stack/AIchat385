import { useParams } from "react-router-dom"
import { useState } from "react"
import api from "../api/api"

export default function Chat(){

  const {id} = useParams()

  const [messages,setMessages] = useState([])
  const [input,setInput] = useState("")

  const send = async ()=>{

    const userMsg = {
      role:"user",
      text:input
    }

    setMessages([...messages,userMsg])

    const res = await api.post("/chat",{
      characterId:id,
      message:input
    })

    const aiMsg = {
      role:"ai",
      text:res.data.reply
    }

    setMessages(m=>[...m,aiMsg])

    setInput("")
  }

  return(

    <div className="chatPage">

      <div className="messages">

        {messages.map((m,i)=>(
          <div key={i} className={m.role}>
            {m.text}
          </div>
        ))}

      </div>

      <div className="inputBox">

        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
        />

        <button onClick={send}>
          Send
        </button>

      </div>

    </div>

  )
}