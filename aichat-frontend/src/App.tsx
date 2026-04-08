import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import CreateCharacter from "./pages/CreateCharacter"
import Character from "./pages/Character"
import Login from "./pages/Login"
import Register from "./pages/Register"

import BottomNav from "./components/BottomNav"

export default function App() {
  return (
    <BrowserRouter>
      {/* ให้มี padding ด้านล่างเผื่อ BottomNav */}
      <div className="pb-20">
        <Routes>
          {/* 🏠 หน้าแรก */}
          <Route path="/" element={<Home />} />

          {/* 💬 ห้องแชท (dynamic id) */}
          <Route path="/chat/:id" element={<Chat />} />

          {/* 👤 โปรไฟล์ */}
          <Route path="/profile" element={<Profile />} />

          {/* ➕ สร้างตัวละคร */}
          <Route path="/create" element={<CreateCharacter />} />

          {/* 🎭 หน้าตัวละคร */}
          <Route path="/character" element={<Character />} />

          {/* 🔑 เข้าสู่ระบบ */}
          <Route path="/login" element={<Login />} />

          {/* 📝 สมัครสมาชิก */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* ✅ Navigation Bar ติดด้านล่างตลอดเวลา */}
      <BottomNav />
    </BrowserRouter>
  )
}
