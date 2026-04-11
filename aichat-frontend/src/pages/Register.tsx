import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/api"

export default function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", {
        username,
        email,
        password
      })

      alert("สมัครสำเร็จ")
      navigate("/login")
    } catch {
      alert("สมัครไม่สำเร็จ")
    }
  }

  return (
    <div className="min-h-screen bg-[#5b4f4f] flex items-center justify-center text-white">
      <div className="bg-[#3b3434] p-6 rounded-2xl w-[300px] shadow-lg">
        <h1 className="text-center text-lg mb-4">สมัครสมาชิก</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 rounded mb-3 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded mb-3 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded mb-3 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-white text-black py-2 rounded-full"
        >
          สมัครสมาชิก
        </button>

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