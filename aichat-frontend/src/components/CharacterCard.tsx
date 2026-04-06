import { useState } from "react"

export default function CreateCharacter() {
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [img, setImg] = useState("")

  const handleSubmit = () => {
    alert(`สร้างตัวละครใหม่: ${name} (${tag})`)
    // TODO: ส่งไป backend หรือเก็บใน state
  }

  return (
    <div className="p-4 text-white bg-[#5b4f4f] min-h-screen">
      <h1 className="text-xl font-bold mb-4">สร้างตัวละครใหม่</h1>
      <input
        placeholder="ชื่อ"
        className="border p-2 mb-2 w-full text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Tag"
        className="border p-2 mb-2 w-full text-black"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        placeholder="Image URL"
        className="border p-2 mb-2 w-full text-black"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        สร้าง
      </button>
    </div>
  )
}
