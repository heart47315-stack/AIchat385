import { useState } from "react"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

export default function CreateCharacter() {
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [img, setImg] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      await api.post("/character", {
        name,
        tag,
        img,
        userId: 1
      })

      alert("สร้างตัวละครสำเร็จ")
      navigate("/")
    } catch {
      alert("สร้างไม่สำเร็จ")
    }
  }

  return (
    <div className="min-h-screen bg-[#6b5c5c] text-white p-6">
      <h1 className="text-2xl font-bold mb-6">สร้างตัวละคร</h1>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded text-black"
          placeholder="ชื่อตัวละคร"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded text-black"
          placeholder="แท็ก"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <input
          className="w-full p-3 rounded text-black"
          placeholder="ลิงก์รูปภาพ"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-3 rounded-full"
        >
          สร้างตัวละคร
        </button>
      </div>
    </div>
  )
}