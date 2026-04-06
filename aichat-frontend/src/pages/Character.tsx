import { useParams, useNavigate } from "react-router-dom"

export default function Character() {
  // 📌 ดึง id จาก URL เช่น /character/1
  const { id } = useParams()

  // 📌 ใช้สำหรับเปลี่ยนหน้า
  const navigate = useNavigate()

  return (
    // 🌑 พื้นหลังทั้งหน้า (dark theme)
    <div className="min-h-screen bg-[#2f2a2a] text-white p-4">

      {/* 🔙 ปุ่มย้อนกลับ */}
      <button
        onClick={() => navigate(-1)} // ← ย้อนกลับไปหน้าก่อน
        className="text-sm opacity-80 hover:opacity-100"
      >
        ⬅ Back
      </button>

      {/* 📦 Card กลางจอ */}
      <div className="mt-6 bg-[#3b3434] rounded-2xl p-4 shadow-lg max-w-md mx-auto">

        {/* 🖼 รูปตัวละคร */}
        <div className="flex justify-center">
          <img
            src={`https://picsum.photos/300?${id}`} 
            // ใช้รูป mockup และเปลี่ยนตาม id
            className="rounded-xl w-full h-[250px] object-cover"
            // object-cover = ไม่ให้รูปยืด
          />
        </div>

        {/* 🧑‍🎤 ชื่อตัวละคร */}
        <h1 className="text-xl font-semibold mt-3 text-center">
          Character {id}
        </h1>

        {/* 🏷 Tag */}
        <div className="flex gap-2 justify-center mt-2">
          <span className="bg-[#5a5050] px-3 py-1 rounded-full text-sm">
            AI
          </span>
          <span className="bg-[#5a5050] px-3 py-1 rounded-full text-sm">
            Fantasy
          </span>
        </div>

        {/* 📝 คำอธิบาย */}
        <p className="text-sm opacity-80 mt-3 text-center">
          ตัวละคร AI สำหรับการพูดคุยและสร้างเรื่องราว
        </p>

        {/* 🔘 ปุ่มต่าง ๆ */}
        <div className="mt-5 flex flex-col gap-2">

          {/* 💬 ปุ่มไปหน้า Chat */}
          <button
            onClick={() => navigate(`/chat/${id}`)}
            // ไปหน้า /chat/id
            className="bg-white text-black py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            💬 เริ่มแชท
          </button>

          {/* ❤️ ปุ่ม Favorite (ยังไม่ทำ logic) */}
          <button
            className="bg-[#5a5050] py-2 rounded-full hover:bg-[#6b5b5b] transition"
          >
            ❤️ เพิ่มรายการโปรด
          </button>

        </div>
      </div>
    </div>
  )
}