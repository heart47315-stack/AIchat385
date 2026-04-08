import { Link, useNavigate, useLocation } from "react-router-dom"
import BottomNav from "../components/BottomNav"

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()

  const active = (path: string) =>
    location.pathname === path ? "text-white" : "text-gray-400"

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
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[1,2,3,4].map((i) => (
          <Link key={i} to={`/chat/${i}`}>
            <div className="bg-[#3a3232] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src={`https://picsum.photos/300?${i}`}
                className="w-full h-14 object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-semibold">Character {i}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 🔘 ปุ่มเปลี่ยนหน้า */}
      <div className="flex justify-between mb-6">
        {/* 🔙 Back */}
        <button onClick={() => navigate(-1)} className="text-gray-300">
          ⬅️
        </button>

        {/* 🏠 Home */}
        <button onClick={() => navigate("/")} className={active("/")}>
          🏠
        </button>

        {/* 💬 Chat */}
        <button onClick={() => navigate("/chat/1")} className={active("/chat/1")}>
          💬
        </button>

        {/* 🔥 Floating Center Button */}
        <button
          onClick={() => navigate("/create")}
          className="bg-white text-black w-14 h-14 rounded-full text-2xl flex items-center justify-center -mt-8 shadow-lg"
        >
          +
        </button>

        {/* 👤 Profile */}
        <button onClick={() => navigate("/profile")} className={active("/profile")}>
          👤
        </button>

        {/* ➡️ Forward */}
        <button onClick={() => navigate(1)} className="text-gray-300">
          ➡️
        </button>
      </div>

      {/* ✅ Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
