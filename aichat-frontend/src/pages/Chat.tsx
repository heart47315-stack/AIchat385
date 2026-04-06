import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const typeMessage = (text: string) => {
    let i = 0;
    setTyping(true);

    const interval = setInterval(() => {
      i++;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = text.slice(0, i);
        return updated;
      });

      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 15);
  };

  const sendMessage = async () => {
    if (!input.trim() || typing) return;

    const userMsg: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      { role: "assistant", content: "" },
    ]);

    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      typeMessage(res.data.reply);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a] text-white">

      {/* HEADER */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-800">
        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-semibold">AI Character</div>
          <div className="text-sm text-gray-400">
            {typing ? "กำลังพิมพ์..." : "ออนไลน์"}
          </div>
        </div>
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow
              ${
                msg.role === "user"
                  ? "bg-blue-500 rounded-br-none"
                  : "bg-gray-700 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="p-3 border-t border-gray-800 flex gap-2">
        <input
          className="flex-1 bg-gray-800 px-4 py-2 rounded-full outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 px-4 rounded-full"
        >
          ส่ง
        </button>
      </div>
    </div>
  );
}