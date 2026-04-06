import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
  const navigate = useNavigate()

  // 📌 state เก็บ email + password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // 📌 กด login
  const handleLogin = () => {
    if (!email || !password) {
      alert("กรุณากรอกข้อมูลให้ครบ")
      return
    }

    // 🔥 mock login สำเร็จ
    navigate("/")
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

        {/* 🧑‍💻 Title */}
        <h1 className="text-center text-lg mb-4">เข้าสู่ระบบ</h1>

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

        {/* 🔘 Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-2 rounded-full mb-2 hover:bg-gray-200 transition"
        >
          เข้าสู่ระบบ
        </button>

        {/* 🌐 Social Login */}
        <button className="w-full bg-[#5a5050] py-2 rounded-full mb-2 hover:bg-[#6b5b5b]">
          เข้าสู่ระบบด้วย Google
        </button>

        <button className="w-full bg-[#5a5050] py-2 rounded-full hover:bg-[#6b5b5b]">
          เข้าสู่ระบบด้วย Facebook
        </button>

        {/* 🔗 Register */}
        <p className="text-center text-sm mt-3">
          ยังไม่มีบัญชี?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            สมัครสมาชิก
          </span>
        </p>
      </div>
    </div>
  )
}