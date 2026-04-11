import { useState } from "react"
import api from "../api/api"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<any[]>([])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input

    setMessages(prev => [
      ...prev,
      { text: userMessage, sender: "user" }
    ])

    setInput("")

    try {
      const res = await api.post("/chat", {
        message: userMessage,
        userId: 1
      })

      setMessages(prev => [
        ...prev,
        { text: res.data.reply, sender: "ai" }
      ])
    } catch {
      alert("ส่งข้อความไม่สำเร็จ")
    }
  }

  return (
    <div className="min-h-screen bg-[#6b5c5c] text-white flex flex-col">
      
      {/* Header */}
      <div className="p-4 text-xl font-bold border-b border-gray-500">
        ห้องแชท AI
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-2xl max-w-[70%] ${
              m.sender === "user"
                ? "bg-white text-black ml-auto"
                : "bg-[#5a4d4d]"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 flex gap-2">
        <input
          className="flex-1 p-3 rounded-full text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
        />
        <button
          onClick={sendMessage}
          className="bg-white text-black px-6 rounded-full"
        >
          ส่ง
        </button>
      </div>
    </div>
  )
}