import { useState } from "react"
import { Link } from "react-router-dom"

const characters = [
  { id: 1, name: "Demon", img: "https://picsum.photos/200?1" },
  { id: 2, name: "Ghost", img: "https://picsum.photos/200?2" },
  { id: 3, name: "Dark Boy", img: "https://picsum.photos/200?3" },
  { id: 4, name: "Vampire", img: "https://picsum.photos/200?4" },
]

export default function Home() {
  const [search, setSearch] = useState("")

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-[#6b5b5b] min-h-screen p-4 text-white pb-20">

      {/* 🔍 Search */}
      <input
        className="w-full p-3 rounded-full text-black mb-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎭 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map(c => (
          <Link to={`/character/${c.id}`} key={c.id}>
            <div className="bg-white rounded-xl overflow-hidden">
              <img src={c.img} className="w-full h-40 object-cover" />
              <p className="text-black text-center py-2">{c.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 📱 Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white text-black flex justify-around py-3">
        <Link to="/">🏠</Link>
        <Link to="/chat">💬</Link>
        <Link to="/login">👤</Link>
      </div>
    </div>
  )
}