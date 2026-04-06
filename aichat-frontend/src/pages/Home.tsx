import { useState } from "react"
import { Link } from "react-router-dom"

// 📌 mock data
const characters = [
  { id: 1, name: "Demon", img: "https://picsum.photos/200?1", tag: "Dark" },
  { id: 2, name: "Ghost", img: "https://picsum.photos/200?2", tag: "Horror" },
  { id: 3, name: "Dark Boy", img: "https://picsum.photos/200?3", tag: "Sad" },
  { id: 4, name: "Vampire", img: "https://picsum.photos/200?4", tag: "Fantasy" },
]

export default function Home() {
  // 📌 search
  const [search, setSearch] = useState("")

  // 📌 filter ตัวละคร
  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-[#5b4f4f] min-h-screen p-4 text-white pb-24">

      {/* 🔍 Search Bar */}
      <div className="bg-[#3b3434] rounded-full px-4 py-2 flex items-center mb-4">
        <span className="mr-2">🔍</span>
        <input
          placeholder="ค้นหา..."
          className="bg-transparent outline-none flex-1 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🏷 Filter Tags (เหมือนใน mockup) */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
          ทั้งหมด
        </button>
        <button className="bg-[#3b3434] px-3 py-1 rounded-full text-sm">
          Dark
        </button>
        <button className="bg-[#3b3434] px-3 py-1 rounded-full text-sm">
          Horror
        </button>
        <button className="bg-[#3b3434] px-3 py-1 rounded-full text-sm">
          Fantasy
        </button>
      </div>

      {/* 🎭 Grid ตัวละคร */}
      <div className="grid grid-cols-2 gap-4">
        {filtered.map((c) => (
          <Link to={`/character/${c.id}`} key={c.id}>
            
            <div className="bg-[#2f2a2a] rounded-2xl p-2 shadow-md">
              
              {/* 🖼 รูป */}
              <img
                src={c.img}
                className="w-full h-40 object-cover rounded-xl"
              />

              {/* 🏷 Tag */}
              <div className="mt-2">
                <span className="bg-[#5a5050] px-2 py-1 rounded-full text-xs">
                  {c.tag}
                </span>
              </div>

              {/* 🧑‍🎤 Name */}
              <p className="mt-1 text-sm">{c.name}</p>
            </div>

          </Link>
        ))}
      </div>

      {/* 📱 Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2f2a2a] flex justify-around py-3 rounded-t-xl">
        
        <Link to="/" className="flex flex-col items-center text-sm">
          🏠
          <span>Home</span>
        </Link>

        <Link to="/chat/1" className="flex flex-col items-center text-sm">
          💬
          <span>Chat</span>
        </Link>

        <Link to="/login" className="flex flex-col items-center text-sm">
          👤
          <span>Profile</span>
        </Link>

      </div>
    </div>
  )
}