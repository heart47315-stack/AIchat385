import { useState } from "react"
import { useParams } from "react-router-dom"

type Message = {
  text: string
  sender: "user" | "ai"
}

export default function Chat() {
  const { id } = useParams()
  const [messages, setMessages] = useState<Message[]>([
    { text: "สวัสดี 👋 ฉันคือ AI เพื่อนคุยของคุณ", sender: "ai" }
  ])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessage: Message = { text: input, sender: "user" }
    setMessages((prev) => [...prev, newMessage])

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()

    setMessages((prev) => [...prev, { text: data.reply, sender: "ai" }])
    setInput("")
  }

  return (
    <div className="flex flex-col h-screen bg-[#1f2937] text-white p-4">
      <h1 className="text-xl font-bold mb-4">ห้องแชท #{id}</h1>

      {/* 🗨️ แสดงข้อความ */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              m.sender === "user" ? "bg-blue-500 ml-auto" : "bg-gray-700"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* ✍️ กล่อง input */}
      <div className="flex mt-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l-lg text-black"
          placeholder="พิมพ์ข้อความ..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 rounded-r-lg"
        >
          ส่ง
        </button>
      </div>
    </div>
  )
}
