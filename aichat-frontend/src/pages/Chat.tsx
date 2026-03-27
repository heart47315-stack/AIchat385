import { useParams } from "react-router-dom"
import { useState } from "react"
import api from "../api/api.ts"
import type { Message } from "../types"

export default function Chat() {
  const { id } = useParams()

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim()) return

    const userMsg: Message = {
      role: "user",
      text: input
    }

    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      const res = await api.post("/chat", {
        characterId: id,
        message: input
      })

      const aiMsg: Message = {
        role: "ai",
        text: res.data.reply
      }

      setMessages(prev => [...prev, aiMsg])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatPage">

      {/* Header */}
      <div className="chatHeader">
        <h2>Chat AI #{id}</h2>
      </div>

      {/* Messages */}
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            {m.text}
          </div>
        ))}

        {loading && <div className="bubble ai">Typing...</div>}
      </div>

      {/* Input */}
      <div className="inputBox">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button onClick={send}>➤</button>
      </div>

    </div>
  )
}