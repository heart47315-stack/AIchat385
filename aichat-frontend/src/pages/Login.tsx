import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/api"

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      navigate("/")
    } catch (err) {
      alert("เข้าสู่ระบบไม่สำเร็จ")
    }
  }

  return (
    <div className="min-h-screen bg-[#5b4f4f] flex items-center justify-center text-white">
      <div className="bg-[#3b3434] p-6 rounded-2xl w-[300px] shadow-lg">
        <h1 className="text-center text-lg mb-4">เข้าสู่ระบบ</h1>

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
          onClick={handleLogin}
          className="w-full bg-white text-black py-2 rounded-full"
        >
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  )
}