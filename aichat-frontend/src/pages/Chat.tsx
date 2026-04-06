import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

// 📌 กำหนด type ของ message (แก้ error หลัก!)
type Message = {
  text: string
  sender: "user" | "ai"
}

export default function Chat() {
  // 📌 รับ id จาก URL เช่น /chat/1
  const { id } = useParams()

  // 📌 ใช้เปลี่ยนหน้า
  const navigate = useNavigate()

  // 📌 state เก็บข้อความทั้งหมด
  const [messages, setMessages] = useState<Message[]>([
    { text: "สวัสดี 👋", sender: "ai" }
  ])

  // 📌 state เก็บ input
  const [input, setInput] = useState("")

  // 📌 ฟังก์ชันส่งข้อความ
  const sendMessage = () => {
    if (!input.trim()) return // ❌ กันส่งค่าว่าง

    // ✅ เพิ่มข้อความ user
    const newMessages: Message[] = [
      ...messages,
      { text: input, sender: "user" }
    ]

    setMessages(newMessages)
    setInput("") // เคลียร์ input

    // 🤖 mock AI ตอบกลับ
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "ตอบกลับ: " + input, sender: "ai" }
      ])
    }, 500)
  }

  return (
    <div className="h-screen flex flex-col bg-black text-white">

      {/* 🔙 Header */}
      <div className="p-3 flex items-center gap-2 bg-[#2f2a2a]">
        <button onClick={() => navigate(-1)}>⬅</button>
        <h1>Character {id}</h1>
      </div>

      {/* 💬 Chat Area */}
      <div
        className="flex-1 p-3 overflow-y-auto flex flex-col gap-3"
        style={{
          backgroundImage: `url(https://picsum.photos/400?${id})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔥 overlay ดำ */}
        <div className="bg-black/50 p-3 rounded-xl flex flex-col gap-3">

          {/* 🧠 วนลูปแสดงข้อความ */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] p-3 rounded-xl ${
                msg.sender === "user"
                  ? "bg-white text-black self-end"
                  : "bg-[#d1d1d1] text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

        </div>
      </div>

      {/* ✏️ Input */}
      <div className="p-3 bg-[#2f2a2a] flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          className="flex-1 p-2 rounded-full text-black"
        />

        <button
          onClick={sendMessage}
          className="bg-white text-black px-4 rounded-full"
        >
          ส่ง
        </button>
      </div>
    </div>
  )
}