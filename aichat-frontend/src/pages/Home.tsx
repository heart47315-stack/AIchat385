import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#6b5c5c] text-white p-4">
      <h1 className="text-2xl font-bold mb-6">หน้าแรก</h1>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate("/chat")}
          className="bg-[#5a4d4d] p-6 rounded-2xl"
        >
          ห้องแชท
        </button>

        <button
          onClick={() => navigate("/create")}
          className="bg-[#5a4d4d] p-6 rounded-2xl"
        >
          สร้างตัวละคร
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="bg-[#5a4d4d] p-6 rounded-2xl"
        >
          โปรไฟล์
        </button>
      </div>
    </div>
  )
}