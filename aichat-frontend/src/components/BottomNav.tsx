import { useNavigate, useLocation } from "react-router-dom"

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const active = (path: string) =>
    location.pathname === path ? "text-white" : "text-gray-400"

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2f2a2a] flex justify-around items-center py-3 rounded-t-2xl shadow-xl">

      <button onClick={() => navigate("/")} className={active("/")}>
        🏠
      </button>

      <button onClick={() => navigate("/chat")} className={active("/chat")}>
        💬
      </button>

      {/* 🔥 ปุ่มกลางลอย */}
      <button
        onClick={() => navigate("/create")}
        className="bg-white text-black w-14 h-14 rounded-full text-2xl flex items-center justify-center -mt-8 shadow-lg"
      >
        +
      </button>

      <button onClick={() => navigate("/profile")} className={active("/profile")}>
        👤
      </button>

    </div>
  )
}