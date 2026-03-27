import { useParams } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

type Message = {
  text: string
  sender: "user" | "ai"
}

export default function Chat() {
  const { id } = useParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  // 🔥 auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // 💾 โหลดแชทเก่า
  useEffect(() => {
    const saved = localStorage.getItem("chat")
    if (saved) setMessages(JSON.parse(saved))
  }, [])

  // 💾 save แชท
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages))
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = {
      text: input,
      sender: "user"
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input,
          characterId: id,
          sessionId: "user1"
        })
      })

      const data = await res.json()

      const aiMessage: Message = {
        text: data.reply,
        sender: "ai"
      }

      setMessages(prev => [...prev, aiMessage])

    } catch {
      setMessages(prev => [
        ...prev,
        { text: "❌ AI error", sender: "ai" }
      ])
    }

    setLoading(false)
  }

  return (
    <div className="bg-[#6b5b5b] min-h-screen text-white flex flex-col">

      <h1 className="p-3 border-b text-center font-bold">
        Chat with {id || "AI"}
      </h1>

      <div className="flex-1 p-3 space-y-2 overflow-y-auto flex flex-col">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-2 rounded-lg ${
              m.sender === "user"
                ? "bg-indigo-500 self-end"
                : "bg-white text-black self-start"
            }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="bg-white text-black p-2 rounded-lg self-start">
            AI is typing...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="p-3 flex gap-2 bg-[#5a4c4c]">
        <input
          className="flex-1 p-2 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage()
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-indigo-500 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  )
}