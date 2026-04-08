import { useNavigate, useLocation } from "react-router-dom"

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const active = (path: string) =>
    location.pathname === path ? "text-white" : "text-gray-400"

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2f2a2a] flex justify-around items-center py-3 rounded-t-2xl shadow-xl">

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
  )
}
