import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Register() {
  const navigate = useNavigate()

  // 📌 state เก็บข้อมูล
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // 📌 สมัครสมาชิก
  const handleRegister = () => {
    if (!username || !email || !password) {
      alert("กรุณากรอกข้อมูลให้ครบ")
      return
    }

    // 🔥 mock สมัครสำเร็จ
    alert("สมัครสำเร็จ!")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#5b4f4f] flex items-center justify-center text-white">

      {/* 📦 Card */}
      <div className="bg-[#3b3434] p-6 rounded-2xl w-[300px] shadow-lg">

        {/* 👤 Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-2xl">
            👤
          </div>
        </div>

        {/* 🧾 Title */}
        <h1 className="text-center text-lg mb-4">สมัครสมาชิก</h1>

        {/* 👤 Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 rounded mb-3 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* 📧 Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded mb-3 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 🔒 Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded mb-3 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔘 Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-white text-black py-2 rounded-full mb-2 hover:bg-gray-200 transition"
        >
          สมัครสมาชิก
        </button>

        {/* 🔗 ไปหน้า Login */}
        <p className="text-center text-sm mt-3">
          มีบัญชีแล้ว?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            เข้าสู่ระบบ
          </span>
        </p>
      </div>
    </div>
  )
}