import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-[#5b4f4f] min-h-screen text-white p-4 pb-24">
      <h1 className="text-xl font-bold mb-4">หน้าแรก</h1>

      {/* 🎭 ตัวละครยอดนิยม */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/character/1">
          <div className="bg-[#2f2a2a] rounded-xl p-2">
            <img src="https://picsum.photos/200?1" className="rounded-lg" />
            <p className="mt-2">Demon</p>
          </div>
        </Link>
        <Link to="/character/2">
          <div className="bg-[#2f2a2a] rounded-xl p-2">
            <img src="https://picsum.photos/200?2" className="rounded-lg" />
            <p className="mt-2">Ghost</p>
          </div>
        </Link>
      </div>

      {/* 📱 Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2f2a2a] flex justify-around py-3 rounded-t-xl">
        <Link to="/" className="flex flex-col items-center text-sm">
          🏠 <span>Home</span>
        </Link>
        <Link to="/chat/1" className="flex flex-col items-center text-sm">
          💬 <span>Chat</span>
        </Link>
        <Link to="/create" className="flex flex-col items-center text-sm">
          ➕ <span>Create</span>
        </Link>
        <Link to="/login" className="flex flex-col items-center text-sm">
          👤 <span>Profile</span>
        </Link>
      </div>
    </div>
  )
}
