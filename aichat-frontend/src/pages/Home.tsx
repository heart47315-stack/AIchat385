import { Link } from "react-router-dom"
import BottomNav from "../components/BottomNav"   // ✅ import component

export default function Home() {
  return (
    <div className="bg-[#2b2525] min-h-screen text-white p-4 pb-24">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">AI Chat</h1>

      {/* Search */}
      <input
        placeholder="ค้นหา..."
        className="w-full p-3 rounded-lg bg-[#3a3232] mb-6 focus:outline-none"
      />

      {/* Category Tabs */}
      <div className="flex gap-3 mb-6">
        <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">All</span>
        <span className="bg-[#3a3232] px-4 py-2 rounded-full text-sm">Fantasy</span>
        <span className="bg-[#3a3232] px-4 py-2 rounded-full text-sm">Romance</span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map((i) => (
          <Link key={i} to={`/chat/${i}`}>
            <div className="bg-[#3a3232] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              {/* 🔽 ลดขนาดรูปภาพลงให้เหมาะสม */}
              <img
                src={`https://picsum.photos/300?${i}`}
                className="w-full h-28 object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-semibold">Character {i}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ✅ Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
